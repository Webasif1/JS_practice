const allElem = document.querySelectorAll(".elm")


allElem.forEach(function(elem){
  elem.addEventListener("mousemove", function(dets){

    const rect = elem.getBoundingClientRect();

    const x = dets.clientX - rect.left;
    const y = dets.clientY - rect.top;

    elem.childNodes[3].style.top = y+"px"
    elem.childNodes[3].style.left = x+"px"
  });

  elem.addEventListener("mouseenter", function(){
    elem.childNodes[3].style.opacity = 1
  })

  elem.addEventListener("mouseleave", function(){
    elem.childNodes[3].style.opacity = 0
  })

})
