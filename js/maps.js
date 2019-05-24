var map = null;

function getMap() {
    var LeafIcon = L.Icon.extend({
        options: {
            iconSize: [60, 50],
            shadowSize: [50, 64],
        }
    });

    map = L.map('mapid', {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 2,
        zoomControl: false
    });

    var HereIcon = new LeafIcon({
        iconUrl: 'css/images/markerHere.png',
        shadowUrl: 'css/images/marker-shadow.png'
    })

    var bounds = [[0, 0], [1173, 2111]];
    var image = L.imageOverlay('imagens/map.png', bounds).addTo(map);
    map.fitBounds(bounds);

    var tecnico = L.latLng([625, 1340]);
    L.marker((tecnico), { icon: HereIcon }).addTo(map);
    map.setView([625, 1340], 0);

}

function openMap() {
    document.getElementById('mapid').style = ""
}

function closeMap() {
    document.getElementById('mapid').style = "display:none"
}

function search(name) {
    var attractions = getAttractionData();
    var museums = getMuseumData();
    var pharmacies = getPharmacyData();
    var restaurants = getRestaurantData();
    var stores = getStoreData();

    var object = null;

    if (getAttractionType() == name) {
        toListofLocals(getAttractionData());
        localStorage.setItem("return", "searchMap.html")
        window.location = "placesSearch.html";
        return;
    }

    if (getMuseumType() == name) {
        toListofLocals(getMuseumData());
        localStorage.setItem("return", "searchMap.html")
        window.location = "places.html";
        return;
    }

    if (getPharmacyType() == name) {
        toListofLocals(getPharmacyData());
        localStorage.setItem("return", "searchMap.html")
        window.location = "places.html";
        return;
    }

    if (getRestaurantType() == name) {
        toListofLocals(getRestaurantData());
        localStorage.setItem("return", "searchMap.html")
        window.location = "places.html";
        return;
    }

    if (getStoreType() == name) {
        toListofLocals(getStoreData());
        localStorage.setItem("return", "searchMap.html")
        window.location = "places.html";
        return;
    }

    object = getAttraction(name);
    if (object != null) {
        localStorage.setItem("pageData2", JSON.stringify(object));
        localStorage.setItem("return", "searchMap.html")
        window.location = "place.html";
        return;
    }

    object = getMuseum(name);
    if (object != null) {
        localStorage.setItem("pageData2", JSON.stringify(object));
        localStorage.setItem("return", "searchMap.html")
        window.location = "place.html";
        return;
    }

    object = getPharmacy(name);
    if (object != null) {
        localStorage.setItem("pageData2", JSON.stringify(object));
        localStorage.setItem("return", "searchMap.html")
        window.location = "place.html";
        return;
    }

    object = getRestaurant(name);
    if (object != null) {
        localStorage.setItem("pageData2", JSON.stringify(object));
        localStorage.setItem("return", "searchMap.html")
        window.location = "place.html";
        return;
    }

    object = getStore(name);
    if (object != null) {
        localStorage.setItem("pageData2", JSON.stringify(object));
        localStorage.setItem("return", "searchMap.html")
        window.location = "place.html";
        return;
    }
    if (object == null) {
        $('.alert').show()
    }

}


function toListofLocals(page) {
    localStorage.removeItem("pageData1");
    localStorage.setItem("pageData1", JSON.stringify(page));
}

