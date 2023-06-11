((app) => {
  var cards, card, index, settings, body;

  var iconClassNames = {
    action: "flaticon-exclamation-mark-in-a-circle",
    individual: "flaticon-user",
    group: "flaticon-group",
  };

  function init() {
    body = document.body;

    card = {
      element: document.getElementById("card"),
      bg: document.getElementById("card-title"),
      title: document.getElementById("title"),
      content: document.getElementById("content"),
      options: document.getElementById("options"),
      cardType: document.getElementById("card-type-icon"),
    };

    if (card.content) {
      card.content.innerHTML =
        "Brödraskapets resa börjar här. Kommer vi att klara färden, eller kommer vi att bli stoppade av naturens nycker och onda krafter?";
    }

    let tempCards = getCache("cards");

    if (tempCards) {
      cards = tempCards;
    } else {
      var oReq = new XMLHttpRequest();
      oReq.onload = function (e) {
        cards = e.target.response;

        if (cards) {
          cards.forest = shuffle(cards.forest);
          cards.water = shuffle(cards.water);
          cards.mountain = shuffle(cards.mountain);
          cards.city = shuffle(cards.city);
          cards.shortcut = shuffle(cards.shortcut);
          setCache("cards", cards);
        }
      };

      oReq.open("GET", "/fellowship/api/cards.json", true);
      oReq.responseType = "json";
      oReq.send();
    }

    let tempIndex = getCache("gameIndex");
    let tempCategory = getCache("currentCategory");

    if (tempIndex && tempCategory) {
      index = tempIndex;
      getCard(getCache("currentCategory"));
    } else {
      index = {
        forest: 0,
        water: 0,
        mountain: 0,
        city: 0,
        shortcut: 0,
      };
      setCache("gameIndex", index);
    }

    settings = {
      water: {
        title: "De förrädiska våtmarkerna",
        description:
          "Vi befinner oss just nu på värdshuset Den Drunknade Bävern, strax söder om de förrädiska våtmarkerna. Vår grupp består av representanter från flera av Mittenjordens folk, alla med olika förmågor och skostorlekar. Här börjar vi vårt uppdrag, och vi skall börja vår färd på flotte genom det farliga träsket och den vilda floden.\n\n(Dra nästa kort)",
      },
      city: {
        title: "Ökenstaden",
        description:
          "Vi snubblar äntligen ut ur den förbannade skogen, lättade över att åter skåda civlisation. Nåja. Innanför stadens murar väntar trånga gränder, skurkar, försäljare, frälsningssoldater och annat löst folk. Här gäller det att vara på sin vakt, och att inte lita på någon.\n\n(Dra nästa kort)",
      },
      mountain: {
        title: "Domedagsberget",
        description:
          "Framför oss tornar ett enormt bergsmassiv upp. På andra sidan är vårt mål: den vita staden. Landskapet är kargt, och på topparna ligger tjocka snötäcken året runt. Bergen sägs vara fulla av farliga varelser, så det är bäst att vi håller våra klingor och sinnen skarpa..\n\n(Dra nästa kort)",
      },
      forest: {
        title: "Den tätaste av skogar",
        description:
          "Vi lämnar träsk, flod och sumpgas för att fortsätta vår resa genom en tät och mörk skog. Stigarna är små och igenväxta, djurlivet oförutsägbart, och om vi inte håller ihop är det lätt att gå vilse.\n\n(Dra nästa kort)",
      },
      shortcut: {
        title: "Är vi verkligen säkra på det här..?",
        description:
          "I ett desperat försök att spara tid och resurser väljer vi vägen genom bergspasset. Vi kommer in på farleden och överväldigas direkt av doften av gammalt blod, bränt kött och ånger.\n\n(Dra nästa kort)",
      },
    };
  }

  function getCard(category, newCard) {
    setBackgroundImage(category);

    if (index[category] === 0) {
      clearCard();
      card.title.innerHTML = settings[category].title;
      card.content.innerHTML = settings[category].description;
      index[category]++;
      return;
    }

    if (newCard) {
      index[category]++;
    }

    var temp = cards[category][index[category] % cards[category].length];

    if (temp) {
      console.log("KORT: " + temp.id);

      setCache("gameIndex", index);
      setCache("currentCategory", category);

      card.bg.className = "bg " + temp.class;
      card.cardType.className = iconClassNames[temp.class];

      card.title.innerHTML = temp.title;
      card.content.innerHTML = temp.content;

      var opts = "";

      for (var i = 0; i < temp.options.length; i++) {
        opts += "<li>" + temp.options[i] + "</li>";
      }

      card.options.innerHTML = opts;
    }

    card.element.scrollIntoView();
  }

  function clearCard() {
    card.title.innerHTML = card.content.innerHTML = card.options.innerHTML = "";
    card.bg.className = "white-bg beige empty-card";
    card.cardType.className = "";
  }

  function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;
  }

  function setCache(key, data) {
    if (typeof data === "string") {
      window.localStorage.setItem(key, data);
    } else {
      window.localStorage.setItem(key, JSON.stringify(data));
    }
  }

  function getCache(key) {
    try {
      let parsedCache = JSON.parse(window.localStorage.getItem(key));
      return parsedCache;
    } catch (err) {
      return window.localStorage.getItem(key);
    }
  }

  function resetCache() {
    window.localStorage.clear();
    location.reload();
  }

  function setBackgroundImage(category) {
    if (category) {
      body.style.backgroundImage = 'url("img/' + category + '.jpg")';
    }
  }

  app.index = {
    init: init,
    getCard: getCard,
    clearCard: clearCard,
    resetCache: resetCache,
  };
})(window.app || (window.app = {}));
