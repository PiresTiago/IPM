var map = null;


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

function goHome() {
  alert("OLA")
  window.location = "maps.html"
}

function openMap() {
  document.getElementById('mapid').style = ""
}

function closeMap() {
  document.getElementById('mapid').style = "display:none"
}

function switchAngle(id) {
  if (document.getElementById(id).classList.contains('fa-caret-down')) {
    document.getElementById(id).classList.add('fa-caret-up');
    document.getElementById(id).classList.remove('fa-caret-down');

  } else {
    document.getElementById(id).classList.add('fa-caret-down');
    document.getElementById(id).classList.remove('fa-caret-up');
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
function loadMyWeb(PeopleData) {
  localStorage.setItem("PeopleData", JSON.stringify(PeopleData))
  for (let i = 0; i < PeopleData.length; i++) {
    for (let j = 0; j < PeopleData[i].posts.length; j++) {
      localStorage.setItem(PeopleData[i].posts[j].imgSrc, "false")
    }
  }
}

function like(id) {

  var likeState = localStorage.getItem(id)
  console.log(likeState)

  if (likeState == "true") {
    likeState = "false";
    document.getElementById(id).removeChild(document.getElementById(id).firstChild)
    var icoLike = document.createElement('i')
    icoLike.id = id + "1"
    icoLike.className = "fa-2x far fa-heart"
    document.getElementById(id).appendChild(icoLike)
    console.log(likeState)
  }
  else {
    likeState = "true"
    document.getElementById(id).removeChild(document.getElementById(id).firstChild)
    var icoLike = document.createElement('i')
    icoLike.id = id + "1"
    icoLike.className = "fa-2x fas fa-heart text-danger"
    document.getElementById(id).appendChild(icoLike)
    console.log(likeState)
  }
  localStorage.setItem(id, likeState)
}

function displayComments(Post) {
  document.getElementById('commentsContainer').style = "background-color: #F4F4F4;position: absolute;top: 54%;left: 50%;margin-top: -158px; margin-left: -122px;width: 6.5cm;height: 6.5cm;  z-index: 10;display: block;"
  for (let i = 0; i < Post.comments.length; i++) {
    var name = document.createElement('p'),
      text = document.createElement('p'),
      divider = document.createElement('div');

    name.innerText = Post.comments[i].name
    name.className = "font-weight-bold ml-2 m-0 p-0"
    divider.className = "dropdown-divider border mt-2 mb-2 m-0 p-0"
    text.innerText = Post.comments[i].comment;
    text.className = "ml-3  m-0 p-0"
    document.getElementById('commentsContainer').appendChild(name);
    document.getElementById('commentsContainer').appendChild(text);
    document.getElementById('commentsContainer').appendChild(divider);
  }

}

function hideComments() {
  while (document.getElementById('commentsContainer').childNodes.length > 2) {
    document.getElementById('commentsContainer').removeChild(document.getElementById('commentsContainer').lastChild);

    document.getElementById('commentsContainer').style = "display:none"
  }
}

function toNearWeb(PeopleData) {
  localStorage.setItem("PeopleData", JSON.stringify(PeopleData));
}

function toFeed(PeopleData) {
  localStorage.setItem("PeopleData", JSON.stringify(PeopleData))
}

function toProfile(PersonData) {
  localStorage.setItem("PersonData", JSON.stringify(PersonData));
}


function loadProfile() {

  var previousPage = localStorage.getItem("return");
  localStorage.removeItem("return");
  if (previousPage != null) {
    if (previousPage == "nearWeb.html")
      document.getElementById("return").href = "nearWeb.html"
  }

  var PersonData = JSON.parse(localStorage.getItem("PersonData"))
  localStorage.removeItem("PersonData");

  document.getElementById('nameProfile').innerText = PersonData.name;
  document.getElementById("ageProfile").innerText = PersonData.age;
  document.getElementById("imgProfile").src = PersonData.imgProfile;

  for (let i = 0; i < PersonData.posts.length; i++) {
    var divContainer = document.createElement('div'),
      divCard = document.createElement('div'),
      divRow = document.createElement('div'),
      divCol1 = document.createElement('div'),
      divCol2 = document.createElement('div'),
      divCol3 = document.createElement('div'),
      imgProfile = document.createElement('img'),
      spanName = document.createElement('span'),
      spanTime = document.createElement('span'),
      imgPost = document.createElement('img'),
      location = document.createElement('p'),
      divBody = document.createElement('div'),
      buttonLike = document.createElement('button'),
      buttonComments = document.createElement('button'),
      icoLike = document.createElement('i'),
      icoComments = document.createElement('i');

    divContainer.className = "row justify-content-center mb-4"
    divCard.className = "card col-10 m-0"
    divRow.className = "row justify-content-center"
    divCol1.className = "col-3 m-0 p-0 text-center"
    divCol2.className = "col-7 mt-2 m-0 p-0 text-left"
    divCol3.className = "col-2 mt-2 m-0 p-0 text-center text-muted"

    imgProfile.className = "rounded-circle mt-1 mb-1 p-0"
    imgProfile.style = "width:35px"
    imgProfile.src = PersonData.imgProfile

    spanName.innerText = PersonData.name
    spanName.style = "font-size:17px;"
    spanTime.style = "font-size:17px;"
    spanTime.innerText = PersonData.posts[i].timeOfPost


    imgPost.className = "card-img-top"
    imgPost.src = PersonData.posts[i].imgSrc
    location.className = "mt-1 font-weight-bold"
    location.innerText = PersonData.posts[i].location
    divBody.className = "card-body mt-1 m-0 p-1"
    buttonLike.className = "btn float-left p-0 m-0"
    buttonLike.id = PersonData.posts[i].imgSrc
    buttonComments.className = "btn float-right p-0 m-0"
    buttonComments.id = "comments"


    buttonLike.addEventListener("click", function () {
      like(PersonData.posts[i].imgSrc)
    })
    buttonComments.addEventListener("click", function () {
      displayComments(PersonData.posts[i])
    })

    //CHECK STATE OF LIKE
    var likeState = localStorage.getItem(PersonData.posts[i].imgSrc)
    if (likeState == "true")
      icoLike.className = "fa-2x fas fa-heart text-danger"
    else
      icoLike.className = "fa-2x far fa-heart"

    icoLike.id = PersonData.posts[i].imgSrc + "1"
    icoComments.className = "fa-2x far fa-comment-dots"

    divContainer.appendChild(divCard)
    divCard.appendChild(divRow)
    divRow.appendChild(divCol1)
    divCol1.appendChild(imgProfile)
    divRow.appendChild(divCol2)
    divCol2.appendChild(spanName)
    divRow.appendChild(divCol3)
    divCol3.appendChild(spanTime)

    divCard.appendChild(imgPost)
    divCard.appendChild(location)
    divCard.appendChild(divBody)
    divBody.appendChild(buttonLike)
    buttonLike.appendChild(icoLike)
    divBody.appendChild(buttonComments)
    buttonComments.appendChild(icoComments)
    document.getElementById('ProfilePosts').appendChild(divContainer)
  }

}

function loadFeed() {

  var PeopleData = JSON.parse(localStorage.getItem("PeopleData"))
  localStorage.removeItem("PeopleData");

  for (let i = 0; i < PeopleData.length; i++) {
    var divContainer = document.createElement('div'),
      divCard = document.createElement('div'),
      divRow = document.createElement('div'),
      divCol1 = document.createElement('div'),
      divCol2 = document.createElement('div'),
      divCol3 = document.createElement('div'),
      linkimg = document.createElement('a'),
      imgProfile = document.createElement('img'),
      linkName = document.createElement('a'),
      spanName = document.createElement('span'),
      spanTime = document.createElement('span'),
      imgPost = document.createElement('img'),
      location = document.createElement('p'),
      divBody = document.createElement('div'),
      buttonLike = document.createElement('button'),
      buttonComments = document.createElement('button'),
      icoLike = document.createElement('i'),
      icoComments = document.createElement('i')

    divContainer.className = "row justify-content-center mb-4"
    divCard.className = "card col-10 m-0"
    divRow.className = "row justify-content-center"
    divCol1.className = "col-3 m-0 p-0 text-center"
    divCol2.className = "col-7 mt-2 m-0 p-0 text-left"
    divCol3.className = "col-2 mt-2 m-0 p-0 text-center text-muted"

    linkimg.href = "profile.html"
    imgProfile.className = "rounded-circle mt-1 mb-1 p-0"
    imgProfile.style = "width:35px"
    imgProfile.src = PeopleData[i].imgProfile

    linkName.href = "profile.html"
    spanName.innerText = PeopleData[i].name
    spanName.style = "font-size:17px;"
    spanTime.style = "font-size:17px;"
    spanTime.innerText = PeopleData[i].posts[0].timeOfPost


    imgPost.className = "card-img-top"
    imgPost.src = PeopleData[i].posts[0].imgSrc
    location.className = "mt-1 font-weight-bold"
    location.innerText = PeopleData[i].posts[0].location
    divBody.className = "card-body mt-1 m-0 p-1"
    buttonLike.className = "btn float-left p-0 m-0"
    buttonLike.id = PeopleData[i].posts[0].imgSrc
    buttonComments.className = "btn float-right p-0 m-0"
    buttonComments.id = "comments"


    linkimg.addEventListener("click", function () {
      toProfile(getPerson(PeopleData[i].name))
    })

    linkName.addEventListener("click", function () {
      toProfile(getPerson(PeopleData[i].name))
    })

    buttonLike.addEventListener("click", function () {
      like(PeopleData[i].posts[0].imgSrc)
    })
    buttonComments.addEventListener("click", function () {
      displayComments(PeopleData[i].posts[0])
    })



    //CHECK STATE OF LIKE
    var likeState = localStorage.getItem(PeopleData[i].posts[0].imgSrc)
    if (likeState == "true")
      icoLike.className = "fa-2x fas fa-heart text-danger"
    else
      icoLike.className = "fa-2x far fa-heart"
    icoLike.id = PeopleData[i].posts[0].imgSrc + "1"
    icoComments.className = "fa-2x far fa-comment-dots"

    divContainer.appendChild(divCard)
    divCard.appendChild(divRow)
    divRow.appendChild(divCol1)
    divCol1.appendChild(linkimg)
    linkimg.appendChild(imgProfile)
    divRow.appendChild(divCol2)
    divCol2.appendChild(linkName)
    linkName.appendChild(spanName)
    divRow.appendChild(divCol3)
    divCol3.appendChild(spanTime)

    divCard.appendChild(imgPost)
    divCard.appendChild(location)
    divCard.appendChild(divBody)
    divBody.appendChild(buttonLike)
    buttonLike.appendChild(icoLike)
    divBody.appendChild(buttonComments)
    buttonComments.appendChild(icoComments)
    document.getElementById('FeedContainer').appendChild(divContainer)
  }
}

function loadNearWeb() {

  var PeopleData = JSON.parse(localStorage.getItem("PeopleData"))
  localStorage.removeItem("PeopleData");
  for (let i = 0; i < PeopleData.length; i++)
    for (let j = 0; j < PeopleData[i].posts.length; j++) {
      console.log(PeopleData[i].posts[j].location)
      if (PeopleData[i].posts[j].location == "Lisboa") {
        var divContainer = document.createElement('div'),
          divCard = document.createElement('div'),
          divRow = document.createElement('div'),
          divCol1 = document.createElement('div'),
          divCol2 = document.createElement('div'),
          divCol3 = document.createElement('div'),
          linkimg = document.createElement('a'),
          imgProfile = document.createElement('img'),
          linkName = document.createElement('a'),
          spanName = document.createElement('span'),
          spanTime = document.createElement('span'),
          imgPost = document.createElement('img'),
          location = document.createElement('p'),
          divBody = document.createElement('div'),
          buttonLike = document.createElement('button'),
          buttonComments = document.createElement('button'),
          icoLike = document.createElement('i'),
          icoComments = document.createElement('i')

        divContainer.className = "row justify-content-center mb-4"
        divCard.className = "card col-10 m-0"
        divRow.className = "row justify-content-center"
        divCol1.className = "col-3 m-0 p-0 text-center"
        divCol2.className = "col-7 mt-2 m-0 p-0 text-left"
        divCol3.className = "col-2 mt-2 m-0 p-0 text-center text-muted"

        linkimg.href = "profile.html"
        imgProfile.className = "rounded-circle mt-1 mb-1 p-0"
        imgProfile.style = "width:35px"
        imgProfile.src = PeopleData[i].imgProfile

        linkName.href = "profile.html"
        spanName.innerText = PeopleData[i].name
        spanName.style = "font-size:17px;"
        spanTime.style = "font-size:17px;"
        spanTime.innerText = PeopleData[i].posts[j].timeOfPost

        imgPost.className = "card-img-top"
        imgPost.src = PeopleData[i].posts[j].imgSrc
        location.className = "mt-1 font-weight-bold"
        location.innerText = PeopleData[i].posts[j].location
        divBody.className = "card-body mt-1 m-0 p-1"
        buttonLike.className = "btn float-left p-0 m-0"
        buttonLike.id = PeopleData[i].posts[j].imgSrc
        buttonComments.className = "btn float-right p-0 m-0"
        buttonComments.id = "comments"


        linkimg.addEventListener("click", function () {
          toProfile(getPerson(PeopleData[i].name))
        })

        linkName.addEventListener("click", function () {
          toProfile(getPerson(PeopleData[i].name))
        })

        buttonLike.addEventListener("click", function () {
          like(PeopleData[i].posts[j].imgSrc)
        })
        buttonComments.addEventListener("click", function () {
          displayComments(PeopleData[i].posts[j])
        })

        //CHECK STATE OF LIKE
        var likeState = localStorage.getItem(PeopleData[i].posts[j].imgSrc)
        if (likeState == "true")
          icoLike.className = "fa-2x fas fa-heart text-danger"
        else
          icoLike.className = "fa-2x far fa-heart"
        icoLike.id = PeopleData[i].posts[j].imgSrc + "1"
        icoComments.className = "fa-2x far fa-comment-dots"

        divContainer.appendChild(divCard)
        divCard.appendChild(divRow)
        divRow.appendChild(divCol1)
        divCol1.appendChild(linkimg)
        linkimg.appendChild(imgProfile)
        divRow.appendChild(divCol2)
        divCol2.appendChild(linkName)
        linkName.appendChild(spanName)
        divRow.appendChild(divCol3)
        divCol3.appendChild(spanTime)

        divCard.appendChild(imgPost)
        divCard.appendChild(location)
        divCard.appendChild(divBody)
        divBody.appendChild(buttonLike)
        buttonLike.appendChild(icoLike)
        divBody.appendChild(buttonComments)
        buttonComments.appendChild(icoComments)
        document.getElementById('nearWebContainer').appendChild(divContainer)
      }
    }
}