function loadListofLocals() {

    var previousPage = localStorage.getItem("return");
    localStorage.removeItem("return");
    if (previousPage != null) {
        document.getElementById("return").href = previousPage;
    }

    var data = JSON.parse(localStorage.getItem("pageData1"));
    document.getElementById("tipoLugar").innerHTML = data[0].type;
    for (let i = 1; i < data.length; i++) {
        var f = function () {
            var divContainer = document.createElement('div');
            var divRow = document.createElement('div');
            var divColName = document.createElement('div');
            var divColDist = document.createElement('div');
            var divDivider = document.createElement('div');
            var link = document.createElement('a');



            divContainer.className = "container";
            divRow.className = "row m-0 pt-3 pb-3 font-weight-bold"
            divColName.className = "col-8 m-0 p-0 font-weight-bold text-truncate";
            divColDist.className = "col-4 m-0 p-0 font-weight-bold text-right";
            divDivider.className = "dropdown-divider mt-0 p-0";
            link.href = "place.html";

            if (data[0].type == "Museus") {
                link.addEventListener("click", function () {
                    localStorage.setItem("pageData2", JSON.stringify(getMuseum(data[i].name)))
                })
            }

            else if (data[0].type == "Lojas") {
                link.addEventListener("click", function () {
                    localStorage.setItem("pageData2", JSON.stringify(getStore(data[i].name)))
                })
            }

            else if (data[0].type == "Atrações") {
                link.addEventListener("click", function () {
                    localStorage.setItem("pageData2", JSON.stringify(getAttraction(data[i].name)))
                })
            }

            else if (data[0].type == "Restauração") {
                link.addEventListener("click", function () {
                    localStorage.setItem("pageData2", JSON.stringify(getRestaurant(data[i].name)))
                })
            }

            else if (data[0].type == "Farmácias") {
                link.addEventListener("click", function () {
                    localStorage.setItem("pageData2", JSON.stringify(getPharmacy(data[i].name)))
                })
            }
            if (data[i].overflow) {
                var divRowName = document.createElement('div');
                var divRowDist = document.createElement('div');
                divRowDist.innerText = data[i].distance;
                divRowName.innerText = data[i].name;

                divRowName.className = "col-12 m-0 p-0 font-weight-bold";
                divRowDist.className = "col-12 mt-1 p-0 font-weight-bold text-right";

                divContainer.appendChild(link);
                link.appendChild(divRowName);
                link.appendChild(divRowDist);

                document.getElementById("main").appendChild(divContainer);
                document.getElementById("main").appendChild(divDivider);

            }
            else {
                divColDist.innerText = data[i].distance;
                divColName.innerText = data[i].name;


                divContainer.appendChild(link);
                link.appendChild(divRow);
                divRow.appendChild(divColName);
                divRow.appendChild(divColDist);

                document.getElementById("main").appendChild(divContainer);
                document.getElementById("main").appendChild(divDivider);
            }
        }();
    }

}


function loadLocal() {

    var previousPage = localStorage.getItem("return");
    localStorage.removeItem("return");

    if (previousPage != null) {
        document.getElementById("return").href = previousPage;
    }

    var data = JSON.parse(localStorage.getItem("pageData2"));
    console.log(data);
    if (data.overflow) {
        //font-size:18px CABEM TODOS
        document.getElementById("Localname").style = "width:88%;height:30px; float:right;font-size:20px;"
    }
    document.getElementById("tipoLugar").textContent = data.type;
    document.getElementById("Localname").textContent = data.name;
    document.getElementById("weekdays").textContent = data.schedule[0].houropen +
        '-' + data.schedule[0].hourclose;

    if (data.schedule[1].houropen == null) {
        document.getElementById("saturday").textContent = 'Fechado';
    }
    else {
        document.getElementById("saturday").textContent = data.schedule[1].houropen +
            '-' + data.schedule[1].hourclose;
    }

    if (data.schedule[2].houropen == null) {
        document.getElementById("sunday").textContent = 'Fechado';
    }
    else {
        document.getElementById("sunday").textContent = data.schedule[2].houropen +
            '-' + data.schedule[2].hourclose;
    }

    document.getElementById("location").innerText = data.location;

    if (data.tickets) {
        var link = document.createElement('a'),
            divider = document.createElement('div');

        divider.className = "dropdown-divider mt-2 p-0 border"

        link.className = "bg-info rounded m-0 p-2 col-10 text-light text-center"

        link.style = "font-size: 15px;";
        link.innerText = "Comprar Bilhete(s)";

        link.href = "buyTicket.html"

        localStorage.setItem("LocalName", data.name);
        document.getElementById("divider").appendChild(divider);
        document.getElementById("Buttons").appendChild(link);
    }
}

//BUY TICKETS

