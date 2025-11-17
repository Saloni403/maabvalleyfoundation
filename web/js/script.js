function openMenu(){
    document.querySelector(".menu").classList.toggle("open")
}

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});


let message = "Hello! I want to know more about your services."; // your custom text
    let encodedMsg = encodeURIComponent(message);
document.querySelectorAll(".whatsappbtn").forEach(whatsapp=>{
   whatsapp.style.cursor="pointer";
  whatsapp.addEventListener('click',()=>{
 window.open(`https://wa.me/919086000098?text=${encodedMsg}`, '_blank')
  })
})

document.querySelectorAll(".callbtn").forEach(call=>{
  call.style.cursor="pointer";
  call.addEventListener('click',()=>{
 window.open('tel:+919086000098', '_blank')
  })
})