var typed = new Typed(".multipletext", {
    strings: ["Front end developer","Fresher","Web Developer", "Programmer", "Web Designer",'UI/UX Desginer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});







function download() {
  var choice = confirm("Download resume ?");
  if (choice == true) {
    document.getElementById("download").click()
  } else {
   
  }
}

  