let lightMode = document.getElementById("icon");
let bckImage= document.getElementById("bg-image");

lightMode.addEventListener("click",function(){
    if (document.body.style.backgroundColor === "black"){

        document.body.style.backgroundColor= "white";
        lightMode.innerHTML =`<i class="fas fa-moon"></i>`
        bckImage.innerHTML=`<img src="img/bg-desktop-light.jpg" alt="">`

    }
    else{
        document.body.style.backgroundColor= "black";
        lightMode.innerHTML =`<i class="fas fa-sun"></i>`
        bckImage.innerHTML=`<img src="img/bg-desktop-dark.jpg" alt="">`
        
    }
    
    

})