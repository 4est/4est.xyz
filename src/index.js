import '../src/style.scss';



//ROUTER
document.addEventListener('click', router);

function router(e){
    if(e.target.parentElement.className == "menu"){
        clearActives();
        if(e.target.id === 'I'){
            e.target.classList.add("active-tab");
            document.getElementById("about").classList.add("active-page");
        } else if(e.target.id === 'II'){
            e.target.classList.add("active-tab");
            document.getElementById("xp").classList.add("active-page");
        } else if(e.target.id === 'III'){
            e.target.classList.add("active-tab");
            document.getElementById("projects").classList.add("active-page");
        } else if(e.target.id === 'IV'){
            e.target.classList.add("active-tab");
            document.getElementById("skills").classList.add("active-page");
        }
    }else if(e.target.className == "home-button"){
        clearActives();
        document.getElementById("header").classList.add("active-page");
    }
}

function clearActives(){

    var tabs = document.getElementsByClassName("active-tab");
    [].forEach.call(tabs, el => el.classList.remove("active-tab"));

    var pages = document.getElementsByClassName("active-page");
    [].forEach.call(pages, el => el.classList.remove("active-page"));
}
