function mouseDownMic() {
  document.getElementById("mic").classList.add('bg-danger');
}

function mouseUpMic() {
  document.getElementById("mic").classList.remove('bg-danger');
}

function getValue(e) {
  if (e.keyCode == 13) {
    var value = document.getElementById('search').value;
    console.log(value);
}
  
}

var map = L.map('mapid', {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom: 2,
  zoomControl:false
});

var bounds = [[0,0], [1173,2111]];
var image = L.imageOverlay('imagens/map.png', bounds).addTo(map);
map.fitBounds(bounds);

var tecnico = L.latLng([ 625, 1340 ]);
L.marker(tecnico).addTo(map);
map.setView( [625, 1340], 0);



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

function toLocal(page) {

  localStorage.setItem("pageData2", JSON.stringify(page));
}


function loadListofLocals() {

  var data = JSON.parse(localStorage.getItem("pageData1"));
  document.getElementById("tipoLugar").innerHTML = data[0].type;
  for (var i = 1; i < data.length; i++) {
    var f = function () {
      var divContainer = document.createElement('div');
      var divRow = document.createElement('div');
      var divCol = document.createElement('div');
      var spanName = document.createElement('span');
      var spanDist = document.createElement('span');
      var divDist = document.createElement('div');
      var divDivider = document.createElement('div');
      var link = document.createElement('a');

      divContainer.className = "container";
      divRow.className = "row m-0 p-0";
      divCol.className = "col-9 m-0 p-0 font-weight-bold d-inline-block text-truncate";
      divDist.className = "col-3 m-0 p-0";
      divDivider.className = "dropdown-divider mt-0 p-0";
      link.href = "place.html";

      if (data[i].type == "Museus") {
        link.onclick = toLocal(getMuseum(data[i].name));
      }


      else if (data[i].type == "Lojas") {
        link.onclick = toLocal(getStores(data[i].name));
      }


      spanName.textContent = data[i].name;
      spanDist.textContent = data[i].distance;

      spanDist.style = "float:right;margin-right:-12px";


      divContainer.appendChild(divRow);
      divRow.appendChild(divCol);
      divRow.appendChild(divDist);
      divDist.appendChild(spanDist);
      divCol.appendChild(link);
      link.appendChild(spanName);


      document.getElementById("main").appendChild(divContainer);
      document.getElementById("main").appendChild(divDivider);
    }();
  }

}

function loadLocal() {
  var data = JSON.parse(localStorage.getItem("pageData2"));
  console.log(data);
  document.getElementById("tipoLugar").innerHTML = data.type;
  document.getElementById("name").innerHTML = data.name;
  document.getElementById("distance").innerHTML = data.distance;
  var divContainer = document.createElement('div');

  var divDist = document.createElement('div');
  var divDivider = document.createElement('div');
  var divRow = document.createElement('div');
  var divCol = document.createElement('div');

  divContainer.className = "mt-2 h5 font-weight-bold";





}

