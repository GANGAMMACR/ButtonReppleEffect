const btnE1=document.querySelector(".btn");
btnE1.addEventListener("mouseover",(eventt)=>{
    const x=(eventt.pageX=btnE1.offsetLeft);
    const Y=(eventt.pageY=btnE1.offsetTop);

    btnE1.style.setProperty("--xPos",x+"px")
    btnE1.style.setProperty("--yPos",y+"px")

});