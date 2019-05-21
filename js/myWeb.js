
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
    document.getElementById('commentsContainer').style = "background-color: #F4F4F4;position: absolute;top: 53.5%;left: 50%;margin-top: -140px; margin-left: -122px;width: 6.5cm;height: 6.8cm;  z-index: 10;display:block"
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

function fromNearWeb(name) {
    localStorage.setItem("return", "nearWeb.html")
    toProfile(getPerson(name))
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
    document.getElementById("about").innerText = PersonData.about;
    document.getElementById("imgProfile").src = PersonData.imgProfile;
    document.getElementById("followers").innerText = PersonData.followers;
    document.getElementById("following").innerText = PersonData.following;
    document.getElementById("numPosts").innerText = PersonData.posts.length;

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


