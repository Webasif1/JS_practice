const main = document.querySelector("main")
const cursr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(d){
  // console.log(d.x,d.y);
  cursr.style.top = `${d.y}px`
  cursr.style.left = `${d.x}px`
})
