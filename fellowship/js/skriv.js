(app => {

    let idView;
    let cardId;
    let state;

    const states = {
        create: 'create',
        edit: 'edit'
    }

    function init() {
        document.getElementById("id-field").addEventListener('keydown', (event) => {
            if( event.which == 13) {
                editCard();
            }
        });
        idView = document.getElementById("id-view");
        cardId = document.getElementById("card-id");
        state = states.create;
    }

    function createCard(event) {
        
        event.preventDefault();

        let elements = document.forms['card-form'].elements;
        let optionELements = document.getElementsByClassName('option');

        let card = {};
        for(var i = 0 ; i < elements.length ; i++){
            var item = elements.item(i);
            if (item.value.trim()) {
                card[item.name] = item.value.trim();
            }
        }

        let opts = [];
        for(var i = 0 ; i < optionELements.length ; i++){
            var item = optionELements[i];
            if (item.value && item.value.trim()) {
                opts.push(item.value.trim());
            }
        }

        card.options = opts;
        card.id = cardId.innerHTML;

        console.log(card.id)

        var oReq = new XMLHttpRequest();

        oReq.onload = function (e) {

            let card = e.target.response;

            if (card) {
                alert('Kortet är nu sparat!')
                closeEditing();
            }
            else {
                alert('Det gick inte att spara. Se till att alla fält är korrekt ifyllda')
                console.log("Något gick fel.")
            }
        };

        let method = (state == states.create) ? 'POST' : 'PUT';

        oReq.open(method, '/api/card', true);
        oReq.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        oReq.responseType = 'json';
        oReq.send(JSON.stringify(card));
    }

    function editCard() {

        let id = document.getElementById("id-field").value;
        let oReq = new XMLHttpRequest();

        idView.className = 'show';

        oReq.onload = function (e) {

            clearForm();
            
            let card = e.target.response;

            if (card) {
                cardId.innerHTML = id;
                state = states.edit;
            }
            else {
                cardId.innerHTML = '';
                state = states.create;
                return;
            }

            let elements = document.forms['card-form'].elements;

            elements[0].value = card.category;
            elements[1].value = card.class;
            elements[2].value = card.title;
            elements[3].value = card.content;

            if (card.options.length) {
                elements[4].value = card.options[0];
                for (let i = 1; i < card.options.length; i++) {
                    addOption(null, card.options[i]);
                }
            }
        }

        oReq.open('GET', '/api/card/' + id, true);
        oReq.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        oReq.responseType = 'json';
        oReq.send();
    }

    function addOption(event, content) {
        if (event) {
            event.preventDefault();
        }
        let optionsElement = document.getElementById('options');
        let newNode = document.createElement('TEXTAREA');

        newNode.value = content;

        newNode.setAttribute('rows', '3');
        newNode.setAttribute('class', 'option');

        optionsElement.appendChild(newNode);
    }

    function closeEditing() {
        state = states.create;
        idView.className = '';
        clearForm();
    }

    function clearForm() {

        document.getElementById("id-field").value = '';

        let elements = document.forms['card-form'].elements;
        let optionElements = document.getElementsByClassName('option');
        
        for (let i = 0; i < elements.length; i++){
            elements.item(i).value = '';
        }

        for (let i = 1; i < optionElements.length; i++) {
            optionElements[0].parentElement.removeChild(optionElements[i]);
        }
    }

    app.skriv = {
        init: init,
        createCard: createCard,
        addOption: addOption,
        editCard: editCard,
        closeEditing: closeEditing
    };

})(window.app || (window.app = {}));