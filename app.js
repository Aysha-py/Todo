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

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(span);
}

var close =document.getElementsByClassName("close");

var i;

for (i=0; i<=close.length; i++){
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }  
    
}

function newElement(){
    var li = document.createElement('li')
    var input =document.getElementById('typing').value;
    var t = document.createTextNode (input)
    li.appendChild(t);
    if (input === ""){
        alert ("enter a to-do item")
    }
    else{
        document.getElementById("mylist").appendChild(li);
    }
    document.getElementById('typing').value = ""

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span)
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
    }

    // function countItems(){
    //     var add = document.getElementById('typing').value;
    //     var count = document.getElementById('count')
    //     if (add){
    //         var i,

    //         for (i=0; i<=add; i++){
    //             count.innerHTML = i + "items-left"
    //         }
    // }   }

         
}
