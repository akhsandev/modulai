(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="160",Do=0,bs=1,Io=2,Yr=1,Uo=2,an=3,_n=0,At=1,mt=2,pn=0,ii=1,ys=2,Es=3,Ts=4,No=5,wn=100,Fo=101,Oo=102,As=103,ws=104,Bo=200,Go=201,zo=202,Ho=203,Ka=204,$a=205,Vo=206,Wo=207,Xo=208,jo=209,qo=210,Yo=211,Ko=212,$o=213,Zo=214,Jo=0,Qo=1,el=2,ea=3,tl=4,nl=5,il=6,al=7,ss=0,sl=1,rl=2,mn=0,ol=1,ll=2,cl=3,ul=4,hl=5,dl=6,Kr=300,si=301,ri=302,Za=303,Ja=304,oa=306,Vt=1e3,Xt=1001,Qa=1002,Et=1003,Rs=1004,ga=1005,Ct=1006,fl=1007,bi=1008,gn=1009,pl=1010,ml=1011,rs=1012,$r=1013,dn=1014,fn=1015,yi=1016,Zr=1017,Jr=1018,Ln=1020,gl=1021,jt=1023,_l=1024,vl=1025,Pn=1026,oi=1027,xl=1028,Qr=1029,Ml=1030,eo=1031,to=1033,_a=33776,va=33777,xa=33778,Ma=33779,Cs=35840,Ls=35841,Ps=35842,ks=35843,no=36196,Ds=37492,Is=37496,Us=37808,Ns=37809,Fs=37810,Os=37811,Bs=37812,Gs=37813,zs=37814,Hs=37815,Vs=37816,Ws=37817,Xs=37818,js=37819,qs=37820,Ys=37821,Sa=36492,Ks=36494,$s=36495,Sl=36283,Zs=36284,Js=36285,Qs=36286,io=3e3,kn=3001,bl=3200,yl=3201,ao=0,El=1,Bt="",tt="srgb",rn="srgb-linear",os="display-p3",la="display-p3-linear",ta="linear",$e="srgb",na="rec709",ia="p3",Nn=7680,er=519,Tl=512,Al=513,wl=514,so=515,Rl=516,Cl=517,Ll=518,Pl=519,tr=35044,nr="300 es",es=1035,sn=2e3,aa=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ir=1234567;const xi=Math.PI/180,Ei=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function ls(i,e){return(i%e+e)%e}function kl(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function Dl(i,e,t){return i!==e?(t-i)/(e-i):0}function Mi(i,e,t){return(1-t)*i+t*e}function Il(i,e,t,n){return Mi(i,e,1-Math.exp(-t*n))}function Ul(i,e=1){return e-Math.abs(ls(i,e*2)-e)}function Nl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ol(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bl(i,e){return i+Math.random()*(e-i)}function Gl(i){return i*(.5-Math.random())}function zl(i){i!==void 0&&(ir=i);let e=ir+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hl(i){return i*xi}function Vl(i){return i*Ei}function ts(i){return(i&i-1)===0&&i!==0}function Wl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xl(i,e,t,n,a){const s=Math.cos,o=Math.sin,r=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),_=o((n-e)/2);switch(a){case"XYX":i.set(r*u,l*h,l*f,r*c);break;case"YZY":i.set(l*f,r*u,l*h,r*c);break;case"ZXZ":i.set(l*h,l*f,r*u,r*c);break;case"XZX":i.set(r*u,l*_,l*m,r*c);break;case"YXY":i.set(l*m,r*u,l*_,r*c);break;case"ZYZ":i.set(l*_,l*m,r*u,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ba={DEG2RAD:xi,RAD2DEG:Ei,generateUUID:ui,clamp:Tt,euclideanModulo:ls,mapLinear:kl,inverseLerp:Dl,lerp:Mi,damp:Il,pingpong:Ul,smoothstep:Nl,smootherstep:Fl,randInt:Ol,randFloat:Bl,randFloatSpread:Gl,seededRandom:zl,degToRad:Hl,radToDeg:Vl,isPowerOfTwo:ts,ceilPowerOfTwo:Wl,floorPowerOfTwo:sa,setQuaternionFromProperEuler:Xl,normalize:St,denormalize:Jn};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*a+e.x,this.y=s*a+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,a,s,o,r,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,o,r,l,c)}set(e,t,n,a,s,o,r,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=r,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],g=a[0],p=a[3],d=a[6],E=a[1],b=a[4],T=a[7],L=a[2],A=a[5],w=a[8];return s[0]=o*g+r*E+l*L,s[3]=o*p+r*b+l*A,s[6]=o*d+r*T+l*w,s[1]=c*g+u*E+h*L,s[4]=c*p+u*b+h*A,s[7]=c*d+u*T+h*w,s[2]=f*g+m*E+_*L,s[5]=f*p+m*b+_*A,s[8]=f*d+m*T+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*r*c-n*s*u+n*r*l+a*s*c-a*o*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],h=u*o-r*c,f=r*l-u*s,m=c*s-o*l,_=t*h+n*f+a*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(a*c-u*n)*g,e[2]=(r*n-a*o)*g,e[3]=f*g,e[4]=(u*t-a*l)*g,e[5]=(a*s-r*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*r)+o+e,-a*c,a*l,-a*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(ya.makeScale(e,t)),this}rotate(e){return this.premultiply(ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Oe;function ro(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ti(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jl(){const i=Ti("canvas");return i.style.display="block",i}const ar={};function Si(i){i in ar||(ar[i]=!0,console.warn(i))}const sr=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rr=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pi={[rn]:{transfer:ta,primaries:na,toReference:i=>i,fromReference:i=>i},[tt]:{transfer:$e,primaries:na,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[la]:{transfer:ta,primaries:ia,toReference:i=>i.applyMatrix3(rr),fromReference:i=>i.applyMatrix3(sr)},[os]:{transfer:$e,primaries:ia,toReference:i=>i.convertSRGBToLinear().applyMatrix3(rr),fromReference:i=>i.applyMatrix3(sr).convertLinearToSRGB()}},ql=new Set([rn,la]),Xe={enabled:!0,_workingColorSpace:rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ql.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Pi[e].toReference,a=Pi[t].fromReference;return a(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pi[i].primaries},getTransfer:function(i){return i===Bt?ta:Pi[i].transfer}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ea(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fn;class oo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fn===void 0&&(Fn=Ti("canvas")),Fn.width=e.width,Fn.height=e.height;const n=Fn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ti("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yl=0;class lo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=ui(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?s.push(Ta(a[o].image)):s.push(Ta(a[o]))}else s=Ta(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kl=0;class wt extends ci{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Xt,a=Xt,s=Ct,o=bi,r=jt,l=gn,c=wt.DEFAULT_ANISOTROPY,u=Bt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ui(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===kn?tt:Bt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vt:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case Qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vt:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case Qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tt?kn:io}set encoding(e){Si("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kn?tt:Bt}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Kr;wt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,a=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*a+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,T=(m+1)/2,L=(d+1)/2,A=(u+f)/4,w=(h+g)/4,V=(_+p)/4;return b>T&&b>L?b<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(b),a=A/n,s=w/n):T>L?T<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(T),n=A/a,s=V/a):L<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(L),n=w/s,a=V/s),this.set(n,a,s,t),this}let E=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(h-g)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $l extends ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const a={width:e,height:t,depth:1};n.encoding!==void 0&&(Si("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kn?tt:Bt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wt(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends $l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class co extends wt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Et,this.minFilter=Et,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zl extends wt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Et,this.minFilter=Et,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,o,r){let l=n[a+0],c=n[a+1],u=n[a+2],h=n[a+3];const f=s[o+0],m=s[o+1],_=s[o+2],g=s[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(r===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==m||u!==_){let p=1-r;const d=l*f+c*m+u*_+h*g,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const L=Math.sqrt(b),A=Math.atan2(L,d*E);p=Math.sin(p*A)/L,r=Math.sin(r*A)/L}const T=r*E;if(l=l*p+f*T,c=c*p+m*T,u=u*p+_*T,h=h*p+g*T,p===1-r){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,a,s,o){const r=n[a],l=n[a+1],c=n[a+2],u=n[a+3],h=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return e[t]=r*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-r*m,e[t+2]=c*_+u*m+r*f-l*h,e[t+3]=u*_-r*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(n/2),u=r(a/2),h=r(s/2),f=l(n/2),m=l(a/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+r+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-a)*m}else if(n>r&&n>h){const m=2*Math.sqrt(1+n-r-h);this._w=(u-l)/m,this._x=.25*m,this._y=(a+o)/m,this._z=(s+c)/m}else if(r>h){const m=2*Math.sqrt(1+r-n-h);this._w=(s-c)/m,this._x=(a+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-r);this._w=(o-a)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*r+a*c-s*l,this._y=a*u+o*l+s*r-n*c,this._z=s*u+o*c+n*l-a*r,this._w=o*u-n*r-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+a*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=a,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*a+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,r),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=a*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),n*Math.sin(s),n*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(or.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(or.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*a-r*n),u=2*(r*t-s*a),h=2*(s*n-o*t);return this.x=t+l*c+o*h-r*u,this.y=n+l*u+r*c-s*h,this.z=a+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=a*l-s*r,this.y=s*o-n*l,this.z=n*r-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Aa.copy(this).projectOnVector(e),this.sub(Aa)}reflect(e){return this.sub(Aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Aa=new k,or=new Ai;class wi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(s,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const a=e.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),Di.subVectors(this.max,fi),On.subVectors(e.a,fi),Bn.subVectors(e.b,fi),Gn.subVectors(e.c,fi),on.subVectors(Bn,On),ln.subVectors(Gn,Bn),Mn.subVectors(On,Gn);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Mn.z,Mn.y,on.z,0,-on.x,ln.z,0,-ln.x,Mn.z,0,-Mn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Mn.y,Mn.x,0];return!wa(t,On,Bn,Gn,Di)||(t=[1,0,0,0,1,0,0,0,1],!wa(t,On,Bn,Gn,Di))?!1:(Ii.crossVectors(on,ln),t=[Ii.x,Ii.y,Ii.z],wa(t,On,Bn,Gn,Di))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new k,new k,new k,new k,new k,new k,new k,new k],Gt=new k,ki=new wi,On=new k,Bn=new k,Gn=new k,on=new k,ln=new k,Mn=new k,fi=new k,Di=new k,Ii=new k,Sn=new k;function wa(i,e,t,n,a){for(let s=0,o=i.length-3;s<=o;s+=3){Sn.fromArray(i,s);const r=a.x*Math.abs(Sn.x)+a.y*Math.abs(Sn.y)+a.z*Math.abs(Sn.z),l=e.dot(Sn),c=t.dot(Sn),u=n.dot(Sn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}const Jl=new wi,pi=new k,Ra=new k;class cs{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jl.setFromPoints(e).getCenter(n);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pi.subVectors(e,this.center);const t=pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(pi,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pi.copy(e.center).add(Ra)),this.expandByPoint(pi.copy(e.center).sub(Ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new k,Ca=new k,Ui=new k,cn=new k,La=new k,Ni=new k,Pa=new k;class uo{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.origin).addScaledVector(this.direction,t),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Ca.copy(e).add(t).multiplyScalar(.5),Ui.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(Ca);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ui),r=cn.dot(this.direction),l=-cn.dot(Ui),c=cn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-r,f=o*r-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,m=h*(h+o*f+2*r)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+r)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+r)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+r)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(o*s+r)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+r)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Ca).addScaledVector(Ui,f),m}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const n=Qt.dot(this.direction),a=Qt.dot(Qt)-n*n,s=e.radius*e.radius;if(a>s)return null;const o=Math.sqrt(s-a),r=n-o,l=n+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,o,r,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>a||((s>n||isNaN(n))&&(n=s),(o<a||isNaN(a))&&(a=o),h>=0?(r=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(r=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||r>a)||((r>n||n!==n)&&(n=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,n,a,s){La.subVectors(t,e),Ni.subVectors(n,e),Pa.crossVectors(La,Ni);let o=this.direction.dot(Pa),r;if(o>0){if(a)return null;r=1}else if(o<0)r=-1,o=-o;else return null;cn.subVectors(this.origin,e);const l=r*this.direction.dot(Ni.crossVectors(cn,Ni));if(l<0)return null;const c=r*this.direction.dot(La.cross(cn));if(c<0||l+c>o)return null;const u=-r*cn.dot(Pa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,a,s,o,r,l,c,u,h,f,m,_,g,p){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,o,r,l,c,u,h,f,m,_,g,p)}set(e,t,n,a,s,o,r,l,c,u,h,f,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=a,d[1]=s,d[5]=o,d[9]=r,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/zn.setFromMatrixColumn(e,0).length(),s=1/zn.setFromMatrixColumn(e,1).length(),o=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,_=r*u,g=r*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-r*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,g=c*h;t[0]=f+g*r,t[4]=_*r-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-r,t[2]=m*r-_,t[6]=g+f*r,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,g=c*h;t[0]=f-g*r,t[4]=-o*h,t[8]=_+m*r,t[1]=m+_*r,t[5]=o*u,t[9]=g-f*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=r*u,g=r*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=r*l,g=r*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-r*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=r*l,g=r*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=r*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ql,e,ec)}lookAt(e,t,n){const a=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),un.crossVectors(n,Pt),un.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),un.crossVectors(n,Pt)),un.normalize(),Fi.crossVectors(Pt,un),a[0]=un.x,a[4]=Fi.x,a[8]=Pt.x,a[1]=un.y,a[5]=Fi.y,a[9]=Pt.y,a[2]=un.z,a[6]=Fi.z,a[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],d=n[14],E=n[3],b=n[7],T=n[11],L=n[15],A=a[0],w=a[4],V=a[8],M=a[12],y=a[1],B=a[5],H=a[9],Q=a[13],C=a[2],F=a[6],z=a[10],j=a[14],W=a[3],X=a[7],q=a[11],ee=a[15];return s[0]=o*A+r*y+l*C+c*W,s[4]=o*w+r*B+l*F+c*X,s[8]=o*V+r*H+l*z+c*q,s[12]=o*M+r*Q+l*j+c*ee,s[1]=u*A+h*y+f*C+m*W,s[5]=u*w+h*B+f*F+m*X,s[9]=u*V+h*H+f*z+m*q,s[13]=u*M+h*Q+f*j+m*ee,s[2]=_*A+g*y+p*C+d*W,s[6]=_*w+g*B+p*F+d*X,s[10]=_*V+g*H+p*z+d*q,s[14]=_*M+g*Q+p*j+d*ee,s[3]=E*A+b*y+T*C+L*W,s[7]=E*w+b*B+T*F+L*X,s[11]=E*V+b*H+T*z+L*q,s[15]=E*M+b*Q+T*j+L*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15];return _*(+s*l*h-a*c*h-s*r*f+n*c*f+a*r*m-n*l*m)+g*(+t*l*m-t*c*f+s*o*f-a*o*m+a*c*u-s*l*u)+p*(+t*c*h-t*r*m-s*o*h+n*o*m+s*r*u-n*c*u)+d*(-a*r*u-t*l*h+t*r*f+a*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],E=h*p*c-g*f*c+g*l*m-r*p*m-h*l*d+r*f*d,b=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,T=u*g*c-_*h*c+_*r*m-o*g*m-u*r*d+o*h*d,L=_*h*l-u*g*l-_*r*f+o*g*f+u*r*p-o*h*p,A=t*E+n*b+a*T+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=E*w,e[1]=(g*f*s-h*p*s-g*a*m+n*p*m+h*a*d-n*f*d)*w,e[2]=(r*p*s-g*l*s+g*a*c-n*p*c-r*a*d+n*l*d)*w,e[3]=(h*l*s-r*f*s-h*a*c+n*f*c+r*a*m-n*l*m)*w,e[4]=b*w,e[5]=(u*p*s-_*f*s+_*a*m-t*p*m-u*a*d+t*f*d)*w,e[6]=(_*l*s-o*p*s-_*a*c+t*p*c+o*a*d-t*l*d)*w,e[7]=(o*f*s-u*l*s+u*a*c-t*f*c-o*a*m+t*l*m)*w,e[8]=T*w,e[9]=(_*h*s-u*g*s-_*n*m+t*g*m+u*n*d-t*h*d)*w,e[10]=(o*g*s-_*r*s+_*n*c-t*g*c-o*n*d+t*r*d)*w,e[11]=(u*r*s-o*h*s-u*n*c+t*h*c+o*n*m-t*r*m)*w,e[12]=L*w,e[13]=(u*g*a-_*h*a+_*n*f-t*g*f-u*n*p+t*h*p)*w,e[14]=(_*r*a-o*g*a-_*n*l+t*g*l+o*n*p-t*r*p)*w,e[15]=(o*h*a-u*r*a+u*n*l-t*h*l-o*n*f+t*r*f)*w,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,o=e.x,r=e.y,l=e.z,c=s*o,u=s*r;return this.set(c*o+n,c*r-a*l,c*l+a*r,0,c*r+a*l,u*r+n,u*l-a*o,0,c*l-a*r,u*l+a*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,o){return this.set(1,n,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,u=o+o,h=r+r,f=s*c,m=s*u,_=s*h,g=o*u,p=o*h,d=r*h,E=l*c,b=l*u,T=l*h,L=n.x,A=n.y,w=n.z;return a[0]=(1-(g+d))*L,a[1]=(m+T)*L,a[2]=(_-b)*L,a[3]=0,a[4]=(m-T)*A,a[5]=(1-(f+d))*A,a[6]=(p+E)*A,a[7]=0,a[8]=(_+b)*w,a[9]=(p-E)*w,a[10]=(1-(f+g))*w,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let s=zn.set(a[0],a[1],a[2]).length();const o=zn.set(a[4],a[5],a[6]).length(),r=zn.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],zt.copy(this);const c=1/s,u=1/o,h=1/r;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=u,zt.elements[5]*=u,zt.elements[6]*=u,zt.elements[8]*=h,zt.elements[9]*=h,zt.elements[10]*=h,t.setFromRotationMatrix(zt),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,a,s,o,r=sn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-a),h=(t+e)/(t-e),f=(n+a)/(n-a);let m,_;if(r===sn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(r===aa)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,s,o,r=sn){const l=this.elements,c=1/(t-e),u=1/(n-a),h=1/(o-s),f=(t+e)*c,m=(n+a)*u;let _,g;if(r===sn)_=(o+s)*h,g=-2*h;else if(r===aa)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zn=new k,zt=new at,Ql=new k(0,0,0),ec=new k(1,1,1),un=new k,Fi=new k,Pt=new k,lr=new at,cr=new Ai;class ca{constructor(e=0,t=0,n=0,a=ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],o=a[4],r=a[8],l=a[1],c=a[5],u=a[9],h=a[2],f=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(Tt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cr.setFromEuler(this),this.setFromQuaternion(cr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ca.DEFAULT_ORDER="XYZ";class us{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tc=0;const ur=new k,Hn=new Ai,en=new at,Oi=new k,mi=new k,nc=new k,ic=new Ai,hr=new k(1,0,0),dr=new k(0,1,0),fr=new k(0,0,1),ac={type:"added"},sc={type:"removed"};class ht extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new k,t=new ca,n=new Ai,a=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new at},normalMatrix:{value:new Oe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(hr,e)}rotateY(e){return this.rotateOnAxis(dr,e)}rotateZ(e){return this.rotateOnAxis(fr,e)}translateOnAxis(e,t){return ur.copy(e).applyQuaternion(this.quaternion),this.position.add(ur.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hr,e)}translateY(e){return this.translateOnAxis(dr,e)}translateZ(e){return this.translateOnAxis(fr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oi.copy(e):Oi.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(mi,Oi,this.up):en.lookAt(Oi,mi,this.up),this.quaternion.setFromRotationMatrix(en),a&&(en.extractRotation(a.matrixWorld),Hn.setFromRotationMatrix(en),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ac)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,nc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,ic,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++){const r=a[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));a.material=r}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(s(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=a,n;function o(r){const l=[];for(const c in r){const u=r[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}ht.DEFAULT_UP=new k(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new k,tn=new k,ka=new k,nn=new k,Vn=new k,Wn=new k,pr=new k,Da=new k,Ia=new k,Ua=new k;let Bi=!1;class Wt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Ht.subVectors(e,t),a.cross(Ht);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){Ht.subVectors(a,t),tn.subVectors(n,t),ka.subVectors(e,t);const o=Ht.dot(Ht),r=Ht.dot(tn),l=Ht.dot(ka),c=tn.dot(tn),u=tn.dot(ka),h=o*c-r*r;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-r*u)*f,_=(o*u-r*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,a,s,o,r,l){return Bi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bi=!0),this.getInterpolation(e,t,n,a,s,o,r,l)}static getInterpolation(e,t,n,a,s,o,r,l){return this.getBarycoord(e,t,n,a,nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,nn.x),l.addScaledVector(o,nn.y),l.addScaledVector(r,nn.z),l)}static isFrontFacing(e,t,n,a){return Ht.subVectors(n,t),tn.subVectors(e,t),Ht.cross(tn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ht.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,a,s){return Bi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Bi=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}getInterpolation(e,t,n,a,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let o,r;Vn.subVectors(a,n),Wn.subVectors(s,n),Da.subVectors(e,n);const l=Vn.dot(Da),c=Wn.dot(Da);if(l<=0&&c<=0)return t.copy(n);Ia.subVectors(e,a);const u=Vn.dot(Ia),h=Wn.dot(Ia);if(u>=0&&h<=u)return t.copy(a);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Vn,o);Ua.subVectors(e,s);const m=Vn.dot(Ua),_=Wn.dot(Ua);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return r=c/(c-_),t.copy(n).addScaledVector(Wn,r);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return pr.subVectors(s,a),r=(h-u)/(h-u+(m-_)),t.copy(a).addScaledVector(pr,r);const d=1/(p+g+f);return o=g*d,r=f*d,t.copy(n).addScaledVector(Vn,o).addScaledVector(Wn,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ho={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=Xe.workingColorSpace){if(e=ls(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Na(o,s,e+1/3),this.g=Na(o,s,e),this.b=Na(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,a),this}setStyle(e,t=tt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tt){const n=ho[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tt){return Xe.fromWorkingColorSpace(pt.copy(this),e),Math.round(Tt(pt.r*255,0,255))*65536+Math.round(Tt(pt.g*255,0,255))*256+Math.round(Tt(pt.b*255,0,255))}getHexString(e=tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,a=pt.g,s=pt.b,o=Math.max(n,a,s),r=Math.min(n,a,s);let l,c;const u=(r+o)/2;if(r===o)l=0,c=0;else{const h=o-r;switch(c=u<=.5?h/(o+r):h/(2-o-r),o){case n:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-n)/h+2;break;case s:l=(n-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=tt){Xe.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,a=pt.b;return e!==tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Gi);const n=Mi(hn.h,Gi.h,t),a=Mi(hn.s,Gi.s,t),s=Mi(hn.l,Gi.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new He;He.NAMES=ho;let rc=0;class Ri extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=ii,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=$a,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=er,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nn,this.stencilZFail=Nn,this.stencilZPass=Nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ii&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==er&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(t){const s=a(e.textures),o=a(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dt extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new k,zi=new Ge;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zi.fromBufferAttribute(this,t),zi.applyMatrix3(e),this.setXY(t,zi.x,zi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),a=St(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),a=St(a,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tr&&(e.usage=this.usage),e}}class fo extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class po extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let oc=0;const Ut=new at,Fa=new ht,Xn=new k,kt=new wi,gi=new wi,ct=new k;class $t extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ro(e)?po:fo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ut.makeRotationFromQuaternion(e),this.applyMatrix4(Ut),this}rotateX(e){return Ut.makeRotationX(e),this.applyMatrix4(Ut),this}rotateY(e){return Ut.makeRotationY(e),this.applyMatrix4(Ut),this}rotateZ(e){return Ut.makeRotationZ(e),this.applyMatrix4(Ut),this}translate(e,t,n){return Ut.makeTranslation(e,t,n),this.applyMatrix4(Ut),this}scale(e,t,n){return Ut.makeScale(e,t,n),this.applyMatrix4(Ut),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(e){const t=[];for(let n=0,a=e.length;n<a;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(ct.addVectors(kt.min,gi.min),kt.expandByPoint(ct),ct.addVectors(kt.max,gi.max),kt.expandByPoint(ct)):(kt.expandByPoint(gi.min),kt.expandByPoint(gi.max))}kt.getCenter(n);let a=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)ct.fromBufferAttribute(r,c),l&&(Xn.fromBufferAttribute(e,c),ct.add(Xn)),a=Math.max(a,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,a=t.position.array,s=t.normal.array,o=t.uv.array,r=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<r;y++)c[y]=new k,u[y]=new k;const h=new k,f=new k,m=new k,_=new Ge,g=new Ge,p=new Ge,d=new k,E=new k;function b(y,B,H){h.fromArray(a,y*3),f.fromArray(a,B*3),m.fromArray(a,H*3),_.fromArray(o,y*2),g.fromArray(o,B*2),p.fromArray(o,H*2),f.sub(h),m.sub(h),g.sub(_),p.sub(_);const Q=1/(g.x*p.y-p.x*g.y);isFinite(Q)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(Q),E.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(Q),c[y].add(d),c[B].add(d),c[H].add(d),u[y].add(E),u[B].add(E),u[H].add(E))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let y=0,B=T.length;y<B;++y){const H=T[y],Q=H.start,C=H.count;for(let F=Q,z=Q+C;F<z;F+=3)b(n[F+0],n[F+1],n[F+2])}const L=new k,A=new k,w=new k,V=new k;function M(y){w.fromArray(s,y*3),V.copy(w);const B=c[y];L.copy(B),L.sub(w.multiplyScalar(w.dot(B))).normalize(),A.crossVectors(V,B);const Q=A.dot(u[y])<0?-1:1;l[y*4]=L.x,l[y*4+1]=L.y,l[y*4+2]=L.z,l[y*4+3]=Q}for(let y=0,B=T.length;y<B;++y){const H=T[y],Q=H.start,C=H.count;for(let F=Q,z=Q+C;F<z;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const a=new k,s=new k,o=new k,r=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(a,s),u.cross(h),r.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),r.add(u),l.add(u),c.add(u),n.setXYZ(_,r.x,r.y,r.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(a,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(r,l){const c=r.array,u=r.itemSize,h=r.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){r.isInterleavedBufferAttribute?m=l[g]*r.data.stride+r.offset:m=l[g]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,n);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(a[l]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mr=new at,bn=new uo,Hi=new cs,gr=new k,jn=new k,qn=new k,Yn=new k,Oa=new k,Vi=new k,Wi=new Ge,Xi=new Ge,ji=new Ge,_r=new k,vr=new k,xr=new k,qi=new k,Yi=new k;class je extends ht{constructor(e=new $t,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(s&&r){Vi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=r[l],h=s[l];u!==0&&(Oa.fromBufferAttribute(h,e),o?Vi.addScaledVector(Oa,u):Vi.addScaledVector(Oa.sub(t),u))}t.add(Vi)}return t}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hi.copy(n.boundingSphere),Hi.applyMatrix4(s),bn.copy(e.ray).recast(e.near),!(Hi.containsPoint(bn.origin)===!1&&(bn.intersectSphere(Hi,gr)===null||bn.origin.distanceToSquared(gr)>(e.far-e.near)**2))&&(mr.copy(s).invert(),bn.copy(e.ray).applyMatrix4(mr),!(n.boundingBox!==null&&bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bn)))}_computeIntersections(e,t,n){let a;const s=this.geometry,o=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(r!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(r.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,L=b;T<L;T+=3){const A=r.getX(T),w=r.getX(T+1),V=r.getX(T+2);a=Ki(this,d,e,n,c,u,h,A,w,V),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),g=Math.min(r.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const E=r.getX(p),b=r.getX(p+1),T=r.getX(p+2);a=Ki(this,o,e,n,c,u,h,E,b,T),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=E,L=b;T<L;T+=3){const A=T,w=T+1,V=T+2;a=Ki(this,d,e,n,c,u,h,A,w,V),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const E=p,b=p+1,T=p+2;a=Ki(this,o,e,n,c,u,h,E,b,T),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function lc(i,e,t,n,a,s,o,r){let l;if(e.side===At?l=n.intersectTriangle(o,s,a,!0,r):l=n.intersectTriangle(a,s,o,e.side===_n,r),l===null)return null;Yi.copy(r),Yi.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Yi);return c<t.near||c>t.far?null:{distance:c,point:Yi.clone(),object:i}}function Ki(i,e,t,n,a,s,o,r,l,c){i.getVertexPosition(r,jn),i.getVertexPosition(l,qn),i.getVertexPosition(c,Yn);const u=lc(i,e,t,n,jn,qn,Yn,qi);if(u){a&&(Wi.fromBufferAttribute(a,r),Xi.fromBufferAttribute(a,l),ji.fromBufferAttribute(a,c),u.uv=Wt.getInterpolation(qi,jn,qn,Yn,Wi,Xi,ji,new Ge)),s&&(Wi.fromBufferAttribute(s,r),Xi.fromBufferAttribute(s,l),ji.fromBufferAttribute(s,c),u.uv1=Wt.getInterpolation(qi,jn,qn,Yn,Wi,Xi,ji,new Ge),u.uv2=u.uv1),o&&(_r.fromBufferAttribute(o,r),vr.fromBufferAttribute(o,l),xr.fromBufferAttribute(o,c),u.normal=Wt.getInterpolation(qi,jn,qn,Yn,_r,vr,xr,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:r,b:l,c,normal:new k,materialIndex:0};Wt.getNormal(jn,qn,Yn,h.normal),u.face=h}return u}class In extends $t{constructor(e=1,t=1,n=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:o};const r=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,a,o,2),_("x","z","y",1,-1,e,n,-t,a,o,3),_("x","y","z",1,-1,e,t,n,a,s,4),_("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2));function _(g,p,d,E,b,T,L,A,w,V,M){const y=T/w,B=L/V,H=T/2,Q=L/2,C=A/2,F=w+1,z=V+1;let j=0,W=0;const X=new k;for(let q=0;q<z;q++){const ee=q*B-Q;for(let te=0;te<F;te++){const G=te*y-H;X[g]=G*E,X[p]=ee*b,X[d]=C,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[d]=A>0?1:-1,u.push(X.x,X.y,X.z),h.push(te/w),h.push(1-q/V),j+=1}}for(let q=0;q<V;q++)for(let ee=0;ee<w;ee++){const te=f+ee+F*q,G=f+ee+F*(q+1),Y=f+(ee+1)+F*(q+1),oe=f+(ee+1)+F*q;l.push(te,G,oe),l.push(G,Y,oe),W+=6}r.addGroup(m,W,M),m+=W,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=li(i[t]);for(const a in n)e[a]=n[a]}return e}function cc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mo(i){return i.getRenderTarget()===null?i.outputColorSpace:Xe.workingColorSpace}const uc={clone:li,merge:bt};var hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Un extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hc,this.fragmentShader=dc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=cc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class go extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ot extends go{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ei*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,a,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xi*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*a/l,t-=o.offsetY*n/c,a*=o.width/l,n*=o.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Kn=-90,$n=1;class fc extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ot(Kn,$n,e,t);a.layers=this.layers,this.add(a);const s=new Ot(Kn,$n,e,t);s.layers=this.layers,this.add(s);const o=new Ot(Kn,$n,e,t);o.layers=this.layers,this.add(o);const r=new Ot(Kn,$n,e,t);r.layers=this.layers,this.add(r);const l=new Ot(Kn,$n,e,t);l.layers=this.layers,this.add(l);const c=new Ot(Kn,$n,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,o,r,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,r,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,s),e.setRenderTarget(n,1,a),e.render(t,o),e.setRenderTarget(n,2,a),e.render(t,r),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,a),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _o extends wt{constructor(e,t,n,a,s,o,r,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:si,super(e,t,n,a,s,o,r,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pc extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];t.encoding!==void 0&&(Si("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===kn?tt:Bt),this.texture=new _o(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new In(5,5,5),s=new Un({name:"CubemapFromEquirect",uniforms:li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:pn});s.uniforms.tEquirect.value=t;const o=new je(a,s),r=t.minFilter;return t.minFilter===bi&&(t.minFilter=Ct),new fc(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,a){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,a);e.setRenderTarget(s)}}const Ba=new k,mc=new k,gc=new Oe;class Tn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Ba.subVectors(n,t).cross(mc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ba),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gc.getNormalMatrix(e),a=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new cs,$i=new k;class hs{constructor(e=new Tn,t=new Tn,n=new Tn,a=new Tn,s=new Tn,o=new Tn){this.planes=[e,t,n,a,s,o]}set(e,t,n,a,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(a),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn){const n=this.planes,a=e.elements,s=a[0],o=a[1],r=a[2],l=a[3],c=a[4],u=a[5],h=a[6],f=a[7],m=a[8],_=a[9],g=a[10],p=a[11],d=a[12],E=a[13],b=a[14],T=a[15];if(n[0].setComponents(l-s,f-c,p-m,T-d).normalize(),n[1].setComponents(l+s,f+c,p+m,T+d).normalize(),n[2].setComponents(l+o,f+u,p+_,T+E).normalize(),n[3].setComponents(l-o,f-u,p-_,T-E).normalize(),n[4].setComponents(l-r,f-h,p-g,T-b).normalize(),t===sn)n[5].setComponents(l+r,f+h,p+g,T+b).normalize();else if(t===aa)n[5].setComponents(r,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(e){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if($i.x=a.normal.x>0?e.max.x:e.min.x,$i.y=a.normal.y>0?e.max.y:e.min.y,$i.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vo(){let i=null,e=!1,t=null,n=null;function a(s,o){t(s,o),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _c(i,e){const t=e.isWebGL2,n=new WeakMap;function a(c,u){const h=c.array,f=c.usage,m=h.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,h){const f=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(h,c),m.count===-1&&_.length===0&&i.bufferSubData(h,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const d=_[g];t?i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);if(h===void 0)n.set(c,a(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:r,update:l}}class Rt extends $t{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,o=t/2,r=Math.floor(n),l=Math.floor(a),c=r+1,u=l+1,h=e/r,f=t/l,m=[],_=[],g=[],p=[];for(let d=0;d<u;d++){const E=d*f-o;for(let b=0;b<c;b++){const T=b*h-s;_.push(T,-E,0),g.push(0,0,1),p.push(b/r),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<r;E++){const b=E+c*d,T=E+c*(d+1),L=E+1+c*(d+1),A=E+1+c*d;m.push(b,T,A),m.push(T,L,A)}this.setIndex(m),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.widthSegments,e.heightSegments)}}var vc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xc=`#ifdef USE_ALPHAHASH
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
#endif`,Mc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ec=`#ifdef USE_AOMAP
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
#endif`,Tc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ac=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,wc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pc=`#ifdef USE_IRIDESCENCE
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
#endif`,kc=`#ifdef USE_BUMPMAP
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
#endif`,Dc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Gc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zc=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Hc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vc=`vec3 transformedNormal = objectNormal;
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
#endif`,Wc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,$c=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Zc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jc=`#ifdef USE_ENVMAP
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
#endif`,Qc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,su=`#ifdef USE_GRADIENTMAP
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
}`,ru=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uu=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,hu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,du=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gu=`PhysicalMaterial material;
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
#endif`,_u=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,vu=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,xu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Su=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Eu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ru=`#if defined( USE_POINTS_UV )
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
#endif`,Cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ku=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Du=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Iu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gu=`#ifdef USE_NORMALMAP
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
#endif`,zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,th=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ih=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ah=`#ifdef USE_SKINNING
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
#endif`,sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rh=`#ifdef USE_SKINNING
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
#endif`,oh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ch=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uh=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hh=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vh=`uniform sampler2D t2D;
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
}`,xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yh=`#include <common>
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
}`,Eh=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Th=`#define DISTANCE
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
}`,Ah=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ch=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ph=`#include <common>
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
}`,kh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Dh=`#define LAMBERT
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
}`,Ih=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Uh=`#define MATCAP
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
}`,Nh=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Fh=`#define NORMAL
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
}`,Oh=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bh=`#define PHONG
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
}`,Gh=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zh=`#define STANDARD
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
}`,Hh=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Vh=`#define TOON
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
}`,Wh=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xh=`uniform float size;
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
}`,jh=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Yh=`uniform vec3 color;
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
}`,Kh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,$h=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ke={alphahash_fragment:vc,alphahash_pars_fragment:xc,alphamap_fragment:Mc,alphamap_pars_fragment:Sc,alphatest_fragment:bc,alphatest_pars_fragment:yc,aomap_fragment:Ec,aomap_pars_fragment:Tc,batching_pars_vertex:Ac,batching_vertex:wc,begin_vertex:Rc,beginnormal_vertex:Cc,bsdfs:Lc,iridescence_fragment:Pc,bumpmap_pars_fragment:kc,clipping_planes_fragment:Dc,clipping_planes_pars_fragment:Ic,clipping_planes_pars_vertex:Uc,clipping_planes_vertex:Nc,color_fragment:Fc,color_pars_fragment:Oc,color_pars_vertex:Bc,color_vertex:Gc,common:zc,cube_uv_reflection_fragment:Hc,defaultnormal_vertex:Vc,displacementmap_pars_vertex:Wc,displacementmap_vertex:Xc,emissivemap_fragment:jc,emissivemap_pars_fragment:qc,colorspace_fragment:Yc,colorspace_pars_fragment:Kc,envmap_fragment:$c,envmap_common_pars_fragment:Zc,envmap_pars_fragment:Jc,envmap_pars_vertex:Qc,envmap_physical_pars_fragment:hu,envmap_vertex:eu,fog_vertex:tu,fog_pars_vertex:nu,fog_fragment:iu,fog_pars_fragment:au,gradientmap_pars_fragment:su,lightmap_fragment:ru,lightmap_pars_fragment:ou,lights_lambert_fragment:lu,lights_lambert_pars_fragment:cu,lights_pars_begin:uu,lights_toon_fragment:du,lights_toon_pars_fragment:fu,lights_phong_fragment:pu,lights_phong_pars_fragment:mu,lights_physical_fragment:gu,lights_physical_pars_fragment:_u,lights_fragment_begin:vu,lights_fragment_maps:xu,lights_fragment_end:Mu,logdepthbuf_fragment:Su,logdepthbuf_pars_fragment:bu,logdepthbuf_pars_vertex:yu,logdepthbuf_vertex:Eu,map_fragment:Tu,map_pars_fragment:Au,map_particle_fragment:wu,map_particle_pars_fragment:Ru,metalnessmap_fragment:Cu,metalnessmap_pars_fragment:Lu,morphcolor_vertex:Pu,morphnormal_vertex:ku,morphtarget_pars_vertex:Du,morphtarget_vertex:Iu,normal_fragment_begin:Uu,normal_fragment_maps:Nu,normal_pars_fragment:Fu,normal_pars_vertex:Ou,normal_vertex:Bu,normalmap_pars_fragment:Gu,clearcoat_normal_fragment_begin:zu,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:Wu,opaque_fragment:Xu,packing:ju,premultiplied_alpha_fragment:qu,project_vertex:Yu,dithering_fragment:Ku,dithering_pars_fragment:$u,roughnessmap_fragment:Zu,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:Qu,shadowmap_pars_vertex:eh,shadowmap_vertex:th,shadowmask_pars_fragment:nh,skinbase_vertex:ih,skinning_pars_vertex:ah,skinning_vertex:sh,skinnormal_vertex:rh,specularmap_fragment:oh,specularmap_pars_fragment:lh,tonemapping_fragment:ch,tonemapping_pars_fragment:uh,transmission_fragment:hh,transmission_pars_fragment:dh,uv_pars_fragment:fh,uv_pars_vertex:ph,uv_vertex:mh,worldpos_vertex:gh,background_vert:_h,background_frag:vh,backgroundCube_vert:xh,backgroundCube_frag:Mh,cube_vert:Sh,cube_frag:bh,depth_vert:yh,depth_frag:Eh,distanceRGBA_vert:Th,distanceRGBA_frag:Ah,equirect_vert:wh,equirect_frag:Rh,linedashed_vert:Ch,linedashed_frag:Lh,meshbasic_vert:Ph,meshbasic_frag:kh,meshlambert_vert:Dh,meshlambert_frag:Ih,meshmatcap_vert:Uh,meshmatcap_frag:Nh,meshnormal_vert:Fh,meshnormal_frag:Oh,meshphong_vert:Bh,meshphong_frag:Gh,meshphysical_vert:zh,meshphysical_frag:Hh,meshtoon_vert:Vh,meshtoon_frag:Wh,points_vert:Xh,points_frag:jh,shadow_vert:qh,shadow_frag:Yh,sprite_vert:Kh,sprite_frag:$h},ie={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yt={basic:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:bt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:bt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:bt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:bt([ie.points,ie.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:bt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:bt([ie.common,ie.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:bt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:bt([ie.sprite,ie.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:bt([ie.common,ie.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:bt([ie.lights,ie.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yt.physical={uniforms:bt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Zi={r:0,b:0,g:0};function Zh(i,e,t,n,a,s,o){const r=new He(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let E=!1,b=d.isScene===!0?d.background:null;b&&b.isTexture&&(b=(d.backgroundBlurriness>0?t:e).get(b)),b===null?g(r,l):b&&b.isColor&&(g(b,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===oa)?(u===void 0&&(u=new je(new In(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:li(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(b.colorSpace)!==$e,(h!==b||f!==b.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new je(new Rt(2,2),new Un({name:"BackgroundMaterial",uniforms:li(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==$e,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){p.getRGB(Zi,mo(i)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,d,o)}return{getClearColor:function(){return r},setClearColor:function(p,d=1){r.set(p),l=d,g(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(r,l)},render:_}}function Jh(i,e,t,n){const a=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},l=p(null);let c=l,u=!1;function h(C,F,z,j,W){let X=!1;if(o){const q=g(j,z,F);c!==q&&(c=q,m(c.object)),X=d(C,j,z,W),X&&E(C,j,z,W)}else{const q=F.wireframe===!0;(c.geometry!==j.id||c.program!==z.id||c.wireframe!==q)&&(c.geometry=j.id,c.program=z.id,c.wireframe=q,X=!0)}W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,V(C,F,z,j),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function _(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function g(C,F,z){const j=z.wireframe===!0;let W=r[C.id];W===void 0&&(W={},r[C.id]=W);let X=W[F.id];X===void 0&&(X={},W[F.id]=X);let q=X[j];return q===void 0&&(q=p(f()),X[j]=q),q}function p(C){const F=[],z=[],j=[];for(let W=0;W<a;W++)F[W]=0,z[W]=0,j[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:j,object:C,attributes:{},index:null}}function d(C,F,z,j){const W=c.attributes,X=F.attributes;let q=0;const ee=z.getAttributes();for(const te in ee)if(ee[te].location>=0){const Y=W[te];let oe=X[te];if(oe===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;q++}return c.attributesNum!==q||c.index!==j}function E(C,F,z,j){const W={},X=F.attributes;let q=0;const ee=z.getAttributes();for(const te in ee)if(ee[te].location>=0){let Y=X[te];Y===void 0&&(te==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),te==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),W[te]=oe,q++}c.attributes=W,c.attributesNum=q,c.index=j}function b(){const C=c.newAttributes;for(let F=0,z=C.length;F<z;F++)C[F]=0}function T(C){L(C,0)}function L(C,F){const z=c.newAttributes,j=c.enabledAttributes,W=c.attributeDivisors;z[C]=1,j[C]===0&&(i.enableVertexAttribArray(C),j[C]=1),W[C]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,F),W[C]=F)}function A(){const C=c.newAttributes,F=c.enabledAttributes;for(let z=0,j=F.length;z<j;z++)F[z]!==C[z]&&(i.disableVertexAttribArray(z),F[z]=0)}function w(C,F,z,j,W,X,q){q===!0?i.vertexAttribIPointer(C,F,z,W,X):i.vertexAttribPointer(C,F,z,j,W,X)}function V(C,F,z,j){if(n.isWebGL2===!1&&(C.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const W=j.attributes,X=z.getAttributes(),q=F.defaultAttributeValues;for(const ee in X){const te=X[ee];if(te.location>=0){let G=W[ee];if(G===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(G=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(G=C.instanceColor)),G!==void 0){const Y=G.normalized,oe=G.itemSize,me=t.get(G);if(me===void 0)continue;const pe=me.buffer,Re=me.type,Le=me.bytesPerElement,be=n.isWebGL2===!0&&(Re===i.INT||Re===i.UNSIGNED_INT||G.gpuType===$r);if(G.isInterleavedBufferAttribute){const ze=G.data,D=ze.stride,_t=G.offset;if(ze.isInstancedInterleavedBuffer){for(let _e=0;_e<te.locationSize;_e++)L(te.location+_e,ze.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let _e=0;_e<te.locationSize;_e++)T(te.location+_e);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let _e=0;_e<te.locationSize;_e++)w(te.location+_e,oe/te.locationSize,Re,Y,D*Le,(_t+oe/te.locationSize*_e)*Le,be)}else{if(G.isInstancedBufferAttribute){for(let ze=0;ze<te.locationSize;ze++)L(te.location+ze,G.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ze=0;ze<te.locationSize;ze++)T(te.location+ze);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let ze=0;ze<te.locationSize;ze++)w(te.location+ze,oe/te.locationSize,Re,Y,oe*Le,oe/te.locationSize*ze*Le,be)}}else if(q!==void 0){const Y=q[ee];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(te.location,Y);break;case 3:i.vertexAttrib3fv(te.location,Y);break;case 4:i.vertexAttrib4fv(te.location,Y);break;default:i.vertexAttrib1fv(te.location,Y)}}}}A()}function M(){H();for(const C in r){const F=r[C];for(const z in F){const j=F[z];for(const W in j)_(j[W].object),delete j[W];delete F[z]}delete r[C]}}function y(C){if(r[C.id]===void 0)return;const F=r[C.id];for(const z in F){const j=F[z];for(const W in j)_(j[W].object),delete j[W];delete F[z]}delete r[C.id]}function B(C){for(const F in r){const z=r[F];if(z[C.id]===void 0)continue;const j=z[C.id];for(const W in j)_(j[W].object),delete j[W];delete z[C.id]}}function H(){Q(),u=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:T,disableUnusedAttributes:A}}function Qh(i,e,t,n){const a=n.isWebGL2;let s;function o(u){s=u}function r(u,h){i.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,f){if(f===0)return;let m,_;if(a)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,u,h,f),t.update(h,s,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(s,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,s,1)}}this.setMode=o,this.render=r,this.renderInstances=l,this.renderMultiDraw=c}function ed(i,e,t){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=f>0,T=o||e.has("OES_texture_float"),L=b&&T,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:b,floatFragmentTextures:T,floatVertexTextures:L,maxSamples:A}}function td(i){const e=this;let t=null,n=0,a=!1,s=!1;const o=new Tn,r=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||a;return a=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!a||_===null||_.length===0||s&&!p)s?u(null):c();else{const E=s?0:n,b=E*4;let T=d.clippingState||null;l.value=T,T=u(_,f,b,m);for(let L=0;L!==b;++L)T[L]=t[L];d.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,E=f.matrixWorldInverse;r.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let b=0,T=m;b!==g;++b,T+=4)o.copy(h[b]).applyMatrix4(E,r),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function nd(i){let e=new WeakMap;function t(o,r){return r===Za?o.mapping=si:r===Ja&&(o.mapping=ri),o}function n(o){if(o&&o.isTexture){const r=o.mapping;if(r===Za||r===Ja)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",a),t(c.texture,o.mapping)}else return null}}return o}function a(o){const r=o.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xo extends go{constructor(e=-1,t=1,n=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ti=4,Mr=[.125,.215,.35,.446,.526,.582],Rn=20,Ga=new xo,Sr=new He;let za=null,Ha=0,Va=0;const An=(1+Math.sqrt(5))/2,Zn=1/An,br=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,An,Zn),new k(0,An,-Zn),new k(Zn,0,An),new k(-Zn,0,An),new k(An,Zn,0),new k(-An,Zn,0)];class yr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ar(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ha,Va),e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:yi,format:jt,colorSpace:rn,depthBuffer:!1},a=Er(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Er(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=id(s)),this._blurMaterial=ad(s,e,t)}return a}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,a){const r=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Sr),u.toneMapping=mn,u.autoClear=!1;const m=new Dt({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),_=new je(new In,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(Sr),g=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(r.up.set(0,l[d],0),r.lookAt(c[d],0,0)):E===1?(r.up.set(0,0,l[d]),r.lookAt(0,c[d],0)):(r.up.set(0,l[d],0),r.lookAt(0,0,c[d]));const b=this._cubeSize;Ji(a,E*b,d>2?b:0,b,b),u.setRenderTarget(a),g&&u.render(_,r),u.render(e,r)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===si||e.mapping===ri;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ar()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tr());const s=a?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;Ji(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=br[(a-1)%br.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,a,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,a,"latitudinal",s),this._halfBlur(o,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new je(this._lodPlanes[a],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Rn-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Rn;p>Rn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rn}`);const d=[];let E=0;for(let w=0;w<Rn;++w){const V=w/g,M=Math.exp(-V*V/2);d.push(M),w===0?E+=M:w<p&&(E+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const T=this._sizeLods[a],L=3*T*(a>b-ti?a-b+ti:0),A=4*(this._cubeSize-T);Ji(t,L,A,3*T,2*T),l.setRenderTarget(t),l.render(h,Ga)}}function id(i){const e=[],t=[],n=[];let a=i;const s=i-ti+1+Mr.length;for(let o=0;o<s;o++){const r=Math.pow(2,a);t.push(r);let l=1/r;o>i-ti?l=Mr[o-i+ti-1]:o===0&&(l=0),n.push(l);const c=1/(r-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,d=1,E=new Float32Array(g*_*m),b=new Float32Array(p*_*m),T=new Float32Array(d*_*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,V=A>2?0:-1,M=[w,V,0,w+2/3,V,0,w+2/3,V+1,0,w,V,0,w+2/3,V+1,0,w,V+1,0];E.set(M,g*_*A),b.set(f,p*_*A);const y=[A,A,A,A,A,A];T.set(y,d*_*A)}const L=new $t;L.setAttribute("position",new Kt(E,g)),L.setAttribute("uv",new Kt(b,p)),L.setAttribute("faceIndex",new Kt(T,d)),e.push(L),a>ti&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Er(i,e,t){const n=new Dn(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function ad(i,e,t){const n=new Float32Array(Rn),a=new k(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ds(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Tr(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ds(),fragmentShader:`

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
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ar(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ds(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function ds(){return`

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
	`}function sd(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Za||l===Ja,u=l===si||l===ri;if(c||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let h=e.get(r);return t===null&&(t=new yr(i)),h=c?t.fromEquirectangular(r,h):t.fromCubemap(r,h),e.set(r,h),h.texture}else{if(e.has(r))return e.get(r).texture;{const h=r.image;if(c&&h&&h.height>0||u&&h&&a(h)){t===null&&(t=new yr(i));const f=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function a(r){let l=0;const c=6;for(let u=0;u<c;u++)r[u]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function rd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const a=t(n);return a===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function od(i,e,t,n){const a={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete a[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(h,f){return a[f.id]===!0||(f.addEventListener("dispose",o),a[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let b=0,T=E.length;b<T;b+=3){const L=E[b+0],A=E[b+1],w=E[b+2];f.push(L,A,A,w,w,L)}}else if(_!==void 0){const E=_.array;g=_.version;for(let b=0,T=E.length/3-1;b<T;b+=3){const L=b+0,A=b+1,w=b+2;f.push(L,A,A,w,w,L)}}else return;const p=new(ro(f)?po:fo)(f,1);p.version=g;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:r,update:l,getWireframeAttribute:u}}function ld(i,e,t,n){const a=n.isWebGL2;let s;function o(m){s=m}let r,l;function c(m){r=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(s,_,r,m*l),t.update(_,s,1)}function h(m,_,g){if(g===0)return;let p,d;if(a)p=i,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,_,r,m*l,g),t.update(_,s,g)}function f(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(s,_,0,r,m,0,g);let d=0;for(let E=0;E<g;E++)d+=_[E];t.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function cd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=r*(s/3);break;case i.LINES:t.lines+=r*(s/2);break;case i.LINE_STRIP:t.lines+=r*(s-1);break;case i.LINE_LOOP:t.lines+=r*s;break;case i.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function ud(i,e){return i[0]-e[0]}function hd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function dd(i,e,t){const n={},a=new Float32Array(8),s=new WeakMap,o=new ut,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let F=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const b=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],V=u.morphAttributes.color||[];let M=0;b===!0&&(M=1),T===!0&&(M=2),L===!0&&(M=3);let y=u.attributes.position.count*M,B=1;y>e.maxTextureSize&&(B=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const H=new Float32Array(y*B*4*g),Q=new co(H,y,B,g);Q.type=fn,Q.needsUpdate=!0;const C=M*4;for(let z=0;z<g;z++){const j=A[z],W=w[z],X=V[z],q=y*B*4*z;for(let ee=0;ee<j.count;ee++){const te=ee*C;b===!0&&(o.fromBufferAttribute(j,ee),H[q+te+0]=o.x,H[q+te+1]=o.y,H[q+te+2]=o.z,H[q+te+3]=0),T===!0&&(o.fromBufferAttribute(W,ee),H[q+te+4]=o.x,H[q+te+5]=o.y,H[q+te+6]=o.z,H[q+te+7]=0),L===!0&&(o.fromBufferAttribute(X,ee),H[q+te+8]=o.x,H[q+te+9]=o.y,H[q+te+10]=o.z,H[q+te+11]=X.itemSize===4?o.w:1)}}p={count:g,texture:Q,size:new Ge(y,B)},s.set(u,p),u.addEventListener("dispose",F)}let d=0;for(let b=0;b<f.length;b++)d+=f[b];const E=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];n[u.id]=g}for(let T=0;T<_;T++){const L=g[T];L[0]=T,L[1]=f[T]}g.sort(hd);for(let T=0;T<8;T++)T<_&&g[T][1]?(r[T][0]=g[T][0],r[T][1]=g[T][1]):(r[T][0]=Number.MAX_SAFE_INTEGER,r[T][1]=0);r.sort(ud);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let E=0;for(let T=0;T<8;T++){const L=r[T],A=L[0],w=L[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+T)!==p[A]&&u.setAttribute("morphTarget"+T,p[A]),d&&u.getAttribute("morphNormal"+T)!==d[A]&&u.setAttribute("morphNormal"+T,d[A]),a[T]=w,E+=w):(p&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),d&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),a[T]=0)}const b=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",a)}}return{update:l}}function fd(i,e,t,n){let a=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(a.get(h)!==c&&(e.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return h}function o(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Mo extends wt{constructor(e,t,n,a,s,o,r,l,c,u){if(u=u!==void 0?u:Pn,u!==Pn&&u!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pn&&(n=dn),n===void 0&&u===oi&&(n=Ln),super(null,a,s,o,r,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Et,this.minFilter=l!==void 0?l:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const So=new wt,bo=new Mo(1,1);bo.compareFunction=so;const yo=new co,Eo=new Zl,To=new _o,wr=[],Rr=[],Cr=new Float32Array(16),Lr=new Float32Array(9),Pr=new Float32Array(4);function hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=wr[a];if(s===void 0&&(s=new Float32Array(a),wr[a]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,i[o].toArray(s,r)}return s}function st(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ua(i,e){let t=Rr[e];t===void 0&&(t=new Int32Array(e),Rr[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function md(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2fv(this.addr,e),rt(t,e)}}function gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;i.uniform3fv(this.addr,e),rt(t,e)}}function _d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4fv(this.addr,e),rt(t,e)}}function vd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Pr.set(n),i.uniformMatrix2fv(this.addr,!1,Pr),rt(t,n)}}function xd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Lr.set(n),i.uniformMatrix3fv(this.addr,!1,Lr),rt(t,n)}}function Md(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Cr.set(n),i.uniformMatrix4fv(this.addr,!1,Cr),rt(t,n)}}function Sd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2iv(this.addr,e),rt(t,e)}}function yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3iv(this.addr,e),rt(t,e)}}function Ed(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4iv(this.addr,e),rt(t,e)}}function Td(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ad(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;i.uniform2uiv(this.addr,e),rt(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;i.uniform3uiv(this.addr,e),rt(t,e)}}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;i.uniform4uiv(this.addr,e),rt(t,e)}}function Cd(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);const s=this.type===i.SAMPLER_2D_SHADOW?bo:So;t.setTexture2D(e||s,a)}function Ld(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Eo,a)}function Pd(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||To,a)}function kd(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||yo,a)}function Dd(i){switch(i){case 5126:return pd;case 35664:return md;case 35665:return gd;case 35666:return _d;case 35674:return vd;case 35675:return xd;case 35676:return Md;case 5124:case 35670:return Sd;case 35667:case 35671:return bd;case 35668:case 35672:return yd;case 35669:case 35673:return Ed;case 5125:return Td;case 36294:return Ad;case 36295:return wd;case 36296:return Rd;case 35678:case 36198:case 36298:case 36306:case 35682:return Cd;case 35679:case 36299:case 36307:return Ld;case 35680:case 36300:case 36308:case 36293:return Pd;case 36289:case 36303:case 36311:case 36292:return kd}}function Id(i,e){i.uniform1fv(this.addr,e)}function Ud(i,e){const t=hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Nd(i,e){const t=hi(e,this.size,3);i.uniform3fv(this.addr,t)}function Fd(i,e){const t=hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Od(i,e){const t=hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bd(i,e){const t=hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gd(i,e){const t=hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zd(i,e){i.uniform1iv(this.addr,e)}function Hd(i,e){i.uniform2iv(this.addr,e)}function Vd(i,e){i.uniform3iv(this.addr,e)}function Wd(i,e){i.uniform4iv(this.addr,e)}function Xd(i,e){i.uniform1uiv(this.addr,e)}function jd(i,e){i.uniform2uiv(this.addr,e)}function qd(i,e){i.uniform3uiv(this.addr,e)}function Yd(i,e){i.uniform4uiv(this.addr,e)}function Kd(i,e,t){const n=this.cache,a=e.length,s=ua(t,a);st(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||So,s[o])}function $d(i,e,t){const n=this.cache,a=e.length,s=ua(t,a);st(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Eo,s[o])}function Zd(i,e,t){const n=this.cache,a=e.length,s=ua(t,a);st(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||To,s[o])}function Jd(i,e,t){const n=this.cache,a=e.length,s=ua(t,a);st(n,s)||(i.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||yo,s[o])}function Qd(i){switch(i){case 5126:return Id;case 35664:return Ud;case 35665:return Nd;case 35666:return Fd;case 35674:return Od;case 35675:return Bd;case 35676:return Gd;case 5124:case 35670:return zd;case 35667:case 35671:return Hd;case 35668:case 35672:return Vd;case 35669:case 35673:return Wd;case 5125:return Xd;case 36294:return jd;case 36295:return qd;case 36296:return Yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Kd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Zd;case 36289:case 36303:case 36311:case 36292:return Jd}}class ef{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dd(t.type)}}class tf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qd(t.type)}}class nf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,o=a.length;s!==o;++s){const r=a[s];r.setValue(e,t[r.id],n)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function kr(i,e){i.seq.push(e),i.map[e.id]=e}function af(i,e,t){const n=i.name,a=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),o=Wa.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){kr(t,c===void 0?new ef(r,i,e):new tf(r,i,e));break}else{let h=t.map[r];h===void 0&&(h=new nf(r),kr(t,h)),t=h}}}class Qi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);af(s,o,this)}}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,o=t.length;s!==o;++s){const r=t[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const o=e[a];o.id in t&&n.push(o)}return n}}function Dr(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sf=37297;let rf=0;function of(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function lf(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===ia&&t===na?n="LinearDisplayP3ToLinearSRGB":e===na&&t===ia&&(n="LinearSRGBToLinearDisplayP3"),i){case rn:case la:return[n,"LinearTransferOETF"];case tt:case os:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ir(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+of(i.getShaderSource(e),o)}else return a}function cf(i,e){const t=lf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uf(i,e){let t;switch(e){case ol:t="Linear";break;case ll:t="Reinhard";break;case cl:t="OptimizedCineon";break;case ul:t="ACESFilmic";break;case dl:t="AgX";break;case hl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ni).join(`
`)}function df(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ni).join(`
`)}function ff(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),o=s.name;let r=1;s.type===i.FLOAT_MAT2&&(r=2),s.type===i.FLOAT_MAT3&&(r=3),s.type===i.FLOAT_MAT4&&(r=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:r}}return t}function ni(i){return i!==""}function Ur(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nr(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(i){return i.replace(mf,_f)}const gf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _f(i,e){let t=ke[e];if(t===void 0){const n=gf.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ns(t)}const vf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fr(i){return i.replace(vf,xf)}function xf(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Or(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yr?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function Sf(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case si:case ri:e="ENVMAP_TYPE_CUBE";break;case oa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bf(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ri:e="ENVMAP_MODE_REFRACTION";break}return e}function yf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ss:e="ENVMAP_BLENDING_MULTIPLY";break;case sl:e="ENVMAP_BLENDING_MIX";break;case rl:e="ENVMAP_BLENDING_ADD";break}return e}function Ef(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tf(i,e,t,n){const a=i.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=Mf(t),c=Sf(t),u=bf(t),h=yf(t),f=Ef(t),m=t.isWebGL2?"":hf(t),_=df(t),g=ff(s),p=a.createProgram();let d,E,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ni).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ni).join(`
`),E.length>0&&(E+=`
`)):(d=[Or(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ni).join(`
`),E=[m,Or(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?ke.tonemapping_pars_fragment:"",t.toneMapping!==mn?uf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,cf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ni).join(`
`)),o=ns(o),o=Ur(o,t),o=Nr(o,t),r=ns(r),r=Ur(r,t),r=Nr(r,t),o=Fr(o),r=Fr(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===nr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const T=b+d+o,L=b+E+r,A=Dr(a,a.VERTEX_SHADER,T),w=Dr(a,a.FRAGMENT_SHADER,L);a.attachShader(p,A),a.attachShader(p,w),t.index0AttributeName!==void 0?a.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(p,0,"position"),a.linkProgram(p);function V(H){if(i.debug.checkShaderErrors){const Q=a.getProgramInfoLog(p).trim(),C=a.getShaderInfoLog(A).trim(),F=a.getShaderInfoLog(w).trim();let z=!0,j=!0;if(a.getProgramParameter(p,a.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,p,A,w);else{const W=Ir(a,A,"vertex"),X=Ir(a,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(p,a.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+W+`
`+X)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(C===""||F==="")&&(j=!1);j&&(H.diagnostics={runnable:z,programLog:Q,vertexShader:{log:C,prefix:d},fragmentShader:{log:F,prefix:E}})}a.deleteShader(A),a.deleteShader(w),M=new Qi(a,p),y=pf(a,p)}let M;this.getUniforms=function(){return M===void 0&&V(this),M};let y;this.getAttributes=function(){return y===void 0&&V(this),y};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=a.getProgramParameter(p,sf)),B},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let Af=0;class wf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rf(e),t.set(e,n)),n}}class Rf{constructor(e){this.id=Af++,this.code=e,this.usedTimes=0}}function Cf(i,e,t,n,a,s,o){const r=new us,l=new wf,c=[],u=a.isWebGL2,h=a.logarithmicDepthBuffer,f=a.vertexTextures;let m=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,y,B,H,Q){const C=H.fog,F=Q.geometry,z=M.isMeshStandardMaterial?H.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),W=j&&j.mapping===oa?j.image.height:null,X=_[M.type];M.precision!==null&&(m=a.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=q!==void 0?q.length:0;let te=0;F.morphAttributes.position!==void 0&&(te=1),F.morphAttributes.normal!==void 0&&(te=2),F.morphAttributes.color!==void 0&&(te=3);let G,Y,oe,me;if(X){const vt=Yt[X];G=vt.vertexShader,Y=vt.fragmentShader}else G=M.vertexShader,Y=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const pe=i.getRenderTarget(),Re=Q.isInstancedMesh===!0,Le=Q.isBatchedMesh===!0,be=!!M.map,ze=!!M.matcap,D=!!j,_t=!!M.aoMap,_e=!!M.lightMap,Ae=!!M.bumpMap,he=!!M.normalMap,Ze=!!M.displacementMap,De=!!M.emissiveMap,S=!!M.metalnessMap,v=!!M.roughnessMap,U=M.anisotropy>0,Z=M.clearcoat>0,$=M.iridescence>0,J=M.sheen>0,de=M.transmission>0,re=U&&!!M.anisotropyMap,ce=Z&&!!M.clearcoatMap,Me=Z&&!!M.clearcoatNormalMap,Ie=Z&&!!M.clearcoatRoughnessMap,K=$&&!!M.iridescenceMap,We=$&&!!M.iridescenceThicknessMap,Be=J&&!!M.sheenColorMap,Te=J&&!!M.sheenRoughnessMap,ge=!!M.specularMap,ue=!!M.specularColorMap,Pe=!!M.specularIntensityMap,Ve=de&&!!M.transmissionMap,Qe=de&&!!M.thicknessMap,Ne=!!M.gradientMap,ne=!!M.alphaMap,R=M.alphaTest>0,ae=!!M.alphaHash,se=!!M.extensions,ye=!!F.attributes.uv1,ve=!!F.attributes.uv2,qe=!!F.attributes.uv3;let Ye=mn;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ye=i.toneMapping),{isWebGL2:u,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Le,instancing:Re,instancingColor:Re&&Q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:rn,map:be,matcap:ze,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:W,aoMap:_t,lightMap:_e,bumpMap:Ae,normalMap:he,displacementMap:f&&Ze,emissiveMap:De,normalMapObjectSpace:he&&M.normalMapType===El,normalMapTangentSpace:he&&M.normalMapType===ao,metalnessMap:S,roughnessMap:v,anisotropy:U,anisotropyMap:re,clearcoat:Z,clearcoatMap:ce,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ie,iridescence:$,iridescenceMap:K,iridescenceThicknessMap:We,sheen:J,sheenColorMap:Be,sheenRoughnessMap:Te,specularMap:ge,specularColorMap:ue,specularIntensityMap:Pe,transmission:de,transmissionMap:Ve,thicknessMap:Qe,gradientMap:Ne,opaque:M.transparent===!1&&M.blending===ii,alphaMap:ne,alphaTest:R,alphaHash:ae,combine:M.combine,mapUv:be&&g(M.map.channel),aoMapUv:_t&&g(M.aoMap.channel),lightMapUv:_e&&g(M.lightMap.channel),bumpMapUv:Ae&&g(M.bumpMap.channel),normalMapUv:he&&g(M.normalMap.channel),displacementMapUv:Ze&&g(M.displacementMap.channel),emissiveMapUv:De&&g(M.emissiveMap.channel),metalnessMapUv:S&&g(M.metalnessMap.channel),roughnessMapUv:v&&g(M.roughnessMap.channel),anisotropyMapUv:re&&g(M.anisotropyMap.channel),clearcoatMapUv:ce&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:We&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(M.sheenRoughnessMap.channel),specularMapUv:ge&&g(M.specularMap.channel),specularColorMapUv:ue&&g(M.specularColorMap.channel),specularIntensityMapUv:Pe&&g(M.specularIntensityMap.channel),transmissionMapUv:Ve&&g(M.transmissionMap.channel),thicknessMapUv:Qe&&g(M.thicknessMap.channel),alphaMapUv:ne&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(he||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:ve,vertexUv3s:qe,pointsUvs:Q.isPoints===!0&&!!F.attributes.uv&&(be||ne),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:be&&M.map.isVideoTexture===!0&&Xe.getTransfer(M.map.colorSpace)===$e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mt,flipSided:M.side===At,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:se&&M.extensions.derivatives===!0,extensionFragDepth:se&&M.extensions.fragDepth===!0,extensionDrawBuffers:se&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)y.push(B),y.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(E(y,M),b(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){r.disableAll(),y.isWebGL2&&r.enable(0),y.supportsVertexTextures&&r.enable(1),y.instancing&&r.enable(2),y.instancingColor&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),M.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.skinning&&r.enable(4),y.morphTargets&&r.enable(5),y.morphNormals&&r.enable(6),y.morphColors&&r.enable(7),y.premultipliedAlpha&&r.enable(8),y.shadowMapEnabled&&r.enable(9),y.useLegacyLights&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function T(M){const y=_[M.type];let B;if(y){const H=Yt[y];B=uc.clone(H.uniforms)}else B=M.uniforms;return B}function L(M,y){let B;for(let H=0,Q=c.length;H<Q;H++){const C=c[H];if(C.cacheKey===y){B=C,++B.usedTimes;break}}return B===void 0&&(B=new Tf(i,y,M,s),c.push(B)),B}function A(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function V(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:L,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:V}}function Lf(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,r){i.get(s)[o]=r}function a(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:a}}function Pf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Br(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gr(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function o(h,f,m,_,g,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=p),e++,d}function r(h,f,m,_,g,p){const d=o(h,f,m,_,g,p);m.transmission>0?n.push(d):m.transparent===!0?a.push(d):t.push(d)}function l(h,f,m,_,g,p){const d=o(h,f,m,_,g,p);m.transmission>0?n.unshift(d):m.transparent===!0?a.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Pf),n.length>1&&n.sort(f||Br),a.length>1&&a.sort(f||Br)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:r,unshift:l,finish:u,sort:c}}function kf(){let i=new WeakMap;function e(n,a){const s=i.get(n);let o;return s===void 0?(o=new Gr,i.set(n,[o])):a>=s.length?(o=new Gr,s.push(o)):o=s[a],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Df(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new He};break;case"SpotLight":t={position:new k,direction:new k,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function If(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Uf=0;function Nf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ff(i,e){const t=new Df,n=If(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)a.probe.push(new k);const s=new k,o=new at,r=new at;function l(u,h){let f=0,m=0,_=0;for(let H=0;H<9;H++)a.probe[H].set(0,0,0);let g=0,p=0,d=0,E=0,b=0,T=0,L=0,A=0,w=0,V=0,M=0;u.sort(Nf);const y=h===!0?Math.PI:1;for(let H=0,Q=u.length;H<Q;H++){const C=u[H],F=C.color,z=C.intensity,j=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=F.r*z*y,m+=F.g*z*y,_+=F.b*z*y;else if(C.isLightProbe){for(let X=0;X<9;X++)a.probe[X].addScaledVector(C.sh.coefficients[X],z);M++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*y),C.castShadow){const q=C.shadow,ee=n.get(C);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,a.directionalShadow[g]=ee,a.directionalShadowMap[g]=W,a.directionalShadowMatrix[g]=C.shadow.matrix,T++}a.directional[g]=X,g++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(F).multiplyScalar(z*y),X.distance=j,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,a.spot[d]=X;const q=C.shadow;if(C.map&&(a.spotLightMap[w]=C.map,w++,q.updateMatrices(C),C.castShadow&&V++),a.spotLightMatrix[d]=q.matrix,C.castShadow){const ee=n.get(C);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,a.spotShadow[d]=ee,a.spotShadowMap[d]=W,A++}d++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),a.rectArea[E]=X,E++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity*y),X.distance=C.distance,X.decay=C.decay,C.castShadow){const q=C.shadow,ee=n.get(C);ee.shadowBias=q.bias,ee.shadowNormalBias=q.normalBias,ee.shadowRadius=q.radius,ee.shadowMapSize=q.mapSize,ee.shadowCameraNear=q.camera.near,ee.shadowCameraFar=q.camera.far,a.pointShadow[p]=ee,a.pointShadowMap[p]=W,a.pointShadowMatrix[p]=C.shadow.matrix,L++}a.point[p]=X,p++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(z*y),X.groundColor.copy(C.groundColor).multiplyScalar(z*y),a.hemi[b]=X,b++}}E>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ie.LTC_FLOAT_1,a.rectAreaLTC2=ie.LTC_FLOAT_2):(a.rectAreaLTC1=ie.LTC_HALF_1,a.rectAreaLTC2=ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ie.LTC_FLOAT_1,a.rectAreaLTC2=ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=ie.LTC_HALF_1,a.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=m,a.ambient[2]=_;const B=a.hash;(B.directionalLength!==g||B.pointLength!==p||B.spotLength!==d||B.rectAreaLength!==E||B.hemiLength!==b||B.numDirectionalShadows!==T||B.numPointShadows!==L||B.numSpotShadows!==A||B.numSpotMaps!==w||B.numLightProbes!==M)&&(a.directional.length=g,a.spot.length=d,a.rectArea.length=E,a.point.length=p,a.hemi.length=b,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=L,a.pointShadowMap.length=L,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=L,a.spotLightMatrix.length=A+w-V,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=V,a.numLightProbes=M,B.directionalLength=g,B.pointLength=p,B.spotLength=d,B.rectAreaLength=E,B.hemiLength=b,B.numDirectionalShadows=T,B.numPointShadows=L,B.numSpotShadows=A,B.numSpotMaps=w,B.numLightProbes=M,a.version=Uf++)}function c(u,h){let f=0,m=0,_=0,g=0,p=0;const d=h.matrixWorldInverse;for(let E=0,b=u.length;E<b;E++){const T=u[E];if(T.isDirectionalLight){const L=a.directional[f];L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),f++}else if(T.isSpotLight){const L=a.spot[_];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(d),_++}else if(T.isRectAreaLight){const L=a.rectArea[g];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),r.identity(),o.copy(T.matrixWorld),o.premultiply(d),r.extractRotation(o),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(r),L.halfHeight.applyMatrix4(r),g++}else if(T.isPointLight){const L=a.point[m];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){const L=a.hemi[p];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:a}}function zr(i,e){const t=new Ff(i,e),n=[],a=[];function s(){n.length=0,a.length=0}function o(h){n.push(h)}function r(h){a.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:a,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function Of(i,e){let t=new WeakMap;function n(s,o=0){const r=t.get(s);let l;return r===void 0?(l=new zr(i,e),t.set(s,[l])):o>=r.length?(l=new zr(i,e),r.push(l)):l=r[o],l}function a(){t=new WeakMap}return{get:n,dispose:a}}class Bf extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gf extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hf=`uniform sampler2D shadow_pass;
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
}`;function Vf(i,e,t){let n=new hs;const a=new Ge,s=new Ge,o=new ut,r=new Bf({depthPacking:yl}),l=new Gf,c={},u=t.maxTextureSize,h={[_n]:At,[At]:_n,[mt]:mt},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:zf,fragmentShader:Hf}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new $t;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new je(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let d=this.type;this.render=function(A,w,V){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),H=i.state;H.setBlending(pn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=d!==an&&this.type===an,C=d===an&&this.type!==an;for(let F=0,z=A.length;F<z;F++){const j=A[F],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const X=W.getFrameExtents();if(a.multiply(X),s.copy(W.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/X.x),a.x=s.x*X.x,W.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/X.y),a.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||Q===!0||C===!0){const ee=this.type!==an?{minFilter:Et,magFilter:Et}:{};W.map!==null&&W.map.dispose(),W.map=new Dn(a.x,a.y,ee),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const q=W.getViewportCount();for(let ee=0;ee<q;ee++){const te=W.getViewport(ee);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),H.viewport(o),W.updateMatrices(j,ee),n=W.getFrustum(),T(w,V,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===an&&E(W,V),W.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,B)};function E(A,w){const V=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dn(a.x,a.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,V,f,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,V,m,g,null)}function b(A,w,V,M){let y=null;const B=V.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(B!==void 0)y=B;else if(y=V.isPointLight===!0?l:r,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=y.uuid,Q=w.uuid;let C=c[H];C===void 0&&(C={},c[H]=C);let F=C[Q];F===void 0&&(F=y.clone(),C[Q]=F,w.addEventListener("dispose",L)),y=F}if(y.visible=w.visible,y.wireframe=w.wireframe,M===an?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,V.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=i.properties.get(y);H.light=V}return y}function T(A,w,V,M,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===an)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),C=A.material;if(Array.isArray(C)){const F=Q.groups;for(let z=0,j=F.length;z<j;z++){const W=F[z],X=C[W.materialIndex];if(X&&X.visible){const q=b(A,X,M,y);A.onBeforeShadow(i,A,w,V,Q,q,W),i.renderBufferDirect(V,null,Q,q,A,W),A.onAfterShadow(i,A,w,V,Q,q,W)}}}else if(C.visible){const F=b(A,C,M,y);A.onBeforeShadow(i,A,w,V,Q,F,null),i.renderBufferDirect(V,null,Q,F,A,null),A.onAfterShadow(i,A,w,V,Q,F,null)}}const H=A.children;for(let Q=0,C=H.length;Q<C;Q++)T(H[Q],w,V,M,y)}function L(A){A.target.removeEventListener("dispose",L);for(const V in c){const M=c[V],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function Wf(i,e,t){const n=t.isWebGL2;function a(){let R=!1;const ae=new ut;let se=null;const ye=new ut(0,0,0,0);return{setMask:function(ve){se!==ve&&!R&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){R=ve},setClear:function(ve,qe,Ye,ot,vt){vt===!0&&(ve*=ot,qe*=ot,Ye*=ot),ae.set(ve,qe,Ye,ot),ye.equals(ae)===!1&&(i.clearColor(ve,qe,Ye,ot),ye.copy(ae))},reset:function(){R=!1,se=null,ye.set(-1,0,0,0)}}}function s(){let R=!1,ae=null,se=null,ye=null;return{setTest:function(ve){ve?Le(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ve){ae!==ve&&!R&&(i.depthMask(ve),ae=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Jo:i.depthFunc(i.NEVER);break;case Qo:i.depthFunc(i.ALWAYS);break;case el:i.depthFunc(i.LESS);break;case ea:i.depthFunc(i.LEQUAL);break;case tl:i.depthFunc(i.EQUAL);break;case nl:i.depthFunc(i.GEQUAL);break;case il:i.depthFunc(i.GREATER);break;case al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ve}},setLocked:function(ve){R=ve},setClear:function(ve){ye!==ve&&(i.clearDepth(ve),ye=ve)},reset:function(){R=!1,ae=null,se=null,ye=null}}}function o(){let R=!1,ae=null,se=null,ye=null,ve=null,qe=null,Ye=null,ot=null,vt=null;return{setTest:function(Ke){R||(Ke?Le(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ke){ae!==Ke&&!R&&(i.stencilMask(Ke),ae=Ke)},setFunc:function(Ke,xt,qt){(se!==Ke||ye!==xt||ve!==qt)&&(i.stencilFunc(Ke,xt,qt),se=Ke,ye=xt,ve=qt)},setOp:function(Ke,xt,qt){(qe!==Ke||Ye!==xt||ot!==qt)&&(i.stencilOp(Ke,xt,qt),qe=Ke,Ye=xt,ot=qt)},setLocked:function(Ke){R=Ke},setClear:function(Ke){vt!==Ke&&(i.clearStencil(Ke),vt=Ke)},reset:function(){R=!1,ae=null,se=null,ye=null,ve=null,qe=null,Ye=null,ot=null,vt=null}}}const r=new a,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,d=!1,E=null,b=null,T=null,L=null,A=null,w=null,V=null,M=new He(0,0,0),y=0,B=!1,H=null,Q=null,C=null,F=null,z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=X>=2);let ee=null,te={};const G=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),oe=new ut().fromArray(G),me=new ut().fromArray(Y);function pe(R,ae,se,ye){const ve=new Uint8Array(4),qe=i.createTexture();i.bindTexture(R,qe),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<se;Ye++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(ae+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return qe}const Re={};Re[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(i.DEPTH_TEST),l.setFunc(ea),De(!1),S(bs),Le(i.CULL_FACE),he(pn);function Le(R){f[R]!==!0&&(i.enable(R),f[R]=!0)}function be(R){f[R]!==!1&&(i.disable(R),f[R]=!1)}function ze(R,ae){return m[R]!==ae?(i.bindFramebuffer(R,ae),m[R]=ae,n&&(R===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),R===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function D(R,ae){let se=g,ye=!1;if(R)if(se=_.get(ae),se===void 0&&(se=[],_.set(ae,se)),R.isWebGLMultipleRenderTargets){const ve=R.texture;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let qe=0,Ye=ve.length;qe<Ye;qe++)se[qe]=i.COLOR_ATTACHMENT0+qe;se.length=ve.length,ye=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,ye=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,ye=!0);ye&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function _t(R){return p!==R?(i.useProgram(R),p=R,!0):!1}const _e={[wn]:i.FUNC_ADD,[Fo]:i.FUNC_SUBTRACT,[Oo]:i.FUNC_REVERSE_SUBTRACT};if(n)_e[As]=i.MIN,_e[ws]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(_e[As]=R.MIN_EXT,_e[ws]=R.MAX_EXT)}const Ae={[Bo]:i.ZERO,[Go]:i.ONE,[zo]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[qo]:i.SRC_ALPHA_SATURATE,[Xo]:i.DST_COLOR,[Vo]:i.DST_ALPHA,[Ho]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[jo]:i.ONE_MINUS_DST_COLOR,[Wo]:i.ONE_MINUS_DST_ALPHA,[Yo]:i.CONSTANT_COLOR,[Ko]:i.ONE_MINUS_CONSTANT_COLOR,[$o]:i.CONSTANT_ALPHA,[Zo]:i.ONE_MINUS_CONSTANT_ALPHA};function he(R,ae,se,ye,ve,qe,Ye,ot,vt,Ke){if(R===pn){d===!0&&(be(i.BLEND),d=!1);return}if(d===!1&&(Le(i.BLEND),d=!0),R!==No){if(R!==E||Ke!==B){if((b!==wn||A!==wn)&&(i.blendEquation(i.FUNC_ADD),b=wn,A=wn),Ke)switch(R){case ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Es:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ts:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,L=null,w=null,V=null,M.set(0,0,0),y=0,E=R,B=Ke}return}ve=ve||ae,qe=qe||se,Ye=Ye||ye,(ae!==b||ve!==A)&&(i.blendEquationSeparate(_e[ae],_e[ve]),b=ae,A=ve),(se!==T||ye!==L||qe!==w||Ye!==V)&&(i.blendFuncSeparate(Ae[se],Ae[ye],Ae[qe],Ae[Ye]),T=se,L=ye,w=qe,V=Ye),(ot.equals(M)===!1||vt!==y)&&(i.blendColor(ot.r,ot.g,ot.b,vt),M.copy(ot),y=vt),E=R,B=!1}function Ze(R,ae){R.side===mt?be(i.CULL_FACE):Le(i.CULL_FACE);let se=R.side===At;ae&&(se=!se),De(se),R.blending===ii&&R.transparent===!1?he(pn):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),r.setMask(R.colorWrite);const ye=R.stencilWrite;c.setTest(ye),ye&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),U(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(R){H!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),H=R)}function S(R){R!==Do?(Le(i.CULL_FACE),R!==Q&&(R===bs?i.cullFace(i.BACK):R===Io?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),Q=R}function v(R){R!==C&&(W&&i.lineWidth(R),C=R)}function U(R,ae,se){R?(Le(i.POLYGON_OFFSET_FILL),(F!==ae||z!==se)&&(i.polygonOffset(ae,se),F=ae,z=se)):be(i.POLYGON_OFFSET_FILL)}function Z(R){R?Le(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function $(R){R===void 0&&(R=i.TEXTURE0+j-1),ee!==R&&(i.activeTexture(R),ee=R)}function J(R,ae,se){se===void 0&&(ee===null?se=i.TEXTURE0+j-1:se=ee);let ye=te[se];ye===void 0&&(ye={type:void 0,texture:void 0},te[se]=ye),(ye.type!==R||ye.texture!==ae)&&(ee!==se&&(i.activeTexture(se),ee=se),i.bindTexture(R,ae||Re[R]),ye.type=R,ye.texture=ae)}function de(){const R=te[ee];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function We(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(R){oe.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),oe.copy(R))}function Ve(R){me.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),me.copy(R))}function Qe(R,ae){let se=h.get(ae);se===void 0&&(se=new WeakMap,h.set(ae,se));let ye=se.get(R);ye===void 0&&(ye=i.getUniformBlockIndex(ae,R.name),se.set(R,ye))}function Ne(R,ae){const ye=h.get(ae).get(R);u.get(ae)!==ye&&(i.uniformBlockBinding(ae,ye,R.__bindingPointIndex),u.set(ae,ye))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,te={},m={},_=new WeakMap,g=[],p=null,d=!1,E=null,b=null,T=null,L=null,A=null,w=null,V=null,M=new He(0,0,0),y=0,B=!1,H=null,Q=null,C=null,F=null,z=null,oe.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:Le,disable:be,bindFramebuffer:ze,drawBuffers:D,useProgram:_t,setBlending:he,setMaterial:Ze,setFlipSided:De,setCullFace:S,setLineWidth:v,setPolygonOffset:U,setScissorTest:Z,activeTexture:$,bindTexture:J,unbindTexture:de,compressedTexImage2D:re,compressedTexImage3D:ce,texImage2D:ge,texImage3D:ue,updateUBOMapping:Qe,uniformBlockBinding:Ne,texStorage2D:Be,texStorage3D:Te,texSubImage2D:Me,texSubImage3D:Ie,compressedTexSubImage2D:K,compressedTexSubImage3D:We,scissor:Pe,viewport:Ve,reset:ne}}function Xf(i,e,t,n,a,s,o){const r=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):Ti("canvas")}function g(S,v,U,Z){let $=1;if((S.width>Z||S.height>Z)&&($=Z/Math.max(S.width,S.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const J=v?sa:Math.floor,de=J($*S.width),re=J($*S.height);h===void 0&&(h=_(de,re));const ce=U?_(de,re):h;return ce.width=de,ce.height=re,ce.getContext("2d").drawImage(S,0,0,de,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+de+"x"+re+")."),ce}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return ts(S.width)&&ts(S.height)}function d(S){return r?!1:S.wrapS!==Xt||S.wrapT!==Xt||S.minFilter!==Et&&S.minFilter!==Ct}function E(S,v){return S.generateMipmaps&&v&&S.minFilter!==Et&&S.minFilter!==Ct}function b(S){i.generateMipmap(S)}function T(S,v,U,Z,$=!1){if(r===!1)return v;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=v;if(v===i.RED&&(U===i.FLOAT&&(J=i.R32F),U===i.HALF_FLOAT&&(J=i.R16F),U===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(J=i.R8UI),U===i.UNSIGNED_SHORT&&(J=i.R16UI),U===i.UNSIGNED_INT&&(J=i.R32UI),U===i.BYTE&&(J=i.R8I),U===i.SHORT&&(J=i.R16I),U===i.INT&&(J=i.R32I)),v===i.RG&&(U===i.FLOAT&&(J=i.RG32F),U===i.HALF_FLOAT&&(J=i.RG16F),U===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RGBA){const de=$?ta:Xe.getTransfer(Z);U===i.FLOAT&&(J=i.RGBA32F),U===i.HALF_FLOAT&&(J=i.RGBA16F),U===i.UNSIGNED_BYTE&&(J=de===$e?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function L(S,v,U){return E(S,U)===!0||S.isFramebufferTexture&&S.minFilter!==Et&&S.minFilter!==Ct?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function A(S){return S===Et||S===Rs||S===ga?i.NEAREST:i.LINEAR}function w(S){const v=S.target;v.removeEventListener("dispose",w),M(v),v.isVideoTexture&&u.delete(v)}function V(S){const v=S.target;v.removeEventListener("dispose",V),B(v)}function M(S){const v=n.get(S);if(v.__webglInit===void 0)return;const U=S.source,Z=f.get(U);if(Z){const $=Z[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(S),Object.keys(Z).length===0&&f.delete(U)}n.remove(S)}function y(S){const v=n.get(S);i.deleteTexture(v.__webglTexture);const U=S.source,Z=f.get(U);delete Z[v.__cacheKey],o.memory.textures--}function B(S){const v=S.texture,U=n.get(S),Z=n.get(v);if(Z.__webglTexture!==void 0&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(U.__webglFramebuffer[$]))for(let J=0;J<U.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(U.__webglFramebuffer[$][J]);else i.deleteFramebuffer(U.__webglFramebuffer[$]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[$])}else{if(Array.isArray(U.__webglFramebuffer))for(let $=0;$<U.__webglFramebuffer.length;$++)i.deleteFramebuffer(U.__webglFramebuffer[$]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let $=0;$<U.__webglColorRenderbuffer.length;$++)U.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[$]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let $=0,J=v.length;$<J;$++){const de=n.get(v[$]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(v[$])}n.remove(v),n.remove(S)}let H=0;function Q(){H=0}function C(){const S=H;return S>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),H+=1,S}function F(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function z(S,v){const U=n.get(S);if(S.isVideoTexture&&Ze(S),S.isRenderTargetTexture===!1&&S.version>0&&U.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(U,S,v);return}}t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function j(S,v){const U=n.get(S);if(S.version>0&&U.__version!==S.version){oe(U,S,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function W(S,v){const U=n.get(S);if(S.version>0&&U.__version!==S.version){oe(U,S,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function X(S,v){const U=n.get(S);if(S.version>0&&U.__version!==S.version){me(U,S,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const q={[Vt]:i.REPEAT,[Xt]:i.CLAMP_TO_EDGE,[Qa]:i.MIRRORED_REPEAT},ee={[Et]:i.NEAREST,[Rs]:i.NEAREST_MIPMAP_NEAREST,[ga]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[fl]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},te={[Tl]:i.NEVER,[Pl]:i.ALWAYS,[Al]:i.LESS,[so]:i.LEQUAL,[wl]:i.EQUAL,[Ll]:i.GEQUAL,[Rl]:i.GREATER,[Cl]:i.NOTEQUAL};function G(S,v,U){if(U?(i.texParameteri(S,i.TEXTURE_WRAP_S,q[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,q[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,q[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ee[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ee[v.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Xt||v.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,A(v.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==Et&&v.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,te[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Et||v.minFilter!==ga&&v.minFilter!==bi||v.type===fn&&e.has("OES_texture_float_linear")===!1||r===!1&&v.type===yi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(S,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,a.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function Y(S,v){let U=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",w));const Z=v.source;let $=f.get(Z);$===void 0&&($={},f.set(Z,$));const J=F(v);if(J!==S.__cacheKey){$[J]===void 0&&($[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[J].usedTimes++;const de=$[S.__cacheKey];de!==void 0&&($[S.__cacheKey].usedTimes--,de.usedTimes===0&&y(v)),S.__cacheKey=J,S.__webglTexture=$[J].texture}return U}function oe(S,v,U){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const $=Y(S,v),J=v.source;t.bindTexture(Z,S.__webglTexture,i.TEXTURE0+U);const de=n.get(J);if(J.version!==de.__version||$===!0){t.activeTexture(i.TEXTURE0+U);const re=Xe.getPrimaries(Xe.workingColorSpace),ce=v.colorSpace===Bt?null:Xe.getPrimaries(v.colorSpace),Me=v.colorSpace===Bt||re===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ie=d(v)&&p(v.image)===!1;let K=g(v.image,Ie,!1,a.maxTextureSize);K=De(v,K);const We=p(K)||r,Be=s.convert(v.format,v.colorSpace);let Te=s.convert(v.type),ge=T(v.internalFormat,Be,Te,v.colorSpace,v.isVideoTexture);G(Z,v,We);let ue;const Pe=v.mipmaps,Ve=r&&v.isVideoTexture!==!0&&ge!==no,Qe=de.__version===void 0||$===!0,Ne=L(v,K,We);if(v.isDepthTexture)ge=i.DEPTH_COMPONENT,r?v.type===fn?ge=i.DEPTH_COMPONENT32F:v.type===dn?ge=i.DEPTH_COMPONENT24:v.type===Ln?ge=i.DEPTH24_STENCIL8:ge=i.DEPTH_COMPONENT16:v.type===fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Pn&&ge===i.DEPTH_COMPONENT&&v.type!==rs&&v.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=dn,Te=s.convert(v.type)),v.format===oi&&ge===i.DEPTH_COMPONENT&&(ge=i.DEPTH_STENCIL,v.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Ln,Te=s.convert(v.type))),Qe&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,ge,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,ge,K.width,K.height,0,Be,Te,null));else if(v.isDataTexture)if(Pe.length>0&&We){Ve&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ne,ge,Pe[0].width,Pe[0].height);for(let ne=0,R=Pe.length;ne<R;ne++)ue=Pe[ne],Ve?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,Be,Te,ue.data):t.texImage2D(i.TEXTURE_2D,ne,ge,ue.width,ue.height,0,Be,Te,ue.data);v.generateMipmaps=!1}else Ve?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ne,ge,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,K.width,K.height,Be,Te,K.data)):t.texImage2D(i.TEXTURE_2D,0,ge,K.width,K.height,0,Be,Te,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ve&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ge,Pe[0].width,Pe[0].height,K.depth);for(let ne=0,R=Pe.length;ne<R;ne++)ue=Pe[ne],v.format!==jt?Be!==null?Ve?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,K.depth,Be,ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,ge,ue.width,ue.height,K.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,K.depth,Be,Te,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,ge,ue.width,ue.height,K.depth,0,Be,Te,ue.data)}else{Ve&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ne,ge,Pe[0].width,Pe[0].height);for(let ne=0,R=Pe.length;ne<R;ne++)ue=Pe[ne],v.format!==jt?Be!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,Be,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ue.width,ue.height,Be,Te,ue.data):t.texImage2D(i.TEXTURE_2D,ne,ge,ue.width,ue.height,0,Be,Te,ue.data)}else if(v.isDataArrayTexture)Ve?(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ge,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Be,Te,K.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,K.width,K.height,K.depth,0,Be,Te,K.data);else if(v.isData3DTexture)Ve?(Qe&&t.texStorage3D(i.TEXTURE_3D,Ne,ge,K.width,K.height,K.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Be,Te,K.data)):t.texImage3D(i.TEXTURE_3D,0,ge,K.width,K.height,K.depth,0,Be,Te,K.data);else if(v.isFramebufferTexture){if(Qe)if(Ve)t.texStorage2D(i.TEXTURE_2D,Ne,ge,K.width,K.height);else{let ne=K.width,R=K.height;for(let ae=0;ae<Ne;ae++)t.texImage2D(i.TEXTURE_2D,ae,ge,ne,R,0,Be,Te,null),ne>>=1,R>>=1}}else if(Pe.length>0&&We){Ve&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ne,ge,Pe[0].width,Pe[0].height);for(let ne=0,R=Pe.length;ne<R;ne++)ue=Pe[ne],Ve?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,Be,Te,ue):t.texImage2D(i.TEXTURE_2D,ne,ge,Be,Te,ue);v.generateMipmaps=!1}else Ve?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ne,ge,K.width,K.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Be,Te,K)):t.texImage2D(i.TEXTURE_2D,0,ge,Be,Te,K);E(v,We)&&b(Z),de.__version=J.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function me(S,v,U){if(v.image.length!==6)return;const Z=Y(S,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+U);const J=n.get($);if($.version!==J.__version||Z===!0){t.activeTexture(i.TEXTURE0+U);const de=Xe.getPrimaries(Xe.workingColorSpace),re=v.colorSpace===Bt?null:Xe.getPrimaries(v.colorSpace),ce=v.colorSpace===Bt||de===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,Ie=v.image[0]&&v.image[0].isDataTexture,K=[];for(let ne=0;ne<6;ne++)!Me&&!Ie?K[ne]=g(v.image[ne],!1,!0,a.maxCubemapSize):K[ne]=Ie?v.image[ne].image:v.image[ne],K[ne]=De(v,K[ne]);const We=K[0],Be=p(We)||r,Te=s.convert(v.format,v.colorSpace),ge=s.convert(v.type),ue=T(v.internalFormat,Te,ge,v.colorSpace),Pe=r&&v.isVideoTexture!==!0,Ve=J.__version===void 0||Z===!0;let Qe=L(v,We,Be);G(i.TEXTURE_CUBE_MAP,v,Be);let Ne;if(Me){Pe&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,ue,We.width,We.height);for(let ne=0;ne<6;ne++){Ne=K[ne].mipmaps;for(let R=0;R<Ne.length;R++){const ae=Ne[R];v.format!==jt?Te!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,ae.width,ae.height,Te,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,0,0,ae.width,ae.height,Te,ge,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R,ue,ae.width,ae.height,0,Te,ge,ae.data)}}}else{Ne=v.mipmaps,Pe&&Ve&&(Ne.length>0&&Qe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Qe,ue,K[0].width,K[0].height));for(let ne=0;ne<6;ne++)if(Ie){Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,K[ne].width,K[ne].height,Te,ge,K[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,K[ne].width,K[ne].height,0,Te,ge,K[ne].data);for(let R=0;R<Ne.length;R++){const se=Ne[R].image[ne].image;Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,se.width,se.height,Te,ge,se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,se.width,se.height,0,Te,ge,se.data)}}else{Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Te,ge,K[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ue,Te,ge,K[ne]);for(let R=0;R<Ne.length;R++){const ae=Ne[R];Pe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,0,0,Te,ge,ae.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,R+1,ue,Te,ge,ae.image[ne])}}}E(v,Be)&&b(i.TEXTURE_CUBE_MAP),J.__version=$.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function pe(S,v,U,Z,$,J){const de=s.convert(U.format,U.colorSpace),re=s.convert(U.type),ce=T(U.internalFormat,de,re,U.colorSpace);if(!n.get(v).__hasExternalTextures){const Ie=Math.max(1,v.width>>J),K=Math.max(1,v.height>>J);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,J,ce,Ie,K,v.depth,0,de,re,null):t.texImage2D($,J,ce,Ie,K,0,de,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,$,n.get(U).__webglTexture,0,Ae(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,$,n.get(U).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(S,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let Z=r===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||he(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===fn?Z=i.DEPTH_COMPONENT32F:$.type===dn&&(Z=i.DEPTH_COMPONENT24));const J=Ae(v);he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,Z,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,Z,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){const Z=Ae(v);U&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<Z.length;$++){const J=Z[$],de=s.convert(J.format,J.colorSpace),re=s.convert(J.type),ce=T(J.internalFormat,de,re,J.colorSpace),Me=Ae(v);U&&he(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ce,v.width,v.height):he(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const Z=n.get(v.depthTexture).__webglTexture,$=Ae(v);if(v.depthTexture.format===Pn)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===oi)he(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(S){const v=n.get(S),U=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Le(v.__webglFramebuffer,S)}else if(U){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=i.createRenderbuffer(),Re(v.__webglDepthbuffer[Z],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Re(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(S,v,U){const Z=n.get(S);v!==void 0&&pe(Z.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&be(S)}function D(S){const v=S.texture,U=n.get(S),Z=n.get(v);S.addEventListener("dispose",V),S.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++);const $=S.isWebGLCubeRenderTarget===!0,J=S.isWebGLMultipleRenderTargets===!0,de=p(S)||r;if($){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(r&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let ce=0;ce<v.mipmaps.length;ce++)U.__webglFramebuffer[re][ce]=i.createFramebuffer()}else U.__webglFramebuffer[re]=i.createFramebuffer()}else{if(r&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)U.__webglFramebuffer[re]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(J)if(a.drawBuffers){const re=S.texture;for(let ce=0,Me=re.length;ce<Me;ce++){const Ie=n.get(re[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&S.samples>0&&he(S)===!1){const re=J?v:[v];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<re.length;ce++){const Me=re[ce];U.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Ie=s.convert(Me.format,Me.colorSpace),K=s.convert(Me.type),We=T(Me.internalFormat,Ie,K,Me.colorSpace,S.isXRRenderTarget===!0),Be=Ae(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,We,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(U.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),G(i.TEXTURE_CUBE_MAP,v,de);for(let re=0;re<6;re++)if(r&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)pe(U.__webglFramebuffer[re][ce],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ce);else pe(U.__webglFramebuffer[re],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);E(v,de)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const re=S.texture;for(let ce=0,Me=re.length;ce<Me;ce++){const Ie=re[ce],K=n.get(Ie);t.bindTexture(i.TEXTURE_2D,K.__webglTexture),G(i.TEXTURE_2D,Ie,de),pe(U.__webglFramebuffer,S,Ie,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),E(Ie,de)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(r?re=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,Z.__webglTexture),G(re,v,de),r&&v.mipmaps&&v.mipmaps.length>0)for(let ce=0;ce<v.mipmaps.length;ce++)pe(U.__webglFramebuffer[ce],S,v,i.COLOR_ATTACHMENT0,re,ce);else pe(U.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,re,0);E(v,de)&&b(re),t.unbindTexture()}S.depthBuffer&&be(S)}function _t(S){const v=p(S)||r,U=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0,$=U.length;Z<$;Z++){const J=U[Z];if(E(J,v)){const de=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,re=n.get(J).__webglTexture;t.bindTexture(de,re),b(de),t.unbindTexture()}}}function _e(S){if(r&&S.samples>0&&he(S)===!1){const v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],U=S.width,Z=S.height;let $=i.COLOR_BUFFER_BIT;const J=[],de=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(S),ce=S.isWebGLMultipleRenderTargets===!0;if(ce)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){J.push(i.COLOR_ATTACHMENT0+Me),S.depthBuffer&&J.push(de);const Ie=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ie===!1&&(S.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ce&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[Me]),Ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[de]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[de])),ce){const K=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,U,Z,0,0,U,Z,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,re.__webglColorRenderbuffer[Me]);const Ie=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Ae(S){return Math.min(a.maxSamples,S.samples)}function he(S){const v=n.get(S);return r&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ze(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function De(S,v){const U=S.colorSpace,Z=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===es||U!==rn&&U!==Bt&&(Xe.getTransfer(U)===$e?r===!1?e.has("EXT_sRGB")===!0&&Z===jt?(S.format=es,S.minFilter=Ct,S.generateMipmaps=!1):v=oo.sRGBToLinear(v):(Z!==jt||$!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=C,this.resetTextureUnits=Q,this.setTexture2D=z,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=X,this.rebindTextures=ze,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=he}function jf(i,e,t){const n=t.isWebGL2;function a(s,o=Bt){let r;const l=Xe.getTransfer(o);if(s===gn)return i.UNSIGNED_BYTE;if(s===Zr)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Jr)return i.UNSIGNED_SHORT_5_5_5_1;if(s===pl)return i.BYTE;if(s===ml)return i.SHORT;if(s===rs)return i.UNSIGNED_SHORT;if(s===$r)return i.INT;if(s===dn)return i.UNSIGNED_INT;if(s===fn)return i.FLOAT;if(s===yi)return n?i.HALF_FLOAT:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===gl)return i.ALPHA;if(s===jt)return i.RGBA;if(s===_l)return i.LUMINANCE;if(s===vl)return i.LUMINANCE_ALPHA;if(s===Pn)return i.DEPTH_COMPONENT;if(s===oi)return i.DEPTH_STENCIL;if(s===es)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===xl)return i.RED;if(s===Qr)return i.RED_INTEGER;if(s===Ml)return i.RG;if(s===eo)return i.RG_INTEGER;if(s===to)return i.RGBA_INTEGER;if(s===_a||s===va||s===xa||s===Ma)if(l===$e)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cs||s===Ls||s===Ps||s===ks)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Cs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ls)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ps)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ks)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===no)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ds||s===Is)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Ds)return l===$e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Is)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Us||s===Ns||s===Fs||s===Os||s===Bs||s===Gs||s===zs||s===Hs||s===Vs||s===Ws||s===Xs||s===js||s===qs||s===Ys)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Us)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ns)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fs)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Os)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bs)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gs)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zs)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hs)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vs)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ws)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xs)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===js)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qs)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ys)return l===$e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sa||s===Ks||s===$s)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===Sa)return l===$e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ks)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$s)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sl||s===Zs||s===Js||s===Qs)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(s===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(s===Zs)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Js)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qs)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ln?n?i.UNSIGNED_INT_24_8:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:a}}class qf extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cn extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yf={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Kf extends ci{constructor(e,t){super();const n=this;let a=null,s=1,o=null,r="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,d=null;const E=[],b=[],T=new Ge;let L=null;const A=new Ot;A.layers.enable(1),A.viewport=new ut;const w=new Ot;w.layers.enable(2),w.viewport=new ut;const V=[A,w],M=new qf;M.layers.enable(1),M.layers.enable(2);let y=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Y=E[G];return Y===void 0&&(Y=new Xa,E[G]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(G){let Y=E[G];return Y===void 0&&(Y=new Xa,E[G]=Y),Y.getGripSpace()},this.getHand=function(G){let Y=E[G];return Y===void 0&&(Y=new Xa,E[G]=Y),Y.getHandSpace()};function H(G){const Y=b.indexOf(G.inputSource);if(Y===-1)return;const oe=E[Y];oe!==void 0&&(oe.update(G.inputSource,G.frame,c||o),oe.dispatchEvent({type:G.type,data:G.inputSource}))}function Q(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",Q),a.removeEventListener("inputsourceschange",C);for(let G=0;G<E.length;G++){const Y=b[G];Y!==null&&(b[G]=null,E[G].disconnect(Y))}y=null,B=null,e.setRenderTarget(p),m=null,f=null,h=null,a=null,d=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(G){if(a=G,a!==null){if(p=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",Q),a.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:a.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,t,Y),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Dn(m.framebufferWidth,m.framebufferHeight,{format:jt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Y=null,oe=null,me=null;g.depth&&(me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=g.stencil?oi:Pn,oe=g.stencil?Ln:dn);const pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(a,t),f=h.createProjectionLayer(pe),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Dn(f.textureWidth,f.textureHeight,{format:jt,type:gn,depthTexture:new Mo(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(d);Re.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),te.setContext(a),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function C(G){for(let Y=0;Y<G.removed.length;Y++){const oe=G.removed[Y],me=b.indexOf(oe);me>=0&&(b[me]=null,E[me].disconnect(oe))}for(let Y=0;Y<G.added.length;Y++){const oe=G.added[Y];let me=b.indexOf(oe);if(me===-1){for(let Re=0;Re<E.length;Re++)if(Re>=b.length){b.push(oe),me=Re;break}else if(b[Re]===null){b[Re]=oe,me=Re;break}if(me===-1)break}const pe=E[me];pe&&pe.connect(oe)}}const F=new k,z=new k;function j(G,Y,oe){F.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(oe.matrixWorld);const me=F.distanceTo(z),pe=Y.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Le=pe[14]/(pe[10]-1),be=pe[14]/(pe[10]+1),ze=(pe[9]+1)/pe[5],D=(pe[9]-1)/pe[5],_t=(pe[8]-1)/pe[0],_e=(Re[8]+1)/Re[0],Ae=Le*_t,he=Le*_e,Ze=me/(-_t+_e),De=Ze*-_t;Y.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(De),G.translateZ(Ze),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const S=Le+Ze,v=be+Ze,U=Ae-De,Z=he+(me-De),$=ze*be/v*S,J=D*be/v*S;G.projectionMatrix.makePerspective(U,Z,$,J,S,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function W(G,Y){Y===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Y.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(a===null)return;M.near=w.near=A.near=G.near,M.far=w.far=A.far=G.far,(y!==M.near||B!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,B=M.far);const Y=G.parent,oe=M.cameras;W(M,Y);for(let me=0;me<oe.length;me++)W(oe[me],Y);oe.length===2?j(M,A,w):M.projectionMatrix.copy(A.projectionMatrix),X(G,M,Y)};function X(G,Y,oe){oe===null?G.matrix.copy(Y.matrixWorld):(G.matrix.copy(oe.matrixWorld),G.matrix.invert(),G.matrix.multiply(Y.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Y.projectionMatrix),G.projectionMatrixInverse.copy(Y.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ei*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let q=null;function ee(G,Y){if(u=Y.getViewerPose(c||o),_=Y,u!==null){const oe=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let me=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,me=!0);for(let pe=0;pe<oe.length;pe++){const Re=oe[pe];let Le=null;if(m!==null)Le=m.getViewport(Re);else{const ze=h.getViewSubImage(f,Re);Le=ze.viewport,pe===0&&(e.setRenderTargetTextures(d,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(d))}let be=V[pe];be===void 0&&(be=new Ot,be.layers.enable(pe),be.viewport=new ut,V[pe]=be),be.matrix.fromArray(Re.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(Re.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(Le.x,Le.y,Le.width,Le.height),pe===0&&(M.matrix.copy(be.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),me===!0&&M.cameras.push(be)}}for(let oe=0;oe<E.length;oe++){const me=b[oe],pe=E[oe];me!==null&&pe!==void 0&&pe.update(me,Y,c||o)}q&&q(G,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),_=null}const te=new vo;te.setAnimationLoop(ee),this.setAnimationLoop=function(G){q=G},this.dispose=function(){}}}function $f(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,mo(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function a(p,d,E,b,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,T)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&r(p,d)):d.isPointsMaterial?l(p,d,E,b):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===At&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===At&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=e.get(d).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*b,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function r(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,b){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=b*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Zf(i,e,t,n){let a={},s={},o=[];const r=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,b){const T=b.program;n.uniformBlockBinding(E,T)}function c(E,b){let T=a[E.id];T===void 0&&(_(E),T=u(E),a[E.id]=T,E.addEventListener("dispose",p));const L=b.program;n.updateUBOMapping(E,L);const A=e.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){const b=h();E.__bindingPointIndex=b;const T=i.createBuffer(),L=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function h(){for(let E=0;E<r;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=a[E.id],T=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,w=T.length;A<w;A++){const V=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,y=V.length;M<y;M++){const B=V[M];if(m(B,A,M,L)===!0){const H=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let C=0;for(let F=0;F<Q.length;F++){const z=Q[F],j=g(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+C,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):(z.toArray(B.__data,C),C+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,B.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,b,T,L){const A=E.value,w=b+"_"+T;if(L[w]===void 0)return typeof A=="number"||typeof A=="boolean"?L[w]=A:L[w]=A.clone(),!0;{const V=L[w];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return L[w]=A,!0}else if(V.equals(A)===!1)return V.copy(A),!0}return!1}function _(E){const b=E.uniforms;let T=0;const L=16;for(let w=0,V=b.length;w<V;w++){const M=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,B=M.length;y<B;y++){const H=M[y],Q=Array.isArray(H.value)?H.value:[H.value];for(let C=0,F=Q.length;C<F;C++){const z=Q[C],j=g(z),W=T%L;W!==0&&L-W<j.boundary&&(T+=L-W),H.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=j.storage}}}const A=T%L;return A>0&&(T+=L-A),E.__size=T,E.__cache={},this}function g(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function p(E){const b=E.target;b.removeEventListener("dispose",p);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(a[b.id]),delete a[b.id],delete s[b.id]}function d(){for(const E in a)i.deleteBuffer(a[E]);o=[],a={},s={}}return{bind:l,update:c,dispose:d}}class Ao{constructor(e={}){const{canvas:t=jl(),context:n=null,depth:a=!0,stencil:s=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tt,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const b=this;let T=!1,L=0,A=0,w=null,V=-1,M=null;const y=new ut,B=new ut;let H=null;const Q=new He(0);let C=0,F=t.width,z=t.height,j=1,W=null,X=null;const q=new ut(0,0,F,z),ee=new ut(0,0,F,z);let te=!1;const G=new hs;let Y=!1,oe=!1,me=null;const pe=new at,Re=new Ge,Le=new k,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return w===null?j:1}let D=n;function _t(x,P){for(let N=0;N<x.length;N++){const O=x[N],I=t.getContext(O,P);if(I!==null)return I}return null}try{const x={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${as}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){const P=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&P.shift(),D=_t(P,x),D===null)throw _t(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _e,Ae,he,Ze,De,S,v,U,Z,$,J,de,re,ce,Me,Ie,K,We,Be,Te,ge,ue,Pe,Ve;function Qe(){_e=new rd(D),Ae=new ed(D,_e,e),_e.init(Ae),ue=new jf(D,_e,Ae),he=new Wf(D,_e,Ae),Ze=new cd(D),De=new Lf,S=new Xf(D,_e,he,De,Ae,ue,Ze),v=new nd(b),U=new sd(b),Z=new _c(D,Ae),Pe=new Jh(D,_e,Z,Ae),$=new od(D,Z,Ze,Pe),J=new fd(D,$,Z,Ze),Be=new dd(D,Ae,S),Ie=new td(De),de=new Cf(b,v,U,_e,Ae,Pe,Ie),re=new $f(b,De),ce=new kf,Me=new Of(_e,Ae),We=new Zh(b,v,U,he,J,f,l),K=new Vf(b,J,Ae),Ve=new Zf(D,Ze,Ae,he),Te=new Qh(D,_e,Ze,Ae),ge=new ld(D,_e,Ze,Ae),Ze.programs=de.programs,b.capabilities=Ae,b.extensions=_e,b.properties=De,b.renderLists=ce,b.shadowMap=K,b.state=he,b.info=Ze}Qe();const Ne=new Kf(b,D);this.xr=Ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(F,z,!1))},this.getSize=function(x){return x.set(F,z)},this.setSize=function(x,P,N=!0){if(Ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=x,z=P,t.width=Math.floor(x*j),t.height=Math.floor(P*j),N===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(F*j,z*j).floor()},this.setDrawingBufferSize=function(x,P,N){F=x,z=P,j=N,t.width=Math.floor(x*N),t.height=Math.floor(P*N),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,P,N,O){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,P,N,O),he.viewport(y.copy(q).multiplyScalar(j).floor())},this.getScissor=function(x){return x.copy(ee)},this.setScissor=function(x,P,N,O){x.isVector4?ee.set(x.x,x.y,x.z,x.w):ee.set(x,P,N,O),he.scissor(B.copy(ee).multiplyScalar(j).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(x){he.setScissorTest(te=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){X=x},this.getClearColor=function(x){return x.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(x=!0,P=!0,N=!0){let O=0;if(x){let I=!1;if(w!==null){const le=w.texture.format;I=le===to||le===eo||le===Qr}if(I){const le=w.texture.type,fe=le===gn||le===dn||le===rs||le===Ln||le===Zr||le===Jr,xe=We.getClearColor(),Ee=We.getClearAlpha(),Ue=xe.r,we=xe.g,Ce=xe.b;fe?(m[0]=Ue,m[1]=we,m[2]=Ce,m[3]=Ee,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ue,_[1]=we,_[2]=Ce,_[3]=Ee,D.clearBufferiv(D.COLOR,0,_))}else O|=D.COLOR_BUFFER_BIT}P&&(O|=D.DEPTH_BUFFER_BIT),N&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),Me.dispose(),De.dispose(),v.dispose(),U.dispose(),J.dispose(),Pe.dispose(),Ve.dispose(),de.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",vt),Ne.removeEventListener("sessionend",Ke),me&&(me.dispose(),me=null),xt.stop()};function ne(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=Ze.autoReset,P=K.enabled,N=K.autoUpdate,O=K.needsUpdate,I=K.type;Qe(),Ze.autoReset=x,K.enabled=P,K.autoUpdate=N,K.needsUpdate=O,K.type=I}function ae(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function se(x){const P=x.target;P.removeEventListener("dispose",se),ye(P)}function ye(x){ve(x),De.remove(x)}function ve(x){const P=De.get(x).programs;P!==void 0&&(P.forEach(function(N){de.releaseProgram(N)}),x.isShaderMaterial&&de.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,N,O,I,le){P===null&&(P=be);const fe=I.isMesh&&I.matrixWorld.determinant()<0,xe=Co(x,P,N,O,I);he.setMaterial(O,fe);let Ee=N.index,Ue=1;if(O.wireframe===!0){if(Ee=$.getWireframeAttribute(N),Ee===void 0)return;Ue=2}const we=N.drawRange,Ce=N.attributes.position;let nt=we.start*Ue,Lt=(we.start+we.count)*Ue;le!==null&&(nt=Math.max(nt,le.start*Ue),Lt=Math.min(Lt,(le.start+le.count)*Ue)),Ee!==null?(nt=Math.max(nt,0),Lt=Math.min(Lt,Ee.count)):Ce!=null&&(nt=Math.max(nt,0),Lt=Math.min(Lt,Ce.count));const lt=Lt-nt;if(lt<0||lt===1/0)return;Pe.setup(I,O,xe,N,Ee);let Zt,Je=Te;if(Ee!==null&&(Zt=Z.get(Ee),Je=ge,Je.setIndex(Zt)),I.isMesh)O.wireframe===!0?(he.setLineWidth(O.wireframeLinewidth*ze()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(I.isLine){let Fe=O.linewidth;Fe===void 0&&(Fe=1),he.setLineWidth(Fe*ze()),I.isLineSegments?Je.setMode(D.LINES):I.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else I.isPoints?Je.setMode(D.POINTS):I.isSprite&&Je.setMode(D.TRIANGLES);if(I.isBatchedMesh)Je.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)Je.renderInstances(nt,lt,I.count);else if(N.isInstancedBufferGeometry){const Fe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,da=Math.min(N.instanceCount,Fe);Je.renderInstances(nt,lt,da)}else Je.render(nt,lt)};function qe(x,P,N){x.transparent===!0&&x.side===mt&&x.forceSinglePass===!1?(x.side=At,x.needsUpdate=!0,Li(x,P,N),x.side=_n,x.needsUpdate=!0,Li(x,P,N),x.side=mt):Li(x,P,N)}this.compile=function(x,P,N=null){N===null&&(N=x),p=Me.get(N),p.init(),E.push(p),N.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),x!==N&&x.traverseVisible(function(I){I.isLight&&I.layers.test(P.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(b._useLegacyLights);const O=new Set;return x.traverse(function(I){const le=I.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const xe=le[fe];qe(xe,N,I),O.add(xe)}else qe(le,N,I),O.add(le)}),E.pop(),p=null,O},this.compileAsync=function(x,P,N=null){const O=this.compile(x,P,N);return new Promise(I=>{function le(){if(O.forEach(function(fe){De.get(fe).currentProgram.isReady()&&O.delete(fe)}),O.size===0){I(x);return}setTimeout(le,10)}_e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ye=null;function ot(x){Ye&&Ye(x)}function vt(){xt.stop()}function Ke(){xt.start()}const xt=new vo;xt.setAnimationLoop(ot),typeof self<"u"&&xt.setContext(self),this.setAnimationLoop=function(x){Ye=x,Ne.setAnimationLoop(x),x===null?xt.stop():xt.start()},Ne.addEventListener("sessionstart",vt),Ne.addEventListener("sessionend",Ke),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(P),P=Ne.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,P,w),p=Me.get(x,E.length),p.init(),E.push(p),pe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),G.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,Y=Ie.init(this.clippingPlanes,oe),g=ce.get(x,d.length),g.init(),d.push(g),qt(x,P,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(W,X),this.info.render.frame++,Y===!0&&Ie.beginShadows();const N=p.state.shadowsArray;if(K.render(N,x,P),Y===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(g,x),p.setupLights(b._useLegacyLights),P.isArrayCamera){const O=P.cameras;for(let I=0,le=O.length;I<le;I++){const fe=O[I];gs(g,x,fe,fe.viewport)}}else gs(g,x,P);w!==null&&(S.updateMultisampleRenderTarget(w),S.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(b,x,P),Pe.resetDefaultState(),V=-1,M=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function qt(x,P,N,O){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||G.intersectsSprite(x)){O&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pe);const fe=J.update(x),xe=x.material;xe.visible&&g.push(x,fe,xe,N,Le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||G.intersectsObject(x))){const fe=J.update(x),xe=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(pe)),Array.isArray(xe)){const Ee=fe.groups;for(let Ue=0,we=Ee.length;Ue<we;Ue++){const Ce=Ee[Ue],nt=xe[Ce.materialIndex];nt&&nt.visible&&g.push(x,fe,nt,N,Le.z,Ce)}}else xe.visible&&g.push(x,fe,xe,N,Le.z,null)}}const le=x.children;for(let fe=0,xe=le.length;fe<xe;fe++)qt(le[fe],P,N,O)}function gs(x,P,N,O){const I=x.opaque,le=x.transmissive,fe=x.transparent;p.setupLightsView(N),Y===!0&&Ie.setGlobalState(b.clippingPlanes,N),le.length>0&&Ro(I,le,P,N),O&&he.viewport(y.copy(O)),I.length>0&&Ci(I,P,N),le.length>0&&Ci(le,P,N),fe.length>0&&Ci(fe,P,N),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Ro(x,P,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const le=Ae.isWebGL2;me===null&&(me=new Dn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?yi:gn,minFilter:bi,samples:le?4:0})),b.getDrawingBufferSize(Re),le?me.setSize(Re.x,Re.y):me.setSize(sa(Re.x),sa(Re.y));const fe=b.getRenderTarget();b.setRenderTarget(me),b.getClearColor(Q),C=b.getClearAlpha(),C<1&&b.setClearColor(16777215,.5),b.clear();const xe=b.toneMapping;b.toneMapping=mn,Ci(x,N,O),S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me);let Ee=!1;for(let Ue=0,we=P.length;Ue<we;Ue++){const Ce=P[Ue],nt=Ce.object,Lt=Ce.geometry,lt=Ce.material,Zt=Ce.group;if(lt.side===mt&&nt.layers.test(O.layers)){const Je=lt.side;lt.side=At,lt.needsUpdate=!0,_s(nt,N,O,Lt,lt,Zt),lt.side=Je,lt.needsUpdate=!0,Ee=!0}}Ee===!0&&(S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me)),b.setRenderTarget(fe),b.setClearColor(Q,C),b.toneMapping=xe}function Ci(x,P,N){const O=P.isScene===!0?P.overrideMaterial:null;for(let I=0,le=x.length;I<le;I++){const fe=x[I],xe=fe.object,Ee=fe.geometry,Ue=O===null?fe.material:O,we=fe.group;xe.layers.test(N.layers)&&_s(xe,P,N,Ee,Ue,we)}}function _s(x,P,N,O,I,le){x.onBeforeRender(b,P,N,O,I,le),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(b,P,N,O,x,le),I.transparent===!0&&I.side===mt&&I.forceSinglePass===!1?(I.side=At,I.needsUpdate=!0,b.renderBufferDirect(N,P,O,I,x,le),I.side=_n,I.needsUpdate=!0,b.renderBufferDirect(N,P,O,I,x,le),I.side=mt):b.renderBufferDirect(N,P,O,I,x,le),x.onAfterRender(b,P,N,O,I,le)}function Li(x,P,N){P.isScene!==!0&&(P=be);const O=De.get(x),I=p.state.lights,le=p.state.shadowsArray,fe=I.state.version,xe=de.getParameters(x,I.state,le,P,N),Ee=de.getProgramCacheKey(xe);let Ue=O.programs;O.environment=x.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(x.isMeshStandardMaterial?U:v).get(x.envMap||O.environment),Ue===void 0&&(x.addEventListener("dispose",se),Ue=new Map,O.programs=Ue);let we=Ue.get(Ee);if(we!==void 0){if(O.currentProgram===we&&O.lightsStateVersion===fe)return xs(x,xe),we}else xe.uniforms=de.getUniforms(x),x.onBuild(N,xe,b),x.onBeforeCompile(xe,b),we=de.acquireProgram(xe,Ee),Ue.set(Ee,we),O.uniforms=xe.uniforms;const Ce=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ce.clippingPlanes=Ie.uniform),xs(x,xe),O.needsLights=Po(x),O.lightsStateVersion=fe,O.needsLights&&(Ce.ambientLightColor.value=I.state.ambient,Ce.lightProbe.value=I.state.probe,Ce.directionalLights.value=I.state.directional,Ce.directionalLightShadows.value=I.state.directionalShadow,Ce.spotLights.value=I.state.spot,Ce.spotLightShadows.value=I.state.spotShadow,Ce.rectAreaLights.value=I.state.rectArea,Ce.ltc_1.value=I.state.rectAreaLTC1,Ce.ltc_2.value=I.state.rectAreaLTC2,Ce.pointLights.value=I.state.point,Ce.pointLightShadows.value=I.state.pointShadow,Ce.hemisphereLights.value=I.state.hemi,Ce.directionalShadowMap.value=I.state.directionalShadowMap,Ce.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ce.spotShadowMap.value=I.state.spotShadowMap,Ce.spotLightMatrix.value=I.state.spotLightMatrix,Ce.spotLightMap.value=I.state.spotLightMap,Ce.pointShadowMap.value=I.state.pointShadowMap,Ce.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=we,O.uniformsList=null,we}function vs(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=Qi.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function xs(x,P){const N=De.get(x);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function Co(x,P,N,O,I){P.isScene!==!0&&(P=be),S.resetTextureUnits();const le=P.fog,fe=O.isMeshStandardMaterial?P.environment:null,xe=w===null?b.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:rn,Ee=(O.isMeshStandardMaterial?U:v).get(O.envMap||fe),Ue=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,we=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ce=!!N.morphAttributes.position,nt=!!N.morphAttributes.normal,Lt=!!N.morphAttributes.color;let lt=mn;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(lt=b.toneMapping);const Zt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Je=Zt!==void 0?Zt.length:0,Fe=De.get(O),da=p.state.lights;if(Y===!0&&(oe===!0||x!==M)){const It=x===M&&O.id===V;Ie.setState(O,x,It)}let et=!1;O.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==da.state.version||Fe.outputColorSpace!==xe||I.isBatchedMesh&&Fe.batching===!1||!I.isBatchedMesh&&Fe.batching===!0||I.isInstancedMesh&&Fe.instancing===!1||!I.isInstancedMesh&&Fe.instancing===!0||I.isSkinnedMesh&&Fe.skinning===!1||!I.isSkinnedMesh&&Fe.skinning===!0||I.isInstancedMesh&&Fe.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Fe.instancingColor===!1&&I.instanceColor!==null||Fe.envMap!==Ee||O.fog===!0&&Fe.fog!==le||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ie.numPlanes||Fe.numIntersection!==Ie.numIntersection)||Fe.vertexAlphas!==Ue||Fe.vertexTangents!==we||Fe.morphTargets!==Ce||Fe.morphNormals!==nt||Fe.morphColors!==Lt||Fe.toneMapping!==lt||Ae.isWebGL2===!0&&Fe.morphTargetsCount!==Je)&&(et=!0):(et=!0,Fe.__version=O.version);let vn=Fe.currentProgram;et===!0&&(vn=Li(O,P,I));let Ms=!1,di=!1,fa=!1;const dt=vn.getUniforms(),xn=Fe.uniforms;if(he.useProgram(vn.program)&&(Ms=!0,di=!0,fa=!0),O.id!==V&&(V=O.id,di=!0),Ms||M!==x){dt.setValue(D,"projectionMatrix",x.projectionMatrix),dt.setValue(D,"viewMatrix",x.matrixWorldInverse);const It=dt.map.cameraPosition;It!==void 0&&It.setValue(D,Le.setFromMatrixPosition(x.matrixWorld)),Ae.logarithmicDepthBuffer&&dt.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&dt.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,di=!0,fa=!0)}if(I.isSkinnedMesh){dt.setOptional(D,I,"bindMatrix"),dt.setOptional(D,I,"bindMatrixInverse");const It=I.skeleton;It&&(Ae.floatVertexTextures?(It.boneTexture===null&&It.computeBoneTexture(),dt.setValue(D,"boneTexture",It.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(dt.setOptional(D,I,"batchingTexture"),dt.setValue(D,"batchingTexture",I._matricesTexture,S));const pa=N.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&Ae.isWebGL2===!0)&&Be.update(I,N,vn),(di||Fe.receiveShadow!==I.receiveShadow)&&(Fe.receiveShadow=I.receiveShadow,dt.setValue(D,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(xn.envMap.value=Ee,xn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),di&&(dt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Fe.needsLights&&Lo(xn,fa),le&&O.fog===!0&&re.refreshFogUniforms(xn,le),re.refreshMaterialUniforms(xn,O,j,z,me),Qi.upload(D,vs(Fe),xn,S)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Qi.upload(D,vs(Fe),xn,S),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&dt.setValue(D,"center",I.center),dt.setValue(D,"modelViewMatrix",I.modelViewMatrix),dt.setValue(D,"normalMatrix",I.normalMatrix),dt.setValue(D,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const It=O.uniformsGroups;for(let ma=0,ko=It.length;ma<ko;ma++)if(Ae.isWebGL2){const Ss=It[ma];Ve.update(Ss,vn),Ve.bind(Ss,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function Lo(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function Po(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,P,N){De.get(x.texture).__webglTexture=P,De.get(x.depthTexture).__webglTexture=N;const O=De.get(x);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=N===void 0,O.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,P){const N=De.get(x);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,N=0){w=x,L=P,A=N;let O=!0,I=null,le=!1,fe=!1;if(x){const Ee=De.get(x);Ee.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(D.FRAMEBUFFER,null),O=!1):Ee.__webglFramebuffer===void 0?S.setupRenderTarget(x):Ee.__hasExternalTextures&&S.rebindTextures(x,De.get(x.texture).__webglTexture,De.get(x.depthTexture).__webglTexture);const Ue=x.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);const we=De.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(we[P])?I=we[P][N]:I=we[P],le=!0):Ae.isWebGL2&&x.samples>0&&S.useMultisampledRTT(x)===!1?I=De.get(x).__webglMultisampledFramebuffer:Array.isArray(we)?I=we[N]:I=we,y.copy(x.viewport),B.copy(x.scissor),H=x.scissorTest}else y.copy(q).multiplyScalar(j).floor(),B.copy(ee).multiplyScalar(j).floor(),H=te;if(he.bindFramebuffer(D.FRAMEBUFFER,I)&&Ae.drawBuffers&&O&&he.drawBuffers(x,I),he.viewport(y),he.scissor(B),he.setScissorTest(H),le){const Ee=De.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,Ee.__webglTexture,N)}else if(fe){const Ee=De.get(x.texture),Ue=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ee.__webglTexture,N||0,Ue)}V=-1},this.readRenderTargetPixels=function(x,P,N,O,I,le,fe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=De.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){he.bindFramebuffer(D.FRAMEBUFFER,xe);try{const Ee=x.texture,Ue=Ee.format,we=Ee.type;if(Ue!==jt&&ue.convert(Ue)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===yi&&(_e.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&_e.has("EXT_color_buffer_float"));if(we!==gn&&ue.convert(we)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===fn&&(Ae.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-O&&N>=0&&N<=x.height-I&&D.readPixels(P,N,O,I,ue.convert(Ue),ue.convert(we),le)}finally{const Ee=w!==null?De.get(w).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(x,P,N=0){const O=Math.pow(2,-N),I=Math.floor(P.image.width*O),le=Math.floor(P.image.height*O);S.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,N,0,0,x.x,x.y,I,le),he.unbindTexture()},this.copyTextureToTexture=function(x,P,N,O=0){const I=P.image.width,le=P.image.height,fe=ue.convert(N.format),xe=ue.convert(N.type);S.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment),P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,x.x,x.y,I,le,fe,xe,P.image.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,fe,P.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,O,x.x,x.y,fe,xe,P.image),O===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(x,P,N,O,I=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=x.max.x-x.min.x+1,fe=x.max.y-x.min.y+1,xe=x.max.z-x.min.z+1,Ee=ue.convert(O.format),Ue=ue.convert(O.type);let we;if(O.isData3DTexture)S.setTexture3D(O,0),we=D.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)S.setTexture2DArray(O,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Ce=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Lt=D.getParameter(D.UNPACK_SKIP_PIXELS),lt=D.getParameter(D.UNPACK_SKIP_ROWS),Zt=D.getParameter(D.UNPACK_SKIP_IMAGES),Je=N.isCompressedTexture?N.mipmaps[I]:N.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,x.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,x.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,x.min.z),N.isDataTexture||N.isData3DTexture?D.texSubImage3D(we,I,P.x,P.y,P.z,le,fe,xe,Ee,Ue,Je.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(we,I,P.x,P.y,P.z,le,fe,xe,Ee,Je.data)):D.texSubImage3D(we,I,P.x,P.y,P.z,le,fe,xe,Ee,Ue,Je),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ce),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zt),I===0&&O.generateMipmaps&&D.generateMipmap(we),he.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?S.setTextureCube(x,0):x.isData3DTexture?S.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?S.setTexture2DArray(x,0):S.setTexture2D(x,0),he.unbindTexture()},this.resetState=function(){L=0,A=0,w=null,he.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===os?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===la?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tt?kn:io}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kn?tt:rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Jf extends Ao{}Jf.prototype.isWebGL1Renderer=!0;class Qf extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class fs extends wt{constructor(e,t,n,a,s,o,r,l,c){super(e,t,n,a,s,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ha extends $t{constructor(e=1,t=32,n=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:a},t=Math.max(3,t);const s=[],o=[],r=[],l=[],c=new k,u=new Ge;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=n+h/t*a;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),r.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(r,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ra extends $t{constructor(e=1,t=1,n=1,a=32,s=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const u=[],h=[],f=[],m=[];let _=0;const g=[],p=n/2;let d=0;E(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(m,2));function E(){const T=new k,L=new k;let A=0;const w=(t-e)/n;for(let V=0;V<=s;V++){const M=[],y=V/s,B=y*(t-e)+e;for(let H=0;H<=a;H++){const Q=H/a,C=Q*l+r,F=Math.sin(C),z=Math.cos(C);L.x=B*F,L.y=-y*n+p,L.z=B*z,h.push(L.x,L.y,L.z),T.set(F,w,z).normalize(),f.push(T.x,T.y,T.z),m.push(Q,1-y),M.push(_++)}g.push(M)}for(let V=0;V<a;V++)for(let M=0;M<s;M++){const y=g[M][V],B=g[M+1][V],H=g[M+1][V+1],Q=g[M][V+1];u.push(y,B,Q),u.push(B,H,Q),A+=6}c.addGroup(d,A,0),d+=A}function b(T){const L=_,A=new Ge,w=new k;let V=0;const M=T===!0?e:t,y=T===!0?1:-1;for(let H=1;H<=a;H++)h.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),_++;const B=_;for(let H=0;H<=a;H++){const C=H/a*l+r,F=Math.cos(C),z=Math.sin(C);w.x=M*z,w.y=p*y,w.z=M*F,h.push(w.x,w.y,w.z),f.push(0,y,0),A.x=F*.5+.5,A.y=z*.5*y+.5,m.push(A.x,A.y),_++}for(let H=0;H<a;H++){const Q=L+H,C=B+H;T===!0?u.push(C,C+1,Q):u.push(C+1,C,Q),V+=3}c.addGroup(d,V,T===!0?1:2),d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ps extends $t{constructor(e=.5,t=1,n=32,a=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:a,thetaStart:s,thetaLength:o},n=Math.max(3,n),a=Math.max(1,a);const r=[],l=[],c=[],u=[];let h=e;const f=(t-e)/a,m=new k,_=new Ge;for(let g=0;g<=a;g++){for(let p=0;p<=n;p++){const d=s+p/n*o;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<a;g++){const p=g*(n+1);for(let d=0;d<n;d++){const E=d+p,b=E,T=E+n+1,L=E+n+2,A=E+1;r.push(b,T,A),r.push(T,L,A)}}this.setIndex(r),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class En extends Ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Hr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ep{constructor(e,t,n){const a=this;let s=!1,o=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){r++,s===!1&&a.onStart!==void 0&&a.onStart(u,o,r),s=!0},this.itemEnd=function(u){o++,a.onProgress!==void 0&&a.onProgress(u,o,r),o===r&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(u){a.onError!==void 0&&a.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const tp=new ep;class ms{constructor(e){this.manager=e!==void 0?e:tp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ms.DEFAULT_MATERIAL_NAME="__DEFAULT";class np extends ms{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const r=Ti("img");function l(){u(),Hr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),a&&a(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}}class ip extends ms{constructor(e){super(e)}load(e,t,n,a){const s=new wt,o=new np(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},n,a),s}}class wo extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ap extends wo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ja=new at,Vr=new k,Wr=new k;class sp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vr.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vr),Wr.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wr),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rp extends sp{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class op extends wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new rp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xr(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xr();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xr(){return(typeof performance>"u"?Date:performance).now()}class cp{constructor(e,t,n=0,a=1/0){this.ray=new uo(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return is(e,this,n,t),n.sort(jr),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)is(e[a],this,n,t);return n.sort(jr),n}}function jr(i,e){return i.distance-e.distance}function is(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)is(a[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);const Se={cream:"#FFF4DE",leafGreen:"#7BC47F",honeyYellow:"#FFC93C",coral:"#FF7A59",teal:"#3FB8AF",textDark:"#3B2F2F",borderDark:"#5A4638",buttonBg:"#FFE6B0",buttonHover:"#FFD166",disabledBg:"#E0D7C6",skyHorizon:"#E8F5FD",skyZenith:"#99D5F9",groundHub:"#E5D6BD",groundArea1:"#E2F0D9",groundArea2:"#FDEBD0",groundArea3:"#D4E6F1",woodBrown:"#8B5A2B"};function Qn(i){return parseInt(i.replace("#","0x"),16)}const yt={MENU:"MENU",EXPLORE:"EXPLORE",DIALOG:"DIALOG",CHALLENGE:"CHALLENGE",FEEDBACK:"FEEDBACK",TRANSITION:"TRANSITION",REPORT:"REPORT"};class up{constructor(){this.current=yt.MENU,this.previous=null,this.listeners=[],this.context={currentArea:"hub",currentWaypoint:"wp-hub-center",activeNpcId:null,activeTopicId:null,activeChallenge:null,lastFeedback:null,keysCount:0}}getState(){return this.current}getContext(){return this.context}onStateChange(e){this.listeners.push(e)}transition(e,t={}){if(!yt[e])return console.error(`Transisi tidak valid ke state: ${e}`),!1;const n=this.current;this.previous=n,this.current=e,this.context={...this.context,...t};for(const a of this.listeners)try{a(this.current,n,this.context)}catch(s){console.error("Error pada state listener:",s)}return!0}updateContext(e){this.context={...this.context,...e}}}const Mt=new up;class hp{constructor(){this.textures=new Map,this.loader=new ip,this.fallbackTexture=null}_createColorTexture(e){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d");n.fillStyle=e,n.fillRect(0,0,64,64);const a=new fs(t);return a.colorSpace=tt,a}getFallbackTexture(e=Se.cream){return this._createColorTexture(e)}async loadTexture(e,t=Se.cream){return this.textures.has(e)?this.textures.get(e):new Promise(n=>{this.loader.load(e,a=>{a.colorSpace=tt,a.anisotropy=Math.min(4,4),this.textures.set(e,a),n(a)},void 0,a=>{console.warn(`[Assets] Gagal memuat tekstur '${e}', menggunakan fallback warna:`,a);const s=this.getFallbackTexture(t);this.textures.set(e,s),n(s)})})}async preloadAll(e,t){let n=0;const a=e.length;for(const s of e)await this.loadTexture(s.url,s.fallbackColor),n++,t&&t(n/a,s.url)}get(e){return this.textures.get(e)||this.getFallbackTexture()}}const Ft=new hp;class dp{constructor(){this.ctx=null,this.muted=!1,this.initialized=!1}init(){if(!this.initialized)try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.initialized=!0)}catch(e){console.warn("Web Audio API tidak didukung atau diblokir:",e)}}toggleMute(){return this.muted=!this.muted,this.muted}isMuted(){return this.muted}_playTone(e,t="sine",n=.15,a=.15){if(!this.muted&&(this.init(),!!this.ctx)){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});try{const s=this.ctx.createOscillator(),o=this.ctx.createGain();s.type=t,s.frequency.setValueAtTime(e,this.ctx.currentTime),o.gain.setValueAtTime(a,this.ctx.currentTime),o.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+n),s.connect(o),o.connect(this.ctx.destination),s.start(),s.stop(this.ctx.currentTime+n)}catch{}}}playClick(){this._playTone(520,"sine",.08,.12)}playStep(){this._playTone(180,"triangle",.06,.08)}playCorrect(){this._playTone(523.25,"sine",.12,.15),setTimeout(()=>this._playTone(659.25,"sine",.18,.15),100),setTimeout(()=>this._playTone(783.99,"sine",.28,.18),200)}playIncorrect(){this._playTone(320,"sine",.18,.12),setTimeout(()=>this._playTone(260,"sine",.25,.12),120)}playFanfare(){[523.25,659.25,783.99,1046.5].forEach((t,n)=>{setTimeout(()=>this._playTone(t,"triangle",.25,.18),n*120)})}}const Nt=new dp;class fp{constructor(){this.recognition=null,this.isListening=!1,this.onResultCallback=null,this.onErrorCallback=null,this.supported=!1;const e=window.SpeechRecognition||window.webkitSpeechRecognition;if(e)try{this.recognition=new e,this.recognition.lang="id-ID",this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.onresult=t=>{if(this.isListening=!1,t.results&&t.results[0]&&t.results[0][0]){const n=t.results[0][0].transcript;this.onResultCallback&&this.onResultCallback(n)}},this.recognition.onerror=t=>{this.isListening=!1,console.warn("SpeechRecognition error:",t.error),this.onErrorCallback&&this.onErrorCallback(t.error)},this.recognition.onend=()=>{this.isListening=!1},this.supported=!0}catch(t){console.warn("SpeechRecognition inisialisasi gagal:",t)}}isSupported(){return this.supported}start(e,t){if(!this.supported||!this.recognition){t&&t("not_supported");return}if(!this.isListening){this.onResultCallback=e,this.onErrorCallback=t;try{this.isListening=!0,this.recognition.start()}catch(n){this.isListening=!1,t&&t(n.message)}}}stop(){if(this.recognition&&this.isListening)try{this.recognition.stop()}catch{}this.isListening=!1}}const qr=new fp;class pp{constructor(e,t,n){this.scene=e,this.camera=t,this.renderer=n,this.width3D=1.6,this.height3D=1.2,this.canvasW=1024,this.canvasH=768,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasW,this.canvas.height=this.canvasH,this.ctx=this.canvas.getContext("2d"),this.texture=new fs(this.canvas),this.texture.colorSpace=tt,this.texture.minFilter=Ct,this.texture.magFilter=Ct;const a=new Rt(this.width3D,this.height3D),s=new Dt({map:this.texture,transparent:!0,side:mt,depthTest:!0});this.mesh=new je(a,s),this.mesh.name="Panel3D_Main",this.mesh.visible=!1,this.scene.add(this.mesh),this.isOpen=!1,this.title="",this.pages=[""],this.currentPageIndex=0,this.buttons=[],this.hoveredButtonIndex=-1,this.lastOverflowDetected=!1,this.buttonRects=[]}show({title:e="",textPages:t=[""],buttons:n=[],npcFacingPos:a=null}){this.title=e,this.pages=Array.isArray(t)?t:[t],this.currentPageIndex=0,this.buttons=n,this.hoveredButtonIndex=-1,this.isOpen=!0,this.mesh.visible=!0,this.renderCanvas(),this.fitToView(a)}hide(){this.isOpen=!1,this.mesh.visible=!1,this.hoveredButtonIndex=-1,this.currentNpcFacingPos=null}setPage(e){e>=0&&e<this.pages.length&&(this.currentPageIndex=e,this.renderCanvas())}fitToView(e=null){if(!this.isOpen)return;e&&(this.currentNpcFacingPos=e);const t=e||this.currentNpcFacingPos,n=this.camera.fov*Math.PI/180,a=this.camera.aspect||1,s=2*Math.atan(Math.tan(n/2)*a),o=this.height3D/2/(Math.tan(n/2)*.88),r=this.width3D/2/(Math.tan(s/2)*.88),c=this.renderer.xr.isPresenting||typeof window<"u"&&window.location.search.includes("vrlayout=1")?2:Math.max(2,o,r),u=new k,h=new k;if(this.camera.getWorldPosition(u),t){const f=new k().subVectors(t,u);f.y=0,f.normalize();const m=u.clone().add(f.clone().multiplyScalar(c));m.y=u.y-.28,this.mesh.position.copy(m),this.mesh.lookAt(u.x,m.y,u.z)}else{this.camera.getWorldDirection(h),h.y=0,h.normalize();const f=u.clone().add(h.clone().multiplyScalar(c));f.y=u.y-.28,this.mesh.position.copy(f),this.mesh.lookAt(u.x,f.y,u.z)}}_wrapText(e,t,n){const a=t.split(/\s+/),s=[];let o="";for(const r of a){const l=o?`${o} ${r}`:r;e.measureText(l).width>n&&o?(s.push(o),o=r):o=l}return o&&s.push(o),s}renderCanvas(){const e=this.ctx,t=this.canvasW,n=this.canvasH;e.clearRect(0,0,t,n),e.fillStyle=Se.cream,e.strokeStyle=Se.borderDark,e.lineWidth=12,e.beginPath(),e.roundRect(16,16,t-32,n-32,36),e.fill(),e.stroke(),e.strokeStyle="#E2CFB4",e.lineWidth=4,e.beginPath(),e.roundRect(32,32,t-64,n-64,24),e.stroke(),e.fillStyle=Se.textDark,e.font="bold 54px sans-serif",e.textAlign="left",e.textBaseline="middle",e.fillText(this.title||"Informasi",54,88),this.pages.length>1&&(e.font="bold 36px sans-serif",e.textAlign="right",e.fillStyle=Se.coral,e.fillText(`Hal ${this.currentPageIndex+1}/${this.pages.length}`,t-54,88)),e.strokeStyle="#D5BFA0",e.lineWidth=3,e.beginPath(),e.moveTo(50,134),e.lineTo(t-50,134),e.stroke(),e.fillStyle=Se.textDark,e.font="42px sans-serif",e.textAlign="left",e.textBaseline="top";const a=t-108,s=this.pages[this.currentPageIndex]||"",o=this._wrapText(e,s,a),r=56;let l=164;const c=540;this.lastOverflowDetected=!1,o.forEach(f=>{if(l+r>c){this.lastOverflowDetected=!0;return}e.fillText(f,54,l),l+=r}),this.buttonRects=[];const u=[...this.buttons];this.pages.length>1&&this.currentPageIndex<this.pages.length-1&&u.unshift({label:"Halaman Lanjut ➔",onClick:()=>this.setPage(this.currentPageIndex+1),isNav:!0}),this.pages.length>1&&this.currentPageIndex>0&&u.unshift({label:"⬅ Hal Sebelumnya",onClick:()=>this.setPage(this.currentPageIndex-1),isNav:!0});const h=Math.min(4,u.length);if(h>0){const _=(h-1)*24,g=t-108,p=Math.floor((g-_)/h),d=n-146;for(let E=0;E<h;E++){const b=u[E],T=54+E*(p+24),L=this.hoveredButtonIndex===E;e.fillStyle=b.disabled?Se.disabledBg:L?Se.buttonHover:b.color||Se.buttonBg,e.strokeStyle=Se.borderDark,e.lineWidth=L?6:4,e.beginPath(),e.roundRect(T,d,p,100,20),e.fill(),e.stroke(),e.fillStyle=b.disabled?"#8C827A":Se.textDark,e.font="bold 38px sans-serif",e.textAlign="center",e.textBaseline="middle";let A=b.label;if(e.measureText(A).width>p-24){for(;A.length>3&&e.measureText(A+"…").width>p-24;)A=A.slice(0,-1);A+="…"}e.fillText(A,T+p/2,d+100/2),this.buttonRects.push({x:T,y:d,w:p,h:100,btn:b})}}this.texture.needsUpdate=!0}handleRaycast(e,t=!1){if(!this.isOpen||!e)return!1;const n=e.x*this.canvasW,a=(1-e.y)*this.canvasH;let s=-1;for(let o=0;o<this.buttonRects.length;o++){const r=this.buttonRects[o];if(n>=r.x&&n<=r.x+r.w&&a>=r.y&&a<=r.y+r.h){s=o;break}}if(s!==this.hoveredButtonIndex&&(this.hoveredButtonIndex=s,this.renderCanvas()),t&&s>=0){const o=this.buttonRects[s].btn;if(!o.disabled&&typeof o.onClick=="function")return Nt.playClick(),o.onClick(),!0}return s>=0}getScreenRect(){if(!this.isOpen||!this.mesh.visible)return null;const e=this.width3D/2,t=this.height3D/2,n=[new k(-e,-t,0),new k(e,-t,0),new k(e,t,0),new k(-e,t,0)],a=this.renderer.domElement,s=a.clientWidth||window.innerWidth,o=a.clientHeight||window.innerHeight;let r=1/0,l=1/0,c=-1/0,u=-1/0;return n.forEach(h=>{const m=h.clone().applyMatrix4(this.mesh.matrixWorld).project(this.camera),_=(m.x+1)/2*s,g=(-m.y+1)/2*o;r=Math.min(r,_),l=Math.min(l,g),c=Math.max(c,_),u=Math.max(u,g)}),{left:Math.round(r),top:Math.round(l),width:Math.round(c-r),height:Math.round(u-l),inViewport:r>=0&&c<=s&&l>=0&&u<=o,marginPercent:Math.min(r/s,(s-c)/s,l/o,(o-u)/o)*100}}getLayoutStatus(){return{overflow:this.lastOverflowDetected,pages:this.pages.length,currentPage:this.currentPageIndex+1,buttonsCount:this.buttons.length}}}class mp{constructor(e){this.scene=e,this.canvas=document.createElement("canvas"),this.canvas.width=512,this.canvas.height=128,this.ctx=this.canvas.getContext("2d"),this.texture=new fs(this.canvas),this.texture.colorSpace=tt;const t=new Rt(1.2,.3),n=new Dt({map:this.texture,transparent:!0,depthTest:!1});this.mesh=new je(t,n),this.mesh.visible=!1,this.scene.add(this.mesh)}setText(e,t=""){const n=this.ctx;n.clearRect(0,0,512,128),n.fillStyle=Se.cream,n.strokeStyle=Se.borderDark,n.lineWidth=6,n.beginPath(),n.roundRect(8,8,496,112,24),n.fill(),n.stroke(),n.fillStyle=Se.textDark,n.font="bold 36px sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(e,256,t?48:64),t&&(n.fillStyle="#6D5B4F",n.font="24px sans-serif",n.fillText(t,256,88)),this.texture.needsUpdate=!0}showAt(e,t){this.mesh.position.set(e.x,e.y+1.8,e.z),this.mesh.lookAt(t.position),this.mesh.visible=!0}hide(){this.mesh.visible=!1}}class gp{constructor(e,t,n,a){this.canvas=e,this.camera=t,this.scene=n,this.renderer=a,this.raycaster=new cp,this.mouse=new Ge,this.interactiveObjects=[],this.isPointerDown=!1,this.pointerStartX=0,this.pointerStartY=0,this.pointerStartTime=0,this.lastActionTime=0,this.actionCooldownMs=350,this.isDragging=!1,this.lon=-90,this.lat=0,this.phi=0,this.theta=0,this.gazeTarget=null,this.gazeTimer=0,this.gazeDuration=1.2,this.gazeReticle=this._createGazeReticle(),this.onTapCallback=null,this.onMoveForwardCallback=null,this.onNumberKeyCallback=null,this._bindEvents()}_createGazeReticle(){const e=new ps(.015,.022,32),t=new Dt({color:16777215,transparent:!0,opacity:.7,depthTest:!1}),n=new je(e,t);return n.position.set(0,0,-1),n.visible=!1,this.camera.add(n),n}setInteractiveObjects(e){this.interactiveObjects=e}lookAt(e,t){const n=e-this.camera.position.x,a=t-this.camera.position.z;this.lon=ba.radToDeg(Math.atan2(a,n)),this.lat=0}onTap(e){this.onTapCallback=e}onMoveForward(e){this.onMoveForwardCallback=e}onNumberKey(e){this.onNumberKeyCallback=e}_bindEvents(){const e=this.canvas,t=(s,o)=>{this.isPointerDown=!0,this.isDragging=!1,this.pointerStartX=s,this.pointerStartY=o,this.pointerStartTime=performance.now()};e.addEventListener("mousedown",s=>t(s.clientX,s.clientY)),e.addEventListener("touchstart",s=>{s.touches.length===1&&t(s.touches[0].clientX,s.touches[0].clientY)},{passive:!1});const n=(s,o)=>{const r=e.getBoundingClientRect();if(this.mouse.x=(s-r.left)/r.width*2-1,this.mouse.y=-((o-r.top)/r.height)*2+1,this.isPointerDown){const l=s-this.pointerStartX,c=o-this.pointerStartY;l*l+c*c>64&&(this.isDragging=!0,this.lon-=l*.15,this.lat+=c*.15,this.lat=Math.max(-85,Math.min(85,this.lat)),this.pointerStartX=s,this.pointerStartY=o)}};window.addEventListener("mousemove",s=>n(s.clientX,s.clientY)),window.addEventListener("touchmove",s=>{s.touches.length===1&&n(s.touches[0].clientX,s.touches[0].clientY)},{passive:!1});const a=(s,o)=>{const r=performance.now(),l=r-this.pointerStartTime,c=s-this.pointerStartX,u=o-this.pointerStartY,h=c*c+u*u;this.isPointerDown=!1,!this.isDragging&&h<=64&&l<350&&r-this.lastActionTime>=this.actionCooldownMs&&(this.lastActionTime=r,this._performRaycastTap(this.mouse)),this.isDragging=!1};window.addEventListener("mouseup",s=>a(s.clientX,s.clientY)),window.addEventListener("touchend",s=>{const o=s.changedTouches[0];o&&a(o.clientX,o.clientY)}),window.addEventListener("keydown",s=>{(s.key==="w"||s.key==="W"||s.key==="ArrowUp")&&this.onMoveForwardCallback&&this.onMoveForwardCallback(),["1","2","3","4"].includes(s.key)&&this.onNumberKeyCallback&&this.onNumberKeyCallback(parseInt(s.key,10)-1)})}_performRaycastTap(e){this.raycaster.setFromCamera(e,this.camera);const t=this.raycaster.intersectObjects(this.interactiveObjects,!0);if(t.length>0){const n=t[0];this.onTapCallback&&this.onTapCallback(n)}}update(e,t=!1){const n=t||this.renderer.xr.isPresenting;if(!n){this.phi=ba.degToRad(90-this.lat),this.theta=ba.degToRad(this.lon);const o=new k;o.x=this.camera.position.x+100*Math.sin(this.phi)*Math.cos(this.theta),o.y=this.camera.position.y+100*Math.cos(this.phi),o.z=this.camera.position.z+100*Math.sin(this.phi)*Math.sin(this.theta),this.camera.lookAt(o)}const a=n?new Ge(0,0):this.mouse;this.raycaster.setFromCamera(a,this.camera);const s=this.raycaster.intersectObjects(this.interactiveObjects,!0);if(s.length>0){const o=s[0];o.object.name==="Panel3D_Main"&&o.uv?typeof o.object.parent?.handleRaycast=="function"&&(o.object.parent.handleRaycast(o.uv,!1)&&n?(this.gazeTimer+=e,this.gazeTimer>=this.gazeDuration&&(this.gazeTimer=0,o.object.parent.handleRaycast(o.uv,!0))):this.gazeTimer=0):this.gazeTimer=0}else this.gazeTimer=0}setGazeMode(e){this.gazeReticle.visible=e}}const ei=[{id:"wp-hub-center",area:"hub",name:"Pelataran Hub",pos:[0,0,2],connections:["wp-hub-apple","wp-hub-to-a1","wp-hub-to-a2","wp-hub-to-a3"]},{id:"wp-hub-apple",area:"hub",name:"Pohon Apel Newton",pos:[0,0,-3],connections:["wp-hub-center","wp-hub-to-a1","wp-hub-to-a2","wp-hub-to-a3"]},{id:"wp-hub-to-a1",area:"hub",name:"Jalan ke Lab Inersia",pos:[-8,0,-2],connections:["wp-hub-center","wp-hub-apple","wp-a1-gate"]},{id:"wp-hub-to-a2",area:"hub",name:"Jalan ke Lintasan Gerobak",pos:[0,0,-10],connections:["wp-hub-center","wp-hub-apple","wp-a2-gate"]},{id:"wp-hub-to-a3",area:"hub",name:"Jalan ke Peluncur Roket",pos:[8,0,-2],connections:["wp-hub-center","wp-hub-apple","wp-a3-gate"]},{id:"wp-a1-gate",area:"area1",name:"Gerbang Lab Inersia",pos:[-14,0,-2],connections:["wp-hub-to-a1","wp-a1-station"]},{id:"wp-a1-station",area:"area1",name:"Stasiun Uji Inersia",pos:[-22,0,-4],connections:["wp-a1-gate","wp-a1-track"]},{id:"wp-a1-track",area:"area1",name:"Ujung Lintasan Licin",pos:[-28,0,-4],connections:["wp-a1-station"]},{id:"wp-a2-gate",area:"area2",name:"Gerbang Lintasan Gaya",pos:[0,0,-16],connections:["wp-hub-to-a2","wp-a2-station"]},{id:"wp-a2-station",area:"area2",name:"Stasiun Uji Gerobak Beban",pos:[0,0,-24],connections:["wp-a2-gate","wp-a2-weights"]},{id:"wp-a2-weights",area:"area2",name:"Meja Kalibrasi Beban",pos:[5,0,-26],connections:["wp-a2-station"]},{id:"wp-a3-gate",area:"area3",name:"Gerbang Pangkalan Roket",pos:[14,0,-2],connections:["wp-hub-to-a3","wp-a3-station"]},{id:"wp-a3-station",area:"area3",name:"Stasiun Peluncur Roket Air",pos:[22,0,-4],connections:["wp-a3-gate","wp-a3-dock"]},{id:"wp-a3-dock",area:"area3",name:"Dermaga Uji Perahu Tolak",pos:[26,0,-10],connections:["wp-a3-station"]}],_p=[{id:"npc-isaac",name:"Prof. Isaac",role:"Pemandu Utama & Peneliti Alam",area:"hub",pos:[0,0,-5.8],rotY:0,waypointNear:"wp-hub-apple"},{id:"npc-ino",name:"Ino",role:"Asisten Uji Inersia",area:"area1",pos:[-22,0,-6.8],rotY:0,waypointNear:"wp-a1-station"},{id:"npc-meka",name:"Meka",role:"Teknisi Gaya & Percepatan",area:"area2",pos:[0,0,-26.8],rotY:0,waypointNear:"wp-a2-station"},{id:"npc-aksa",name:"Aksa",role:"Insinyur Aksi-Reaksi",area:"area3",pos:[22,0,-6.8],rotY:0,waypointNear:"wp-a3-station"}],vp=[{id:"gate-area1",name:"Gerbang Hukum I (Inersia)",pos:[-11,0,-2],areaTarget:"area1",requiresQuest:"quest-hub"},{id:"gate-area2",name:"Gerbang Hukum II (F = m · a)",pos:[0,0,-13],areaTarget:"area2",requiresQuest:"quest-area1"},{id:"gate-area3",name:"Gerbang Hukum III (Aksi-Reaksi)",pos:[11,0,-2],areaTarget:"area3",requiresQuest:"quest-area2"}];class xp{constructor(e,t=null,n=null){this.camera=e,this.dolly=t,this.scene=n,this.eyeHeight=1.6,this.currentWaypointId="wp-hub-center",this.isGliding=!1,this.glideProgress=0,this.glideDuration=1.2,this.startPos=new k,this.targetPos=new k,this.targetWaypointId=null,this.onGlideComplete=null;const a=ei.find(s=>s.id===this.currentWaypointId);a&&(this.dolly?(this.dolly.position.set(a.pos[0],0,a.pos[2]),this.camera.position.set(0,this.eyeHeight,0)):this.camera.position.set(a.pos[0],this.eyeHeight,a.pos[2]))}getCurrentWaypoint(){return ei.find(e=>e.id===this.currentWaypointId)}moveToWaypoint(e,t=null){if(this.isGliding)return!1;const n=ei.find(a=>a.id===e);return n?(this.isGliding=!0,this.glideProgress=0,this.dolly?(this.startPos.copy(this.dolly.position),this.targetPos.set(n.pos[0],0,n.pos[2])):(this.startPos.copy(this.camera.position),this.targetPos.set(n.pos[0],this.eyeHeight,n.pos[2])),this.targetWaypointId=e,this.onGlideComplete=t,Nt.playStep(),!0):!1}teleportTo(e){const t=ei.find(n=>n.id===e);return t?(this.isGliding=!1,this.currentWaypointId=e,this.dolly?this.dolly.position.set(t.pos[0],0,t.pos[2]):this.camera.position.set(t.pos[0],this.eyeHeight,t.pos[2]),!0):!1}moveForwardAlongView(){if(this.isGliding)return!1;const e=this.getCurrentWaypoint();if(!e||!e.connections||e.connections.length===0)return!1;const t=new k;this.camera.getWorldDirection(t),t.y=0,t.normalize();let n=null,a=-1/0;for(const s of e.connections){const o=ei.find(c=>c.id===s);if(!o)continue;const r=new k(o.pos[0]-e.pos[0],0,o.pos[2]-e.pos[2]).normalize(),l=t.dot(r);l>a&&(a=l,n=s)}return n&&a>-.5?this.moveToWaypoint(n):!1}update(e){if(!this.isGliding)return;if(this.glideProgress+=e/this.glideDuration,this.glideProgress>=1){this.glideProgress=1,this.dolly?this.dolly.position.copy(this.targetPos):this.camera.position.copy(this.targetPos),this.isGliding=!1,this.currentWaypointId=this.targetWaypointId,this.onGlideComplete&&this.onGlideComplete(this.currentWaypointId);return}const t=this.glideProgress,n=t<.5?2*t*t:-1+(4-2*t)*t;this.dolly?(this.dolly.position.lerpVectors(this.startPos,this.targetPos,n),this.dolly.position.y=0):(this.camera.position.lerpVectors(this.startPos,this.targetPos,n),this.camera.position.y=this.eyeHeight)}}class Mp{constructor(e,t){this.scene=e,this.camera=t,this.waypointMeshes=[],this.gateMeshes=[],this.landmarkMeshes=[],this.worldLabel=new mp(e),this.setupLighting(),this.setupSky(),this.setupTerrains(),this.setupWaypoints(),this.setupLandmarks(),this.setupGates()}setupLighting(){const e=new ap(Qn(Se.skyZenith),Qn(Se.groundHub),1.3);e.position.set(0,50,0),this.scene.add(e);const t=new op(16775142,.8);t.position.set(20,40,20),this.scene.add(t)}setupSky(){const e=Ft.get("assets/sky.png"),t=new ra(80,80,60,32,1,!0),n=new Dt({map:e,side:At,fog:!1}),a=new je(t,n);a.position.y=20,this.scene.add(a)}setupTerrains(){const e=Ft.get("assets/ground-hub.png");e.wrapS=Vt,e.wrapT=Vt,e.repeat.set(4,4);const t=new ha(16,32),n=new En({map:e}),a=new je(t,n);a.rotation.x=-Math.PI/2,a.position.set(0,.01,0),this.scene.add(a);const s=Ft.get("assets/ground-area1.png");s.wrapS=Vt,s.wrapT=Vt,s.repeat.set(3,3);const o=new Rt(24,24),r=new En({map:s}),l=new je(o,r);l.rotation.x=-Math.PI/2,l.position.set(-22,.01,-4),this.scene.add(l);const c=Ft.get("assets/ground-area2.png");c.wrapS=Vt,c.wrapT=Vt,c.repeat.set(2,6);const u=new Rt(16,28),h=new En({map:c}),f=new je(u,h);f.rotation.x=-Math.PI/2,f.position.set(0,.01,-24),this.scene.add(f);const m=Ft.get("assets/ground-area3.png");m.wrapS=Vt,m.wrapT=Vt,m.repeat.set(3,3);const _=new Rt(24,24),g=new En({map:m}),p=new je(_,g);p.rotation.x=-Math.PI/2,p.position.set(22,.01,-4),this.scene.add(p)}setupWaypoints(){const e=new ra(.7,.75,.1,24),t=new En({color:Qn(Se.buttonHover)});ei.forEach(n=>{const a=new je(e,t.clone());a.position.set(n.pos[0],.05,n.pos[2]),a.name=`Waypoint_${n.id}`,a.userData={type:"waypoint",waypointId:n.id,name:n.name},this.scene.add(a),this.waypointMeshes.push(a)})}setupLandmarks(){const e=Ft.get("assets/landmark-tree.png"),t=new Rt(5,5.5),n=new Dt({map:e,transparent:!0,side:mt}),a=new je(t,n);a.position.set(0,2.75,-6.5),a.name="Landmark_Tree",a.userData={type:"landmark",name:"Pohon Apel Legendaris"},this.scene.add(a),this.landmarkMeshes.push(a);const s=Ft.get("assets/landmark-airtrack.png"),o=new Dt({map:s,transparent:!0,side:mt}),r=new je(new Rt(4.5,2.4),o);r.position.set(-25,1.2,-4),r.name="Landmark_AirTrack",r.userData={type:"landmark",name:"Meja Lintasan Udara (Inersia)"},this.scene.add(r),this.landmarkMeshes.push(r);const l=Ft.get("assets/landmark-carttrack.png"),c=new Dt({map:l,transparent:!0,side:mt}),u=new je(new Rt(3.6,2.2),c);u.position.set(0,1.1,-27),u.name="Landmark_CartTrack",u.userData={type:"landmark",name:"Rel Gerobak Percepatan F = m·a"},this.scene.add(u),this.landmarkMeshes.push(u);const h=Ft.get("assets/landmark-rocketpad.png"),f=new Dt({map:h,transparent:!0,side:mt}),m=new je(new Rt(3,3.4),f);m.position.set(25,1.7,-4),m.name="Landmark_RocketPad",m.userData={type:"landmark",name:"Pangkalan Peluncuran Roket Air"},this.scene.add(m),this.landmarkMeshes.push(m)}setupGates(){const e=new In(.4,3.2,.4),t=new En({color:Qn(Se.woodBrown)}),n=new In(3.2,.5,.4);vp.forEach(a=>{const s=new Cn;s.position.set(a.pos[0],0,a.pos[2]);const o=new je(e,t);o.position.set(-1.4,1.6,0);const r=new je(e,t);r.position.set(1.4,1.6,0);const l=new je(n,t);l.position.set(0,3,0),s.add(o,r,l),s.name=`Gate_${a.id}`,s.userData={type:"gate",gateId:a.id,name:a.name,requiresQuest:a.requiresQuest,locked:!0},this.scene.add(s),this.gateMeshes.push(s)})}unlockGate(e){this.gateMeshes.forEach(t=>{t.userData.requiresQuest===e&&(t.userData.locked=!1,t.children.forEach(n=>{n.material=new En({color:Qn(Se.teal)})}))})}getInteractiveObjects(){return[...this.waypointMeshes,...this.landmarkMeshes]}update(e){this.landmarkMeshes.forEach(a=>{a.lookAt(e.x,a.position.y,e.z)});let t=null,n=36;this.landmarkMeshes.forEach(a=>{const s=a.position.distanceToSquared(e);s<n&&(n=s,t={name:a.userData.name,pos:a.position})}),t?(this.worldLabel.setText(t.name),this.worldLabel.showAt(t.pos,this.camera)):this.worldLabel.hide()}}const Sp=[{id:"npc-isaac",nama:"Prof. Isaac",peran:"Pemandu Utama & Peneliti Alam",potret:"assets/portrait-isaac.png",sprite:"assets/npc-isaac.png",sapaan:"Salam penjelajah muda! Selamat datang di Taman Eksperimen Newton. Mari kita pelajari tiga hukum agung yang menggerakkan seluruh semesta.",fallback:"Pertanyaan menarik, namun di luar catatan eksperimenku di taman ini. Coba tanyakan hal berikut ya!",petunjuk:["Awali dengan menjelajahi Lab Inersia di sebelah barat untuk memahami Hukum I.","Selesaikan tantangan di setiap stasiun untuk membuka gerbang area berikutnya.","Bicaralah dengan para asisten lab di tiap stasiun, mereka punya petunjuk kunci!"],topik:[{id:"isaac-hukum-apa",pertanyaan:"Apa itu Hukum Newton?",kataKunci:["apa itu","pengertian","hukum newton","definisi","gerak"],sinonim:["konsep dasar","tiga hukum gerak","hukum fisika"],jawaban:["Hukum Newton adalah tiga prinsip fisika dasar yang menjelaskan hubungan antara gaya yang bekerja pada suatu benda dan gerak benda tersebut.","Hukum ini dirumuskan oleh Sir Isaac Newton pada tahun 1687 dan menjadi pondasi mekanika klasik hingga hari ini."],lanjutan:["isaac-tiga-hukum","isaac-quest-awal"]},{id:"isaac-tiga-hukum",pertanyaan:"Apa saja 3 Hukum Newton?",kataKunci:["tiga hukum","macam hukum","pembagian","semua hukum"],sinonim:["hukum 1 2 3","ringkasan hukum","daftar hukum"],jawaban:["Hukum I tentang Kelembaman atau inersia benda. Benda cenderung mempertahankan keadaan diam atau gerak lurusnya.","Hukum II tentang Gaya dan Percepatan: F sama dengan m dikali a. Makin besar gaya, percepatan makin besar.","Hukum III tentang Aksi dan Reaksi: setiap ada gaya aksi, pasti timbul gaya reaksi yang sama besar dan berlawanan arah."],lanjutan:["isaac-hukum-1","isaac-hukum-2","isaac-hukum-3"]},{id:"isaac-hukum-1",pertanyaan:"Inti Hukum I Newton?",kataKunci:["hukum 1","hukum pertama","kelembaman","inersia"],sinonim:["hukum inersia","benda diam","resultan nol"],jawaban:["Jika resultan gaya pada benda sama dengan nol, benda yang diam akan tetap diam.","Sedangkan benda yang sedang bergerak akan terus bergerak lurus beraturan tanpa henti, kecuali ada gaya luar yang mempengaruhinya."],lanjutan:["isaac-hukum-2","isaac-quest-awal"]},{id:"isaac-hukum-2",pertanyaan:"Inti Hukum II Newton?",kataKunci:["hukum 2","hukum kedua","percepatan","rumus f ma"],sinonim:["gaya dan massa","hubungan f dan a","massa benda"],jawaban:["Percepatan suatu benda berbanding lurus dengan resultan gaya yang bekerja padanya, dan berbanding terbalik dengan massa benda tersebut.","Rumus matematisnya sangat terkenal: Sigma F sama dengan m dikalikan a."],lanjutan:["isaac-hukum-3","isaac-quest-awal"]},{id:"isaac-hukum-3",pertanyaan:"Inti Hukum III Newton?",kataKunci:["hukum 3","hukum ketiga","aksi reaksi","pasangan gaya"],sinonim:["f aksi f reaksi","gaya tolak","hukum reaksi"],jawaban:["Ketika benda A memberikan gaya aksi pada benda B, maka benda B akan memberikan gaya reaksi yang sama besar ke benda A dengan arah berlawanan.","Ingat, gaya aksi dan reaksi selalu bekerja pada dua benda yang berbeda, sehingga tidak saling meniadakan."],lanjutan:["isaac-miskonsepsi","isaac-quest-awal"]},{id:"isaac-miskonsepsi",pertanyaan:"Miskonsepsi umum tentang gaya?",kataKunci:["miskonsepsi","salah paham","kesalahan","keliru"],sinonim:["mitos fisika","kesalahan umum","gaya habis"],jawaban:["Banyak yang mengira benda butuh gaya terus-menerus agar tetap bergerak. Itu keliru!","Di ruang hampa tanpa gesekan, benda akan terus meluncur selamanya tanpa perlu dorongan tambahan sama sekali."],lanjutan:["isaac-apel-sejarah","isaac-quest-awal"]},{id:"isaac-apel-sejarah",pertanyaan:"Kisah buah apel jatuh?",kataKunci:["apel jatuh","sejarah","cerita apel","pohon apel"],sinonim:["gravitasi apel","inspirasi newton","dongeng apel"],jawaban:["Legenda mengatakan saya terinspirasi saat melihat buah apel jatuh lurus ke tanah di kebun keluarga di Woolsthorpe.","Pikiran saya tergelitik: apakah gaya penarik apel itu juga gaya yang menahan Bulan mengitari Bumi? Jawabannya ya, gravitasi!"],lanjutan:["isaac-quest-awal","isaac-tiga-hukum"]},{id:"isaac-quest-awal",pertanyaan:"Apa misi pertamaku?",kataKunci:["misi pertama","tugas awal","cara mulai","quest hub","gerbang"],sinonim:["langkah pertama","jalan ke mana","mulai dari mana"],jawaban:["Dekati stasiun barat: Lab Inersia yang dipimpin oleh Asisten Ino.","Bicaralah dengan Ino dan selesaikan tantangan Hukum I untuk mendapatkan Kunci Pengetahuan pertama!"],lanjutan:["isaac-hukum-1","isaac-tiga-hukum"]}]},{id:"npc-ino",nama:"Ino",peran:"Asisten Uji Inersia",potret:"assets/portrait-ino.png",sprite:"assets/npc-ino.png",sapaan:"Hai! Selamat datang di Lab Inersia. Di sini kita meneliti sifat alami benda mempertahankan kondisinya!",fallback:"Maaf, topiknya di luar materi inersia dan gesekan. Coba pilih pertanyaan ini ya!",petunjuk:["Ingat kata kunci kelembaman: malas berubah keadaan gerak.","Saat bus mengerem, tubuhmu ingin tetap maju karena mempertahankan kecepatan sebelumnya.","Gesekan adalah gaya luar yang membuat benda melambat di dunia nyata."],topik:[{id:"ino-kelembaman-apa",pertanyaan:"Apa itu kelembaman (inersia)?",kataKunci:["kelembaman","inersia","pengertian kelembaman","apa itu inersia"],sinonim:["sifat lembam","malas bergerak","kecenderungan benda"],jawaban:["Inersia atau kelembaman adalah kecenderungan alami setiap benda untuk menolak perubahan keadaan geraknya.","Benda diam ingin tetap diam, dan benda yang bergerak lurus ingin terus bergerak lurus dengan kecepatan konstan."],lanjutan:["ino-contoh-sehari","ino-faktor-inersia"]},{id:"ino-faktor-inersia",pertanyaan:"Apa penentu besar inersia?",kataKunci:["faktor inersia","massa inersia","penentu kelembaman","berat"],sinonim:["massa benda","kenapa susah didorong","ukuran inersia"],jawaban:["Ukuran inersia suatu benda ditentukan semata-mata oleh massanya!","Makin besar massa benda (misalnya gajah dibanding bola tenis), makin besar kelembamannya, sehingga makin sulit diubah geraknya."],lanjutan:["ino-contoh-sehari","ino-gesekan-peran"]},{id:"ino-contoh-sehari",pertanyaan:"Contoh inersia sehari-hari?",kataKunci:["contoh inersia","sehari-hari","contoh kelembaman","bus direm"],sinonim:["kejadian nyata","mobil ngerem","tubuh terdorong"],jawaban:["Saat kamu naik bus yang tiba-tiba direm mendadak, tubuhmu terdorong ke depan karena tubuhmu mempertahankan gerak majunya.","Sebaliknya, saat bus diam tiba-tiba digas kencang, tubuhmu terdorong ke belakang karena ingin tetap diam di tempat."],lanjutan:["ino-kertas-koin","ino-gesekan-peran"]},{id:"ino-kertas-koin",pertanyaan:"Kenapa koin di atas kertas tidak jatuh?",kataKunci:["koin kertas","trik koin","tarik cepat","gelas koin"],sinonim:["eksperimen koin","koin jatuh ke gelas","menarik taplak"],jawaban:["Jika selembar kertas di bawah koin ditarik sangat cepat, gaya gesek hanya bekerja dalam waktu sepersekian detik yang amat singkat.","Gaya itu tidak cukup mengalahkan kelembaman koin, sehingga koin tetap diam di tempat dan jatuh lurus ke dalam gelas!"],lanjutan:["ino-gesekan-peran","ino-miskonsepsi"]},{id:"ino-gesekan-peran",pertanyaan:"Kenapa benda di bumi selalu berhenti?",kataKunci:["kenapa berhenti","benda berhenti","peran gesekan","udara"],sinonim:["gaya gesek","perlambatan","hambatan udara"],jawaban:["Karena di bumi selalu ada gaya gesekan dengan lantai dan hambatan udara yang menjadi gaya luar penahan gerak.","Jika kita hilangkan gesekan (seperti pada meja bantalan udara ini atau di ruang angkasa), benda tak akan pernah berhenti!"],lanjutan:["ino-miskonsepsi","ino-tips-tantangan"]},{id:"ino-miskonsepsi",pertanyaan:"Miskonsepsi tentang resultan gaya nol?",kataKunci:["resultan gaya nol","sigma f nol","diam atau bergerak","keliru"],sinonim:["apakah f=0 selalu diam","keadaan seimbang","glbb"],jawaban:["Banyak orang mengira jika Sigma F = 0 maka benda pasti diam. Itu salah paham!","Sigma F = 0 berarti tidak ada percepatan (a = 0). Benda bisa dalam keadaan diam ATAU bergerak lurus dengan kecepatan konstan (GLB)."],lanjutan:["ino-tips-tantangan","ino-kelembaman-apa"]},{id:"ino-tips-tantangan",pertanyaan:"Trik menyelesaikan tantangan Lab ini?",kataKunci:["tips tantangan","cara jawab","soal lab inersia","bantuan"],sinonim:["cara menang","solusi quest 1","petunjuk soal"],jawaban:["Amati kondisi resultan gayanya. Tanyakan pada dirimu: apakah ada gaya luar bersih yang bekerja?","Ingat selalu bahwa benda akan mempertahankan status quo geraknya selama resultan gayanya nol!"],lanjutan:["ino-contoh-sehari","ino-kertas-koin"]},{id:"ino-sabuk-pengaman",pertanyaan:"Mengapa sabuk pengaman mobil penting?",kataKunci:["sabuk pengaman","seatbelt","keselamatan mobil","tabrakan"],sinonim:["fungsi sabuk","rem mendadak mobil","kecelakaan"],jawaban:["Saat mobil bertabrakan dan berhenti seketika, tubuh penumpang tetap melaju secepat laju mobil semula karena kelembaman.","Sabuk pengaman memberikan gaya luar penahan yang aman sehingga tubuhmu tidak membentur kaca depan."],lanjutan:["ino-kelembaman-apa","ino-tips-tantangan"]}]},{id:"npc-meka",nama:"Meka",peran:"Teknisi Gaya & Percepatan",potret:"assets/portrait-meka.png",sprite:"assets/npc-meka.png",sapaan:"Halo kawan! Siap mengutak-atik gerobak beban? Di sini rumus F = m · a menjadi nyata dalam lintasan balap!",fallback:"Topik itu belum ada di kalkulasi bengkelku. Coba pilih tombol pertanyaan seputar F = m · a berikut!",petunjuk:["Percepatan berbanding lurus dengan gaya: gaya dobel, percepatan dobel.","Percepatan berbanding terbalik dengan massa: massa dobel, percepatan jadi setengahnya.","Gunakan satuan standar: Gaya dalam Newton (N), massa dalam kilogram (kg), percepatan dalam m/s²."],topik:[{id:"meka-fma-apa",pertanyaan:"Apa makna persamaan F = m · a?",kataKunci:["f ma","rumus f ma","makna rumus","persamaan hukum 2"],sinonim:["penjelasan rumus","gaya massa percepatan","hukum ii"],jawaban:["Gaya (F) yang bekerja pada benda menghasilkan percepatan (a) yang searah dengan gaya tersebut.","Massa (m) bertindak sebagai hambatan: benda yang berat butuh gaya lebih besar untuk mencapai percepatan yang sama."],lanjutan:["meka-hubungan-variabel","meka-satuan-newton"]},{id:"meka-hubungan-variabel",pertanyaan:"Hubungan Gaya, Massa, & Percepatan?",kataKunci:["hubungan variabel","sebanding terbalik","pengaruh massa","pengaruh gaya"],sinonim:["grafik f ma","hubungan f dan a","massa bertambah"],jawaban:["Jika massa tetap: makin besar gaya dorong, makin besar percepatan benda (berbanding lurus).","Jika gaya dorong tetap: makin berat beban pada gerobak, percepatannya justru makin kecil (berbanding terbalik)."],lanjutan:["meka-contoh-hitung","meka-satuan-newton"]},{id:"meka-satuan-newton",pertanyaan:"Dari mana satuan Newton (N) berasal?",kataKunci:["satuan newton","definisi 1 newton","satuan gaya","kg m s2"],sinonim:["arti 1 n","konversi newton","satuan si gaya"],jawaban:["Satu Newton didefinisikan sebagai besar gaya yang diperlukan untuk memberi percepatan 1 m/s² pada massa sebesar 1 kg.","Maka secara dimensi fisika: 1 N sama persis dengan 1 kg·m/s²."],lanjutan:["meka-contoh-hitung","meka-miskonsepsi"]},{id:"meka-contoh-hitung",pertanyaan:"Bagaimana contoh perhitungannya?",kataKunci:["contoh hitung","soal hitungan","cara menghitung a","kalkulasi"],sinonim:["rumus cepat","mencari percepatan","contoh angka"],jawaban:["Misalkan gerobak massanya 4 kg ditarik gaya 20 N pada lantai licin.","Maka percepatannya adalah: a = F dibagi m, yaitu 20 N dibagi 4 kg = 5 m/s²!"],lanjutan:["meka-miskonsepsi","meka-tips-tantangan"]},{id:"meka-miskonsepsi",pertanyaan:"Miskonsepsi berat vs massa?",kataKunci:["massa vs berat","perbedaan massa berat","massa dan berat","gravitasi"],sinonim:["berat di bulan","apakah massa berubah","timbangan"],jawaban:["Massa adalah jumlah materi benda (tetap di mana pun, dalam kg). Berat adalah gaya gravitasi yang menarik massa itu (W = m · g, dalam Newton).","Di Bulan massamu tetap sama, namun beratmu hanya seperenam karena gravitasi Bulan lebih lemah!"],lanjutan:["meka-dorong-dua-benda","meka-tips-tantangan"]},{id:"meka-dorong-dua-benda",pertanyaan:"Gaya sama dorong mobil vs motor?",kataKunci:["mobil vs motor","gaya sama massa beda","dorong kendaraan"],sinonim:["perbandingan percepatan","mana lebih cepat melesat"],jawaban:["Dengan gaya dorong mesin yang sama, sepeda motor yang jauh lebih ringan akan melesat dengan percepatan jauh lebih tinggi dibanding mobil berat.","Itulah bukti praktis bahwa percepatan berbanding terbalik dengan massa benda!"],lanjutan:["meka-tips-tantangan","meka-fma-apa"]},{id:"meka-tips-tantangan",pertanyaan:"Trik tantangan gerobak beban?",kataKunci:["trik tantangan","cara lolos lab gaya","petunjuk meka","tips quest 2"],sinonim:["bocoran soal","strategi meka","cara menang lintasan"],jawaban:["Perhatikan rumus a = F / m. Jika soal meminta percepatan tinggi, perbesar gaya dan perkecil massa.","Jika soal meminta percepatan menjadi dua kali lipat dengan gaya tetap, kurangi massa menjadi setengahnya!"],lanjutan:["meka-hubungan-variabel","meka-contoh-hitung"]},{id:"meka-gaya-gesek-hukum2",pertanyaan:"Pengaruh gaya gesek pada Hukum II?",kataKunci:["gaya gesek hukum 2","resultan gaya gesek","sigma f","gesekan kasar"],sinonim:["f gesek","f total","pengurang percepatan"],jawaban:["Huruf F pada rumus adalah Resultan Gaya (Sigma F), yaitu jumlah gaya pendorong dikurangi gaya gesekan!","Jika gaya dorong 30 N dan gaya gesek 10 N pada massa 5 kg, maka percepatannya (30-10)/5 = 4 m/s²."],lanjutan:["meka-contoh-hitung","meka-tips-tantangan"]}]},{id:"npc-aksa",nama:"Aksa",peran:"Insinyur Aksi-Reaksi",potret:"assets/portrait-aksa.png",sprite:"assets/npc-aksa.png",sapaan:"Selamat datang di Pangkalan Roket! Di stasiun pamungkas ini, kita uji kekuatan timbal balik: setiap aksi memicu reaksi!",fallback:"Pertanyaan tersebut belum masuk dalam modul propulsi roketku. Coba tanyakan topik aksi-reaksi ini ya!",petunjuk:["Gaya aksi dan gaya reaksi selalu bernilai sama besar dan arahnya berlawanan 180 derajat.","Kunci utama: gaya aksi dan reaksi bekerja pada DUA BENDA BERBEDA, bukan satu benda.","Semburan air ke bawah mendorong badan roket melesat tegak ke atas!"],topik:[{id:"aksa-definisi-aksi-reaksi",pertanyaan:"Apa bunyi Hukum III Newton?",kataKunci:["hukum 3","aksi reaksi","bunyi hukum 3","definisi aksi reaksi"],sinonim:["f aksi = -f reaksi","hukum ketiga","pasangan gaya"],jawaban:["Untuk setiap aksi, selalu ada reaksi yang sama besar dan berlawanan arah.","Artinya, jika benda 1 mendorong benda 2 dengan gaya F, benda 2 serentak membalas mendorong benda 1 dengan gaya -F."],lanjutan:["aksa-roket-terbang","aksa-ciri-pasangan"]},{id:"aksa-ciri-pasangan",pertanyaan:"Apa ciri khas pasangan aksi-reaksi?",kataKunci:["ciri aksi reaksi","syarat aksi reaksi","sifat pasangan gaya"],sinonim:["aturan aksi reaksi","kriteria gaya","dua benda berbeda"],jawaban:["Ada tiga ciri mutlak: besarnya persis sama, arahnya berlawanan 180 derajat, dan bekerja pada dua benda yang berbeda!","Karena bekerja pada dua benda berbeda, gaya aksi dan reaksi TIDAK PERNAH saling meniadakan atau menghasilkan resultan nol."],lanjutan:["aksa-miskonsepsi-tiadanya","aksa-roket-terbang"]},{id:"aksa-roket-terbang",pertanyaan:"Kenapa roket air bisa meluncur?",kataKunci:["roket air","cara roket terbang","semburan roket","propulsi"],sinonim:["prinsip roket","daya dorong roket","semburan air"],jawaban:["Udara bertekanan mendorong semburan air keluar lewat nosel ke arah BAWAH (ini gaya aksi).","Semburan air seketika membalas mendorong badan roket ke arah ATAS (ini gaya reaksi), melontarkannya ke udara!"],lanjutan:["aksa-roket-ruang-hampa","aksa-perahu-dayung"]},{id:"aksa-roket-ruang-hampa",pertanyaan:"Apakah roket butuh udara luar?",kataKunci:["roket ruang hampa","butuh udara","dorong udara luar","luar angkasa"],sinonim:["terbang di hampa","vakum roket","menolak udara"],jawaban:["Tidak butuh sama sekali! Ini salah satu salah paham paling populer di dunia sains.","Roket tidak mendorong udara luar; roket mendorong gas buangnya sendiri ke belakang, dan reaksi gas buang mendorong roket ke depan."],lanjutan:["aksa-perahu-dayung","aksa-miskonsepsi-tiadanya"]},{id:"aksa-perahu-dayung",pertanyaan:"Bagaimana prinsip mendayung perahu?",kataKunci:["mendayung perahu","dayung air","perahu dermaga","lompat perahu"],sinonim:["kayuh dayung","perahu terdorong","aksi reaksi air"],jawaban:["Pendayung mendorong air ke belakang dengan bilah dayung (gaya aksi).","Air membalas mendorong perahu maju ke depan (gaya reaksi). Makin kuat dorongan ke belakang, perahu makin cepat melaju!"],lanjutan:["aksa-orang-berjalan","aksa-ciri-pasangan"]},{id:"aksa-orang-berjalan",pertanyaan:"Bagaimana kita bisa berjalan di tanah?",kataKunci:["orang berjalan","berjalan di tanah","kaki dorong tanah","melangkah"],sinonim:["gaya jalan","menginjak bumi","gesekan kaki"],jawaban:["Saat melangkah, telapak kakimu mendorong permukaan tanah ke arah belakang (gaya aksi).","Bumi membalas mendorong kakimu ke arah depan (gaya reaksi) sehingga tubuhmu bisa maju!"],lanjutan:["aksa-miskonsepsi-tiadanya","aksa-tips-tantangan"]},{id:"aksa-miskonsepsi-tiadanya",pertanyaan:"Paradoks gaya kuda dan kereta?",kataKunci:["kuda dan kereta","kenapa tidak seimbang","saling meniadakan","paradoks kuda"],sinonim:["apakah saling hapus","kenapa bisa bergerak","paradoks newton 3"],jawaban:["Pertanyaan brilian! Gaya tarik kuda bekerja pada KERETA, sedangkan gaya reaksi kereta bekerja pada KUDA.","Kereta bergerak maju karena gaya tarik kuda lebih besar daripada gaya gesek roda kereta dengan tanah. Keduanya tidak bekerja pada benda yang sama!"],lanjutan:["aksa-tips-tantangan","aksa-definisi-aksi-reaksi"]},{id:"aksa-tips-tantangan",pertanyaan:"Trik tantangan Aksi-Reaksi?",kataKunci:["tips tantangan roket","cara jawab lab roket","strategi aksa","quest 3"],sinonim:["bocoran roket","petunjuk aksa","solusi lab 3"],jawaban:["Selalu pasangkan dua benda yang saling berinteraksi: Benda A memberi gaya ke Benda B.","Lalu pastikan vektor arahnya berlawanan tepat 180 derajat: dorong ke kiri dibalas dorong ke kanan, aksi ke bawah dibalas reaksi ke atas!"],lanjutan:["aksa-roket-terbang","aksa-ciri-pasangan"]}]}];class bp{constructor(e){this.scene=e,this.npcMeshes=[],this.npcsDataMap=new Map,Sp.forEach(t=>this.npcsDataMap.set(t.id,t)),this.setupNpcs()}setupNpcs(){const e=Ft.get("assets/icon-quest.png");_p.forEach(t=>{const n=this.npcsDataMap.get(t.id);if(!n)return;const a=new Cn;a.position.set(t.pos[0],0,t.pos[2]);const s=Ft.get(n.sprite),o=new Rt(1.4,1.8),r=new Dt({map:s,transparent:!0,side:mt}),l=new je(o,r);l.position.y=.9,a.add(l);const c=new ha(.6,24),u=new Dt({color:3878703,transparent:!0,opacity:.25}),h=new je(c,u);h.rotation.x=-Math.PI/2,h.position.y=.02,a.add(h);const f=new Rt(.4,.4),m=new Dt({map:e,transparent:!0,side:mt}),_=new je(f,m);_.position.y=2.15,_.name=`QuestIcon_${n.id}`,a.add(_),a.name=`NPC_${n.id}`,a.userData={type:"npc",npcId:n.id,name:n.nama,role:n.peran,hasQuest:!0,spriteMesh:l,questMesh:_},this.scene.add(a),this.npcMeshes.push(a)})}getInteractiveObjects(){return this.npcMeshes}getNpcData(e){return this.npcsDataMap.get(e)}setQuestActive(e,t){const n=this.npcMeshes.find(a=>a.userData.npcId===e);n&&(n.userData.hasQuest=t,n.userData.questMesh.visible=t)}update(e,t){this.npcMeshes.forEach(n=>{n.lookAt(e.x,n.position.y,e.z);const a=n.userData.spriteMesh,s=1+Math.sin(t*2.5+n.position.x)*.02;a.scale.set(1,s,1);const o=n.userData.questMesh;o.visible&&(o.position.y=2.15+Math.sin(t*3.5)*.08)})}matchTopic(e,t){const n=this.getNpcData(e);if(!n||!t)return null;const a=t.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").trim(),s=new Set(["apa","apakah","bagaimana","kenapa","mengapa","itu","ini","yang","di","ke","dari","pada","adalah","yaitu","dan","atau","bisa","tolong","jelaskan","dong","sih","ya"]),o=a.split(/\s+/).filter(h=>!s.has(h)&&h.length>2);let r=null,l=0;const c=[];for(const h of n.topik){let f=0;const m=h.pertanyaan.toLowerCase();if((a.includes(m)||m.includes(a))&&(f+=25),h.sinonim)for(const _ of h.sinonim){const g=_.toLowerCase();(a.includes(g)||g.includes(a))&&(f+=20)}if(h.kataKunci)for(const _ of h.kataKunci){const g=_.toLowerCase();if(a.includes(g))f+=10;else for(const p of o)g.includes(p)&&(f+=4)}c.push({topic:h,score:f}),f>l&&(l=f,r=h)}return c.sort((h,f)=>f.score-h.score),l>=8&&r?{matched:!0,topic:r,score:l}:{matched:!1,fallbackText:n.fallback,suggestions:c.slice(0,3).map(h=>h.topic)}}}const yp=[{id:"tp-1",kode:"TP-01",deskripsi:"Memahami dan menganalisis fenomena kelembaman/inersia benda dalam kehidupan sehari-hari (Hukum I Newton)."},{id:"tp-2",kode:"TP-02",deskripsi:"Memprediksi hubungan proporsional antara resultan gaya, massa benda, dan percepatan (Hukum II Newton: F = m · a)."},{id:"tp-3",kode:"TP-03",deskripsi:"Mengidentifikasi pasangan gaya aksi-reaksi yang bekerja pada dua benda berbeda dengan arah berlawanan (Hukum III Newton)."}],vi=[{id:"c-a1-1",area:"area1",tpId:"tp-1",judul:"Tantangan 1: Fenomena Bus Kota",narasi:"Sebuah bus melaju konstan 60 km/jam. Tiba-tiba pengemudi menginjak rem mendadak hingga bus berhenti. Mengapa tubuh penumpang tersentak ke depan?",opsi:[{teks:"Tubuh memiliki kelembaman untuk mempertahankan gerak maju 60 km/jam.",benar:!0,alasan:"Tepat sekali! Sesuai Hukum I Newton, tubuhmu cenderung mempertahankan kecepatan gerak sebelum bus diperlambat oleh rem."},{teks:"Rem bus menghasilkan gaya dorong misterius ke arah depan tubuh.",benar:!1,alasan:"Kurang tepat. Rem bekerja pada roda bus untuk memperlambatnya ke belakang, bukan mendorong penumpang ke depan."},{teks:"Massa tubuh tiba-tiba bertambah besar saat bus mulai berhenti.",benar:!1,alasan:"Keliru. Massa tubuh penumpang adalah besaran konstan dan tidak berubah akibat pengereman."}],petunjuk:"Ingat sifat inersia: benda yang sedang bergerak cenderung ingin terus bergerak lurus beraturan."},{id:"c-a1-2",area:"area1",tpId:"tp-1",judul:"Tantangan 2: Pesawat di Antariksa Hampa",narasi:"Sebuah wahana antariksa melaju di ruang hampa yang jauh dari gravitasi bintang manapun. Jika mesin pendorongnya dimatikan total, apa yang terjadi?",opsi:[{teks:"Wahana terus meluncur lurus dengan kelajuan tetap selamanya.",benar:!0,alasan:"Benar! Di ruang hampa tanpa gesekan udara atau gravitasi (Sigma F = 0), benda bergerak lurus beraturan tanpa henti."},{teks:"Wahana perlahan melambat dan akhirnya berhenti karena gaya habis.",benar:!1,alasan:"Miskonsepsi umum! Gaya bukanlah cairan yang bisa habis; benda hanya melambat jika ada gaya luar penahan seperti gesekan."},{teks:"Wahana seketika berbalik arah kembali ke bumi.",benar:!1,alasan:"Tidak mungkin. Tanpa ada gaya penarik luar, arah gerak benda tidak akan pernah berbalik sendiri."}],petunjuk:"Hukum I menyatakan benda bergerak akan tetap bergerak konstan jika resultan gaya luar bersih nol."},{id:"c-a1-3",area:"area1",tpId:"tp-1",judul:"Tantangan 3: Trik Koin dan Kertas Licin",narasi:"Sebuah koin diletakkan di atas selembar kertas licin yang menutupi bibir gelas kaca. Mengapa koin jatuh ke dalam gelas jika kertas disentak horizontal dengan amat cepat?",opsi:[{teks:"Waktu sentakan amat singkat sehingga gesekan tak sempat menggerakkan koin.",benar:!0,alasan:"Luar biasa! Karena waktu sentakan sangat singkat, gaya gesek impulsif tidak mampu mengatasi inersia koin yang ingin tetap diam."},{teks:"Kertas licin menyedot koin ke bawah dengan gravitasi tambahan.",benar:!1,alasan:"Keliru. Kertas hanya ditarik horizontal dan tidak memberikan tarikan ke bawah."},{teks:"Koin tersebut kehilangan seluruh inersianya saat kertas disentak.",benar:!1,alasan:"Salah. Inersia adalah sifat bawaan massa benda dan tidak pernah hilang."}],petunjuk:"Gaya luar bekerja terlalu singkat untuk mengalahkan kelembaman diam koin."},{id:"c-a2-1",area:"area2",tpId:"tp-2",judul:"Tantangan 1: Menggandakan Gaya Tarik Gerobak",narasi:"Sebuah gerobak beban 5 kg ditarik gaya 10 N sehingga berakselerasi 2 m/s². Jika gaya tarik diperbesar menjadi 20 N pada massa yang sama, percepatannya menjadi:",opsi:[{teks:"4 m/s² (percepatan menjadi 2 kali lipat)",benar:!0,alasan:"Benar! Sesuai rumus a = F / m, percepatan berbanding lurus dengan gaya. Jika gaya digandakan, percepatan juga berlipat ganda."},{teks:"2 m/s² (percepatan tetap sama)",benar:!1,alasan:"Salah. Percepatan hanya tetap jika gaya penarik tidak diubah."},{teks:"1 m/s² (percepatan berkurang menjadi setengahnya)",benar:!1,alasan:"Keliru. Memperbesar gaya dorong akan mempercepat laju, bukan memperlambatnya."}],petunjuk:"Perhatikan hubungan sebanding antara resultan gaya F dan percepatan a pada massa m konstan."},{id:"c-a2-2",area:"area2",tpId:"tp-2",judul:"Tantangan 2: Menambah Muatan Batu",narasi:"Gerobak ditarik gaya konstan 30 N. Awalnya massa gerobak 3 kg. Lalu gerobak diisi batu hingga massanya menjadi 6 kg. Apa pengaruhnya terhadap percepatan?",opsi:[{teks:"Percepatannya berkurang menjadi setengah dari semula (dari 10 jadi 5 m/s²).",benar:!0,alasan:"Tepat! Percepatan berbanding terbalik dengan massa (a = F / m). Jika massa menjadi 2x lipat, percepatan berkurang menjadi setengahnya."},{teks:"Percepatannya berlipat ganda menjadi dua kali lipat.",benar:!1,alasan:"Salah. Benda yang makin berat lebih lambat menambah kecepatan untuk gaya dorong yang sama."},{teks:"Gerobak berhenti seketika di tempat.",benar:!1,alasan:"Tidak benar. Selama masih ada gaya netto 30 N, gerobak tetap berakselerasi maju."}],petunjuk:"Massa benda berbanding terbalik dengan percepatan yang dihasilkan gaya."},{id:"c-a2-3",area:"area2",tpId:"tp-2",judul:"Tantangan 3: Kalibrasi Percepatan Sasaran",narasi:"Meka ingin gerobak meluncur dengan percepatan tepat 3 m/s². Jika massa total gerobak adalah 4 kg di lintasan tanpa gesekan, berapa gaya yang harus disetel?",opsi:[{teks:"12 Newton (F = 4 kg × 3 m/s²)",benar:!0,alasan:"Sempurna! F = m × a = 4 kg × 3 m/s² = 12 N. Perhitunganmu presisi!"},{teks:"7 Newton (F = 4 + 3)",benar:!1,alasan:"Keliru. Rumus Hukum II adalah perkalian massa dengan percepatan, bukan penjumlahan."},{teks:"1,33 Newton (F = 4 / 3)",benar:!1,alasan:"Salah. Untuk mencari gaya F, rumusnya F = m × a, bukan massa dibagi percepatan."}],petunjuk:"Gunakan rumus dasar Hukum II Newton: F = m dikali a."},{id:"c-a3-1",area:"area3",tpId:"tp-3",judul:"Tantangan 1: Arah Gaya Luncur Roket Air",narasi:"Saat katup roket air dibuka, air menyembur deras keluar nosel ke arah BAWAH. Manakah pasangan gaya reaksi yang melontarkan roket ke atas?",opsi:[{teks:"Semburan air memberikan gaya reaksi dorong ke ATAS pada badan roket.",benar:!0,alasan:"Benar sekali! Benda 1 (roket) mendorong air ke bawah (aksi), maka benda 2 (air) mendorong roket ke atas (reaksi)."},{teks:"Air mendorong udara di luar tanah sehingga udara luar memantul.",benar:!1,alasan:"Salah paham. Roket tidak memerlukan udara luar untuk mendorong; dorongan murni terjadi antara roket dan fluida semburannya."},{teks:"Gravitasi bumi berbalik arah mendorong roket naik.",benar:!1,alasan:"Mustahil. Gravitasi bumi selalu menarik massa ke arah pusat bumi ke bawah."}],petunjuk:"Arah reaksi selalu berlawanan tepat 180 derajat terhadap arah gaya aksi."},{id:"c-a3-2",area:"area3",tpId:"tp-3",judul:"Tantangan 2: Melompat dari Perahu ke Dermaga",narasi:"Seseorang melompat ke depan dari perahu kecil yang terapung di air menuju bibir dermaga. Mengapa perahu justru bergerak mundur ke belakang menjauhi dermaga?",opsi:[{teks:"Kaki pelompat mendorong perahu ke belakang saat melompat ke depan.",benar:!0,alasan:"Tepat! Untuk melontarkan tubuh ke depan (reaksi), telapak kakimu harus mendorong lantai perahu ke arah belakang (aksi)."},{teks:"Air di dermaga menyedot perahu menjauh secara otomatis.",benar:!1,alasan:"Keliru. Gerakan perahu diakibatkan gaya dorong kaki pelompat, bukan tarikan air misterius."},{teks:"Perahu kehilangan daya apungnya saat orang melompat.",benar:!1,alasan:"Salah. Daya apung perahu tetap ada selama massa jenis dan volumenya memenuhi syarat."}],petunjuk:"Identifikasi gaya tolakan kaki pada permukaan perahu saat melompat."},{id:"c-a3-3",area:"area3",tpId:"tp-3",judul:"Tantangan 3: Mendorong Dinding Kokoh",narasi:"Jika kamu mendorong dinding laboratorium sekuat tenaga dengan gaya 50 N ke kanan, berapakah gaya yang dikembalikan oleh dinding kepada telapak tanganmu?",opsi:[{teks:"Tepat 50 N ke arah KIRI.",benar:!0,alasan:"Sempurna! Hukum III Newton menegaskan: besar gaya reaksi selalu sama persis (50 N) dengan arah berlawanan (ke kiri)."},{teks:"0 N, karena dinding diam tidak bergerak.",benar:!1,alasan:"Keliru! Walau dinding diam, dinding tetap memberikan gaya normal penahan yang sama besar pada tanganmu."},{teks:"100 N ke arah kanan.",benar:!1,alasan:"Salah. Gaya reaksi tidak pernah berlipat ganda dan arahnya tidak searah dengan gaya aksi."}],petunjuk:"Gaya reaksi nilainya selalu sama besar dan arahnya 180 derajat berlawanan."}],Ep=[{id:"quest-hub",npcId:"npc-isaac",area:"hub",judul:"Misi 1: Menemui Asisten Ino di Lab Inersia",deskripsi:"Jelajahi jalan setapak menuju Lab Inersia di barat dan pelajari Hukum I Newton.",syaratSelesai:"c-a1-3"},{id:"quest-area1",npcId:"npc-ino",area:"area1",judul:"Misi 2: Menguasai Rumus F = m · a di Lintasan Gaya",deskripsi:"Kunjungi Meka di utara untuk menguji percepatan beban dan gerobak.",syaratSelesai:"c-a2-3"},{id:"quest-area2",npcId:"npc-meka",area:"area2",judul:"Misi 3: Peluncuran Roket Aksi-Reaksi",deskripsi:"Menuju ke Pangkalan Roket di timur bersama Aksa untuk membuktikan Hukum III.",syaratSelesai:"c-a3-3"}],qa="gamevr_newton_v1",_i={version:1,completedChallenges:[],completedQuests:[],collectedKeys:[],challengeAttempts:{},lastSaved:Date.now()},Ya={load(){try{const i=localStorage.getItem(qa);if(!i)return{..._i};const e=JSON.parse(i);return e.version===_i.version?{..._i,...e}:{..._i}}catch(i){return console.warn("Gagal membaca localStorage (mode privat?):",i),{..._i}}},save(i){try{const e={...this.load(),...i,lastSaved:Date.now()};return localStorage.setItem(qa,JSON.stringify(e)),!0}catch(e){return console.warn("Gagal menyimpan ke localStorage:",e),!1}},reset(){try{return localStorage.removeItem(qa),!0}catch(i){return console.warn("Gagal menghapus localStorage:",i),!1}}};class Tp{constructor(){this.completedChallenges=new Set,this.completedQuests=new Set,this.collectedKeys=new Set,this.challengeAttempts={},this.loadProgress()}loadProgress(){const e=Ya.load();e.completedChallenges&&e.completedChallenges.forEach(t=>this.completedChallenges.add(t)),e.completedQuests&&e.completedQuests.forEach(t=>this.completedQuests.add(t)),e.collectedKeys&&e.collectedKeys.forEach(t=>this.collectedKeys.add(t)),this.challengeAttempts=e.challengeAttempts||{}}saveProgress(){Ya.save({completedChallenges:Array.from(this.completedChallenges),completedQuests:Array.from(this.completedQuests),collectedKeys:Array.from(this.collectedKeys),challengeAttempts:this.challengeAttempts})}recordAttempt(e){return this.challengeAttempts[e]=(this.challengeAttempts[e]||0)+1,this.saveProgress(),this.challengeAttempts[e]}getAttempts(e){return this.challengeAttempts[e]||0}completeChallenge(e){this.completedChallenges.add(e);for(const t of Ep)t.syaratSelesai===e&&!this.completedQuests.has(t.id)&&(this.completedQuests.add(t.id),this.collectedKeys.add(`key-${t.area}`));this.saveProgress()}isChallengeCompleted(e){return this.completedChallenges.has(e)}isQuestCompleted(e){return this.completedQuests.has(e)}getKeysCount(){return this.collectedKeys.size}getChallengesForArea(e){return vi.filter(t=>t.area===e)}getNextPendingChallenge(e){return this.getChallengesForArea(e).find(n=>!this.completedChallenges.has(n.id))||null}isAllCompleted(){return vi.every(e=>this.completedChallenges.has(e.id))}generateReportData(){const e=vi.length,t=this.completedChallenges.size,n=yp.map(a=>{const s=vi.filter(r=>r.tpId===a.id),o=s.filter(r=>this.completedChallenges.has(r.id)).length;return{...a,total:s.length,done:o,passed:o===s.length}});return{totalChallenges:e,completed:t,scorePercent:Math.round(t/e*100),keysCollected:this.collectedKeys.size,tpResults:n}}resetProgress(){this.completedChallenges.clear(),this.completedQuests.clear(),this.collectedKeys.clear(),this.challengeAttempts={},Ya.reset()}}function Ap({gameState:i,player:e,panel3D:t,npcManager:n,questManager:a,world:s,renderer:o,camera:r,gameController:l}){const c=new URLSearchParams(window.location.search);c.has("test")&&(console.log("🧪 Debug & Test Hooks Aktif (?test=1 terdeteksi)"),c.has("vrlayout")&&(r.fov=90,r.updateProjectionMatrix(),console.log("🥽 Simulasi tata letak VR aktif (FOV 90°)")),window.__game={getState(){return i.getState()},getContext(){return i.getContext()},goTo(u){return e.teleportTo(u),i.updateContext({currentWaypoint:u}),s.update(r.position),!0},talk(u){return l.openNpcDialog(u)},ask(u,h){return l.selectTopic(u,h)},askText(u,h){return l.submitCustomQuestion(u,h)},answer(u){if(!t.isOpen)return!1;if(t.buttonRects&&t.buttonRects[u]){const h=t.buttonRects[u].btn;if(!h.disabled&&typeof h.onClick=="function")return h.onClick(),!0}return!1},skipAnimations(){e.isGliding&&(e.glideProgress=1,e.dolly?e.dolly.position.copy(e.targetPos):e.camera.position.copy(e.targetPos),e.isGliding=!1,e.currentWaypointId=e.targetWaypointId)},getScreenRects(){const u=t.getScreenRect(),h=o.domElement,f=h.clientWidth||window.innerWidth,m=h.clientHeight||window.innerHeight,_=[];u&&t.buttonRects&&t.buttonRects.forEach((d,E)=>{const b=u.width/t.canvasW,T=u.height/t.canvasH;_.push({index:E,label:d.btn.label,left:Math.round(u.left+d.x*b),top:Math.round(u.top+d.y*T),width:Math.round(d.w*b),height:Math.round(d.h*T)})});let g=null;const p=i.getContext().activeNpcId;if(p){const d=n.npcMeshes.find(E=>E.userData.npcId===p);if(d){const E=new k;d.getWorldPosition(E),E.y+=.9;const b=E.project(r);g={centerX:Math.round((b.x+1)/2*f),centerY:Math.round((-b.y+1)/2*m)}}}return{viewport:{width:f,height:m},panel:u,buttons:_,npc:g,isPanelOpen:t.isOpen}},getPanelLayout(){return t.getLayoutStatus()},getRenderInfo(){return{drawCalls:o.info.render.calls,triangles:o.info.render.triangles,points:o.info.render.points,lines:o.info.render.lines,textures:o.info.memory.textures,geometries:o.info.memory.geometries}},getQuestsStatus(){return{keys:a.getKeysCount(),completedChallenges:Array.from(a.completedChallenges),completedQuests:Array.from(a.completedQuests)}}})}class wp{constructor(){this.container=document.getElementById("canvas-container"),this.loadingScreen=document.getElementById("loading-screen"),this.startScreen=document.getElementById("start-screen"),this.pcInputBar=document.getElementById("pc-input-bar"),this.pcInputText=document.getElementById("pc-input-text"),this.pcInputSubmit=document.getElementById("pc-input-submit"),this.pcVoiceBtn=document.getElementById("pc-voice-btn"),this.progressBar=document.getElementById("loading-progress-bar"),this.loadingStatus=document.getElementById("loading-status"),this.errorOverlay=document.getElementById("error-overlay"),this.scene=null,this.camera=null,this.renderer=null,this.clock=new lp,this.panel3D=null,this.input=null,this.player=null,this.world=null,this.npcManager=null,this.questManager=null,this.isDesktopPointer=window.matchMedia("(pointer: fine)").matches,this.activeNpcId=null,this.currentChallenge=null,this.init()}async init(){try{this.setupThree(),this.setupSystems(),this.bindDOMEvents(),await this.loadAllAssets(),this.loadingScreen.classList.add("hidden"),this.startScreen.classList.remove("hidden"),this.checkVRSupport(),Ap({gameState:Mt,player:this.player,panel3D:this.panel3D,npcManager:this.npcManager,questManager:this.questManager,world:this.world,renderer:this.renderer,camera:this.camera,gameController:this}),this.renderer.setAnimationLoop((e,t)=>this.render(e,t))}catch(e){console.error("Fatal initialization error:",e),this.showError("Gagal memuat engine 3D: "+e.message)}}setupThree(){this.scene=new Qf,this.scene.background=new He(Qn(Se.skyHorizon)),this.camera=new Ot(70,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,1.6,0),this.dolly=new Cn,this.dolly.position.set(0,0,2),this.dolly.add(this.camera),this.scene.add(this.dolly),this.renderer=new Ao({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=tt,this.renderer.xr.enabled=!0,this.container.appendChild(this.renderer.domElement),this.renderer.domElement.addEventListener("webglcontextlost",t=>{t.preventDefault(),this.showError("WebGL Context terputus. Silakan muat ulang halaman.")}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{window.location.reload()});const e=()=>{const t=window.visualViewport?window.visualViewport.width:window.innerWidth,n=window.visualViewport?window.visualViewport.height:window.innerHeight;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n),this.panel3D&&this.panel3D.fitToView()};window.addEventListener("resize",e),window.addEventListener("orientationchange",()=>setTimeout(e,100)),window.visualViewport&&window.visualViewport.addEventListener("resize",e)}setupSystems(){this.panel3D=new pp(this.scene,this.camera,this.renderer),this.input=new gp(this.renderer.domElement,this.camera,this.scene,this.renderer),this.player=new xp(this.camera,this.dolly,this.scene),this.questManager=new Tp;const e=()=>{Nt.init(),this.input._performRaycastTap(new Ge(0,0))},t=this.renderer.xr.getController(0),n=this.renderer.xr.getController(1);t.addEventListener("select",e),n.addEventListener("select",e),this.dolly.add(t),this.dolly.add(n),this.renderer.xr.addEventListener("sessionstart",()=>{this.isVR=!0,this.input.setGazeMode(!0);const a=this.renderer.xr.getSession();a&&a.addEventListener("select",e)}),this.renderer.xr.addEventListener("sessionend",()=>{this.isVR=!1,this.input.setGazeMode(!1)}),this.input.onTap(a=>this.handleWorldTap(a)),this.input.onMoveForward(()=>this.player.moveForwardAlongView()),this.input.onNumberKey(a=>{if(this.panel3D.isOpen&&(this.panel3D.handleRaycast({x:.5,y:.5},!1),this.panel3D.buttonRects[a])){const s=this.panel3D.buttonRects[a].btn;!s.disabled&&s.onClick&&(Nt.playClick(),s.onClick())}}),Mt.onStateChange((a,s,o)=>{this.handleStateChange(a,s,o)})}async loadAllAssets(){const e=[{url:"assets/sky.png",fallbackColor:Se.skyHorizon},{url:"assets/cover.png",fallbackColor:Se.cream},{url:"assets/ground-hub.png",fallbackColor:Se.groundHub},{url:"assets/ground-area1.png",fallbackColor:Se.groundArea1},{url:"assets/ground-area2.png",fallbackColor:Se.groundArea2},{url:"assets/ground-area3.png",fallbackColor:Se.groundArea3},{url:"assets/panel-paper.png",fallbackColor:Se.cream},{url:"assets/portrait-isaac.png",fallbackColor:Se.honeyYellow},{url:"assets/portrait-ino.png",fallbackColor:Se.leafGreen},{url:"assets/portrait-meka.png",fallbackColor:Se.coral},{url:"assets/portrait-aksa.png",fallbackColor:Se.teal},{url:"assets/npc-isaac.png",fallbackColor:Se.honeyYellow},{url:"assets/npc-ino.png",fallbackColor:Se.leafGreen},{url:"assets/npc-meka.png",fallbackColor:Se.coral},{url:"assets/npc-aksa.png",fallbackColor:Se.teal},{url:"assets/icon-key.png",fallbackColor:Se.honeyYellow},{url:"assets/icon-quest.png",fallbackColor:Se.honeyYellow},{url:"assets/landmark-tree.png",fallbackColor:Se.leafGreen},{url:"assets/landmark-airtrack.png",fallbackColor:Se.teal},{url:"assets/landmark-carttrack.png",fallbackColor:Se.coral},{url:"assets/landmark-rocketpad.png",fallbackColor:Se.teal}];await Ft.preloadAll(e,(n,a)=>{const s=Math.round(n*100);this.progressBar&&(this.progressBar.style.width=`${s}%`),this.loadingStatus&&(this.loadingStatus.textContent=`Memuat aset: ${s}%`)}),this.world=new Mp(this.scene,this.camera),this.npcManager=new bp(this.scene);const t=[this.panel3D.mesh,...this.world.getInteractiveObjects(),...this.npcManager.getInteractiveObjects()];this.input.setInteractiveObjects(t)}async checkVRSupport(){const e=document.getElementById("vr-support-status");if("xr"in navigator)try{await navigator.xr.isSessionSupported("immersive-vr")&&e?(e.textContent="✓ Headset WebXR / VR Box Terdeteksi Siap Dimainkan.",e.style.color="#7BC47F"):e&&(e.textContent="ℹ️ Mode Cardboard via WebXR atau Mode Layar 3D siap digunakan.")}catch{e&&(e.textContent="ℹ️ Siap dijalankan dalam Mode Layar 3D Interaktif.")}else e&&(e.textContent="ℹ️ WebXR tidak aktif pada browser ini. Mode Layar 3D siap digunakan.")}bindDOMEvents(){const e=document.getElementById("audio-toggle");e&&e.addEventListener("change",a=>{Nt.muted=!a.target.checked});const t=document.getElementById("btn-enter-vr")||document.getElementById("btn-start-game"),n=document.getElementById("btn-enter-screen")||document.getElementById("btn-start-nonvr");if(t&&t.addEventListener("click",async()=>{if(Nt.init(),Nt.playClick(),this.startScreen&&this.startScreen.classList.add("hidden"),"xr"in navigator)try{const a=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});await this.renderer.xr.setSession(a),this.isVR=!0,this.input.setGazeMode(!0)}catch(a){console.warn("Gagal request WebXR VR:",a)}Mt.transition(yt.EXPLORE),setTimeout(()=>{this.openNpcDialog("npc-isaac")},600)}),n&&n.addEventListener("click",()=>{Nt.init(),Nt.playClick(),this.startScreen&&this.startScreen.classList.add("hidden"),Mt.transition(yt.EXPLORE),setTimeout(()=>{this.openNpcDialog("npc-isaac")},600)}),this.pcInputSubmit&&this.pcInputText){const a=()=>{const s=this.pcInputText.value.trim();s&&this.activeNpcId&&(this.submitCustomQuestion(this.activeNpcId,s),this.pcInputText.value="")};this.pcInputSubmit.addEventListener("click",a),this.pcInputText.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),a())})}this.pcVoiceBtn&&qr.isSupported()&&(this.pcVoiceBtn.classList.remove("hidden"),this.pcVoiceBtn.addEventListener("click",()=>{this.pcVoiceBtn.textContent="Mendengarkan... 🎙️",qr.start(a=>{this.pcVoiceBtn.textContent="Suara 🎙️",this.pcInputText&&(this.pcInputText.value=a),this.activeNpcId&&this.submitCustomQuestion(this.activeNpcId,a)},a=>{this.pcVoiceBtn.textContent="Suara 🎙️",console.warn("Voice recognition error:",a)})}))}handleWorldTap(e){if(!e||!e.object)return;if(e.object.name==="Panel3D_Main"){e.uv&&this.panel3D.handleRaycast(e.uv,!0);return}if(this.panel3D.isOpen)return;const t=e.object.userData;if(t&&t.type==="waypoint"){const a=this.player.getCurrentWaypoint();a&&a.connections.includes(t.waypointId)&&this.player.moveToWaypoint(t.waypointId,()=>{Mt.updateContext({currentWaypoint:t.waypointId})});return}let n=e.object;for(;n&&!n.userData?.type;)n=n.parent;n&&n.userData?.type==="npc"&&this.openNpcDialog(n.userData.npcId)}handleStateChange(e,t,n){this.isDesktopPointer&&(e===yt.DIALOG?this.pcInputBar.classList.remove("hidden"):this.pcInputBar.classList.add("hidden"))}openNpcDialog(e){const t=this.npcManager.getNpcData(e);if(!t)return;this.activeNpcId=e,Mt.transition(yt.DIALOG,{activeNpcId:e});const n=this.npcManager.npcMeshes.find(r=>r.userData.npcId===e),a=n?n.position:null;a&&this.input&&this.input.lookAt(a.x,a.z);const s=t.topik.slice(0,3).map(r=>({label:r.pertanyaan,onClick:()=>this.selectTopic(e,r.id)})),o=this.questManager.getNextPendingChallenge(n?.userData?.area||this._getAreaForNpc(e));o&&s.push({label:"Tantangan ➔",color:Se.buttonHover,onClick:()=>this.startChallenge(o.id)}),s.push({label:"Tutup",onClick:()=>{this.panel3D.hide(),Mt.transition(yt.EXPLORE)}}),this.panel3D.show({title:`${t.nama} — ${t.peran}`,textPages:[t.sapaan],buttons:s,npcFacingPos:a})}_getAreaForNpc(e){return e==="npc-ino"?"area1":e==="npc-meka"?"area2":e==="npc-aksa"?"area3":"hub"}selectTopic(e,t){const n=this.npcManager.getNpcData(e);if(!n)return;const a=n.topik.find(r=>r.id===t);if(!a)return;const s=this.npcManager.npcMeshes.find(r=>r.userData.npcId===e),o=[];a.lanjutan&&a.lanjutan.length>0&&a.lanjutan.forEach(r=>{const l=n.topik.find(c=>c.id===r);l&&o.length<2&&o.push({label:l.pertanyaan,onClick:()=>this.selectTopic(e,l.id)})}),o.push({label:"Tanya Hal Lain",onClick:()=>this.openNpcDialog(e)}),o.push({label:"Tutup",onClick:()=>{this.panel3D.hide(),Mt.transition(yt.EXPLORE)}}),this.panel3D.show({title:a.pertanyaan,textPages:a.jawaban,buttons:o,npcFacingPos:s?s.position:null})}submitCustomQuestion(e,t){const n=this.npcManager.matchTopic(e,t);if(n)if(n.matched&&n.topic)this.selectTopic(e,n.topic.id);else{const a=this.npcManager.npcMeshes.find(o=>o.userData.npcId===e),s=(n.suggestions||[]).map(o=>({label:o.pertanyaan,onClick:()=>this.selectTopic(e,o.id)}));s.push({label:"Kembali",onClick:()=>this.openNpcDialog(e)}),this.panel3D.show({title:"Penjelasan Materi",textPages:[n.fallbackText||"Aku belum mempelajari hal itu. Coba tanyakan topik ini:"],buttons:s,npcFacingPos:a?a.position:null})}}startChallenge(e){const t=vi.find(a=>a.id===e);if(!t)return;this.currentChallenge=t,Mt.transition(yt.CHALLENGE,{activeChallenge:t});const n=t.opsi.map((a,s)=>({label:`${s+1}. ${a.teks}`,onClick:()=>this.submitAnswer(s)}));n.push({label:"Petunjuk",color:Se.buttonBg,onClick:()=>{this.showHint(t)}}),this.panel3D.show({title:t.judul,textPages:[t.narasi],buttons:n})}showHint(e){this.panel3D.show({title:`Petunjuk: ${e.judul}`,textPages:[e.petunjuk],buttons:[{label:"Kembali ke Soal ➔",onClick:()=>this.startChallenge(e.id)}]})}submitAnswer(e){if(!this.currentChallenge)return;const t=this.currentChallenge,n=t.opsi[e];if(!n)return;const a=this.questManager.recordAttempt(t.id),s=n.benar;if(Mt.transition(yt.FEEDBACK),s){Nt.playCorrect(),this.questManager.completeChallenge(t.id),t.id==="c-a1-3"?this.world.unlockGate("quest-area1"):t.id==="c-a2-3"&&this.world.unlockGate("quest-area2");const o=this.questManager.getNextPendingChallenge(t.area),r=[];o?r.push({label:"Tantangan Berikutnya ➔",color:Se.buttonHover,onClick:()=>this.startChallenge(o.id)}):this.questManager.isAllCompleted()&&r.push({label:"Lihat Laporan Akhir 🎓",color:Se.buttonHover,onClick:()=>this.showFinalReport()}),r.push({label:"Jelajah Dunia",onClick:()=>{this.panel3D.hide(),Mt.transition(yt.EXPLORE)}}),this.panel3D.show({title:"Jawaban Benar! 🎉",textPages:[n.alasan,"Hebat! Kamu telah menguasai konsep fisika ini dengan pembuktian logis."],buttons:r})}else{Nt.playIncorrect();const o=[{label:"Coba Lagi ↺",color:Se.buttonHover,onClick:()=>this.startChallenge(t.id)},{label:"Minta Petunjuk",onClick:()=>this.showHint(t)}];a>=3&&o.push({label:"Bahas Bersama Guru",onClick:()=>{const r=t.opsi.find(l=>l.benar);this.panel3D.show({title:"Pembahasan Konsep",textPages:[`Mari kita telaah: ${r.alasan}`,"Konsep ini penting diingat ya. Sekarang kamu boleh melanjutkan misi!"],buttons:[{label:"Lanjutkan ➔",onClick:()=>{this.questManager.completeChallenge(t.id),this.panel3D.hide(),Mt.transition(yt.EXPLORE)}}]})}}),this.panel3D.show({title:"Mari Periksa Kembali 🤔",textPages:[n.alasan,"Jangan berkecil hati! Fisika adalah tentang eksperimen dan perbaikan."],buttons:o})}}showFinalReport(){Nt.playFanfare(),Mt.transition(yt.REPORT);const e=this.questManager.generateReportData(),t=`Selamat! Kamu telah menyelesaikan seluruh 3 Stasiun Eksperimen Taman Newton!

Skor Penguasaan: ${e.scorePercent}%
Kunci Pengetahuan Diraih: ${e.keysCollected}/3 Kunci Kristal Apel.`,n=`Capaian Tujuan Pembelajaran:
`+e.tpResults.map(a=>`• [${a.passed?"LULUS ✅":"PERLU ULANG ⚠️"}] ${a.kode}: ${a.deskripsi.slice(0,60)}…`).join(`

`);this.panel3D.show({title:"Laporan Kelulusan Fisika 🎓",textPages:[t,n],buttons:[{label:"Jelajah Bebas 🧭",onClick:()=>{this.panel3D.hide(),Mt.transition(yt.EXPLORE)}},{label:"Ulangi Misi ↺",onClick:()=>{this.questManager.resetProgress(),this.panel3D.hide(),this.player.teleportTo("wp-hub-center"),Mt.transition(yt.EXPLORE)}}]})}showError(e){this.errorOverlay&&(this.errorOverlay.textContent=e,this.errorOverlay.classList.remove("hidden"))}render(e,t){const n=Math.min(this.clock.getDelta(),.1),a=this.clock.getElapsedTime();this.player&&this.player.update(n),this.input&&this.input.update(n,this.renderer.xr.isPresenting);const s=new k;this.camera.getWorldPosition(s),this.world&&this.world.update(s),this.npcManager&&this.npcManager.update(s,a),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{window.app=new wp});
//# sourceMappingURL=index-CUkCDRD6.js.map
