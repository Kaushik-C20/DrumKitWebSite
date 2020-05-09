for(var x=0;x<document.querySelectorAll(".drum").length;x++){
  document.querySelectorAll(".drum")[x].addEventListener("click",function(){
    var char=this.innerHTML;
    makeSound(char);
    respond(this);
  });
}

document.addEventListener("keydown",function(e){
  makeSound(e.key);
  var btnitem=document.querySelector("."+e.key);
  respond(btnitem);
});

function respond(x){
  x.classList.add("pressed");
  setTimeout(function(){
    x.classList.remove("pressed");
  },100);
}

function makeSound(x){
  switch(x){
    case "w":
    var tom1=new Audio("tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2=new Audio("tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3=new Audio("tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4=new Audio("tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var snare=new Audio("snare.mp3");
    snare.play();
    break;
    case "k":
    var crash=new Audio("crash.mp3");
    crash.play();
    break;
    case "l":
    var kick=new Audio("kick-bass.mp3")
    kick.play();
    break;
    default:console.log(x);
  }
}
