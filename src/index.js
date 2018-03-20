import '../src/style.scss';


console.log("ITS WORKING! ITS WORKING!");
// function about() {
//     var cols = document.getElementsByClassName("I");
//     element.classList.remove("hidden");
// }

(function() {
    var body = document.querySelector('body'),
    menu = document.querySelector('#menu'),
    menulink = document.querySelector('.menu-link');
 
     body.classList.add('js');

     menulink.addEventListener('click', function(e){
     menu.classList.toggle('active');
     e.preventDefault();
   });

})();