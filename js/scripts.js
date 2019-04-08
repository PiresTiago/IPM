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

var map = L.map('mapid', {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom: 2,
  zoomControl: false
});

var bounds = [[0, 0], [1173, 2111]];
var image = L.imageOverlay('imagens/map.png', bounds).addTo(map);
map.fitBounds(bounds);

var tecnico = L.latLng([730, 1220]);
L.marker(tecnico).addTo(map);
map.setView([730, 1220], 0);



function switchAngle(id) {
  if (document.getElementById(id).classList.contains('fa-angle-down')) {
    document.getElementById(id).classList.add('fa-angle-up');
    document.getElementById(id).classList.remove('fa-angle-down');
  } else {
    document.getElementById(id).classList.add('fa-angle-down');
    document.getElementById(id).classList.remove('fa-angle-up');
  }
}
function toListofLocals(page) {


  localStorage.setItem("pageData1", JSON.stringify(page));
}


function loadListofLocals() {

  var data = JSON.parse(localStorage.getItem("pageData1"));
  document.getElementById("tipoLugar").innerHTML = data[0].type;
  for (let i = 1; i < data.length; i++) {
    var f = function () {
      var divContainer = document.createElement('div');
      var divRowName = document.createElement('div');
      var spanDist = document.createElement('span');
      var divDivider = document.createElement('div');
      var link = document.createElement('a');

      

      divContainer.className = "container";
      divRowName.className = "row mt-0 mb-4 p-0 font-weight-bold";
      
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
      spanDist.style="position:absolute;margin: 25px 0px 0px 100px;font-weight:normal;font-size:15px"

      spanDist.innerText=data[i].distance;
      link.innerHTML = data[i].name;

      divContainer.appendChild(divRowName);
      divRowName.appendChild(spanDist);
      divRowName.appendChild(link);

      


      document.getElementById("main").appendChild(divContainer);
      document.getElementById("main").appendChild(divDivider);
    }();
  }

}

function loadLocal() {
  var data = JSON.parse(localStorage.getItem("pageData2"));
  document.getElementById("tipoLugar").innerHTML = data.type;
  document.getElementById("Localname").innerHTML = data.name;
  document.getElementById("weekdays").innerHTML = data.schedule[0].houropen+
  '-'+data.schedule[0].hourclose;

  if (data.schedule[1].houropen == null){
    document.getElementById("saturday").innerHTML = 'Fechado';
  }
  else{
    document.getElementById("saturday").innerHTML = data.schedule[1].houropen+
  '-'+data.schedule[1].hourclose;
  }
  
  if (data.schedule[2].houropen == null){
    document.getElementById("sunday").innerHTML = 'Fechado';
  }
  else{
    document.getElementById("sunday").innerHTML = data.schedule[2].houropen+
  '-'+data.schedule[2].hourclose;
  }

  if (data.tickets){
    document.getElementById("buyTicket").style= "display: block;visibility: visible;";
  }
  else{
    document.getElementById("buyTicket").style= "display: none; visibility: hidden;";
  }

  var divContainer = document.createElement('div');

  var divDist = document.createElement('div');
  var divDivider = document.createElement('div');
  var divRow = document.createElement('div');
  var divCol = document.createElement('div');

  divContainer.className = "mt-2 h5 font-weight-bold";





}

