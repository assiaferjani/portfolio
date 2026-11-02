'use strict';
(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const hero=document.querySelector('.hero');
 const photo=document.querySelector('.portrait-stage');
 const ribbon=document.querySelector('.ribbon-track');
 const progress=document.querySelector('.reading-progress');
 let queued=false;
 function update(){queued=false;const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?y/max:0})`;if(!reduced.matches){photo.style.setProperty('--photo-y',`${Math.min(y*.035,16)}px`);ribbon.style.setProperty('--ribbon-x',`${-Math.min(Math.max(y-200,0)*.035,65)}px`)}}
 addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);update();
 if(matchMedia('(pointer:fine)').matches)hero.addEventListener('pointermove',e=>{if(reduced.matches)return;const r=hero.getBoundingClientRect();hero.style.setProperty('--light-x',`${(e.clientX-r.left)/r.width*100}%`);hero.style.setProperty('--light-y',`${(e.clientY-r.top)/r.height*100}%`)});
 const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target)}})},{threshold:.08});
 function observe(){if(reduced.matches)return;document.querySelectorAll('.project-card,.section-heading,.about-copy,.skill-card,.journey-item,.contact-panel').forEach(el=>{if(!el.classList.contains('reveal-ready')){el.classList.add('reveal-ready');observer.observe(el)}})}
 observe();new MutationObserver(observe).observe(document.querySelector('#project-grid'),{childList:true});
 const nav=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting)document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('is-current',a.hash==='#'+e.target.id))}},{rootMargin:'-15% 0px -50% 0px'});document.querySelectorAll('main section[id]').forEach(s=>nav.observe(s));
 reduced.addEventListener('change',()=>{if(reduced.matches)document.querySelectorAll('.reveal-ready').forEach(e=>e.classList.add('revealed'));update()});
})();
