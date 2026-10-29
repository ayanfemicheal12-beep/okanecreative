(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('site-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});}
  var lb=document.getElementById('lightbox');
  if(lb){
    var li=lb.querySelector('img'),cb=lb.querySelector('button'),last=null;
    var close=function(){lb.classList.remove('open');if(last){last.focus();}};
    document.addEventListener('click',function(e){
      var z=e.target.closest?e.target.closest('.zoom'):null;
      if(z){last=z;var im=z.querySelector('img');li.src=im.src;li.alt=im.alt;lb.classList.add('open');cb.focus();}
      else if(e.target===lb||e.target===cb){close();}
    });
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open')){close();}});
  }
})();
