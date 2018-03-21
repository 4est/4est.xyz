import '../src/style.scss';


console.log("ITS WORKING! ITS WORKING!");


// document.getElementById("I").addEventListener("click", function(){
//     document.getElementById("header").classList.remove("active-page");
//     document.getElementById("about").classList.add("active-page");
// });
// document.
// document.getElementById("myBtn").addEventListener("click", function(){
//     this.innerHTML = "Hello World";
//     });


// function addActive(){
//     this.classList.remove("active-page");
//     this.classList.add("active-page");
// }

// elementsArray.forEach(el => el.addEventListener('click', addActive));

// let elm = document.getElementById('item');



document.addEventListener('click', Router);

function Router(e){
    if(e.target.parentElement.className == "menu"){
        
        var arr = document.getElementsByClassName("active-page");
        [].forEach.call(arr, el => el.classList.remove("active-page"));

        if(e.target.id === 'I'){
            document.getElementById("about").classList.add("active-page");
        } else if(e.target.id === 'II'){
            document.getElementById("xp").classList.add("active-page");
        } else if(e.target.id === 'III'){
            document.getElementById("projects").classList.add("active-page");
        } else if(e.target.id === 'IV'){
            document.getElementById("skills").classList.add("active-page");
        }
    }
  }