function increaseTickets(buttonName) {

    if (document.getElementsByTagName('input')[0].value != "") {
        makeButtonActive();
    }
    if (buttonName == "kidButton") {
        KidTickets++;
        if (KidTickets == 11) {
            showWarningLimit(buttonName, KidTickets);
        }
        document.getElementById('kid').innerText = KidTickets;
        document.getElementById('kid0').disabled = false;

    }
    else {
        AdultTickets++;
        if (AdultTickets == 11) {
            showWarningLimit(buttonName, AdultTickets);
        }
        document.getElementById('adult').innerText = AdultTickets;
        document.getElementById('adult0').disabled = false;
    }
    TotalPrice = (AdultTickets * 3) + (KidTickets * 1.5);
    document.getElementById('tmpTotal').innerText = TotalPrice + '€'
}

function decreaseTickets(buttonName) {
    if (buttonName == "kidButton") {
        KidTickets--;
        document.getElementById('kid').innerText = KidTickets;
        if (KidTickets == 0) {
            document.getElementById('kid0').disabled = true;
        }
    }
    else {
        AdultTickets--;
        document.getElementById('adult').innerText = AdultTickets;
        if (AdultTickets == 0) {
            document.getElementById('adult0').disabled = true;
        }
    }
    TotalPrice = (AdultTickets * 3) + (KidTickets * 1.5);
    document.getElementById('tmpTotal').innerText = TotalPrice + '€'
    if (AdultTickets == 0 && KidTickets == 0) {
        document.getElementById('nextBtn').disabled = true;
    }
}

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
        if (AdultTickets == 0 && KidTickets == 0) {
            document.getElementById('nextBtn').disabled = true;
        }
        else
            document.getElementById('nextBtn').disabled = false;
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Confirmar";
    } else {
        document.getElementById("nextBtn").innerHTML = "Continuar";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {

    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");

    if (currentTab == 0) {
        if (AdultTickets != 0) {
            if (AdultTickets == 1) {
                document.getElementById('NumAdults').innerText = '1x Bilhete Adulto'
            }
            else {
                document.getElementById('NumAdults').innerText = AdultTickets + 'x Bilhetes Adulto'
            }
        }

        if (KidTickets != 0) {
            if (KidTickets == 1) {
                document.getElementById('NumKids').innerText = '1x Bilhete Criança'
            }
            else {
                document.getElementById('NumKids').innerText = KidTickets + 'x Bilhetes Criança'
            }
        }

        if (KidTickets == 0 || AdultTickets == 0) {
            document.getElementById('nameLocal').className = "row m-0 p-0 justify-content-center mb-5"
        }
        else {
            document.getElementById('nameLocal').className = "row m-0 p-0 justify-content-center mb-4"
        }

        document.getElementById('total').innerText = 'TOTAL:' + TotalPrice + '€'
    }

    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:

    if ((currentTab == 2 || currentTab == 3 || currentTab == 4) && n > 0) {
        currentTab = 5
        i = 5
    }

    else if ((currentTab == 3 || currentTab == 4 || currentTab == 5) && n < 0) {
        currentTab = 1;
        i = 1
    }

    else if (currentTab == 1 && document.getElementById('card').checked && n > 0) {
        currentTab = 3
        i = 3
    }

    else if (currentTab == 1 && document.getElementById('mbway').checked && n > 0) {
        currentTab = 4
        i = 4
    }

    else {
        currentTab = currentTab + n;
        if (n == -1) {
            i--;
        }
        else {
            i++;
        }

    }
    if (currentTab == 1) {
        document.getElementById('nextBtn').disabled = true;
    }
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        confirmationPage()
        n = 2
        i = 2
    }
    else {
        // Otherwise, display the correct tab:
        showTab(currentTab);
    }
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}


