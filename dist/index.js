var bl=0,io=1,Ml=2;var no=1,Sl=2,pi=3,Ti=0,Dt=1,Ut=2,mi=0,wi=1,Ai=2,so=3,ro=4,Tl=5,Oi=100,wl=101,El=102,Al=103,Cl=104,Rl=200,Pl=201,Il=202,Ll=203,tr=204,ir=205,Dl=206,Ul=207,Nl=208,Fl=209,Bl=210,Ol=211,zl=212,kl=213,Gl=214,wr=0,Er=1,Ar=2,nn=3,Cr=4,Rr=5,Pr=6,Ir=7,ao=0,Vl=1,Hl=2,Ci=0,Wl=1,Xl=2,Yl=3,ql=4,Zl=5,$l=6,Jl=7;var oo=300,on=301,ln=302,Lr=303,Dr=304,ys=306,nr=1e3,Wt=1001,sr=1002,St=1003,Kl=1004;var _s=1005;var ft=1006,Ur=1007;var Wi=1008;var gi=1009,lo=1010,co=1011,kn=1012,Nr=1013,Xi=1014,ii=1015,cn=1016,Fr=1017,Br=1018,Gn=1020,ho=35902,uo=35899,fo=1021,po=1022,Ot=1023,Rn=1026,Vn=1027,mo=1028,Or=1029,zr=1030,kr=1031;var Gr=1033,bs=33776,Ms=33777,Ss=33778,Ts=33779,Vr=35840,Hr=35841,Wr=35842,Xr=35843,Yr=36196,qr=37492,Zr=37496,$r=37808,Jr=37809,Kr=37810,Qr=37811,jr=37812,ea=37813,ta=37814,ia=37815,na=37816,sa=37817,ra=37818,aa=37819,oa=37820,la=37821,ca=36492,ha=36494,ua=36495,da=36283,fa=36284,pa=36285,ma=36286;var Ql=3200,jl=3201;var ec=0,tc=1,Ri="",Ht="srgb",sn="srgb-linear",as="linear",Je="srgb";var tn=7680;var Ka=519,ic=512,nc=513,sc=514,go=515,rc=516,ac=517,oc=518,lc=519,Qa=35044;var xo="300 es",oi=2e3,os=2001;function vo(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return  true;return  false}function ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cc(){let n=ls("canvas");return n.style.display="block",n}var jo={};function yo(...n){let e="THREE."+n.shift();console.log(e,...n);}function Pe(...n){let e="THREE."+n.shift();console.warn(e,...n);}function Be(...n){let e="THREE."+n.shift();console.error(e,...n);}function In(...n){let e=n.join(" ");e in jo||(jo[e]=true,Pe(...n));}function hc(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i();}}setTimeout(r,t);})}var Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t);}hasEventListener(e,t){let i=this._listeners;return i===void 0?false:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1);}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null;}}},Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=1234567,ns=Math.PI/180,Ln=180/Math.PI;function Hn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return (Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function We(n,e,t){return Math.max(e,Math.min(t,n))}function _o(n,e){return (n%e+e)%e}function dh(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function fh(n,e,t){return n!==e?(t-n)/(e-n):0}function ss(n,e,t){return (1-t)*n+t*e}function ph(n,e,t,i){return ss(n,e,1-Math.exp(-t*i))}function mh(n,e=1){return e-Math.abs(_o(n,e*2)-e)}function gh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yh(n,e){return n+Math.random()*(e-n)}function _h(n){return n*(.5-Math.random())}function bh(n){n!==void 0&&(el=n);let e=el+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mh(n){return n*ns}function Sh(n){return n*Ln}function Th(n){return (n&n-1)===0&&n!==0}function wh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Eh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ah(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case "XYX":n.set(a*h,l*u,l*f,a*c);break;case "YZY":n.set(l*f,a*h,l*u,a*c);break;case "ZXZ":n.set(l*u,l*f,a*h,a*c);break;case "XZX":n.set(a*h,l*g,l*p,a*c);break;case "YXY":n.set(l*p,a*h,l*g,a*c);break;case "ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s);}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ws={DEG2RAD:ns,RAD2DEG:Ln,generateUUID:Hn,clamp:We,euclideanModulo:_o,mapLinear:dh,inverseLerp:fh,lerp:ss,damp:ph,pingpong:mh,smoothstep:gh,smootherstep:xh,randInt:vh,randFloat:yh,randFloatSpread:_h,seededRandom:bh,degToRad:Mh,radToDeg:Sh,isPowerOfTwo:Th,ceilPowerOfTwo:wh,floorPowerOfTwo:Eh,setQuaternionFromProperEuler:Ah,normalize:It,denormalize:An},Ye=class n{constructor(e=0,t=0){n.prototype.isVector2=true,this.x=e,this.y=t;}get width(){return this.x}set width(e){this.x=e;}get height(){return this.y}set height(e){this.y=e;}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y;}},Xt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=true,this._x=e,this._y=t,this._z=i,this._w=s;}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==f||c!==p||h!==g){let m=l*f+c*p+h*g+u*v;m<0&&(f=-f,p=-p,g=-g,v=-v,m=-m);let d=1-a;if(m<.9995){let M=Math.acos(m),b=Math.sin(M);d=Math.sin(d*M)/b,a=Math.sin(a*M)/b,l=l*d+f*a,c=c*d+p*a,h=h*d+g*a,u=u*d+v*a;}else {l=l*d+f*a,c=c*d+p*a,h=h*d+g*a,u=u*d+v*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M;}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback();}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback();}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback();}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback();}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=true){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(o){case "XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case "YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case "ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case "ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case "YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case "XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o);}return t===true&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p;}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p;}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p;}else {let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p;}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback();}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w;}},O=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=true,this.x=e,this.y=t,this.z=i;}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z;}},Aa=new O,tl=new Xt,Ue=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=true,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c);}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],v=s[0],m=s[3],d=s[6],M=s[1],b=s[4],E=s[7],A=s[2],T=s[5],P=s[8];return r[0]=o*v+a*M+l*A,r[3]=o*m+a*b+l*T,r[6]=o*d+a*E+l*P,r[1]=c*v+h*M+u*A,r[4]=c*m+h*b+u*T,r[7]=c*d+h*E+u*P,r[2]=f*v+p*M+g*A,r[5]=f*m+p*b+g*T,r[8]=f*d+p*E+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=t*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ca.makeScale(e,t)),this}rotate(e){return this.premultiply(Ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return  false;return  true}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new Ue,il=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Ue().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,.0415551,.0556301,-0.203977,1.0569715);function Ch(){let n={enabled:true,workingColorSpace:sn,spaces:{},convert:function(s,r,o){return this.enabled===false||r===o||!r||!o||(this.spaces[r].transfer===Je&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?as:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s);},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return In("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return In("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[sn]:{primaries:e,whitePoint:i,transfer:as,toXYZ:il,fromXYZ:nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:il,fromXYZ:nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}var Xe=Ch();function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var mn,ar=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else {mn===void 0&&(mn=ls("canvas")),mn.width=e.width,mn.height=e.height;let s=mn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=mn;}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ls("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return {data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rh=0,Dn=class{constructor(e=null){this.isSource=true,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Hn(),this.data=e,this.dataReady=true,this.version=0;}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===true&&this.version++;}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ra(s[o].image)):r.push(Ra(s[o]));}else r=Ra(s);i.url=r;}return t||(e.images[this.uuid]=i),i}};function Ra(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ar.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var Ph=0,Pa=new O,Lt=class n extends Ei{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Wt,s=Wt,r=ft,o=Wi,a=Ot,l=gi,c=n.DEFAULT_ANISOTROPY,h=Ri){super(),this.isTexture=true,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Hn(),this.name="",this.source=new Dn(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=true,this.matrix=new Ue,this.generateMipmaps=true,this.premultiplyAlpha=false,this.flipY=true,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=false,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0;}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e;}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y);}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t});}clearUpdateRanges(){this.updateRanges.length=0;}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=true,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i;}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"});}transformUv(e){if(this.mapping!==oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nr:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nr:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===true&&(this.version++,this.source.needsUpdate=true);}set needsPMREMUpdate(e){e===true&&this.pmremVersion++;}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=oo;Lt.DEFAULT_ANISOTROPY=1;var pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=true,this.x=e,this.y=t,this.z=i,this.w=s;}get width(){return this.z}set width(e){this.z=e;}get height(){return this.w}set height(e){this.w=e;}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,E=(p+1)/2,A=(d+1)/2,T=(h+f)/4,P=(u+v)/4,B=(g+m)/4;return b>E&&b>A?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=P/i):E>A?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=T/s,r=B/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=B/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w;}},or=class extends Ei{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:false,internalFormat:null,minFilter:ft,depthBuffer:true,stencilBuffer:false,resolveDepthBuffer:true,resolveStencilBuffer:true,depthTexture:null,samples:0,count:1,depth:1,multiview:false},i),this.isRenderTarget=true,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=false,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Lt(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=true,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview;}_setTextureOptions(e={}){let t={minFilter:ft,generateMipmaps:false,flipY:false,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t);}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e;}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e;}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==true&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose();}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t);}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=true,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dn(s);}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"});}},fi=class extends or{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=true;}},cs=class extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=true,this.image={data:e,width:t,height:i,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Wt,this.generateMipmaps=false,this.flipY=false,this.unpackAlignment=1,this.layerUpdates=new Set;}addLayerUpdate(e){this.layerUpdates.add(e);}clearLayerUpdates(){this.layerUpdates.clear();}};var lr=class extends Lt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=true,this.image={data:e,width:t,height:i,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Wt,this.generateMipmaps=false,this.flipY=false,this.unpackAlignment=1;}};var zi=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=true,this.min=e,this.max=t;}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=false){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=false){e.updateWorldMatrix(false,false);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===true&&r!==void 0&&e.isInstancedMesh!==true)for(let o=0,a=r.count;o<a;o++)e.isMesh===true?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Us.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Us.copy(i.boundingBox)),Us.applyMatrix4(e.matrixWorld),this.union(Us);}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return  false;this.getCenter(jn),Ns.subVectors(this.max,jn),gn.subVectors(e.a,jn),xn.subVectors(e.b,jn),vn.subVectors(e.c,jn),Ii.subVectors(xn,gn),Li.subVectors(vn,xn),Ki.subVectors(gn,vn);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-Ki.z,Ki.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,Ki.z,0,-Ki.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-Ki.y,Ki.x,0];return !Ia(t,gn,xn,vn,Ns)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,gn,xn,vn,Ns))?false:(Fs.crossVectors(Ii,Li),t=[Fs.x,Fs.y,Fs.z],Ia(t,gn,xn,vn,Ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return {min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new O,new O,new O,new O,new O,new O,new O,new O],si=new O,Us=new zi,gn=new O,xn=new O,vn=new O,Ii=new O,Li=new O,Ki=new O,jn=new O,Ns=new O,Fs=new O,Qi=new O;function Ia(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);let a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),h=i.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return  false}return  true}var Ih=new zi,es=new O,La=new O,rn=class{constructor(e=new O,t=-1){this.isSphere=true,this.center=e,this.radius=t;}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ih.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);let t=es.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(es,s/i),this.radius+=s;}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===true?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(La)),this.expandByPoint(es.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return {radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yi=new O,Da=new O,Bs=new O,Di=new O,Ua=new O,Os=new O,Na=new O,Un=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t;}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Da.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Da);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Bs),a=Di.dot(this.direction),l=-Di.dot(Bs),c=Di.lengthSq(),h=Math.abs(1-o*o),u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c;}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Da).addScaledVector(Bs,f),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);let i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?false:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){Ua.subVectors(t,e),Os.subVectors(i,e),Na.crossVectors(Ua,Os);let o=this.direction.dot(Na),a;if(o>0){if(s)return null;a=1;}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let l=a*this.direction.dot(Os.crossVectors(Di,Os));if(l<0)return null;let c=a*this.direction.dot(Ua.cross(Di));if(c<0||l+c>o)return null;let h=-a*Di.dot(Na);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,f,p,g,v,m){n.prototype.isMatrix4=true,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,v,m);}set(e,t,i,s,r,o,a,l,c,h,u,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/yn.setFromMatrixColumn(e,0).length(),r=1/yn.setFromMatrixColumn(e,1).length(),o=1/yn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=o*l;}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=v+f*a,t[10]=o*l;}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l;}else if(e.order==="ZYX"){let f=o*h,p=o*u,g=a*h,v=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l;}else if(e.order==="YZX"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-v*u;}else if(e.order==="XZY"){let f=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=v*u+f;}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lh,e,Dh)}lookAt(e,t,i){let s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Ui.crossVectors(i,Gt),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Ui.crossVectors(i,Gt)),Ui.normalize(),zs.crossVectors(Gt,Ui),s[0]=Ui.x,s[4]=zs.x,s[8]=Gt.x,s[1]=Ui.y,s[5]=zs.y,s[9]=Gt.y,s[2]=Ui.z,s[6]=zs.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],d=i[14],M=i[3],b=i[7],E=i[11],A=i[15],T=s[0],P=s[4],B=s[8],S=s[12],y=s[1],I=s[5],N=s[9],V=s[13],q=s[2],F=s[6],W=s[10],$=s[14],G=s[3],ee=s[7],te=s[11],ye=s[15];return r[0]=o*T+a*y+l*q+c*G,r[4]=o*P+a*I+l*F+c*ee,r[8]=o*B+a*N+l*W+c*te,r[12]=o*S+a*V+l*$+c*ye,r[1]=h*T+u*y+f*q+p*G,r[5]=h*P+u*I+f*F+p*ee,r[9]=h*B+u*N+f*W+p*te,r[13]=h*S+u*V+f*$+p*ye,r[2]=g*T+v*y+m*q+d*G,r[6]=g*P+v*I+m*F+d*ee,r[10]=g*B+v*N+m*W+d*te,r[14]=g*S+v*V+m*$+d*ye,r[3]=M*T+b*y+E*q+A*G,r[7]=M*P+b*I+E*F+A*ee,r[11]=M*B+b*N+E*W+A*te,r[15]=M*S+b*V+E*$+A*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+t*l*p-t*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+d*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],M=u*m*c-v*f*c+v*l*p-a*m*p-u*l*d+a*f*d,b=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,E=h*v*c-g*u*c+g*a*p-o*v*p-h*a*d+o*u*d,A=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,T=t*M+i*b+s*E+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=M*P,e[1]=(v*f*r-u*m*r-v*s*p+i*m*p+u*s*d-i*f*d)*P,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*d+i*l*d)*P,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*p-i*l*p)*P,e[4]=b*P,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*P,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*p+t*l*p)*P,e[8]=E*P,e[9]=(g*u*r-h*v*r-g*i*p+t*v*p+h*i*d-t*u*d)*P,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*d+t*a*d)*P,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*P,e[12]=A*P,e[13]=(h*v*s-g*u*s+g*i*f-t*v*f-h*i*m+t*u*m)*P,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,v=o*h,m=o*u,d=a*u,M=l*c,b=l*h,E=l*u,A=i.x,T=i.y,P=i.z;return s[0]=(1-(v+d))*A,s[1]=(p+E)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(p-E)*T,s[5]=(1-(f+d))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+b)*P,s[9]=(m-M)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=yn.set(s[0],s[1],s[2]).length(),o=yn.set(s[4],s[5],s[6]).length(),a=yn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ri.copy(this);let c=1/r,h=1/o,u=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,t.setFromRotationMatrix(ri),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=oi,l=false){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s),g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===oi)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===os)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=oi,l=false){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s),g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===oi)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===os)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return  false;return  true}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},yn=new O,ri=new mt,Lh=new O(0,0,0),Dh=new O(1,1,1),Ui=new O,zs=new O,Gt=new O,sl=new mt,rl=new Xt,ti=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=true,this._x=e,this._y=t,this._z=i,this._order=s;}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback();}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback();}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback();}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback();}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=true){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case "XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case "YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case "ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case "ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case "YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case "XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t);}return this._order=t,i===true&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rl.setFromEuler(this),this.setFromQuaternion(rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order;}};ti.DEFAULT_ORDER="XYZ";var Nn=class{constructor(){this.mask=1;}set(e){this.mask=(1<<e|0)>>>0;}enable(e){this.mask|=1<<e|0;}enableAll(){this.mask=-1;}toggle(e){this.mask^=1<<e|0;}disable(e){this.mask&=~(1<<e|0);}disableAll(){this.mask=0;}test(e){return (this.mask&e.mask)!==0}isEnabled(e){return (this.mask&(1<<e|0))!==0}},Uh=0,al=new O,_n=new Xt,_i=new mt,ks=new O,ts=new O,Nh=new O,Fh=new Xt,ol=new O(1,0,0),ll=new O(0,1,0),cl=new O(0,0,1),hl={type:"added"},Bh={type:"removed"},bn={type:"childadded",child:null},Fa={type:"childremoved",child:null},Yt=class n extends Ei{constructor(){super(),this.isObject3D=true,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new O,t=new ti,i=new Xt,s=new O(1,1,1);function r(){i.setFromEuler(t,false);}function o(){t.setFromQuaternion(i,void 0,false);}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:true,enumerable:true,value:e},rotation:{configurable:true,enumerable:true,value:t},quaternion:{configurable:true,enumerable:true,value:i},scale:{configurable:true,enumerable:true,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ue}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=false,this.layers=new Nn,this.visible=true,this.castShadow=false,this.receiveShadow=false,this.frustumCulled=true,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={};}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale);}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t);}setRotationFromEuler(e){this.quaternion.setFromEuler(e,true);}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e);}setRotationFromQuaternion(e){this.quaternion.copy(e);}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(ll,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(ll,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(true,false),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(true,false),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ks.copy(e):ks.set(e,t,i);let s=this.parent;this.updateWorldMatrix(true,false),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(ts,ks,this.up):_i.lookAt(ks,ts,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),_n.setFromRotationMatrix(_i),this.quaternion.premultiply(_n.invert()));}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),bn.child=e,this.dispatchEvent(bn),bn.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(true,false),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(true,false),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(false,true),e.dispatchEvent(hl),bn.child=e,this.dispatchEvent(bn),bn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(true,false),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(true,false),this.matrixWorld.decompose(ts,e,Nh),e}getWorldScale(e){return this.updateWorldMatrix(true,false),this.matrixWorld.decompose(ts,Fh,e),e}getWorldDirection(e){this.updateWorldMatrix(true,false);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e);}traverseVisible(e){if(this.visible===false)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e);}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e));}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=true;}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===true&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=false,e=true);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e);}updateWorldMatrix(e,t){let i=this.parent;if(e===true&&i!==null&&i.updateWorldMatrix(true,false),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===true&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===true){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(false,true);}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===true&&(s.castShadow=true),this.receiveShadow===true&&(s.receiveShadow=true),this.visible===false&&(s.visible=false),this.frustumCulled===false&&(s.frustumCulled=false),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===false&&(s.matrixAutoUpdate=false),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==true&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u);}else r(e.shapes,l);}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a;}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object);}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l));}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g);}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h);}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=true){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===true)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone());}return this}};Yt.DEFAULT_UP=new O(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=true;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=true;var ai=new O,bi=new O,Ba=new O,Mi=new O,Mn=new O,Sn=new O,ul=new O,Oa=new O,za=new O,ka=new O,Ga=new pt,Va=new pt,Ha=new pt,Bi=class n{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i;}static getNormal(e,t,i,s){s.subVectors(i,t),ai.subVectors(e,t),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ai.subVectors(s,t),bi.subVectors(i,t),Ba.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(bi),l=ai.dot(Ba),c=bi.dot(bi),h=bi.dot(Ba),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?false:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ga.setScalar(0),Va.setScalar(0),Ha.setScalar(0),Ga.fromBufferAttribute(e,t),Va.fromBufferAttribute(e,i),Ha.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ga,r.x),o.addScaledVector(Va,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(e,t,i,s){return ai.subVectors(i,t),bi.subVectors(e,t),ai.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ai.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Mn.subVectors(s,i),Sn.subVectors(r,i),Oa.subVectors(e,i);let l=Mn.dot(Oa),c=Sn.dot(Oa);if(l<=0&&c<=0)return t.copy(i);za.subVectors(e,s);let h=Mn.dot(za),u=Sn.dot(za);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Mn,o);ka.subVectors(e,r);let p=Mn.dot(ka),g=Sn.dot(ka);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Sn,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ul.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(ul,a);let d=1/(m+v+f);return o=v*d,a=f*d,t.copy(i).addScaledVector(Mn,o).addScaledVector(Sn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Wa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Oe=class{constructor(e,t,i){return this.isColor=true,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s);}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Xe.workingColorSpace){if(e=_o(e,1),t=We(t,0,1),i=We(i,0,1),t===0)this.r=this.g=this.b=i;else {let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Wa(o,r,e+1/3),this.g=Wa(o,r,e),this.b=Wa(o,r,e-1/3);}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.");}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case "rgb":case "rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case "hsl":case "hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e);}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e);}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=uc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Xe.workingToColorSpace(At.copy(this),e),Math.round(We(At.r*255,0,255))*65536+Math.round(We(At.g*255,0,255))*256+Math.round(We(At.b*255,0,255))}getHexString(e=Ht){return ("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(At.copy(this),t);let i=At.r,s=At.g,r=At.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else {let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6;}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ht){Xe.workingToColorSpace(At.copy(this),e);let t=At.r,i=At.g,s=At.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Gs);let i=ss(Ni.h,Gs.h,t),s=ss(Ni.s,Gs.s,t),r=ss(Ni.l,Gs.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b;}},At=new Oe;Oe.NAMES=uc;var Oh=0,ki=class extends Ei{constructor(){super(),this.isMaterial=true,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=wi,this.side=Ti,this.vertexColors=false,this.opacity=1,this.transparent=false,this.alphaHash=false,this.blendSrc=tr,this.blendDst=ir,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=nn,this.depthTest=true,this.depthWrite=true,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tn,this.stencilZFail=tn,this.stencilZPass=tn,this.stencilWrite=false,this.clippingPlanes=null,this.clipIntersection=false,this.clipShadows=false,this.shadowSide=null,this.colorWrite=true,this.precision=null,this.polygonOffset=false,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=false,this.alphaToCoverage=false,this.premultipliedAlpha=false,this.forceSinglePass=false,this.allowOverride=true,this.visible=true,this.toneMapped=true,this.userData={},this.version=0,this._alphaTest=0;}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e;}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i;}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===true&&(i.vertexColors=true),this.opacity<1&&(i.opacity=this.opacity),this.transparent===true&&(i.transparent=true),this.blendSrc!==tr&&(i.blendSrc=this.blendSrc),this.blendDst!==ir&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nn&&(i.depthFunc=this.depthFunc),this.depthTest===false&&(i.depthTest=this.depthTest),this.depthWrite===false&&(i.depthWrite=this.depthWrite),this.colorWrite===false&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===true&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===true&&(i.polygonOffset=true),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===true&&(i.dithering=true),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===true&&(i.alphaHash=true),this.alphaToCoverage===true&&(i.alphaToCoverage=true),this.premultipliedAlpha===true&&(i.premultipliedAlpha=true),this.forceSinglePass===true&&(i.forceSinglePass=true),this.wireframe===true&&(i.wireframe=true),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===true&&(i.flatShading=true),this.visible===false&&(i.visible=false),this.toneMapped===false&&(i.toneMapped=false),this.fog===false&&(i.fog=false),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l);}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o);}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone();}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"});}set needsUpdate(e){e===true&&this.version++;}},li=class extends ki{constructor(e){super(),this.isMeshBasicMaterial=true,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=false,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=true,this.setValues(e);}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new O,Vs=new Ye,zh=0,ht=class{constructor(e,t,i=false){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=true,Object.defineProperty(this,"id",{value:zh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qa,this.updateRanges=[],this.gpuType=ii,this.version=0;}onUploadCallback(){}set needsUpdate(e){e===true&&this.version++;}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t});}clearUpdateRanges(){this.updateRanges.length=0;}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=An(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=It(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qa&&(e.usage=this.usage),e}};var hs=class extends ht{constructor(e,t,i){super(new Uint16Array(e),t,i);}};var us=class extends ht{constructor(e,t,i){super(new Uint32Array(e),t,i);}};var di=class extends ht{constructor(e,t,i){super(new Float32Array(e),t,i);}},kh=0,Qt=new mt,Xa=new Yt,Tn=new O,Vt=new zi,is=new zi,bt=new O,Bt=class n extends Ei{constructor(){super(),this.isBufferGeometry=true,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=false,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={};}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vo(e)?us:hs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i});}clearGroups(){this.groups=[];}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t;}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=true);let i=this.attributes.normal;if(i!==void 0){let r=new Ue().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=true;}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=true),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,i){return Qt.makeTranslation(e,t,i),this.applyMatrix4(Qt),this}scale(e,t,i){return Qt.makeScale(e,t,i),this.applyMatrix4(Qt),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tn).negate(),this.translate(Tn.x,Tn.y,Tn.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0);}this.setAttribute("position",new di(i,3));}else {let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0);}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=true;}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max));}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];is.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Vt.min,is.min),Vt.expandByPoint(bt),bt.addVectors(Vt.max,is.max),Vt.expandByPoint(bt)):(Vt.expandByPoint(is.min),Vt.expandByPoint(is.max));}Vt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(bt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)bt.fromBufferAttribute(a,c),l&&(Tn.fromBufferAttribute(e,c),bt.add(Tn)),s=Math.max(s,i.distanceToSquared(bt));}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===false&&this.setAttribute("tangent",new ht(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<i.count;B++)a[B]=new O,l[B]=new O;let c=new O,h=new O,u=new O,f=new Ye,p=new Ye,g=new Ye,v=new O,m=new O;function d(B,S,y){c.fromBufferAttribute(i,B),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,B),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(I),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[B].add(v),a[S].add(v),a[y].add(v),l[B].add(m),l[S].add(m),l[y].add(m));}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let B=0,S=M.length;B<S;++B){let y=M[B],I=y.start,N=y.count;for(let V=I,q=I+N;V<q;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2));}let b=new O,E=new O,A=new O,T=new O;function P(B){A.fromBufferAttribute(s,B),T.copy(A);let S=a[B];b.copy(S),b.sub(A.multiplyScalar(A.dot(S))).normalize(),E.crossVectors(T,S);let I=E.dot(l[B])<0?-1:1;o.setXYZW(B,b.x,b.y,b.z,I);}for(let B=0,S=M.length;B<S;++B){let y=M[B],I=y.start,N=y.count;for(let V=I,q=I+N;V<q;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2));}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z);}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=true;}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z);}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let d=0;d<h;d++)f[g++]=c[p++];}return new ht(f,h,u)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c);}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,i);l.push(p);}t.morphAttributes[a]=l;}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex);}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data);}let s={},r=false;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data));}h.length>0&&(s[l]=h,r=true);}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t));}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h;}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex);}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"});}},dl=new mt,ji=new Un,Hs=new rn,fl=new O,Ws=new O,Xs=new O,Ys=new O,Ya=new O,qs=new O,pl=new O,Zs=new O,Tt=class extends Yt{constructor(e=new Bt,t=new li){super(),this.isMesh=true,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets();}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r;}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ya.fromBufferAttribute(u,e),o?qs.addScaledVector(Ya,h):qs.addScaledVector(Ya.sub(t),h));}t.add(qs);}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Hs.containsPoint(ji.origin)===false&&(ji.intersectSphere(Hs,fl)===null||ji.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(dl.copy(r).invert(),ji.copy(e.ray).applyMatrix4(dl),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===false)&&this._computeIntersections(e,t,ji)));}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,A=b;E<A;E+=3){let T=a.getX(E),P=a.getX(E+1),B=a.getX(E+2);s=$s(this,d,e,i,c,h,u,T,P,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s));}}else {let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let M=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);s=$s(this,o,e,i,c,h,u,M,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s));}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,A=b;E<A;E+=3){let T=E,P=E+1,B=E+2;s=$s(this,d,e,i,c,h,u,T,P,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,t.push(s));}}else {let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let M=m,b=m+1,E=m+2;s=$s(this,o,e,i,c,h,u,M,b,E),s&&(s.faceIndex=Math.floor(m/3),t.push(s));}}}};function Gh(n,e,t,i,s,r,o,a){let l;if(e.side===Dt?l=i.intersectTriangle(o,r,s,true,a):l=i.intersectTriangle(s,r,o,e.side===Ti,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Zs);return c<t.near||c>t.far?null:{distance:c,point:Zs.clone(),object:n}}function $s(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ws),n.getVertexPosition(l,Xs),n.getVertexPosition(c,Ys);let h=Gh(n,e,t,i,Ws,Xs,Ys,pl);if(h){let u=new O;Bi.getBarycoord(pl,Ws,Xs,Ys,u),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,l,c,u,new Ye)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,l,c,u,new Ye)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};Bi.getNormal(Ws,Xs,Ys,f.normal),h.face=f,h.barycoord=u;}return h}var Fn=class n extends Bt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new di(c,3)),this.setAttribute("normal",new di(h,3)),this.setAttribute("uv",new di(u,2));function g(v,m,d,M,b,E,A,T,P,B,S){let y=E/P,I=A/B,N=E/2,V=A/2,q=T/2,F=P+1,W=B+1,$=0,G=0,ee=new O;for(let te=0;te<W;te++){let ye=te*I-V;for(let Fe=0;Fe<F;Fe++){let qe=Fe*y-N;ee[v]=qe*M,ee[m]=ye*b,ee[d]=q,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[d]=T>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(Fe/P),u.push(1-te/B),$+=1;}}for(let te=0;te<B;te++)for(let ye=0;ye<P;ye++){let Fe=f+ye+F*te,qe=f+ye+F*(te+1),Qe=f+(ye+1)+F*(te+1),je=f+(ye+1)+F*te;l.push(Fe,qe,je),l.push(qe,Qe,je),G+=6;}a.addGroup(p,G,S),p+=G,f+=$;}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hn(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s;}}return e}function Rt(n){let e={};for(let t=0;t<n.length;t++){let i=hn(n[t]);for(let s in i)e[s]=i[s];}return e}function Vh(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bo(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===true?e.texture.colorSpace:Xe.workingColorSpace}var dc={clone:hn,merge:Rt},Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wt=class extends ki{constructor(e){super(),this.isShaderMaterial=true,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Wh,this.linewidth=1,this.wireframe=false,this.wireframeLinewidth=1,this.fog=false,this.lights=false,this.clipping=false,this.forceSinglePass=true,this.extensions={clipCullDistance:false,multiDraw:false},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=false,this.glslVersion=null,e!==void 0&&this.setValues(e);}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hn(e.uniforms),this.uniformsGroups=Vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o};}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===true&&(i[s]=true);return Object.keys(i).length>0&&(t.extensions=i),t}},ds=class extends Yt{constructor(){super(),this.isCamera=true,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=oi,this._reversedDepth=false;}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert();}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert();}clone(){return new this.constructor().copy(this)}},Fi=new O,ml=new Ye,gl=new Ye,Ct=class extends ds{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=true,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix();}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ln*2*Math.atan(t),this.updateProjectionMatrix();}getFocalLength(){let e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ln*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z);}getViewSize(e,t){return this.getViewBounds(e,ml,gl),t.subVectors(gl,ml)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:true,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=true,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix();}clearViewOffset(){this.view!==null&&(this.view.enabled=false),this.updateProjectionMatrix();}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ns*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-0.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c;}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert();}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wn=-90,En=1,cr=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(wn,En,e,t);s.layers=this.layers,this.add(s);let r=new Ct(wn,En,e,t);r.layers=this.layers,this.add(r);let o=new Ct(wn,En,e,t);o.layers=this.layers,this.add(o);let a=new Ct(wn,En,e,t);a.layers=this.layers,this.add(a);let l=new Ct(wn,En,e,t);l.layers=this.layers,this.add(l);let c=new Ct(wn,En,e,t);c.layers=this.layers,this.add(c);}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===os)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld();}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=false;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=false,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=true;}},fs=class extends Lt{constructor(e=[],t=on,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=true,this.flipY=false;}get images(){return this.image}set images(e){this.image=e;}},hr=class extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=true;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new fs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=true;}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fn(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:hn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:mi});r.uniforms.tEquirect.value=t;let o=new Tt(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=ft),new cr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=true,i=true,s=true){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r);}},ei=class extends Yt{constructor(){super(),this.isGroup=true,this.type="Group";}},Xh={type:"move"},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null;}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=false,this._hand.visible=false,this._hand.joints={},this._hand.inputState={pinching:false}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=false,this._targetRay.visible=false,this._targetRay.hasLinearVelocity=false,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=false,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=false,this._grip.visible=false,this._grip.hasLinearVelocity=false,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=false,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i);}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=false),this._grip!==null&&(this._grip.visible=false),this._hand!==null&&(this._hand.visible=false),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=true;for(let v of e.hand.values()){let m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=true,d.jointRadius=m.radius),d.visible=m!==null;}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=false,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=true,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}));}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=true,r.linearVelocity?(l.hasLinearVelocity=true,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=false,r.angularVelocity?(l.hasAngularVelocity=true,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=false));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=true,s.linearVelocity?(a.hasLinearVelocity=true,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=false,s.angularVelocity?(a.hasAngularVelocity=true,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=false,this.dispatchEvent(Xh)));}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=false,i.visible=false,e.joints[t.jointName]=i,e.add(i);}return e.joints[t.jointName]}};var ps=class extends Yt{constructor(){super(),this.isScene=true,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var On=class extends Lt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=St,h=St,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=true,this.image={data:e,width:t,height:i},this.generateMipmaps=false,this.flipY=false,this.unpackAlignment=1;}};var qa=new O,Yh=new O,qh=new Ue,jt=class{constructor(e=new O(1,0,0),t=0){this.isPlane=true,this.normal=e,this.constant=t;}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=qa.subVectors(i,t).cross(Yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(qa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||qh.getNormalMatrix(e),s=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},en=new rn,Zh=new Ye(.5,.5),Js=new O,ms=class{constructor(e=new jt,t=new jt,i=new jt,s=new jt,r=new jt,o=new jt){this.planes=[e,t,i,s,r,o];}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=false){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],v=r[9],m=r[10],d=r[11],M=r[12],b=r[13],E=r[14],A=r[15];if(s[0].setComponents(c-o,p-h,d-g,A-M).normalize(),s[1].setComponents(c+o,p+h,d+g,A+M).normalize(),s[2].setComponents(c+a,p+u,d+v,A+b).normalize(),s[3].setComponents(c-a,p-u,d-v,A-b).normalize(),i)s[4].setComponents(l,f,m,E).normalize(),s[5].setComponents(c-l,p-f,d-m,A-E).normalize();else if(s[4].setComponents(c-l,p-f,d-m,A-E).normalize(),t===oi)s[5].setComponents(c+l,p+f,d+m,A+E).normalize();else if(t===os)s[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),en.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else {let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),en.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);}return this.intersectsSphere(en)}intersectsSprite(e){en.center.set(0,0,0);let t=Zh.distanceTo(e.center);return en.radius=.7071067811865476+t,en.applyMatrix4(e.matrixWorld),this.intersectsSphere(en)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return  false;return  true}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return  false}return  true}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return  false;return  true}clone(){return new this.constructor().copy(this)}};var ur=class extends ki{constructor(e){super(),this.isPointsMaterial=true,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=true,this.fog=true,this.setValues(e);}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xl=new mt,ja=new Un,Ks=new rn,Qs=new O,Gi=class extends Yt{constructor(e=new Bt,t=new ur){super(),this.isPoints=true,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets();}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,e.ray.intersectsSphere(Ks)===false)return;xl.copy(s).invert(),ja.copy(e.ray).applyMatrix4(xl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);Qs.fromBufferAttribute(u,m),vl(Qs,m,l,s,e,t,this);}}else {let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,v=p;g<v;g++)Qs.fromBufferAttribute(u,g),vl(Qs,g,l,s,e,t,this);}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r;}}}}};function vl(n,e,t,i,s,r,o){let a=ja.distanceSqToPoint(n);if(a<t){let l=new O;ja.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o});}}var qt=class extends Lt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=true,this.needsUpdate=true;}},gs=class extends Lt{constructor(e,t,i=Xi,s,r,o,a=St,l=St,c,h=Rn,u=1){if(h!==Rn&&h!==Vn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=true,this.flipY=false,this.generateMipmaps=false,this.compareFunction=null;}copy(e){return super.copy(e),this.source=new Dn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xs=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=true;}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Zt=class n extends Bt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){let M=d*f-o;for(let b=0;b<c;b++){let E=b*u-r;g.push(E,-M,0),v.push(0,0,1),m.push(b/a),m.push(1-d/l);}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){let b=M+c*d,E=M+c*(d+1),A=M+1+c*(d+1),T=M+1+c*d;p.push(b,E,T),p.push(E,A,T);}this.setIndex(p),this.setAttribute("position",new di(g,3)),this.setAttribute("normal",new di(v,3)),this.setAttribute("uv",new di(m,2));}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var dr=class extends ki{constructor(e){super(),this.isMeshDepthMaterial=true,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=false,this.wireframeLinewidth=1,this.setValues(e);}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fr=class extends ki{constructor(e){super(),this.isMeshDistanceMaterial=true,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e);}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Sr=class extends ds{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=true,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix();}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:true,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=true,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix();}clearViewOffset(){this.view!==null&&(this.view.enabled=false),this.updateProjectionMatrix();}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height;}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert();}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Tr=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=true,this.isMultiViewCamera=false,this.cameras=e;}};var Mo="\\[\\]\\.:\\/",So="[^"+Mo+"]",Kh="[^"+Mo.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",So);/(WCOD+)?/.source.replace("WCOD",Kh);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",So);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",So);var yl=new mt,zn=class{constructor(e,t,i=0,s=1/0){this.ray=new Un(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Nn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}};}set(e,t){this.ray.set(e,t);}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Be("Raycaster: Unsupported camera type: "+t.type);}setFromXRController(e){return yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yl),this}intersectObject(e,t=true,i=[]){return to(e,this,i,t),i.sort(_l),i}intersectObjects(e,t=true,i=[]){for(let s=0,r=e.length;s<r;s++)to(e[s],this,i,t);return i.sort(_l),i}};function _l(n,e){return n.distance-e.distance}function to(n,e,t,i){let s=true;if(n.layers.test(e.layers)&&n.raycast(e,t)===false&&(s=false),s===true&&i===true){let r=n.children;for(let o=0,a=r.length;o<a;o++)to(r[o],e,t,true);}}function To(n,e,t,i){let s=su(i);switch(t){case fo:return n*e;case mo:return n*e/s.components*s.byteLength;case Or:return n*e/s.components*s.byteLength;case zr:return n*e*2/s.components*s.byteLength;case kr:return n*e*2/s.components*s.byteLength;case po:return n*e*3/s.components*s.byteLength;case Ot:return n*e*4/s.components*s.byteLength;case Gr:return n*e*4/s.components*s.byteLength;case bs:case Ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ss:case Ts:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hr:case Xr:return Math.max(n,16)*Math.max(e,8)/4;case Vr:case Wr:return Math.max(n,8)*Math.max(e,8)/2;case Yr:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jr:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jr:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ea:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ta:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ra:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case aa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case la:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ca:case ha:case ua:return Math.ceil(n/4)*Math.ceil(e/4)*16;case da:case fa:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pa:case ma:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function su(n){switch(n){case gi:case lo:return {byteLength:1,components:1};case kn:case co:case cn:return {byteLength:2,components:1};case Fr:case Br:return {byteLength:2,components:4};case Xi:case Nr:case ii:return {byteLength:4,components:1};case ho:case uo:return {byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Fc(){let n=null,e=false,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s);}return {start:function(){e!==true&&t!==null&&(i=n.requestAnimationFrame(s),e=true);},stop:function(){n.cancelAnimationFrame(i),e=false;},setAnimationLoop:function(r){t=r;},setContext:function(r){n=r;}}}function au(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return {buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else {u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v);}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let v=u[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count);}l.clearUpdateRanges();}l.onUploadCallback();}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a));}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version;}}return {get:s,remove:r,update:o}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ou=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ju=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,td=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ad=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;

		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$d=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ef=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_f=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ef=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:ou,alphahash_pars_fragment:lu,alphamap_fragment:cu,alphamap_pars_fragment:hu,alphatest_fragment:uu,alphatest_pars_fragment:du,aomap_fragment:fu,aomap_pars_fragment:pu,batching_pars_vertex:mu,batching_vertex:gu,begin_vertex:xu,beginnormal_vertex:vu,bsdfs:yu,iridescence_fragment:_u,bumpmap_pars_fragment:bu,clipping_planes_fragment:Mu,clipping_planes_pars_fragment:Su,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:wu,color_fragment:Eu,color_pars_fragment:Au,color_pars_vertex:Cu,color_vertex:Ru,common:Pu,cube_uv_reflection_fragment:Iu,defaultnormal_vertex:Lu,displacementmap_pars_vertex:Du,displacementmap_vertex:Uu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Fu,colorspace_fragment:Bu,colorspace_pars_fragment:Ou,envmap_fragment:zu,envmap_common_pars_fragment:ku,envmap_pars_fragment:Gu,envmap_pars_vertex:Vu,envmap_physical_pars_fragment:ju,envmap_vertex:Hu,fog_vertex:Wu,fog_pars_vertex:Xu,fog_fragment:Yu,fog_pars_fragment:qu,gradientmap_pars_fragment:Zu,lightmap_pars_fragment:$u,lights_lambert_fragment:Ju,lights_lambert_pars_fragment:Ku,lights_pars_begin:Qu,lights_toon_fragment:ed,lights_toon_pars_fragment:td,lights_phong_fragment:id,lights_phong_pars_fragment:nd,lights_physical_fragment:sd,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:dd,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:xd,metalnessmap_pars_fragment:vd,morphinstance_vertex:yd,morphcolor_vertex:_d,morphnormal_vertex:bd,morphtarget_pars_vertex:Md,morphtarget_vertex:Sd,normal_fragment_begin:Td,normal_fragment_maps:wd,normal_pars_fragment:Ed,normal_pars_vertex:Ad,normal_vertex:Cd,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Id,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Dd,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Bd,dithering_fragment:Od,dithering_pars_fragment:zd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Gd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:Yd,skinning_pars_vertex:qd,skinning_vertex:Zd,skinnormal_vertex:$d,specularmap_fragment:Jd,specularmap_pars_fragment:Kd,tonemapping_fragment:Qd,tonemapping_pars_fragment:jd,transmission_fragment:ef,transmission_pars_fragment:tf,uv_pars_fragment:nf,uv_pars_vertex:sf,uv_vertex:rf,worldpos_vertex:af,background_vert:of,background_frag:lf,backgroundCube_vert:cf,backgroundCube_frag:hf,cube_vert:uf,cube_frag:df,depth_vert:ff,depth_frag:pf,distanceRGBA_vert:mf,distanceRGBA_frag:gf,equirect_vert:xf,equirect_frag:vf,linedashed_vert:yf,linedashed_frag:_f,meshbasic_vert:bf,meshbasic_frag:Mf,meshlambert_vert:Sf,meshlambert_frag:Tf,meshmatcap_vert:wf,meshmatcap_frag:Ef,meshnormal_vert:Af,meshnormal_frag:Cf,meshphong_vert:Rf,meshphong_frag:Pf,meshphysical_vert:If,meshphysical_frag:Lf,meshtoon_vert:Df,meshtoon_frag:Uf,points_vert:Nf,points_frag:Ff,shadow_vert:Bf,shadow_frag:Of,sprite_vert:zf,sprite_frag:kf},oe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},xi={basic:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Rt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Rt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Rt([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Rt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Rt([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Rt([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Rt([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Rt([oe.lights,oe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};xi.physical={uniforms:Rt([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};var ga={r:0,b:0,g:0},un=new ti,Gf=new mt;function Vf(n,e,t,i,s,r,o){let a=new Oe(0),l=r===true?0:1,c,h,u=null,f=0,p=null;function g(b){let E=b.isScene===true?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function v(b){let E=false,A=g(b);A===null?d(a,l):A&&A.isColor&&(d(A,1),E=true);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(true),i.buffers.depth.setMask(true),i.buffers.color.setMask(true),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil));}function m(b,E){let A=g(E);A&&(A.isCubeTexture||A.mapping===ys)?(h===void 0&&(h=new Tt(new Fn(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:hn(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Dt,depthTest:false,depthWrite:false,fog:false,allowOverride:false})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,B){this.matrixWorld.copyPosition(B.matrixWorld);},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),un.copy(E.backgroundRotation),un.x*=-1,un.y*=-1,un.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===false&&(un.y*=-1,un.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===false?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler(un)),h.material.toneMapped=Xe.getTransfer(A.colorSpace)!==Je,(u!==A||f!==A.version||p!==n.toneMapping)&&(h.material.needsUpdate=true,u=A,f=A.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Tt(new Zt(2,2),new wt({name:"BackgroundMaterial",uniforms:hn(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ti,depthTest:false,depthWrite:false,fog:false,allowOverride:false})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(A.colorSpace)!==Je,A.matrixAutoUpdate===true&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=true,u=A,f=A.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null));}function d(b,E){b.getRGB(ga,bo(n)),i.buffers.color.setClear(ga.r,ga.g,ga.b,E,o);}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0);}return {getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,d(a,l);},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l);},render:v,addToRenderList:m,dispose:M}}function Hf(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=false;function a(y,I,N,V,q){let F=false,W=u(V,N,I);r!==W&&(r=W,c(r.object)),F=p(y,V,N,q),F&&g(y,V,N,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=false,E(y,I,N,V),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer));}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,I,N){let V=N.wireframe===true,q=i[y.id];q===void 0&&(q={},i[y.id]=q);let F=q[I.id];F===void 0&&(F={},q[I.id]=F);let W=F[V];return W===void 0&&(W=f(l()),F[V]=W),W}function f(y){let I=[],N=[],V=[];for(let q=0;q<t;q++)I[q]=0,N[q]=0,V[q]=0;return {geometry:null,program:null,wireframe:false,newAttributes:I,enabledAttributes:N,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,I,N,V){let q=r.attributes,F=I.attributes,W=0,$=N.getAttributes();for(let G in $)if($[G].location>=0){let te=q[G],ye=F[G];if(ye===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),te===void 0||te.attribute!==ye||ye&&te.data!==ye.data)return  true;W++;}return r.attributesNum!==W||r.index!==V}function g(y,I,N,V){let q={},F=I.attributes,W=0,$=N.getAttributes();for(let G in $)if($[G].location>=0){let te=F[G];te===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));let ye={};ye.attribute=te,te&&te.data&&(ye.data=te.data),q[G]=ye,W++;}r.attributes=q,r.attributesNum=W,r.index=V;}function v(){let y=r.newAttributes;for(let I=0,N=y.length;I<N;I++)y[I]=0;}function m(y){d(y,0);}function d(y,I){let N=r.newAttributes,V=r.enabledAttributes,q=r.attributeDivisors;N[y]=1,V[y]===0&&(n.enableVertexAttribArray(y),V[y]=1),q[y]!==I&&(n.vertexAttribDivisor(y,I),q[y]=I);}function M(){let y=r.newAttributes,I=r.enabledAttributes;for(let N=0,V=I.length;N<V;N++)I[N]!==y[N]&&(n.disableVertexAttribArray(N),I[N]=0);}function b(y,I,N,V,q,F,W){W===true?n.vertexAttribIPointer(y,I,N,q,F):n.vertexAttribPointer(y,I,N,V,q,F);}function E(y,I,N,V){v();let q=V.attributes,F=N.getAttributes(),W=I.defaultAttributeValues;for(let $ in F){let G=F[$];if(G.location>=0){let ee=q[$];if(ee===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),ee!==void 0){let te=ee.normalized,ye=ee.itemSize,Fe=e.get(ee);if(Fe===void 0)continue;let qe=Fe.buffer,Qe=Fe.type,je=Fe.bytesPerElement,Y=Qe===n.INT||Qe===n.UNSIGNED_INT||ee.gpuType===Nr;if(ee.isInterleavedBufferAttribute){let K=ee.data,fe=K.stride,De=ee.offset;if(K.isInstancedInterleavedBuffer){for(let _e=0;_e<G.locationSize;_e++)d(G.location+_e,K.meshPerAttribute);y.isInstancedMesh!==true&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count);}else for(let _e=0;_e<G.locationSize;_e++)m(G.location+_e);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let _e=0;_e<G.locationSize;_e++)b(G.location+_e,ye/G.locationSize,Qe,te,fe*je,(De+ye/G.locationSize*_e)*je,Y);}else {if(ee.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)d(G.location+K,ee.meshPerAttribute);y.isInstancedMesh!==true&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count);}else for(let K=0;K<G.locationSize;K++)m(G.location+K);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let K=0;K<G.locationSize;K++)b(G.location+K,ye/G.locationSize,Qe,te,ye*je,ye/G.locationSize*K*je,Y);}}else if(W!==void 0){let te=W[$];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(G.location,te);break;case 3:n.vertexAttrib3fv(G.location,te);break;case 4:n.vertexAttrib4fv(G.location,te);break;default:n.vertexAttrib1fv(G.location,te);}}}}M();}function A(){B();for(let y in i){let I=i[y];for(let N in I){let V=I[N];for(let q in V)h(V[q].object),delete V[q];delete I[N];}delete i[y];}}function T(y){if(i[y.id]===void 0)return;let I=i[y.id];for(let N in I){let V=I[N];for(let q in V)h(V[q].object),delete V[q];delete I[N];}delete i[y.id];}function P(y){for(let I in i){let N=i[I];if(N[y.id]===void 0)continue;let V=N[y.id];for(let q in V)h(V[q].object),delete V[q];delete N[y.id];}}function B(){S(),o=true,r!==s&&(r=s,c(r.object));}function S(){s.geometry=null,s.program=null,s.wireframe=false;}return {setup:a,reset:B,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Wf(n,e,t){let i;function s(c){i=c;}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1);}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u));}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1);}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else {p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];t.update(g,i,1);}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l;}function Xf(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===true){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);}else s=0;return s}function o(P){return !(P!==Ot&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let B=P===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return !(P!==gi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ii&&!B)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return "highp";P="mediump";}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===true,f=t.reversedDepthBuffer===true&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=n.getParameter(n.MAX_SAMPLES);return {isWebGL2:true,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:A,maxSamples:T}}function Yf(n){let e=this,t=null,i=0,s=false,r=false,o=new jt,a=new Ue,l={value:null,needsUpdate:false};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=true,h(null);},this.endShadows=function(){r=false;},this.setGlobalState=function(u,f){t=h(u,f,0);},this.setState=function(u,f,p){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else {let M=r?0:i,b=M*4,E=d.clippingState||null;l.value=E,E=h(g,f,b,p);for(let A=0;A!==b;++A)E[A]=t[A];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M;}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0;}function h(u,f,p,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==true||m===null){let d=p+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,E=p;b!==v;++b,E+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant;}l.value=m,l.needsUpdate=true;}return e.numPlanes=v,e.numIntersection=0,m}}function qf(n){let e=new WeakMap;function t(o,a){return a===Lr?o.mapping=on:a===Dr&&(o.mapping=ln),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lr||a===Dr)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else {let l=o.image;if(l&&l.height>0){let c=new hr(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose());}function r(){e=new WeakMap;}return {get:i,dispose:r}}var Yi=4,pc=[.125,.215,.35,.446,.526,.582],fn=20,Zf=256,Es=new Sr,mc=new Oe,wo=null,Eo=0,Ao=0,Co=false,$f=new O,va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null;}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=$f}=r;wo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=false,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=true,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial));}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial));}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose());}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax);}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose();}_cleanup(e){this._renderer.setRenderTarget(wo,Eo,Ao),this._renderer.xr.enabled=Co,e.scissorTest=false,Wn(e,0,0,e.width,e.height);}_fromTexture(e,t){e.mapping===on||e.mapping===ln?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=false;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ft,minFilter:ft,generateMipmaps:false,type:cn,format:Ot,colorSpace:sn,depthBuffer:false},s=gc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gc(e,t,i);let{_lodMax:r}=this;(({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jf(r))),this._blurMaterial=Qf(r,e,t),this._ggxMaterial=Kf(r,e,t);}return s}_compileMaterial(e){let t=new Tt(new Bt,e);this._renderer.compile(t,Es);}_sceneToCubeUV(e,t,i,s,r){let l=new Ct(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(mc),u.toneMapping=Ci,u.autoClear=false,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Fn,new li({name:"PMREM.Background",side:Dt,depthWrite:false,depthTest:false})));let v=this._backgroundBox,m=v.material,d=false,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,d=true):(m.color.copy(mc),d=true);for(let b=0;b<6;b++){let E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let A=this._cubeSize;Wn(s,E*A,b>2?A:0,A,A),u.setRenderTarget(s),d&&u.render(v,l),u.render(e,l);}u.toneMapping=p,u.autoClear=f,e.background=M;}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===on||e.mapping===ln;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===false?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Wn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Es);}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=false;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i;}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=.05+c*.95,p=u*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Yi?i-g+Yi:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Wn(r,m,d,3*v,2*v),s.setRenderTarget(r),s.render(a,Es),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Wn(e,m,d,3*v,2*v),s.setRenderTarget(e),s.render(a,Es);}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r);}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*fn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):fn;m>fn&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fn}`);let d=[],M=0;for(let P=0;P<fn;++P){let B=P/v,S=Math.exp(-B*B/2);d.push(S),P===0?M+=S:P<m&&(M+=2*S);}for(let P=0;P<d.length;P++)d[P]=d[P]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;let E=this._sizeLods[s],A=3*E*(s>b-Yi?s-b+Yi:0),T=4*(this._cubeSize-E);Wn(t,A,T,3*E,2*E),l.setRenderTarget(t),l.render(u,Es);}};function Jf(n){let e=[],t=[],i=[],s=n,r=n-Yi+1+pc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Yi?l=pc[o-n+Yi-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,M=new Float32Array(v*g*p),b=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let T=0;T<p;T++){let P=T%3*2/3-1,B=T>2?0:-1,S=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];M.set(S,v*g*T),b.set(f,m*g*T);let y=[T,T,T,T,T,T];E.set(y,d*g*T);}let A=new Bt;A.setAttribute("position",new ht(M,v)),A.setAttribute("uv",new ht(b,m)),A.setAttribute("faceIndex",new ht(E,d)),i.push(new Tt(A,null)),s>Yi&&s--;}return {lodMeshes:i,sizeLods:e,sigmas:t}}function gc(n,e,t){let i=new fi(n,e,t);return i.texture.mapping=ys,i.texture.name="PMREM.cubeUv",i.scissorTest=true,i}function Wn(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s);}function Kf(n,e,t){return new wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zf,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mi,depthTest:false,depthWrite:false})}function Qf(n,e,t){let i=new Float32Array(fn),s=new O(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:false},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:false,depthWrite:false})}function xc(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:false,depthWrite:false})}function vc(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:false,depthWrite:false})}function _a(){return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jf(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Lr||l===Dr,h=l===on||l===ln;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new va(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new va(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose());}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null);}return {get:i,dispose:o}}function ep(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return {has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent");},get:function(i){let s=t(i);return s===null&&In("WebGLRenderer: "+i+" extension not supported."),s}}}function tp(n,e,t,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===true&&delete f._maxInstanceCount,t.memory.geometries--;}function a(u,f){return s[f.id]===true||(f.addEventListener("dispose",o),s[f.id]=true,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],n.ARRAY_BUFFER);}function c(u){let f=[],p=u.index,g=u.attributes.position,v=0;if(p!==null){let M=p.array;v=p.version;for(let b=0,E=M.length;b<E;b+=3){let A=M[b+0],T=M[b+1],P=M[b+2];f.push(A,T,T,P,P,A);}}else if(g!==void 0){let M=g.array;v=g.version;for(let b=0,E=M.length/3-1;b<E;b+=3){let A=b+0,T=b+1,P=b+2;f.push(A,T,T,P,P,A);}}else return;let m=new(vo(f)?us:hs)(f,1);m.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,m);}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u);}else c(u);return r.get(u)}return {get:a,update:l,getWireframeAttribute:h}}function ip(n,e,t){let i;function s(f){i=f;}let r,o;function a(f){r=f.type,o=f.bytesPerElement;}function l(f,p){n.drawElements(i,p,r,f*o),t.update(p,i,1);}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),t.update(p,i,g));}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1);}function u(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],v[d]);else {m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*v[M];t.update(d,i,1);}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u;}function np(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0;}return {memory:e,render:t,programs:null,autoReset:true,reset:s,update:i}}function sp(n,e,t){let i=new WeakMap,s=new pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let y=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",y);};f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],E=0;g===true&&(E=1),v===true&&(E=2),m===true&&(E=3);let A=a.attributes.position.count*E,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let P=new Float32Array(A*T*4*u),B=new cs(P,A,T,u);B.type=ii,B.needsUpdate=true;let S=E*4;for(let I=0;I<u;I++){let N=d[I],V=M[I],q=b[I],F=A*T*4*I;for(let W=0;W<N.count;W++){let $=W*S;g===true&&(s.fromBufferAttribute(N,W),P[F+$+0]=s.x,P[F+$+1]=s.y,P[F+$+2]=s.z,P[F+$+3]=0),v===true&&(s.fromBufferAttribute(V,W),P[F+$+4]=s.x,P[F+$+5]=s.y,P[F+$+6]=s.z,P[F+$+7]=0),m===true&&(s.fromBufferAttribute(q,W),P[F+$+8]=s.x,P[F+$+9]=s.y,P[F+$+10]=s.z,P[F+$+11]=q.itemSize===4?s.w:1);}}f={count:u,texture:B,size:new Ye(A,T)},i.set(a,f),a.addEventListener("dispose",y);}if(o.isInstancedMesh===true&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else {let g=0;for(let m=0;m<c.length;m++)g+=c[m];let v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c);}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size);}return {update:r}}function rp(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===false&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c));}return u}function o(){s=new WeakMap;}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor);}return {update:r,dispose:o}}var Bc=new Lt,yc=new gs(1,1),Oc=new cs,zc=new lr,kc=new fs,_c=[],bc=[],Mc=new Float32Array(16),Sc=new Float32Array(9),Tc=new Float32Array(4);function Yn(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a);}return r}function vt(n,e){if(n.length!==e.length)return  false;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return  false;return  true}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t];}function ba(n,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ap(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e);}function op(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else {if(vt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e);}}function lp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else {if(vt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e);}}function cp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else {if(vt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e);}}function hp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,false,e),yt(t,e);}else {if(vt(t,i))return;Tc.set(i),n.uniformMatrix2fv(this.addr,false,Tc),yt(t,i);}}function up(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,false,e),yt(t,e);}else {if(vt(t,i))return;Sc.set(i),n.uniformMatrix3fv(this.addr,false,Sc),yt(t,i);}}function dp(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,false,e),yt(t,e);}else {if(vt(t,i))return;Mc.set(i),n.uniformMatrix4fv(this.addr,false,Mc),yt(t,i);}}function fp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e);}function pp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else {if(vt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e);}}function mp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else {if(vt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e);}}function gp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else {if(vt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e);}}function xp(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e);}function vp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else {if(vt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e);}}function yp(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else {if(vt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e);}}function _p(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else {if(vt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e);}}function bp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yc.compareFunction=go,r=yc):r=Bc,t.setTexture2D(e||r,s);}function Mp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||zc,s);}function Sp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||kc,s);}function Tp(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Oc,s);}function wp(n){switch(n){case 5126:return ap;case 35664:return op;case 35665:return lp;case 35666:return cp;case 35674:return hp;case 35675:return up;case 35676:return dp;case 5124:case 35670:return fp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return gp;case 5125:return xp;case 36294:return vp;case 36295:return yp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Tp}}function Ep(n,e){n.uniform1fv(this.addr,e);}function Ap(n,e){let t=Yn(e,this.size,2);n.uniform2fv(this.addr,t);}function Cp(n,e){let t=Yn(e,this.size,3);n.uniform3fv(this.addr,t);}function Rp(n,e){let t=Yn(e,this.size,4);n.uniform4fv(this.addr,t);}function Pp(n,e){let t=Yn(e,this.size,4);n.uniformMatrix2fv(this.addr,false,t);}function Ip(n,e){let t=Yn(e,this.size,9);n.uniformMatrix3fv(this.addr,false,t);}function Lp(n,e){let t=Yn(e,this.size,16);n.uniformMatrix4fv(this.addr,false,t);}function Dp(n,e){n.uniform1iv(this.addr,e);}function Up(n,e){n.uniform2iv(this.addr,e);}function Np(n,e){n.uniform3iv(this.addr,e);}function Fp(n,e){n.uniform4iv(this.addr,e);}function Bp(n,e){n.uniform1uiv(this.addr,e);}function Op(n,e){n.uniform2uiv(this.addr,e);}function zp(n,e){n.uniform3uiv(this.addr,e);}function kp(n,e){n.uniform4uiv(this.addr,e);}function Gp(n,e,t){let i=this.cache,s=e.length,r=ba(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bc,r[o]);}function Vp(n,e,t){let i=this.cache,s=e.length,r=ba(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zc,r[o]);}function Hp(n,e,t){let i=this.cache,s=e.length,r=ba(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kc,r[o]);}function Wp(n,e,t){let i=this.cache,s=e.length,r=ba(t,s);vt(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Oc,r[o]);}function Xp(n){switch(n){case 5126:return Ep;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Pp;case 35675:return Ip;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Bp;case 36294:return Op;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Wp}}var Po=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wp(t.type);}},Io=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xp(t.type);}},Lo=class{constructor(e){this.id=e,this.seq=[],this.map={};}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i);}}},Ro=/(\w+)(\])?(\[|\.)?/g;function wc(n,e){n.seq.push(e),n.map[e.id]=e;}function Yp(n,e,t){let i=n.name,s=i.length;for(Ro.lastIndex=0;;){let r=Ro.exec(i),o=Ro.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wc(t,c===void 0?new Po(a,n,e):new Io(a,n,e));break}else {let u=t.map[a];u===void 0&&(u=new Lo(a),wc(t,u)),t=u;}}}var Xn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Yp(r,o,this);}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s);}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s);}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==false&&a.setValue(e,l.value,s);}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o);}return i}};function Ec(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var qp=37297,Zp=0;function $p(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`);}return i.join(`
`)}var Ac=new Ue;function Jp(n){Xe._getMatrix(Ac,Xe.workingColorSpace,n);let e=`mat3( ${Ac.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case as:return [e,"LinearTransferOETF"];case Je:return [e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cc(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return "";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+$p(n.getShaderSource(e),a)}else return r}function Kp(n,e){let t=Jp(e);return [`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qp(n,e){let t;switch(e){case Wl:t="Linear";break;case Xl:t="Reinhard";break;case Yl:t="Cineon";break;case ql:t="ACESFilmic";break;case $l:t="AgX";break;case Jl:t="Neutral";break;case Zl:t="Custom";break;default:Pe("WebGLProgram: Unsupported toneMapping:",e),t="Linear";}return "vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xa=new O;function jp(){Xe.getLuminanceCoefficients(xa);let n=xa.x.toFixed(4),e=xa.y.toFixed(4),t=xa.z.toFixed(4);return ["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(n){return [n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function t0(n){let e=[];for(let t in n){let i=n[t];i!==false&&e.push("#define "+t+" "+i);}return e.join(`
`)}function i0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a};}return t}function As(n){return n!==""}function Rc(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(n){return n.replace(n0,r0)}var s0=new Map;function r0(n,e){let t=Ne[e];if(t===void 0){let i=s0.get(e);if(i!==void 0)t=Ne[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}var a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ic(n){return n.replace(a0,o0)}function o0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===no?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function c0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case on:case ln:e="ENVMAP_TYPE_CUBE";break;case ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h0(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ln&&(e="ENVMAP_MODE_REFRACTION"),e}function u0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ao:e="ENVMAP_BLENDING_MULTIPLY";break;case Vl:e="ENVMAP_BLENDING_MIX";break;case Hl:e="ENVMAP_BLENDING_ADD";break}return e}function d0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return {texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function f0(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=l0(t),c=c0(t),h=h0(t),u=u0(t),f=d0(t),p=e0(t),g=t0(r),v=s.createProgram(),m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(As).join(`
`),d.length>0&&(d+=`
`)):(m=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===false?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===false?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),d=[Lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===false?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Ci?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Kp("linearToOutputTexel",t.outputColorSpace),jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=Do(o),o=Rc(o,t),o=Pc(o,t),a=Do(a),a=Rc(a,t),a=Pc(a,t),o=Ic(o),a=Ic(a),t.isRawShaderMaterial!==true&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let b=M+m+o,E=M+d+a,A=Ec(s,s.VERTEX_SHADER,b),T=Ec(s,s.FRAGMENT_SHADER,E);s.attachShader(v,A),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===true&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(A)||"",q=s.getShaderInfoLog(T)||"",F=N.trim(),W=V.trim(),$=q.trim(),G=true,ee=true;if(s.getProgramParameter(v,s.LINK_STATUS)===false)if(G=false,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,A,T);else {let te=Cc(s,A,"vertex"),ye=Cc(s,T,"fragment");Be("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+te+`
`+ye);}else F!==""?Pe("WebGLProgram: Program Info Log:",F):(W===""||$==="")&&(ee=false);ee&&(I.diagnostics={runnable:G,programLog:F,vertexShader:{log:W,prefix:m},fragmentShader:{log:$,prefix:d}});}s.deleteShader(A),s.deleteShader(T),B=new Xn(s,v),S=i0(s,v);}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=t.rendererExtensionParallelShaderCompile===false;return this.isReady=function(){return y===false&&(y=s.getProgramParameter(v,qp)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0;},this.type=t.shaderType,this.name=t.shaderName,this.id=Zp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=T,this}var p0=0,Uo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map;}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===false&&(o.add(s),s.usedTimes++),o.has(r)===false&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear();}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new No(e),t.set(e,i)),i}},No=class{constructor(e){this.id=p0++,this.code=e,this.usedTimes=0;}};function m0(n,e,t,i,s,r,o){let a=new Nn,l=new Uo,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,I,N,V){let q=N.fog,F=V.geometry,W=S.isMeshStandardMaterial?N.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),G=$&&$.mapping===ys?$.image.height:null,ee=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&Pe("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ye=te!==void 0?te.length:0,Fe=0;F.morphAttributes.position!==void 0&&(Fe=1),F.morphAttributes.normal!==void 0&&(Fe=2),F.morphAttributes.color!==void 0&&(Fe=3);let qe,Qe,je,Y;if(ee){let et=xi[ee];qe=et.vertexShader,Qe=et.fragmentShader;}else qe=S.vertexShader,Qe=S.fragmentShader,l.update(S),je=l.getVertexShaderID(S),Y=l.getFragmentShaderID(S);let K=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),De=V.isInstancedMesh===true,_e=V.isBatchedMesh===true,ke=!!S.map,Mt=!!S.matcap,ze=!!$,at=!!S.aoMap,C=!!S.lightMap,Ge=!!S.bumpMap,Ve=!!S.normalMap,nt=!!S.displacementMap,ge=!!S.emissiveMap,ot=!!S.metalnessMap,Me=!!S.roughnessMap,Le=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,U=S.iridescence>0,X=S.sheen>0,J=S.transmission>0,H=Le&&!!S.anisotropyMap,ve=w&&!!S.clearcoatMap,le=w&&!!S.clearcoatNormalMap,Se=w&&!!S.clearcoatRoughnessMap,xe=U&&!!S.iridescenceMap,Q=U&&!!S.iridescenceThicknessMap,ne=X&&!!S.sheenColorMap,Ae=X&&!!S.sheenRoughnessMap,we=!!S.specularMap,ue=!!S.specularColorMap,Re=!!S.specularIntensityMap,R=J&&!!S.transmissionMap,ce=J&&!!S.thicknessMap,re=!!S.gradientMap,ae=!!S.alphaMap,j=S.alphaTest>0,Z=!!S.alphaHash,pe=!!S.extensions,Ie=Ci;S.toneMapped&&(K===null||K.isXRRenderTarget===true)&&(Ie=n.toneMapping);let st={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:Qe,defines:S.defines,customVertexShaderID:je,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===true,glslVersion:S.glslVersion,precision:p,batching:_e,batchingColor:_e&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===true?K.texture.colorSpace:sn,alphaToCoverage:!!S.alphaToCoverage,map:ke,matcap:Mt,envMap:ze,envMapMode:ze&&$.mapping,envMapCubeUVHeight:G,aoMap:at,lightMap:C,bumpMap:Ge,normalMap:Ve,displacementMap:f&&nt,emissiveMap:ge,normalMapObjectSpace:Ve&&S.normalMapType===tc,normalMapTangentSpace:Ve&&S.normalMapType===ec,metalnessMap:ot,roughnessMap:Me,anisotropy:Le,anisotropyMap:H,clearcoat:w,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:Se,dispersion:x,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:ne,sheenRoughnessMap:Ae,specularMap:we,specularColorMap:ue,specularIntensityMap:Re,transmission:J,transmissionMap:R,thicknessMap:ce,gradientMap:re,opaque:S.transparent===false&&S.blending===wi&&S.alphaToCoverage===false,alphaMap:ae,alphaTest:j,alphaHash:Z,combine:S.combine,mapUv:ke&&v(S.map.channel),aoMapUv:at&&v(S.aoMap.channel),lightMapUv:C&&v(S.lightMap.channel),bumpMapUv:Ge&&v(S.bumpMap.channel),normalMapUv:Ve&&v(S.normalMap.channel),displacementMapUv:nt&&v(S.displacementMap.channel),emissiveMapUv:ge&&v(S.emissiveMap.channel),metalnessMapUv:ot&&v(S.metalnessMap.channel),roughnessMapUv:Me&&v(S.roughnessMap.channel),anisotropyMapUv:H&&v(S.anisotropyMap.channel),clearcoatMapUv:ve&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(S.sheenRoughnessMap.channel),specularMapUv:we&&v(S.specularMap.channel),specularColorMapUv:ue&&v(S.specularColorMap.channel),specularIntensityMapUv:Re&&v(S.specularIntensityMap.channel),transmissionMapUv:R&&v(S.transmissionMap.channel),thicknessMapUv:ce&&v(S.thicknessMap.channel),alphaMapUv:ae&&v(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ve||Le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===true&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:V.isPoints===true&&!!F.attributes.uv&&(ke||ae),fog:!!q,useFog:S.fog===true,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===true&&S.wireframe===false,sizeAttenuation:S.sizeAttenuation===true,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:V.isSkinnedMesh===true,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ke&&S.map.isVideoTexture===true&&Xe.getTransfer(S.map.colorSpace)===Je,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===true&&Xe.getTransfer(S.emissiveMap.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ut,flipSided:S.side===Dt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===true&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===true||_e)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return st.vertexUv1s=c.has(1),st.vertexUv2s=c.has(2),st.vertexUv3s=c.has(3),c.clear(),st}function d(S){let y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)y.push(I),y.push(S.defines[I]);return S.isRawShaderMaterial===false&&(M(y,S),b(y,S),y.push(n.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking);}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask);}function E(S){let y=g[S.type],I;if(y){let N=xi[y];I=dc.clone(N.uniforms);}else I=S.uniforms;return I}function A(S,y){let I;for(let N=0,V=h.length;N<V;N++){let q=h[N];if(q.cacheKey===y){I=q,++I.usedTimes;break}}return I===void 0&&(I=new f0(n,y,S,r),h.push(I)),I}function T(S){if(--S.usedTimes===0){let y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy();}}function P(S){l.remove(S);}function B(){l.dispose();}return {getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:B}}function g0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o);}function s(o,a,l){n.get(o)[a]=l;}function r(){n=new WeakMap;}return {has:e,get:t,remove:i,update:s,dispose:r}}function x0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uc(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0;}function o(u,f,p,g,v,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function a(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?i.push(d):p.transparent===true?s.push(d):t.push(d);}function l(u,f,p,g,v,m){let d=o(u,f,p,g,v,m);p.transmission>0?i.unshift(d):p.transparent===true?s.unshift(d):t.unshift(d);}function c(u,f){t.length>1&&t.sort(u||x0),i.length>1&&i.sort(f||Dc),s.length>1&&s.sort(f||Dc);}function h(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null;}}return {opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function v0(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Uc,n.set(i,[o])):s>=r.length?(o=new Uc,r.push(o)):o=r[s],o}function t(){n=new WeakMap;}return {get:e,dispose:t}}function y0(){let n={};return {get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case "DirectionalLight":t={direction:new O,color:new Oe};break;case "SpotLight":t={position:new O,direction:new O,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case "PointLight":t={position:new O,color:new Oe,distance:0,decay:0};break;case "HemisphereLight":t={direction:new O,skyColor:new Oe,groundColor:new Oe};break;case "RectAreaLight":t={color:new Oe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function _0(){let n={};return {get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case "DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case "SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case "PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var b0=0;function M0(n,e){return (e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function S0(n){let e=new y0,t=_0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new mt,o=new mt;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,M=0,b=0,E=0,A=0,T=0,P=0;c.sort(M0);for(let S=0,y=c.length;S<y;S++){let I=c[S],N=I.color,V=I.intensity,q=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*V,u+=N.g*V,f+=N.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],V);P++;}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let $=I.shadow,G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.directionalShadow[p]=G,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=I.shadow.matrix,M++;}i.directional[p]=W,p++;}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(N).multiplyScalar(V),W.distance=q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[v]=W;let $=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,$.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[v]=$.matrix,I.castShadow){let G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=F,E++;}v++;}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(N).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=W,m++;}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let $=I.shadow,G=t.get(I);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=I.shadow.matrix,b++;}i.point[g]=W,g++;}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[d]=W,d++;}}m>0&&(n.has("OES_texture_float_linear")===true?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let B=i.hash;(B.directionalLength!==p||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==d||B.numDirectionalShadows!==M||B.numPointShadows!==b||B.numSpotShadows!==E||B.numSpotMaps!==A||B.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,B.directionalLength=p,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=d,B.numDirectionalShadows=M,B.numPointShadows=b,B.numSpotShadows=E,B.numSpotMaps=A,B.numLightProbes=P,i.version=b0++);}function l(c,h){let u=0,f=0,p=0,g=0,v=0,m=h.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){let b=c[d];if(b.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),u++;}else if(b.isSpotLight){let E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++;}else if(b.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++;}else if(b.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++;}else if(b.isHemisphereLight){let E=i.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),v++;}}}return {setup:a,setupView:l,state:i}}function Nc(n){let e=new S0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0;}function r(h){t.push(h);}function o(h){i.push(h);}function a(){e.setup(t);}function l(h){e.setupView(t,h);}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return {init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function T0(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Nc(n),e.set(s,[a])):r>=o.length?(a=new Nc(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap;}return {get:t,dispose:i}}var w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A0(n,e,t){let i=new ms,s=new Ye,r=new Ye,o=new pt,a=new dr({depthPacking:jl}),l=new fr,c={},h=t.maxTextureSize,u={[Ti]:Dt,[Dt]:Ti,[Ut]:Ut},f=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:w0,fragmentShader:E0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Bt;g.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Tt(g,f),m=this;this.enabled=false,this.autoUpdate=true,this.needsUpdate=false,this.type=no;let d=this.type;this.render=function(T,P,B){if(m.enabled===false||m.autoUpdate===false&&m.needsUpdate===false||T.length===0)return;let S=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(mi),N.buffers.depth.getReversed()===true?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(true),N.setScissorTest(false);let V=d!==pi&&this.type===pi,q=d===pi&&this.type!==pi;for(let F=0,W=T.length;F<W;F++){let $=T[F],G=$.shadow;if(G===void 0){Pe("WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===false&&G.needsUpdate===false)continue;s.copy(G.mapSize);let ee=G.getFrameExtents();if(s.multiply(ee),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||V===true||q===true){let ye=this.type!==pi?{minFilter:St,magFilter:St}:{};G.map!==null&&G.map.dispose(),G.map=new fi(s.x,s.y,ye),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix();}n.setRenderTarget(G.map),n.clear();let te=G.getViewportCount();for(let ye=0;ye<te;ye++){let Fe=G.getViewport(ye);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),N.viewport(o),G.updateMatrices($,ye),i=G.getFrustum(),E(P,B,G.camera,$,this.type);}G.isPointLightShadow!==true&&this.type===pi&&M(G,B),G.needsUpdate=false;}d=this.type,m.needsUpdate=false,n.setRenderTarget(S,y,I);};function M(T,P){let B=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=true,p.needsUpdate=true),T.mapPass===null&&(T.mapPass=new fi(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,B,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,B,p,v,null);}function b(T,P,B,S){let y=null,I=B.isPointLight===true?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)y=I;else if(y=B.isPointLight===true?l:a,n.localClippingEnabled&&P.clipShadows===true&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===true){let N=y.uuid,V=P.uuid,q=c[N];q===void 0&&(q={},c[N]=q);let F=q[V];F===void 0&&(F=y.clone(),q[V]=F,P.addEventListener("dispose",A)),y=F;}if(y.visible=P.visible,y.wireframe=P.wireframe,S===pi?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===true?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,B.isPointLight===true&&y.isMeshDistanceMaterial===true){let N=n.properties.get(y);N.light=B;}return y}function E(T,P,B,S,y){if(T.visible===false)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===pi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld);let V=e.update(T),q=T.material;if(Array.isArray(q)){let F=V.groups;for(let W=0,$=F.length;W<$;W++){let G=F[W],ee=q[G.materialIndex];if(ee&&ee.visible){let te=b(T,ee,S,y);T.onBeforeShadow(n,T,P,B,V,te,G),n.renderBufferDirect(B,null,V,te,T,G),T.onAfterShadow(n,T,P,B,V,te,G);}}}else if(q.visible){let F=b(T,q,S,y);T.onBeforeShadow(n,T,P,B,V,F,null),n.renderBufferDirect(B,null,V,F,T,null),T.onAfterShadow(n,T,P,B,V,F,null);}}let N=T.children;for(let V=0,q=N.length;V<q;V++)E(N[V],P,B,S,y);}function A(T){T.target.removeEventListener("dispose",A);for(let B in c){let S=c[B],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y]);}}}var C0={[wr]:Er,[Ar]:Pr,[Cr]:Ir,[nn]:Rr,[Er]:wr,[Pr]:Ar,[Ir]:Cr,[Rr]:nn};function R0(n,e){function t(){let R=false,ce=new pt,re=null,ae=new pt(0,0,0,0);return {setMask:function(j){re!==j&&!R&&(n.colorMask(j,j,j,j),re=j);},setLocked:function(j){R=j;},setClear:function(j,Z,pe,Ie,st){st===true&&(j*=Ie,Z*=Ie,pe*=Ie),ce.set(j,Z,pe,Ie),ae.equals(ce)===false&&(n.clearColor(j,Z,pe,Ie),ae.copy(ce));},reset:function(){R=false,re=null,ae.set(-1,0,0,0);}}}function i(){let R=false,ce=false,re=null,ae=null,j=null;return {setReversed:function(Z){if(ce!==Z){let pe=e.get("EXT_clip_control");Z?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ce=Z;let Ie=j;j=null,this.setClear(Ie);}},getReversed:function(){return ce},setTest:function(Z){Z?K(n.DEPTH_TEST):fe(n.DEPTH_TEST);},setMask:function(Z){re!==Z&&!R&&(n.depthMask(Z),re=Z);},setFunc:function(Z){if(ce&&(Z=C0[Z]),ae!==Z){switch(Z){case wr:n.depthFunc(n.NEVER);break;case Er:n.depthFunc(n.ALWAYS);break;case Ar:n.depthFunc(n.LESS);break;case nn:n.depthFunc(n.LEQUAL);break;case Cr:n.depthFunc(n.EQUAL);break;case Rr:n.depthFunc(n.GEQUAL);break;case Pr:n.depthFunc(n.GREATER);break;case Ir:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL);}ae=Z;}},setLocked:function(Z){R=Z;},setClear:function(Z){j!==Z&&(ce&&(Z=1-Z),n.clearDepth(Z),j=Z);},reset:function(){R=false,re=null,ae=null,j=null,ce=false;}}}function s(){let R=false,ce=null,re=null,ae=null,j=null,Z=null,pe=null,Ie=null,st=null;return {setTest:function(et){R||(et?K(n.STENCIL_TEST):fe(n.STENCIL_TEST));},setMask:function(et){ce!==et&&!R&&(n.stencilMask(et),ce=et);},setFunc:function(et,ui,ni){(re!==et||ae!==ui||j!==ni)&&(n.stencilFunc(et,ui,ni),re=et,ae=ui,j=ni);},setOp:function(et,ui,ni){(Z!==et||pe!==ui||Ie!==ni)&&(n.stencilOp(et,ui,ni),Z=et,pe=ui,Ie=ni);},setLocked:function(et){R=et;},setClear:function(et){st!==et&&(n.clearStencil(et),st=et);},reset:function(){R=false,ce=null,re=null,ae=null,j=null,Z=null,pe=null,Ie=null,st=null;}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,v=false,m=null,d=null,M=null,b=null,E=null,A=null,T=null,P=new Oe(0,0,0),B=0,S=false,y=null,I=null,N=null,V=null,q=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=false,$=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=$>=1):G.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=$>=2);let ee=null,te={},ye=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),qe=new pt().fromArray(ye),Qe=new pt().fromArray(Fe);function je(R,ce,re,ae){let j=new Uint8Array(4),Z=n.createTexture();n.bindTexture(R,Z),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let pe=0;pe<re;pe++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,ae,0,n.RGBA,n.UNSIGNED_BYTE,j):n.texImage2D(ce+pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,j);return Z}let Y={};Y[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(nn),Ge(false),Ve(io),K(n.CULL_FACE),at(mi);function K(R){h[R]!==true&&(n.enable(R),h[R]=true);}function fe(R){h[R]!==false&&(n.disable(R),h[R]=false);}function De(R,ce){return u[R]!==ce?(n.bindFramebuffer(R,ce),u[R]=ce,R===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),R===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),true):false}function _e(R,ce){let re=p,ae=false;if(R){re=f.get(ce),re===void 0&&(re=[],f.set(ce,re));let j=R.textures;if(re.length!==j.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,pe=j.length;Z<pe;Z++)re[Z]=n.COLOR_ATTACHMENT0+Z;re.length=j.length,ae=true;}}else re[0]!==n.BACK&&(re[0]=n.BACK,ae=true);ae&&n.drawBuffers(re);}function ke(R){return g!==R?(n.useProgram(R),g=R,true):false}let Mt={[Oi]:n.FUNC_ADD,[wl]:n.FUNC_SUBTRACT,[El]:n.FUNC_REVERSE_SUBTRACT};Mt[Al]=n.MIN,Mt[Cl]=n.MAX;let ze={[Rl]:n.ZERO,[Pl]:n.ONE,[Il]:n.SRC_COLOR,[tr]:n.SRC_ALPHA,[Bl]:n.SRC_ALPHA_SATURATE,[Nl]:n.DST_COLOR,[Dl]:n.DST_ALPHA,[Ll]:n.ONE_MINUS_SRC_COLOR,[ir]:n.ONE_MINUS_SRC_ALPHA,[Fl]:n.ONE_MINUS_DST_COLOR,[Ul]:n.ONE_MINUS_DST_ALPHA,[Ol]:n.CONSTANT_COLOR,[zl]:n.ONE_MINUS_CONSTANT_COLOR,[kl]:n.CONSTANT_ALPHA,[Gl]:n.ONE_MINUS_CONSTANT_ALPHA};function at(R,ce,re,ae,j,Z,pe,Ie,st,et){if(R===mi){v===true&&(fe(n.BLEND),v=false);return}if(v===false&&(K(n.BLEND),v=true),R!==Tl){if(R!==m||et!==S){if((d!==Oi||E!==Oi)&&(n.blendEquation(n.FUNC_ADD),d=Oi,E=Oi),et)switch(R){case wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFunc(n.ONE,n.ONE);break;case so:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ro:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Be("WebGLState: Invalid blending: ",R);break}else switch(R){case wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case so:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ro:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",R);break}M=null,b=null,A=null,T=null,P.set(0,0,0),B=0,m=R,S=et;}return}j=j||ce,Z=Z||re,pe=pe||ae,(ce!==d||j!==E)&&(n.blendEquationSeparate(Mt[ce],Mt[j]),d=ce,E=j),(re!==M||ae!==b||Z!==A||pe!==T)&&(n.blendFuncSeparate(ze[re],ze[ae],ze[Z],ze[pe]),M=re,b=ae,A=Z,T=pe),(Ie.equals(P)===false||st!==B)&&(n.blendColor(Ie.r,Ie.g,Ie.b,st),P.copy(Ie),B=st),m=R,S=false;}function C(R,ce){R.side===Ut?fe(n.CULL_FACE):K(n.CULL_FACE);let re=R.side===Dt;ce&&(re=!re),Ge(re),R.blending===wi&&R.transparent===false?at(mi):at(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);let ae=R.stencilWrite;a.setTest(ae),ae&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ge(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===true?K(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE);}function Ge(R){y!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),y=R);}function Ve(R){R!==bl?(K(n.CULL_FACE),R!==I&&(R===io?n.cullFace(n.BACK):R===Ml?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),I=R;}function nt(R){R!==N&&(W&&n.lineWidth(R),N=R);}function ge(R,ce,re){R?(K(n.POLYGON_OFFSET_FILL),(V!==ce||q!==re)&&(n.polygonOffset(ce,re),V=ce,q=re)):fe(n.POLYGON_OFFSET_FILL);}function ot(R){R?K(n.SCISSOR_TEST):fe(n.SCISSOR_TEST);}function Me(R){R===void 0&&(R=n.TEXTURE0+F-1),ee!==R&&(n.activeTexture(R),ee=R);}function Le(R,ce,re){re===void 0&&(ee===null?re=n.TEXTURE0+F-1:re=ee);let ae=te[re];ae===void 0&&(ae={type:void 0,texture:void 0},te[re]=ae),(ae.type!==R||ae.texture!==ce)&&(ee!==re&&(n.activeTexture(re),ee=re),n.bindTexture(R,ce||Y[R]),ae.type=R,ae.texture=ce);}function w(){let R=te[ee];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0);}function x(){try{n.compressedTexImage2D(...arguments);}catch(R){R("WebGLState:",R);}}function U(){try{n.compressedTexImage3D(...arguments);}catch(R){R("WebGLState:",R);}}function X(){try{n.texSubImage2D(...arguments);}catch(R){R("WebGLState:",R);}}function J(){try{n.texSubImage3D(...arguments);}catch(R){R("WebGLState:",R);}}function H(){try{n.compressedTexSubImage2D(...arguments);}catch(R){R("WebGLState:",R);}}function ve(){try{n.compressedTexSubImage3D(...arguments);}catch(R){R("WebGLState:",R);}}function le(){try{n.texStorage2D(...arguments);}catch(R){R("WebGLState:",R);}}function Se(){try{n.texStorage3D(...arguments);}catch(R){R("WebGLState:",R);}}function xe(){try{n.texImage2D(...arguments);}catch(R){R("WebGLState:",R);}}function Q(){try{n.texImage3D(...arguments);}catch(R){R("WebGLState:",R);}}function ne(R){qe.equals(R)===false&&(n.scissor(R.x,R.y,R.z,R.w),qe.copy(R));}function Ae(R){Qe.equals(R)===false&&(n.viewport(R.x,R.y,R.z,R.w),Qe.copy(R));}function we(R,ce){let re=c.get(ce);re===void 0&&(re=new WeakMap,c.set(ce,re));let ae=re.get(R);ae===void 0&&(ae=n.getUniformBlockIndex(ce,R.name),re.set(R,ae));}function ue(R,ce){let ae=c.get(ce).get(R);l.get(ce)!==ae&&(n.uniformBlockBinding(ce,ae,R.__bindingPointIndex),l.set(ce,ae));}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(true,true,true,true),n.clearColor(0,0,0,0),n.depthMask(true),n.depthFunc(n.LESS),o.setReversed(false),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ee=null,te={},u={},f=new WeakMap,p=[],g=null,v=false,m=null,d=null,M=null,b=null,E=null,A=null,T=null,P=new Oe(0,0,0),B=0,S=false,y=null,I=null,N=null,V=null,q=null,qe.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset();}return {buffers:{color:r,depth:o,stencil:a},enable:K,disable:fe,bindFramebuffer:De,drawBuffers:_e,useProgram:ke,setBlending:at,setMaterial:C,setFlipSided:Ge,setCullFace:Ve,setLineWidth:nt,setPolygonOffset:ge,setScissorTest:ot,activeTexture:Me,bindTexture:Le,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:xe,texImage3D:Q,updateUBOMapping:we,uniformBlockBinding:ue,texStorage2D:le,texStorage3D:Se,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:H,compressedTexSubImage3D:ve,scissor:ne,viewport:Ae,reset:Re}}function P0(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?false:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,h=new WeakMap,u,f=new WeakMap,p=false;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null;}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):ls("canvas")}function v(w,x,U){let X=1,J=Le(w);if((J.width>U||J.height>U)&&(X=U/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let H=Math.floor(X*J.width),ve=Math.floor(X*J.height);u===void 0&&(u=g(H,ve));let le=x?g(H,ve):u;return le.width=H,le.height=ve,le.getContext("2d").drawImage(w,0,0,H,ve),Pe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+H+"x"+ve+")."),le}else return "data"in w&&Pe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){n.generateMipmap(w);}function M(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(w,x,U,X,J=false){if(w!==null){if(n[w]!==void 0)return n[w];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'");}let H=x;if(x===n.RED&&(U===n.FLOAT&&(H=n.R32F),U===n.HALF_FLOAT&&(H=n.R16F),U===n.UNSIGNED_BYTE&&(H=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.R8UI),U===n.UNSIGNED_SHORT&&(H=n.R16UI),U===n.UNSIGNED_INT&&(H=n.R32UI),U===n.BYTE&&(H=n.R8I),U===n.SHORT&&(H=n.R16I),U===n.INT&&(H=n.R32I)),x===n.RG&&(U===n.FLOAT&&(H=n.RG32F),U===n.HALF_FLOAT&&(H=n.RG16F),U===n.UNSIGNED_BYTE&&(H=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RG8UI),U===n.UNSIGNED_SHORT&&(H=n.RG16UI),U===n.UNSIGNED_INT&&(H=n.RG32UI),U===n.BYTE&&(H=n.RG8I),U===n.SHORT&&(H=n.RG16I),U===n.INT&&(H=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RGB8UI),U===n.UNSIGNED_SHORT&&(H=n.RGB16UI),U===n.UNSIGNED_INT&&(H=n.RGB32UI),U===n.BYTE&&(H=n.RGB8I),U===n.SHORT&&(H=n.RGB16I),U===n.INT&&(H=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),U===n.UNSIGNED_INT&&(H=n.RGBA32UI),U===n.BYTE&&(H=n.RGBA8I),U===n.SHORT&&(H=n.RGBA16I),U===n.INT&&(H=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),x===n.RGBA){let ve=J?as:Xe.getTransfer(X);U===n.FLOAT&&(H=n.RGBA32F),U===n.HALF_FLOAT&&(H=n.RGBA16F),U===n.UNSIGNED_BYTE&&(H=ve===Je?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1);}return (H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function E(w,x){let U;return w?x===null||x===Xi||x===Gn?U=n.DEPTH24_STENCIL8:x===ii?U=n.DEPTH32F_STENCIL8:x===kn&&(U=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xi||x===Gn?U=n.DEPTH_COMPONENT24:x===ii?U=n.DEPTH_COMPONENT32F:x===kn&&(U=n.DEPTH_COMPONENT16),U}function A(w,x){return m(w)===true||w.isFramebufferTexture&&w.minFilter!==St&&w.minFilter!==ft?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){let x=w.target;x.removeEventListener("dispose",T),B(x),x.isVideoTexture&&h.delete(x);}function P(w){let x=w.target;x.removeEventListener("dispose",P),y(x);}function B(w){let x=i.get(w);if(x.__webglInit===void 0)return;let U=w.source,X=f.get(U);if(X){let J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(w),Object.keys(X).length===0&&f.delete(U);}i.remove(w);}function S(w){let x=i.get(w);n.deleteTexture(x.__webglTexture);let U=w.source,X=f.get(U);delete X[x.__cacheKey],o.memory.textures--;}function y(w){let x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)n.deleteFramebuffer(x.__webglFramebuffer[X][J]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X]);}else {if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer);}let U=w.textures;for(let X=0,J=U.length;X<J;X++){let H=i.get(U[X]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(U[X]);}i.remove(w);}let I=0;function N(){I=0;}function V(){let w=I;return w>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),I+=1,w}function q(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function F(w,x){let U=i.get(w);if(w.isVideoTexture&&ot(w),w.isRenderTargetTexture===false&&w.isExternalTexture!==true&&w.version>0&&U.__version!==w.version){let X=w.image;if(X===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===false)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else {Y(U,w,x);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x);}function W(w,x){let U=i.get(w);if(w.isRenderTargetTexture===false&&w.version>0&&U.__version!==w.version){Y(U,w,x);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x);}function $(w,x){let U=i.get(w);if(w.isRenderTargetTexture===false&&w.version>0&&U.__version!==w.version){Y(U,w,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x);}function G(w,x){let U=i.get(w);if(w.version>0&&U.__version!==w.version){K(U,w,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x);}let ee={[nr]:n.REPEAT,[Wt]:n.CLAMP_TO_EDGE,[sr]:n.MIRRORED_REPEAT},te={[St]:n.NEAREST,[Kl]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[ft]:n.LINEAR,[Ur]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},ye={[ic]:n.NEVER,[lc]:n.ALWAYS,[nc]:n.LESS,[go]:n.LEQUAL,[sc]:n.EQUAL,[oc]:n.GEQUAL,[rc]:n.GREATER,[ac]:n.NOTEQUAL};function Fe(w,x){if(x.type===ii&&e.has("OES_texture_float_linear")===false&&(x.magFilter===ft||x.magFilter===Ur||x.magFilter===_s||x.magFilter===Wi||x.minFilter===ft||x.minFilter===Ur||x.minFilter===_s||x.minFilter===Wi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ee[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ee[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ee[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,te[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ye[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===true){if(x.magFilter===St||x.minFilter!==_s&&x.minFilter!==Wi||x.type===ii&&e.has("OES_texture_float_linear")===false)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy;}}}function qe(w,x){let U=false;w.__webglInit===void 0&&(w.__webglInit=true,x.addEventListener("dispose",T));let X=x.source,J=f.get(X);J===void 0&&(J={},f.set(X,J));let H=q(x);if(H!==w.__cacheKey){J[H]===void 0&&(J[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=true),J[H].usedTimes++;let ve=J[w.__cacheKey];ve!==void 0&&(J[w.__cacheKey].usedTimes--,ve.usedTimes===0&&S(x)),w.__cacheKey=H,w.__webglTexture=J[H].texture;}return U}function Qe(w,x,U){return Math.floor(Math.floor(w/U)/x)}function je(w,x,U,X){let H=w.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,X,x.data);else {H.sort((Q,ne)=>Q.start-ne.start);let ve=0;for(let Q=1;Q<H.length;Q++){let ne=H[ve],Ae=H[Q],we=ne.start+ne.count,ue=Qe(Ae.start,x.width,4),Re=Qe(ne.start,x.width,4);Ae.start<=we+1&&ue===Re&&Qe(Ae.start+Ae.count-1,x.width,4)===ue?ne.count=Math.max(ne.count,Ae.start+Ae.count-ne.start):(++ve,H[ve]=Ae);}H.length=ve+1;let le=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Q=0,ne=H.length;Q<ne;Q++){let Ae=H[Q],we=Math.floor(Ae.start/4),ue=Math.ceil(Ae.count/4),Re=we%x.width,R=Math.floor(we/x.width),ce=ue,re=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,Re,R,ce,re,U,X,x.data);}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,le),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,xe);}}function Y(w,x,U){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);let J=qe(w,x),H=x.source;t.bindTexture(X,w.__webglTexture,n.TEXTURE0+U);let ve=i.get(H);if(H.version!==ve.__version||J===true){t.activeTexture(n.TEXTURE0+U);let le=Xe.getPrimaries(Xe.workingColorSpace),Se=x.colorSpace===Ri?null:Xe.getPrimaries(x.colorSpace),xe=x.colorSpace===Ri||le===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Q=v(x.image,false,s.maxTextureSize);Q=Me(x,Q);let ne=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),we=b(x.internalFormat,ne,Ae,x.colorSpace,x.isVideoTexture);Fe(X,x);let ue,Re=x.mipmaps,R=x.isVideoTexture!==true,ce=ve.__version===void 0||J===true,re=H.dataReady,ae=A(x,Q);if(x.isDepthTexture)we=E(x.format===Vn,x.type),ce&&(R?t.texStorage2D(n.TEXTURE_2D,1,we,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,we,Q.width,Q.height,0,ne,Ae,null));else if(x.isDataTexture)if(Re.length>0){R&&ce&&t.texStorage2D(n.TEXTURE_2D,ae,we,Re[0].width,Re[0].height);for(let j=0,Z=Re.length;j<Z;j++)ue=Re[j],R?re&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ue.width,ue.height,ne,Ae,ue.data):t.texImage2D(n.TEXTURE_2D,j,we,ue.width,ue.height,0,ne,Ae,ue.data);x.generateMipmaps=false;}else R?(ce&&t.texStorage2D(n.TEXTURE_2D,ae,we,Q.width,Q.height),re&&je(x,Q,ne,Ae)):t.texImage2D(n.TEXTURE_2D,0,we,Q.width,Q.height,0,ne,Ae,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){R&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,we,Re[0].width,Re[0].height,Q.depth);for(let j=0,Z=Re.length;j<Z;j++)if(ue=Re[j],x.format!==Ot)if(ne!==null)if(R){if(re)if(x.layerUpdates.size>0){let pe=To(ue.width,ue.height,x.format,x.type);for(let Ie of x.layerUpdates){let st=ue.data.subarray(Ie*pe/ue.data.BYTES_PER_ELEMENT,(Ie+1)*pe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,Ie,ue.width,ue.height,1,ne,st);}x.clearLayerUpdates();}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ue.width,ue.height,Q.depth,ne,ue.data);}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,we,ue.width,ue.height,Q.depth,0,ue.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?re&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ue.width,ue.height,Q.depth,ne,Ae,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,we,ue.width,ue.height,Q.depth,0,ne,Ae,ue.data);}else {R&&ce&&t.texStorage2D(n.TEXTURE_2D,ae,we,Re[0].width,Re[0].height);for(let j=0,Z=Re.length;j<Z;j++)ue=Re[j],x.format!==Ot?ne!==null?R?re&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ue.width,ue.height,ne,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,j,we,ue.width,ue.height,0,ue.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?re&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ue.width,ue.height,ne,Ae,ue.data):t.texImage2D(n.TEXTURE_2D,j,we,ue.width,ue.height,0,ne,Ae,ue.data);}else if(x.isDataArrayTexture)if(R){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,we,Q.width,Q.height,Q.depth),re)if(x.layerUpdates.size>0){let j=To(Q.width,Q.height,x.format,x.type);for(let Z of x.layerUpdates){let pe=Q.data.subarray(Z*j/Q.data.BYTES_PER_ELEMENT,(Z+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ne,Ae,pe);}x.clearLayerUpdates();}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ne,Ae,Q.data);}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,Q.width,Q.height,Q.depth,0,ne,Ae,Q.data);else if(x.isData3DTexture)R?(ce&&t.texStorage3D(n.TEXTURE_3D,ae,we,Q.width,Q.height,Q.depth),re&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ne,Ae,Q.data)):t.texImage3D(n.TEXTURE_3D,0,we,Q.width,Q.height,Q.depth,0,ne,Ae,Q.data);else if(x.isFramebufferTexture){if(ce)if(R)t.texStorage2D(n.TEXTURE_2D,ae,we,Q.width,Q.height);else {let j=Q.width,Z=Q.height;for(let pe=0;pe<ae;pe++)t.texImage2D(n.TEXTURE_2D,pe,we,j,Z,0,ne,Ae,null),j>>=1,Z>>=1;}}else if(Re.length>0){if(R&&ce){let j=Le(Re[0]);t.texStorage2D(n.TEXTURE_2D,ae,we,j.width,j.height);}for(let j=0,Z=Re.length;j<Z;j++)ue=Re[j],R?re&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ne,Ae,ue):t.texImage2D(n.TEXTURE_2D,j,we,ne,Ae,ue);x.generateMipmaps=false;}else if(R){if(ce){let j=Le(Q);t.texStorage2D(n.TEXTURE_2D,ae,we,j.width,j.height);}re&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne,Ae,Q);}else t.texImage2D(n.TEXTURE_2D,0,we,ne,Ae,Q);m(x)&&d(X),ve.__version=H.version,x.onUpdate&&x.onUpdate(x);}w.__version=x.version;}function K(w,x,U){if(x.image.length!==6)return;let X=qe(w,x),J=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+U);let H=i.get(J);if(J.version!==H.__version||X===true){t.activeTexture(n.TEXTURE0+U);let ve=Xe.getPrimaries(Xe.workingColorSpace),le=x.colorSpace===Ri?null:Xe.getPrimaries(x.colorSpace),Se=x.colorSpace===Ri||ve===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let xe=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let Z=0;Z<6;Z++)!xe&&!Q?ne[Z]=v(x.image[Z],true,s.maxCubemapSize):ne[Z]=Q?x.image[Z].image:x.image[Z],ne[Z]=Me(x,ne[Z]);let Ae=ne[0],we=r.convert(x.format,x.colorSpace),ue=r.convert(x.type),Re=b(x.internalFormat,we,ue,x.colorSpace),R=x.isVideoTexture!==true,ce=H.__version===void 0||X===true,re=J.dataReady,ae=A(x,Ae);Fe(n.TEXTURE_CUBE_MAP,x);let j;if(xe){R&&ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Re,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){j=ne[Z].mipmaps;for(let pe=0;pe<j.length;pe++){let Ie=j[pe];x.format!==Ot?we!==null?R?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,Ie.width,Ie.height,we,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Re,Ie.width,Ie.height,0,Ie.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,0,0,Ie.width,Ie.height,we,ue,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe,Re,Ie.width,Ie.height,0,we,ue,Ie.data);}}}else {if(j=x.mipmaps,R&&ce){j.length>0&&ae++;let Z=Le(ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Re,Z.width,Z.height);}for(let Z=0;Z<6;Z++)if(Q){R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ne[Z].width,ne[Z].height,we,ue,ne[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Re,ne[Z].width,ne[Z].height,0,we,ue,ne[Z].data);for(let pe=0;pe<j.length;pe++){let st=j[pe].image[Z].image;R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,st.width,st.height,we,ue,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Re,st.width,st.height,0,we,ue,st.data);}}else {R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,ue,ne[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Re,we,ue,ne[Z]);for(let pe=0;pe<j.length;pe++){let Ie=j[pe];R?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,0,0,we,ue,Ie.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pe+1,Re,we,ue,Ie.image[Z]);}}}m(x)&&d(n.TEXTURE_CUBE_MAP),H.__version=J.version,x.onUpdate&&x.onUpdate(x);}w.__version=x.version;}function fe(w,x,U,X,J,H){let ve=r.convert(U.format,U.colorSpace),le=r.convert(U.type),Se=b(U.internalFormat,ve,le,U.colorSpace),xe=i.get(x),Q=i.get(U);if(Q.__renderTarget=x,!xe.__hasExternalTextures){let ne=Math.max(1,x.width>>H),Ae=Math.max(1,x.height>>H);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,H,Se,ne,Ae,x.depth,0,ve,le,null):t.texImage2D(J,H,Se,ne,Ae,0,ve,le,null);}t.bindFramebuffer(n.FRAMEBUFFER,w),ge(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,J,Q.__webglTexture,0,nt(x)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,J,Q.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null);}function De(w,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){let X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,H=E(x.stencilBuffer,J),ve=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=nt(x);ge(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,H,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,H,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,H,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,w);}else {let X=x.textures;for(let J=0;J<X.length;J++){let H=X[J],ve=r.convert(H.format,H.colorSpace),le=r.convert(H.type),Se=b(H.internalFormat,ve,le,H.colorSpace),xe=nt(x);U&&ge(x)===false?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,Se,x.width,x.height):ge(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,Se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Se,x.width,x.height);}}n.bindRenderbuffer(n.RENDERBUFFER,null);}function _e(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=true),F(x.depthTexture,0);let J=X.__webglTexture,H=nt(x);if(x.depthTexture.format===Rn)ge(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===Vn)ge(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ke(w){let x=i.get(w),U=w.isWebGLCubeRenderTarget===true;if(x.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J);};X.addEventListener("dispose",J),x.__depthDisposeCallback=J;}x.__boundDepthTexture=X;}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let X=w.texture.mipmaps;X&&X.length>0?_e(x.__webglFramebuffer[0],w):_e(x.__webglFramebuffer,w);}else if(U){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),De(x.__webglDepthbuffer[X],w,false);else {let J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,H);}}else {let X=w.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),De(x.__webglDepthbuffer,w,false);else {let J=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,H);}}t.bindFramebuffer(n.FRAMEBUFFER,null);}function Mt(w,x,U){let X=i.get(w);x!==void 0&&fe(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ke(w);}function ze(w){let x=w.texture,U=i.get(w),X=i.get(x);w.addEventListener("dispose",P);let J=w.textures,H=w.isWebGLCubeRenderTarget===true,ve=J.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,o.memory.textures++),H){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let Se=0;Se<x.mipmaps.length;Se++)U.__webglFramebuffer[le][Se]=n.createFramebuffer();}else U.__webglFramebuffer[le]=n.createFramebuffer();}else {if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)U.__webglFramebuffer[le]=n.createFramebuffer();}else U.__webglFramebuffer=n.createFramebuffer();if(ve)for(let le=0,Se=J.length;le<Se;le++){let xe=i.get(J[le]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++);}if(w.samples>0&&ge(w)===false){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){let Se=J[le];U.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[le]);let xe=r.convert(Se.format,Se.colorSpace),Q=r.convert(Se.type),ne=b(Se.internalFormat,xe,Q,Se.colorSpace,w.isXRRenderTarget===true),Ae=nt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,ne,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,U.__webglColorRenderbuffer[le]);}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),De(U.__webglDepthRenderbuffer,w,true)),t.bindFramebuffer(n.FRAMEBUFFER,null);}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)fe(U.__webglFramebuffer[le][Se],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Se);else fe(U.__webglFramebuffer[le],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture();}else if(ve){for(let le=0,Se=J.length;le<Se;le++){let xe=J[le],Q=i.get(xe),ne=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ne,Q.__webglTexture),Fe(ne,xe),fe(U.__webglFramebuffer,w,xe,n.COLOR_ATTACHMENT0+le,ne,0),m(xe)&&d(ne);}t.unbindTexture();}else {let le=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,X.__webglTexture),Fe(le,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)fe(U.__webglFramebuffer[Se],w,x,n.COLOR_ATTACHMENT0,le,Se);else fe(U.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,le,0);m(x)&&d(le),t.unbindTexture();}w.depthBuffer&&ke(w);}function at(w){let x=w.textures;for(let U=0,X=x.length;U<X;U++){let J=x[U];if(m(J)){let H=M(w),ve=i.get(J).__webglTexture;t.bindTexture(H,ve),d(H),t.unbindTexture();}}}let C=[],Ge=[];function Ve(w){if(w.samples>0){if(ge(w)===false){let x=w.textures,U=w.width,X=w.height,J=n.COLOR_BUFFER_BIT,H=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(w),le=x.length>1;if(le)for(let xe=0;xe<x.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let Se=w.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let Q=i.get(x[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0);}n.blitFramebuffer(0,0,U,X,0,0,U,X,J,n.NEAREST),l===true&&(C.length=0,Ge.length=0,C.push(n.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.resolveDepthBuffer===false&&(C.push(H),Ge.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ge)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C));}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let xe=0;xe<x.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let Q=i.get(x[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Q,0);}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);}else if(w.depthBuffer&&w.resolveDepthBuffer===false&&l){let x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x]);}}}function nt(w){return Math.min(s.maxSamples,w.samples)}function ge(w){let x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===true&&x.__useRenderToTexture!==false}function ot(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update());}function Me(w,x){let U=w.colorSpace,X=w.format,J=w.type;return w.isCompressedTexture===true||w.isVideoTexture===true||U!==sn&&U!==Ri&&(Xe.getTransfer(U)===Je?(X!==Ot||J!==gi)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",U)),x}function Le(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=N,this.setTexture2D=F,this.setTexture2DArray=W,this.setTexture3D=$,this.setTextureCube=G,this.rebindTextures=Mt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge;}function I0(n,e){function t(i,s=Ri){let r,o=Xe.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===Fr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Br)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ho)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uo)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lo)return n.BYTE;if(i===co)return n.SHORT;if(i===kn)return n.UNSIGNED_SHORT;if(i===Nr)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===cn)return n.HALF_FLOAT;if(i===fo)return n.ALPHA;if(i===po)return n.RGB;if(i===Ot)return n.RGBA;if(i===Rn)return n.DEPTH_COMPONENT;if(i===Vn)return n.DEPTH_STENCIL;if(i===mo)return n.RED;if(i===Or)return n.RED_INTEGER;if(i===zr)return n.RG;if(i===kr)return n.RG_INTEGER;if(i===Gr)return n.RGBA_INTEGER;if(i===bs||i===Ms||i===Ss||i===Ts)if(o===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ss)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ts)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vr||i===Hr||i===Wr||i===Xr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yr||i===qr||i===Zr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yr||i===qr)return o===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zr)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$r||i===Jr||i===Kr||i===Qr||i===jr||i===ea||i===ta||i===ia||i===na||i===sa||i===ra||i===aa||i===oa||i===la)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$r)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jr)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kr)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qr)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jr)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ea)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ta)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ia)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===na)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ra)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===aa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oa)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===la)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ca||i===ha||i===ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ca)return o===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===da||i===fa||i===pa||i===ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===da)return r.COMPRESSED_RED_RGTC1_EXT;if(i===fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gn?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return {convert:t}}var L0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0;}init(e,t){if(this.texture===null){let i=new xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i;}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new wt({vertexShader:L0,fragmentShader:D0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Zt(20,20),i);}return this.mesh}reset(){this.texture=null,this.mesh=null;}getDepthTexture(){return this.texture}},Bo=class extends Ei{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new Fo,d={},M=t.getContextAttributes(),b=null,E=null,A=[],T=[],P=new Ye,B=null,S=new Ct;S.viewport=new pt;let y=new Ct;y.viewport=new pt;let I=[S,y],N=new Tr,V=null,q=null;this.cameraAutoUpdate=true,this.enabled=false,this.isPresenting=false,this.getController=function(Y){let K=A[Y];return K===void 0&&(K=new Bn,A[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=A[Y];return K===void 0&&(K=new Bn,A[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=A[Y];return K===void 0&&(K=new Bn,A[Y]=K),K.getHandSpace()};function F(Y){let K=T.indexOf(Y.inputSource);if(K===-1)return;let fe=A[K];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}));}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",$);for(let Y=0;Y<A.length;Y++){let K=T[Y];K!==null&&(T[Y]=null,A[Y].disconnect(K));}V=null,q=null,m.reset();for(let Y in d)delete d[Y];e.setRenderTarget(b),p=null,f=null,u=null,s=null,E=null,je.stop(),i.isPresenting=false,e.setPixelRatio(B),e.setSize(P.width,P.height,false),i.dispatchEvent({type:"sessionend"});}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===true&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.");},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===true&&Pe("WebXRManager: Cannot change reference space type while presenting.");},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y;},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",$),M.xrCompatible!==true&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,De=null,_e=null;M.depth&&(_e=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=M.stencil?Vn:Rn,De=M.stencil?Gn:Xi);let ke={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,false),E=new fi(f.textureWidth,f.textureHeight,{format:Ot,type:gi,depthTexture:new gs(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===false,resolveStencilBuffer:f.ignoreDepthValues===false});}else {let fe={antialias:M.antialias,alpha:true,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,false),E=new fi(p.framebufferWidth,p.framebufferHeight,{format:Ot,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===false,resolveStencilBuffer:p.ignoreDepthValues===false});}E.isXRRenderTarget=true,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=true,i.dispatchEvent({type:"sessionstart"});}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function $(Y){for(let K=0;K<Y.removed.length;K++){let fe=Y.removed[K],De=T.indexOf(fe);De>=0&&(T[De]=null,A[De].disconnect(fe));}for(let K=0;K<Y.added.length;K++){let fe=Y.added[K],De=T.indexOf(fe);if(De===-1){for(let ke=0;ke<A.length;ke++)if(ke>=T.length){T.push(fe),De=ke;break}else if(T[ke]===null){T[ke]=fe,De=ke;break}if(De===-1)break}let _e=A[De];_e&&_e.connect(fe);}}let G=new O,ee=new O;function te(Y,K,fe){G.setFromMatrixPosition(K.matrixWorld),ee.setFromMatrixPosition(fe.matrixWorld);let De=G.distanceTo(ee),_e=K.projectionMatrix.elements,ke=fe.projectionMatrix.elements,Mt=_e[14]/(_e[10]-1),ze=_e[14]/(_e[10]+1),at=(_e[9]+1)/_e[5],C=(_e[9]-1)/_e[5],Ge=(_e[8]-1)/_e[0],Ve=(ke[8]+1)/ke[0],nt=Mt*Ge,ge=Mt*Ve,ot=De/(-Ge+Ve),Me=ot*-Ge;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Me),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else {let Le=Mt+ot,w=ze+ot,x=nt-Me,U=ge+(De-Me),X=at*ze/w*Le,J=C*ze/w*Le;Y.projectionMatrix.makePerspective(x,U,X,J,Le,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();}}function ye(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();}this.updateCamera=function(Y){if(s===null)return;let K=Y.near,fe=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),N.near=y.near=S.near=K,N.far=y.far=S.far=fe,(V!==N.near||q!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),V=N.near,q=N.far),N.layers.mask=Y.layers.mask|6,S.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;let De=Y.parent,_e=N.cameras;ye(N,De);for(let ke=0;ke<_e.length;ke++)ye(_e[ke],De);_e.length===2?te(N,S,y):N.projectionMatrix.copy(S.projectionMatrix),Fe(Y,N,De);};function Fe(Y,K,fe){fe===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(true),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ln*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1);}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y);},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return d[Y]};let qe=null;function Qe(Y,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let De=false;fe.length!==N.cameras.length&&(N.cameras.length=0,De=true);for(let ze=0;ze<fe.length;ze++){let at=fe[ze],C=null;if(p!==null)C=p.getViewport(at);else {let Ve=u.getViewSubImage(f,at);C=Ve.viewport,ze===0&&(e.setRenderTargetTextures(E,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(E));}let Ge=I[ze];Ge===void 0&&(Ge=new Ct,Ge.layers.enable(ze),Ge.viewport=new pt,I[ze]=Ge),Ge.matrix.fromArray(at.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(at.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(C.x,C.y,C.width,C.height),ze===0&&(N.matrix.copy(Ge.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===true&&N.cameras.push(Ge);}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let ze=u.getDepthInformation(fe[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,s.renderState);}if(_e&&_e.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let ze=0;ze<fe.length;ze++){let at=fe[ze].camera;if(at){let C=d[at];C||(C=new xs,d[at]=C);let Ge=u.getCameraImage(at);C.sourceTexture=Ge;}}}}for(let fe=0;fe<A.length;fe++){let De=T[fe],_e=A[fe];De!==null&&_e!==void 0&&_e.update(De,K,c||o);}qe&&qe(Y,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null;}let je=new Fc;je.setAnimationLoop(Qe),this.setAnimationLoop=function(Y){qe=Y;},this.dispose=function(){};}},dn=new ti,U0=new mt;function N0(n,e){function t(m,d){m.matrixAutoUpdate===true&&m.updateMatrix(),d.value.copy(m.matrix);}function i(m,d){d.color.getRGB(m.fogColor.value,bo(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density);}function s(m,d,M,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=false);}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=e.get(d),b=M.envMap,E=M.envMapRotation;b&&(m.envMap.value=b,dn.copy(E),dn.x*=-1,dn.y*=-1,dn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===false&&(dn.y*=-1,dn.z*=-1),m.envMapRotation.value.setFromMatrix4(U0.makeRotationFromEuler(dn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===false?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform));}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform));}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale;}function l(m,d,M,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4);}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap);}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity);}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform));}function g(m,d){d.matcap&&(m.matcap.value=d.matcap);}function v(m,d){let M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far;}return {refreshFogUniforms:i,refreshMaterialUniforms:s}}function F0(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let E=b.program;i.uniformBlockBinding(M,E);}function c(M,b){let E=s[M.id];E===void 0&&(g(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",m));let A=b.program;i.updateUBOMapping(M,A);let T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T);}function h(M){let b=u();M.__bindingPointIndex=b;let E=n.createBuffer(),A=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let b=s[M.id],E=M.uniforms,A=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,P=E.length;T<P;T++){let B=Array.isArray(E[T])?E[T]:[E[T]];for(let S=0,y=B.length;S<y;S++){let I=B[S];if(p(I,T,S,A)===true){let N=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],q=0;for(let F=0;F<V.length;F++){let W=V[F],$=v(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+q,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT);}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data);}}}n.bindBuffer(n.UNIFORM_BUFFER,null);}function p(M,b,E,A){let T=M.value,P=b+"_"+E;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),true;{let B=A[P];if(typeof T=="number"||typeof T=="boolean"){if(B!==T)return A[P]=T,true}else if(B.equals(T)===false)return B.copy(T),true}return  false}function g(M){let b=M.uniforms,E=0,A=16;for(let P=0,B=b.length;P<B;P++){let S=Array.isArray(b[P])?b[P]:[b[P]];for(let y=0,I=S.length;y<I;y++){let N=S[y],V=Array.isArray(N.value)?N.value:[N.value];for(let q=0,F=V.length;q<F;q++){let W=V[q],$=v(W),G=E%A,ee=G%$.boundary,te=G+ee;E+=ee,te!==0&&A-te<$.storage&&(E+=A-te),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=$.storage;}}}let T=E%A;return T>0&&(E+=A-T),M.__size=E,M.__cache={},this}function v(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){let b=M.target;b.removeEventListener("dispose",m);let E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id];}function d(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={};}return {bind:l,update:c,dispose:d}}var B0=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Pi=null;function O0(){return Pi===null&&(Pi=new On(B0,32,32,zr,cn),Pi.minFilter=ft,Pi.magFilter=ft,Pi.wrapS=Wt,Pi.wrapT=Wt,Pi.generateMipmaps=false,Pi.needsUpdate=true),Pi}var ya=class{constructor(e={}){let{canvas:t=cc(),context:i=null,depth:s=true,stencil:r=false,alpha:o=false,antialias:a=false,premultipliedAlpha:l=true,preserveDrawingBuffer:c=false,powerPreference:h="default",failIfMajorPerformanceCaveat:u=false,reversedDepthBuffer:f=false}=e;this.isWebGLRenderer=true;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha;}else p=o;let g=new Set([Gr,kr,Or]),v=new Set([gi,Xi,kn,Gn,Fr,Br]),m=new Uint32Array(4),d=new Int32Array(4),M=null,b=null,E=[],A=[];this.domElement=t,this.debug={checkShaderErrors:true,onShaderError:null},this.autoClear=true,this.autoClearColor=true,this.autoClearDepth=true,this.autoClearStencil=true,this.sortObjects=true,this.clippingPlanes=[],this.localClippingEnabled=false,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=false;this._outputColorSpace=Ht;let B=0,S=0,y=null,I=-1,N=null,V=new pt,q=new pt,F=null,W=new Oe(0),$=0,G=t.width,ee=t.height,te=1,ye=null,Fe=null,qe=new pt(0,0,G,ee),Qe=new pt(0,0,G,ee),je=false,Y=new ms,K=false,fe=false,De=new mt,_e=new O,ke=new pt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:true},ze=false;function at(){return y===null?te:1}let C=i;function Ge(_,L){return t.getContext(_,L)}try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",pe,!1),C===null){let L="webgl2";if(C=Ge(L,_),C===null)throw Ge(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw _("WebGLRenderer: "+_.message),_}let Ve,nt,ge,ot,Me,Le,w,x,U,X,J,H,ve,le,Se,xe,Q,ne,Ae,we,ue,Re,R,ce;function re(){Ve=new ep(C),Ve.init(),Re=new I0(C,Ve),nt=new Xf(C,Ve,e,Re),ge=new R0(C,Ve),nt.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(true),ot=new np(C),Me=new g0,Le=new P0(C,Ve,ge,Me,nt,Re,ot),w=new qf(T),x=new jf(T),U=new au(C),R=new Hf(C,U),X=new tp(C,U,ot,R),J=new rp(C,X,U,ot),Ae=new sp(C,nt,Le),xe=new Yf(Me),H=new m0(T,w,x,Ve,nt,R,xe),ve=new N0(T,Me),le=new v0,Se=new T0(Ve),ne=new Vf(T,w,x,ge,J,p,l),Q=new A0(T,J,nt),ce=new F0(C,ot,nt,ge),we=new Wf(C,Ve,ot),ue=new ip(C,Ve,ot),ot.programs=H.programs,T.capabilities=nt,T.extensions=Ve,T.properties=Me,T.renderLists=le,T.shadowMap=Q,T.state=ge,T.info=ot;}re();let ae=new Bo(T,C);this.xr=ae,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=Ve.get("WEBGL_lose_context");_&&_.loseContext();},this.forceContextRestore=function(){let _=Ve.get("WEBGL_lose_context");_&&_.restoreContext();},this.getPixelRatio=function(){return te},this.setPixelRatio=function(_){_!==void 0&&(te=_,this.setSize(G,ee,false));},this.getSize=function(_){return _.set(G,ee)},this.setSize=function(_,L,z=true){if(ae.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}G=_,ee=L,t.width=Math.floor(_*te),t.height=Math.floor(L*te),z===true&&(t.style.width=_+"px",t.style.height=L+"px"),this.setViewport(0,0,_,L);},this.getDrawingBufferSize=function(_){return _.set(G*te,ee*te).floor()},this.setDrawingBufferSize=function(_,L,z){G=_,ee=L,te=z,t.width=Math.floor(_*z),t.height=Math.floor(L*z),this.setViewport(0,0,_,L);},this.getCurrentViewport=function(_){return _.copy(V)},this.getViewport=function(_){return _.copy(qe)},this.setViewport=function(_,L,z,k){_.isVector4?qe.set(_.x,_.y,_.z,_.w):qe.set(_,L,z,k),ge.viewport(V.copy(qe).multiplyScalar(te).round());},this.getScissor=function(_){return _.copy(Qe)},this.setScissor=function(_,L,z,k){_.isVector4?Qe.set(_.x,_.y,_.z,_.w):Qe.set(_,L,z,k),ge.scissor(q.copy(Qe).multiplyScalar(te).round());},this.getScissorTest=function(){return je},this.setScissorTest=function(_){ge.setScissorTest(je=_);},this.setOpaqueSort=function(_){ye=_;},this.setTransparentSort=function(_){Fe=_;},this.getClearColor=function(_){return _.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments);},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments);},this.clear=function(_=true,L=true,z=true){let k=0;if(_){let D=false;if(y!==null){let ie=y.texture.format;D=g.has(ie);}if(D){let ie=y.texture.type,he=v.has(ie),me=ne.getClearColor(),de=ne.getClearAlpha(),Ee=me.r,Ce=me.g,be=me.b;he?(m[0]=Ee,m[1]=Ce,m[2]=be,m[3]=de,C.clearBufferuiv(C.COLOR,0,m)):(d[0]=Ee,d[1]=Ce,d[2]=be,d[3]=de,C.clearBufferiv(C.COLOR,0,d));}else k|=C.COLOR_BUFFER_BIT;}L&&(k|=C.DEPTH_BUFFER_BIT),z&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k);},this.clearColor=function(){this.clear(true,false,false);},this.clearDepth=function(){this.clear(false,true,false);},this.clearStencil=function(){this.clear(false,false,true);},this.dispose=function(){t.removeEventListener("webglcontextlost",j,false),t.removeEventListener("webglcontextrestored",Z,false),t.removeEventListener("webglcontextcreationerror",pe,false),ne.dispose(),le.dispose(),Se.dispose(),Me.dispose(),w.dispose(),x.dispose(),J.dispose(),R.dispose(),ce.dispose(),H.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Yo),ae.removeEventListener("sessionend",qo),$i.stop();};function j(_){_.preventDefault(),yo("WebGLRenderer: Context Lost."),P=true;}function Z(){yo("WebGLRenderer: Context Restored."),P=false;let _=ot.autoReset,L=Q.enabled,z=Q.autoUpdate,k=Q.needsUpdate,D=Q.type;re(),ot.autoReset=_,Q.enabled=L,Q.autoUpdate=z,Q.needsUpdate=k,Q.type=D;}function pe(_){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage);}function Ie(_){let L=_.target;L.removeEventListener("dispose",Ie),st(L);}function st(_){et(_),Me.remove(_);}function et(_){let L=Me.get(_).programs;L!==void 0&&(L.forEach(function(z){H.releaseProgram(z);}),_.isShaderMaterial&&H.releaseShaderCache(_));}this.renderBufferDirect=function(_,L,z,k,D,ie){L===null&&(L=Mt);let he=D.isMesh&&D.matrixWorld.determinant()<0,me=ah(_,L,z,k,D);ge.setMaterial(k,he);let de=z.index,Ee=1;if(k.wireframe===true){if(de=X.getWireframeAttribute(z),de===void 0)return;Ee=2;}let Ce=z.drawRange,be=z.attributes.position,He=Ce.start*Ee,tt=(Ce.start+Ce.count)*Ee;ie!==null&&(He=Math.max(He,ie.start*Ee),tt=Math.min(tt,(ie.start+ie.count)*Ee)),de!==null?(He=Math.max(He,0),tt=Math.min(tt,de.count)):be!=null&&(He=Math.max(He,0),tt=Math.min(tt,be.count));let ut=tt-He;if(ut<0||ut===1/0)return;R.setup(D,k,me,z,de);let dt,it=we;if(de!==null&&(dt=U.get(de),it=ue,it.setIndex(dt)),D.isMesh)k.wireframe===true?(ge.setLineWidth(k.wireframeLinewidth*at()),it.setMode(C.LINES)):it.setMode(C.TRIANGLES);else if(D.isLine){let Te=k.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*at()),D.isLineSegments?it.setMode(C.LINES):D.isLineLoop?it.setMode(C.LINE_LOOP):it.setMode(C.LINE_STRIP);}else D.isPoints?it.setMode(C.POINTS):D.isSprite&&it.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)In("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))it.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else {let Te=D._multiDrawStarts,lt=D._multiDrawCounts,Ze=D._multiDrawCount,zt=de?U.get(de).bytesPerElement:1,pn=Me.get(k).currentProgram.getUniforms();for(let kt=0;kt<Ze;kt++)pn.setValue(C,"_gl_DrawID",kt),it.render(Te[kt]/zt,lt[kt]);}else if(D.isInstancedMesh)it.renderInstances(He,ut,D.count);else if(z.isInstancedBufferGeometry){let Te=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,lt=Math.min(z.instanceCount,Te);it.renderInstances(He,ut,lt);}else it.render(He,ut);};function ui(_,L,z){_.transparent===true&&_.side===Ut&&_.forceSinglePass===false?(_.side=Dt,_.needsUpdate=true,Ds(_,L,z),_.side=Ti,_.needsUpdate=true,Ds(_,L,z),_.side=Ut):Ds(_,L,z);}this.compile=function(_,L,z=null){z===null&&(z=_),b=Se.get(z),b.init(L),A.push(b),z.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(b.pushLight(D),D.castShadow&&b.pushShadow(D));}),_!==z&&_.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(b.pushLight(D),D.castShadow&&b.pushShadow(D));}),b.setupLights();let k=new Set;return _.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let ie=D.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){let me=ie[he];ui(me,z,D),k.add(me);}else ui(ie,z,D),k.add(ie);}),b=A.pop(),k},this.compileAsync=function(_,L,z=null){let k=this.compile(_,L,z);return new Promise(D=>{function ie(){if(k.forEach(function(he){Me.get(he).currentProgram.isReady()&&k.delete(he);}),k.size===0){D(_);return}setTimeout(ie,10);}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10);})};let ni=null;function rh(_){ni&&ni(_);}function Yo(){$i.stop();}function qo(){$i.start();}let $i=new Fc;$i.setAnimationLoop(rh),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(_){ni=_,ae.setAnimationLoop(_),_===null?$i.stop():$i.start();},ae.addEventListener("sessionstart",Yo),ae.addEventListener("sessionend",qo),this.render=function(_,L){if(L!==void 0&&L.isCamera!==true){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===true)return;if(_.matrixWorldAutoUpdate===true&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===true&&L.updateMatrixWorld(),ae.enabled===true&&ae.isPresenting===true&&(ae.cameraAutoUpdate===true&&ae.updateCamera(L),L=ae.getCamera()),_.isScene===true&&_.onBeforeRender(T,_,L,y),b=Se.get(_,A.length),b.init(L),A.push(b),De.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Y.setFromProjectionMatrix(De,oi,L.reversedDepth),fe=this.localClippingEnabled,K=xe.init(this.clippingPlanes,fe),M=le.get(_,E.length),M.init(),E.push(M),ae.enabled===true&&ae.isPresenting===true){let ie=T.xr.getDepthSensingMesh();ie!==null&&wa(ie,L,-1/0,T.sortObjects);}wa(_,L,0,T.sortObjects),M.finish(),T.sortObjects===true&&M.sort(ye,Fe),ze=ae.enabled===false||ae.isPresenting===false||ae.hasDepthSensing()===false,ze&&ne.addToRenderList(M,_),this.info.render.frame++,K===true&&xe.beginShadows();let z=b.state.shadowsArray;Q.render(z,_,L),K===true&&xe.endShadows(),this.info.autoReset===true&&this.info.reset();let k=M.opaque,D=M.transmissive;if(b.setupLights(),L.isArrayCamera){let ie=L.cameras;if(D.length>0)for(let he=0,me=ie.length;he<me;he++){let de=ie[he];$o(k,D,_,de);}ze&&ne.render(_);for(let he=0,me=ie.length;he<me;he++){let de=ie[he];Zo(M,_,de,de.viewport);}}else D.length>0&&$o(k,D,_,L),ze&&ne.render(_),Zo(M,_,L);y!==null&&S===0&&(Le.updateMultisampleRenderTarget(y),Le.updateRenderTargetMipmap(y)),_.isScene===true&&_.onAfterRender(T,_,L),R.resetDefaultState(),I=-1,N=null,A.pop(),A.length>0?(b=A[A.length-1],K===true&&xe.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?M=E[E.length-1]:M=null;};function wa(_,L,z,k){if(_.visible===false)return;if(_.layers.test(L.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===true&&_.update(L);else if(_.isLight)b.pushLight(_),_.castShadow&&b.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Y.intersectsSprite(_)){k&&ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(De);let he=J.update(_),me=_.material;me.visible&&M.push(_,he,me,z,ke.z,null);}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Y.intersectsObject(_))){let he=J.update(_),me=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ke.copy(_.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ke.copy(he.boundingSphere.center)),ke.applyMatrix4(_.matrixWorld).applyMatrix4(De)),Array.isArray(me)){let de=he.groups;for(let Ee=0,Ce=de.length;Ee<Ce;Ee++){let be=de[Ee],He=me[be.materialIndex];He&&He.visible&&M.push(_,he,He,z,ke.z,be);}}else me.visible&&M.push(_,he,me,z,ke.z,null);}}let ie=_.children;for(let he=0,me=ie.length;he<me;he++)wa(ie[he],L,z,k);}function Zo(_,L,z,k){let{opaque:D,transmissive:ie,transparent:he}=_;b.setupLightsView(z),K===true&&xe.setGlobalState(T.clippingPlanes,z),k&&ge.viewport(V.copy(k)),D.length>0&&Ls(D,L,z),ie.length>0&&Ls(ie,L,z),he.length>0&&Ls(he,L,z),ge.buffers.depth.setTest(true),ge.buffers.depth.setMask(true),ge.buffers.color.setMask(true),ge.setPolygonOffset(false);}function $o(_,L,z,k){if((z.isScene===true?z.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[k.id]===void 0&&(b.state.transmissionRenderTarget[k.id]=new fi(1,1,{generateMipmaps:true,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?cn:gi,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:false,resolveStencilBuffer:false,colorSpace:Xe.workingColorSpace}));let ie=b.state.transmissionRenderTarget[k.id],he=k.viewport||V;ie.setSize(he.z*T.transmissionResolutionScale,he.w*T.transmissionResolutionScale);let me=T.getRenderTarget(),de=T.getActiveCubeFace(),Ee=T.getActiveMipmapLevel();T.setRenderTarget(ie),T.getClearColor(W),$=T.getClearAlpha(),$<1&&T.setClearColor(16777215,.5),T.clear(),ze&&ne.render(z);let Ce=T.toneMapping;T.toneMapping=Ci;let be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),K===true&&xe.setGlobalState(T.clippingPlanes,k),Ls(_,z,k),Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===false){let He=false;for(let tt=0,ut=L.length;tt<ut;tt++){let dt=L[tt],{object:it,geometry:Te,material:lt,group:Ze}=dt;if(lt.side===Ut&&it.layers.test(k.layers)){let zt=lt.side;lt.side=Dt,lt.needsUpdate=true,Jo(it,z,k,Te,lt,Ze),lt.side=zt,lt.needsUpdate=true,He=true;}}He===true&&(Le.updateMultisampleRenderTarget(ie),Le.updateRenderTargetMipmap(ie));}T.setRenderTarget(me,de,Ee),T.setClearColor(W,$),be!==void 0&&(k.viewport=be),T.toneMapping=Ce;}function Ls(_,L,z){let k=L.isScene===true?L.overrideMaterial:null;for(let D=0,ie=_.length;D<ie;D++){let he=_[D],{object:me,geometry:de,group:Ee}=he,Ce=he.material;Ce.allowOverride===true&&k!==null&&(Ce=k),me.layers.test(z.layers)&&Jo(me,L,z,de,Ce,Ee);}}function Jo(_,L,z,k,D,ie){_.onBeforeRender(T,L,z,k,D,ie),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),D.onBeforeRender(T,L,z,k,_,ie),D.transparent===true&&D.side===Ut&&D.forceSinglePass===false?(D.side=Dt,D.needsUpdate=true,T.renderBufferDirect(z,L,k,D,_,ie),D.side=Ti,D.needsUpdate=true,T.renderBufferDirect(z,L,k,D,_,ie),D.side=Ut):T.renderBufferDirect(z,L,k,D,_,ie),_.onAfterRender(T,L,z,k,D,ie);}function Ds(_,L,z){L.isScene!==true&&(L=Mt);let k=Me.get(_),D=b.state.lights,ie=b.state.shadowsArray,he=D.state.version,me=H.getParameters(_,D.state,ie,L,z),de=H.getProgramCacheKey(me),Ee=k.programs;k.environment=_.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(_.isMeshStandardMaterial?x:w).get(_.envMap||k.environment),k.envMapRotation=k.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Ee===void 0&&(_.addEventListener("dispose",Ie),Ee=new Map,k.programs=Ee);let Ce=Ee.get(de);if(Ce!==void 0){if(k.currentProgram===Ce&&k.lightsStateVersion===he)return Qo(_,me),Ce}else me.uniforms=H.getUniforms(_),_.onBeforeCompile(me,T),Ce=H.acquireProgram(me,de),Ee.set(de,Ce),k.uniforms=me.uniforms;let be=k.uniforms;return (!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===true)&&(be.clippingPlanes=xe.uniform),Qo(_,me),k.needsLights=lh(_),k.lightsStateVersion=he,k.needsLights&&(be.ambientLightColor.value=D.state.ambient,be.lightProbe.value=D.state.probe,be.directionalLights.value=D.state.directional,be.directionalLightShadows.value=D.state.directionalShadow,be.spotLights.value=D.state.spot,be.spotLightShadows.value=D.state.spotShadow,be.rectAreaLights.value=D.state.rectArea,be.ltc_1.value=D.state.rectAreaLTC1,be.ltc_2.value=D.state.rectAreaLTC2,be.pointLights.value=D.state.point,be.pointLightShadows.value=D.state.pointShadow,be.hemisphereLights.value=D.state.hemi,be.directionalShadowMap.value=D.state.directionalShadowMap,be.directionalShadowMatrix.value=D.state.directionalShadowMatrix,be.spotShadowMap.value=D.state.spotShadowMap,be.spotLightMatrix.value=D.state.spotLightMatrix,be.spotLightMap.value=D.state.spotLightMap,be.pointShadowMap.value=D.state.pointShadowMap,be.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=Ce,k.uniformsList=null,Ce}function Ko(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=Xn.seqWithValue(L.seq,_.uniforms);}return _.uniformsList}function Qo(_,L){let z=Me.get(_);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping;}function ah(_,L,z,k,D){L.isScene!==true&&(L=Mt),Le.resetTextureUnits();let ie=L.fog,he=k.isMeshStandardMaterial?L.environment:null,me=y===null?T.outputColorSpace:y.isXRRenderTarget===true?y.texture.colorSpace:sn,de=(k.isMeshStandardMaterial?x:w).get(k.envMap||he),Ee=k.vertexColors===true&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ce=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),be=!!z.morphAttributes.position,He=!!z.morphAttributes.normal,tt=!!z.morphAttributes.color,ut=Ci;k.toneMapped&&(y===null||y.isXRRenderTarget===true)&&(ut=T.toneMapping);let dt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=dt!==void 0?dt.length:0,Te=Me.get(k),lt=b.state.lights;if(K===true&&(fe===true||_!==N)){let Pt=_===N&&k.id===I;xe.setState(k,_,Pt);}let Ze=false;k.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==lt.state.version||Te.outputColorSpace!==me||D.isBatchedMesh&&Te.batching===false||!D.isBatchedMesh&&Te.batching===true||D.isBatchedMesh&&Te.batchingColor===true&&D.colorTexture===null||D.isBatchedMesh&&Te.batchingColor===false&&D.colorTexture!==null||D.isInstancedMesh&&Te.instancing===false||!D.isInstancedMesh&&Te.instancing===true||D.isSkinnedMesh&&Te.skinning===false||!D.isSkinnedMesh&&Te.skinning===true||D.isInstancedMesh&&Te.instancingColor===true&&D.instanceColor===null||D.isInstancedMesh&&Te.instancingColor===false&&D.instanceColor!==null||D.isInstancedMesh&&Te.instancingMorph===true&&D.morphTexture===null||D.isInstancedMesh&&Te.instancingMorph===false&&D.morphTexture!==null||Te.envMap!==de||k.fog===true&&Te.fog!==ie||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==xe.numPlanes||Te.numIntersection!==xe.numIntersection)||Te.vertexAlphas!==Ee||Te.vertexTangents!==Ce||Te.morphTargets!==be||Te.morphNormals!==He||Te.morphColors!==tt||Te.toneMapping!==ut||Te.morphTargetsCount!==it)&&(Ze=true):(Ze=true,Te.__version=k.version);let zt=Te.currentProgram;Ze===true&&(zt=Ds(k,L,D));let pn=false,kt=false,Qn=false,ct=zt.getUniforms(),Nt=Te.uniforms;if(ge.useProgram(zt.program)&&(pn=true,kt=true,Qn=true),k.id!==I&&(I=k.id,kt=true),pn||N!==_){ge.buffers.depth.getReversed()&&_.reversedDepth!==true&&(_._reversedDepth=true,_.updateProjectionMatrix()),ct.setValue(C,"projectionMatrix",_.projectionMatrix),ct.setValue(C,"viewMatrix",_.matrixWorldInverse);let Ft=ct.map.cameraPosition;Ft!==void 0&&Ft.setValue(C,_e.setFromMatrixPosition(_.matrixWorld)),nt.logarithmicDepthBuffer&&ct.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(C,"isOrthographic",_.isOrthographicCamera===true),N!==_&&(N=_,kt=true,Qn=true);}if(D.isSkinnedMesh){ct.setOptional(C,D,"bindMatrix"),ct.setOptional(C,D,"bindMatrixInverse");let Pt=D.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ct.setValue(C,"boneTexture",Pt.boneTexture,Le));}D.isBatchedMesh&&(ct.setOptional(C,D,"batchingTexture"),ct.setValue(C,"batchingTexture",D._matricesTexture,Le),ct.setOptional(C,D,"batchingIdTexture"),ct.setValue(C,"batchingIdTexture",D._indirectTexture,Le),ct.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&ct.setValue(C,"batchingColorTexture",D._colorsTexture,Le));let Kt=z.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Ae.update(D,z,zt),(kt||Te.receiveShadow!==D.receiveShadow)&&(Te.receiveShadow=D.receiveShadow,ct.setValue(C,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Nt.envMap.value=de,Nt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===false?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Nt.envMapIntensity.value=L.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=O0()),kt&&(ct.setValue(C,"toneMappingExposure",T.toneMappingExposure),Te.needsLights&&oh(Nt,Qn),ie&&k.fog===true&&ve.refreshFogUniforms(Nt,ie),ve.refreshMaterialUniforms(Nt,k,te,ee,b.state.transmissionRenderTarget[_.id]),Xn.upload(C,Ko(Te),Nt,Le)),k.isShaderMaterial&&k.uniformsNeedUpdate===true&&(Xn.upload(C,Ko(Te),Nt,Le),k.uniformsNeedUpdate=false),k.isSpriteMaterial&&ct.setValue(C,"center",D.center),ct.setValue(C,"modelViewMatrix",D.modelViewMatrix),ct.setValue(C,"normalMatrix",D.normalMatrix),ct.setValue(C,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Pt=k.uniformsGroups;for(let Ft=0,Ea=Pt.length;Ft<Ea;Ft++){let Ji=Pt[Ft];ce.update(Ji,zt),ce.bind(Ji,zt);}}return zt}function oh(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L;}function lh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===true}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(_,L,z){let k=Me.get(_);k.__autoAllocateDepthBuffer=_.resolveDepthBuffer===false,k.__autoAllocateDepthBuffer===false&&(k.__useRenderToTexture=false),Me.get(_.texture).__webglTexture=L,Me.get(_.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:z,k.__hasExternalTextures=true;},this.setRenderTargetFramebuffer=function(_,L){let z=Me.get(_);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0;};let ch=C.createFramebuffer();this.setRenderTarget=function(_,L=0,z=0){y=_,B=L,S=z;let k=true,D=null,ie=false,he=false;if(_){let de=Me.get(_);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(C.FRAMEBUFFER,null),k=false;else if(de.__webglFramebuffer===void 0)Le.setupRenderTarget(_);else if(de.__hasExternalTextures)Le.rebindTextures(_,Me.get(_.texture).__webglTexture,Me.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let be=_.depthTexture;if(de.__boundDepthTexture!==be){if(be!==null&&Me.has(be)&&(_.width!==be.image.width||_.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(_);}}let Ee=_.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(he=true);let Ce=Me.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ce[L])?D=Ce[L][z]:D=Ce[L],ie=true):_.samples>0&&Le.useMultisampledRTT(_)===false?D=Me.get(_).__webglMultisampledFramebuffer:Array.isArray(Ce)?D=Ce[z]:D=Ce,V.copy(_.viewport),q.copy(_.scissor),F=_.scissorTest;}else V.copy(qe).multiplyScalar(te).floor(),q.copy(Qe).multiplyScalar(te).floor(),F=je;if(z!==0&&(D=ch),ge.bindFramebuffer(C.FRAMEBUFFER,D)&&k&&ge.drawBuffers(_,D),ge.viewport(V),ge.scissor(q),ge.setScissorTest(F),ie){let de=Me.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,de.__webglTexture,z);}else if(he){let de=L;for(let Ee=0;Ee<_.textures.length;Ee++){let Ce=Me.get(_.textures[Ee]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ee,Ce.__webglTexture,z,de);}}else if(_!==null&&z!==0){let de=Me.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,de.__webglTexture,z);}I=-1;},this.readRenderTargetPixels=function(_,L,z,k,D,ie,he,me=0){if(!(_&&_.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Me.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&he!==void 0&&(de=de[he]),de){ge.bindFramebuffer(C.FRAMEBUFFER,de);try{let Ee=_.textures[me],Ce=Ee.format,be=Ee.type;if(!nt.textureFormatReadable(Ce)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(be)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-k&&z>=0&&z<=_.height-D&&(_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(L,z,k,D,Re.convert(Ce),Re.convert(be),ie));}finally{let Ee=y!==null?Me.get(y).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,Ee);}}},this.readRenderTargetPixelsAsync=async function(_,L,z,k,D,ie,he,me=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Me.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&he!==void 0&&(de=de[he]),de)if(L>=0&&L<=_.width-k&&z>=0&&z<=_.height-D){ge.bindFramebuffer(C.FRAMEBUFFER,de);let Ee=_.textures[me],Ce=Ee.format,be=Ee.type;if(!nt.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let He=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,He),C.bufferData(C.PIXEL_PACK_BUFFER,ie.byteLength,C.STREAM_READ),_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+me),C.readPixels(L,z,k,D,Re.convert(Ce),Re.convert(be),0);let tt=y!==null?Me.get(y).__webglFramebuffer:null;ge.bindFramebuffer(C.FRAMEBUFFER,tt);let ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await hc(C,ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,He),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ie),C.deleteBuffer(He),C.deleteSync(ut),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,z=0){let k=Math.pow(2,-z),D=Math.floor(_.image.width*k),ie=Math.floor(_.image.height*k),he=L!==null?L.x:0,me=L!==null?L.y:0;Le.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,he,me,D,ie),ge.unbindTexture();};let hh=C.createFramebuffer(),uh=C.createFramebuffer();this.copyTextureToTexture=function(_,L,z=null,k=null,D=0,ie=null){ie===null&&(D!==0?(In("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=D,D=0):ie=0);let he,me,de,Ee,Ce,be,He,tt,ut,dt=_.isCompressedTexture?_.mipmaps[ie]:_.image;if(z!==null)he=z.max.x-z.min.x,me=z.max.y-z.min.y,de=z.isBox3?z.max.z-z.min.z:1,Ee=z.min.x,Ce=z.min.y,be=z.isBox3?z.min.z:0;else {let Kt=Math.pow(2,-D);he=Math.floor(dt.width*Kt),me=Math.floor(dt.height*Kt),_.isDataArrayTexture?de=dt.depth:_.isData3DTexture?de=Math.floor(dt.depth*Kt):de=1,Ee=0,Ce=0,be=0;}k!==null?(He=k.x,tt=k.y,ut=k.z):(He=0,tt=0,ut=0);let it=Re.convert(L.format),Te=Re.convert(L.type),lt;L.isData3DTexture?(Le.setTexture3D(L,0),lt=C.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Le.setTexture2DArray(L,0),lt=C.TEXTURE_2D_ARRAY):(Le.setTexture2D(L,0),lt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let Ze=C.getParameter(C.UNPACK_ROW_LENGTH),zt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),pn=C.getParameter(C.UNPACK_SKIP_PIXELS),kt=C.getParameter(C.UNPACK_SKIP_ROWS),Qn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,dt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ee),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ce),C.pixelStorei(C.UNPACK_SKIP_IMAGES,be);let ct=_.isDataArrayTexture||_.isData3DTexture,Nt=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){let Kt=Me.get(_),Pt=Me.get(L),Ft=Me.get(Kt.__renderTarget),Ea=Me.get(Pt.__renderTarget);ge.bindFramebuffer(C.READ_FRAMEBUFFER,Ft.__webglFramebuffer),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let Ji=0;Ji<de;Ji++)ct&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(_).__webglTexture,D,be+Ji),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,ie,ut+Ji)),C.blitFramebuffer(Ee,Ce,he,me,He,tt,he,me,C.DEPTH_BUFFER_BIT,C.NEAREST);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null);}else if(D!==0||_.isRenderTargetTexture||Me.has(_)){let Kt=Me.get(_),Pt=Me.get(L);ge.bindFramebuffer(C.READ_FRAMEBUFFER,hh),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,uh);for(let Ft=0;Ft<de;Ft++)ct?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Kt.__webglTexture,D,be+Ft):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Kt.__webglTexture,D),Nt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,ie,ut+Ft):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,ie),D!==0?C.blitFramebuffer(Ee,Ce,he,me,He,tt,he,me,C.COLOR_BUFFER_BIT,C.NEAREST):Nt?C.copyTexSubImage3D(lt,ie,He,tt,ut+Ft,Ee,Ce,he,me):C.copyTexSubImage2D(lt,ie,He,tt,Ee,Ce,he,me);ge.bindFramebuffer(C.READ_FRAMEBUFFER,null),ge.bindFramebuffer(C.DRAW_FRAMEBUFFER,null);}else Nt?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(lt,ie,He,tt,ut,he,me,de,it,Te,dt.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(lt,ie,He,tt,ut,he,me,de,it,dt.data):C.texSubImage3D(lt,ie,He,tt,ut,he,me,de,it,Te,dt):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ie,He,tt,he,me,it,Te,dt.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ie,He,tt,dt.width,dt.height,it,dt.data):C.texSubImage2D(C.TEXTURE_2D,ie,He,tt,he,me,it,Te,dt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,pn),C.pixelStorei(C.UNPACK_SKIP_ROWS,kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qn),ie===0&&L.generateMipmaps&&C.generateMipmap(lt),ge.unbindTexture();},this.initRenderTarget=function(_){Me.get(_).__webglFramebuffer===void 0&&Le.setupRenderTarget(_);},this.initTexture=function(_){_.isCubeTexture?Le.setTextureCube(_,0):_.isData3DTexture?Le.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Le.setTexture2DArray(_,0):Le.setTexture2D(_,0),ge.unbindTexture();},this.resetState=function(){B=0,S=0,y=null,ge.reset(),R.reset();},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}));}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace();}};var Gc='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" role="img" aria-label="Mineradio stage lyrics thumbnail">%0A  <defs>%0A    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">%0A      <stop offset="0" stop-color="%2305080d"/>%0A      <stop offset="0.48" stop-color="%23071821"/>%0A      <stop offset="1" stop-color="%23180b13"/>%0A    </linearGradient>%0A    <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">%0A      <stop offset="0" stop-color="%23fff0b8" stop-opacity="0.88"/>%0A      <stop offset="0.28" stop-color="%23ffd67a" stop-opacity="0.34"/>%0A      <stop offset="1" stop-color="%238fe9ff" stop-opacity="0"/>%0A    </radialGradient>%0A    <linearGradient id="cover" x1="0" y1="0" x2="1" y2="1">%0A      <stop offset="0" stop-color="%23d6f8ff"/>%0A      <stop offset="0.52" stop-color="%239cffdf"/>%0A      <stop offset="1" stop-color="%23ffd67a"/>%0A    </linearGradient>%0A    <filter id="glow" x="-40%" y="-50%" width="180%" height="200%">%0A      <feGaussianBlur stdDeviation="18" result="blur"/>%0A      <feMerge>%0A        <feMergeNode in="blur"/>%0A        <feMergeNode in="SourceGraphic"/>%0A      </feMerge>%0A    </filter>%0A  </defs>%0A  <rect width="640" height="400" rx="42" fill="url(%23bg)"/>%0A  <path d="M42 0L188 400M184 0L318 400M592 0L426 400" stroke="%239cffdf" stroke-opacity="0.08" stroke-width="2"/>%0A  <circle cx="420" cy="206" r="196" fill="url(%23sun)"/>%0A  <g opacity="0.72">%0A    <circle cx="330" cy="156" r="3" fill="%23d6f8ff"/>%0A    <circle cx="382" cy="120" r="2" fill="%239cffdf"/>%0A    <circle cx="480" cy="136" r="2.6" fill="%23fff0b8"/>%0A    <circle cx="546" cy="190" r="2" fill="%239cffdf"/>%0A    <circle cx="296" cy="244" r="2.2" fill="%23fff0b8"/>%0A    <circle cx="522" cy="262" r="3" fill="%23d6f8ff"/>%0A  </g>%0A  <g transform="translate(74 106)" filter="url(%23glow)">%0A    <rect x="0" y="0" width="154" height="154" rx="24" fill="url(%23cover)"/>%0A    <rect x="13" y="13" width="128" height="128" rx="18" fill="%23061116" fill-opacity="0.38"/>%0A    <path d="M38 104C64 72 83 87 114 42" fill="none" stroke="%23fff0b8" stroke-width="9" stroke-linecap="round" stroke-opacity="0.82"/>%0A  </g>%0A  <g filter="url(%23glow)">%0A    <path d="M286 184H564" stroke="%23d6f8ff" stroke-width="22" stroke-linecap="round"/>%0A    <path d="M286 184H462" stroke="%23fff0b8" stroke-width="22" stroke-linecap="round"/>%0A    <path d="M318 231H530" stroke="%239cffdf" stroke-width="14" stroke-linecap="round" stroke-opacity="0.54"/>%0A  </g>%0A  <path d="M70 332H570" stroke="%23ffffff" stroke-opacity="0.12" stroke-width="4" stroke-linecap="round"/>%0A  <path d="M70 332H398" stroke="%239cffdf" stroke-opacity="0.72" stroke-width="4" stroke-linecap="round"/>%0A</svg>%0A';var G0=["\u7EAF\u97F3\u4E50\u8BF7\u6B23\u8D4F","\u6682\u65E0\u6B4C\u8BCD","\u6682\u65E0\u6B4C\u8BCD\u656C\u8BF7\u671F\u5F85","\u6B64\u6B4C\u66F2\u4E3A\u6CA1\u6709\u586B\u8BCD\u7684\u7EAF\u97F3\u4E50\u8BF7\u60A8\u6B23\u8D4F"];function Ma(n){return String(n||"").replace(/\s+/g," ").trim()}function V0(n){let e=String(n||"").replace(/\s+/g,"").replace(/[，,。.!！?？、~～]/g,"");return !e||G0.includes(e)}function H0(n="",e=""){let t=Ma(n),i=Ma(e);return t?[{time:0,text:i?`${t} - ${i}`:t,duration:9999,fallback:true}]:[]}function Vc(n,e="",t=""){let i=(n||[]).map(s=>({...s,time:Number.isFinite(s.time)?Math.max(0,s.time):0,text:Ma(s.text)})).filter(s=>s.text&&!V0(s.text)).sort((s,r)=>s.time-r.time);return i.length?i.map((s,r)=>{let o=i[r+1],a=o&&o.time>s.time?o.time-s.time:4.8;return {...s,duration:Math.max(.75,Math.min(12,a))}}):H0(e,t)}function W0(n,e){let t=-1;for(let i=0;i<n.length&&n[i].time<=e+.05;i+=1)t=i;return t}function X0(n,e,t){if(e<0||e>=n.length)return 0;let i=n[e],s=n[e+1],r=s&&s.time>i.time?s.time:i.time+Math.max(.75,i.duration||4.8),o=Math.max(.75,r-i.time),a=Math.max(0,Math.min(1,(t+.02-i.time)/o));return a*a*(3-2*a)}function Hc(n,e){let t=W0(n,e);return {activeIndex:t,line:t>=0?n[t]:null,progress:X0(n,t,e)}}function Y0(n){return Array.from(n).reduce((e,t)=>e+(t.charCodeAt(0)>255?1:.56),0)}function Wc(n,e=23){let t=Ma(n);if(!t)return [""];if(Y0(t)<=e)return [t];let i=Array.from(t),s=i.length/2,r=new Set([",",".",";",":","?","!","\uFF0C","\u3002","\uFF1B","\uFF1A","\uFF1F","\uFF01","\u3001"]),o=new Set([" ",...r]),a=(f,p=Number.POSITIVE_INFINITY)=>{let g=-1,v=Number.POSITIVE_INFINITY;for(let m=1;m<i.length-1;m+=1){if(!f.has(i[m]))continue;let d=Math.abs(m-s);d>p||d>=v||(g=m+1,v=d);}return g},l=a(r,s*.7),c=l>=0?l:a(o)>=0?a(o):Math.ceil(i.length/2),h=i.slice(0,c).join("").trim(),u=i.slice(c).join("").trim();return u?[h,u]:[t]}var qn=n=>Math.max(0,Math.min(1,n));function Oo(n){let e=Math.max(0,Math.min(1.18,Number.isFinite(n.dynamics)?n.dynamics:0)),t=qn((e-.62)/.54),i=qn(n.climax),s=qn(n.bloom),r=Math.max(0,Math.min(1.2,n.beatGlow)),o=qn(i*.78+t*.38+s*.22),a=n.portrait?1.06:1.04,l=n.portrait?.24:.02,c=n.portrait?.82:.78;return {drive:o,coverScale:a*(1+o*.18+r*.028),coverY:l+o*(n.portrait?.04:.03),coverZ:o*.42+r*.042,lyricZOffset:o*.36+r*.055,lyricScale:c*(1+o*.08+r*.018),shaderClimax:qn(o*.92+r*.18)}}function Xc(n){let e=qn(n.climax),t=Math.max(.18,.3-e*.12),i=Math.max(.16,.32-e*.14),s=n.bassDrive>t*.75;return {shouldTrigger:n.bassDrive>t&&!n.wasBassRising&&n.elapsed-n.lastRippleAt>i,nextBassRising:s,cooldown:i,threshold:t}}var Yc=[{deep:"#05080d",mid:"#071821",background:"#000000",primary:"#d6f8ff",secondary:"#9cffdf",highlight:"#fff0b8",glow:"#8fe9ff",warm:"#ffd67a"},{deep:"#070710",mid:"#171023",background:"#000000",primary:"#f3e8ff",secondary:"#a7f3d0",highlight:"#fde68a",glow:"#c4b5fd",warm:"#fb7185"},{deep:"#07100d",mid:"#0f2018",background:"#000000",primary:"#eafff4",secondary:"#86efac",highlight:"#fef3c7",glow:"#5eead4",warm:"#facc15"},{deep:"#0b0710",mid:"#25101b",background:"#000000",primary:"#ffe4ed",secondary:"#f0abfc",highlight:"#fff7d6",glow:"#fb7185",warm:"#f59e0b"}];function q0(n){let e=2166136261;for(let t=0;t<n.length;t+=1)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function zo(n="",e=""){let t=q0(`${n}|${e}`);return Yc[t%Yc.length]}function Cs(n){let e=String(n||"").replace("#","").trim(),t=e.length===3?e.split("").map(s=>s+s).join(""):e.padEnd(6,"0").slice(0,6),i=Number.parseInt(t,16);return Number.isFinite(i)?{r:i>>16&255,g:i>>8&255,b:i&255}:{r:255,g:255,b:255}}function _t(n,e){let t=Cs(n);return `rgba(${t.r}, ${t.g}, ${t.b}, ${Math.max(0,Math.min(1,e))})`}var se={preset:"cover",intensity:.85,coverSpread:1,depth:1,coverResolution:1.55,cinema:true,cinemaShake:.5,floatLayer:false,pointScale:1,speed:1,twist:0,colorBoost:1.1,scatter:0,bgFade:.2,bloom:false,bloomStrength:.62,edge:false,lyricGlow:true,lyricGlowBeat:true,lyricGlowParticles:false,lyricCameraLock:false,lyricGlowStrength:.28,lyricScale:1,lyricOffsetX:0,lyricOffsetY:0,lyricOffsetZ:0,lyricTiltX:0,lyricTiltY:0,lyricColorMode:"auto",lyricColor:"#a9b8c8",lyricHighlightMode:"auto",lyricHighlightColor:"#fac900",lyricGlowLinked:true,lyricGlowColor:"#008aff",lyricFont:"hei",lyricLetterSpacing:0,lyricLineHeight:1,lyricWeight:900,visualTintMode:"auto",visualTintColor:"#9db8cf",backgroundColorMode:"cover",backgroundColor:"#000000",backgroundOpacity:1,performanceQuality:"high",shelf:"side",shelfCameraMode:"static",shelfPresence:"always",shelfShowPodcasts:false,shelfMergeCollections:false,shelfSize:1,shelfOffsetX:0,shelfOffsetY:0,shelfOffsetZ:0,shelfAngleY:-15,shelfOpacity:1,shelfBgOpacity:.9,shelfAccentColor:"#ffffff",cam:"off",desktopLyrics:false,wallpaperMode:false},qc=[{id:"visual",label:"\u4E3B\u63A7",description:"\u5F8B\u52A8\u3001\u666F\u6DF1\u3001\u955C\u5934\u4E0E\u5C01\u9762\u7C92\u5B50\u57FA\u7840\u6548\u679C",order:0,defaultOpen:true},{id:"lyrics",label:"\u6B4C\u8BCD\u5916\u89C2",description:"\u989C\u8272\u3001\u5B57\u4F53\u3001\u4F4D\u7F6E\u548C\u60AC\u6D6E\u89D2\u5EA6",order:1,defaultOpen:true},{id:"overlay",label:"\u53E0\u52A0\u6548\u679C",description:"\u7C92\u5B50\u5C42\u3001\u6EA2\u5149\u3001\u8F6E\u5ED3\u548C\u684C\u9762\u6B4C\u8BCD\u5165\u53E3",order:2,defaultOpen:true},{id:"stage",label:"3D / \u624B\u52BF",description:"3D \u6B4C\u5355\u67B6\u3001\u52A8\u6001\u955C\u5934\u548C\u6444\u50CF\u5934\u4EA4\u4E92",order:3,defaultOpen:true},{id:"advanced",label:"\u9AD8\u7EA7\u53C2\u6570",description:"\u7C92\u5B50\u6D41\u901F\u3001\u626D\u66F2\u3001\u8272\u5F69\u3001\u79BB\u6563\u548C\u80CC\u666F\u538B\u6697",order:4,defaultOpen:true}],Zc={preset:{type:"select",label:"\u89C6\u89C9\u9884\u8BBE",default:se.preset,options:[{label:"emily\u4E13\u8F91\u5C01\u9762",value:"cover"},{label:"\u6EDA\u7B52",value:"tunnel"},{label:"\u661F\u7403",value:"orbit"},{label:"\u865A\u7A7A",value:"void"},{label:"\u5531\u7247",value:"vinyl"},{label:"\u661F\u6CB3",value:"wallpaper"}],section:"visual",order:0,help:"\u5BF9\u9F50 Mineradio \u539F\u63A7\u5236\u53F0\u9884\u8BBE\uFF1B\u5B89\u9B42\u9AB7\u9AC5\u9884\u8BBE\u4F9D\u8D56\u4E13\u5C5E\u6A21\u578B\u8D44\u4EA7\uFF0C\u540E\u7EED\u5355\u72EC\u63A5\u5165\u3002"},intensity:{type:"number",label:"\u5F8B\u52A8\u5F3A\u5EA6",default:se.intensity,min:.2,max:1.6,section:"visual",order:10},coverSpread:{type:"number",label:"\u5C01\u9762\u6269\u6563",default:se.coverSpread,min:0,max:1.4,section:"visual",order:20,help:"\u989D\u5916\u6269\u6563\u500D\u7387\uFF0C0 \u66F4\u63A5\u8FD1\u9759\u6001\u5C01\u9762\uFF0C1 \u4E3A\u539F Mineradio \u52A8\u6001\u5E45\u5EA6\u3002"},depth:{type:"number",label:"\u7ACB\u4F53\u611F",default:se.depth,min:.2,max:1.8,section:"visual",order:30},coverResolution:{type:"number",label:"\u5C01\u9762\u6E05\u6670\u5EA6",default:se.coverResolution,min:.75,max:1.55,section:"visual",order:40,help:"\u5F53\u524D\u7248\u672C\u56FA\u5B9A\u9AD8\u5BC6\u5EA6\u70B9\u9635\u6E32\u67D3\uFF0C\u540E\u7EED\u7528\u4E8E\u8FD0\u884C\u65F6\u91CD\u5EFA\u7C92\u5B50\u7F51\u683C\u3002"},cinemaShake:{type:"number",label:"\u955C\u5934\u6643\u52A8",default:se.cinemaShake,min:0,max:1.8,section:"visual",order:50},lyricGlowStrength:{type:"number",label:"\u6B4C\u8BCD\u6EA2\u5149",default:se.lyricGlowStrength,min:0,max:.85,section:"visual",order:60},lyricColorMode:{type:"select",label:"\u6B4C\u8BCD\u989C\u8272",default:se.lyricColorMode,options:[{label:"\u5C01\u9762\u53D6\u8272",value:"auto"},{label:"\u81EA\u5B9A\u4E49",value:"custom"}],section:"lyrics",order:10},lyricColor:{type:"color",label:"\u6B4C\u8BCD\u81EA\u5B9A\u4E49\u8272",default:se.lyricColor,section:"lyrics",order:20},lyricHighlightMode:{type:"select",label:"\u9AD8\u4EAE\u989C\u8272",default:se.lyricHighlightMode,options:[{label:"\u8DDF\u968F\u6B4C\u8BCD",value:"auto"},{label:"\u81EA\u5B9A\u4E49",value:"custom"}],section:"lyrics",order:30},lyricHighlightColor:{type:"color",label:"\u9AD8\u4EAE\u81EA\u5B9A\u4E49\u8272",default:se.lyricHighlightColor,section:"lyrics",order:40},lyricGlowLinked:{type:"boolean",label:"\u6EA2\u5149\u94FE\u63A5\u9AD8\u4EAE",default:se.lyricGlowLinked,section:"lyrics",order:50},lyricGlowColor:{type:"color",label:"\u6EA2\u5149\u81EA\u5B9A\u4E49\u8272",default:se.lyricGlowColor,section:"lyrics",order:60},lyricFont:{type:"select",label:"\u6B4C\u8BCD\u5B57\u4F53",default:se.lyricFont,options:[{label:"\u9ED8\u8BA4",value:"sans"},{label:"\u9ED1\u4F53",value:"hei"},{label:"\u5B8B\u4F53",value:"song"},{label:"\u7C97\u5B8B",value:"bold-song"},{label:"\u77F3\u5370\u5B8B",value:"stone-song"},{label:"\u6977\u5B8B",value:"kai-song"},{label:"Serif",value:"serif-en"},{label:"Gothic",value:"gothic"},{label:"Editorial",value:"editorial"},{label:"Humanist",value:"humanist"},{label:"\u7B49\u5BBD",value:"mono"},{label:"\u6807\u9898",value:"display"}],section:"lyrics",order:70},lyricLetterSpacing:{type:"number",label:"\u5B57\u95F4\u8DDD",default:se.lyricLetterSpacing,min:-0.04,max:.18,step:.005,section:"lyrics",order:80},lyricLineHeight:{type:"number",label:"\u884C\u8DDD",default:se.lyricLineHeight,min:.86,max:1.35,section:"lyrics",order:90},lyricWeight:{type:"number",label:"\u5B57\u91CD",default:se.lyricWeight,min:500,max:900,step:50,section:"lyrics",order:100},visualTintMode:{type:"select",label:"\u89C6\u89C9\u67D3\u8272",default:se.visualTintMode,options:[{label:"\u5C01\u9762\u53D6\u8272",value:"auto"},{label:"\u81EA\u5B9A\u4E49",value:"custom"}],section:"overlay",order:0},visualTintColor:{type:"color",label:"\u89C6\u89C9\u67D3\u8272\u989C\u8272",default:se.visualTintColor,section:"overlay",order:1},backgroundColorMode:{type:"select",label:"\u80CC\u666F\u989C\u8272",default:se.backgroundColorMode,options:[{label:"\u5C01\u9762\u53D6\u8272",value:"cover"},{label:"\u81EA\u5B9A\u4E49",value:"custom"}],section:"overlay",order:2},backgroundColor:{type:"color",label:"\u80CC\u666F\u81EA\u5B9A\u4E49\u8272",default:se.backgroundColor,section:"overlay",order:3},backgroundOpacity:{type:"number",label:"\u80CC\u666F\u4E0D\u900F\u660E\u5EA6",default:se.backgroundOpacity,min:0,max:1,step:.01,section:"overlay",order:4},lyricScale:{type:"number",label:"\u6B4C\u8BCD\u5927\u5C0F",default:se.lyricScale,min:.35,max:1.65,section:"lyrics",order:110},lyricOffsetX:{type:"number",label:"\u6C34\u5E73\u4F4D\u7F6E",default:se.lyricOffsetX,min:-2,max:2,section:"lyrics",order:120},lyricOffsetY:{type:"number",label:"\u5782\u76F4\u4F4D\u7F6E",default:se.lyricOffsetY,min:-1.2,max:1.35,section:"lyrics",order:130},lyricOffsetZ:{type:"number",label:"\u666F\u6DF1\u4F4D\u7F6E",default:se.lyricOffsetZ,min:-1.6,max:1.6,section:"lyrics",order:140},lyricTiltX:{type:"number",label:"\u4E0A\u4E0B\u89D2\u5EA6",default:se.lyricTiltX,min:-42,max:42,step:1,section:"lyrics",order:150},lyricTiltY:{type:"number",label:"\u5DE6\u53F3\u89D2\u5EA6",default:se.lyricTiltY,min:-42,max:42,step:1,section:"lyrics",order:160},floatLayer:{type:"boolean",label:"\u6D6E\u7A7A\u7C92\u5B50\u5C42",default:se.floatLayer,section:"overlay",order:10},cinema:{type:"boolean",label:"\u7535\u5F71\u955C\u5934",default:se.cinema,section:"overlay",order:20},lyricGlow:{type:"boolean",label:"\u6B4C\u8BCD\u6EA2\u5149",default:se.lyricGlow,section:"overlay",order:30},lyricGlowBeat:{type:"boolean",label:"\u9F13\u70B9\u6EA2\u5149",default:se.lyricGlowBeat,section:"overlay",order:40},lyricGlowParticles:{type:"boolean",label:"\u6B4C\u8BCD\u5149\u7C92",default:se.lyricGlowParticles,section:"overlay",order:50},lyricCameraLock:{type:"boolean",label:"\u6B4C\u8BCD\u955C\u5934\u7ED1\u5B9A",default:se.lyricCameraLock,section:"overlay",order:60},pointScale:{type:"number",label:"\u7C92\u5B50\u5C3A\u5BF8",default:se.pointScale,min:.5,max:2.2,section:"advanced",order:10},speed:{type:"number",label:"\u6D41\u901F",default:se.speed,min:.2,max:2.5,section:"advanced",order:20},twist:{type:"number",label:"\u626D\u66F2",default:se.twist,min:0,max:.6,section:"advanced",order:30},bloom:{type:"boolean",label:"\u7C92\u5B50\u6EA2\u5149",default:se.bloom,section:"overlay",order:70},bloomStrength:{type:"number",label:"\u5149\u6655\u5F3A\u5EA6",default:se.bloomStrength,min:0,max:1.6,section:"advanced",order:50},edge:{type:"boolean",label:"\u8F6E\u5ED3\u9AD8\u4EAE",default:se.edge,section:"overlay",order:80},colorBoost:{type:"number",label:"\u8272\u5F69\u5F20\u529B",default:se.colorBoost,min:.5,max:2,section:"advanced",order:40},scatter:{type:"number",label:"\u79BB\u6563\u611F",default:se.scatter,min:0,max:.5,section:"advanced",order:60},bgFade:{type:"number",label:"\u80CC\u666F\u538B\u7F29",default:se.bgFade,min:0,max:1.2,section:"advanced",order:70},performanceQuality:{type:"select",label:"\u753B\u8D28\u6863\u4F4D",default:se.performanceQuality,options:[{label:"\u4F4E",value:"eco"},{label:"\u4E2D",value:"balanced"},{label:"\u9AD8",value:"high"},{label:"\u8D85\u9AD8",value:"ultra"}],section:"advanced",order:80},shelf:{type:"select",label:"3D \u6B4C\u5355\u67B6",default:se.shelf,options:[{label:"\u5173\u95ED",value:"off"},{label:"\u4FA7\u680F",value:"side"},{label:"\u821E\u53F0",value:"stage"}],section:"stage",order:10},shelfCameraMode:{type:"select",label:"\u6B4C\u5355\u67B6\u955C\u5934",default:se.shelfCameraMode,options:[{label:"\u52A8\u6001\u955C\u5934",value:"dynamic"},{label:"\u9759\u6001\u955C\u5934",value:"static"}],section:"stage",order:20},shelfPresence:{type:"select",label:"\u6B4C\u5355\u67B6\u663E\u793A",default:se.shelfPresence,options:[{label:"\u81EA\u52A8\u9690\u85CF",value:"auto"},{label:"\u5E38\u9A7B",value:"always"}],section:"stage",order:30},shelfShowPodcasts:{type:"boolean",label:"\u663E\u793A\u64AD\u5BA2\u6B4C\u5355",default:se.shelfShowPodcasts,disabled:true,section:"stage",order:40,help:"DancingMusic \u5F53\u524D\u961F\u5217\u534F\u8BAE\u6682\u4E0D\u533A\u5206\u64AD\u5BA2\u6536\u85CF\u3002"},shelfMergeCollections:{type:"boolean",label:"\u5408\u5E76\u6536\u85CF\u6B4C\u5355",default:se.shelfMergeCollections,section:"stage",order:50,help:"\u5BBF\u4E3B\u4F1A\u628A\u6536\u85CF\u548C\u5F53\u524D\u8FDE\u63A5\u5668\u7CBE\u9009\u6B4C\u5355\u4F5C\u4E3A\u53EA\u8BFB\u5FEB\u7167\u4F20\u5165\u63D2\u4EF6\u3002"},shelfAccentColor:{type:"color",label:"\u6B4C\u5355\u67B6\u989C\u8272",default:se.shelfAccentColor,section:"stage",order:60},shelfSize:{type:"number",label:"\u6B4C\u5355\u67B6\u5927\u5C0F",default:se.shelfSize,min:.65,max:1.45,section:"stage",order:70},shelfOffsetX:{type:"number",label:"\u5DE6\u53F3\u4F4D\u7F6E",default:se.shelfOffsetX,min:-1.2,max:1.2,section:"stage",order:80},shelfOffsetY:{type:"number",label:"\u4E0A\u4E0B\u4F4D\u7F6E",default:se.shelfOffsetY,min:-0.9,max:.9,section:"stage",order:90},shelfOffsetZ:{type:"number",label:"\u524D\u540E\u666F\u6DF1",default:se.shelfOffsetZ,min:-0.9,max:.9,section:"stage",order:100},shelfAngleY:{type:"number",label:"\u4FA7\u5411\u89D2\u5EA6",default:se.shelfAngleY,min:-30,max:30,step:1,section:"stage",order:110},shelfOpacity:{type:"number",label:"\u6574\u4F53\u900F\u660E\u5EA6",default:se.shelfOpacity,min:.25,max:1,section:"stage",order:120},shelfBgOpacity:{type:"number",label:"\u80CC\u666F\u900F\u660E\u5EA6",default:se.shelfBgOpacity,min:.25,max:.98,section:"stage",order:130},cam:{type:"select",label:"\u6444\u50CF\u5934\u4EA4\u4E92",default:se.cam,options:[{label:"\u5173\u95ED",value:"off"},{label:"\u624B\u52BF\u89E6\u78B0",value:"gesture"}],disabled:true,section:"stage",order:140,help:"\u540E\u7EED\u901A\u8FC7 SDK \u80FD\u529B\u58F0\u660E\u8BF7\u6C42\u6444\u50CF\u5934\u6743\u9650\u3002"},desktopLyrics:{type:"boolean",label:"\u684C\u9762\u6B4C\u8BCD",default:se.desktopLyrics,disabled:true,section:"overlay",order:90,help:"\u5C5E\u4E8E\u684C\u9762\u7AEF\u7A97\u53E3\u80FD\u529B\uFF0C\u4E0D\u80FD\u7531 WebGL \u63D2\u4EF6\u76F4\u63A5\u521B\u5EFA\u3002"},wallpaperMode:{type:"boolean",label:"\u58C1\u7EB8\u6A21\u5F0F",default:se.wallpaperMode,disabled:true,section:"overlay",order:100,help:"\u9700\u8981 Electron \u58C1\u7EB8\u7A97\u53E3\u80FD\u529B\u540E\u63A5\u5165\u3002"}};function $e(n,e,t,i){let s=typeof n=="number"?n:Number(n);return Number.isFinite(s)?Math.max(e,Math.min(t,s)):i}function Jt(n,e){return typeof n=="boolean"?n:n==="true"?true:n==="false"?false:e}function ci(n,e,t){return typeof n=="string"&&e.includes(n)?n:t}function Zn(n,e){return typeof n=="string"&&/^#[0-9a-fA-F]{6}$/.test(n)?n:e}function $c(n,e=se){let t=n||{};return {preset:ci(t.preset,["cover","tunnel","orbit","void","vinyl","wallpaper"],e.preset),intensity:$e(t.intensity,.2,1.6,e.intensity),coverSpread:$e(t.coverSpread,0,1.4,e.coverSpread),depth:$e(t.depth,.2,1.8,e.depth),coverResolution:$e(t.coverResolution,.75,1.55,e.coverResolution),cinema:Jt(t.cinema,e.cinema),cinemaShake:$e(t.cinemaShake,0,1.8,e.cinemaShake),floatLayer:Jt(t.floatLayer,e.floatLayer),pointScale:$e(t.pointScale,.5,2.2,e.pointScale),speed:$e(t.speed,.2,2.5,e.speed),twist:$e(t.twist,0,.6,e.twist),colorBoost:$e(t.colorBoost,.5,2,e.colorBoost),scatter:$e(t.scatter,0,.5,e.scatter),bgFade:$e(t.bgFade,0,1.2,e.bgFade),bloom:Jt(t.bloom,e.bloom),bloomStrength:$e(t.bloomStrength,0,1.6,e.bloomStrength),edge:Jt(t.edge,e.edge),lyricGlow:Jt(t.lyricGlow,e.lyricGlow),lyricGlowBeat:Jt(t.lyricGlowBeat,e.lyricGlowBeat),lyricGlowParticles:Jt(t.lyricGlowParticles,e.lyricGlowParticles),lyricCameraLock:Jt(t.lyricCameraLock,e.lyricCameraLock),lyricGlowStrength:$e(t.lyricGlowStrength,0,.85,e.lyricGlowStrength),lyricScale:$e(t.lyricScale,.35,1.65,e.lyricScale),lyricOffsetX:$e(t.lyricOffsetX,-2,2,e.lyricOffsetX),lyricOffsetY:$e(t.lyricOffsetY,-1.2,1.35,e.lyricOffsetY),lyricOffsetZ:$e(t.lyricOffsetZ,-1.6,1.6,e.lyricOffsetZ),lyricTiltX:$e(t.lyricTiltX,-42,42,e.lyricTiltX),lyricTiltY:$e(t.lyricTiltY,-42,42,e.lyricTiltY),lyricColorMode:ci(t.lyricColorMode,["auto","custom"],e.lyricColorMode),lyricColor:Zn(t.lyricColor,e.lyricColor),lyricHighlightMode:ci(t.lyricHighlightMode,["auto","custom"],e.lyricHighlightMode),lyricHighlightColor:Zn(t.lyricHighlightColor,e.lyricHighlightColor),lyricGlowLinked:Jt(t.lyricGlowLinked,e.lyricGlowLinked),lyricGlowColor:Zn(t.lyricGlowColor,e.lyricGlowColor),lyricFont:ci(t.lyricFont,["sans","hei","song","bold-song","stone-song","kai-song","serif-en","gothic","editorial","humanist","mono","display"],e.lyricFont),lyricLetterSpacing:$e(t.lyricLetterSpacing,-0.04,.18,e.lyricLetterSpacing),lyricLineHeight:$e(t.lyricLineHeight,.86,1.35,e.lyricLineHeight),lyricWeight:$e(t.lyricWeight,500,900,e.lyricWeight),visualTintMode:ci(t.visualTintMode,["auto","custom"],e.visualTintMode),visualTintColor:Zn(t.visualTintColor,e.visualTintColor),backgroundColorMode:ci(t.backgroundColorMode,["cover","custom"],e.backgroundColorMode),backgroundColor:Zn(t.backgroundColor,e.backgroundColor),backgroundOpacity:$e(t.backgroundOpacity,0,1,e.backgroundOpacity),performanceQuality:ci(t.performanceQuality,["eco","balanced","high","ultra"],e.performanceQuality),shelf:ci(t.shelf,["off","side","stage"],e.shelf),shelfCameraMode:ci(t.shelfCameraMode,["dynamic","static"],e.shelfCameraMode),shelfPresence:ci(t.shelfPresence,["auto","always"],e.shelfPresence),shelfShowPodcasts:Jt(t.shelfShowPodcasts,e.shelfShowPodcasts),shelfMergeCollections:Jt(t.shelfMergeCollections,e.shelfMergeCollections),shelfSize:$e(t.shelfSize,.65,1.45,e.shelfSize),shelfOffsetX:$e(t.shelfOffsetX,-1.2,1.2,e.shelfOffsetX),shelfOffsetY:$e(t.shelfOffsetY,-0.9,.9,e.shelfOffsetY),shelfOffsetZ:$e(t.shelfOffsetZ,-0.9,.9,e.shelfOffsetZ),shelfAngleY:$e(t.shelfAngleY,-30,30,e.shelfAngleY),shelfOpacity:$e(t.shelfOpacity,.25,1,e.shelfOpacity),shelfBgOpacity:$e(t.shelfBgOpacity,.25,.98,e.shelfBgOpacity),shelfAccentColor:Zn(t.shelfAccentColor,e.shelfAccentColor),cam:ci(t.cam,["off","gesture"],e.cam),desktopLyrics:Jt(t.desktopLyrics,e.desktopLyrics),wallpaperMode:Jt(t.wallpaperMode,e.wallpaperMode)}}var Ta=4.8,Z0=1.55,Rs=12,Jc=.52,$n=132,Ps=420,ko=5,Go=6,$0=.0032,J0=.0034,Kc=6.2;function Ke(n){return Math.max(0,Math.min(1,n))}function Vo(n){let e=Ke(n);return e*e*(3-2*e)}function xt(n){let e=Math.sin(n*12.9898)*43758.5453;return e-Math.floor(e)}function Zi(){return '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", Inter, system-ui, sans-serif'}function K0(n){return n==="hei"?'"Noto Sans SC","Microsoft YaHei",SimHei,"PingFang SC",sans-serif':n==="song"?'"Noto Serif SC","Source Han Serif SC",SimSun,"Songti SC",serif':n==="bold-song"?'"Source Han Serif SC Heavy","Source Han Serif SC","Noto Serif SC Black","Noto Serif SC","STZhongsong","SimSun",serif':n==="stone-song"?'"FZYaSongS-B-GB","FZCuSong-B09S","Source Han Serif SC Heavy","Noto Serif SC Black","STZhongsong","SimSun",serif':n==="kai-song"?'"Kaiti SC","STKaiti","KaiTi","Source Han Serif SC","Noto Serif SC",serif':n==="serif-en"?'Georgia,"Times New Roman","Noto Serif SC","Source Han Serif SC",serif':n==="gothic"?'"UnifrakturCook","UnifrakturMaguntia","Old English Text MT","Blackletter","Cinzel Decorative","Noto Serif SC",serif':n==="editorial"?'"Didot","Bodoni 72","Libre Baskerville",Georgia,"Noto Serif SC",serif':n==="humanist"?'"Avenir Next","Segoe UI","Inter","Noto Sans SC","PingFang SC",sans-serif':n==="mono"?'"JetBrains Mono",Consolas,"Noto Sans SC","Microsoft YaHei",monospace':n==="display"?'"Alibaba PuHuiTi","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif':Zi()}function Jn(n,e=900,t="hei"){return `${e} ${n}px ${K0(t)}`}function Wo(n,e,t){return !t||e.length<2?n.measureText(e).width:Array.from(e).reduce((i,s,r)=>i+n.measureText(s).width+(r>0?t:0),0)}function Kn(n,e,t,i,s,r){if(!s||e.length<2){r?n.strokeText(e,t,i):n.fillText(e,t,i);return}let o=Array.from(e),a=Wo(n,e,s),l=t-a/2;o.forEach((c,h)=>{let u=n.measureText(c).width,f=l+u/2;r?n.strokeText(c,f,i):n.fillText(c,f,i),l+=u+(h<o.length-1?s:0);});}function hi(n,e="#d6f8ff",t=.42){let i=Cs(n||e);return new Oe(Math.min(1,i.r/255+t*.08),Math.min(1,i.g/255+t*.08),Math.min(1,i.b/255+t*.08))}function Q0(){let n=document.createElement("canvas");n.width=64,n.height=64;let e=n.getContext("2d");if(e){let i=e.createRadialGradient(32,32,0,32,32,31);i.addColorStop(0,"rgba(255,255,255,0.96)"),i.addColorStop(.42,"rgba(255,255,255,0.78)"),i.addColorStop(.72,"rgba(255,255,255,0.22)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,64,64);}let t=new qt(n);return t.minFilter=ft,t.magFilter=ft,t}function Is(n="#1c1c28",e=4){let t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d");return i&&(i.fillStyle=n,i.fillRect(0,0,e,e)),t}function qi(n,e,t,i,s,r){let o=Math.min(r,i/2,s/2);n.beginPath(),n.moveTo(e+o,t),n.arcTo(e+i,t,e+i,t+s,o),n.arcTo(e+i,t+s,e,t+s,o),n.arcTo(e,t+s,e,t,o),n.arcTo(e,t,e+i,t,o),n.closePath();}function Qc(n,e,t,i,s,r,o){let a=Array.from(String(e||"")),l="",c=[];for(let h of a){let u=l+h;if(n.measureText(u).width>s&&l){if(c.push(l),l=h,c.length>=o-1)break}else l=u;}l&&c.length<o&&c.push(l),c.forEach((h,u)=>n.fillText(h,t,i+u*r));}function jc(n){let{r:e,g:t,b:i}=Cs(n||"#ffffff");return (e*.299+t*.587+i*.114)/255>.62?"#08090b":"#ffffff"}function Ho(n){return n==="tunnel"?1:n==="orbit"?2:n==="void"?3:n==="vinyl"?4:n==="wallpaper"?5:0}function eh(n){return n==="eco"?1:n==="balanced"?1.4:n==="ultra"?2.5:2}function j0(){let n=document.createElement("canvas");n.width=1024,n.height=512;let e=n.getContext("2d");if(e){let i=n.width*.5,s=n.height*.5;e.clearRect(0,0,n.width,n.height),e.save(),e.translate(i,s),e.scale(2.05,1);let r=e.createRadialGradient(0,0,0,0,0,n.height*.43);r.addColorStop(0,"rgba(255,246,186,0.92)"),r.addColorStop(.18,"rgba(255,219,126,0.44)"),r.addColorStop(.46,"rgba(255,186,82,0.15)"),r.addColorStop(1,"rgba(255,186,82,0)"),e.fillStyle=r,e.fillRect(-n.width,-n.height,n.width*2,n.height*2),e.restore(),e.save(),e.globalCompositeOperation="lighter",e.filter="blur(34px)",e.fillStyle="rgba(255,235,168,0.18)",e.beginPath(),e.ellipse(i,s,n.width*.33,n.height*.14,-0.06,0,Math.PI*2),e.fill(),e.filter="blur(58px)",e.fillStyle="rgba(255,214,122,0.11)",e.beginPath(),e.ellipse(i,s,n.width*.45,n.height*.19,-0.05,0,Math.PI*2),e.fill(),e.restore(),e.save(),e.globalCompositeOperation="destination-in";let o=e.createLinearGradient(0,0,n.width,0);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.11,"rgba(255,255,255,1)"),o.addColorStop(.89,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,n.width,n.height);let a=e.createLinearGradient(0,0,0,n.height);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(.18,"rgba(255,255,255,1)"),a.addColorStop(.82,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,n.width,n.height),e.restore();}let t=new qt(n);return t.minFilter=ft,t.magFilter=ft,t.generateMipmaps=false,t}function em(n,e,t,i=512){let s=document.createElement("canvas");s.width=i,s.height=i;let r=s.getContext("2d");if(!r)return s;let o=r.createLinearGradient(0,0,i,i);o.addColorStop(0,n.deep),o.addColorStop(.45,n.mid),o.addColorStop(1,"#050506"),r.fillStyle=o,r.fillRect(0,0,i,i);let a=`${e||"Mineradio"}${t||""}`;for(let l=0;l<900;l+=1){let c=l*19.17+a.length*7.31,h=xt(c)*i,u=xt(c*1.7)*i,f=xt(c*2.3);r.globalAlpha=.12+xt(c*3.4)*.34,r.fillStyle=f>.72?n.highlight:f>.44?n.secondary:n.primary,r.beginPath(),r.arc(h,u,.9+xt(c*4.1)*2.3,0,Math.PI*2),r.fill();}return r.globalAlpha=1,s}function tm(n,e=512){let t=document.createElement("canvas");t.width=e,t.height=e;let i=t.getContext("2d");if(!i)return t;let s=n.naturalWidth||n.width,r=n.naturalHeight||n.height,o=Math.min(s,r);return i.clearRect(0,0,e,e),i.drawImage(n,(s-o)/2,(r-o)/2,o,o,0,0,e,e),t}function sh(n){return Math.max(.75,Math.min(1.55,Number.isFinite(n)?n:Z0))}function th(n){let e=Math.round(118*sh(n));return e=Math.max(88,Math.min(183,e)),e%2?e:e+1}function Sa(n){let e=sh(n);return e>=1.32?512:e>=1.1?384:256}function im(n){let s=document.createElement("canvas");s.width=256,s.height=256;let r=s.getContext("2d");if(!r)return Is("rgba(128,0,0,255)",256);r.drawImage(n,0,0,256,256);let o=r.getImageData(0,0,256,256).data,a=new Float32Array(65536),l=new Float32Array(65536),c=new Float32Array(65536);for(let d=0;d<65536;d+=1){let M=d*4;a[d]=(o[M]*.299+o[M+1]*.587+o[M+2]*.114)/255;}let h=(d,M,b)=>{for(let E=0;E<256;E+=1){let A=0;for(let T=-b;T<=b;T+=1)A+=d[E*256+Math.max(0,Math.min(255,T))];for(let T=0;T<256;T+=1){M[E*256+T]=A/(2*b+1);let P=Math.min(255,T+b+1),B=Math.max(0,T-b);A+=d[E*256+P]-d[E*256+B];}}},u=(d,M,b)=>{for(let E=0;E<256;E+=1){let A=0;for(let T=-b;T<=b;T+=1)A+=d[Math.max(0,Math.min(255,T))*256+E];for(let T=0;T<256;T+=1){M[T*256+E]=A/(2*b+1);let P=Math.min(255,T+b+1),B=Math.max(0,T-b);A+=d[P*256+E]-d[B*256+E];}}};h(a,c,4),u(c,l,4);let f=new Float32Array(65536);for(let d=1;d<255;d+=1)for(let M=1;M<255;M+=1){let b=-l[(d-1)*256+(M-1)]-2*l[d*256+(M-1)]-l[(d+1)*256+(M-1)]+l[(d-1)*256+(M+1)]+2*l[d*256+(M+1)]+l[(d+1)*256+(M+1)],E=-l[(d-1)*256+(M-1)]-2*l[(d-1)*256+M]-l[(d-1)*256+(M+1)]+l[(d+1)*256+(M-1)]+2*l[(d+1)*256+M]+l[(d+1)*256+(M+1)];f[d*256+M]=Math.min(1,Math.sqrt(b*b+E*E)*1.4);}let p=new Float32Array(65536);for(let d=0;d<256;d+=1)for(let M=0;M<256;M+=1){let b=d*256+M,E=(M/255-.5)*2,A=(d/255-.5)*2,T=Math.sqrt(E*E+A*A),P=1-Math.min(1,T*.75);p[b]=Math.min(1,l[b]*.45+P*.55);}let g=document.createElement("canvas");g.width=256,g.height=256;let v=g.getContext("2d");if(!v)return g;let m=v.createImageData(256,256);for(let d=0;d<65536;d+=1){let M=p[d],b=f[d],E=Math.min(1,M*.6+b*.5),A=d*4;m.data[A]=Math.round(M*255),m.data[A+1]=Math.round(b*255),m.data[A+2]=Math.round(E*255),m.data[A+3]=Math.round(a[d]*255);}return v.putImageData(m,0,0),g}function ih(n){let e=n*n,t=new Bt,i=new Float32Array(e*3),s=new Float32Array(e*2),r=new Float32Array(e),o=1/n;for(let a=0;a<e;a+=1){let l=a%n,c=Math.floor(a/n),h=(l+.5)*o,u=(c+.5)*o,f=l/(n-1),p=c/(n-1);i[a*3]=(f-.5)*Ta,i[a*3+1]=(p-.5)*Ta,i[a*3+2]=0,s[a*2]=h,s[a*2+1]=u,r[a]=xt(a*11.37+3);}return t.setAttribute("position",new ht(i,3)),t.setAttribute("aUv",new ht(s,2)),t.setAttribute("aRand",new ht(r,1)),t}var nh=`
precision highp float;
uniform float uTime, uBass, uMid, uTreble, uBeat, uEnergy, uBurstAmt, uClimax;
uniform float uIntensity, uSpread, uDepth, uPointScale, uSpeed, uTwist, uColorBoost, uCoverRes, uBgFade, uScatter;
uniform float uPreset, uHasCover, uHasDepth, uEdgeEnabled, uAiBoost, uPixel, uColorMixT, uMouseActive, uVinylSpin, uTintStrength;
uniform sampler2D uCoverTex, uPrevCoverTex, uEdgeTex, uRippleTex;
uniform vec2 uMouseXY;
uniform vec3 uTintColor;
uniform int uRippleCount;
attribute vec2 aUv;
attribute float aRand;
varying vec3 vColor;
varying float vBright, vRipple, vEdgeBoost, vAlpha, vSourceLum;

vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289v(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 perm(vec4 x){return mod289v(((x*34.0)+1.0)*x);}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=perm(perm(perm(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=inversesqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
vec2 safeCoverUv(vec2 uv){return clamp(uv, vec2(0.0012), vec2(0.9988));}
vec3 sampleNewCoverColor(vec2 uv){return texture2D(uCoverTex, safeCoverUv(uv)).rgb;}
vec3 samplePrevCoverColor(vec2 uv){return texture2D(uPrevCoverTex, safeCoverUv(uv)).rgb;}
vec4 sampleEdgeColor(vec2 uv){return texture2D(uEdgeTex, safeCoverUv(uv));}
float hash11(float p){return fract(sin(p*127.1)*43758.5453123);}
float rippleSumAt(vec2 p, out float maxAmp) {
  float sum = 0.0; maxAmp = 0.0;
  for (int ri = 0; ri < 12; ri++) {
    if (ri >= uRippleCount) break;
    float vCoord = (float(ri) + 0.5) / 12.0;
    vec4 rd = texture2D(uRippleTex, vec2(0.5, vCoord));
    float age = rd.z; float str = rd.w;
    if (str < 0.005 || age < 0.0 || age > 2.0) continue;
    float dx = p.x - rd.x, dy = p.y - rd.y;
    float dist = sqrt(dx*dx + dy*dy);
    float lifeN = age / 2.0;
    float fadeIn  = smoothstep(0.0, 0.06, age);
    float fadeOut = 1.0 - smoothstep(0.7, 1.0, lifeN);
    float env = fadeIn * fadeOut;
    float bulgeW = 0.55 + age * 0.80;
    float bulge  = exp(-dist*dist / (2.0 * bulgeW * bulgeW)) * (1.0 - smoothstep(0.0, 0.55, lifeN));
    float waveR  = age * 2.10;
    float ringW  = 0.40 + age * 0.22;
    float ring   = exp(-pow((dist - waveR) / ringW, 2.0));
    float local  = (bulge * 2.4 + ring * 1.30) * env * str;
    sum += local;
    maxAmp = max(maxAmp, abs(local));
  }
  return sum;
}
void main(){
  float t = uTime * uSpeed;
  vec2 sampleUv = safeCoverUv(aUv);
  vec3 coverColor = mix(samplePrevCoverColor(sampleUv), sampleNewCoverColor(sampleUv), clamp(uColorMixT, 0.0, 1.0));
  vec4 edge = sampleEdgeColor(sampleUv);
  float depthVal = edge.r;
  float edgeVal = edge.g;
  float fgMask = edge.b;
  float maxRippleAmp = 0.0;
  float rippleZ = 0.0;
  vec3 defaultColor = mix(vec3(0.36, 0.28, 0.72), mix(vec3(0.85, 0.55, 0.95), vec3(0.45, 0.78, 0.95), aUv.x), aUv.y);
  vColor = mix(defaultColor, coverColor, uHasCover);
  vAlpha = 1.0;
  float K = uIntensity * 1.6;
  float spread = clamp(uSpread, 0.0, 1.4);
  vec3 pos = position;
  if (uPreset < 0.5) {
    rippleZ = rippleSumAt(pos.xy, maxRippleAmp);
    float midN = snoise(vec3(pos.x*1.4, pos.y*1.4, t*0.55)) * 0.6
               + snoise(vec3(pos.x*2.8+5.0, pos.y*2.8-3.0, t*0.85)) * 0.4;
    float midMask = 0.55 + 0.45 * snoise(vec3(pos.x*0.4, pos.y*0.4, t*0.18));
    float midDisp = midN * uMid * 0.55 * midMask * K;
    float trebleJ = snoise(vec3(pos.x*6.5, pos.y*6.5, t*3.5 + aRand*4.0)) * uTreble * 0.18 * K;
    float bassBreath = snoise(vec3(pos.x*0.35, pos.y*0.35, t*0.4)) * uBass * 0.42 * K;
    float depthZ = (depthVal - 0.5) * uAiBoost * uDepth * 1.40 * uHasDepth;
    pos.z = (rippleZ * 1.30 + midDisp + trebleJ + bassBreath) * spread + depthZ;
  } else if (uPreset < 1.5) {
    float spin = t * 0.12;
    float angle = aUv.x * 6.2831853 + spin;
    float flow = fract(aUv.y - t * 0.08 * (1.0 + uBass * 0.55));
    float zPos = (flow - 0.5) * 9.0;
    float baseR = 2.0 - uBass * 0.28 * K * spread;
    float ripG = sin(angle * 5.0 + zPos * 1.4 + t * 2.2) * 0.10 * (uMid + uTreble) * K * spread;
    float r = baseR + ripG;
    pos = vec3(cos(angle) * r, sin(angle) * r, zPos);
    sampleUv = safeCoverUv(vec2(aUv.x, flow));
    coverColor = mix(samplePrevCoverColor(sampleUv), sampleNewCoverColor(sampleUv), clamp(uColorMixT, 0.0, 1.0));
    vColor = mix(defaultColor, coverColor, uHasCover) * (0.4 + smoothstep(-4.5, 4.5, zPos) * 0.7);
    maxRippleAmp = max(maxRippleAmp, abs(ripG) * 1.15 + uBass * 0.12);
  } else if (uPreset < 2.5) {
    float theta = aUv.x * 6.2831853;
    float phi = (aUv.y - 0.5) * 3.1415926;
    float baseR = 2.2;
    float trebFlare = snoise(vec3(theta * 1.5, phi * 1.5, t * 0.7)) * uTreble * 0.85 * K * spread;
    float bassExpand = uBass * 0.35 * K * spread;
    float r = baseR * (1.0 + bassExpand) + trebFlare;
    pos.x = r * cos(phi) * cos(theta);
    pos.y = r * sin(phi);
    pos.z = r * cos(phi) * sin(theta);
    float yaw = t * 0.18;
    float cy = cos(yaw), sy = sin(yaw);
    pos.xz = mat2(cy, -sy, sy, cy) * pos.xz;
    maxRippleAmp = max(maxRippleAmp, abs(trebFlare) * 0.22 + bassExpand * 0.26);
  } else if (uPreset < 3.5) {
    pos = vec3((aUv.x - 0.5) * 0.01, (aUv.y - 0.5) * 0.01, -90.0);
    vAlpha = 0.0;
    vColor = vec3(0.0);
    maxRippleAmp = 0.0;
  } else if (uPreset < 4.5) {
    float bassDrive = smoothstep(0.08, 0.78, uBass + uBeat * 0.82);
    float highDrive = smoothstep(0.05, 0.46, uTreble);
    vec2 p = (aUv - 0.5) * 5.12;
    float cs = cos(uVinylSpin), sn = sin(uVinylSpin);
    vec2 rp = mat2(cs, -sn, sn, cs) * p;
    float d = length(p);
    float angle0 = atan(p.y, p.x);
    float recordR = 2.46;
    float coverR = 1.18;
    float recordAlpha = 1.0 - smoothstep(recordR - 0.02, recordR + 0.05, d);
    float coverMask = 1.0 - smoothstep(coverR - 0.012, coverR + 0.018, d);
    float border = exp(-pow((d - coverR) / 0.064, 2.0));
    float outerRim = exp(-pow((d - (recordR - 0.050)) / 0.055, 2.0));
    float vinylN = clamp((d - coverR) / max(0.001, recordR - coverR), 0.0, 1.0);
    pos = vec3(rp * (1.0 + bassDrive * 0.012 + uBeat * 0.026), 0.0);
    vAlpha = recordAlpha;
    if (coverMask > 0.02) {
      vec2 coverUv = p / (coverR * 2.0) + 0.5;
      coverColor = mix(samplePrevCoverColor(coverUv), sampleNewCoverColor(coverUv), clamp(uColorMixT, 0.0, 1.0));
      vColor = mix(defaultColor, coverColor, uHasCover);
      vColor *= 1.02 + 0.10 * (1.0 - smoothstep(0.0, coverR, d));
      vColor = mix(vColor, vec3(1.0), border * 0.54);
      pos.z = 0.040 + border * 0.026 + uBeat * 0.018;
      maxRippleAmp = max(maxRippleAmp, border * 0.30 + bassDrive * 0.075 + uBeat * 0.075);
    } else {
      float groove = 0.5 + 0.5 * sin((d - coverR) * 92.0);
      float fineGroove = 0.5 + 0.5 * sin((d - coverR) * 145.0 + aRand * 3.0);
      float tick = smoothstep(0.82, 0.995, hash11(floor((angle0 + 3.1415926) * 38.0) + floor(d * 72.0) * 2.1));
      vec3 vinyl = vec3(0.052, 0.054, 0.058) + vec3(0.052) * groove + vec3(0.026) * fineGroove;
      vinyl = mix(vinyl, coverColor * 0.32, 0.18 * (1.0 - vinylN));
      float whiteRing = max(border * 0.92, outerRim * 0.26);
      vColor = mix(vinyl, vec3(0.92, 0.94, 0.94), whiteRing);
      vColor = mix(vColor, vec3(1.0), tick * highDrive * (0.06 + border * 0.12));
      pos.z = groove * 0.010 + border * 0.024 + bassDrive * vinylN * 0.016 * K + tick * highDrive * 0.010;
      maxRippleAmp = max(maxRippleAmp, border * 0.32 + outerRim * 0.12 + bassDrive * vinylN * 0.11 + tick * highDrive * 0.10 + uBeat * vinylN * 0.08);
    }
  } else {
    float bassGlow = smoothstep(0.07, 0.78, uBass) * 0.34 + uBeat * 0.014;
    float midGlow = smoothstep(0.07, 0.62, uMid) * 0.42;
    float highGlow = smoothstep(0.04, 0.46, uTreble) * 0.46;
    float lane = aUv.y;
    float transition = clamp(uBurstAmt, 0.0, 1.0);
    if (lane < 0.80) {
      float laneWarp = snoise(vec3(aUv.x * 0.42, lane * 1.7, t * 0.026)) * 0.11 + (hash11(aRand * 73.1) - 0.5) * 0.045;
      float warpedLane = clamp(lane + laneWarp, 0.0, 0.80);
      float bandCoord = warpedLane / 0.80 * 5.65 + snoise(vec3(aUv.x * 0.82, lane * 2.25, t * 0.032)) * 0.62;
      float band = floor(bandCoord);
      float local = fract(bandCoord + hash11(band * 9.13 + aRand * 2.4) * 0.18);
      float bandN = clamp((band + 0.5) / 5.65, 0.0, 1.0);
      float seed = hash11(band * 19.17 + aRand * 31.0);
      float flow = fract(aUv.x + t * (0.0034 + bandN * 0.0038 + seed * 0.0022) + seed * 0.53);
      float arc = (flow - 0.5) * 3.1415926 * (1.35 + bandN * 0.72 + seed * 0.24);
      float armCurve = sin(arc + bandN * 2.2 + seed * 5.3);
      float spiralRadius = 9.2 + bandN * 11.8 + seed * 6.0 + local * 2.9;
      float x = cos(arc * 0.72 + bandN * 0.92 + seed * 1.3) * spiralRadius + (flow - 0.5) * (13.5 + bandN * 9.5);
      float ribbonPhase = flow * 6.2831853 * (0.55 + bandN * 0.24 + seed * 0.10) + t * (0.010 + bandN * 0.007) + seed * 5.7;
      float broadWave = sin(ribbonPhase) * 0.92;
      float ridgeCenter = 0.43 + (seed - 0.5) * 0.18;
      float ridge = exp(-pow((local - ridgeCenter) / (0.25 + seed * 0.04), 2.0));
      float softMask = smoothstep(0.010, 0.12, lane) * (1.0 - smoothstep(0.72, 0.81, lane));
      float ribbonNoise = snoise(vec3(flow * 1.18 + seed, bandN * 2.0, t * 0.018)) * 0.74;
      pos.x = x + ribbonNoise * 1.40 + sin(t * 0.012 + seed * 8.0) * 0.22;
      pos.y = (bandN - 0.5) * 13.2 + armCurve * (2.3 + bandN * 1.6) + (seed - 0.5) * 1.85 + broadWave + (local - 0.5) * (0.58 + ridge * 0.14);
      pos.z = mix(-23.5, 15.5, bandN) + (seed - 0.5) * 6.0 + broadWave * 1.35 + ribbonNoise * 1.85;
      float pulseLine = 0.5 + 0.5 * sin(ribbonPhase * (1.7 + seed * 0.9) - t * 0.32 + seed * 6.0);
      vec3 aurora = mix(vec3(0.52, 0.86, 1.0), vec3(0.70, 0.58, 1.0), bandN);
      vAlpha = (0.18 + ridge * 0.78 + pulseLine * highGlow * 0.035 + bassGlow * 0.025) * softMask * (0.96 + transition * 0.02);
      vColor = mix(coverColor, aurora, 0.62 + ridge * 0.22) * (0.76 + ridge * 0.86 + pulseLine * highGlow * 0.05 + bassGlow * 0.04);
      maxRippleAmp = max(maxRippleAmp, ridge * (0.12 + midGlow * 0.05) + pulseLine * highGlow * 0.045 + bassGlow * 0.030);
    } else {
      float q = (lane - 0.80) / 0.20;
      float seed = hash11(aRand * 917.0 + floor(q * 130.0));
      float drift = fract(aUv.x + t * (0.0014 + seed * 0.0048) + seed * 0.63);
      float cluster = snoise(vec3(seed * 2.0, q * 3.2, t * 0.007));
      pos = vec3((drift - 0.5) * (45.0 + seed * 22.0) + cluster * 3.4, (hash11(aRand * 331.0 + seed * 5.0) - 0.5) * 22.0, mix(-32.0, 18.0, seed));
      float twinkle = pow(0.5 + 0.5 * sin(t * (0.24 + seed * 0.42) + aRand * 17.0), 5.0);
      float dust = smoothstep(0.22, 0.98, hash11(aRand * 661.0 + floor(q * 160.0)));
      vAlpha = dust * (0.16 + twinkle * 0.46 + highGlow * 0.025 + bassGlow * 0.018) * (1.0 - q * 0.06);
      vColor = mix(coverColor, vec3(0.92, 0.97, 1.0), 0.62 + twinkle * 0.14) * (0.72 + twinkle * 0.62 + bassGlow * 0.025);
      maxRippleAmp = max(maxRippleAmp, twinkle * highGlow * 0.055 + dust * bassGlow * 0.030);
    }
  }

  if (uMouseActive > 0.5 && uPreset < 0.5) {
    float mdx = pos.x - uMouseXY.x;
    float mdy = pos.y - uMouseXY.y;
    float md = sqrt(mdx * mdx + mdy * mdy);
    if (md < 1.0) {
      float push = (1.0 - md) * (1.0 - md);
      pos.z += push * 0.55 * spread;
    }
  }
  if (uScatter > 0.001) {
    vec2 jdir = vec2(cos(aRand * 6.2831), sin(aRand * 6.2831));
    pos.xy += jdir * uScatter * (0.05 + uTreble * 0.10);
  }
  if (uTwist > 0.001 && uPreset < 0.5) {
    float ta = uTwist * pos.z * 0.6;
    float cs = cos(ta), sn = sin(ta);
    pos.xy = mat2(cs, -sn, sn, cs) * pos.xy;
  }

  float vinylHiResGuard = smoothstep(1.08, 1.55, uCoverRes) * step(3.5, uPreset) * (1.0 - step(4.5, uPreset));
  float edgeBoost = uEdgeEnabled * edgeVal * mix(1.0, 0.42, vinylHiResGuard);
  vSourceLum = dot(max(vColor, vec3(0.0)), vec3(0.299, 0.587, 0.114));
  float blackParticleGuard = 1.0 - smoothstep(0.025, 0.115, vSourceLum);
  vEdgeBoost = edgeBoost * (uPreset > 3.5 ? 0.22 : 1.0) * (1.0 - blackParticleGuard);
  vec3 darkLiftColor = mix(defaultColor * 0.72 + vec3(0.08), vec3(0.76, 0.92, 1.0), edgeVal * 0.24 + uClimax * 0.10);
  vColor = mix(vColor, darkLiftColor, blackParticleGuard * (0.44 + uClimax * 0.18));
  vColor = pow(max(vColor, vec3(0.0)), vec3(1.0 / max(0.35, uColorBoost)));
  float edgeColorMix = edgeBoost * (uPreset > 3.5 ? 0.20 : 0.50) * (1.0 - blackParticleGuard);
  vColor = mix(vColor, vColor + vec3(0.20), edgeColorMix);
  float tintLum = max(max(vColor.r, vColor.g), vColor.b);
  vec3 tintedColor = uTintColor * max(0.24, tintLum * 1.12);
  vColor = mix(vColor, tintedColor, clamp(uTintStrength, 0.0, 1.0) * (1.0 - blackParticleGuard));
  vBright = 0.82 + maxRippleAmp * 0.55 * spread + uBass * 0.10 + edgeBoost * 0.30 + uEnergy * 0.05 + uBurstAmt * 0.40 * spread;
  if (uPreset > 4.5) {
    vBright = 0.94 + maxRippleAmp * 0.34 + uBass * 0.020 + uEnergy * 0.026 + uBurstAmt * 0.025;
  } else if (uPreset > 3.5) {
    vBright = 0.94 + maxRippleAmp * 0.64 + uBass * 0.08 + edgeBoost * 0.12 + uEnergy * 0.05 + uBeat * 0.16 + uBurstAmt * 0.16;
  }
  vRipple = clamp(maxRippleAmp * 1.5 * spread, 0.0, 1.0);
  if (uHasDepth > 0.5 && uPreset < 0.5) {
    float bgMul = mix(1.0, 0.55, uBgFade * (1.0 - fgMask));
    vBright *= bgMul;
  }
  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  float depthSize = 36.0 / max(0.5, -mvPos.z);
  float audioBoost = 1.0 + maxRippleAmp * 0.70 * spread + edgeBoost * 0.55 + uBeat * 0.30 + uBurstAmt * 0.50 * spread;
  float sz = clamp(depthSize * audioBoost, 1.05, 4.95);
  if (uPreset > 4.5) {
    float flowDrive = uBass * 0.070 + uMid * 0.046 + uTreble * 0.060 + uBurstAmt * 0.090 + uBeat * 0.055;
    sz = clamp(depthSize * (1.05 + flowDrive), 1.00, 5.45);
  } else if (uPreset > 3.5) {
    float ringDrive = uBass * 0.30 + uMid * 0.18 + uTreble * 0.22 + uBeat * 0.30;
    sz = clamp(depthSize * (0.90 + ringDrive * 0.62), 1.05, 3.90);
  }
  gl_PointSize = sz * uPixel * uPointScale;
  gl_Position = projectionMatrix * mvPos;
}
`,nm=`
precision highp float;
uniform sampler2D uDotTex;
uniform float uAlpha, uParticleDim;
varying vec3 vColor;
varying float vBright, vRipple, vEdgeBoost, vAlpha, vSourceLum;
void main(){
  vec4 tex = texture2D(uDotTex, gl_PointCoord);
  if (tex.a < 0.02) discard;
  vec3 col = vColor * vBright;
  col = mix(col, col * 1.3 + vec3(0.05), vEdgeBoost * 0.35);
  col = mix(col, col * 1.2, vRipple * 0.4);
  float keepBlack = 1.0 - smoothstep(0.025, 0.115, vSourceLum);
  float nonBlack = 1.0 - keepBlack;
  float dotDist = length(gl_PointCoord - vec2(0.5)) * 2.0;
  float readableRim = smoothstep(0.44, 0.94, dotDist) * (1.0 - smoothstep(0.94, 1.08, dotDist)) * tex.a;
  float outLum = dot(col, vec3(0.299, 0.587, 0.114));
  float lightParticle = smoothstep(0.50, 0.82, outLum) * nonBlack;
  float darkParticle = (1.0 - smoothstep(0.20, 0.50, outLum)) * nonBlack;
  col = mix(col, vec3(0.0), readableRim * lightParticle * 0.38);
  col = mix(col, vec3(1.0), readableRim * darkParticle * 0.20);
  col = clamp(col, vec3(0.0), vec3(1.6));
  gl_FragColor = vec4(col, tex.a * uAlpha * uParticleDim * vAlpha);
}
`,sm=`
precision highp float;
uniform sampler2D uDotTex;
uniform float uAlpha, uBloomStrength, uParticleDim;
varying vec3 vColor;
varying float vBright, vRipple, vEdgeBoost, vAlpha, vSourceLum;
void main(){
  vec4 tex = texture2D(uDotTex, gl_PointCoord);
  if (tex.a < 0.01) discard;
  float soft = tex.a * tex.a;
  vec3 col = vColor * (0.55 + vBright * 0.62);
  col = mix(col, col + vec3(0.22, 0.18, 0.10), vEdgeBoost * 0.35);
  col = clamp(col, vec3(0.0), vec3(1.8));
  float pulse = 1.0 + vRipple * 0.65;
  float keepBlack = 1.0 - smoothstep(0.025, 0.115, vSourceLum);
  float bloomKeep = 1.0 - keepBlack * 0.92;
  gl_FragColor = vec4(col, soft * uAlpha * uBloomStrength * uParticleDim * pulse * 0.55 * vAlpha * bloomKeep);
}
`,Xo=class{constructor(){this.config={id:"mineradio",name:"Mineradio",description:"\u79FB\u690D Mineradio \u821E\u53F0\u6B4C\u8BCD\u4E3B\u6548\u679C\uFF1AThree \u70B9\u4E91\u5C01\u9762\u3001\u60AC\u6D6E\u6B4C\u8BCD\u4E0E\u62D6\u62FD\u89C6\u89D2",author:"DancingMusic",version:"1.0.1",category:"particle",price:0,thumbnail:Gc,hostOverlay:{showSongCover:false,showSongMetadata:false},rendering:{context:"webgl"},settingSections:qc,settings:Zc};this.canvas=null;this.renderer=null;this.scene=null;this.camera=null;this.stageGroup=null;this.coverGroup=null;this.particles=null;this.bloomParticles=null;this.coverGeometry=null;this.coverGrid=0;this.coverTextureSize=Sa(se.coverResolution);this.uniforms=null;this.dotTexture=null;this.coverTexture=null;this.previousCoverTexture=null;this.edgeTexture=null;this.rippleTexture=null;this.rippleData=null;this.ripples=[];this.rippleIdx=0;this.lastRippleAt=-10;this.lastSectionRippleAt=-10;this.lastBassRising=false;this.rippleRegions=Array.from({length:9},(e,t)=>{let i=t%3,s=Math.floor(t/3);return {x:(i/2-.5)*Ta*.72,y:(s/2-.5)*Ta*.72}});this.lyricMesh=null;this.lyricShadow=null;this.lyricGlow=null;this.lyricSun=null;this.lyricSparks=null;this.lyricStarRiver=null;this.lyricTexture=null;this.lyricShadowTexture=null;this.lyricGlowTexture=null;this.lyricSunTexture=null;this.lyricSparkBasePositions=null;this.lyricStarRiverSize={width:4.2,height:.58};this.lyricTextureKey="";this.shelfGroup=null;this.shelfCards=[];this.shelfAllItems=[];this.shelfGeometry=null;this.shelfTextureKey="";this.shelfItemsKey="";this.shelfRenderedStart=-1;this.shelfCenterTarget=0;this.shelfCenterSmooth=0;this.shelfLastWheelAt=0;this.shelfCoverCache=new Map;this.width=0;this.height=0;this.elapsed=0;this.currentTime=0;this.songInfo={title:"",artist:""};this.playlist=[];this.playlistCollections=[];this.hostActions=null;this.currentIndex=0;this.previousPreset=se.preset;this.lyrics=[];this.activeLyricIndex=-99;this.currentText="";this.currentProgress=0;this.lineAge=0;this.palette=zo();this.beatGlow=0;this.sunEnergy=0;this.lastBeatAt=-10;this.smoothBass=0;this.smoothMid=0;this.smoothTreble=0;this.smoothEnergy=0;this.beatPulse=0;this.sectionClimax=0;this.sectionDynamics=0;this.sectionBloom=0;this.stageShaderClimax=0;this.cameraPunch=0;this.cameraThetaKick=0;this.cameraPhiKick=0;this.cameraRadiusKick=0;this.cameraRollKick=0;this.cameraDynamicsScale=.82;this.lastCameraBeatAt=-10;this.gestureRotation={x:0,y:0};this.rotationReturn={active:false,velocityX:0,velocityY:0};this.lyricCoverLocalPosition=new O;this.lyricCoverWorldPosition=new O;this.lyricStagePosition=new O;this.lyricCoverWorldQuaternion=new Xt;this.lyricTiltQuaternion=new Xt;this.particleSpin={vx:0,vy:0,damping:.9};this.mouseWorld=new O(-999,-999,0);this.mouseActive=false;this.particlePointerRay=new zn;this.particlePointerNdc=new Ye;this.shelfActionRay=new zn;this.shelfActionNdc=new Ye;this.particlePointerPlane=new jt;this.particlePointerPlanePoint=new O;this.particlePointerPlaneNormal=new O;this.particlePointerWorldHit=new O;this.particlePointerLocalHit=new O;this.particlePointerQuat=new Xt;this.particlePointerFrame={dirty:false,clientX:0,clientY:0,ndcX:0,ndcY:0};this.pointerId=null;this.isDraggingView=false;this.lastPointerX=0;this.lastPointerY=0;this.lastPointerAt=0;this.pendingDrag={dirty:false,dx:0,dy:0,elapsed:0};this.pointerDownAt={x:0,y:0,hadDrag:false};this.lastClickAt=0;this.lastClickPoint={x:0,y:0};this.settings={...se};this.handlePointerDown=e=>{if(this.canvas&&e.button!==2){this.pointerId=e.pointerId,this.isDraggingView=true,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.lastPointerAt=performance.now(),this.pointerDownAt={x:e.clientX,y:e.clientY,hadDrag:false},this.particleSpin.vx=0,this.particleSpin.vy=0,this.queueParticlePointerFrame(e.clientX,e.clientY),this.canvas.style.cursor="grabbing";try{this.canvas.setPointerCapture(e.pointerId);}catch{}}};this.handlePointerMove=e=>{if(this.queueParticlePointerFrame(e.clientX,e.clientY),!this.isDraggingView||this.pointerId!==e.pointerId)return;let t=e.clientX-this.lastPointerX,i=e.clientY-this.lastPointerY,s=performance.now(),r=Math.max(1/120,Math.min(.08,(s-this.lastPointerAt)/1e3||1/60));this.pendingDrag.dirty=true,this.pendingDrag.dx+=t,this.pendingDrag.dy+=i,this.pendingDrag.elapsed+=r,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.lastPointerAt=s;let o=e.clientX-this.pointerDownAt.x,a=e.clientY-this.pointerDownAt.y;Math.sqrt(o*o+a*a)>Go&&(this.pointerDownAt.hadDrag=true);};this.handleDoubleClick=e=>{e.preventDefault(),e.stopPropagation(),this.lastClickAt=0,this.resetParticleRotationTarget(true);};this.handleWheel=e=>{if(!this.shelfGroup?.visible||this.settings.shelf==="off"||this.shelfAllItems.length<2)return;let t=performance.now();if(t-this.shelfLastWheelAt<76){e.preventDefault();return}let i=Math.abs(e.deltaY)>=Math.abs(e.deltaX)?e.deltaY:e.deltaX;Math.abs(i)<2||(e.preventDefault(),this.shelfLastWheelAt=t,this.setShelfCenterTarget(this.shelfCenterTarget+(i>0?1:-1),true));};this.handlePointerUp=e=>{if(this.pointerId!==e.pointerId)return;this.flushPointerDragFrame();let t=e.clientX-this.pointerDownAt.x,i=e.clientY-this.pointerDownAt.y,s=Math.sqrt(t*t+i*i);if(!this.pointerDownAt.hadDrag&&s<=Go){let r=this.pickShelfCardAt(e.clientX,e.clientY);if(r&&this.triggerShelfCardAction(r.card,r.detail))this.lastClickAt=0;else {let o=performance.now(),a=e.clientX-this.lastClickPoint.x,l=e.clientY-this.lastClickPoint.y,c=Math.sqrt(a*a+l*l);this.lastClickAt>0&&o-this.lastClickAt<320&&c<=Go*1.8?(this.lastClickAt=0,this.resetParticleRotationTarget(true)):(this.lastClickAt=o,this.lastClickPoint={x:e.clientX,y:e.clientY});}}else this.lastClickAt=0;if(this.canvas){this.canvas.style.cursor="grab";try{this.canvas.releasePointerCapture(e.pointerId);}catch{}}this.pointerId=null,this.isDraggingView=false,this.pendingDrag.dirty=false,this.pendingDrag.dx=0,this.pendingDrag.dy=0,this.pendingDrag.elapsed=0;};this.handlePointerLeave=()=>{this.isDraggingView||(this.particlePointerFrame.dirty=false,this.mouseWorld.set(-999,-999,0),this.mouseActive=false,this.canvas&&(this.canvas.style.cursor="grab"));};}init(e){this.canvas=e,this.width=e.width||e.offsetWidth||800,this.height=e.height||e.offsetHeight||600,this.scene=new ps,this.camera=new Ct(42,Math.max(1,this.width)/Math.max(1,this.height),.1,100),this.camera.position.set(0,0,6.6),this.renderer=new ya({canvas:e,alpha:true,antialias:true,premultipliedAlpha:false,preserveDrawingBuffer:true}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,eh(this.settings.performanceQuality))),this.renderer.setClearColor(0,1),this.renderer.setSize(this.width,this.height,false),this.stageGroup=new ei,this.coverGroup=new ei,this.coverGroup.position.set(-0.22,.1,0),this.coverGroup.scale.setScalar(1.28),this.stageGroup.add(this.coverGroup),this.scene.add(this.stageGroup),this.setupCoverParticles(),this.setupLyricMeshes(),this.setupShelf(),this.installPointerHandlers(),this.rebuildSongState();}resize(e,t){this.width=e,this.height=t,this.camera&&(this.camera.aspect=Math.max(1,e)/Math.max(1,t),this.camera.updateProjectionMatrix()),this.renderer?.setSize(e,t,false);}updateSettings(e){if(this.settings=$c(e,this.settings),e.currentSong){let t=e.currentSong,i=t.title!==this.songInfo.title||t.artist!==this.songInfo.artist||t.cover!==this.songInfo.cover||t.lyrics!==this.songInfo.lyrics;this.songInfo={title:t.title||"",artist:t.artist||"",cover:t.cover,lyrics:t.lyrics},i&&this.rebuildSongState();}typeof e.currentTime=="number"&&(this.currentTime=e.currentTime),e.hostActions&&typeof e.hostActions=="object"&&(this.hostActions=e.hostActions),Array.isArray(e.playlist)&&(this.playlist=e.playlist.filter(t=>!!(t&&typeof t=="object")).slice(0,36).map((t,i)=>({shelfType:"queue",title:String(t.title||""),artist:String(t.artist||""),cover:typeof t.cover=="string"?t.cover:void 0,lyrics:Array.isArray(t.lyrics)?t.lyrics:void 0,url:typeof t.url=="string"?t.url:void 0,queueIndex:i}))),Array.isArray(e.playlistCollections)&&(this.playlistCollections=e.playlistCollections.filter(t=>!!(t&&typeof t=="object")).slice(0,36).map(t=>({id:String(t.id||""),title:String(t.title||""),subtitle:typeof t.subtitle=="string"?t.subtitle:void 0,cover:typeof t.cover=="string"?t.cover:void 0,tag:typeof t.tag=="string"?t.tag:void 0,source:typeof t.source=="string"?t.source:void 0,trackCount:typeof t.trackCount=="number"?t.trackCount:void 0})).filter(t=>t.id&&t.title)),typeof e.currentIndex=="number"&&(this.currentIndex=Math.max(0,Math.min(Math.max(0,this.playlist.length-1),Math.floor(e.currentIndex))));}render(e,t,i){if(!this.renderer||!this.scene||!this.camera||!this.uniforms)return;let s=Math.min(.05,Math.max(0,t||0));this.elapsed+=s*(i?1:.38),this.lineAge+=s,this.updateLyricState(),this.updateMotion(e,s,i),this.flushPointerDragFrame(),this.tickGestureRotation(s),this.updateParticlePointerFrame(),this.updateUniforms(e,i,s),this.updateRipples(s,i),this.updateStageTransform(s),this.updateLyricTexture(),this.updateLyricEffects(e,s,i),this.renderer.render(this.scene,this.camera);}dispose(){this.removePointerHandlers(),this.lyricTexture?.dispose(),this.lyricShadowTexture?.dispose(),this.lyricGlowTexture?.dispose(),this.lyricSunTexture?.dispose(),this.coverTexture?.dispose(),this.previousCoverTexture?.dispose(),this.edgeTexture?.dispose(),this.rippleTexture?.dispose(),this.dotTexture?.dispose(),this.coverGeometry?.dispose(),this.particles?.material?.dispose(),this.bloomParticles?.material?.dispose(),this.lyricMesh?.geometry?.dispose(),this.lyricMesh?.material?.dispose(),this.lyricShadow?.geometry?.dispose(),this.lyricShadow?.material?.dispose(),this.lyricGlow?.geometry?.dispose(),this.lyricGlow?.material?.dispose(),this.lyricSun?.geometry?.dispose(),this.lyricSun?.material?.dispose(),this.lyricSparks?.geometry?.dispose(),this.lyricSparks?.material?.dispose(),this.lyricStarRiver?.geometry?.dispose(),this.lyricStarRiver?.material?.dispose(),this.disposeShelfCards(),this.shelfGeometry?.dispose(),this.shelfCoverCache.clear(),this.renderer?.dispose(),this.renderer=null,this.scene=null,this.camera=null,this.canvas=null;}setupCoverParticles(){if(!this.coverGroup||!this.renderer)return;this.dotTexture=Q0(),this.coverTexture=new qt(Is("#1c1c28")),this.previousCoverTexture=new qt(Is("#1c1c28")),this.edgeTexture=new qt(Is("rgba(128,0,0,255)"));for(let i of [this.coverTexture,this.previousCoverTexture,this.edgeTexture])i.minFilter=ft,i.magFilter=ft,i.wrapS=Wt,i.wrapT=Wt;this.rippleData=new Float32Array(Rs*4),this.ripples=Array.from({length:Rs},()=>({x:0,y:0,age:-10,str:0})),this.rippleTexture=new On(this.rippleData,1,Rs,Ot,ii),this.rippleTexture.magFilter=St,this.rippleTexture.minFilter=St,this.rippleTexture.needsUpdate=true,this.uniforms={uTime:{value:0},uBass:{value:0},uMid:{value:0},uTreble:{value:0},uBeat:{value:0},uEnergy:{value:0},uBurstAmt:{value:.18},uClimax:{value:0},uPreset:{value:Ho(se.preset)},uIntensity:{value:se.intensity},uSpread:{value:se.coverSpread},uDepth:{value:se.depth},uPointScale:{value:se.pointScale},uSpeed:{value:1},uTwist:{value:se.twist},uColorBoost:{value:se.colorBoost},uCoverRes:{value:se.coverResolution},uBgFade:{value:se.bgFade},uBloomStrength:{value:se.bloom?se.bloomStrength:0},uBloomSize:{value:2.65},uScatter:{value:se.scatter},uCoverTex:{value:this.coverTexture},uPrevCoverTex:{value:this.previousCoverTexture},uColorMixT:{value:1},uVinylSpin:{value:0},uTintColor:{value:new Oe(.62,.72,.82)},uTintStrength:{value:0},uEdgeTex:{value:this.edgeTexture},uRippleTex:{value:this.rippleTexture},uRippleCount:{value:0},uDotTex:{value:this.dotTexture},uMouseXY:{value:new Ye(-999,-999)},uMouseActive:{value:0},uHasCover:{value:0},uHasDepth:{value:0},uEdgeEnabled:{value:se.edge?1:0},uAiBoost:{value:.55},uPixel:{value:this.renderer.getPixelRatio()},uAlpha:{value:0},uParticleDim:{value:1}},this.coverGrid=th(se.coverResolution),this.coverGeometry=ih(this.coverGrid);let e=new wt({uniforms:this.uniforms,vertexShader:nh,fragmentShader:nm,transparent:true,depthWrite:false,blending:wi}),t=new wt({uniforms:this.uniforms,vertexShader:nh.replace("uniform float uPreset, uHasCover, uHasDepth, uEdgeEnabled, uAiBoost, uPixel, uColorMixT, uMouseActive, uVinylSpin, uTintStrength;","uniform float uPreset, uHasCover, uHasDepth, uEdgeEnabled, uAiBoost, uPixel, uColorMixT, uMouseActive, uVinylSpin, uTintStrength, uBloomSize;").replace("gl_PointSize = sz * uPixel * uPointScale;","gl_PointSize = sz * uPixel * uPointScale * uBloomSize;"),fragmentShader:sm,transparent:true,depthWrite:false,depthTest:false,blending:Ai});this.bloomParticles=new Gi(this.coverGeometry,t),this.bloomParticles.frustumCulled=false,this.bloomParticles.renderOrder=0,this.bloomParticles.visible=se.bloom,this.particles=new Gi(this.coverGeometry,e),this.particles.frustumCulled=false,this.particles.renderOrder=1,this.coverGroup.add(this.bloomParticles),this.coverGroup.add(this.particles);}setupLyricMeshes(){if(!this.stageGroup)return;let e=new Zt(6.4,1.25,1,1),t=Is("rgba(0,0,0,0)",16);this.lyricTexture=new qt(t),this.lyricShadowTexture=new qt(t),this.lyricGlowTexture=new qt(t),this.lyricSunTexture=j0();let i=new li({map:this.lyricSunTexture,transparent:true,depthWrite:false,depthTest:false,blending:Ai,opacity:0,side:Ut,color:hi(this.palette.highlight,"#fff2b8",.36)}),s=new li({map:this.lyricGlowTexture,transparent:true,depthWrite:false,depthTest:false,blending:Ai,opacity:.84}),r=new li({map:this.lyricShadowTexture,transparent:true,depthWrite:false,depthTest:false,opacity:.72,side:Ut}),o=new li({map:this.lyricTexture,transparent:true,depthWrite:false,depthTest:false,side:Ut});this.lyricSun=new Tt(new Zt(6.3,1.55,1,1),i),this.lyricSun.renderOrder=39,this.lyricSun.position.set(.03,-0.03,1.26),this.lyricGlow=new Tt(e.clone(),s),this.lyricGlow.renderOrder=40,this.lyricGlow.position.set(.03,-0.05,1.32),this.lyricGlow.scale.set(1.08,1.08,1),this.lyricShadow=new Tt(e.clone(),r),this.lyricShadow.renderOrder=42,this.lyricShadow.position.set(.03,-0.05,1.34),this.lyricShadow.scale.set(1.02,1.08,1),this.lyricMesh=new Tt(e,o),this.lyricMesh.renderOrder=43,this.lyricMesh.position.set(.03,-0.05,1.38),this.stageGroup.add(this.lyricSun),this.stageGroup.add(this.lyricGlow),this.stageGroup.add(this.lyricShadow),this.stageGroup.add(this.lyricMesh),this.createLyricStarRiver(),this.createLyricSparks();}createLyricStarRiver(){if(!this.stageGroup||!this.dotTexture||!this.uniforms)return;let e=new Bt,t=new Float32Array(Ps),i=new Float32Array(Ps),s=new Float32Array(Ps);for(let o=0;o<Ps;o+=1)t[o]=xt(o*17.17+3.9)*1e3,i[o]=xt(o*23.73+6.1),s[o]=xt(o*31.41+9.7);e.setAttribute("position",new ht(new Float32Array(Ps*3),3)),e.setAttribute("seed",new ht(t,1)),e.setAttribute("lane",new ht(i,1)),e.setAttribute("depthSeed",new ht(s,1));let r=new wt({uniforms:{uMap:{value:this.dotTexture},uTime:this.uniforms.uTime,uPixel:this.uniforms.uPixel,uBass:this.uniforms.uBass,uBeat:this.uniforms.uBeat,uWidth:{value:this.lyricStarRiverSize.width},uHeight:{value:this.lyricStarRiverSize.height},uOpacity:{value:0},uColorA:{value:hi(this.palette.secondary,"#9cffdf",.42)},uColorB:{value:hi(this.palette.highlight,"#fff7d2",.44)}},vertexShader:["precision highp float;","attribute float seed,lane,depthSeed;","uniform float uTime,uPixel,uBass,uBeat,uWidth,uHeight;","varying float vSeed,vLane,vGlow;","float hash(float n){return fract(sin(n)*43758.5453123);}","void main(){","  float laneBand = floor(lane * 5.0);","  float laneLocal = fract(lane * 5.0);","  float speed = 0.030 + hash(seed * 1.71) * 0.055 + laneBand * 0.005;","  float flow = fract(hash(seed * 2.13) + uTime * speed);","  float x = (flow - 0.5) * uWidth * (1.08 + hash(seed * 5.1) * 0.18);","  float curve = sin(flow * 6.2831853 * (0.92 + hash(seed * 4.0) * 0.46) + seed * 0.071 + uTime * 0.34);","  float breath = sin(uTime * (0.42 + hash(seed * 6.9) * 0.42) + seed * 0.093);","  float y = (laneBand - 2.0) * uHeight * 0.135 + curve * uHeight * (0.20 + hash(seed * 9.0) * 0.18) + (laneLocal - 0.5) * uHeight * 0.16 + breath * uHeight * 0.10;","  float z = -0.08 + (depthSeed - 0.5) * 0.44 + sin(uTime * (0.18 + hash(seed) * 0.24) + seed) * 0.08;","  vec3 pos = vec3(x, y, z);","  float edge = smoothstep(0.0, 0.18, flow) * (1.0 - smoothstep(0.82, 1.0, flow));","  vSeed = seed;","  vLane = lane;","  vGlow = edge * (0.62 + 0.38 * sin(uTime * (0.9 + hash(seed * 8.0) * 0.7) + seed));","  vec4 mv = modelViewMatrix * vec4(pos, 1.0);","  float dist = max(0.45, -mv.z);","  float size = (0.030 + hash(seed * 12.0) * 0.040 + vGlow * 0.024 + uBeat * 0.010) * (1.0 + uBass * 0.18);","  gl_PointSize = clamp(size * uPixel * 120.0 / dist, 1.0, 7.2);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["precision highp float;","uniform sampler2D uMap;","uniform vec3 uColorA,uColorB;","uniform float uOpacity,uTime,uBeat;","varying float vSeed,vLane,vGlow;","void main(){","  vec4 tex = texture2D(uMap, gl_PointCoord);","  if(tex.a < 0.02) discard;","  float tw = pow(0.5 + 0.5 * sin(uTime * (0.55 + fract(vSeed) * 0.35) + vSeed), 4.0);","  vec3 col = mix(uColorA, uColorB, smoothstep(0.12, 0.92, vLane) * 0.45 + tw * 0.42 + vGlow * 0.26);","  float alpha = tex.a * uOpacity * (0.20 + vGlow * 0.78 + tw * 0.32 + uBeat * 0.10);","  gl_FragColor = vec4(col * (0.82 + vGlow * 0.72 + tw * 0.32), alpha);","}"].join(`
`),transparent:true,depthWrite:false,depthTest:false,blending:Ai});this.lyricStarRiver=new Gi(e,r),this.lyricStarRiver.renderOrder=45,this.lyricStarRiver.frustumCulled=false,this.lyricStarRiver.position.set(.03,.1,1.44),this.stageGroup.add(this.lyricStarRiver);}createLyricSparks(){if(!this.stageGroup||!this.dotTexture||!this.renderer)return;let e=new Bt;this.lyricSparkBasePositions=new Float32Array($n*3),e.setAttribute("position",new ht(new Float32Array($n*3),3));let t=new Float32Array($n);for(let s=0;s<$n;s+=1)t[s]=xt(s*29.87+4.2)*1e3;e.setAttribute("seed",new ht(t,1));let i=new wt({uniforms:{uMap:{value:this.dotTexture},uPixel:{value:this.renderer.getPixelRatio()},uSize:{value:.055},uOpacity:{value:0},uColor:{value:hi(this.palette.highlight,"#fff7d2",.46)}},vertexShader:["precision highp float;","attribute float seed;","uniform float uPixel,uSize,uOpacity;","varying float vSeed;","void main(){","  vSeed = seed;","  vec4 mv = modelViewMatrix * vec4(position, 1.0);","  float dist = max(0.45, -mv.z);","  float tw = 0.72 + 0.28 * sin(seed * 0.071);","  gl_PointSize = clamp(uSize * uPixel * 122.0 * tw * (0.7 + uOpacity * 0.5) / dist, 1.0, 9.0);","  gl_Position = projectionMatrix * mv;","}"].join(`
`),fragmentShader:["precision highp float;","uniform sampler2D uMap;","uniform vec3 uColor;","uniform float uOpacity;","varying float vSeed;","void main(){","  vec4 tex = texture2D(uMap, gl_PointCoord);","  if(tex.a < 0.02) discard;","  float pulse = 0.68 + 0.32 * sin(vSeed * 0.047);","  gl_FragColor = vec4(uColor * (0.88 + pulse * 0.48), tex.a * uOpacity * pulse);","}"].join(`
`),transparent:true,depthWrite:false,depthTest:false,blending:Ai});this.lyricSparks=new Gi(e,i),this.lyricSparks.renderOrder=46,this.lyricSparks.frustumCulled=false,this.lyricSparks.position.set(.03,-0.04,1.48),this.stageGroup.add(this.lyricSparks),this.rebuildLyricParticleLayout(6.9,6.9/(2048/460));}setupShelf(){this.stageGroup&&(this.shelfGroup=new ei,this.shelfGroup.visible=false,this.shelfGroup.renderOrder=24,this.shelfGeometry=new Zt(2.05,1.025,1,1),this.stageGroup.add(this.shelfGroup));}disposeShelfCards(){this.shelfCards.forEach(e=>{e.group.remove(e.mesh),this.shelfGroup?.remove(e.group),e.texture.dispose(),e.mesh.material.dispose();}),this.shelfCards=[],this.shelfRenderedStart=-1;}requestShelfCover(e,t){if(!e)return;let i=this.shelfCoverCache.get(e);if(i?.loaded||i?.loading||i?.failed)return;let s={loaded:false,failed:false,loading:true,img:void 0};this.shelfCoverCache.set(e,s);let r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>{s.img=r,s.loaded=true,s.loading=false,t.drawKey="",this.drawShelfCard(t);},r.onerror=()=>{s.failed=true,s.loading=false,t.drawKey="",this.drawShelfCard(t);},r.src=e;}drawShelfCard(e){let t=e.item,i=t.cover?this.shelfCoverCache.get(t.cover):null,s=t.cover?i?.loaded?"ready":i?.failed?"fail":"wait":"none",r=e.isCenter?Math.round((this.smoothBass+this.beatPulse*.85)*6):0,o=[t.title||"",t.artist||"",t.tag||"",t.subtitle||"",t.playlistId||"",t.queueIndex==null?"":t.queueIndex,t.cover||"",s,e.active?1:0,e.isCenter?1:0,e.selected?1:0,e.dofBucket,r,this.settings.shelfAccentColor,this.settings.shelfBgOpacity].join("|");if(e.drawKey===o)return;e.drawKey=o;let a=e.ctx,l=e.canvas.width,c=e.canvas.height,h=18,u=this.settings.shelfAccentColor,f=t.shelfType==="playlist",p=!f&&t.tag==="\u6B63\u5728\u64AD\u653E";a.clearRect(0,0,l,c),qi(a,h,h,l-h*2,c-h*2,32),a.fillStyle=`rgba(0,0,0,${this.settings.shelfBgOpacity.toFixed(3)})`,a.fill();let g=a.createLinearGradient(0,0,l,c);g.addColorStop(0,"rgba(255,255,255,0.10)"),g.addColorStop(1,"rgba(255,255,255,0.018)"),a.fillStyle=g,a.fill(),a.strokeStyle=p?_t(u,.72):"rgba(255,255,255,0.14)",a.lineWidth=p?1.8+Math.sin(this.elapsed*3)*.28+this.smoothBass*1.2:1.1,a.stroke(),e.selected&&(a.save(),qi(a,h+2,h+2,l-h*2-4,c-h*2-4,30),a.shadowColor=_t(u,.58),a.shadowBlur=18,a.strokeStyle=_t(u,.72),a.lineWidth=2.2,a.stroke(),a.restore());let v=c-h*2-8,m=h+6,d=h+4;if(qi(a,m,d,v,v,26),a.fillStyle="rgba(255,255,255,0.04)",a.fill(),t.cover&&(i?.loaded&&i.img?(a.save(),qi(a,m,d,v,v,26),a.clip(),a.drawImage(i.img,m,d,v,v),a.restore()):this.requestShelfCover(t.cover,e)),!i?.loaded){let b=a.createLinearGradient(m,d,m+v,d+v);b.addColorStop(0,_t(u,p?.34:.2)),b.addColorStop(.55,"rgba(255,255,255,0.11)"),b.addColorStop(1,"rgba(0,0,0,0.18)"),a.fillStyle=b,a.fill();}let M=h+v+32;if(a.font=`700 17px ${Zi()}`,a.fillStyle=p?_t(u,.92):"rgba(255,255,255,0.92)",a.fillText(t.tag||(p?"\u6B63\u5728\u64AD\u653E":`#${e.index+1}`),M,h+36),a.font=`700 30px ${Zi()}`,a.fillStyle="rgba(255,255,255,0.96)",Qc(a,t.title||"DancingMusic",M,h+78,l-M-h-14,36,2),a.font=`400 17px ${Zi()}`,a.fillStyle="rgba(255,255,255,0.52)",Qc(a,t.subtitle||t.artist||"\u672A\u77E5\u6B4C\u624B",M,h+156,l-M-h-14,24,2),a.strokeStyle=p?_t(u,.9):"rgba(255,255,255,0.30)",a.lineWidth=3.5,a.beginPath(),a.moveTo(M,c-h-22),a.lineTo(M+Math.min(260,80+this.smoothBass*320),c-h-22),a.stroke(),e.isCenter){let b=c-h-78;if(f){qi(a,M,b,138,38,18);let E=a.createLinearGradient(M,b,M+138,b+38);E.addColorStop(0,"rgba(255,255,255,0.88)"),E.addColorStop(.55,_t(u,.94)),E.addColorStop(1,_t(u,.58)),a.fillStyle=E,a.fill(),a.strokeStyle=_t(u,.44),a.lineWidth=1.1,a.stroke(),a.font=`800 14px ${Zi()}`,a.fillStyle=jc(u),a.fillText("\u64AD\u653E\u6B4C\u5355",M+38,b+24),qi(a,M+150,b,104,38,18),a.fillStyle="rgba(255,255,255,0.055)",a.fill(),a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=1.1,a.stroke(),a.font=`700 14px ${Zi()}`,a.fillStyle="rgba(255,255,255,0.78)",a.fillText("\u8BE6\u60C5",M+184,b+24);}else a.font=`600 14px ${Zi()}`,a.fillStyle=_t(u,.84),a.fillText(p?"\u5F53\u524D\u6B4C\u66F2":"\u961F\u5217\u6B4C\u66F2",M,b+25);if(p){qi(a,M+88,b,104,38,18);let E=a.createLinearGradient(M+88,b,M+192,b+38);E.addColorStop(0,"rgba(255,255,255,0.88)"),E.addColorStop(.55,_t(u,.94)),E.addColorStop(1,_t(u,.58)),a.fillStyle=E,a.fill(),a.font=`800 14px ${Zi()}`,a.fillStyle=jc(u),a.fillText("PLAYING",M+110,b+24);}}e.dofBlur>.12&&(qi(a,h,h,l-h*2,c-h*2,32),a.fillStyle=`rgba(0,0,0,${Math.min(.28,e.dofBlur*.18).toFixed(3)})`,a.fill()),e.texture.needsUpdate=true;}buildShelfItems(){let e=this.settings.shelfMergeCollections?this.playlistCollections:this.playlistCollections.filter(r=>(r.tag||"").includes("\u6536\u85CF")),i=(e.length?e:this.playlistCollections).map(r=>({shelfType:"playlist",title:r.title,artist:r.source||"Playlist",subtitle:r.subtitle||[r.source,typeof r.trackCount=="number"?`${r.trackCount} \u9996`:""].filter(Boolean).join(" \xB7 "),cover:r.cover,tag:r.tag||"\u6B4C\u5355",playlistId:r.id,trackCount:r.trackCount,source:r.source})),s=this.playlist.length?this.playlist.map((r,o)=>({...r,shelfType:"queue",tag:o===this.currentIndex?"\u6B63\u5728\u64AD\u653E":`#${o+1}`,queueIndex:o})):this.songInfo.title?[{...this.songInfo,shelfType:"queue",tag:"\u5F53\u524D\u6B4C\u66F2",queueIndex:0}]:[];return i.length?i:s}clampShelfCenter(e){return this.shelfAllItems.length?Math.max(0,Math.min(this.shelfAllItems.length-1,Math.round(e))):0}setShelfCenterTarget(e,t=true){let i=this.clampShelfCenter(e),s=this.clampShelfCenter(this.shelfCenterTarget);this.shelfCenterTarget=i,t&&i!==s&&this.shelfCards.forEach(r=>{r.index===i&&(r.fxPulse=Math.max(r.fxPulse,.62),r.selected=true,r.drawKey="");});}ensureShelfCards(){if(!this.shelfGroup||!this.shelfGeometry)return;let e=this.buildShelfItems(),t=[e.map(c=>`${c.shelfType||""}:${c.playlistId||""}:${c.queueIndex??""}:${c.title}:${c.artist}:${c.cover||""}:${c.tag||""}:${c.subtitle||""}`).join("~"),this.settings.shelfAccentColor,this.settings.shelfBgOpacity].join("|");if(t!==this.shelfItemsKey){let c=this.shelfAllItems[0]?.shelfType==="queue";this.shelfItemsKey=t,this.shelfAllItems=e,e[0]?.shelfType==="queue"?(this.shelfCenterTarget=this.clampShelfCenter(this.currentIndex),c||(this.shelfCenterSmooth=this.shelfCenterTarget)):(this.shelfCenterTarget=this.clampShelfCenter(this.shelfCenterTarget),this.shelfCards.length||(this.shelfCenterSmooth=this.shelfCenterTarget));}if(!e.length){this.shelfAllItems=[],this.shelfTextureKey="",this.disposeShelfCards();return}let s=ko,r=this.clampShelfCenter(this.shelfCenterTarget),o=Math.max(0,r-s),a=Math.min(e.length-1,o+s*2);o=Math.max(0,a-s*2);let l=[this.shelfItemsKey,o,a].join("|");if(!(l===this.shelfTextureKey&&this.shelfCards.length===a-o+1)){this.shelfTextureKey=l,this.disposeShelfCards();for(let c=o;c<=a;c+=1){let h=e[c],u=c===r,f=document.createElement("canvas");f.width=720,f.height=360;let p=f.getContext("2d");if(!p)continue;let g=new qt(f);g.minFilter=ft,g.magFilter=ft,g.generateMipmaps=false;let v=new li({map:g,transparent:true,depthWrite:false,depthTest:false,opacity:u?.96:.42,side:Ut}),m=new Tt(this.shelfGeometry,v);m.renderOrder=u?80:50;let d=new ei;d.add(m),this.shelfGroup.add(d);let M={group:d,mesh:m,canvas:f,ctx:p,texture:g,item:h,index:c,relativeIndex:c-this.shelfCenterSmooth,active:u,isCenter:u,selected:u,floatMix:0,fxPulse:u?.4:0,dofBlur:0,dofBucket:-1,drawKey:""};this.shelfCards.push(M),this.drawShelfCard(M);}this.shelfRenderedStart=o;}}installPointerHandlers(){this.canvas&&(this.canvas.addEventListener("pointerdown",this.handlePointerDown),this.canvas.addEventListener("pointermove",this.handlePointerMove),this.canvas.addEventListener("pointerup",this.handlePointerUp),this.canvas.addEventListener("pointercancel",this.handlePointerUp),this.canvas.addEventListener("pointerleave",this.handlePointerLeave),this.canvas.addEventListener("dblclick",this.handleDoubleClick),this.canvas.addEventListener("wheel",this.handleWheel,{passive:false}),this.canvas.style.cursor="grab",this.canvas.style.touchAction="none");}removePointerHandlers(){this.canvas&&(this.canvas.removeEventListener("pointerdown",this.handlePointerDown),this.canvas.removeEventListener("pointermove",this.handlePointerMove),this.canvas.removeEventListener("pointerup",this.handlePointerUp),this.canvas.removeEventListener("pointercancel",this.handlePointerUp),this.canvas.removeEventListener("pointerleave",this.handlePointerLeave),this.canvas.removeEventListener("dblclick",this.handleDoubleClick),this.canvas.removeEventListener("wheel",this.handleWheel),this.canvas.style.cursor="",this.canvas.style.touchAction="");}rebuildSongState(){this.palette=zo(this.songInfo.title,this.songInfo.artist),this.lyrics=Vc(this.songInfo.lyrics,this.songInfo.title,this.songInfo.artist),this.activeLyricIndex=-99,this.currentText="",this.currentProgress=0,this.lineAge=0,this.lyricTextureKey="",this.ripples.forEach(e=>{e.x=0,e.y=0,e.age=-10,e.str=0;}),this.lastRippleAt=-10,this.lastSectionRippleAt=-10,this.lastBassRising=false,this.loadCover();}triggerRipple(e,t){if(!this.ripples.length)return;let i=this.rippleRegions[Math.floor(xt(e)*this.rippleRegions.length)%this.rippleRegions.length],s=(xt(e*1.71+4.2)-.5)*.7,r=(xt(e*2.37+8.6)-.5)*.7,o=this.ripples[this.rippleIdx];o.x=i.x+s,o.y=i.y+r,o.age=0,o.str=t,this.rippleIdx=(this.rippleIdx+1)%Rs;}updateRipples(e,t){if(!this.rippleData||!this.rippleTexture||!this.uniforms)return;let i=Math.max(this.smoothBass,this.beatPulse*.9,this.sectionClimax*.55),s=Xc({bassDrive:i,climax:this.sectionClimax,elapsed:this.elapsed,lastRippleAt:this.lastRippleAt,wasBassRising:this.lastBassRising});if(this.lastBassRising=s.nextBassRising,t&&s.shouldTrigger){this.lastRippleAt=this.elapsed;let a=this.sectionClimax>.42?3:2;for(let l=0;l<a;l+=1){let c=this.elapsed*11.7+l*19.3+this.rippleIdx*3.1,h=.65+i*1.35+this.sectionClimax*.72+xt(c*4.8)*.24;this.triggerRipple(c,h);}}let r=Math.max(.22,.64-this.sectionClimax*.36);if(t&&this.sectionClimax>.46&&this.elapsed-this.lastSectionRippleAt>r){this.lastSectionRippleAt=this.elapsed;let a=this.sectionClimax>.72?2:1;for(let l=0;l<a;l+=1)this.triggerRipple(this.elapsed*7.9+this.rippleIdx*13.1+l*17.7,.82+this.sectionClimax*1.22+this.sectionBloom*.34);}let o=0;for(let a=0;a<Rs;a+=1){let l=this.ripples[a];l.str>.005&&(l.age+=e,l.age>2&&(l.age=-10,l.str=0));let c=a*4;this.rippleData[c]=l.x,this.rippleData[c+1]=l.y,this.rippleData[c+2]=l.age,this.rippleData[c+3]=l.str,l.str>.005&&(o+=1);}this.rippleTexture.needsUpdate=true,this.uniforms.uRippleCount.value=o;}loadCover(){let e=Sa(this.settings.coverResolution),t=em(this.palette,this.songInfo.title,this.songInfo.artist,e);if(!this.songInfo.cover){this.applyCoverCanvas(t,false);return}let i=new Image;i.crossOrigin="anonymous",i.decoding="async",i.onload=()=>this.applyCoverCanvas(tm(i,Sa(this.settings.coverResolution)),true),i.onerror=()=>this.applyCoverCanvas(t,false),i.src=this.songInfo.cover;}applyCoverCanvas(e,t){if(!(!this.uniforms||!this.coverTexture||!this.previousCoverTexture||!this.edgeTexture)){if(this.coverTexture.image){let i=document.createElement("canvas"),s=this.coverTexture.image;i.width=s.width||256,i.height=s.height||256,i.getContext("2d")?.drawImage(s,0,0,i.width,i.height),this.previousCoverTexture.image=i,this.previousCoverTexture.needsUpdate=true;}this.coverTexture.image=e,this.coverTexture.needsUpdate=true,this.edgeTexture.image=im(e),this.edgeTexture.needsUpdate=true,this.uniforms.uHasCover.value=t?1:.72,this.uniforms.uHasDepth.value=1,this.uniforms.uColorMixT.value=1,this.uniforms.uBurstAmt.value=Math.max(this.uniforms.uBurstAmt.value,.34);}}pickShelfCardAt(e,t){if(!this.canvas||!this.camera||!this.shelfGroup?.visible||!this.shelfCards.length)return null;let i=this.canvas.getBoundingClientRect();if(i.width<=0||i.height<=0)return null;this.shelfActionNdc.set((e-i.left)/i.width*2-1,-((t-i.top)/i.height*2-1)),this.shelfActionRay.setFromCamera(this.shelfActionNdc,this.camera);let s=this.shelfCards.filter(l=>l.group.visible&&l.mesh.visible).map(l=>l.mesh),[r]=this.shelfActionRay.intersectObjects(s,false);if(!r)return null;let o=this.shelfCards.find(l=>l.mesh===r.object);if(!o)return null;let a=false;if(o.item.shelfType==="playlist"&&r.uv){let l=o.canvas.width,c=o.canvas.height,h=18,u=c-h*2-8,f=h+u+32,p=c-h-78,g=r.uv.x*l,v=(1-r.uv.y)*c,m=r.uv.y*c,d=M=>M>=p-8&&M<=p+46;a=g>=f+142&&g<=f+270&&(d(v)||d(m));}return {card:o,detail:a}}triggerShelfCardAction(e,t){if(!e.isCenter)return this.setShelfCenterTarget(e.index,true),true;if(!this.hostActions)return  false;let i=e.item;if(e.selected=true,e.fxPulse=Math.max(e.fxPulse,.95),e.drawKey="",this.drawShelfCard(e),i.shelfType==="playlist"&&i.playlistId){let r={id:i.playlistId,title:i.title},o=t?this.hostActions.openPlaylistDetail:this.hostActions.playPlaylist;return o?(Promise.resolve(o(r)).catch(()=>{}),true):false}let s=typeof i.queueIndex=="number"?i.queueIndex:e.index;return this.hostActions.playQueueIndex&&Number.isFinite(s)?(Promise.resolve(this.hostActions.playQueueIndex(s)).catch(()=>{}),true):false}resetParticleRotationTarget(e){let t=e&&this.coverGroup?this.coverGroup.rotation.x:0,i=e&&this.coverGroup?this.coverGroup.rotation.y:0;this.rotationReturn.active=e,this.rotationReturn.velocityX=0,this.rotationReturn.velocityY=0,this.gestureRotation.x=t,this.gestureRotation.y=i,this.particleSpin.vx=0,this.particleSpin.vy=0,this.pendingDrag.dirty=false,this.pendingDrag.dx=0,this.pendingDrag.dy=0,this.pendingDrag.elapsed=0,!e&&this.coverGroup&&(this.coverGroup.rotation.set(0,0,0),this.lyricMesh?.rotation.set(0,0,0),this.lyricShadow?.rotation.set(0,0,0),this.lyricGlow?.rotation.set(0,0,0),this.lyricSun?.rotation.set(0,0,0),this.lyricSparks?.rotation.set(0,0,0),this.lyricStarRiver?.rotation.set(0,0,0));}clampParticleSpinVelocity(e){return Number.isFinite(e)?Math.max(-Kc,Math.min(Kc,e)):0}applyParticleSpinDrag(e,t,i){this.rotationReturn.active=false;let s=t*$0,r=e*J0;this.gestureRotation.x+=s,this.gestureRotation.y+=r,i>0&&(this.particleSpin.vx=this.clampParticleSpinVelocity(s/i*.46),this.particleSpin.vy=this.clampParticleSpinVelocity(r/i*.46));}flushPointerDragFrame(){if(!this.pendingDrag.dirty)return;let e=Math.max(1/120,Math.min(.08,this.pendingDrag.elapsed||1/60));this.applyParticleSpinDrag(this.pendingDrag.dx,this.pendingDrag.dy,e),this.pendingDrag.dirty=false,this.pendingDrag.dx=0,this.pendingDrag.dy=0,this.pendingDrag.elapsed=0;}rebaseParticleRotationAxis(e){let t=Math.PI*10;if(Math.abs(this.gestureRotation[e])<t)return;let i=Math.round(this.gestureRotation[e]/(Math.PI*2))*Math.PI*2;this.gestureRotation[e]-=i,this.coverGroup&&(this.coverGroup.rotation[e]-=i);}tickGestureRotation(e){if(this.rotationReturn.active){let s=-this.gestureRotation.x*64-this.rotationReturn.velocityX*14,r=-this.gestureRotation.y*64-this.rotationReturn.velocityY*14;this.rotationReturn.velocityX+=s*e,this.rotationReturn.velocityY+=r*e,this.gestureRotation.x+=this.rotationReturn.velocityX*e,this.gestureRotation.y+=this.rotationReturn.velocityY*e,Math.abs(this.gestureRotation.x)<8e-4&&Math.abs(this.gestureRotation.y)<8e-4&&Math.abs(this.rotationReturn.velocityX)<.002&&Math.abs(this.rotationReturn.velocityY)<.002&&(this.gestureRotation.x=0,this.gestureRotation.y=0,this.rotationReturn.velocityX=0,this.rotationReturn.velocityY=0,(!this.coverGroup||Math.abs(this.coverGroup.rotation.x)<.012&&Math.abs(this.coverGroup.rotation.y)<.012)&&(this.coverGroup&&(this.coverGroup.rotation.x=0,this.coverGroup.rotation.y=0),this.rotationReturn.active=false));return}(Math.abs(this.particleSpin.vx)>1e-4||Math.abs(this.particleSpin.vy)>1e-4)&&(this.gestureRotation.x+=this.particleSpin.vx*e,this.gestureRotation.y+=this.particleSpin.vy*e,this.rebaseParticleRotationAxis("x"),this.rebaseParticleRotationAxis("y")),this.particleSpin.vx*=Math.pow(this.particleSpin.damping,e*60),this.particleSpin.vy*=Math.pow(this.particleSpin.damping,e*60),Math.abs(this.particleSpin.vx)<.01&&(this.particleSpin.vx=0),Math.abs(this.particleSpin.vy)<.01&&(this.particleSpin.vy=0);}queueParticlePointerFrame(e,t){this.canvas&&(this.particlePointerFrame.clientX=e,this.particlePointerFrame.clientY=t,this.particlePointerFrame.dirty=true);}particleLocalPointFromNdc(e,t,i){if(!this.camera)return  false;if(this.particlePointerNdc.set(e,t),this.particlePointerRay.setFromCamera(this.particlePointerNdc,this.camera),this.particles){if(this.particles.updateMatrixWorld(true),this.particles.getWorldPosition(this.particlePointerPlanePoint),this.particles.getWorldQuaternion(this.particlePointerQuat),this.particlePointerPlaneNormal.set(0,0,1).applyQuaternion(this.particlePointerQuat).normalize(),Math.abs(this.particlePointerPlaneNormal.dot(this.particlePointerRay.ray.direction))<.16)return  false;if(this.particlePointerPlane.setFromNormalAndCoplanarPoint(this.particlePointerPlaneNormal,this.particlePointerPlanePoint),this.particlePointerRay.ray.intersectPlane(this.particlePointerPlane,this.particlePointerWorldHit))return i.copy(this.particlePointerWorldHit),this.particles.worldToLocal(i),Number.isFinite(i.x)&&Number.isFinite(i.y)&&Math.abs(i.x)<8.5&&Math.abs(i.y)<8.5}return this.particlePointerPlaneNormal.set(0,0,1),this.particlePointerPlane.set(this.particlePointerPlaneNormal,0),this.particlePointerRay.ray.intersectPlane(this.particlePointerPlane,this.particlePointerWorldHit)?(i.copy(this.particlePointerWorldHit),Number.isFinite(i.x)&&Number.isFinite(i.y)&&Math.abs(i.x)<8.5&&Math.abs(i.y)<8.5):false}updateParticlePointerFrame(){if(!this.particlePointerFrame.dirty||(this.particlePointerFrame.dirty=false,!this.canvas))return;let e=this.canvas.getBoundingClientRect();!e.width||!e.height||(this.particlePointerFrame.ndcX=(this.particlePointerFrame.clientX-e.left)/e.width*2-1,this.particlePointerFrame.ndcY=-((this.particlePointerFrame.clientY-e.top)/e.height*2-1),this.particleLocalPointFromNdc(this.particlePointerFrame.ndcX,this.particlePointerFrame.ndcY,this.particlePointerLocalHit)?(this.mouseWorld.x=this.particlePointerLocalHit.x,this.mouseWorld.y=this.particlePointerLocalHit.y,this.mouseActive=true):(this.mouseWorld.set(-999,-999,0),this.mouseActive=false));}updateLyricState(){let e=Hc(this.lyrics,this.currentTime),t=e.activeIndex,i=e.line?.text||"",s=e.progress;if(t<0){let r=this.lyrics[0],o=!!(this.songInfo.title||this.songInfo.artist),a=r?.text||this.songInfo.title||"Mineradio";t=-2,i=o&&!a.includes("\u534A\u5C4F")?a:"Mineradio",s=this.lyrics[0]?.time?Ke(this.currentTime/Math.max(.8,this.lyrics[0].time)):.18;}if(i.includes("\u534A\u5C4F")&&(i="Mineradio"),t!==this.activeLyricIndex||i!==this.currentText){this.activeLyricIndex=t,this.currentText=i,this.currentProgress=s,this.lineAge=0,this.lyricTextureKey="";return}this.currentProgress+=(s-this.currentProgress)*.24;}updateCameraDynamics(e,t){let i=Ke(e),s=Ke(t),r=Ke(i*.62+s*.38),o=.18,l=.42+Vo((r-o)/Math.max(.18,1-o))*.56+Ke((s-.22)/.5)*.12;i>.48&&s>.46&&(l=Math.max(l,.92)),l=Math.max(.34,Math.min(1.08,l)),this.cameraDynamicsScale+=(l-this.cameraDynamicsScale)*(l>this.cameraDynamicsScale?.045:.022);}triggerCameraBeat(e,t){if(!this.settings.cinema)return;let i=e.rhythm,s=i.section,r=Ke(Math.max(i.beat.strength,i.pulse,t,e.bassChange)),o=Ke(Math.max(i.beat.confidence,i.onset.energy,i.onset.bass)),a=Ke(r*.54+o*.18+s.climax*.28+s.bloom*.12),l=s.climax>.62?.255:.36;if(this.elapsed-this.lastCameraBeatAt<l&&a<.78||a<.38&&r<.58)return;this.lastCameraBeatAt=this.elapsed;let c=Ke(Math.max(i.bass,e.bassLevel)),h=Ke(Math.max(i.mid,e.midLevel)),u=Ke(Math.max(i.treble,e.trebleLevel)),f=Ke(c*.72+h*.24+r*.2),p=Math.max(.18,Math.min(1.18,this.cameraDynamicsScale*(.92+a*.12+f*.08))),g=Math.abs(Math.floor((this.currentTime||this.elapsed)*2.7))%4,v=g===0?"downbeat":g===1?"push":g===2?"drop":"rebound",m=Math.max(.08,Math.min(.68,.15+r*.34+o*.06+f*.13+u*.04));m*=p;let d=(.07+f*.19+r*.045)*(.76+p*.28),M=(.002+h*.01+s.bloom*.004)*(.82+p*.2),b=35e-5+h*.0018,E=(8e-4+u*.004)*(.78+p*.24);v==="downbeat"?(m*=1.1,d*=1.18,M*=.72):v==="push"?(m*=.84,d*=.88,M*=.62,b*=1.15):v==="drop"?(m*=.96,d*=.72,M*=1.22):(m*=.74,d*=.62,M*=.78);let A=Math.sin((this.currentTime||this.elapsed)*2.399963+u*1.4-c*1.2)>=0?1:-1,T=Math.min(.9,m);this.cameraPunch=Math.max(this.cameraPunch,T),this.cameraRadiusKick=Math.max(this.cameraRadiusKick,T*d),this.cameraPhiKick+=((v==="drop"?1:-1)*T*M-this.cameraPhiKick)*.7,this.cameraThetaKick+=(A*T*b-this.cameraThetaKick)*.7,this.cameraRollKick+=(A*T*E-this.cameraRollKick)*.72;}updateMotion(e,t,i){let s=e.rhythm,r=s.section,o=Ke(Math.max(e.energy,s.energy,r.energy*.88,r.climax*.62)),a=Ke(Math.max(e.midLevel,s.bands.vocal*.82)*.5+Math.max(e.trebleLevel,s.treble)*.22+e.volume*.12+r.bloom*.36+r.climax*.18),l=i?Math.max(r.bloom,Vo((o*.42+a*.58-.24)/.68)):0;this.sunEnergy+=(l-this.sunEnergy)*(l>this.sunEnergy?.075:.034);let c=i?Ke(r.climax*1.42+r.bloom*.34+Math.max(0,r.dynamics-.58)*.44):0;this.sectionClimax+=(c-this.sectionClimax)*(c>this.sectionClimax?.18:.058),this.sectionDynamics+=((i?Math.max(0,Math.min(1.18,r.dynamics||0)):0)-this.sectionDynamics)*.1,this.sectionBloom+=((i?Ke(r.bloom):0)-this.sectionBloom)*(r.bloom>this.sectionBloom?.13:.045);let h=Math.max(Ke(e.bassChange),Ke(e.volumeChange)*.72,s.onset.bass,s.onset.energy*.72);this.updateCameraDynamics(o,Math.max(s.bass,e.bassLevel));let u=r.climax*.38+r.bloom*.22;u>this.beatGlow&&(this.beatGlow=Math.min(1.16,u)),(s.beat.hit||e.beatDetected||h>.34)&&this.elapsed-this.lastBeatAt>.1&&(this.lastBeatAt=this.elapsed,this.beatGlow=Math.max(this.beatGlow,.76+s.bass*.22+s.beat.strength*.26+r.climax*.22+h*.16),this.triggerCameraBeat(e,h)),this.beatGlow*=Math.pow(.18,t),this.stageShaderClimax=Oo({portrait:this.height>this.width*1.08,dynamics:this.sectionDynamics,climax:this.sectionClimax,bloom:this.sectionBloom,beatGlow:this.beatGlow}).shaderClimax;}updateUniforms(e,t,i){if(!this.uniforms||!this.renderer)return;if(this.uniforms.uTime.value=this.elapsed,this.syncRendererQuality(),this.syncVisualPreset(),this.syncBackground(),this.syncCoverResolutionGeometry(),!t)this.smoothBass*=Math.pow(.91,i*60),this.smoothMid*=Math.pow(.91,i*60),this.smoothTreble*=Math.pow(.91,i*60),this.smoothEnergy*=Math.pow(.91,i*60),this.beatPulse*=Math.pow(.82,i*60);else {let l=e.rhythm,c=l.section,h=Ke(l.bass),u=Ke(l.mid),f=Ke(l.treble),p=Ke(l.energy),g=Ke(c.climax),v=Ke(c.bloom),m=Math.max(.18,c.dynamics||.82),d=l.beat.hit?Math.max(l.pulse,.54+l.beat.strength*.32+g*.1):Math.max(l.pulse,g*.12);d>this.beatPulse+.05&&(this.beatPulse=Math.min(.86,d)),this.beatPulse*=Math.pow(.36,i);let M=(E,A,T,P)=>{let B=A>E?T:P;return E+(A-E)*B},b=.92+Math.min(1.18,m)*.16;this.smoothBass=M(this.smoothBass,Math.min(1,(h*1.05+this.beatPulse*.2+g*.09)*b),.34,.085),this.smoothMid=M(this.smoothMid,Math.min(.84,(u*1.08+this.beatPulse*.08+v*.08+g*.04)*(.94+g*.14)),.22,.07),this.smoothTreble=M(this.smoothTreble,Math.min(.78,(f*1.12+this.beatPulse*.06+v*.09)*(.94+g*.12)),.22,.065),this.smoothEnergy=M(this.smoothEnergy,Math.min(.94,p*1.02+this.beatPulse*.24+g*.18+v*.08),.2,.07);}this.uniforms.uBass.value=this.smoothBass,this.uniforms.uMid.value=this.smoothMid,this.uniforms.uTreble.value=this.smoothTreble,this.uniforms.uBeat.value=this.beatPulse,this.uniforms.uIntensity.value+=(this.settings.intensity-this.uniforms.uIntensity.value)*.08,this.uniforms.uSpread.value+=(this.settings.coverSpread-this.uniforms.uSpread.value)*.1,this.uniforms.uDepth.value+=(this.settings.depth-this.uniforms.uDepth.value)*.08,this.uniforms.uPointScale.value+=(this.settings.pointScale-this.uniforms.uPointScale.value)*.08,this.uniforms.uCoverRes.value+=(this.settings.coverResolution-this.uniforms.uCoverRes.value)*.1,this.uniforms.uSpeed.value+=(this.settings.speed-this.uniforms.uSpeed.value)*.08,this.uniforms.uTwist.value+=(this.settings.twist-this.uniforms.uTwist.value)*.08,this.uniforms.uColorBoost.value+=(this.settings.colorBoost-this.uniforms.uColorBoost.value)*.08,this.uniforms.uScatter.value+=(this.settings.scatter-this.uniforms.uScatter.value)*.1,this.uniforms.uBgFade.value+=(this.settings.bgFade-this.uniforms.uBgFade.value)*.08,this.uniforms.uVinylSpin.value=this.elapsed*(t?.72:.24);let s=this.settings.visualTintMode==="custom"?this.settings.visualTintColor:this.palette.secondary;this.uniforms.uTintColor.value.copy(hi(s,"#9db8cf",.18)),this.uniforms.uTintStrength.value+=((this.settings.visualTintMode==="custom"?.52:.18)-this.uniforms.uTintStrength.value)*.08;let r=this.settings.bloom?this.settings.bloomStrength:0;this.uniforms.uBloomStrength.value+=(r-this.uniforms.uBloomStrength.value)*.1,this.uniforms.uEdgeEnabled.value=this.settings.edge?1:0,this.bloomParticles&&(this.bloomParticles.visible=this.settings.bloom&&this.uniforms.uBloomStrength.value>.01);let o=e.rhythm.section,a=Math.max(this.sectionClimax,o.climax*.86);this.uniforms.uEnergy.value=Math.max(this.smoothEnergy,this.beatPulse*.3,a*.58,this.sectionBloom*.3),this.uniforms.uBurstAmt.value=Math.max(this.uniforms.uBurstAmt.value*.91,a*.64+this.sectionBloom*.18),this.uniforms.uClimax.value+=(this.stageShaderClimax-this.uniforms.uClimax.value)*.24,this.uniforms.uAlpha.value+=((t?.98:.86)-this.uniforms.uAlpha.value)*.08,this.uniforms.uMouseXY.value.set(this.mouseWorld.x,this.mouseWorld.y),this.uniforms.uMouseActive.value=this.mouseActive?1:0,this.uniforms.uPixel.value=this.renderer.getPixelRatio();}syncVisualPreset(){if(!this.uniforms||!this.camera)return;let e=this.settings.preset;if(this.uniforms.uPreset.value=Ho(e),e===this.previousPreset)return;this.previousPreset=e,this.uniforms.uBurstAmt.value=Math.max(this.uniforms.uBurstAmt.value,e==="wallpaper"?.05:.15),this.uniforms.uScatter.value=Math.max(this.uniforms.uScatter.value,this.settings.scatter+(e==="wallpaper"?.008:e==="vinyl"?.024:.12));let t=e==="orbit"?7:e==="void"?8:e==="vinyl"?6.5:e==="wallpaper"?9.4:e==="tunnel"?6.2:6.6;this.camera.position.z+=(t-this.camera.position.z)*.55,this.gestureRotation.x*=.82,this.gestureRotation.y*=.82,this.triggerRipple(this.elapsed*13.7+Ho(e)*19.1,.62);}syncRendererQuality(){if(!this.renderer)return;let e=Math.min(window.devicePixelRatio||1,eh(this.settings.performanceQuality));if(Math.abs(this.renderer.getPixelRatio()-e)>.01&&(this.renderer.setPixelRatio(e),this.renderer.setSize(this.width,this.height,false)),this.uniforms){let t=this.settings.performanceQuality==="eco"?.74:this.settings.performanceQuality==="balanced"?.88:this.settings.performanceQuality==="ultra"?1.08:1;this.uniforms.uParticleDim.value+=(t-this.uniforms.uParticleDim.value)*.08;}}syncBackground(){if(!this.renderer)return;let e=this.settings.backgroundColorMode==="custom"?this.settings.backgroundColor:this.palette.background,{r:t,g:i,b:s}=Cs(e||"#000000"),r=new Oe(t/255,i/255,s/255);this.renderer.setClearColor(r,this.settings.backgroundOpacity);}syncCoverResolutionGeometry(){let e=th(this.settings.coverResolution);if(e!==this.coverGrid&&this.particles&&this.bloomParticles){let i=this.coverGeometry;this.coverGrid=e,this.coverGeometry=ih(e),this.particles.geometry=this.coverGeometry,this.bloomParticles.geometry=this.coverGeometry,i?.dispose();}let t=Sa(this.settings.coverResolution);t!==this.coverTextureSize&&(this.coverTextureSize=t,this.loadCover());}updateStageTransform(e){if(!this.stageGroup||!this.coverGroup||!this.lyricMesh||!this.lyricGlow)return;if(this.cameraPunch*=Math.pow(this.settings.cinema?.08:.04,e),this.cameraThetaKick*=Math.pow(.05,e),this.cameraPhiKick*=Math.pow(.05,e),this.cameraRadiusKick*=Math.pow(.05,e),this.cameraRollKick*=Math.pow(.05,e),this.camera){let u=this.settings.cinema?this.settings.cinemaShake:0,f=this.settings.shelfCameraMode==="dynamic"?1:0,p=u*(this.beatGlow*.028+this.sectionClimax*.02),g=Math.sin(this.elapsed*.52)*.03*f+Math.sin(this.elapsed*9.1)*p+this.cameraThetaKick*u*28,v=.02+Math.cos(this.elapsed*.43)*.02*f+Math.cos(this.elapsed*8.4)*p*.55+this.cameraPhiKick*u*24,m=6.6-this.sectionClimax*.1*f-this.cameraRadiusKick*u*1.18,d=Math.max(.055,.09+this.cameraPunch*.12),M=Math.max(.055,.07+this.cameraPunch*.12);this.camera.position.x+=(g-this.camera.position.x)*d,this.camera.position.y+=(v-this.camera.position.y)*d,this.camera.position.z+=(m-this.camera.position.z)*M,this.camera.lookAt(0,0,0),this.camera.rotation.z+=this.cameraRollKick*u;let E=42-Math.max(this.cameraPunch*.54,this.cameraRadiusKick*.16)*u*2.35,A=E<this.camera.fov?.24:.12;this.camera.fov+=(E-this.camera.fov)*A,this.camera.updateProjectionMatrix();}let t=this.rotationReturn.active?.22:.055;this.coverGroup.rotation.y+=(this.gestureRotation.y-this.coverGroup.rotation.y)*t,this.coverGroup.rotation.x+=(this.gestureRotation.x-this.coverGroup.rotation.x)*t,this.coverGroup.rotation.z=Math.sin(this.elapsed*.12)*.012;let i=this.height>this.width*1.08,s=Oo({portrait:i,dynamics:this.sectionDynamics,climax:this.sectionClimax,bloom:this.sectionBloom,beatGlow:this.beatGlow});this.stageShaderClimax=s.shaderClimax,this.coverGroup.scale.setScalar(s.coverScale),this.coverGroup.position.set(0,s.coverY,s.coverZ);let r=(i?0:.02)+this.settings.lyricOffsetX,a=(i?-0.1:.02)+this.settings.lyricOffsetY+Math.sin(this.elapsed*.55)*.05+Math.sin(this.elapsed*1.35)*.014,l=Math.max(.14,.42+this.settings.lyricOffsetZ*.42+Math.cos(this.elapsed*.48)*.035+s.lyricZOffset*.26);this.lyricCoverLocalPosition.set(r,a,l),this.coverGroup.localToWorld(this.lyricCoverWorldPosition.copy(this.lyricCoverLocalPosition)),this.lyricStagePosition.copy(this.lyricCoverWorldPosition),this.stageGroup.worldToLocal(this.lyricStagePosition),this.coverGroup.getWorldQuaternion(this.lyricCoverWorldQuaternion),this.lyricMesh.position.copy(this.lyricStagePosition),this.lyricShadow?.position.set(this.lyricStagePosition.x,this.lyricStagePosition.y-.03,this.lyricStagePosition.z-.035),this.lyricGlow.position.set(this.lyricStagePosition.x,this.lyricStagePosition.y,this.lyricStagePosition.z-.075),this.lyricSun?.position.set(this.lyricStagePosition.x,this.lyricStagePosition.y+.02,this.lyricStagePosition.z-.16),this.lyricSparks?.position.set(this.lyricStagePosition.x,this.lyricStagePosition.y,this.lyricStagePosition.z+.1),this.lyricStarRiver?.position.set(this.lyricStagePosition.x,this.lyricStagePosition.y+.18+Math.sin(this.elapsed*.44)*.035+Math.sin(this.elapsed*.91+1.7)*.018,this.lyricStagePosition.z+Math.cos(this.elapsed*.31)*.06),this.lyricTiltQuaternion.setFromEuler(new ti(ws.degToRad(this.settings.lyricTiltX),ws.degToRad(this.settings.lyricTiltY),0,"XYZ"));let c=this.lyricCoverWorldQuaternion.clone().multiply(this.lyricTiltQuaternion);this.lyricMesh.quaternion.copy(c),this.lyricShadow?.quaternion.copy(c),this.lyricGlow.quaternion.copy(c),this.lyricSun?.quaternion.copy(c),this.lyricSparks?.quaternion.copy(c),this.lyricStarRiver?.quaternion.copy(c),this.lyricStarRiver&&(this.lyricStarRiver.rotation.z+=Math.sin(this.elapsed*.22)*.012);let h=s.lyricScale*this.settings.lyricScale;this.lyricMesh.scale.setScalar(h),this.lyricShadow?.scale.set(h*1.03,h*1.12,1),this.lyricGlow.scale.setScalar(h*1.08),this.lyricSun?.scale.set(h*1.05,h*.92,1),this.lyricSparks?.scale.setScalar(h),this.lyricStarRiver?.scale.setScalar(h),this.updateShelfTransform();}updateShelfTransform(){if(!this.shelfGroup)return;this.shelfAllItems.length&&(this.shelfCenterTarget=this.clampShelfCenter(this.shelfCenterTarget),this.shelfCenterSmooth+=(this.shelfCenterTarget-this.shelfCenterSmooth)*.16,Math.abs(this.shelfCenterSmooth-this.shelfCenterTarget)<.001&&(this.shelfCenterSmooth=this.shelfCenterTarget)),this.ensureShelfCards();let e=this.shelfCards.length>0,t=this.settings.shelf!=="off"&&e;if(this.shelfGroup.visible=t,!t)return;let i=this.height>this.width*1.08,s=!i&&this.width<980,r=this.settings.shelf,o=this.settings.shelfCameraMode==="dynamic",a=this.settings.shelfPresence==="auto"&&!this.mouseActive?.42:1,l=this.settings.shelfOpacity*a,c=(i?1.56:s?2.48:3.18)+this.settings.shelfOffsetX,h=this.settings.shelfOffsetY,u=i?.018:.04,f=i?.52:.68,p=(i?.78:.86)+this.settings.shelfOffsetZ,g=i?.118:.17,v=i?.38:.82,m=(i?.7:s?.86:1)*this.settings.shelfSize,d=(i?.12:.28)+ws.degToRad(this.settings.shelfAngleY),M=i?.022:.042,b=i?.92:s?1.22:1.55,E=(i?-2.46:-2.2)+this.settings.shelfOffsetY,A=(i?.84:1)+this.settings.shelfOffsetZ,T=(i?.72:s?.86:1)*this.settings.shelfSize,P=o?Math.sin(this.elapsed*.8)*.025+this.beatGlow*.03:0,B=r==="side"?(this.coverGroup?.rotation.x||0)*.075:0,S=r==="side"?(this.coverGroup?.rotation.y||0)*.075:0;this.shelfGroup.position.set(r==="stage"?this.settings.shelfOffsetX*.1:0,r==="stage"?Math.sin(this.elapsed*.3)*.04:0,0),this.shelfGroup.rotation.x+=(B-this.shelfGroup.rotation.x)*.075,this.shelfGroup.rotation.y+=(S-this.shelfGroup.rotation.y)*.075,this.shelfGroup.rotation.z+=(0-this.shelfGroup.rotation.z)*.075,this.shelfCards.forEach(y=>{y.relativeIndex=y.index-this.shelfCenterSmooth;let I=y.relativeIndex,N=Math.abs(I),V=y.mesh.material;y.mesh.renderOrder=60+Math.round((ko+1-Math.min(N,ko+1))*10);let q=Math.max(0,Math.min(1,(N-.45)/3.2)),F=Math.round(q*5);y.dofBucket!==F&&(y.dofBucket=F,y.dofBlur=q,y.drawKey="");let W=N<.5;if(y.isCenter!==W&&(y.isCenter=W,y.drawKey=""),y.selected=W,y.fxPulse=Math.max(y.fxPulse*Math.pow(.46,1/60),W?P:0),this.drawShelfCard(y),r==="stage"){let $=this.settings.shelfOffsetX+I*b,G=W?A:A-Math.min(2,N)*.55,ee=(W?1.2:Math.max(.45,1-N*.22))*(1+y.fxPulse*.06)*T;y.group.position.set($,E+Math.cos(this.elapsed*.42+I)*.025*Number(o),G),y.group.rotation.set(.1-N*.04,-I*.22,0),y.group.scale.setScalar(ee);let te=W?1:Math.max(.18,1-N*.32);V.opacity+=(Math.min(1,te+y.fxPulse*.1)*l-V.opacity)*.14,V.color.setScalar(1);}else {let G=o?a*(.5+.5*Math.sin(this.elapsed*1.22+y.index*.74)):0,ee=W?1:0;y.floatMix+=(ee-y.floatMix)*(ee>y.floatMix?.2:.13),!ee&&y.floatMix<.004&&(y.floatMix=0);let te=y.floatMix,ye=c+N*u+0*v,Fe=h-I*f+0*(I<0?-0.18:.18),qe=p-N*g-0*.2;ye-=te*(i?.065:.145),Fe+=te*(i?.075:.105),qe+=te*.22,Fe+=Math.sin(this.elapsed*.92+y.index*.64)*.052*a*Math.max(.2,1-N*.16),qe+=Math.cos(this.elapsed*.78+y.index*.52)*.03*a*Math.max(0,1-N*.16);let Qe=(W?1.12:Math.max(.55,1.04-N*.14))*(1+y.fxPulse*.056+G*.026+te*.075)*m;y.group.position.set(ye,Fe,qe),y.group.rotation.set(-I*M,d+0*.16,0),y.group.scale.setScalar(Qe);let je=W?1:Math.max(.22,1-N*.3);V.opacity+=(Math.min(1,je*l+y.fxPulse*.1+G*.035)-V.opacity)*.14,V.color.setScalar(.96+te*.04);}});}updateLyricTexture(){if(!this.lyricTexture||!this.lyricShadowTexture||!this.lyricGlowTexture||!this.lyricMesh||!this.lyricGlow)return;let e=this.currentText||this.songInfo.title||"Mineradio",t=Math.round(Math.min(this.lineAge,Jc)*20),i=[e,Math.round(this.currentProgress*100),t,this.settings.lyricColorMode,this.settings.lyricColor,this.settings.lyricHighlightMode,this.settings.lyricHighlightColor,this.settings.lyricGlowLinked,this.settings.lyricGlowColor,this.settings.lyricFont,this.settings.lyricLetterSpacing,this.settings.lyricLineHeight,this.settings.lyricWeight].join("|");if(i===this.lyricTextureKey)return;this.lyricTextureKey=i;let{textCanvas:s,shadowCanvas:r,glowCanvas:o,aspect:a}=this.makeLyricCanvases(e,this.currentProgress);this.lyricTexture.image=s,this.lyricTexture.needsUpdate=true,this.lyricShadowTexture.image=r,this.lyricShadowTexture.needsUpdate=true,this.lyricGlowTexture.image=o,this.lyricGlowTexture.needsUpdate=true;let l=this.height>this.width*1.08?5:5.35,c=l/a;this.lyricMesh.geometry.dispose(),this.lyricMesh.geometry=new Zt(l,c,1,1),this.lyricShadow&&(this.lyricShadow.geometry.dispose(),this.lyricShadow.geometry=new Zt(l*1.05,c*1.22,1,1)),this.lyricGlow.geometry.dispose(),this.lyricGlow.geometry=new Zt(l*1.08,c*1.2,1,1),this.lyricSun&&(this.lyricSun.geometry.dispose(),this.lyricSun.geometry=new Zt(l*1.18,Math.max(c*1.85,1.05),1,1)),this.rebuildLyricParticleLayout(l,c);}rebuildLyricParticleLayout(e,t){if(!this.lyricSparks||!this.lyricSparkBasePositions)return;let i=this.lyricSparks.geometry.getAttribute("position"),s=i.array,r=Math.max(2.6,e*.98),o=Math.max(.55,t*1.35);for(let a=0;a<$n;a+=1){let l=xt(a*17.23+8.4)*Math.PI*2,c=Math.pow(xt(a*11.31+4.8),.64),h=xt(a*7.13+1.7),u=r*(.36+c*.24),f=o*(.28+xt(a*5.91+9.6)*.34),p=Math.cos(l)*u+(h-.5)*r*.22,g=Math.sin(l)*f+(xt(a*3.61+2.9)-.5)*o*.18,v=(xt(a*19.19+6.2)-.5)*.26;this.lyricSparkBasePositions[a*3]=p,this.lyricSparkBasePositions[a*3+1]=g,this.lyricSparkBasePositions[a*3+2]=v,s[a*3]=p,s[a*3+1]=g,s[a*3+2]=v;}i.needsUpdate=true,this.lyricStarRiverSize.width=Math.max(2.25,Math.min(7.2,e*1.12+.8)),this.lyricStarRiverSize.height=Math.max(.52,Math.min(1.35,t*1.85+.18));}updateLyricEffects(e,t,i){let s=e.rhythm,r=s.section,o=Ke(Math.max(e.bassLevel,s.bass)),a=Ke(Math.max(e.midLevel,s.mid)),l=this.settings.lyricGlow?Math.min(.85,Math.max(0,this.settings.lyricGlowStrength)):0,c=Math.min(1.7,Math.max(0,l/.5)),h=i?1:.42,u=this.settings.lyricGlowBeat&&l>0?this.beatGlow:0,f=Ke(this.sunEnergy*.94+u*.52+e.energy*.1+r.bloom*.3+r.climax*.2)*c*h,p=!!(this.currentText||this.songInfo.title);if(this.lyricShadow?.material){let g=this.lyricShadow.material,v=p?Math.min(.86,.58+f*.1+u*.045):0;g.opacity+=(v-g.opacity)*(v>g.opacity?.12:.08);}if(this.lyricGlow?.material){let g=this.lyricGlow.material,v=p&&l>0?Math.min(.92,(.075+f*.34+u*.16)*Math.min(3,c)):0;g.opacity+=(v-g.opacity)*(v>g.opacity?.095:.055),g.color.copy(hi(this.palette.glow,"#9cffdf",.36)).lerp(hi(this.palette.highlight,"#fff7d2",.42),f*.45);}if(this.lyricSun?.material){let g=this.lyricSun.material,v=p&&l>0?Math.min(.88,(Math.pow(Math.min(1.35,f),1.08)*.28+u*.2)*Math.min(2.4,c)):0;g.opacity+=(v-g.opacity)*.055,g.color.copy(hi(this.palette.highlight,"#fff7d2",.36)).lerp(new Oe(1,.84,.42),f*.55);let m=u*.24;this.lyricSun.scale.set(this.lyricSun.scale.x*(.82+f*.36+m+Math.sin(this.elapsed*1.6)*f*.018),this.lyricSun.scale.y*(.6+f*.34+m*.72+Math.cos(this.elapsed*1.25)*f*.02),1);}if(this.lyricStarRiver?.material){let v=this.lyricStarRiver.material.uniforms,m=p?Math.max(.16,Math.min(.86,.22+f*.58+u*.12)):0;v.uOpacity.value+=(m-v.uOpacity.value)*(m>v.uOpacity.value?.1:.055),v.uWidth.value+=(this.lyricStarRiverSize.width-v.uWidth.value)*Math.min(1,t*5.2),v.uHeight.value+=(this.lyricStarRiverSize.height-v.uHeight.value)*Math.min(1,t*4.6),v.uColorA.value.copy(hi(this.palette.secondary,"#9cffdf",.42)),v.uColorB.value.copy(hi(this.palette.highlight,"#fff7d2",.46)),this.lyricStarRiver.visible=v.uOpacity.value>.01||p;}if(this.lyricSparks?.material&&this.lyricSparkBasePositions){let g=this.lyricSparks.material,v=p&&l>0&&this.settings.lyricGlowParticles?Math.min(.42,(.1+f*.14+u*.1)*Math.min(1.6,c)):0;g.uniforms.uOpacity.value+=(v-g.uniforms.uOpacity.value)*(v>g.uniforms.uOpacity.value?.13:.075);let m=this.settings.lyricGlowParticles?.05+f*.016+u*.026+o*.008:.035;g.uniforms.uSize.value+=(m-g.uniforms.uSize.value)*.12,g.uniforms.uPixel.value=this.renderer?.getPixelRatio()||1,g.uniforms.uColor.value.copy(hi(this.palette.highlight,"#fff7d2",.46)).lerp(new Oe(1,.72,.36),f*.22),this.lyricSparks.visible=g.uniforms.uOpacity.value>.015;let d=this.lyricSparks.geometry.getAttribute("position"),M=d.array;this.lyricSparks.rotation.z+=(9e-4+u*7e-4)*(t*60),this.lyricSparks.rotation.x=Math.sin(this.elapsed*.12)*.012;for(let b=0;b<$n;b+=1){let E=b*12.989,A=u,T=.62+.38*Math.sin(this.elapsed*(.32+b%7*.025)+E);M[b*3]=this.lyricSparkBasePositions[b*3]+Math.sin(this.elapsed*(.18+b%5*.025)+E)*(.045+o*.03+A*.052)+Math.cos(this.elapsed*.11+E)*.018*T,M[b*3+1]=this.lyricSparkBasePositions[b*3+1]+Math.cos(this.elapsed*(.16+b%6*.024)+E)*(.042+a*.026+A*.046)+Math.sin(this.elapsed*.13+E)*.016*T,M[b*3+2]=this.lyricSparkBasePositions[b*3+2]+Math.sin(this.elapsed*(.24+b%4*.035)+E)*(.036+A*.028);}d.needsUpdate=true;}}makeLyricCanvases(e,t){let r=document.createElement("canvas"),o=document.createElement("canvas"),a=document.createElement("canvas");r.width=o.width=a.width=2048,r.height=o.height=a.height=460;let l=r.getContext("2d"),c=o.getContext("2d"),h=a.getContext("2d");if(!l||!c||!h)return {textCanvas:r,shadowCanvas:o,glowCanvas:a,aspect:2048/460};let u=Wc(e,23).filter(Boolean).slice(0,2);u.length||u.push(e||"Mineradio");let f=this.settings.lyricFont==="stone-song"?900:Math.round(this.settings.lyricWeight/50)*50,p=this.settings.lyricFont,g=190;for(;g>=86;g-=4){l.font=Jn(g,f,p);let F=this.settings.lyricLetterSpacing*g,W=Math.max(...u.map(G=>Wo(l,G,F))),$=u.length*g*1.05*this.settings.lyricLineHeight;if(W<=2048*.88&&$<=460*.82)break}let v=this.settings.lyricLetterSpacing*g,m=g*1.05*this.settings.lyricLineHeight,d=460/2-(u.length-1)*m/2+g*.02;l.font=Jn(g,f,p);let M=u.map(F=>Wo(l,F,v)),b=Math.max(...M,2048*.36),A=.18+Vo(this.lineAge/Jc)*.82,T=this.settings.lyricColorMode==="custom"?this.settings.lyricColor:this.palette.primary,P=this.settings.lyricHighlightMode==="custom"?this.settings.lyricHighlightColor:this.palette.highlight,B=this.settings.lyricGlowLinked?P:this.settings.lyricGlowColor,S=_t(T,1),y=_t(P,1),I=_t(B,1),N=()=>{let F=d+(u.length-1)*m/2+g*.2;c.clearRect(0,0,2048,460),c.save(),c.globalAlpha=A,c.filter="blur(28px)";let W=c.createRadialGradient(2048/2,F,0,2048/2,F,Math.max(b*.58,g*3.2));W.addColorStop(0,"rgba(0,0,0,0.68)"),W.addColorStop(.42,"rgba(0,0,0,0.44)"),W.addColorStop(.78,"rgba(0,0,0,0.13)"),W.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=W,c.beginPath(),c.ellipse(2048/2,F+g*.05,b*.55,g*.5,-0.02,0,Math.PI*2),c.fill(),c.filter="none",c.textAlign="center",c.textBaseline="middle",c.font=Jn(g,f,p),c.shadowColor="rgba(0,0,0,0.95)",c.shadowBlur=38,c.lineWidth=Math.max(14,g*.13),c.strokeStyle="rgba(0,0,0,0.62)",c.fillStyle="rgba(0,0,0,0.42)";for(let $=0;$<u.length;$+=1){let G=d+$*m+g*.12;Kn(c,u[$],2048/2,G,v,true),Kn(c,u[$],2048/2,G,v,false);}c.restore();},V=(F,W,$)=>{F.clearRect(0,0,2048,460),F.save(),F.textAlign="center",F.textBaseline="middle",F.font=Jn(g,f,p),F.globalAlpha=A*$,F.shadowColor=I,F.shadowBlur=W;for(let G=0;G<u.length;G+=1){let ee=d+G*m;F.lineWidth=Math.max(7,g*.06),F.strokeStyle="rgba(0,0,0,0.34)",Kn(F,u[G],2048/2,ee,v,true),F.fillStyle=S,Kn(F,u[G],2048/2,ee,v,false);}F.restore();};N(),V(h,58+this.sunEnergy*44,.82),h.save(),h.globalCompositeOperation="lighter",h.textAlign="center",h.textBaseline="middle",h.font=Jn(g,f,p),h.shadowColor=_t(this.palette.highlight,.74),h.shadowBlur=84+this.sunEnergy*52,h.globalAlpha=A*(.22+this.sunEnergy*.2),h.fillStyle=_t(this.palette.highlight,1);for(let F=0;F<u.length;F+=1)Kn(h,u[F],2048/2,d+F*m,v,false);h.restore(),V(l,26+this.sunEnergy*24,1),l.save(),l.textAlign="center",l.textBaseline="middle",l.font=Jn(g,f,p),l.globalCompositeOperation="lighter",l.shadowColor=_t(this.palette.highlight,.72),l.shadowBlur=24+this.sunEnergy*26,l.fillStyle=y;let q=2048*Ke(t);l.beginPath(),l.rect(0,0,q,460),l.clip();for(let F=0;F<u.length;F+=1)Kn(l,u[F],2048/2,d+F*m,v,false);return l.restore(),{textCanvas:r,shadowCanvas:o,glowCanvas:a,aspect:2048/460}}},qv=Xo;/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/export{Xo as MineradioPlugin,qv as default,th as mineradioCoverParticleGridForResolution};