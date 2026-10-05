window.PAGES=[];window.ON={};let cur=0;
const $=i=>document.getElementById(i);
function show(n){cur=Math.max(0,Math.min(PAGES.length-1,n));const s=$('stage');s.innerHTML='<section class="pg in">'+PAGES[cur]+'</section>';$('cnt').textContent=(cur+1)+' / '+PAGES.length;$('nav').style.display=cur>1?'flex':'none';chime();ON[cur]&&ON[cur]()}
function go(d){ac();if(cur==1&&d>0&&!$('env')?.classList.contains('open'))return;show(cur+d)}
