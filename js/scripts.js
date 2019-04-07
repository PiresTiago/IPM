function switchAngle(id) {
  if ( document.getElementById(id).classList.contains('fa-angle-down') ) {
    document.getElementById(id).classList.add('fa-angle-up');
    document.getElementById(id).classList.remove('fa-angle-down');
  } else {
    document.getElementById(id).classList.add('fa-angle-down');
    document.getElementById(id).classList.remove('fa-angle-up');
  }
}
  