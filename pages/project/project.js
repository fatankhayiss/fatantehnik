'use strict';
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',window.scrollY>50);},{passive:true});
const hamburger=document.getElementById('hamburger');
const mobileNav=document.getElementById('mobile-nav');
hamburger.addEventListener('click',()=>{const o=mobileNav.classList.toggle('open');hamburger.classList.toggle('open',o);});
document.addEventListener('click',e=>{if(!navbar.contains(e.target)){mobileNav.classList.remove('open');hamburger.classList.remove('open');}});
mobileNav.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{mobileNav.classList.remove('open');hamburger.classList.remove('open');}));
const btt=document.getElementById('back-to-top');
window.addEventListener('scroll',()=>{btt.classList.toggle('show',window.scrollY>400);},{passive:true});
btt.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Filtering
const filterBtns=document.querySelectorAll('.filter-btn');
const galleryItems=document.querySelectorAll('.gallery-item');
const noResults=document.getElementById('no-results');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    let count = 0;

    galleryItems.forEach(item => {
      const cat = item.getAttribute('data-category');
      if(filter === 'all' || cat === filter) {
        item.classList.remove('hidden');
        count++;
      } else {
        item.classList.add('hidden');
      }
    });

    noResults.style.display = count === 0 ? 'block' : 'none';
  });
});

// Modal
const modal=document.getElementById('img-modal');
const modalClose=document.getElementById('modal-close');
const modalBackdrop=document.getElementById('modal-backdrop');
const modalImg=document.getElementById('modal-img');
const modalTitle=document.getElementById('modal-title');
const modalCat=document.getElementById('modal-cat');

document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('click', () => {
    const imgEl = card.querySelector('img');
    const bgWrap = card.querySelector('.gallery-img');
    const title = card.querySelector('.gallery-title').textContent;
    const cat = card.querySelector('.gallery-cat').textContent;

    if (imgEl && imgEl.style.display !== 'none' && imgEl.getAttribute('src')) {
      modalImg.src = imgEl.src;
      modalImg.style.display = 'block';
    } else {
       // if no image, show placeholder background color
       modalImg.style.display = 'none';
       modalImg.parentElement.style.background = bgWrap.style.background;
    }

    modalTitle.textContent = title;
    modalCat.textContent = cat;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

const closeModal = () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { modalImg.src = ''; }, 400);
};

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if(e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
