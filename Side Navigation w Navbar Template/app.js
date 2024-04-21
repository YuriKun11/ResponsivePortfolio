function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.classList.add("sidenav-open");
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.classList.remove("sidenav-open");
  }