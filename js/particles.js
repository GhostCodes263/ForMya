const cv=$('fx'),x=cv.getContext('2d');let ps=[];const em=['❤','♥','💕','🌹','✨'];
function rs(){cv.width=innerWidth;cv.height=innerHeight}rs();onresize=rs;
function heart(){ps.push({x:Math.random()*cv.width,y:cv.height+20,vx:(Math.random()-.5)*.6,vy:-1-Math.random()*1.6,s:14+Math.random()*22,e:em[Math.random()*3|0],a:.85,g:0})}
function burst(px,py,n){for(let i=0;i<n;i++){const a=Math.random()*6.28,v=2+Math.random()*6;ps.push({x:px,y:py,vx:Math.cos(a)*v,vy:Math.sin(a)*v,s:12+Math.random()*16,e:em[Math.random()*5|0],a:1,g:.08})}}
function mid(n){burst(innerWidth/2,innerHeight/2,n)}
function stars(){for(let i=0;i<30;i++)ps.push({x:Math.random()*cv.width,y:Math.random()*cv.height/2,vx:0,vy:.4,s:10+Math.random()*18,e:'✨',a:1,g:0})}
function fire(){for(let i=0;i<7;i++)setTimeout(()=>burst(Math.random()*cv.width,Math.random()*cv.height*.6,45),i*350)}
function rain(){for(let i=0;i<60;i++)setTimeout(()=>{ps.push({x:Math.random()*cv.width,y:-20,vx:0,vy:2+Math.random()*3,s:16+Math.random()*20,e:'🌹',a:1,g:0})},i*60)}
setInterval(()=>{if(cur>2)heart()},900);
(function loop(){x.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>p.a>.02&&p.y>-60&&p.y<cv.height+80);ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=p.g;p.a-=p.g?.012:.0015;x.globalAlpha=Math.max(p.a,0);x.font=p.s+'px serif';x.fillStyle='#ff4d6d';x.fillText(p.e,p.x,p.y)});requestAnimationFrame(loop)})();
