import '../src/style.scss';



//ROUTER
document.addEventListener('click', router);

function router(e){
    if(e.target.parentElement.className == "menu"){

        clearActives();

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

function clearActives(){
    var arr = document.getElementsByClassName("active-page");
    [].forEach.call(arr, el => el.classList.remove("active-page"));
}

//HOME BUTTON
document.getElementById("home-button").addEventListener('click',() => {
    clearActives();
    document.getElementById("header").classList.add("active-page");
});