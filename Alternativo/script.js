const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});
/*
$(document).ready(function() {

    function toggleSidebar() {
      $(".button").toggleClass("active");
      $("main").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
    }
  
    $(".button").on("click tap", function() {
      toggleSidebar();
    });
  
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        toggleSidebar();
      }
    });
  
  });
*/

/*document.querySelector('.container').addEventListener('click',()=>{document.querySelector('.navigation').classList})*/