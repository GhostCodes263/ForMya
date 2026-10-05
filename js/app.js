ON[2]=()=>{mid(30);type($('paper'),LETTER.replace(/\*/g,''),40)};ON[3]=()=>mid(30);ON[8]=reason;ON[13]=startMem;ON[14]=q;ON[16]=()=>{};ON[20]=()=>{fire();rain()};
function intro(){show(0);document.querySelector('.pg').classList.remove('in');[['i1',800],['i2',3800],['i3',6800],['i4',9800]].forEach(([i,t])=>setTimeout(()=>{$(i)&&($(i).style.opacity=1);chime()},t));
const iv=setInterval(heart,250);setTimeout(()=>{clearInterval(iv);for(let i=0;i<5;i++)setTimeout(()=>mid(50),i*300)},10500);
setTimeout(()=>{if(cur==0){show(1);$('mute').style.display='block'}},13500)}
document.addEventListener('click',function f(){ac();document.removeEventListener('click',f)});
intro();
