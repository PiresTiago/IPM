var map=null;


function mouseDownMic() {
  document.getElementById("mic").classList.add('bg-danger');
}

function mouseUpMic() {
  document.getElementById("mic").classList.remove('bg-danger');
}

function getValue(e) {
  if (e.keyCode == 13) {
    var value = document.getElementById('search').value;
  }
}

function getTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  if (minutes < 10)
    var minutes = "0" + minutes;
  var time_string = hours + ":" + minutes + " ";
  document.getElementById("time").innerHTML = time_string;
}
setInterval(getTime, 1000);

function getMap() {
  var LeafIcon = L.Icon.extend({
    options: {
       iconSize:  [60, 50],
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
  L.marker((tecnico), {icon: HereIcon}).addTo(map);
  map.setView([625, 1340], 0);

}

function openMap(){
  document.getElementById('mapid').style=""
}

function closeMap() {
  document.getElementById('mapid').style = "display:none"
}

function switchAngle(id) {
  if (document.getElementById(id).classList.contains('fa-angle-down')) {
    document.getElementById(id).classList.add('fa-angle-up');
    document.getElementById(id).classList.remove('fa-angle-down');

  } else {
    document.getElementById(id).classList.add('fa-angle-down');
    document.getElementById(id).classList.remove('fa-angle-up');
  }
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
function closeAlert() {
  $('.alert').hide()
}

function toListofLocals(page) {
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

      else if (data[0].type == "Restaurantes") {
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

  if (data.tickets) {
    var link = document.createElement('a')

    link.className="bg-info rounded mt-2 pl-3 pr-3 pb-1 pt-1 col-5 text-light text-center"

    link.style="font-size: 15px;";
    link.innerText="Comprar Bilhete(s)";

    link.href="buyTicket.html"

    localStorage.setItem("LocalName", data.name);
    document.getElementById("Buttons").appendChild(link);
  }
}
