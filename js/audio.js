let A,mg,on=true;
function ac(){if(!A){A=new(window.AudioContext||window.webkitAudioContext)();mg=A.createGain();mg.gain.value=.5;mg.connect(A.destination);music()}if(A.state=='suspended')A.resume()}
function note(f,t,d,v=.1,ty='sine'){const o=A.createOscillator(),g=A.createGain();o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+.04);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(mg);o.start(t);o.stop(t+d)}
function music(){const ch=[[261.6,329.6,392,523.3],[220,261.6,329.6,440],[174.6,220,261.6,349.2],[196,246.9,293.7,392]];let b=0;(function l(){const t=A.currentTime+.1,c=ch[b%4];c.forEach((f,i)=>{note(f,t+i*.5,2.2,.07);note(f*2,t+i*.5+.25,1.5,.04)});note(c[0]/2,t,3.5,.1,'triangle');b++;setTimeout(l,2000)})()}
function chime(){if(!A)return;const t=A.currentTime;[784,988,1318,1568].forEach((f,i)=>note(f,t+i*.07,1,.09))}
function togg(){on=!on;mg.gain.value=on?.5:0;$('mute').textContent=on?'🔊':'🔇'}
