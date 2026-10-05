function flip(d){d.classList.toggle('flip');chime()}
function type(el,t,sp=45,done){let i=0;(function k(){el.innerHTML=t.slice(0,i).replace(/\n/g,'<br>');if(i++<t.length)setTimeout(k,sp);else done&&done()})()}
function openEnv(){ac();const e=$('env');if(e.classList.contains('open'))return;e.classList.add('open');$('ebtn').style.display='none';mid(40);setTimeout(()=>show(2),2400)}
function openBox(){ac();$('box').classList.add('open');$('rt').style.opacity=1;setTimeout(()=>mid(60),1200)}
function dodge(e){e&&e.preventDefault();const b=$('no');b.style.position='relative';b.style.left=(Math.random()*160-80)+'px';b.style.top=(Math.random()*160-80)+'px'}
let ri=0;function reason(){$('rs').textContent=REASONS[ri++%REASONS.length];chime();heart()}
let m=0;function meter(){m=Math.min(100,m+10);$('bf').style.width=m+'%';$('mt').textContent=m<100?m+'%':'∞ It never ends. I love you infinity 💞';chime();heart();if(m==100)mid(60)}
let wi=0;function wish(){$('wt').textContent=WISHES[wi++%WISHES.length];chime();stars()}
function days(v){const n=Math.floor((Date.now()-new Date(v))/864e5);$('days').textContent=n+' days';$('dl').textContent='…and every single one with you was worth it. 💕';mid(30)}
let first=null,lock=false,pairs=0;
function mem(d){if(lock||d.classList.contains('flip'))return;d.classList.add('flip');chime();if(!first){first=d;return}
 if(first.dataset.k==d.dataset.k){pairs++;first=null;mid(10);if(pairs==4){$('mm').textContent='You matched all my hearts. You always have. 💖';mid(60)}}
 else{lock=true;const a=first;first=null;setTimeout(()=>{a.classList.remove('flip');d.classList.remove('flip');lock=false},800)}}
function startMem(){first=null;lock=false;pairs=0;const k=['💖','🌹','💍','👑'],a=[...k,...k].sort(()=>Math.random()-.5);
 $('mg').innerHTML=a.map(e=>`<div class="card mem" data-k="${e}" onclick="mem(this)"><i class="f">❓</i><i class="b">${e}</i></div>`).join('')}
let qi=0;function ans(){$('qa').textContent=QUIZ[qi].r;mid(15);chime();setTimeout(()=>{qi++;if(qi<QUIZ.length)q();else{$('qq').textContent='Perfect score. Of course it was always you.';$('qo').innerHTML='';mid(60)}},1800)}
function q(){$('qa').textContent='';$('qq').textContent=QUIZ[qi].q;$('qo').innerHTML=QUIZ[qi].o.map(o=>`<button class="opt" onclick="ans()">${o}</button>`).join('')}
