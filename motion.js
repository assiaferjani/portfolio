'use strict';
(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const fine=matchMedia('(pointer:fine)');
  const hero=document.querySelector('.hero');
  const photo=document.querySelector('.portrait-stage');
  const progress=document.querySelector('.reading-progress');

  // Reading progress + gentle parallax on the hero windows.
  let queued=false;
  function update(){
    queued=false;
    const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
    progress.style.transform=`scaleX(${max>0?y/max:0})`;
    if(!reduced.matches)photo.style.setProperty('--photo-y',`${Math.min(y*.04,22)}px`);
  }
  addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});
  addEventListener('resize',update);update();

  // Hero light follows the pointer.
  if(fine.matches)hero.addEventListener('pointermove',e=>{
    if(reduced.matches)return;
    const r=hero.getBoundingClientRect();
    hero.style.setProperty('--light-x',`${(e.clientX-r.left)/r.width*100}%`);
    hero.style.setProperty('--light-y',`${(e.clientY-r.top)/r.height*100}%`);
  });

  // Spotlight on cards (delegated, so re-rendered project cards keep working).
  if(fine.matches)document.addEventListener('pointermove',e=>{
    const card=e.target.closest?.('.project-card,.skill-card');
    if(!card)return;
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',`${e.clientX-r.left}px`);
    card.style.setProperty('--my',`${e.clientY-r.top}px`);
  },{passive:true});

  // Scroll reveal.
  const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}})},{threshold:.08});
  function observe(){
    if(reduced.matches)return;
    document.querySelectorAll('.project-card,.studies-heading,.section-heading,.about-copy,.skill-card,.journey-item,.learning-note,.contact-panel').forEach(el=>{
      if(!el.classList.contains('reveal-ready')){el.classList.add('reveal-ready');observer.observe(el)}
    });
  }
  observe();
  new MutationObserver(observe).observe(document.querySelector('#project-grid'),{childList:true});
  ['#experience-list','#education-list'].forEach(s=>new MutationObserver(observe).observe(document.querySelector(s),{childList:true}));

  // Highlight the current section in the nav.
  const nav=new IntersectionObserver(entries=>{
    for(const e of entries){if(e.isIntersecting)document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('is-current',a.hash==='#'+e.target.id))}
  },{rootMargin:'-15% 0px -50% 0px'});
  document.querySelectorAll('main section[id]').forEach(s=>nav.observe(s));

  reduced.addEventListener('change',()=>{if(reduced.matches)document.querySelectorAll('.reveal-ready').forEach(e=>e.classList.add('revealed'));update()});
})();
