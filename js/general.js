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

function switchAngle(id) {
    if (document.getElementById(id).classList.contains('fa-caret-down')) {
        document.getElementById(id).classList.add('fa-caret-up');
        document.getElementById(id).classList.remove('fa-caret-down');
    } else {
        document.getElementById(id).classList.add('fa-caret-down');
        document.getElementById(id).classList.remove('fa-caret-up');
    }
}

function closeAlert() {
    $('.alert').hide()
}

function loadMyWeb(PeopleData) {
    localStorage.setItem("PeopleData", JSON.stringify(PeopleData))
    for (let i = 0; i < PeopleData.length; i++) {
        for (let j = 0; j < PeopleData[i].posts.length; j++) {
            localStorage.setItem(PeopleData[i].posts[j].imgSrc, "false")
        }
    }
}