function showWarning() {

    var yes = document.createElement('a'),
        no = document.createElement('a'),
        container = document.createElement('div'),
        warningText = document.createElement('div'),
        buttons = document.createElement('div');

    container.className = "position-absolute bg-light font-weight-bold text-center rounded-lg"
    container.style = "width:230px;height:150px; margin:-160px 0px 0px 0px; border-style:solid;border-width:3px;z-index:10"
    container.id = "warningDIV";

    warningText.className = "mt-3"
    warningText.innerText = "TEM A CERTEZA QUE DESEJA CANCELAR?"

    buttons.className = "position-absolute"
    buttons.style = "bottom:5px"

    yes.className = "border-0 btn btn-primary btn-sm p-3 pl-4 pr-4 bg-danger text-center rounded text-light"
    yes.style = "margin-left:55px"
    yes.innerText = "SIM"
    yes.rel = "external"
    yes.addEventListener("click", function () {
        exitPage();
    })

    no.className = "border-0 btn btn-primary btn-sm p-3 pl-4 pr-4 ml-2 bg-secondary text-center rounded text-light"
    no.innerText = "NÃO"
    no.rel = "external"
    no.addEventListener("click", function () {
        hideWarning();
    })

    buttons.appendChild(no);
    buttons.appendChild(yes);
    container.appendChild(warningText);
    container.appendChild(buttons);
    document.getElementsByClassName('tab')[i].appendChild(container);
}

function showWarningLimit(buttonName, tickets) {

    var result;
    var yes = document.createElement('a'),
        no = document.createElement('a'),
        container = document.createElement('div'),
        warningText = document.createElement('div'),
        buttons = document.createElement('div');

    container.className = "position-absolute bg-light font-weight-bold text-center rounded-lg"
    container.style = "width:230px;height:160px; margin:-160px 0px 0px 0px; border-style:solid;border-width:3px;z-index:10"
    container.id = "warningDIV";

    warningText.className = "mt-3"
    if (buttonName == 'kidButton') {
        warningText.innerText = "TEM A CERTEZA QUE DESEJA COMPRAR MAIS DE 10 BILHETES DE CRIANÇA?";
    } else {
        warningText.innerText = "TEM A CERTEZA QUE DESEJA COMPRAR MAIS DE 10 BILHETES DE ADULTO?";
    }

    buttons.className = "position-absolute"
    buttons.style = "bottom:5px"

    no.className = "border-0 btn btn-primary btn-sm p-3 pl-4 pr-4 ml-2 bg-secondary text-center rounded text-light"
    no.innerText = "NÃO"
    no.rel = "external"
    no.addEventListener("click", function () {
        hideWarning();
        decreaseTickets(buttonName);
    })

    yes.className = "border-0 btn btn-primary btn-sm p-3 pl-4 pr-4 bg-danger text-center rounded text-light"
    yes.style = "margin-left:55px"
    yes.innerText = "SIM"
    yes.rel = "external"
    yes.addEventListener("click", function () {
        hideWarning();
    })

    buttons.appendChild(no);
    buttons.appendChild(yes);
    container.appendChild(warningText);
    container.appendChild(buttons);
    document.getElementsByClassName('tab')[i].appendChild(container);
}

function exitPage() {
    window.location = "./place.html"
}

function hideWarning() {
    document.getElementById('warningDIV').remove();
}

function makeButtonActive() {
    document.getElementById('nextBtn').disabled = false;
}

function buttonTab0() {
    if (AdultTickets != 0 || KidTickets != 0) {
        document.getElementById('nextBtn').disabled = false;
    }
}

function confirmationPage() {
    var divText = document.createElement('div'),
        returnToLocal = document.createElement('a'),
        //container = document.createElement('div'),
        screen = document.getElementsByTagName('screen');

    while (screen.length > 1) {
        screen[1].parentNode.removeChild(screen[1]);
    }

    //container.className = "bg-light"
    //container.style = "z-index:1;position: absolute;top: 50%;left: 50%; margin-top: -118px; margin-left: -116px;width: 6.4cm; height: 7.48cm; overflow: scroll; overflow-x: hidden;z-index: 1;scrollbar-width: none;"

    divText.innerText = "Compra Efetuada"
    divText.className = "font-weight-bold h5"
    divText.style = "margin-left:40px;margin-top:60px"

    returnToLocal.innerText = "Voltar";
    returnToLocal.className = "border-0 btn btn-primary btn-sm p-3 pl-4 pr-4 ml-4 bg-info text-center rounded text-light";
    returnToLocal.style = "left:60px; bottom:20px;position:absolute"
    returnToLocal.href = "./place.html"
    returnToLocal.rel = "external"

    //container.appendChild(divText);
    //container.appendChild(returnToLocal);
    document.getElementById('buttons').remove();

    document.getElementById('screen').appendChild(divText);
    document.getElementById('screen').appendChild(returnToLocal);
}