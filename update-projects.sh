#!/usr/bin/env bash
# Build project sites and sync them into this GitHub Pages repo.
#
# Usage:
#   ./update-projects.sh              # update all projects
#   ./update-projects.sh kung yahtzee # update selected projects
#
# Works in Git Bash (Windows) and Linux/macOS bash.
# Requires: git, and per-project tools (npm/node, elm).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TMP_DIR="${ROOT}/tmp"
OWNER="fexxor"

# Fields: name|repo|branch|build|out_dir|dest
# - name:    local clone folder under tmp/
# - repo:    github.com/<owner>/<repo>
# - branch:  branch to check out
# - build:   shell command run in the clone (empty = copy only)
# - out_dir: directory inside the clone whose contents are published
# - dest:    destination folder in this repo's root
PROJECTS=(
  # Use relative base (./) so assets work under /project/ and Git Bash won't
  # rewrite absolute --base=/... into /Program Files/Git/...
  "coin-clicker|coin-clicker|main|npm ci && npx vite build --base=./|dist|coin-clicker"
  "hocus-pocus|hocus-pocus|main|npm ci && npx vite build --base=./|dist|hocus-pocus"
  "knight-fight|knight-fight|main||.|knight-fight"
  "the-fellowship|the-fellowship|main|npm install --no-save fs-extra && node build.js|build|fellowship"
  "yahtzee|yahtzee|master|mkdir -p build && npx --yes elm@latest-0.19.1 make src/Main.elm --optimize --output=build/index.html|build|yahtzee"
  "kung|kung|main|npx --yes elm@latest-0.19.1 make src/Main.elm --optimize --output=public/index.html|public|kung"
)

log() {
  printf '==> %s\n' "$*"
}

die() {
  printf 'error: %s\n' "$*" >&2
  exit 1
}

need_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "missing required command: $1"
}

# Clear dest, then copy everything from src into dest (including hidden files).
sync_dir() {
  local src="$1"
  local dest="$2"

  [ -d "$src" ] || die "build output not found: $src"

  rm -rf "$dest"
  mkdir -p "$dest"

  # Portable copy that works in Git Bash and Linux.
  if command -v rsync >/dev/null 2>&1; then
    rsync -a --delete --exclude '.git' "${src}/" "${dest}/"
  else
    # shellcheck disable=SC2035
    (
      shopt -s dotglob nullglob
      cp -R "${src}"/* "${dest}/"
    )
    rm -rf "${dest}/.git"
  fi
}

clone_or_update() {
  local name="$1"
  local repo="$2"
  local branch="$3"
  local dir="${TMP_DIR}/${name}"
  local url="git@github.com:${OWNER}/${repo}.git"

  mkdir -p "$TMP_DIR"

  if [ -d "${dir}/.git" ]; then
    log "Updating ${name} (${branch})"
    git -C "$dir" fetch origin "$branch"
    git -C "$dir" checkout "$branch"
    git -C "$dir" reset --hard "origin/${branch}"
    git -C "$dir" clean -fd
  else
    log "Cloning ${name} (${branch})"
    git clone --branch "$branch" --single-branch "$url" "$dir"
  fi
}

build_project() {
  local name="$1"
  local build="$2"
  local dir="${TMP_DIR}/${name}"

  if [ -z "$build" ]; then
    log "No build step for ${name}"
    return
  fi

  log "Building ${name}"
  (
    cd "$dir"
    # shellcheck disable=SC2086
    eval "$build"
  )

  # elm make emits a bare HTML shell; restore kung's stylesheet links.
  if [ "$name" = "kung" ]; then
    patch_kung_html "${dir}/public/index.html"
  fi
}

patch_kung_html() {
  local html="$1"
  if grep -q 'main.css' "$html"; then
    return
  fi
  node -e "
    const fs = require('fs');
    const p = process.argv[1];
    let h = fs.readFileSync(p, 'utf8');
    h = h.replace(
      '<title>Main</title>',
      '<title>Main</title>\n  <link rel=\"stylesheet\" href=\"main.css\">\n  <link rel=\"stylesheet\" href=\"mobile.css\">\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\">'
    );
    fs.writeFileSync(p, h);
  " "$html"
}

should_run() {
  local name="$1"
  shift
  if [ "$#" -eq 0 ]; then
    return 0
  fi
  local wanted
  for wanted in "$@"; do
    if [ "$wanted" = "$name" ]; then
      return 0
    fi
  done
  return 1
}

field() {
  # usage: field "a|b|c" 2  -> b
  local row="$1"
  local index="$2"
  printf '%s' "$row" | cut -d'|' -f"$index"
}

main() {
  need_cmd git

  local selected=("$@")
  local ran=0
  local row name repo branch build out_dir dest

  for row in "${PROJECTS[@]}"; do
    name="$(field "$row" 1)"
    should_run "$name" "${selected[@]+"${selected[@]}"}" || continue

    repo="$(field "$row" 2)"
    branch="$(field "$row" 3)"
    build="$(field "$row" 4)"
    out_dir="$(field "$row" 5)"
    dest="$(field "$row" 6)"

    case "$build" in
      *npm*|*npx*|*vite*|*node\ *) need_cmd npm; need_cmd node ;;
    esac

    clone_or_update "$name" "$repo" "$branch"
    build_project "$name" "$build"
    log "Syncing ${name} -> ${dest}/"
    sync_dir "${TMP_DIR}/${name}/${out_dir}" "${ROOT}/${dest}"
    ran=$((ran + 1))
  done

  if [ "$ran" -eq 0 ]; then
    die "no matching projects. Known: $(printf '%s ' "${PROJECTS[@]%%|*}")"
  fi

  log "Done. Updated ${ran} project(s). Review with git status, then commit if you want."
}

main "$@"
