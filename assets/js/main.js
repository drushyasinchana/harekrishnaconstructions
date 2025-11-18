
/* assets/js/main.js */
/* Save this file as assets/js/main.js */
(function(){
  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle && navToggle.addEventListener('click', ()=>{
    if(mainNav.style.display === 'block') mainNav.style.display = '';
    else mainNav.style.display = 'block';
  });

  // Contact form submission (uses fetch to Formspree or similar)
  const form = document.getElementById('contact-form');
  const overlay = document.getElementById('popup-overlay');
  const popup = document.getElementById('thank-you-popup');
  const closeBtn = document.getElementById('close-popup');

  function showPopup(){ if(overlay && popup){ overlay.style.display='block'; popup.style.display='block'; }}
  function hidePopup(){ if(overlay && popup){ overlay.style.display='none'; popup.style.display='none'; }}

  if(form){
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      const data = new FormData(form);
      try{
        const res = await fetch(form.action, {method:'POST', body:data, headers:{'Accept':'application/json'}});
        if(res.ok){ form.reset(); showPopup(); setTimeout(hidePopup, 3000); }
        else{ alert('There was a problem submitting the form.'); }
      }catch(err){ console.error(err); alert('Submission failed.'); }
    });
  }

  if(closeBtn) closeBtn.addEventListener('click', hidePopup);
  if(overlay) overlay.addEventListener('click', hidePopup);

  // Set current year in footer
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();
})();
