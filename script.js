/* ==========================
   Typing Animation
========================== */

const roles = [
  "Senior Software Developer",
   "Data Entry Specialist"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typing) return;

    let current = roles[roleIndex];

    if(!deleting){

        typing.textContent=current.substring(0,charIndex++);

        if(charIndex>current.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent=current.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            roleIndex=(roleIndex+1)%roles.length;

        }

    }

    setTimeout(typeEffect,deleting?40:90);

}

typeEffect();


/* ==========================
   Sticky Navbar
========================== */

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>60){

nav.style.background="#08111f";

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

}else{

nav.style.background="rgba(8,17,31,.75)";

nav.style.boxShadow="none";

}

});


/* ==========================
   Scroll Reveal
========================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

});


/* ==========================
   Dark / Light Mode
========================== 

const themeBtn=document.getElementById("theme-btn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});*/


/* ==========================
   Scroll To Top Button
========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ==========================
   Contact Form
========================== 

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}*/
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){
    menuToggle.addEventListener("click",()=>{
        navLinks.classList.toggle("active");
    });
}
