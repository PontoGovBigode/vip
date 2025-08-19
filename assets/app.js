
// Simple autoplay slider
(function(){
  const slides = document.querySelectorAll('.slide');
  if(!slides.length) return;
  let i = 0;
  function show(n){
    slides.forEach((s,idx)=> s.classList.toggle('active', idx===n));
  }
  show(0);
  setInterval(()=>{ i = (i+1)%slides.length; show(i); }, 4500);
})();
