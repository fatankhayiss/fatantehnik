'use strict';
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>50);},{passive:true});
const hamburger=document.getElementById('hamburger');
const mobileNav=document.getElementById('mobile-nav');
hamburger.addEventListener('click',()=>{const o=mobileNav.classList.toggle('open');hamburger.classList.toggle('open',o);});
document.addEventListener('click',e=>{if(!navbar.contains(e.target)){mobileNav.classList.remove('open');hamburger.classList.remove('open');}});
mobileNav.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{mobileNav.classList.remove('open');hamburger.classList.remove('open');}));

const reveals=document.querySelectorAll('.reveal-left,.reveal-right');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
reveals.forEach(el=>obs.observe(el));

const btt=document.getElementById('back-to-top');
window.addEventListener('scroll',()=>{btt.classList.toggle('show',window.scrollY>400);},{passive:true});
btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// WhatsApp Form Handler
const waForm = document.getElementById('wa-form');
if (waForm) {
  waForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('wa-name').value.trim();
    const service = document.getElementById('wa-service').value;
    const message = document.getElementById('wa-message').value.trim();

    // TO DO: Set actual WhatsApp number here
    const waNumber = '6281234567890';

    const waText = `Halo Fatan Tehnik Elektro.\n\nNama: ${name}\nJenis Service: ${service}\nPesan: ${message}`;
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;

    window.open(waUrl, '_blank');
  });
}
