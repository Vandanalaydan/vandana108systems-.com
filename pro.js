function myFunction(){

    var x = document.getElementById("myNavbar");

    if (x.className === "navbar"){
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }

}
// hiddensearch__________________________________------------------------->
const search=document.querySelector('.search')
const btn =document.querySelector('.btn')
const input =document.querySelector('.input')
   btn.addEventListener('click',()=>{search.classList.toggle('active').input.focus()})

// navbarEnd//------------------------------------------------------------------>
// ----------------------slider-----------------------------------------.----->
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showImage(index) {
  const newPosition = -index * 100 + '%';
  carousel.style.transform = 'translateX(' + newPosition + ')';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % 3;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + 3) % 3;
  showImage(currentIndex);
}

setInterval(nextImage, 3000); // Change image every 3 seconds


// --------------------------------------------------------services-------------------------------
const services = document.querySelectorAll('.service')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight/5*4

    services.forEach(service=>{
        const boxTop = service.getBoundingClientRect().top

        if(boxTop< triggerBottom){
            service.classList.add('show')
        }else{
            service.classList.remove('show')
        }
    })
}