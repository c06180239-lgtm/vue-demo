(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Za="160",ti={ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jh=0,il=1,Kh=2,Gc=1,Hc=2,pn=3,Ln=0,Ot=1,mn=2,_n=0,Si=1,dr=2,sl=3,rl=4,Zh=5,Vn=100,Jh=101,$h=102,al=103,ol=104,Qh=200,eu=201,tu=202,nu=203,Fa=204,Ba=205,iu=206,su=207,ru=208,au=209,ou=210,lu=211,cu=212,hu=213,uu=214,fu=0,du=1,pu=2,pr=3,mu=4,gu=5,_u=6,vu=7,Vc=0,xu=1,Mu=2,Cn=0,kc=1,Wc=2,Xc=3,Ja=4,Su=5,Yc=6,qc=300,yi=301,Ti=302,za=303,Ga=304,Sr=306,Ha=1e3,Jt=1001,Va=1002,Dt=1003,ll=1004,ta=1005,Xt=1006,Eu=1007,os=1008,Pn=1009,yu=1010,Tu=1011,$a=1012,jc=1013,An=1014,Rn=1015,vn=1016,Kc=1017,Zc=1018,Wn=1020,bu=1021,$t=1023,wu=1024,Au=1025,Xn=1026,bi=1027,Ru=1028,Jc=1029,Cu=1030,$c=1031,Qc=1033,na=33776,ia=33777,sa=33778,ra=33779,cl=35840,hl=35841,ul=35842,fl=35843,eh=36196,dl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,Ml=37813,Sl=37814,El=37815,yl=37816,Tl=37817,bl=37818,wl=37819,Al=37820,Rl=37821,aa=36492,Cl=36494,Pl=36495,Pu=36283,Ll=36284,Dl=36285,Ul=36286,th=3e3,Yn=3001,Lu=3200,Du=3201,nh=0,Uu=1,Yt="",Mt="srgb",xn="srgb-linear",Qa="display-p3",Er="display-p3-linear",mr="linear",nt="srgb",gr="rec709",_r="p3",ii=7680,Il=519,Iu=512,Nu=513,Ou=514,ih=515,Fu=516,Bu=517,zu=518,Gu=519,Nl=35044,Ol="300 es",ka=1035,gn=2e3,vr=2001;class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,Wa=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Hu(i,e){return(i%e+e)%e}function oa(i,e,t){return(1-t)*i+t*e}function Fl(i){return(i&i-1)===0&&i!==0}function Xa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Vu={DEG2RAD:hr};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],u=s[6],b=s[1],x=s[4],T=s[7],D=s[2],C=s[5],A=s[8];return r[0]=o*_+a*b+l*D,r[3]=o*p+a*x+l*C,r[6]=o*u+a*T+l*A,r[1]=c*_+h*b+f*D,r[4]=c*p+h*x+f*C,r[7]=c*u+h*T+f*A,r[2]=d*_+m*b+g*D,r[5]=d*p+m*x+g*C,r[8]=d*u+m*T+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(la.makeScale(e,t)),this}rotate(e){return this.premultiply(la.makeRotation(-e)),this}translate(e,t){return this.premultiply(la.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const la=new Ye;function sh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ku(){const i=xr("canvas");return i.style.display="block",i}const Bl={};function is(i){i in Bl||(Bl[i]=!0,console.warn(i))}const zl=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gl=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bs={[xn]:{transfer:mr,primaries:gr,toReference:i=>i,fromReference:i=>i},[Mt]:{transfer:nt,primaries:gr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Er]:{transfer:mr,primaries:_r,toReference:i=>i.applyMatrix3(Gl),fromReference:i=>i.applyMatrix3(zl)},[Qa]:{transfer:nt,primaries:_r,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gl),fromReference:i=>i.applyMatrix3(zl).convertLinearToSRGB()}},Wu=new Set([xn,Er]),$e={enabled:!0,_workingColorSpace:xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Bs[e].toReference,s=Bs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Bs[i].primaries},getTransfer:function(i){return i===Yt?mr:Bs[i].transfer}};function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class rh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=xr("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xu=0;class ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=cs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yu=0;class Vt extends Kn{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Jt,s=Jt,r=Xt,o=os,a=$t,l=Pn,c=Vt.DEFAULT_ANISOTROPY,h=Yt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=cs(),this.name="",this.source=new ah(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Yn?Mt:Yt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Yn:th}set encoding(e){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Yn?Mt:Yt}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=qc;Vt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(m+1)/2,D=(u+1)/2,C=(h+d)/4,A=(f+_)/4,W=(g+p)/4;return x>T&&x>D?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=A/n):T>D?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=C/s,r=W/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=A/r,s=W/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qu extends Kn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yn?Mt:Yt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ah(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends qu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class oh extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==m||h!==g){let p=1-a;const u=l*d+c*m+h*g+f*_,b=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const D=Math.sqrt(x),C=Math.atan2(D,u*b);p=Math.sin(p*C)/D,a=Math.sin(a*C)/D}const T=a*b;if(l=l*p+d*T,c=c*p+m*T,h=h*p+g*T,f=f*p+_*T,p===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=D,c*=D,h*=D,f*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*m-c*d,e[t+1]=l*g+h*d+c*f-a*m,e[t+2]=c*g+h*m+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f+d*m*g;break;case"YZX":this._x=d*h*f+c*m*g,this._y=c*m*f+d*h*g,this._z=c*h*g-d*m*f,this._w=c*h*f-d*m*g;break;case"XZY":this._x=d*h*f-c*m*g,this._y=c*m*f-d*h*g,this._z=c*h*g+d*m*f,this._w=c*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new R,Hl=new qn;class hs{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(r,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Gs.subVectors(this.max,$i),ri.subVectors(e.a,$i),ai.subVectors(e.b,$i),oi.subVectors(e.c,$i),Sn.subVectors(ai,ri),En.subVectors(oi,ai),Fn.subVectors(ri,oi);let t=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Fn.y,Fn.x,0];return!fa(t,ri,ai,oi,Gs)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,ri,ai,oi,Gs))?!1:(Hs.crossVectors(Sn,En),t=[Hs.x,Hs.y,Hs.z],fa(t,ri,ai,oi,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new R,new R,new R,new R,new R,new R,new R,new R],qt=new R,zs=new hs,ri=new R,ai=new R,oi=new R,Sn=new R,En=new R,Fn=new R,$i=new R,Gs=new R,Hs=new R,Bn=new R;function fa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Bn.fromArray(i,r);const a=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ku=new hs,Qi=new R,da=new R;class yr{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ku.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(da)),this.expandByPoint(Qi.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new R,pa=new R,Vs=new R,yn=new R,ma=new R,ks=new R,ga=new R;class Tr{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pa.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(pa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vs),a=yn.dot(this.direction),l=-yn.dot(Vs),c=yn.lengthSq(),h=Math.abs(1-o*o);let f,d,m,g;if(h>0)if(f=o*l-a,d=o*a-l,g=r*h,f>=0)if(d>=-g)if(d<=g){const _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(pa).addScaledVector(Vs,d),m}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){ma.subVectors(t,e),ks.subVectors(n,e),ga.crossVectors(ma,ks);let o=this.direction.dot(ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,e);const l=a*this.direction.dot(ks.crossVectors(yn,ks));if(l<0)return null;const c=a*this.direction.dot(ma.cross(yn));if(c<0||l+c>o)return null;const h=-a*yn.dot(ga);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,s,r,o,a,l,c,h,f,d,m,g,_,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,f,d,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,f,d,m,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/li.setFromMatrixColumn(e,0).length(),r=1/li.setFromMatrixColumn(e,1).length(),o=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zu,e,Ju)}lookAt(e,t,n){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Tn.crossVectors(n,zt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Tn.crossVectors(n,zt)),Tn.normalize(),Ws.crossVectors(zt,Tn),s[0]=Tn.x,s[4]=Ws.x,s[8]=zt.x,s[1]=Tn.y,s[5]=Ws.y,s[9]=zt.y,s[2]=Tn.z,s[6]=Ws.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],b=n[3],x=n[7],T=n[11],D=n[15],C=s[0],A=s[4],W=s[8],M=s[12],y=s[1],G=s[5],V=s[9],ie=s[13],L=s[2],I=s[6],H=s[10],j=s[14],X=s[3],Y=s[7],K=s[11],re=s[15];return r[0]=o*C+a*y+l*L+c*X,r[4]=o*A+a*G+l*I+c*Y,r[8]=o*W+a*V+l*H+c*K,r[12]=o*M+a*ie+l*j+c*re,r[1]=h*C+f*y+d*L+m*X,r[5]=h*A+f*G+d*I+m*Y,r[9]=h*W+f*V+d*H+m*K,r[13]=h*M+f*ie+d*j+m*re,r[2]=g*C+_*y+p*L+u*X,r[6]=g*A+_*G+p*I+u*Y,r[10]=g*W+_*V+p*H+u*K,r[14]=g*M+_*ie+p*j+u*re,r[3]=b*C+x*y+T*L+D*X,r[7]=b*A+x*G+T*I+D*Y,r[11]=b*W+x*V+T*H+D*K,r[15]=b*M+x*ie+T*j+D*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+r*l*f-s*c*f-r*a*d+n*c*d+s*a*m-n*l*m)+_*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+p*(+t*c*f-t*a*m-r*o*f+n*o*m+r*a*h-n*c*h)+u*(-s*a*h-t*l*f+t*a*d+s*o*f-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],u=e[15],b=f*p*c-_*d*c+_*l*m-a*p*m-f*l*u+a*d*u,x=g*d*c-h*p*c-g*l*m+o*p*m+h*l*u-o*d*u,T=h*_*c-g*f*c+g*a*m-o*_*m-h*a*u+o*f*u,D=g*f*l-h*_*l-g*a*d+o*_*d+h*a*p-o*f*p,C=t*b+n*x+s*T+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=b*A,e[1]=(_*d*r-f*p*r-_*s*m+n*p*m+f*s*u-n*d*u)*A,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*u+n*l*u)*A,e[3]=(f*l*r-a*d*r-f*s*c+n*d*c+a*s*m-n*l*m)*A,e[4]=x*A,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*u+t*d*u)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*u-t*l*u)*A,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*m+t*l*m)*A,e[8]=T*A,e[9]=(g*f*r-h*_*r-g*n*m+t*_*m+h*n*u-t*f*u)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*u+t*a*u)*A,e[11]=(h*a*r-o*f*r-h*n*c+t*f*c+o*n*m-t*a*m)*A,e[12]=D*A,e[13]=(h*_*s-g*f*s+g*n*d-t*_*d-h*n*p+t*f*p)*A,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*A,e[15]=(o*f*s-h*a*s+h*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,d=r*c,m=r*h,g=r*f,_=o*h,p=o*f,u=a*f,b=l*c,x=l*h,T=l*f,D=n.x,C=n.y,A=n.z;return s[0]=(1-(_+u))*D,s[1]=(m+T)*D,s[2]=(g-x)*D,s[3]=0,s[4]=(m-T)*C,s[5]=(1-(d+u))*C,s[6]=(p+b)*C,s[7]=0,s[8]=(g+x)*A,s[9]=(p-b)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const o=li.set(s[4],s[5],s[6]).length(),a=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jt.copy(this);const c=1/r,h=1/o,f=1/a;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=h,jt.elements[5]*=h,jt.elements[6]*=h,jt.elements[8]*=f,jt.elements[9]*=f,jt.elements[10]*=f,t.setFromRotationMatrix(jt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=gn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(a===gn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===vr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gn){const l=this.elements,c=1/(t-e),h=1/(n-s),f=1/(o-r),d=(t+e)*c,m=(n+s)*h;let g,_;if(a===gn)g=(o+r)*f,_=-2*f;else if(a===vr)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new R,jt=new ct,Zu=new R(0,0,0),Ju=new R(1,1,1),Tn=new R,Ws=new R,zt=new R,Vl=new ct,kl=new qn;class br{constructor(e=0,t=0,n=0,s=br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class eo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $u=0;const Wl=new R,ci=new qn,hn=new ct,Xs=new R,es=new R,Qu=new R,ef=new qn,Xl=new R(1,0,0),Yl=new R(0,1,0),ql=new R(0,0,1),tf={type:"added"},nf={type:"removed"};class yt extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new R,t=new br,n=new qn,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ye}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(Xl,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(ql,e)}translateOnAxis(e,t){return Wl.copy(e).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xl,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(es,Xs,this.up):hn.lookAt(Xs,es,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(hn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(tf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new R(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new R,un=new R,_a=new R,fn=new R,hi=new R,ui=new R,jl=new R,va=new R,xa=new R,Ma=new R;let Ys=!1;class Zt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kt.subVectors(e,t),s.cross(Kt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kt.subVectors(s,t),un.subVectors(n,t),_a.subVectors(e,t);const o=Kt.dot(Kt),a=Kt.dot(un),l=Kt.dot(_a),c=un.dot(un),h=un.dot(_a),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,s,r,o,a,l){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static isFrontFacing(e,t,n,s){return Kt.subVectors(n,t),un.subVectors(e,t),Kt.cross(un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Kt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),Zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;hi.subVectors(s,n),ui.subVectors(r,n),va.subVectors(e,n);const l=hi.dot(va),c=ui.dot(va);if(l<=0&&c<=0)return t.copy(n);xa.subVectors(e,s);const h=hi.dot(xa),f=ui.dot(xa);if(h>=0&&f<=h)return t.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(hi,o);Ma.subVectors(e,r);const m=hi.dot(Ma),g=ui.dot(Ma);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ui,a);const p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return jl.subVectors(r,s),a=(f-h)/(f-h+(m-g)),t.copy(s).addScaledVector(jl,a);const u=1/(p+_+d);return o=_*u,a=d*u,t.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Hu(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Sa(o,r,e+1/3),this.g=Sa(o,r,e),this.b=Sa(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=lh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return $e.fromWorkingColorSpace(At.copy(this),e),Math.round(St(At.r*255,0,255))*65536+Math.round(St(At.g*255,0,255))*256+Math.round(St(At.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(At.copy(this),t);const n=At.r,s=At.g,r=At.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Mt){$e.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,s=At.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(qs);const n=oa(bn.h,qs.h,t),s=oa(bn.s,qs.s,t),r=oa(bn.l,qs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new He;He.NAMES=lh;let sf=0;class Pi extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Si,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Ba,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class us extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new R,js=new fe;class en{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)js.fromBufferAttribute(this,t),js.applyMatrix3(e),this.setXY(t,js.x,js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class ch extends en{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hh extends en{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rt extends en{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rf=0;const Wt=new ct,Ea=new yt,fi=new R,Gt=new hs,ts=new hs,xt=new R;class Ut extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sh(e)?hh:ch)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Gt.min,ts.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,ts.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(ts.min),Gt.expandByPoint(ts.max))}Gt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xt.fromBufferAttribute(a,c),l&&(fi.fromBufferAttribute(e,c),xt.add(fi)),s=Math.max(s,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<a;y++)c[y]=new R,h[y]=new R;const f=new R,d=new R,m=new R,g=new fe,_=new fe,p=new fe,u=new R,b=new R;function x(y,G,V){f.fromArray(s,y*3),d.fromArray(s,G*3),m.fromArray(s,V*3),g.fromArray(o,y*2),_.fromArray(o,G*2),p.fromArray(o,V*2),d.sub(f),m.sub(f),_.sub(g),p.sub(g);const ie=1/(_.x*p.y-p.x*_.y);isFinite(ie)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ie),b.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(ie),c[y].add(u),c[G].add(u),c[V].add(u),h[y].add(b),h[G].add(b),h[V].add(b))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let y=0,G=T.length;y<G;++y){const V=T[y],ie=V.start,L=V.count;for(let I=ie,H=ie+L;I<H;I+=3)x(n[I+0],n[I+1],n[I+2])}const D=new R,C=new R,A=new R,W=new R;function M(y){A.fromArray(r,y*3),W.copy(A);const G=c[y];D.copy(G),D.sub(A.multiplyScalar(A.dot(G))).normalize(),C.crossVectors(W,G);const ie=C.dot(h[y])<0?-1:1;l[y*4]=D.x,l[y*4+1]=D.y,l[y*4+2]=D.z,l[y*4+3]=ie}for(let y=0,G=T.length;y<G;++y){const V=T[y],ie=V.start,L=V.count;for(let I=ie,H=ie+L;I<H;I+=3)M(n[I+0]),M(n[I+1]),M(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,f=new R;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)d[g++]=c[m++]}return new en(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new ct,zn=new Tr,Ks=new yr,Zl=new R,di=new R,pi=new R,mi=new R,ya=new R,Zs=new R,Js=new fe,$s=new fe,Qs=new fe,Jl=new R,$l=new R,Ql=new R,er=new R,tr=new R;class q extends yt{constructor(e=new Ut,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Zs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(ya.fromBufferAttribute(f,e),o?Zs.addScaledVector(ya,h):Zs.addScaledVector(ya.sub(t),h))}t.add(Zs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(Ks.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ks,Zl)===null||zn.origin.distanceToSquared(Zl)>(e.far-e.near)**2))&&(Kl.copy(r).invert(),zn.copy(e.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,D=x;T<D;T+=3){const C=a.getX(T),A=a.getX(T+1),W=a.getX(T+2);s=nr(this,u,e,n,c,h,f,C,A,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=a.getX(p),x=a.getX(p+1),T=a.getX(p+2);s=nr(this,o,e,n,c,h,f,b,x,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],u=o[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,D=x;T<D;T+=3){const C=T,A=T+1,W=T+2;s=nr(this,u,e,n,c,h,f,C,A,W),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const b=p,x=p+1,T=p+2;s=nr(this,o,e,n,c,h,f,b,x,T),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function af(i,e,t,n,s,r,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ln,a),l===null)return null;tr.copy(a),tr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(tr);return c<t.near||c>t.far?null:{distance:c,point:tr.clone(),object:i}}function nr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,di),i.getVertexPosition(l,pi),i.getVertexPosition(c,mi);const h=af(i,e,t,n,di,pi,mi,er);if(h){s&&(Js.fromBufferAttribute(s,a),$s.fromBufferAttribute(s,l),Qs.fromBufferAttribute(s,c),h.uv=Zt.getInterpolation(er,di,pi,mi,Js,$s,Qs,new fe)),r&&(Js.fromBufferAttribute(r,a),$s.fromBufferAttribute(r,l),Qs.fromBufferAttribute(r,c),h.uv1=Zt.getInterpolation(er,di,pi,mi,Js,$s,Qs,new fe),h.uv2=h.uv1),o&&(Jl.fromBufferAttribute(o,a),$l.fromBufferAttribute(o,l),Ql.fromBufferAttribute(o,c),h.normal=Zt.getInterpolation(er,di,pi,mi,Jl,$l,Ql,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};Zt.getNormal(di,pi,mi,f.normal),h.face=f}return h}class xe extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(f,2));function g(_,p,u,b,x,T,D,C,A,W,M){const y=T/A,G=D/W,V=T/2,ie=D/2,L=C/2,I=A+1,H=W+1;let j=0,X=0;const Y=new R;for(let K=0;K<H;K++){const re=K*G-ie;for(let le=0;le<I;le++){const k=le*y-V;Y[_]=k*b,Y[p]=re*x,Y[u]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[u]=C>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(le/A),f.push(1-K/W),j+=1}}for(let K=0;K<W;K++)for(let re=0;re<A;re++){const le=d+re+I*K,k=d+re+I*(K+1),J=d+(re+1)+I*(K+1),pe=d+(re+1)+I*K;l.push(le,k,pe),l.push(k,J,pe),X+=6}a.addGroup(m,X,M),m+=X,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=wi(i[t]);for(const s in n)e[s]=n[s]}return e}function of(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function uh(i){return i.getRenderTarget()===null?i.outputColorSpace:$e.workingColorSpace}const ls={clone:wi,merge:Lt};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nt extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wi(e.uniforms),this.uniformsGroups=of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fh extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends fh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,_i=1;class hf extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(gi,_i,e,t);s.layers=this.layers,this.add(s);const r=new Ht(gi,_i,e,t);r.layers=this.layers,this.add(r);const o=new Ht(gi,_i,e,t);o.layers=this.layers,this.add(o);const a=new Ht(gi,_i,e,t);a.layers=this.layers,this.add(a);const l=new Ht(gi,_i,e,t);l.layers=this.layers,this.add(l);const c=new Ht(gi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dh extends Vt{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:yi,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uf extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Yn?Mt:Yt),this.texture=new dh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new Nt({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:_n});r.uniforms.tEquirect.value=t;const o=new q(s,r),a=t.minFilter;return t.minFilter===os&&(t.minFilter=Xt),new hf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ta=new R,ff=new R,df=new Ye;class wn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ta.subVectors(n,t).cross(ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||df.getNormalMatrix(e),s=this.coplanarPoint(Ta).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new yr,ir=new R;class to{constructor(e=new wn,t=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],b=s[13],x=s[14],T=s[15];if(n[0].setComponents(l-r,d-c,p-m,T-u).normalize(),n[1].setComponents(l+r,d+c,p+m,T+u).normalize(),n[2].setComponents(l+o,d+h,p+g,T+b).normalize(),n[3].setComponents(l-o,d-h,p-g,T-b).normalize(),n[4].setComponents(l-a,d-f,p-_,T-x).normalize(),t===gn)n[5].setComponents(l+a,d+f,p+_,T+x).normalize();else if(t===vr)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ir.x=s.normal.x>0?e.max.x:e.min.x,ir.y=s.normal.y>0?e.max.y:e.min.y,ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ph(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function pf(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,h){const f=c.array,d=c.usage,m=f.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,f){const d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(f,c),m.count===-1&&g.length===0&&i.bufferSubData(f,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];t?i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):i.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}class pt extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=e/a,d=t/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const b=u*d-o;for(let x=0;x<c;x++){const T=x*f-r;g.push(T,-b,0),_.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<a;b++){const x=b+c*u,T=b+c*(u+1),D=b+1+c*(u+1),C=b+1+c*u;m.push(x,T,C),m.push(T,D,C)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.width,e.height,e.widthSegments,e.heightSegments)}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
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
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yf=`#ifdef USE_BATCHING
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
#endif`,Tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
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
#endif`,Cf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gf=`vec3 transformedNormal = objectNormal;
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
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yf=`
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
}`,qf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,td=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
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
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
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
#endif`,pd=`struct PhysicalMaterial {
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
}`,md=`
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bd=`#if defined( USE_POINTS_UV )
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
#endif`,wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ad=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cd=`#ifdef USE_MORPHNORMALS
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
#endif`,Pd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
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
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
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
#endif`,Bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qd=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Ip=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Op=`#define PHONG
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
}`,Fp=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Hp=`#define TOON
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
}`,Vp=`uniform float size;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 color;
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
}`,Yp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:_f,alphamap_pars_fragment:vf,alphatest_fragment:xf,alphatest_pars_fragment:Mf,aomap_fragment:Sf,aomap_pars_fragment:Ef,batching_pars_vertex:yf,batching_vertex:Tf,begin_vertex:bf,beginnormal_vertex:wf,bsdfs:Af,iridescence_fragment:Rf,bumpmap_pars_fragment:Cf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Uf,color_fragment:If,color_pars_fragment:Nf,color_pars_vertex:Of,color_vertex:Ff,common:Bf,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Gf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Vf,emissivemap_fragment:kf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:Yf,envmap_fragment:qf,envmap_common_pars_fragment:jf,envmap_pars_fragment:Kf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:ld,envmap_vertex:Jf,fog_vertex:$f,fog_pars_vertex:Qf,fog_fragment:ed,fog_pars_fragment:td,gradientmap_pars_fragment:nd,lightmap_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:dd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:xd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:Sd,map_fragment:Ed,map_pars_fragment:yd,map_particle_fragment:Td,map_particle_pars_fragment:bd,metalnessmap_fragment:wd,metalnessmap_pars_fragment:Ad,morphcolor_vertex:Rd,morphnormal_vertex:Cd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Ud,normal_pars_fragment:Id,normal_pars_vertex:Nd,normal_vertex:Od,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Bd,clearcoat_normal_fragment_maps:zd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Hd,opaque_fragment:Vd,packing:kd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:Yd,dithering_pars_fragment:qd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:Jd,shadowmap_vertex:$d,shadowmask_pars_fragment:Qd,skinbase_vertex:ep,skinning_pars_vertex:tp,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:ap,tonemapping_pars_fragment:op,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:fp,worldpos_vertex:dp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:vp,cube_frag:xp,depth_vert:Mp,depth_frag:Sp,distanceRGBA_vert:Ep,distanceRGBA_frag:yp,equirect_vert:Tp,equirect_frag:bp,linedashed_vert:wp,linedashed_frag:Ap,meshbasic_vert:Rp,meshbasic_frag:Cp,meshlambert_vert:Pp,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Up,meshnormal_vert:Ip,meshnormal_frag:Np,meshphong_vert:Op,meshphong_frag:Fp,meshphysical_vert:Bp,meshphysical_frag:zp,meshtoon_vert:Gp,meshtoon_frag:Hp,points_vert:Vp,points_frag:kp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:Yp,sprite_frag:qp},ue={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},an={basic:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Lt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Lt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Lt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new He(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Lt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Lt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Lt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Lt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Lt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Lt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Lt([ue.common,ue.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Lt([ue.lights,ue.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};an.physical={uniforms:Lt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const sr={r:0,b:0,g:0};function jp(i,e,t,n,s,r,o){const a=new He(0);let l=r===!0?0:1,c,h,f=null,d=0,m=null;function g(p,u){let b=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),b=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Sr)?(h===void 0&&(h=new q(new xe(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:wi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=$e.getTransfer(x.colorSpace)!==nt,(f!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new q(new pt(2,2),new Nt({name:"BackgroundMaterial",uniforms:wi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=$e.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(sr,uh(i)),n.buffers.color.setClear(sr.r,sr.g,sr.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Kp(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function f(L,I,H,j,X){let Y=!1;if(o){const K=_(j,H,I);c!==K&&(c=K,m(c.object)),Y=u(L,j,H,X),Y&&b(L,j,H,X)}else{const K=I.wireframe===!0;(c.geometry!==j.id||c.program!==H.id||c.wireframe!==K)&&(c.geometry=j.id,c.program=H.id,c.wireframe=K,Y=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,W(L,I,H,j),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,I,H){const j=H.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let Y=X[I.id];Y===void 0&&(Y={},X[I.id]=Y);let K=Y[j];return K===void 0&&(K=p(d()),Y[j]=K),K}function p(L){const I=[],H=[],j=[];for(let X=0;X<s;X++)I[X]=0,H[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:j,object:L,attributes:{},index:null}}function u(L,I,H,j){const X=c.attributes,Y=I.attributes;let K=0;const re=H.getAttributes();for(const le in re)if(re[le].location>=0){const J=X[le];let pe=Y[le];if(pe===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),J===void 0||J.attribute!==pe||pe&&J.data!==pe.data)return!0;K++}return c.attributesNum!==K||c.index!==j}function b(L,I,H,j){const X={},Y=I.attributes;let K=0;const re=H.getAttributes();for(const le in re)if(re[le].location>=0){let J=Y[le];J===void 0&&(le==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),le==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const pe={};pe.attribute=J,J&&J.data&&(pe.data=J.data),X[le]=pe,K++}c.attributes=X,c.attributesNum=K,c.index=j}function x(){const L=c.newAttributes;for(let I=0,H=L.length;I<H;I++)L[I]=0}function T(L){D(L,0)}function D(L,I){const H=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;H[L]=1,j[L]===0&&(i.enableVertexAttribArray(L),j[L]=1),X[L]!==I&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,I),X[L]=I)}function C(){const L=c.newAttributes,I=c.enabledAttributes;for(let H=0,j=I.length;H<j;H++)I[H]!==L[H]&&(i.disableVertexAttribArray(H),I[H]=0)}function A(L,I,H,j,X,Y,K){K===!0?i.vertexAttribIPointer(L,I,H,X,Y):i.vertexAttribPointer(L,I,H,j,X,Y)}function W(L,I,H,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=j.attributes,Y=H.getAttributes(),K=I.defaultAttributeValues;for(const re in Y){const le=Y[re];if(le.location>=0){let k=X[re];if(k===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){const J=k.normalized,pe=k.itemSize,Te=t.get(k);if(Te===void 0)continue;const Ee=Te.buffer,Ie=Te.type,Ne=Te.bytesPerElement,Ce=n.isWebGL2===!0&&(Ie===i.INT||Ie===i.UNSIGNED_INT||k.gpuType===jc);if(k.isInterleavedBufferAttribute){const qe=k.data,N=qe.stride,gt=k.offset;if(qe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<le.locationSize;Ae++)D(le.location+Ae,qe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Ae=0;Ae<le.locationSize;Ae++)T(le.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Ae=0;Ae<le.locationSize;Ae++)A(le.location+Ae,pe/le.locationSize,Ie,J,N*Ne,(gt+pe/le.locationSize*Ae)*Ne,Ce)}else{if(k.isInstancedBufferAttribute){for(let qe=0;qe<le.locationSize;qe++)D(le.location+qe,k.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let qe=0;qe<le.locationSize;qe++)T(le.location+qe);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let qe=0;qe<le.locationSize;qe++)A(le.location+qe,pe/le.locationSize,Ie,J,pe*Ne,pe/le.locationSize*qe*Ne,Ce)}}else if(K!==void 0){const J=K[re];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(le.location,J);break;case 3:i.vertexAttrib3fv(le.location,J);break;case 4:i.vertexAttrib4fv(le.location,J);break;default:i.vertexAttrib1fv(le.location,J)}}}}C()}function M(){V();for(const L in a){const I=a[L];for(const H in I){const j=I[H];for(const X in j)g(j[X].object),delete j[X];delete I[H]}delete a[L]}}function y(L){if(a[L.id]===void 0)return;const I=a[L.id];for(const H in I){const j=I[H];for(const X in j)g(j[X].object),delete j[X];delete I[H]}delete a[L.id]}function G(L){for(const I in a){const H=a[I];if(H[L.id]===void 0)continue;const j=H[L.id];for(const X in j)g(j[X].object),delete j[X];delete H[L.id]}}function V(){ie(),h=!0,c!==l&&(c=l,m(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:V,resetDefaultState:ie,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:T,disableUnusedAttributes:C}}function Zp(i,e,t,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,f){i.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,f,d),t.update(f,r,d)}function c(h,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Jp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,T=o||e.has("OES_texture_float"),D=x&&T,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:D,maxSamples:C}}function $p(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new wn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,x=b*4;let T=u.clippingState||null;l.value=T,T=h(g,d,x,m);for(let D=0;D!==x;++D)T[D]=t[D];u.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const u=m+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,T=m;x!==_;++x,T+=4)o.copy(f[x]).applyMatrix4(b,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Qp(i){let e=new WeakMap;function t(o,a){return a===za?o.mapping=yi:a===Ga&&(o.mapping=Ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===za||a===Ga)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uf(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class no extends fh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,ec=[.125,.215,.35,.446,.526,.582],kn=20,ba=new no,tc=new He;let wa=null,Aa=0,Ra=0;const Hn=(1+Math.sqrt(5))/2,vi=1/Hn,nc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Hn,vi),new R(0,Hn,-vi),new R(vi,0,Hn),new R(-vi,0,Hn),new R(Hn,vi,0),new R(-Hn,vi,0)];class ic{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Aa,Ra),e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yi||e.mapping===Ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:vn,format:$t,colorSpace:xn,depthBuffer:!1},s=sc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=tm(r,e,t)}return s}_compileMaterial(e){const t=new q(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,n,s){const a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(tc),h.toneMapping=Cn,h.autoClear=!1;const m=new us({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new q(new xe,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(tc),_=!0);for(let u=0;u<6;u++){const b=u%3;b===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):b===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;rr(s,b*x,u>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===yi||e.mapping===Ti;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;rr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nc[(s-1)%nc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new q(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*kn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):kn;p>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);const u=[];let b=0;for(let A=0;A<kn;++A){const W=A/_,M=Math.exp(-W*W/2);u.push(M),A===0?b+=M:A<p&&(b+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const T=this._sizeLods[s],D=3*T*(s>x-xi?s-x+xi:0),C=4*(this._cubeSize-T);rr(t,D,C,3*T,2*T),l.setRenderTarget(t),l.render(f,ba)}}function em(i){const e=[],t=[],n=[];let s=i;const r=i-xi+1+ec.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xi?l=ec[o-i+xi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,_=3,p=2,u=1,b=new Float32Array(_*g*m),x=new Float32Array(p*g*m),T=new Float32Array(u*g*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,W=C>2?0:-1,M=[A,W,0,A+2/3,W,0,A+2/3,W+1,0,A,W,0,A+2/3,W+1,0,A,W+1,0];b.set(M,_*g*C),x.set(d,p*g*C);const y=[C,C,C,C,C,C];T.set(y,u*g*C)}const D=new Ut;D.setAttribute("position",new en(b,_)),D.setAttribute("uv",new en(x,p)),D.setAttribute("faceIndex",new en(T,u)),e.push(D),s>xi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sc(i,e,t){const n=new Qt(i,e,t);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tm(i,e,t){const n=new Float32Array(kn),s=new R(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:io(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function rc(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

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
		`,blending:_n,depthTest:!1,depthWrite:!1})}function ac(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function io(){return`

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
	`}function nm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===za||l===Ga,h=l===yi||l===Ti;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new ic(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new ic(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function im(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,e,t,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const b=m.array;_=m.version;for(let x=0,T=b.length;x<T;x+=3){const D=b[x+0],C=b[x+1],A=b[x+2];d.push(D,C,C,A,A,D)}}else if(g!==void 0){const b=g.array;_=g.version;for(let x=0,T=b.length/3-1;x<T;x+=3){const D=x+0,C=x+1,A=x+2;d.push(D,C,C,A,A,D)}}else return;const p=new(sh(d)?hh:ch)(d,1);p.version=_;const u=r.get(f);u&&e.remove(u),r.set(f,p)}function h(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function rm(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function f(m,g,_){if(_===0)return;let p,u;if(s)p=i,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*l,_),t.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let u=0;for(let b=0;b<_;b++)u+=g[b];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function am(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function om(i,e){return i[0]-e[0]}function lm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function cm(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new st,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let I=function(){ie.dispose(),r.delete(h),h.removeEventListener("dispose",I)};var m=I;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),T===!0&&(M=2),D===!0&&(M=3);let y=h.attributes.position.count*M,G=1;y>e.maxTextureSize&&(G=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const V=new Float32Array(y*G*4*_),ie=new oh(V,y,G,_);ie.type=Rn,ie.needsUpdate=!0;const L=M*4;for(let H=0;H<_;H++){const j=C[H],X=A[H],Y=W[H],K=y*G*4*H;for(let re=0;re<j.count;re++){const le=re*L;x===!0&&(o.fromBufferAttribute(j,re),V[K+le+0]=o.x,V[K+le+1]=o.y,V[K+le+2]=o.z,V[K+le+3]=0),T===!0&&(o.fromBufferAttribute(X,re),V[K+le+4]=o.x,V[K+le+5]=o.y,V[K+le+6]=o.z,V[K+le+7]=0),D===!0&&(o.fromBufferAttribute(Y,re),V[K+le+8]=o.x,V[K+le+9]=o.y,V[K+le+10]=o.z,V[K+le+11]=Y.itemSize===4?o.w:1)}}p={count:_,texture:ie,size:new fe(y,G)},r.set(h,p),h.addEventListener("dispose",I)}let u=0;for(let x=0;x<d.length;x++)u+=d[x];const b=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let T=0;T<g;T++)_[T]=[T,0];n[h.id]=_}for(let T=0;T<g;T++){const D=_[T];D[0]=T,D[1]=d[T]}_.sort(lm);for(let T=0;T<8;T++)T<g&&_[T][1]?(a[T][0]=_[T][0],a[T][1]=_[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(om);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let b=0;for(let T=0;T<8;T++){const D=a[T],C=D[0],A=D[1];C!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+T)!==p[C]&&h.setAttribute("morphTarget"+T,p[C]),u&&h.getAttribute("morphNormal"+T)!==u[C]&&h.setAttribute("morphNormal"+T,u[C]),s[T]=A,b+=A):(p&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),u&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),s[T]=0)}const x=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function hm(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class mh extends Vt{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Xn,h!==Xn&&h!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xn&&(n=An),n===void 0&&h===bi&&(n=Wn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gh=new Vt,_h=new mh(1,1);_h.compareFunction=ih;const vh=new oh,xh=new ju,Mh=new dh,oc=[],lc=[],cc=new Float32Array(16),hc=new Float32Array(9),uc=new Float32Array(4);function Li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=oc[s];if(r===void 0&&(r=new Float32Array(s),oc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function wr(i,e){let t=lc[e];t===void 0&&(t=new Int32Array(e),lc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;uc.set(n),i.uniformMatrix2fv(this.addr,!1,uc),dt(t,n)}}function gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),dt(t,n)}}function _m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ft(t,n))return;cc.set(n),i.uniformMatrix4fv(this.addr,!1,cc),dt(t,n)}}function vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function Em(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function wm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?_h:gh;t.setTexture2D(e||r,s)}function Am(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xh,s)}function Rm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mh,s)}function Cm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vh,s)}function Pm(i){switch(i){case 5126:return um;case 35664:return fm;case 35665:return dm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return vm;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return ym;case 36295:return Tm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return wm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Cm}}function Lm(i,e){i.uniform1fv(this.addr,e)}function Dm(i,e){const t=Li(e,this.size,2);i.uniform2fv(this.addr,t)}function Um(i,e){const t=Li(e,this.size,3);i.uniform3fv(this.addr,t)}function Im(i,e){const t=Li(e,this.size,4);i.uniform4fv(this.addr,t)}function Nm(i,e){const t=Li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Om(i,e){const t=Li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fm(i,e){const t=Li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bm(i,e){i.uniform1iv(this.addr,e)}function zm(i,e){i.uniform2iv(this.addr,e)}function Gm(i,e){i.uniform3iv(this.addr,e)}function Hm(i,e){i.uniform4iv(this.addr,e)}function Vm(i,e){i.uniform1uiv(this.addr,e)}function km(i,e){i.uniform2uiv(this.addr,e)}function Wm(i,e){i.uniform3uiv(this.addr,e)}function Xm(i,e){i.uniform4uiv(this.addr,e)}function Ym(i,e,t){const n=this.cache,s=e.length,r=wr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||gh,r[o])}function qm(i,e,t){const n=this.cache,s=e.length,r=wr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xh,r[o])}function jm(i,e,t){const n=this.cache,s=e.length,r=wr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Mh,r[o])}function Km(i,e,t){const n=this.cache,s=e.length,r=wr(t,s);ft(n,r)||(i.uniform1iv(this.addr,r),dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vh,r[o])}function Zm(i){switch(i){case 5126:return Lm;case 35664:return Dm;case 35665:return Um;case 35666:return Im;case 35674:return Nm;case 35675:return Om;case 35676:return Fm;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return Gm;case 35669:case 35673:return Hm;case 5125:return Vm;case 36294:return km;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Km}}class Jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pm(t.type)}}class $m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zm(t.type)}}class Qm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function fc(i,e){i.seq.push(e),i.map[e.id]=e}function eg(i,e,t){const n=i.name,s=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),o=Ca.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fc(t,c===void 0?new Jm(a,i,e):new $m(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Qm(a),fc(t,f)),t=f}}}class ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);eg(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function dc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tg=37297;let ng=0;function ig(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function sg(i){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(i);let n;switch(e===t?n="":e===_r&&t===gr?n="LinearDisplayP3ToLinearSRGB":e===gr&&t===_r&&(n="LinearSRGBToLinearDisplayP3"),i){case xn:case Er:return[n,"LinearTransferOETF"];case Mt:case Qa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function pc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+ig(i.getShaderSource(e),o)}else return s}function rg(i,e){const t=sg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ag(i,e){let t;switch(e){case kc:t="Linear";break;case Wc:t="Reinhard";break;case Xc:t="OptimizedCineon";break;case Ja:t="ACESFilmic";break;case Yc:t="AgX";break;case Su:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function og(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Mi).join(`
`)}function cg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Mi(i){return i!==""}function mc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(ug,dg)}const fg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dg(i,e){let t=Ge[e];if(t===void 0){const n=fg.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ya(t)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(i){return i.replace(pg,mg)}function mg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function _g(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case Ti:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ti:e="ENVMAP_MODE_REFRACTION";break}return e}function xg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case xu:e="ENVMAP_BLENDING_MIX";break;case Mu:e="ENVMAP_BLENDING_ADD";break}return e}function Mg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Sg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gg(t),c=_g(t),h=vg(t),f=xg(t),d=Mg(t),m=t.isWebGL2?"":og(t),g=lg(t),_=cg(r),p=s.createProgram();let u,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mi).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Mi).join(`
`),b.length>0&&(b+=`
`)):(u=[vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),b=[m,vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Cn?ag("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,rg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),o=Ya(o),o=mc(o,t),o=gc(o,t),a=Ya(a),a=mc(a,t),a=gc(a,t),o=_c(o),a=_c(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const T=x+u+o,D=x+b+a,C=dc(s,s.VERTEX_SHADER,T),A=dc(s,s.FRAGMENT_SHADER,D);s.attachShader(p,C),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function W(V){if(i.debug.checkShaderErrors){const ie=s.getProgramInfoLog(p).trim(),L=s.getShaderInfoLog(C).trim(),I=s.getShaderInfoLog(A).trim();let H=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,C,A);else{const X=pc(s,C,"vertex"),Y=pc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+X+`
`+Y)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(L===""||I==="")&&(j=!1);j&&(V.diagnostics={runnable:H,programLog:ie,vertexShader:{log:L,prefix:u},fragmentShader:{log:I,prefix:b}})}s.deleteShader(C),s.deleteShader(A),M=new ur(s,p),y=hg(s,p)}let M;this.getUniforms=function(){return M===void 0&&W(this),M};let y;this.getAttributes=function(){return y===void 0&&W(this),y};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(p,tg)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ng++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=A,this}let Eg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Tg(e),t.set(e,n)),n}}class Tg{constructor(e){this.id=Eg++,this.code=e,this.usedTimes=0}}function bg(i,e,t,n,s,r,o){const a=new eo,l=new yg,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,y,G,V,ie){const L=V.fog,I=ie.geometry,H=M.isMeshStandardMaterial?V.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),X=j&&j.mapping===Sr?j.image.height:null,Y=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,re=K!==void 0?K.length:0;let le=0;I.morphAttributes.position!==void 0&&(le=1),I.morphAttributes.normal!==void 0&&(le=2),I.morphAttributes.color!==void 0&&(le=3);let k,J,pe,Te;if(Y){const Ct=an[Y];k=Ct.vertexShader,J=Ct.fragmentShader}else k=M.vertexShader,J=M.fragmentShader,l.update(M),pe=l.getVertexShaderID(M),Te=l.getFragmentShaderID(M);const Ee=i.getRenderTarget(),Ie=ie.isInstancedMesh===!0,Ne=ie.isBatchedMesh===!0,Ce=!!M.map,qe=!!M.matcap,N=!!j,gt=!!M.aoMap,Ae=!!M.lightMap,De=!!M.bumpMap,Me=!!M.normalMap,it=!!M.displacementMap,Oe=!!M.emissiveMap,E=!!M.metalnessMap,v=!!M.roughnessMap,O=M.anisotropy>0,ne=M.clearcoat>0,ee=M.iridescence>0,te=M.sheen>0,Se=M.transmission>0,de=O&&!!M.anisotropyMap,ve=ne&&!!M.clearcoatMap,Pe=ne&&!!M.clearcoatNormalMap,Be=ne&&!!M.clearcoatRoughnessMap,$=ee&&!!M.iridescenceMap,je=ee&&!!M.iridescenceThicknessMap,w=te&&!!M.sheenColorMap,Z=te&&!!M.sheenRoughnessMap,he=!!M.specularMap,se=!!M.specularColorMap,ye=!!M.specularIntensityMap,We=Se&&!!M.transmissionMap,Ke=Se&&!!M.thicknessMap,Ve=!!M.gradientMap,ce=!!M.alphaMap,P=M.alphaTest>0,ae=!!M.alphaHash,oe=!!M.extensions,Re=!!I.attributes.uv1,be=!!I.attributes.uv2,Ze=!!I.attributes.uv3;let Je=Cn;return M.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Je=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:k,fragmentShader:J,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ne,instancing:Ie,instancingColor:Ie&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:xn,map:Ce,matcap:qe,envMap:N,envMapMode:N&&j.mapping,envMapCubeUVHeight:X,aoMap:gt,lightMap:Ae,bumpMap:De,normalMap:Me,displacementMap:d&&it,emissiveMap:Oe,normalMapObjectSpace:Me&&M.normalMapType===Uu,normalMapTangentSpace:Me&&M.normalMapType===nh,metalnessMap:E,roughnessMap:v,anisotropy:O,anisotropyMap:de,clearcoat:ne,clearcoatMap:ve,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Be,iridescence:ee,iridescenceMap:$,iridescenceThicknessMap:je,sheen:te,sheenColorMap:w,sheenRoughnessMap:Z,specularMap:he,specularColorMap:se,specularIntensityMap:ye,transmission:Se,transmissionMap:We,thicknessMap:Ke,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===Si,alphaMap:ce,alphaTest:P,alphaHash:ae,combine:M.combine,mapUv:Ce&&_(M.map.channel),aoMapUv:gt&&_(M.aoMap.channel),lightMapUv:Ae&&_(M.lightMap.channel),bumpMapUv:De&&_(M.bumpMap.channel),normalMapUv:Me&&_(M.normalMap.channel),displacementMapUv:it&&_(M.displacementMap.channel),emissiveMapUv:Oe&&_(M.emissiveMap.channel),metalnessMapUv:E&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:de&&_(M.anisotropyMap.channel),clearcoatMapUv:ve&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:w&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Z&&_(M.sheenRoughnessMap.channel),specularMapUv:he&&_(M.specularMap.channel),specularColorMapUv:se&&_(M.specularColorMap.channel),specularIntensityMapUv:ye&&_(M.specularIntensityMap.channel),transmissionMapUv:We&&_(M.transmissionMap.channel),thicknessMapUv:Ke&&_(M.thicknessMap.channel),alphaMapUv:ce&&_(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Me||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:be,vertexUv3s:Ze,pointsUvs:ie.isPoints===!0&&!!I.attributes.uv&&(Ce||ce),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ce&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===mn,flipSided:M.side===Ot,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:oe&&M.extensions.derivatives===!0,extensionFragDepth:oe&&M.extensions.fragDepth===!0,extensionDrawBuffers:oe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)y.push(G),y.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(b(y,M),x(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function T(M){const y=g[M.type];let G;if(y){const V=an[y];G=ls.clone(V.uniforms)}else G=M.uniforms;return G}function D(M,y){let G;for(let V=0,ie=c.length;V<ie;V++){const L=c[V];if(L.cacheKey===y){G=L,++G.usedTimes;break}}return G===void 0&&(G=new Sg(i,y,M,r),c.push(G)),G}function C(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:T,acquireProgram:D,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:W}}function wg(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,d,m,g,_,p){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function a(f,d,m,g,_,p){const u=o(f,d,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(f,d,m,g,_,p){const u=o(f,d,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,d){t.length>1&&t.sort(f||Ag),n.length>1&&n.sort(d||xc),s.length>1&&s.sort(d||xc)}function h(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Rg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Mc,i.set(n,[o])):s>=r.length?(o=new Mc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new He};break;case"SpotLight":t={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Lg=0;function Dg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ug(i,e){const t=new Cg,n=Pg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);const r=new R,o=new ct,a=new ct;function l(h,f){let d=0,m=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let _=0,p=0,u=0,b=0,x=0,T=0,D=0,C=0,A=0,W=0,M=0;h.sort(Dg);const y=f===!0?Math.PI:1;for(let V=0,ie=h.length;V<ie;V++){const L=h[V],I=L.color,H=L.intensity,j=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=I.r*H*y,m+=I.g*H*y,g+=I.b*H*y;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(L.sh.coefficients[Y],H);M++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const K=L.shadow,re=n.get(L);re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,s.directionalShadow[_]=re,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=L.shadow.matrix,T++}s.directional[_]=Y,_++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(I).multiplyScalar(H*y),Y.distance=j,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,s.spot[u]=Y;const K=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&W++),s.spotLightMatrix[u]=K.matrix,L.castShadow){const re=n.get(L);re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,s.spotShadow[u]=re,s.spotShadowMap[u]=X,C++}u++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(I).multiplyScalar(H),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),s.rectArea[b]=Y,b++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*y),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const K=L.shadow,re=n.get(L);re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,re.shadowCameraNear=K.camera.near,re.shadowCameraFar=K.camera.far,s.pointShadow[p]=re,s.pointShadowMap[p]=X,s.pointShadowMatrix[p]=L.shadow.matrix,D++}s.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(H*y),Y.groundColor.copy(L.groundColor).multiplyScalar(H*y),s.hemi[x]=Y,x++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_FLOAT_1,s.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ue.LTC_HALF_1,s.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const G=s.hash;(G.directionalLength!==_||G.pointLength!==p||G.spotLength!==u||G.rectAreaLength!==b||G.hemiLength!==x||G.numDirectionalShadows!==T||G.numPointShadows!==D||G.numSpotShadows!==C||G.numSpotMaps!==A||G.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=u,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=C+A-W,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=W,s.numLightProbes=M,G.directionalLength=_,G.pointLength=p,G.spotLength=u,G.rectAreaLength=b,G.hemiLength=x,G.numDirectionalShadows=T,G.numPointShadows=D,G.numSpotShadows=C,G.numSpotMaps=A,G.numLightProbes=M,s.version=Lg++)}function c(h,f){let d=0,m=0,g=0,_=0,p=0;const u=f.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){const T=h[b];if(T.isDirectionalLight){const D=s.directional[d];D.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(u),d++}else if(T.isSpotLight){const D=s.spot[g];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(u),g++}else if(T.isRectAreaLight){const D=s.rectArea[_];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(u),a.identity(),o.copy(T.matrixWorld),o.premultiply(u),a.extractRotation(o),D.halfWidth.set(T.width*.5,0,0),D.halfHeight.set(0,T.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const D=s.point[m];D.position.setFromMatrixPosition(T.matrixWorld),D.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){const D=s.hemi[p];D.direction.setFromMatrixPosition(T.matrixWorld),D.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function Sc(i,e){const t=new Ug(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(f){n.push(f)}function a(f){s.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ig(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new Sc(i,e),t.set(r,[l])):o>=a.length?(l=new Sc(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ng extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Og extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bg=`uniform sampler2D shadow_pass;
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
}`;function zg(i,e,t){let n=new to;const s=new fe,r=new fe,o=new st,a=new Ng({depthPacking:Du}),l=new Og,c={},h=t.maxTextureSize,f={[Ln]:Ot,[Ot]:Ln,[mn]:mn},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Fg,fragmentShader:Bg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new q(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let u=this.type;this.render=function(C,A,W){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),V=i.state;V.setBlending(_n),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ie=u!==pn&&this.type===pn,L=u===pn&&this.type!==pn;for(let I=0,H=C.length;I<H;I++){const j=C[I],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const Y=X.getFrameExtents();if(s.multiply(Y),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,X.mapSize.y=r.y)),X.map===null||ie===!0||L===!0){const re=this.type!==pn?{minFilter:Dt,magFilter:Dt}:{};X.map!==null&&X.map.dispose(),X.map=new Qt(s.x,s.y,re),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const K=X.getViewportCount();for(let re=0;re<K;re++){const le=X.getViewport(re);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),V.viewport(o),X.updateMatrices(j,re),n=X.getFrustum(),T(A,W,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===pn&&b(X,W),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,G)};function b(C,A){const W=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qt(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,W,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,W,m,_,null)}function x(C,A,W,M){let y=null;const G=W.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)y=G;else if(y=W.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=y.uuid,ie=A.uuid;let L=c[V];L===void 0&&(L={},c[V]=L);let I=L[ie];I===void 0&&(I=y.clone(),L[ie]=I,A.addEventListener("dispose",D)),y=I}if(y.visible=A.visible,y.wireframe=A.wireframe,M===pn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,W.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=W}return y}function T(C,A,W,M,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===pn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld);const ie=e.update(C),L=C.material;if(Array.isArray(L)){const I=ie.groups;for(let H=0,j=I.length;H<j;H++){const X=I[H],Y=L[X.materialIndex];if(Y&&Y.visible){const K=x(C,Y,M,y);C.onBeforeShadow(i,C,A,W,ie,K,X),i.renderBufferDirect(W,null,ie,K,C,X),C.onAfterShadow(i,C,A,W,ie,K,X)}}}else if(L.visible){const I=x(C,L,M,y);C.onBeforeShadow(i,C,A,W,ie,I,null),i.renderBufferDirect(W,null,ie,I,C,null),C.onAfterShadow(i,C,A,W,ie,I,null)}}const V=C.children;for(let ie=0,L=V.length;ie<L;ie++)T(V[ie],A,W,M,y)}function D(C){C.target.removeEventListener("dispose",D);for(const W in c){const M=c[W],y=C.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function Gg(i,e,t){const n=t.isWebGL2;function s(){let P=!1;const ae=new st;let oe=null;const Re=new st(0,0,0,0);return{setMask:function(be){oe!==be&&!P&&(i.colorMask(be,be,be,be),oe=be)},setLocked:function(be){P=be},setClear:function(be,Ze,Je,_t,Ct){Ct===!0&&(be*=_t,Ze*=_t,Je*=_t),ae.set(be,Ze,Je,_t),Re.equals(ae)===!1&&(i.clearColor(be,Ze,Je,_t),Re.copy(ae))},reset:function(){P=!1,oe=null,Re.set(-1,0,0,0)}}}function r(){let P=!1,ae=null,oe=null,Re=null;return{setTest:function(be){be?Ne(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(be){ae!==be&&!P&&(i.depthMask(be),ae=be)},setFunc:function(be){if(oe!==be){switch(be){case fu:i.depthFunc(i.NEVER);break;case du:i.depthFunc(i.ALWAYS);break;case pu:i.depthFunc(i.LESS);break;case pr:i.depthFunc(i.LEQUAL);break;case mu:i.depthFunc(i.EQUAL);break;case gu:i.depthFunc(i.GEQUAL);break;case _u:i.depthFunc(i.GREATER);break;case vu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=be}},setLocked:function(be){P=be},setClear:function(be){Re!==be&&(i.clearDepth(be),Re=be)},reset:function(){P=!1,ae=null,oe=null,Re=null}}}function o(){let P=!1,ae=null,oe=null,Re=null,be=null,Ze=null,Je=null,_t=null,Ct=null;return{setTest:function(tt){P||(tt?Ne(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!P&&(i.stencilMask(tt),ae=tt)},setFunc:function(tt,Pt,rn){(oe!==tt||Re!==Pt||be!==rn)&&(i.stencilFunc(tt,Pt,rn),oe=tt,Re=Pt,be=rn)},setOp:function(tt,Pt,rn){(Ze!==tt||Je!==Pt||_t!==rn)&&(i.stencilOp(tt,Pt,rn),Ze=tt,Je=Pt,_t=rn)},setLocked:function(tt){P=tt},setClear:function(tt){Ct!==tt&&(i.clearStencil(tt),Ct=tt)},reset:function(){P=!1,ae=null,oe=null,Re=null,be=null,Ze=null,Je=null,_t=null,Ct=null}}}const a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,x=null,T=null,D=null,C=null,A=null,W=null,M=new He(0,0,0),y=0,G=!1,V=null,ie=null,L=null,I=null,H=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=Y>=2);let re=null,le={};const k=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),pe=new st().fromArray(k),Te=new st().fromArray(J);function Ee(P,ae,oe,Re){const be=new Uint8Array(4),Ze=i.createTexture();i.bindTexture(P,Ze),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<oe;Je++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ae+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Ze}const Ie={};Ie[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Ie[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ie[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(i.DEPTH_TEST),l.setFunc(pr),Oe(!1),E(il),Ne(i.CULL_FACE),Me(_n);function Ne(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function Ce(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function qe(P,ae){return m[P]!==ae?(i.bindFramebuffer(P,ae),m[P]=ae,n&&(P===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ae),P===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function N(P,ae){let oe=_,Re=!1;if(P)if(oe=g.get(ae),oe===void 0&&(oe=[],g.set(ae,oe)),P.isWebGLMultipleRenderTargets){const be=P.texture;if(oe.length!==be.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Ze=0,Je=be.length;Ze<Je;Ze++)oe[Ze]=i.COLOR_ATTACHMENT0+Ze;oe.length=be.length,Re=!0}}else oe[0]!==i.COLOR_ATTACHMENT0&&(oe[0]=i.COLOR_ATTACHMENT0,Re=!0);else oe[0]!==i.BACK&&(oe[0]=i.BACK,Re=!0);Re&&(t.isWebGL2?i.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function gt(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const Ae={[Vn]:i.FUNC_ADD,[Jh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};if(n)Ae[al]=i.MIN,Ae[ol]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ae[al]=P.MIN_EXT,Ae[ol]=P.MAX_EXT)}const De={[Qh]:i.ZERO,[eu]:i.ONE,[tu]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[ou]:i.SRC_ALPHA_SATURATE,[ru]:i.DST_COLOR,[iu]:i.DST_ALPHA,[nu]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[au]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[lu]:i.CONSTANT_COLOR,[cu]:i.ONE_MINUS_CONSTANT_COLOR,[hu]:i.CONSTANT_ALPHA,[uu]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(P,ae,oe,Re,be,Ze,Je,_t,Ct,tt){if(P===_n){u===!0&&(Ce(i.BLEND),u=!1);return}if(u===!1&&(Ne(i.BLEND),u=!0),P!==Zh){if(P!==b||tt!==G){if((x!==Vn||C!==Vn)&&(i.blendEquation(i.FUNC_ADD),x=Vn,C=Vn),tt)switch(P){case Si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,D=null,A=null,W=null,M.set(0,0,0),y=0,b=P,G=tt}return}be=be||ae,Ze=Ze||oe,Je=Je||Re,(ae!==x||be!==C)&&(i.blendEquationSeparate(Ae[ae],Ae[be]),x=ae,C=be),(oe!==T||Re!==D||Ze!==A||Je!==W)&&(i.blendFuncSeparate(De[oe],De[Re],De[Ze],De[Je]),T=oe,D=Re,A=Ze,W=Je),(_t.equals(M)===!1||Ct!==y)&&(i.blendColor(_t.r,_t.g,_t.b,Ct),M.copy(_t),y=Ct),b=P,G=!1}function it(P,ae){P.side===mn?Ce(i.CULL_FACE):Ne(i.CULL_FACE);let oe=P.side===Ot;ae&&(oe=!oe),Oe(oe),P.blending===Si&&P.transparent===!1?Me(_n):Me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Re=P.stencilWrite;c.setTest(Re),Re&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),O(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){V!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),V=P)}function E(P){P!==jh?(Ne(i.CULL_FACE),P!==ie&&(P===il?i.cullFace(i.BACK):P===Kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),ie=P}function v(P){P!==L&&(X&&i.lineWidth(P),L=P)}function O(P,ae,oe){P?(Ne(i.POLYGON_OFFSET_FILL),(I!==ae||H!==oe)&&(i.polygonOffset(ae,oe),I=ae,H=oe)):Ce(i.POLYGON_OFFSET_FILL)}function ne(P){P?Ne(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function ee(P){P===void 0&&(P=i.TEXTURE0+j-1),re!==P&&(i.activeTexture(P),re=P)}function te(P,ae,oe){oe===void 0&&(re===null?oe=i.TEXTURE0+j-1:oe=re);let Re=le[oe];Re===void 0&&(Re={type:void 0,texture:void 0},le[oe]=Re),(Re.type!==P||Re.texture!==ae)&&(re!==oe&&(i.activeTexture(oe),re=oe),i.bindTexture(P,ae||Ie[P]),Re.type=P,Re.texture=ae)}function Se(){const P=le[re];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function w(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(P){pe.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),pe.copy(P))}function We(P){Te.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Te.copy(P))}function Ke(P,ae){let oe=f.get(ae);oe===void 0&&(oe=new WeakMap,f.set(ae,oe));let Re=oe.get(P);Re===void 0&&(Re=i.getUniformBlockIndex(ae,P.name),oe.set(P,Re))}function Ve(P,ae){const Re=f.get(ae).get(P);h.get(ae)!==Re&&(i.uniformBlockBinding(ae,Re,P.__bindingPointIndex),h.set(ae,Re))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},re=null,le={},m={},g=new WeakMap,_=[],p=null,u=!1,b=null,x=null,T=null,D=null,C=null,A=null,W=null,M=new He(0,0,0),y=0,G=!1,V=null,ie=null,L=null,I=null,H=null,pe.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ne,disable:Ce,bindFramebuffer:qe,drawBuffers:N,useProgram:gt,setBlending:Me,setMaterial:it,setFlipSided:Oe,setCullFace:E,setLineWidth:v,setPolygonOffset:O,setScissorTest:ne,activeTexture:ee,bindTexture:te,unbindTexture:Se,compressedTexImage2D:de,compressedTexImage3D:ve,texImage2D:he,texImage3D:se,updateUBOMapping:Ke,uniformBlockBinding:Ve,texStorage2D:w,texStorage3D:Z,texSubImage2D:Pe,texSubImage3D:Be,compressedTexSubImage2D:$,compressedTexSubImage3D:je,scissor:ye,viewport:We,reset:ce}}function Hg(i,e,t,n,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):xr("canvas")}function _(E,v,O,ne){let ee=1;if((E.width>ne||E.height>ne)&&(ee=ne/Math.max(E.width,E.height)),ee<1||v===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const te=v?Xa:Math.floor,Se=te(ee*E.width),de=te(ee*E.height);f===void 0&&(f=g(Se,de));const ve=O?g(Se,de):f;return ve.width=Se,ve.height=de,ve.getContext("2d").drawImage(E,0,0,Se,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Se+"x"+de+")."),ve}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return Fl(E.width)&&Fl(E.height)}function u(E){return a?!1:E.wrapS!==Jt||E.wrapT!==Jt||E.minFilter!==Dt&&E.minFilter!==Xt}function b(E,v){return E.generateMipmaps&&v&&E.minFilter!==Dt&&E.minFilter!==Xt}function x(E){i.generateMipmap(E)}function T(E,v,O,ne,ee=!1){if(a===!1)return v;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let te=v;if(v===i.RED&&(O===i.FLOAT&&(te=i.R32F),O===i.HALF_FLOAT&&(te=i.R16F),O===i.UNSIGNED_BYTE&&(te=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(te=i.R8UI),O===i.UNSIGNED_SHORT&&(te=i.R16UI),O===i.UNSIGNED_INT&&(te=i.R32UI),O===i.BYTE&&(te=i.R8I),O===i.SHORT&&(te=i.R16I),O===i.INT&&(te=i.R32I)),v===i.RG&&(O===i.FLOAT&&(te=i.RG32F),O===i.HALF_FLOAT&&(te=i.RG16F),O===i.UNSIGNED_BYTE&&(te=i.RG8)),v===i.RGBA){const Se=ee?mr:$e.getTransfer(ne);O===i.FLOAT&&(te=i.RGBA32F),O===i.HALF_FLOAT&&(te=i.RGBA16F),O===i.UNSIGNED_BYTE&&(te=Se===nt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function D(E,v,O){return b(E,O)===!0||E.isFramebufferTexture&&E.minFilter!==Dt&&E.minFilter!==Xt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){return E===Dt||E===ll||E===ta?i.NEAREST:i.LINEAR}function A(E){const v=E.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function W(E){const v=E.target;v.removeEventListener("dispose",W),G(v)}function M(E){const v=n.get(E);if(v.__webglInit===void 0)return;const O=E.source,ne=d.get(O);if(ne){const ee=ne[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(E),Object.keys(ne).length===0&&d.delete(O)}n.remove(E)}function y(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const O=E.source,ne=d.get(O);delete ne[v.__cacheKey],o.memory.textures--}function G(E){const v=E.texture,O=n.get(E),ne=n.get(v);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(O.__webglFramebuffer[ee]))for(let te=0;te<O.__webglFramebuffer[ee].length;te++)i.deleteFramebuffer(O.__webglFramebuffer[ee][te]);else i.deleteFramebuffer(O.__webglFramebuffer[ee]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[ee])}else{if(Array.isArray(O.__webglFramebuffer))for(let ee=0;ee<O.__webglFramebuffer.length;ee++)i.deleteFramebuffer(O.__webglFramebuffer[ee]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ee=0;ee<O.__webglColorRenderbuffer.length;ee++)O.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[ee]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ee=0,te=v.length;ee<te;ee++){const Se=n.get(v[ee]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(v[ee])}n.remove(v),n.remove(E)}let V=0;function ie(){V=0}function L(){const E=V;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),V+=1,E}function I(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function H(E,v){const O=n.get(E);if(E.isVideoTexture&&it(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const ne=E.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(O,E,v);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function j(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){pe(O,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function X(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){pe(O,E,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Te(O,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const K={[Ha]:i.REPEAT,[Jt]:i.CLAMP_TO_EDGE,[Va]:i.MIRRORED_REPEAT},re={[Dt]:i.NEAREST,[ll]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Eu]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},le={[Iu]:i.NEVER,[Gu]:i.ALWAYS,[Nu]:i.LESS,[ih]:i.LEQUAL,[Ou]:i.EQUAL,[zu]:i.GEQUAL,[Fu]:i.GREATER,[Bu]:i.NOTEQUAL};function k(E,v,O){if(O?(i.texParameteri(E,i.TEXTURE_WRAP_S,K[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,re[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,re[v.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Jt||v.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,C(v.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==Dt&&v.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Dt||v.minFilter!==ta&&v.minFilter!==os||v.type===Rn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===vn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(E,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function J(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const ne=v.source;let ee=d.get(ne);ee===void 0&&(ee={},d.set(ne,ee));const te=I(v);if(te!==E.__cacheKey){ee[te]===void 0&&(ee[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[te].usedTimes++;const Se=ee[E.__cacheKey];Se!==void 0&&(ee[E.__cacheKey].usedTimes--,Se.usedTimes===0&&y(v)),E.__cacheKey=te,E.__webglTexture=ee[te].texture}return O}function pe(E,v,O){let ne=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=i.TEXTURE_3D);const ee=J(E,v),te=v.source;t.bindTexture(ne,E.__webglTexture,i.TEXTURE0+O);const Se=n.get(te);if(te.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const de=$e.getPrimaries($e.workingColorSpace),ve=v.colorSpace===Yt?null:$e.getPrimaries(v.colorSpace),Pe=v.colorSpace===Yt||de===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Be=u(v)&&p(v.image)===!1;let $=_(v.image,Be,!1,s.maxTextureSize);$=Oe(v,$);const je=p($)||a,w=r.convert(v.format,v.colorSpace);let Z=r.convert(v.type),he=T(v.internalFormat,w,Z,v.colorSpace,v.isVideoTexture);k(ne,v,je);let se;const ye=v.mipmaps,We=a&&v.isVideoTexture!==!0&&he!==eh,Ke=Se.__version===void 0||ee===!0,Ve=D(v,$,je);if(v.isDepthTexture)he=i.DEPTH_COMPONENT,a?v.type===Rn?he=i.DEPTH_COMPONENT32F:v.type===An?he=i.DEPTH_COMPONENT24:v.type===Wn?he=i.DEPTH24_STENCIL8:he=i.DEPTH_COMPONENT16:v.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Xn&&he===i.DEPTH_COMPONENT&&v.type!==$a&&v.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=An,Z=r.convert(v.type)),v.format===bi&&he===i.DEPTH_COMPONENT&&(he=i.DEPTH_STENCIL,v.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Wn,Z=r.convert(v.type))),Ke&&(We?t.texStorage2D(i.TEXTURE_2D,1,he,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,w,Z,null));else if(v.isDataTexture)if(ye.length>0&&je){We&&Ke&&t.texStorage2D(i.TEXTURE_2D,Ve,he,ye[0].width,ye[0].height);for(let ce=0,P=ye.length;ce<P;ce++)se=ye[ce],We?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,w,Z,se.data):t.texImage2D(i.TEXTURE_2D,ce,he,se.width,se.height,0,w,Z,se.data);v.generateMipmaps=!1}else We?(Ke&&t.texStorage2D(i.TEXTURE_2D,Ve,he,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,$.width,$.height,w,Z,$.data)):t.texImage2D(i.TEXTURE_2D,0,he,$.width,$.height,0,w,Z,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){We&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,he,ye[0].width,ye[0].height,$.depth);for(let ce=0,P=ye.length;ce<P;ce++)se=ye[ce],v.format!==$t?w!==null?We?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,se.width,se.height,$.depth,w,se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,he,se.width,se.height,$.depth,0,se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,se.width,se.height,$.depth,w,Z,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,he,se.width,se.height,$.depth,0,w,Z,se.data)}else{We&&Ke&&t.texStorage2D(i.TEXTURE_2D,Ve,he,ye[0].width,ye[0].height);for(let ce=0,P=ye.length;ce<P;ce++)se=ye[ce],v.format!==$t?w!==null?We?t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,w,se.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,he,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,se.width,se.height,w,Z,se.data):t.texImage2D(i.TEXTURE_2D,ce,he,se.width,se.height,0,w,Z,se.data)}else if(v.isDataArrayTexture)We?(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ve,he,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,w,Z,$.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,$.width,$.height,$.depth,0,w,Z,$.data);else if(v.isData3DTexture)We?(Ke&&t.texStorage3D(i.TEXTURE_3D,Ve,he,$.width,$.height,$.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,w,Z,$.data)):t.texImage3D(i.TEXTURE_3D,0,he,$.width,$.height,$.depth,0,w,Z,$.data);else if(v.isFramebufferTexture){if(Ke)if(We)t.texStorage2D(i.TEXTURE_2D,Ve,he,$.width,$.height);else{let ce=$.width,P=$.height;for(let ae=0;ae<Ve;ae++)t.texImage2D(i.TEXTURE_2D,ae,he,ce,P,0,w,Z,null),ce>>=1,P>>=1}}else if(ye.length>0&&je){We&&Ke&&t.texStorage2D(i.TEXTURE_2D,Ve,he,ye[0].width,ye[0].height);for(let ce=0,P=ye.length;ce<P;ce++)se=ye[ce],We?t.texSubImage2D(i.TEXTURE_2D,ce,0,0,w,Z,se):t.texImage2D(i.TEXTURE_2D,ce,he,w,Z,se);v.generateMipmaps=!1}else We?(Ke&&t.texStorage2D(i.TEXTURE_2D,Ve,he,$.width,$.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,w,Z,$)):t.texImage2D(i.TEXTURE_2D,0,he,w,Z,$);b(v,je)&&x(ne),Se.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Te(E,v,O){if(v.image.length!==6)return;const ne=J(E,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const te=n.get(ee);if(ee.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);const Se=$e.getPrimaries($e.workingColorSpace),de=v.colorSpace===Yt?null:$e.getPrimaries(v.colorSpace),ve=v.colorSpace===Yt||Se===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Pe=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,$=[];for(let ce=0;ce<6;ce++)!Pe&&!Be?$[ce]=_(v.image[ce],!1,!0,s.maxCubemapSize):$[ce]=Be?v.image[ce].image:v.image[ce],$[ce]=Oe(v,$[ce]);const je=$[0],w=p(je)||a,Z=r.convert(v.format,v.colorSpace),he=r.convert(v.type),se=T(v.internalFormat,Z,he,v.colorSpace),ye=a&&v.isVideoTexture!==!0,We=te.__version===void 0||ne===!0;let Ke=D(v,je,w);k(i.TEXTURE_CUBE_MAP,v,w);let Ve;if(Pe){ye&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,se,je.width,je.height);for(let ce=0;ce<6;ce++){Ve=$[ce].mipmaps;for(let P=0;P<Ve.length;P++){const ae=Ve[P];v.format!==$t?Z!==null?ye?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,0,0,ae.width,ae.height,Z,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,0,0,ae.width,ae.height,Z,he,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P,se,ae.width,ae.height,0,Z,he,ae.data)}}}else{Ve=v.mipmaps,ye&&We&&(Ve.length>0&&Ke++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,se,$[0].width,$[0].height));for(let ce=0;ce<6;ce++)if(Be){ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,$[ce].width,$[ce].height,Z,he,$[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,se,$[ce].width,$[ce].height,0,Z,he,$[ce].data);for(let P=0;P<Ve.length;P++){const oe=Ve[P].image[ce].image;ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,0,0,oe.width,oe.height,Z,he,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,se,oe.width,oe.height,0,Z,he,oe.data)}}else{ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Z,he,$[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,se,Z,he,$[ce]);for(let P=0;P<Ve.length;P++){const ae=Ve[P];ye?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,0,0,Z,he,ae.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,P+1,se,Z,he,ae.image[ce])}}}b(v,w)&&x(i.TEXTURE_CUBE_MAP),te.__version=ee.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ee(E,v,O,ne,ee,te){const Se=r.convert(O.format,O.colorSpace),de=r.convert(O.type),ve=T(O.internalFormat,Se,de,O.colorSpace);if(!n.get(v).__hasExternalTextures){const Be=Math.max(1,v.width>>te),$=Math.max(1,v.height>>te);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,te,ve,Be,$,v.depth,0,Se,de,null):t.texImage2D(ee,te,ve,Be,$,0,Se,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Me(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,n.get(O).__webglTexture,0,De(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,n.get(O).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer&&!v.stencilBuffer){let ne=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||Me(v)){const ee=v.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Rn?ne=i.DEPTH_COMPONENT32F:ee.type===An&&(ne=i.DEPTH_COMPONENT24));const te=De(v);Me(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,ne,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ne,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(v.depthBuffer&&v.stencilBuffer){const ne=De(v);O&&Me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):Me(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const ne=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let ee=0;ee<ne.length;ee++){const te=ne[ee],Se=r.convert(te.format,te.colorSpace),de=r.convert(te.type),ve=T(te.internalFormat,Se,de,te.colorSpace),Pe=De(v);O&&Me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ve,v.width,v.height):Me(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);const ne=n.get(v.depthTexture).__webglTexture,ee=De(v);if(v.depthTexture.format===Xn)Me(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(v.depthTexture.format===bi)Me(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ce(E){const v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ne(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=i.createRenderbuffer(),Ie(v.__webglDepthbuffer[ne],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ie(v.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(E,v,O){const ne=n.get(E);v!==void 0&&Ee(ne.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ce(E)}function N(E){const v=E.texture,O=n.get(E),ne=n.get(v);E.addEventListener("dispose",W),E.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=v.version,o.memory.textures++);const ee=E.isWebGLCubeRenderTarget===!0,te=E.isWebGLMultipleRenderTargets===!0,Se=p(E)||a;if(ee){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let ve=0;ve<v.mipmaps.length;ve++)O.__webglFramebuffer[de][ve]=i.createFramebuffer()}else O.__webglFramebuffer[de]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)O.__webglFramebuffer[de]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(te)if(s.drawBuffers){const de=E.texture;for(let ve=0,Pe=de.length;ve<Pe;ve++){const Be=n.get(de[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Me(E)===!1){const de=te?v:[v];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ve=0;ve<de.length;ve++){const Pe=de[ve];O.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ve]);const Be=r.convert(Pe.format,Pe.colorSpace),$=r.convert(Pe.type),je=T(Pe.internalFormat,Be,$,Pe.colorSpace,E.isXRRenderTarget===!0),w=De(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,w,je,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,O.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),k(i.TEXTURE_CUBE_MAP,v,Se);for(let de=0;de<6;de++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Ee(O.__webglFramebuffer[de][ve],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else Ee(O.__webglFramebuffer[de],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);b(v,Se)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const de=E.texture;for(let ve=0,Pe=de.length;ve<Pe;ve++){const Be=de[ve],$=n.get(Be);t.bindTexture(i.TEXTURE_2D,$.__webglTexture),k(i.TEXTURE_2D,Be,Se),Ee(O.__webglFramebuffer,E,Be,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),b(Be,Se)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,ne.__webglTexture),k(de,v,Se),a&&v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)Ee(O.__webglFramebuffer[ve],E,v,i.COLOR_ATTACHMENT0,de,ve);else Ee(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,de,0);b(v,Se)&&x(de),t.unbindTexture()}E.depthBuffer&&Ce(E)}function gt(E){const v=p(E)||a,O=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0,ee=O.length;ne<ee;ne++){const te=O[ne];if(b(te,v)){const Se=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,de=n.get(te).__webglTexture;t.bindTexture(Se,de),x(Se),t.unbindTexture()}}}function Ae(E){if(a&&E.samples>0&&Me(E)===!1){const v=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],O=E.width,ne=E.height;let ee=i.COLOR_BUFFER_BIT;const te=[],Se=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),ve=E.isWebGLMultipleRenderTargets===!0;if(ve)for(let Pe=0;Pe<v.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Pe=0;Pe<v.length;Pe++){te.push(i.COLOR_ATTACHMENT0+Pe),E.depthBuffer&&te.push(Se);const Be=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(Be===!1&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[Pe]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),ve){const $=n.get(v[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,O,ne,0,0,O,ne,ee,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Pe=0;Pe<v.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,de.__webglColorRenderbuffer[Pe]);const Be=n.get(v[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function De(E){return Math.min(s.maxSamples,E.samples)}function Me(E){const v=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function it(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Oe(E,v){const O=E.colorSpace,ne=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ka||O!==xn&&O!==Yt&&($e.getTransfer(O)===nt?a===!1?e.has("EXT_sRGB")===!0&&ne===$t?(E.format=ka,E.minFilter=Xt,E.generateMipmaps=!1):v=rh.sRGBToLinear(v):(ne!==$t||ee!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=L,this.resetTextureUnits=ie,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=qe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Me}function Vg(i,e,t){const n=t.isWebGL2;function s(r,o=Yt){let a;const l=$e.getTransfer(o);if(r===Pn)return i.UNSIGNED_BYTE;if(r===Kc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===yu)return i.BYTE;if(r===Tu)return i.SHORT;if(r===$a)return i.UNSIGNED_SHORT;if(r===jc)return i.INT;if(r===An)return i.UNSIGNED_INT;if(r===Rn)return i.FLOAT;if(r===vn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bu)return i.ALPHA;if(r===$t)return i.RGBA;if(r===wu)return i.LUMINANCE;if(r===Au)return i.LUMINANCE_ALPHA;if(r===Xn)return i.DEPTH_COMPONENT;if(r===bi)return i.DEPTH_STENCIL;if(r===ka)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ru)return i.RED;if(r===Jc)return i.RED_INTEGER;if(r===Cu)return i.RG;if(r===$c)return i.RG_INTEGER;if(r===Qc)return i.RGBA_INTEGER;if(r===na||r===ia||r===sa||r===ra)if(l===nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===na)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===na)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ia)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cl||r===hl||r===ul||r===fl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ul)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===fl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===eh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dl||r===pl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===dl)return l===nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===pl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ml||r===gl||r===_l||r===vl||r===xl||r===Ml||r===Sl||r===El||r===yl||r===Tl||r===bl||r===wl||r===Al||r===Rl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ml)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_l)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ml)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Sl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===El)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Tl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Al)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rl)return l===nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===aa||r===Cl||r===Pl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===aa)return l===nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pu||r===Ll||r===Dl||r===Ul)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===aa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ll)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ul)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class kg extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rt extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xg extends Kn{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,u=null;const b=[],x=[],T=new fe;let D=null;const C=new Ht;C.layers.enable(1),C.viewport=new st;const A=new Ht;A.layers.enable(2),A.viewport=new st;const W=[C,A],M=new kg;M.layers.enable(1),M.layers.enable(2);let y=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=b[k];return J===void 0&&(J=new Pa,b[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=b[k];return J===void 0&&(J=new Pa,b[k]=J),J.getGripSpace()},this.getHand=function(k){let J=b[k];return J===void 0&&(J=new Pa,b[k]=J),J.getHandSpace()};function V(k){const J=x.indexOf(k.inputSource);if(J===-1)return;const pe=b[J];pe!==void 0&&(pe.update(k.inputSource,k.frame,c||o),pe.dispatchEvent({type:k.type,data:k.inputSource}))}function ie(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",L);for(let k=0;k<b.length;k++){const J=x[k];J!==null&&(x[k]=null,b[k].disconnect(J))}y=null,G=null,e.setRenderTarget(p),m=null,d=null,f=null,s=null,u=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Qt(m.framebufferWidth,m.framebufferHeight,{format:$t,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,pe=null,Te=null;_.depth&&(Te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?bi:Xn,pe=_.stencil?Wn:An);const Ee={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};f=new XRWebGLBinding(s,t),d=f.createProjectionLayer(Ee),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Qt(d.textureWidth,d.textureHeight,{format:$t,type:Pn,depthTexture:new mh(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ie=e.properties.get(u);Ie.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),le.setContext(s),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(k){for(let J=0;J<k.removed.length;J++){const pe=k.removed[J],Te=x.indexOf(pe);Te>=0&&(x[Te]=null,b[Te].disconnect(pe))}for(let J=0;J<k.added.length;J++){const pe=k.added[J];let Te=x.indexOf(pe);if(Te===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=x.length){x.push(pe),Te=Ie;break}else if(x[Ie]===null){x[Ie]=pe,Te=Ie;break}if(Te===-1)break}const Ee=b[Te];Ee&&Ee.connect(pe)}}const I=new R,H=new R;function j(k,J,pe){I.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(pe.matrixWorld);const Te=I.distanceTo(H),Ee=J.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),Ce=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],N=(Ee[9]-1)/Ee[5],gt=(Ee[8]-1)/Ee[0],Ae=(Ie[8]+1)/Ie[0],De=Ne*gt,Me=Ne*Ae,it=Te/(-gt+Ae),Oe=it*-gt;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Oe),k.translateZ(it),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const E=Ne+it,v=Ce+it,O=De-Oe,ne=Me+(Te-Oe),ee=qe*Ce/v*E,te=N*Ce/v*E;k.projectionMatrix.makePerspective(O,ne,ee,te,E,v),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function X(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;M.near=A.near=C.near=k.near,M.far=A.far=C.far=k.far,(y!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,G=M.far);const J=k.parent,pe=M.cameras;X(M,J);for(let Te=0;Te<pe.length;Te++)X(pe[Te],J);pe.length===2?j(M,C,A):M.projectionMatrix.copy(C.projectionMatrix),Y(k,M,J)};function Y(k,J,pe){pe===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(pe.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Wa*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let K=null;function re(k,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Te=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,Te=!0);for(let Ee=0;Ee<pe.length;Ee++){const Ie=pe[Ee];let Ne=null;if(m!==null)Ne=m.getViewport(Ie);else{const qe=f.getViewSubImage(d,Ie);Ne=qe.viewport,Ee===0&&(e.setRenderTargetTextures(u,qe.colorTexture,d.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(u))}let Ce=W[Ee];Ce===void 0&&(Ce=new Ht,Ce.layers.enable(Ee),Ce.viewport=new st,W[Ee]=Ce),Ce.matrix.fromArray(Ie.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ie.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ee===0&&(M.matrix.copy(Ce.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Te===!0&&M.cameras.push(Ce)}}for(let pe=0;pe<b.length;pe++){const Te=x[pe],Ee=b[pe];Te!==null&&Ee!==void 0&&Ee.update(Te,J,c||o)}K&&K(k,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const le=new ph;le.setAnimationLoop(re),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}function Yg(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,uh(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,x,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,b,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ot&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ot&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qg(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){const T=x.program;n.uniformBlockBinding(b,T)}function c(b,x){let T=s[b.id];T===void 0&&(g(b),T=h(b),s[b.id]=T,b.addEventListener("dispose",p));const D=x.program;n.updateUBOMapping(b,D);const C=e.render.frame;r[b.id]!==C&&(d(b),r[b.id]=C)}function h(b){const x=f();b.__bindingPointIndex=x;const T=i.createBuffer(),D=b.__size,C=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,T),T}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=s[b.id],T=b.uniforms,D=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,A=T.length;C<A;C++){const W=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,y=W.length;M<y;M++){const G=W[M];if(m(G,C,M,D)===!0){const V=G.__offset,ie=Array.isArray(G.value)?G.value:[G.value];let L=0;for(let I=0;I<ie.length;I++){const H=ie[I],j=_(H);typeof H=="number"||typeof H=="boolean"?(G.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,V+L,G.__data)):H.isMatrix3?(G.__data[0]=H.elements[0],G.__data[1]=H.elements[1],G.__data[2]=H.elements[2],G.__data[3]=0,G.__data[4]=H.elements[3],G.__data[5]=H.elements[4],G.__data[6]=H.elements[5],G.__data[7]=0,G.__data[8]=H.elements[6],G.__data[9]=H.elements[7],G.__data[10]=H.elements[8],G.__data[11]=0):(H.toArray(G.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,x,T,D){const C=b.value,A=x+"_"+T;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{const W=D[A];if(typeof C=="number"||typeof C=="boolean"){if(W!==C)return D[A]=C,!0}else if(W.equals(C)===!1)return W.copy(C),!0}return!1}function g(b){const x=b.uniforms;let T=0;const D=16;for(let A=0,W=x.length;A<W;A++){const M=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,G=M.length;y<G;y++){const V=M[y],ie=Array.isArray(V.value)?V.value:[V.value];for(let L=0,I=ie.length;L<I;L++){const H=ie[L],j=_(H),X=T%D;X!==0&&D-X<j.boundary&&(T+=D-X),V.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=j.storage}}}const C=T%D;return C>0&&(T+=D-C),b.__size=T,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const T=o.indexOf(x.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Sh{constructor(e={}){const{canvas:t=ku(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1;const x=this;let T=!1,D=0,C=0,A=null,W=-1,M=null;const y=new st,G=new st;let V=null;const ie=new He(0);let L=0,I=t.width,H=t.height,j=1,X=null,Y=null;const K=new st(0,0,I,H),re=new st(0,0,I,H);let le=!1;const k=new to;let J=!1,pe=!1,Te=null;const Ee=new ct,Ie=new fe,Ne=new R,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return A===null?j:1}let N=n;function gt(S,U){for(let B=0;B<S.length;B++){const z=S[B],F=t.getContext(z,U);if(F!==null)return F}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Za}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),N=gt(U,S),N===null)throw gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ae,De,Me,it,Oe,E,v,O,ne,ee,te,Se,de,ve,Pe,Be,$,je,w,Z,he,se,ye,We;function Ke(){Ae=new im(N),De=new Jp(N,Ae,e),Ae.init(De),se=new Vg(N,Ae,De),Me=new Gg(N,Ae,De),it=new am(N),Oe=new wg,E=new Hg(N,Ae,Me,Oe,De,se,it),v=new Qp(x),O=new nm(x),ne=new pf(N,De),ye=new Kp(N,Ae,ne,De),ee=new sm(N,ne,it,ye),te=new hm(N,ee,ne,it),w=new cm(N,De,E),Be=new $p(Oe),Se=new bg(x,v,O,Ae,De,ye,Be),de=new Yg(x,Oe),ve=new Rg,Pe=new Ig(Ae,De),je=new jp(x,v,O,Me,te,d,l),$=new zg(x,te,De),We=new qg(N,it,De,Me),Z=new Zp(N,Ae,it,De),he=new rm(N,Ae,it,De),it.programs=Se.programs,x.capabilities=De,x.extensions=Ae,x.properties=Oe,x.renderLists=ve,x.shadowMap=$,x.state=Me,x.info=it}Ke();const Ve=new Xg(x,N);this.xr=Ve,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(I,H,!1))},this.getSize=function(S){return S.set(I,H)},this.setSize=function(S,U,B=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=S,H=U,t.width=Math.floor(S*j),t.height=Math.floor(U*j),B===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(I*j,H*j).floor()},this.setDrawingBufferSize=function(S,U,B){I=S,H=U,j=B,t.width=Math.floor(S*B),t.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(y)},this.getViewport=function(S){return S.copy(K)},this.setViewport=function(S,U,B,z){S.isVector4?K.set(S.x,S.y,S.z,S.w):K.set(S,U,B,z),Me.viewport(y.copy(K).multiplyScalar(j).floor())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,U,B,z){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,U,B,z),Me.scissor(G.copy(re).multiplyScalar(j).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){Me.setScissorTest(le=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(S=!0,U=!0,B=!0){let z=0;if(S){let F=!1;if(A!==null){const ge=A.texture.format;F=ge===Qc||ge===$c||ge===Jc}if(F){const ge=A.texture.type,we=ge===Pn||ge===An||ge===$a||ge===Wn||ge===Kc||ge===Zc,Le=je.getClearColor(),Ue=je.getClearAlpha(),ke=Le.r,Fe=Le.g,ze=Le.b;we?(m[0]=ke,m[1]=Fe,m[2]=ze,m[3]=Ue,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=ke,g[1]=Fe,g[2]=ze,g[3]=Ue,N.clearBufferiv(N.COLOR,0,g))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ve.dispose(),Pe.dispose(),Oe.dispose(),v.dispose(),O.dispose(),te.dispose(),ye.dispose(),We.dispose(),Se.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",Ct),Ve.removeEventListener("sessionend",tt),Te&&(Te.dispose(),Te=null),Pt.stop()};function ce(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=it.autoReset,U=$.enabled,B=$.autoUpdate,z=$.needsUpdate,F=$.type;Ke(),it.autoReset=S,$.enabled=U,$.autoUpdate=B,$.needsUpdate=z,$.type=F}function ae(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oe(S){const U=S.target;U.removeEventListener("dispose",oe),Re(U)}function Re(S){be(S),Oe.remove(S)}function be(S){const U=Oe.get(S).programs;U!==void 0&&(U.forEach(function(B){Se.releaseProgram(B)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,z,F,ge){U===null&&(U=Ce);const we=F.isMesh&&F.matrixWorld.determinant()<0,Le=Wh(S,U,B,z,F);Me.setMaterial(z,we);let Ue=B.index,ke=1;if(z.wireframe===!0){if(Ue=ee.getWireframeAttribute(B),Ue===void 0)return;ke=2}const Fe=B.drawRange,ze=B.attributes.position;let ht=Fe.start*ke,Bt=(Fe.start+Fe.count)*ke;ge!==null&&(ht=Math.max(ht,ge.start*ke),Bt=Math.min(Bt,(ge.start+ge.count)*ke)),Ue!==null?(ht=Math.max(ht,0),Bt=Math.min(Bt,Ue.count)):ze!=null&&(ht=Math.max(ht,0),Bt=Math.min(Bt,ze.count));const vt=Bt-ht;if(vt<0||vt===1/0)return;ye.setup(F,z,Le,B,Ue);let on,ot=Z;if(Ue!==null&&(on=ne.get(Ue),ot=he,ot.setIndex(on)),F.isMesh)z.wireframe===!0?(Me.setLineWidth(z.wireframeLinewidth*qe()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(F.isLine){let Xe=z.linewidth;Xe===void 0&&(Xe=1),Me.setLineWidth(Xe*qe()),F.isLineSegments?ot.setMode(N.LINES):F.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else F.isPoints?ot.setMode(N.POINTS):F.isSprite&&ot.setMode(N.TRIANGLES);if(F.isBatchedMesh)ot.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ot.renderInstances(ht,vt,F.count);else if(B.isInstancedBufferGeometry){const Xe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Jr=Math.min(B.instanceCount,Xe);ot.renderInstances(ht,vt,Jr)}else ot.render(ht,vt)};function Ze(S,U,B){S.transparent===!0&&S.side===mn&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,Fs(S,U,B),S.side=Ln,S.needsUpdate=!0,Fs(S,U,B),S.side=mn):Fs(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),p=Pe.get(B),p.init(),b.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(x._useLegacyLights);const z=new Set;return S.traverse(function(F){const ge=F.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Le=ge[we];Ze(Le,B,F),z.add(Le)}else Ze(ge,B,F),z.add(ge)}),b.pop(),p=null,z},this.compileAsync=function(S,U,B=null){const z=this.compile(S,U,B);return new Promise(F=>{function ge(){if(z.forEach(function(we){Oe.get(we).currentProgram.isReady()&&z.delete(we)}),z.size===0){F(S);return}setTimeout(ge,10)}Ae.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Je=null;function _t(S){Je&&Je(S)}function Ct(){Pt.stop()}function tt(){Pt.start()}const Pt=new ph;Pt.setAnimationLoop(_t),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(S){Je=S,Ve.setAnimationLoop(S),S===null?Pt.stop():Pt.start()},Ve.addEventListener("sessionstart",Ct),Ve.addEventListener("sessionend",tt),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(U),U=Ve.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,A),p=Pe.get(S,b.length),p.init(),b.push(p),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k.setFromProjectionMatrix(Ee),pe=this.localClippingEnabled,J=Be.init(this.clippingPlanes,pe),_=ve.get(S,u.length),_.init(),u.push(_),rn(S,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,Y),this.info.render.frame++,J===!0&&Be.beginShadows();const B=p.state.shadowsArray;if($.render(B,S,U),J===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,S),p.setupLights(x._useLegacyLights),U.isArrayCamera){const z=U.cameras;for(let F=0,ge=z.length;F<ge;F++){const we=z[F];Jo(_,S,we,we.viewport)}}else Jo(_,S,U);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(x,S,U),ye.resetDefaultState(),W=-1,M=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function rn(S,U,B,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||k.intersectsSprite(S)){z&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ee);const we=te.update(S),Le=S.material;Le.visible&&_.push(S,we,Le,B,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||k.intersectsObject(S))){const we=te.update(S),Le=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ne.copy(we.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(Ee)),Array.isArray(Le)){const Ue=we.groups;for(let ke=0,Fe=Ue.length;ke<Fe;ke++){const ze=Ue[ke],ht=Le[ze.materialIndex];ht&&ht.visible&&_.push(S,we,ht,B,Ne.z,ze)}}else Le.visible&&_.push(S,we,Le,B,Ne.z,null)}}const ge=S.children;for(let we=0,Le=ge.length;we<Le;we++)rn(ge[we],U,B,z)}function Jo(S,U,B,z){const F=S.opaque,ge=S.transmissive,we=S.transparent;p.setupLightsView(B),J===!0&&Be.setGlobalState(x.clippingPlanes,B),ge.length>0&&kh(F,ge,U,B),z&&Me.viewport(y.copy(z)),F.length>0&&Os(F,U,B),ge.length>0&&Os(ge,U,B),we.length>0&&Os(we,U,B),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function kh(S,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const ge=De.isWebGL2;Te===null&&(Te=new Qt(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?vn:Pn,minFilter:os,samples:ge?4:0})),x.getDrawingBufferSize(Ie),ge?Te.setSize(Ie.x,Ie.y):Te.setSize(Xa(Ie.x),Xa(Ie.y));const we=x.getRenderTarget();x.setRenderTarget(Te),x.getClearColor(ie),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=Cn,Os(S,B,z),E.updateMultisampleRenderTarget(Te),E.updateRenderTargetMipmap(Te);let Ue=!1;for(let ke=0,Fe=U.length;ke<Fe;ke++){const ze=U[ke],ht=ze.object,Bt=ze.geometry,vt=ze.material,on=ze.group;if(vt.side===mn&&ht.layers.test(z.layers)){const ot=vt.side;vt.side=Ot,vt.needsUpdate=!0,$o(ht,B,z,Bt,vt,on),vt.side=ot,vt.needsUpdate=!0,Ue=!0}}Ue===!0&&(E.updateMultisampleRenderTarget(Te),E.updateRenderTargetMipmap(Te)),x.setRenderTarget(we),x.setClearColor(ie,L),x.toneMapping=Le}function Os(S,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ge=S.length;F<ge;F++){const we=S[F],Le=we.object,Ue=we.geometry,ke=z===null?we.material:z,Fe=we.group;Le.layers.test(B.layers)&&$o(Le,U,B,Ue,ke,Fe)}}function $o(S,U,B,z,F,ge){S.onBeforeRender(x,U,B,z,F,ge),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(x,U,B,z,S,ge),F.transparent===!0&&F.side===mn&&F.forceSinglePass===!1?(F.side=Ot,F.needsUpdate=!0,x.renderBufferDirect(B,U,z,F,S,ge),F.side=Ln,F.needsUpdate=!0,x.renderBufferDirect(B,U,z,F,S,ge),F.side=mn):x.renderBufferDirect(B,U,z,F,S,ge),S.onAfterRender(x,U,B,z,F,ge)}function Fs(S,U,B){U.isScene!==!0&&(U=Ce);const z=Oe.get(S),F=p.state.lights,ge=p.state.shadowsArray,we=F.state.version,Le=Se.getParameters(S,F.state,ge,U,B),Ue=Se.getProgramCacheKey(Le);let ke=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||z.environment),ke===void 0&&(S.addEventListener("dispose",oe),ke=new Map,z.programs=ke);let Fe=ke.get(Ue);if(Fe!==void 0){if(z.currentProgram===Fe&&z.lightsStateVersion===we)return el(S,Le),Fe}else Le.uniforms=Se.getUniforms(S),S.onBuild(B,Le,x),S.onBeforeCompile(Le,x),Fe=Se.acquireProgram(Le,Ue),ke.set(Ue,Fe),z.uniforms=Le.uniforms;const ze=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=Be.uniform),el(S,Le),z.needsLights=Yh(S),z.lightsStateVersion=we,z.needsLights&&(ze.ambientLightColor.value=F.state.ambient,ze.lightProbe.value=F.state.probe,ze.directionalLights.value=F.state.directional,ze.directionalLightShadows.value=F.state.directionalShadow,ze.spotLights.value=F.state.spot,ze.spotLightShadows.value=F.state.spotShadow,ze.rectAreaLights.value=F.state.rectArea,ze.ltc_1.value=F.state.rectAreaLTC1,ze.ltc_2.value=F.state.rectAreaLTC2,ze.pointLights.value=F.state.point,ze.pointLightShadows.value=F.state.pointShadow,ze.hemisphereLights.value=F.state.hemi,ze.directionalShadowMap.value=F.state.directionalShadowMap,ze.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ze.spotShadowMap.value=F.state.spotShadowMap,ze.spotLightMatrix.value=F.state.spotLightMatrix,ze.spotLightMap.value=F.state.spotLightMap,ze.pointShadowMap.value=F.state.pointShadowMap,ze.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Fe,z.uniformsList=null,Fe}function Qo(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=ur.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function el(S,U){const B=Oe.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Wh(S,U,B,z,F){U.isScene!==!0&&(U=Ce),E.resetTextureUnits();const ge=U.fog,we=z.isMeshStandardMaterial?U.environment:null,Le=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xn,Ue=(z.isMeshStandardMaterial?O:v).get(z.envMap||we),ke=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ze=!!B.morphAttributes.position,ht=!!B.morphAttributes.normal,Bt=!!B.morphAttributes.color;let vt=Cn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(vt=x.toneMapping);const on=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=on!==void 0?on.length:0,Xe=Oe.get(z),Jr=p.state.lights;if(J===!0&&(pe===!0||S!==M)){const kt=S===M&&z.id===W;Be.setState(z,S,kt)}let lt=!1;z.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Jr.state.version||Xe.outputColorSpace!==Le||F.isBatchedMesh&&Xe.batching===!1||!F.isBatchedMesh&&Xe.batching===!0||F.isInstancedMesh&&Xe.instancing===!1||!F.isInstancedMesh&&Xe.instancing===!0||F.isSkinnedMesh&&Xe.skinning===!1||!F.isSkinnedMesh&&Xe.skinning===!0||F.isInstancedMesh&&Xe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Xe.instancingColor===!1&&F.instanceColor!==null||Xe.envMap!==Ue||z.fog===!0&&Xe.fog!==ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Be.numPlanes||Xe.numIntersection!==Be.numIntersection)||Xe.vertexAlphas!==ke||Xe.vertexTangents!==Fe||Xe.morphTargets!==ze||Xe.morphNormals!==ht||Xe.morphColors!==Bt||Xe.toneMapping!==vt||De.isWebGL2===!0&&Xe.morphTargetsCount!==ot)&&(lt=!0):(lt=!0,Xe.__version=z.version);let Nn=Xe.currentProgram;lt===!0&&(Nn=Fs(z,U,F));let tl=!1,Zi=!1,$r=!1;const bt=Nn.getUniforms(),On=Xe.uniforms;if(Me.useProgram(Nn.program)&&(tl=!0,Zi=!0,$r=!0),z.id!==W&&(W=z.id,Zi=!0),tl||M!==S){bt.setValue(N,"projectionMatrix",S.projectionMatrix),bt.setValue(N,"viewMatrix",S.matrixWorldInverse);const kt=bt.map.cameraPosition;kt!==void 0&&kt.setValue(N,Ne.setFromMatrixPosition(S.matrixWorld)),De.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&bt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Zi=!0,$r=!0)}if(F.isSkinnedMesh){bt.setOptional(N,F,"bindMatrix"),bt.setOptional(N,F,"bindMatrixInverse");const kt=F.skeleton;kt&&(De.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),bt.setValue(N,"boneTexture",kt.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(bt.setOptional(N,F,"batchingTexture"),bt.setValue(N,"batchingTexture",F._matricesTexture,E));const Qr=B.morphAttributes;if((Qr.position!==void 0||Qr.normal!==void 0||Qr.color!==void 0&&De.isWebGL2===!0)&&w.update(F,B,Nn),(Zi||Xe.receiveShadow!==F.receiveShadow)&&(Xe.receiveShadow=F.receiveShadow,bt.setValue(N,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(On.envMap.value=Ue,On.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Zi&&(bt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Xh(On,$r),ge&&z.fog===!0&&de.refreshFogUniforms(On,ge),de.refreshMaterialUniforms(On,z,j,H,Te),ur.upload(N,Qo(Xe),On,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ur.upload(N,Qo(Xe),On,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&bt.setValue(N,"center",F.center),bt.setValue(N,"modelViewMatrix",F.modelViewMatrix),bt.setValue(N,"normalMatrix",F.normalMatrix),bt.setValue(N,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let ea=0,qh=kt.length;ea<qh;ea++)if(De.isWebGL2){const nl=kt[ea];We.update(nl,Nn),We.bind(nl,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function Xh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Yh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,U,B){Oe.get(S.texture).__webglTexture=U,Oe.get(S.depthTexture).__webglTexture=B;const z=Oe.get(S);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){const B=Oe.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,B=0){A=S,D=U,C=B;let z=!0,F=null,ge=!1,we=!1;if(S){const Ue=Oe.get(S);Ue.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(N.FRAMEBUFFER,null),z=!1):Ue.__webglFramebuffer===void 0?E.setupRenderTarget(S):Ue.__hasExternalTextures&&E.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);const ke=S.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(we=!0);const Fe=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?F=Fe[U][B]:F=Fe[U],ge=!0):De.isWebGL2&&S.samples>0&&E.useMultisampledRTT(S)===!1?F=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[B]:F=Fe,y.copy(S.viewport),G.copy(S.scissor),V=S.scissorTest}else y.copy(K).multiplyScalar(j).floor(),G.copy(re).multiplyScalar(j).floor(),V=le;if(Me.bindFramebuffer(N.FRAMEBUFFER,F)&&De.drawBuffers&&z&&Me.drawBuffers(S,F),Me.viewport(y),Me.scissor(G),Me.setScissorTest(V),ge){const Ue=Oe.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ue.__webglTexture,B)}else if(we){const Ue=Oe.get(S.texture),ke=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.__webglTexture,B||0,ke)}W=-1},this.readRenderTargetPixels=function(S,U,B,z,F,ge,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){Me.bindFramebuffer(N.FRAMEBUFFER,Le);try{const Ue=S.texture,ke=Ue.format,Fe=Ue.type;if(ke!==$t&&se.convert(ke)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===vn&&(Ae.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Fe!==Pn&&se.convert(Fe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Rn&&(De.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&B>=0&&B<=S.height-F&&N.readPixels(U,B,z,F,se.convert(ke),se.convert(Fe),ge)}finally{const Ue=A!==null?Oe.get(A).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(S,U,B=0){const z=Math.pow(2,-B),F=Math.floor(U.image.width*z),ge=Math.floor(U.image.height*z);E.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,S.x,S.y,F,ge),Me.unbindTexture()},this.copyTextureToTexture=function(S,U,B,z=0){const F=U.image.width,ge=U.image.height,we=se.convert(B.format),Le=se.convert(B.type);E.setTexture2D(B,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,S.x,S.y,F,ge,we,Le,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,we,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,z,S.x,S.y,we,Le,U.image),z===0&&B.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(S,U,B,z,F=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=S.max.x-S.min.x+1,we=S.max.y-S.min.y+1,Le=S.max.z-S.min.z+1,Ue=se.convert(z.format),ke=se.convert(z.type);let Fe;if(z.isData3DTexture)E.setTexture3D(z,0),Fe=N.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)E.setTexture2DArray(z,0),Fe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const ze=N.getParameter(N.UNPACK_ROW_LENGTH),ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Bt=N.getParameter(N.UNPACK_SKIP_PIXELS),vt=N.getParameter(N.UNPACK_SKIP_ROWS),on=N.getParameter(N.UNPACK_SKIP_IMAGES),ot=B.isCompressedTexture?B.mipmaps[F]:B.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ot.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,S.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,S.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?N.texSubImage3D(Fe,F,U.x,U.y,U.z,ge,we,Le,Ue,ke,ot.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Fe,F,U.x,U.y,U.z,ge,we,Le,Ue,ot.data)):N.texSubImage3D(Fe,F,U.x,U.y,U.z,ge,we,Le,Ue,ke,ot),N.pixelStorei(N.UNPACK_ROW_LENGTH,ze),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,on),F===0&&z.generateMipmaps&&N.generateMipmap(Fe),Me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,Me.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qa?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===Er?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Yn:th}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Yn?Mt:xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jg extends Sh{}jg.prototype.isWebGL1Renderer=!0;class so{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new so(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kg extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Eh extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ec=new ct,qa=new Tr,ar=new yr,or=new R;class Zg extends yt{constructor(e=new Ut,t=new Eh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,e.ray.intersectsSphere(ar)===!1)return;Ec.copy(s).invert(),qa.copy(e.ray).applyMatrix4(Ec);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=c.getX(g);or.fromBufferAttribute(f,p),yc(or,p,l,s,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,_=m;g<_;g++)or.fromBufferAttribute(f,g),yc(or,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yc(i,e,t,n,s,r,o){const a=qa.distanceSqToPoint(i);if(a<t){const l=new R;qa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,m=(o-h)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new fe:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,s=[],r=[],o=[],a=new R,l=new ct;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(St(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(St(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yh extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new fe,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*f+this.aX,c=d*f+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Jg extends yh{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ro(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,m*=h,s(o,a,d,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const lr=new R,La=new ro,Da=new ro,Ua=new ro;class Th extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(lr.subVectors(s[0],s[1]).add(s[0]),c=lr);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),La.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,p),Da.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,p),Ua.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(La.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Da.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Ua.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(La.calc(l),Da.calc(l),Ua.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Tc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function $g(i,e){const t=1-i;return t*t*e}function Qg(i,e){return 2*(1-i)*i*e}function e0(i,e){return i*i*e}function ss(i,e,t,n){return $g(i,e)+Qg(i,t)+e0(i,n)}function t0(i,e){const t=1-i;return t*t*t*e}function n0(i,e){const t=1-i;return 3*t*t*i*e}function i0(i,e){return 3*(1-i)*i*i*e}function s0(i,e){return i*i*i*e}function rs(i,e,t,n,s){return t0(i,e)+n0(i,t)+i0(i,n)+s0(i,s)}class r0 extends Mn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,s.x,r.x,o.x,a.x),rs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class a0 extends Mn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,s.x,r.x,o.x,a.x),rs(e,s.y,r.y,o.y,a.y),rs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class o0 extends Mn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class l0 extends Mn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class c0 extends Mn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(e,s.x,r.x,o.x),ss(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bh extends Mn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(e,s.x,r.x,o.x),ss(e,s.y,r.y,o.y),ss(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h0 extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Tc(a,l.x,c.x,h.x,f.x),Tc(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var u0=Object.freeze({__proto__:null,ArcCurve:Jg,CatmullRomCurve3:Th,CubicBezierCurve:r0,CubicBezierCurve3:a0,EllipseCurve:yh,LineCurve:o0,LineCurve3:l0,QuadraticBezierCurve:c0,QuadraticBezierCurve3:bh,SplineCurve:h0});class ao extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new R,h=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const m=n+f/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Et extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],m=[];let g=0;const _=[],p=n/2;let u=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(m,2));function b(){const T=new R,D=new R;let C=0;const A=(t-e)/n;for(let W=0;W<=r;W++){const M=[],y=W/r,G=y*(t-e)+e;for(let V=0;V<=s;V++){const ie=V/s,L=ie*l+a,I=Math.sin(L),H=Math.cos(L);D.x=G*I,D.y=-y*n+p,D.z=G*H,f.push(D.x,D.y,D.z),T.set(I,A,H).normalize(),d.push(T.x,T.y,T.z),m.push(ie,1-y),M.push(g++)}_.push(M)}for(let W=0;W<s;W++)for(let M=0;M<r;M++){const y=_[M][W],G=_[M+1][W],V=_[M+1][W+1],ie=_[M][W+1];h.push(y,G,ie),h.push(G,V,ie),C+=6}c.addGroup(u,C,0),u+=C}function x(T){const D=g,C=new fe,A=new R;let W=0;const M=T===!0?e:t,y=T===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,p*y,0),d.push(0,y,0),m.push(.5,.5),g++;const G=g;for(let V=0;V<=s;V++){const L=V/s*l+a,I=Math.cos(L),H=Math.sin(L);A.x=M*H,A.y=p*y,A.z=M*I,f.push(A.x,A.y,A.z),d.push(0,y,0),C.x=I*.5+.5,C.y=H*.5*y+.5,m.push(C.x,C.y),g++}for(let V=0;V<s;V++){const ie=D+V,L=G+V;T===!0?h.push(L,L+1,ie):h.push(L+1,L,ie),W+=3}c.addGroup(u,W,T===!0?1:2),u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ar extends Et{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ar(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oo extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new R,d=new R,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const b=[],x=u/n;let T=0;u===0&&o===0?T=.5/t:u===n&&l===Math.PI&&(T=-.5/t);for(let D=0;D<=t;D++){const C=D/t;f.x=-e*Math.cos(s+C*r)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(C+T,1-x),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const x=h[u][b+1],T=h[u][b],D=h[u+1][b],C=h[u+1][b+1];(u!==0||o>0)&&m.push(x,T,C),(u!==n-1||l<Math.PI)&&m.push(T,D,C)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lo extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new R,f=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,b=(s+1)*m+g;o.push(_,p,b),o.push(p,u,b)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class co extends Ut{constructor(e=new bh(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new fe;let h=new R;const f=[],d=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new rt(f,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(m,2));function _(){for(let x=0;x<t;x++)p(x);p(r===!1?t:0),b(),u()}function p(x){h=e.getPointAt(x/t,h);const T=o.normals[x],D=o.binormals[x];for(let C=0;C<=s;C++){const A=C/s*Math.PI*2,W=Math.sin(A),M=-Math.cos(A);l.x=M*T.x+W*D.x,l.y=M*T.y+W*D.y,l.z=M*T.z+W*D.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=t;x++)for(let T=1;T<=s;T++){const D=(s+1)*(x-1)+(T-1),C=(s+1)*x+(T-1),A=(s+1)*x+T,W=(s+1)*(x-1)+T;g.push(D,C,W),g.push(C,A,W)}}function b(){for(let x=0;x<=t;x++)for(let T=0;T<=s;T++)c.x=x/t,c.y=T/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new co(new u0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class f0 extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class me extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bc extends me{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ho extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ia=new ct,wc=new R,Ac=new R;class wh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(wc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Rc=new ct,ns=new R,Na=new R;class d0 extends wh{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(ns),Na.copy(n.position),Na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Na),n.updateMatrixWorld(),s.makeTranslation(-ns.x,-ns.y,-ns.z),Rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc)}}class Dn extends ho{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new d0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class p0 extends wh{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m0 extends ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new p0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class g0 extends ho{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ah{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cc(){return(typeof performance>"u"?Date:performance).now()}class _0{constructor(e,t,n=0,s=1/0){this.ray=new Tr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ja(e,this,n,t),n.sort(Pc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ja(e[s],this,n,t);return n.sort(Pc),n}}function Pc(i,e){return i.distance-e.distance}function ja(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)ja(s[r],e,t,!0)}}class Lc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);const Dc={type:"change"},Oa={type:"start"},Uc={type:"end"},cr=new Tr,Ic=new wn,v0=Math.cos(70*Vu.DEG2RAD);class x0 extends Kn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ti.ROTATE,MIDDLE:ti.DOLLY,RIGHT:ti.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",te),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",te),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Dc),n.update(),r=s.NONE},this.update=(function(){const w=new R,Z=new qn().setFromUnitVectors(e.up,new R(0,1,0)),he=Z.clone().invert(),se=new R,ye=new qn,We=new R,Ke=2*Math.PI;return function(ce=null){const P=n.object.position;w.copy(P).sub(n.target),w.applyQuaternion(Z),a.setFromVector3(w),n.autoRotate&&r===s.NONE&&G(M(ce)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ae=n.minAzimuthAngle,oe=n.maxAzimuthAngle;isFinite(ae)&&isFinite(oe)&&(ae<-Math.PI?ae+=Ke:ae>Math.PI&&(ae-=Ke),oe<-Math.PI?oe+=Ke:oe>Math.PI&&(oe-=Ke),ae<=oe?a.theta=Math.max(ae,Math.min(oe,a.theta)):a.theta=a.theta>(ae+oe)/2?Math.max(ae,a.theta):Math.min(oe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*c),w.setFromSpherical(a),w.applyQuaternion(he),P.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Re=!1;if(n.zoomToCursor&&C){let be=null;if(n.object.isPerspectiveCamera){const Ze=w.length();be=Y(Ze*c);const Je=Ze-be;n.object.position.addScaledVector(T,Je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ze=new R(D.x,D.y,0);Ze.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Re=!0;const Je=new R(D.x,D.y,0);Je.unproject(n.object),n.object.position.sub(Je).add(Ze),n.object.updateMatrixWorld(),be=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;be!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(be).add(n.object.position):(cr.origin.copy(n.object.position),cr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(cr.direction))<v0?e.lookAt(n.target):(Ic.setFromNormalAndCoplanarPoint(n.object.up,n.target),cr.intersectPlane(Ic,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Re=!0);return c=1,C=!1,Re||se.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o||We.distanceToSquared(n.target)>0?(n.dispatchEvent(Dc),se.copy(n.object.position),ye.copy(n.object.quaternion),We.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ve),n.domElement.removeEventListener("pointerdown",Oe),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",v),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",te),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new Lc,l=new Lc;let c=1;const h=new R,f=new fe,d=new fe,m=new fe,g=new fe,_=new fe,p=new fe,u=new fe,b=new fe,x=new fe,T=new R,D=new fe;let C=!1;const A=[],W={};function M(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function y(w){const Z=Math.abs(w)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*Z)}function G(w){l.theta-=w}function V(w){l.phi-=w}const ie=(function(){const w=new R;return function(he,se){w.setFromMatrixColumn(se,0),w.multiplyScalar(-he),h.add(w)}})(),L=(function(){const w=new R;return function(he,se){n.screenSpacePanning===!0?w.setFromMatrixColumn(se,1):(w.setFromMatrixColumn(se,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(he),h.add(w)}})(),I=(function(){const w=new R;return function(he,se){const ye=n.domElement;if(n.object.isPerspectiveCamera){const We=n.object.position;w.copy(We).sub(n.target);let Ke=w.length();Ke*=Math.tan(n.object.fov/2*Math.PI/180),ie(2*he*Ke/ye.clientHeight,n.object.matrix),L(2*se*Ke/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ie(he*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),L(se*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function H(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(w,Z){if(!n.zoomToCursor)return;C=!0;const he=n.domElement.getBoundingClientRect(),se=w-he.left,ye=Z-he.top,We=he.width,Ke=he.height;D.x=se/We*2-1,D.y=-(ye/Ke)*2+1,T.set(D.x,D.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function K(w){f.set(w.clientX,w.clientY)}function re(w){X(w.clientX,w.clientX),u.set(w.clientX,w.clientY)}function le(w){g.set(w.clientX,w.clientY)}function k(w){d.set(w.clientX,w.clientY),m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;G(2*Math.PI*m.x/Z.clientHeight),V(2*Math.PI*m.y/Z.clientHeight),f.copy(d),n.update()}function J(w){b.set(w.clientX,w.clientY),x.subVectors(b,u),x.y>0?H(y(x.y)):x.y<0&&j(y(x.y)),u.copy(b),n.update()}function pe(w){_.set(w.clientX,w.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(_),n.update()}function Te(w){X(w.clientX,w.clientY),w.deltaY<0?j(y(w.deltaY)):w.deltaY>0&&H(y(w.deltaY)),n.update()}function Ee(w){let Z=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?V(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?V(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),Z=!0;break}Z&&(w.preventDefault(),n.update())}function Ie(w){if(A.length===1)f.set(w.pageX,w.pageY);else{const Z=je(w),he=.5*(w.pageX+Z.x),se=.5*(w.pageY+Z.y);f.set(he,se)}}function Ne(w){if(A.length===1)g.set(w.pageX,w.pageY);else{const Z=je(w),he=.5*(w.pageX+Z.x),se=.5*(w.pageY+Z.y);g.set(he,se)}}function Ce(w){const Z=je(w),he=w.pageX-Z.x,se=w.pageY-Z.y,ye=Math.sqrt(he*he+se*se);u.set(0,ye)}function qe(w){n.enableZoom&&Ce(w),n.enablePan&&Ne(w)}function N(w){n.enableZoom&&Ce(w),n.enableRotate&&Ie(w)}function gt(w){if(A.length==1)d.set(w.pageX,w.pageY);else{const he=je(w),se=.5*(w.pageX+he.x),ye=.5*(w.pageY+he.y);d.set(se,ye)}m.subVectors(d,f).multiplyScalar(n.rotateSpeed);const Z=n.domElement;G(2*Math.PI*m.x/Z.clientHeight),V(2*Math.PI*m.y/Z.clientHeight),f.copy(d)}function Ae(w){if(A.length===1)_.set(w.pageX,w.pageY);else{const Z=je(w),he=.5*(w.pageX+Z.x),se=.5*(w.pageY+Z.y);_.set(he,se)}p.subVectors(_,g).multiplyScalar(n.panSpeed),I(p.x,p.y),g.copy(_)}function De(w){const Z=je(w),he=w.pageX-Z.x,se=w.pageY-Z.y,ye=Math.sqrt(he*he+se*se);b.set(0,ye),x.set(0,Math.pow(b.y/u.y,n.zoomSpeed)),H(x.y),u.copy(b);const We=(w.pageX+Z.x)*.5,Ke=(w.pageY+Z.y)*.5;X(We,Ke)}function Me(w){n.enableZoom&&De(w),n.enablePan&&Ae(w)}function it(w){n.enableZoom&&De(w),n.enableRotate&&gt(w)}function Oe(w){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",E),n.domElement.addEventListener("pointerup",v)),Pe(w),w.pointerType==="touch"?Se(w):O(w))}function E(w){n.enabled!==!1&&(w.pointerType==="touch"?de(w):ne(w))}function v(w){Be(w),A.length===0&&(n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",E),n.domElement.removeEventListener("pointerup",v)),n.dispatchEvent(Uc),r=s.NONE}function O(w){let Z;switch(w.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case ti.DOLLY:if(n.enableZoom===!1)return;re(w),r=s.DOLLY;break;case ti.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;le(w),r=s.PAN}else{if(n.enableRotate===!1)return;K(w),r=s.ROTATE}break;case ti.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;K(w),r=s.ROTATE}else{if(n.enablePan===!1)return;le(w),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Oa)}function ne(w){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;k(w);break;case s.DOLLY:if(n.enableZoom===!1)return;J(w);break;case s.PAN:if(n.enablePan===!1)return;pe(w);break}}function ee(w){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(w.preventDefault(),n.dispatchEvent(Oa),Te(w),n.dispatchEvent(Uc))}function te(w){n.enabled===!1||n.enablePan===!1||Ee(w)}function Se(w){switch($(w),A.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;Ie(w),r=s.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;Ne(w),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(w),r=s.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;N(w),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Oa)}function de(w){switch($(w),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;gt(w),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ae(w),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Me(w),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;it(w),n.update();break;default:r=s.NONE}}function ve(w){n.enabled!==!1&&w.preventDefault()}function Pe(w){A.push(w.pointerId)}function Be(w){delete W[w.pointerId];for(let Z=0;Z<A.length;Z++)if(A[Z]==w.pointerId){A.splice(Z,1);return}}function $(w){let Z=W[w.pointerId];Z===void 0&&(Z=new fe,W[w.pointerId]=Z),Z.set(w.pageX,w.pageY)}function je(w){const Z=w.pointerId===A[0]?A[1]:A[0];return W[Z]}n.domElement.addEventListener("contextmenu",ve),n.domElement.addEventListener("pointerdown",Oe),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",ee,{passive:!1}),this.update()}}const Rh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Di{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const M0=new no(-1,1,1,-1,0,1);class S0 extends Ut{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}}const E0=new S0;class uo{constructor(e){this._mesh=new q(E0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,M0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class y0 extends Di{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ls.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new uo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Nc extends Di{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class T0 extends Di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class b0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new y0(Rh),this.copyPass.material.blending=_n,this.clock=new Ah}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(o instanceof Nc?n=!0:o instanceof T0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w0 extends Di{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const A0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ai extends Di{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new He(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Qt(r,o,{type:vn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Qt(r,o,{type:vn});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=A0;this.highPassUniforms=ls.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new fe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Rh;this.copyUniforms=ls.clone(h.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new He,this.oldClearAlpha=1,this.basic=new us,this.fsQuad=new uo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new fe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ai.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ai.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ai.BlurDirectionX=new fe(1,0);Ai.BlurDirectionY=new fe(0,1);const R0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class C0 extends Di{constructor(){super();const e=R0;this.uniforms=ls.clone(e.uniforms),this.material=new f0({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new uo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===nt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const P0=document.getElementById("canvas-container"),as=document.getElementById("tooltip"),mt=new Kg;mt.background=null;mt.fog=new so(658456,.03);const Ri=new Ht(38,window.innerWidth/window.innerHeight,.1,100);Ri.position.set(7,4.8,7);const tn=new Sh({antialias:!0,alpha:!0,powerPreference:"high-performance"});tn.setSize(window.innerWidth,window.innerHeight);tn.setPixelRatio(Math.min(window.devicePixelRatio,2));tn.shadowMap.enabled=!0;tn.shadowMap.type=Hc;tn.toneMapping=Ja;tn.toneMappingExposure=1;tn.outputColorSpace=Mt;P0.appendChild(tn.domElement);const fs=new b0(tn);fs.addPass(new w0(mt,Ri));const Ch=new Ai(new fe(window.innerWidth,window.innerHeight),.22,.6,.88);fs.addPass(Ch);fs.addPass(new C0);const nn=new x0(Ri,tn.domElement);nn.enableDamping=!0;nn.dampingFactor=.045;nn.rotateSpeed=.68;nn.zoomSpeed=.85;nn.enablePan=!1;nn.minDistance=3.2;nn.maxDistance=14;nn.maxPolarAngle=Math.PI/2.08;nn.minPolarAngle=Math.PI/5.5;nn.target.set(0,1,-1.5);const et={wall:new me({color:15262420,roughness:.88,metalness:.02}),wallTrim:new me({color:14209732,roughness:.82,metalness:.03}),buildingDark:new me({color:2964053,roughness:.78,metalness:.12}),asphalt:new me({color:1645349,roughness:.9,metalness:.04}),sidewalk:new me({color:3882575,roughness:.92,metalness:.03}),metalFrame:new me({color:5922156,roughness:.32,metalness:.75}),glass:new bc({color:13164799,transparent:!0,opacity:.28,roughness:.04,metalness:.02,transmission:.92,ior:1.5,thickness:.06,clearcoat:.9,clearcoatRoughness:.08,emissive:16771276,emissiveIntensity:.08}),glassCold:new bc({color:12114175,transparent:!0,opacity:.3,roughness:.05,metalness:.02,transmission:.9,ior:1.5,thickness:.05,emissive:11197951,emissiveIntensity:.15}),puddle:new me({color:1912136,roughness:.02,metalness:.92,transparent:!0,opacity:.5}),signGlow:new me({color:16777215,emissive:16777215,emissiveIntensity:0,roughness:.45,metalness:.1}),plastic:new me({color:14671839,roughness:.58,metalness:.05}),darkMetal:new me({color:3684418,roughness:.38,metalness:.68}),wood:new me({color:9137234,roughness:.8,metalness:.02})},L0=new g0(3160664,.26);mt.add(L0);const sn=new m0(9415679,.24);sn.position.set(-5,9,4);sn.castShadow=!0;sn.shadow.mapSize.set(1024,1024);sn.shadow.camera.left=-6;sn.shadow.camera.right=6;sn.shadow.camera.top=6;sn.shadow.camera.bottom=-6;sn.shadow.camera.near=1;sn.shadow.camera.far=20;sn.shadow.bias=-5e-4;mt.add(sn);const fo=new Dn(16765594,0,9,2.1);fo.position.set(0,2,-1.4);mt.add(fo);const po=new Dn(16770754,0,6,2.2);po.position.set(-.4,1.4,-1.8);mt.add(po);const Ph=[];for(let i=0;i<3;i++){const e=new Dn(16773320,0,3,2);e.position.set(-1+i*1,2.32,1.55),Ph.push(e),mt.add(e)}const mo=new Dn(11197951,0,2.5,2);mo.position.set(-.2,1.2,-1.2);mt.add(mo);const Rr=new Dn(6719709,0,6,1.9);Rr.position.set(-1.2,2,-.3);mt.add(Rr);const go=new Dn(16760426,0,5.5,2.1);go.position.set(2,2.6,1.8);mt.add(go);const _o=new Dn(16757606,0,3.5,2.3);_o.position.set(-2.8,2,-2.7);mt.add(_o);const vo=new Dn(6719692,0,8,2.6);vo.position.set(0,.1,1);mt.add(vo);const ds=new Rt;mt.add(ds);const Cr=new q(new xe(8.6,.45,8.6),new me({color:1053214,roughness:.92,metalness:.08}));Cr.position.y=-.225;Cr.receiveShadow=!0;ds.add(Cr);const xo=new q(new xe(8.5,.05,8.5),new me({color:1645614,roughness:.78,metalness:.2}));xo.position.y=.025;ds.add(xo);const D0=new me({color:2896202,roughness:.6,metalness:.3});function Pr(i,e,t=0){const n=new q(new xe(8.5,.1,.1),D0);return n.position.set(i,.07,e),n.rotation.y=t,ds.add(n),n}const U0=Pr(0,4.25),I0=Pr(0,-4.25),N0=Pr(4.25,0,Math.PI/2),O0=Pr(-4.25,0,Math.PI/2),Tt=new Rt;ds.add(Tt);const _e=.051,Zn=new q(new pt(8.4,8.4),et.asphalt);Zn.rotation.x=-Math.PI/2;Zn.position.y=_e;Zn.receiveShadow=!0;Zn.name="沥青路面";Tt.add(Zn);const Jn=new q(new pt(3.4,4.4),et.sidewalk);Jn.rotation.x=-Math.PI/2;Jn.position.set(-1.7,_e+.001,-.8);Jn.receiveShadow=!0;Jn.name="人行道";Tt.add(Jn);const Ui=new q(new xe(3.4,.14,.14),new me({color:5395816,roughness:.82,metalness:.08}));Ui.position.set(-1.7,_e+.07,-.4);Ui.castShadow=!0;Ui.name="路缘石";Tt.add(Ui);const ps=new q(new xe(3.4,.025,.18),new me({color:921110,roughness:.72,metalness:.45}));ps.position.set(-1.7,_e+.0125,.92);ps.name="排水沟";Tt.add(ps);for(let i=0;i<15;i++){const e=new q(new xe(.2,.02,.025),new me({color:2105388,roughness:.62,metalness:.35}));e.position.set(-3.05+i*.23,_e+.01,.92),Tt.add(e)}for(let i=0;i<6;i++){const e=new q(new pt(.17,.95),new me({color:16777215,emissive:16777215,emissiveIntensity:.04,roughness:.68}));e.rotation.x=-Math.PI/2,e.position.set(-2.65+i*.37,_e+.003,2.35),Tt.add(e)}Tt.children[18].name="斑马线";for(let i=0;i<3;i++){const e=new q(new xe(1.5,.02,.04),new me({color:16777215,emissive:16777215,emissiveIntensity:.02,roughness:.58}));e.position.set(2.45,_e+.01,-2.2+i*1.35),Tt.add(e)}function Mo(i,e,t,n=.45){const s=new q(new ao(t,64),et.puddle.clone());return s.rotation.x=-Math.PI/2,s.position.set(i,_e+.002,e),s.material.opacity=n,s.name="地面积水",Tt.add(s),s}const So=Mo(1.7,1.65,1.1,.5),Lh=Mo(1.2,1,.7,.42),Dh=Mo(-1.7,-1.2,.75,.4);function Eo(i,e,t,n,s,r=.18){const o=new q(new pt(t,n),new us({color:s,transparent:!0,opacity:r,blending:dr,depthWrite:!1}));return o.rotation.x=-Math.PI/2,o.position.set(i,_e+.004,e),Tt.add(o),o}const Uh=Eo(1.7,1.65,.9,.2,16760426,.2),Ih=Eo(1.2,1,1.1,.25,16765594,.18),F0=Eo(-1.2,.5,.6,.15,6719709,.16),Ii=new Rt,Nh=new me({color:7173523,roughness:.65,metalness:.25});for(let i=0;i<4;i++){const e=new q(new Et(.04,.04,.62,16),Nh);e.position.set(.06+i*.36,_e+.31,-2.05),Ii.add(e)}const Oh=new q(new xe(1.15,.05,.05),Nh);Oh.position.set(.6,_e+.57,-2.05);Ii.add(Oh);Ii.name="街角护栏";Tt.add(Ii);const ms=new Rt,Lr=new q(new xe(.12,2.5,1.7),new me({color:4869214,roughness:.85,metalness:.06}));Lr.position.set(-3.45,_e+1.25,-2.45);Lr.castShadow=!0;ms.add(Lr);const yo=new q(new xe(1.7,2.5,.12),new me({color:2105908,roughness:.92,metalness:.02}));yo.position.set(-2.65,_e+1.25,-3.25);ms.add(yo);ms.name="小巷入口";Tt.add(ms);const Qe=new Rt;Qe.position.set(0,0,-1.5);mt.add(Qe);const Dr=et.wall,B0=et.wallTrim,$n=new q(new xe(3.3,2.65,.1),Dr);$n.position.set(0,1.325,-1.15);$n.castShadow=!0;$n.receiveShadow=!0;$n.name="便利店外墙";Qe.add($n);const To=new q(new xe(3.3,.06,.11),B0);To.position.set(0,1.8,-1.15);Qe.add(To);const gs=new q(new xe(.1,2.65,2.3),Dr);gs.position.set(-1.65,1.325,0);gs.castShadow=!0;gs.receiveShadow=!0;Qe.add(gs);const _s=new q(new xe(.1,2.65,2.3),Dr);_s.position.set(1.65,1.325,0);_s.castShadow=!0;_s.receiveShadow=!0;Qe.add(_s);const Ur=new q(new xe(3.3,.1,2.3),Dr);Ur.position.set(0,2.6,0);Ur.receiveShadow=!0;Qe.add(Ur);const vs=new q(new xe(.12,.75,.95),new me({color:2438485,emissive:4487133,emissiveIntensity:0,roughness:.55}));vs.position.set(1.71,1.6,-.6);vs.name="侧墙招牌";Qe.add(vs);const Ir=new q(new xe(3.7,.2,2.8),et.buildingDark);Ir.position.y=2.75;Ir.castShadow=!0;Qe.add(Ir);const Ni=new q(new xe(3.6,.14,.75),et.buildingDark);Ni.position.set(0,2.46,1.38);Ni.castShadow=!0;Ni.name="便利店雨棚";Qe.add(Ni);for(let i=0;i<2;i++){const e=new q(new Et(.03,.03,.5,12),et.metalFrame);e.position.set(-1.4+i*2.8,2.21,1.65),Qe.add(e)}for(let i=0;i<3;i++){const e=new q(new Et(.06,.07,.03,16),new me({color:16777215,emissive:16773320,emissiveIntensity:0}));e.position.set(-1+i*1,2.38,1.6),e.name="雨棚筒灯",Qe.add(e)}const bo=new q(new xe(3.5,.68,.18),et.darkMetal);bo.position.set(0,2.18,1.2);Qe.add(bo);const Oi=new q(new xe(3.4,.58,.14),et.signGlow);Oi.position.set(0,2.18,1.23);Oi.name="便利店招牌";Qe.add(Oi);const Nr=new q(new xe(.95,.38,.08),new me({color:16777215,emissive:15610692,emissiveIntensity:0,roughness:.35}));Nr.position.set(-1,2.18,1.28);Qe.add(Nr);const Or=new q(new xe(.95,.38,.08),new me({color:16777215,emissive:3368669,emissiveIntensity:0,roughness:.35}));Or.position.set(1,2.18,1.28);Qe.add(Or);const wo=new q(new xe(3,.11,.07),et.metalFrame),Ao=new q(new xe(3,.11,.07),et.metalFrame),Ro=new q(new xe(.09,1.22,.07),et.metalFrame),Co=new q(new xe(.06,1.22,.07),et.metalFrame),Po=new q(new xe(.06,1.22,.07),et.metalFrame);wo.position.set(0,1.88,1.18);Ao.position.set(0,.54,1.18);Ro.position.set(0,1.21,1.18);Co.position.set(-1,1.21,1.18);Po.position.set(1,1.21,1.18);Qe.add(wo,Ao,Ro,Co,Po);const xs=new q(new pt(.9,1.12),et.glass),Lo=new q(new pt(.9,1.12),et.glass),Do=new q(new pt(.9,1.12),et.glass),Uo=new q(new pt(.9,1.12),et.glass);xs.position.set(-1.3,1.21,1.182);Lo.position.set(-.45,1.21,1.182);Do.position.set(.45,1.21,1.182);Uo.position.set(1.3,1.21,1.182);xs.name="便利店橱窗";Qe.add(xs,Lo,Do,Uo);const Io=new q(new xe(1.25,1.75,.12),et.metalFrame);Io.position.set(1.28,.875,1.13);Qe.add(Io);const No=new q(new xe(.06,1.55,.08),et.metalFrame);No.position.set(1.28,.875,1.17);Qe.add(No);const Fi=new q(new pt(.52,1.45),et.glass.clone()),Fr=new q(new pt(.52,1.45),et.glass.clone());Fi.material.emissiveIntensity=.12;Fr.material.emissiveIntensity=.12;Fi.position.set(1,.875,1.185);Fr.position.set(1.56,.875,1.185);Fi.name="自动门";Qe.add(Fi,Fr);for(let i=0;i<2;i++){const e=new q(new xe(1.3,.04,.25),new me({color:13421772,roughness:.75,metalness:.1}));e.position.set(1.28,_e+.02+i*.04,1.35+i*.12),Qe.add(e)}const Bi=new q(new pt(1.05,.6),new me({color:8014379,roughness:.96}));Bi.rotation.x=-Math.PI/2;Bi.position.set(1.28,_e+.004,1.65);Bi.name="门口地垫";Qe.add(Bi);const at=new Rt;at.position.z=-.3;const Br=new q(new pt(2.8,1.8),new me({color:15130320,roughness:.82}));Br.rotation.x=-Math.PI/2;Br.position.y=_e;at.add(Br);const z0=new me({color:15921906,roughness:.62,metalness:.05});for(let i=0;i<4;i++){const e=new q(new xe(.9,.045,.35),z0);e.position.set(-1.15,_e+.44+i*.35,-.6),at.add(e);const t=new q(new xe(.9,.03,.02),new me({color:16777215,emissive:16777198,emissiveIntensity:.05}));t.position.set(-1.15,_e+.42+i*.35,-.42),at.add(t)}at.children[1].name="店内货架";const Oc=[16733525,5605631,5627238,16768341,16742331,5627391,16755285,11171839];for(let i=0;i<3;i++)for(let e=0;e<7;e++){const t=Oc[(i*3+e)%Oc.length],n=new q(new xe(.09,.15,.08),new me({color:t,roughness:.58,metalness:.03,emissive:t,emissiveIntensity:.02}));n.position.set(-1.37+e*.13,_e+.54+i*.35,-.6),at.add(n)}const zr=new q(new xe(1.5,.95,.45),new me({color:16448250,roughness:.58,metalness:.04}));zr.position.set(.2,_e+.475,-.75);at.add(zr);const Ms=new q(new xe(.75,1.95,.6),new me({color:16777215,roughness:.52,metalness:.06}));Ms.position.set(-.2,_e+.975,-1.45);Ms.name="冷藏柜";at.add(Ms);for(let i=0;i<5;i++){const e=new q(new xe(.65,.02,.45),new me({color:15658734,roughness:.6}));e.position.set(-.2,_e+.3+i*.35,-1.3),at.add(e)}const Oo=new q(new pt(.65,1.75),et.glassCold);Oo.position.set(-.2,_e+.975,-1.145);at.add(Oo);const Ss=new q(new xe(.65,1.35,.45),new me({color:16777215,roughness:.55,metalness:.05}));Ss.position.set(.95,_e+.675,-1.45);Ss.name="饮料柜";at.add(Ss);const Gr=new q(new pt(.55,1.15),et.glassCold.clone());Gr.material.emissiveIntensity=.18;Gr.position.set(.95,_e+.675,-1.22);at.add(Gr);const Es=new q(new xe(1.05,.7,.55),new me({color:15395562,roughness:.6,metalness:.05}));Es.position.set(1.15,_e+.35,-.55);Es.name="收银台";at.add(Es);const ys=new q(new xe(.32,.24,.24),new me({color:3355450,roughness:.48,metalness:.2,emissive:4487167,emissiveIntensity:.08}));ys.position.set(1.15,_e+.74,-.55);ys.name="收银机";at.add(ys);const Ts=new q(new xe(.28,.25,.22),new me({color:14540253,roughness:.5,emissive:16764040,emissiveIntensity:.12}));Ts.position.set(.85,_e+.67,-.5);Ts.name="关东煮机";at.add(Ts);const Fo=new q(new xe(.32,.26,.22),new me({color:14342874,roughness:.52,metalness:.12}));Fo.position.set(.75,_e+.73,-.55);at.add(Fo);const bs=new q(new xe(.25,.8,.08),new me({color:13158600,roughness:.55,metalness:.2}));bs.position.set(.8,_e+.4,.5);bs.name="杂志架";at.add(bs);const Bo=new q(new xe(.38,.55,.04),new me({color:16729190,emissive:16720452,emissiveIntensity:.08}));Bo.position.set(-1.18,_e+1.45,-1.53);at.add(Bo);const ws=new q(new xe(.3,.4,.04),new me({color:4491519,emissive:3373021,emissiveIntensity:.08}));ws.position.set(-.7,_e+1.5,-1.53);ws.name="促销海报";at.add(ws);const zi=new q(new xe(1.1,.07,.45),new me({color:16777215,emissive:16774360,emissiveIntensity:0}));zi.position.set(0,2.41,-.65);zi.name="天花板顶灯";at.add(zi);Qe.add(at);const Ft=new Rt;mt.add(Ft);const Qn=new Rt;Qn.position.set(-2.35,0,.6);const Gi=new q(new xe(.65,1.3,.4),new me({color:2250171,roughness:.52,metalness:.32}));Gi.position.y=_e+.65;Gi.castShadow=!0;Gi.name="自动贩卖机";Qn.add(Gi);const Hr=new q(new pt(.55,.7),et.glassCold.clone());Hr.material.emissiveIntensity=.2;Hr.position.set(0,_e+.82,.21);Qn.add(Hr);const Vr=new q(new xe(.55,.18,.05),new me({color:16777215,emissive:4487133,emissiveIntensity:0}));Vr.position.set(0,_e+1.16,.215);Qn.add(Vr);const kr=new q(new Et(.035,.035,.03,18),new me({color:16763955,emissive:16755200,emissiveIntensity:.18}));kr.rotation.x=Math.PI/2;kr.position.set(0,_e+1.04,.24);Qn.add(kr);const zo=new q(new xe(.4,.12,.03),new me({color:1118498,roughness:.82}));zo.position.set(0,_e+.3,.21);Qn.add(zo);Ft.add(Qn);const Un=new Rt;Un.position.set(1.6,0,-.9);Un.rotation.y=.48;const Fh=new lo(.22,.032,16,24),Bh=new me({color:1842210,roughness:.88,metalness:.05}),Hi=new q(Fh,Bh),Wr=new q(Fh,Bh);Hi.rotation.y=Math.PI/2;Wr.rotation.y=Math.PI/2;const Vi=.22+.032;Hi.position.set(.34,_e+Vi,0);Wr.position.set(-.34,_e+Vi,0);Hi.name="自行车";Un.add(Hi,Wr);const Go=new me({color:3552840,roughness:.52,metalness:.48}),Xr=new q(new Et(.022,.022,.44,12),Go);Xr.rotation.z=Math.PI/4;Xr.position.set(0,_e+Vi+.22,0);Un.add(Xr);const Ho=new q(new Et(.022,.022,.38,12),Go);Ho.position.set(-.17,_e+Vi+.15,0);Un.add(Ho);const As=new q(new xe(.14,.045,.08),new me({color:2236962,roughness:.78}));As.position.set(-.17,_e+Vi+.37,0);As.name="自行车座椅";Un.add(As);const Vo=new q(new xe(.14,.05,.05),Go);Vo.position.set(.22,_e+Vi+.28,0);Un.add(Vo);Ft.add(Un);const ki=new Rt;ki.position.set(2.1,0,1.9);const Rs=3,Wi=new q(new Et(.042,.052,Rs,24),new me({color:5790314,roughness:.42,metalness:.52}));Wi.position.y=_e+Rs/2;Wi.castShadow=!0;Wi.name="路灯杆";ki.add(Wi);const Yr=new q(new Et(.022,.022,.45,12),new me({color:6448244,roughness:.4,metalness:.5}));Yr.rotation.z=Math.PI/2;Yr.position.set(.24,_e+Rs-.32,0);ki.add(Yr);const Cs=new q(new Ar(.17,.24,24,1,!0),new me({color:3552832,roughness:.42,metalness:.38,emissive:16759671,emissiveIntensity:.1}));Cs.position.set(.45,_e+Rs-.44,0);Cs.name="路灯灯罩";ki.add(Cs);const qr=new q(new oo(.075,20,20),new me({color:16777215,emissive:16768426,emissiveIntensity:0}));qr.position.set(.45,_e+Rs-.54,0);ki.add(qr);Ft.add(ki);const Ps=new Rt;Ps.position.set(-2.6,0,2.1);const Xi=3.4,Yi=new q(new Et(.055,.065,Xi,24),new me({color:6706500,roughness:.8,metalness:.03}));Yi.position.y=_e+Xi/2;Yi.castShadow=!0;Yi.name="电线杆";Ps.add(Yi);const ko=new q(new xe(.7,.045,.045),new me({color:5588019,roughness:.78}));ko.position.set(0,_e+Xi-.4,0);Ps.add(ko);const jr=new q(new Et(.035,.035,.09,12),et.darkMetal),Wo=jr.clone();jr.position.set(-.22,_e+Xi-.4,0);Wo.position.set(.22,_e+Xi-.4,0);Ps.add(jr,Wo);Ft.add(Ps);const G0=new Th([new R(-2.6,_e+Xi-.4,2.1),new R(-1,_e+2.48,1.35),new R(.5,_e+2.55,.5),new R(1.9,_e+2.5,-.3)]),H0=new co(G0,64,.014,12,!1),jn=new q(H0,new me({color:2368558,roughness:.85}));jn.material.transparent=!0;jn.material.opacity=0;jn.name="电线";mt.add(jn);const Xo=.45,qi=new q(new Et(.17,.15,Xo,24),new me({color:4491366,roughness:.62,metalness:.12}));qi.position.set(-2.3,_e+Xo/2,1.3);qi.castShadow=!0;qi.name="垃圾桶";Ft.add(qi);const Ls=new q(new Et(.19,.19,.07,24),new me({color:4491366,roughness:.58,metalness:.15}));Ls.position.set(-2.3,_e+Xo+.035,1.3);Ls.name="垃圾桶盖";Ft.add(Ls);const Ci=new Rt;Ci.position.set(.6,0,1.4);const Ds=new q(new xe(.35,.06,.18),new me({color:8947848,roughness:.52,metalness:.38}));Ds.position.y=_e+.03;Ds.name="雨伞架";Ci.add(Ds);const Fc=[16729173,4482815,4513126,16763955];for(let i=0;i<4;i++){const e=new q(new Et(.014,.014,.58,12),new me({color:3355443,roughness:.65}));e.position.set(-.12+i*.075,_e+.34,0),Ci.add(e);const t=new q(new Ar(.1,.18,16),new me({color:Fc[i],roughness:.58,emissive:Fc[i],emissiveIntensity:.02}));t.position.set(-.12+i*.075,_e+.63,0),Ci.add(t)}Ft.add(Ci);const Yo=1.1,Us=new q(new Et(.022,.022,Yo,16),new me({color:6711416,roughness:.52,metalness:.42}));Us.position.set(2.3,_e+Yo/2,.6);Us.name="路牌杆";Ft.add(Us);const Is=new q(new xe(.4,.2,.04),new me({color:2250154,emissive:4487133,emissiveIntensity:.07,roughness:.52}));Is.position.set(2.3,_e+Yo-.1,.6);Is.name="路牌";Ft.add(Is);const Kr=.65,ji=new q(new xe(.5,Kr,.06),et.wood);ji.position.set(-.7,_e+Kr/2,1.25);ji.castShadow=!0;ji.name="公告栏";Ft.add(ji);const qo=new q(new xe(.2,.25,.025),new me({color:16775920,emissive:16772812,emissiveIntensity:.04})),jo=new q(new xe(.2,.25,.025),new me({color:16775920,emissive:13426175,emissiveIntensity:.04}));qo.position.set(-.8,_e+Kr/2+.08,1.285);jo.position.set(-.6,_e+Kr/2-.08,1.285);Ft.add(qo,jo);const Ki=new q(new xe(.45,.35,.25),new me({color:13158600,roughness:.52,metalness:.38}));Ki.position.set(-1.6,.55,-2.45);Ki.castShadow=!0;Ki.name="空调外机";Ft.add(Ki);const Ns=new q(new Et(.12,.12,.05,24),new me({color:10066329,roughness:.48,metalness:.48}));Ns.rotation.x=Math.PI/2;Ns.position.set(-1.6,.55,-2.32);Ft.add(Ns);const Ko=650,zh=new Ut,fr=new Float32Array(Ko*3),Gh=[];for(let i=0;i<Ko;i++)fr[i*3]=(Math.random()-.5)*10,fr[i*3+1]=Math.random()*7,fr[i*3+2]=(Math.random()-.5)*10,Gh.push(.038+Math.random()*.035);zh.setAttribute("position",new en(fr,3));const Mr=new Zg(zh,new Eh({color:12112127,size:.022,transparent:!0,opacity:0,sizeAttenuation:!0}));mt.add(Mr);const Zo=new q(new pt(12,8),new us({color:1712704,transparent:!0,opacity:0,depthWrite:!1}));Zo.position.set(0,3,-4);mt.add(Zo);const Zr=[];function Q(i,e,t,n=-4){i.userData._baseY=i.position.y,i.position.y=n,i.scale.setScalar(.01),i.visible=!1,Zr.push({type:"mesh",mesh:i,delay:e,duration:t,startY:n,phase:0})}function In(i,e,t,n,s){i.intensity=n,Zr.push({type:"light",light:i,delay:e,duration:t,from:n,to:s,phase:0})}function ei(i,e,t,n,s){Zr.push({type:"value",delay:i,duration:e,from:t,to:n,callback:s,phase:0})}Q(Cr,0,.7);Q(xo,.2,.55);Q(U0,.35,.35);Q(I0,.4,.35);Q(N0,.45,.35);Q(O0,.5,.35);Q(Zn,.45,.85);Q(Jn,.65,.65);Q(Ui,.8,.45);Q(ps,.9,.4);for(let i=0;i<15;i++)Q(Tt.children[3+i],.95+i*.02,.22);for(let i=0;i<6;i++)Q(Tt.children[18+i],1.05+i*.04,.32);for(let i=0;i<3;i++)Q(Tt.children[24+i],1.25+i*.05,.32);Q($n,1.15,.9);Q(gs,1.2,.85);Q(_s,1.25,.85);Q(Ur,1.35,.7);Q(To,1.4,.6);Q(Ir,1.45,.55);Q(Ni,1.6,.45);Q(vs,1.7,.45);Q(Qe.children[9],1.65,.4);Q(Qe.children[10],1.68,.4);Q(wo,1.65,.35);Q(Ao,1.7,.35);Q(Ro,1.75,.35);Q(Co,1.77,.3);Q(Po,1.79,.3);Q(xs,1.82,.4);Q(Lo,1.85,.4);Q(Do,1.88,.4);Q(Uo,1.91,.4);Q(Io,1.95,.35);Q(No,1.98,.3);Q(Fi,2,.4);Q(Fr,2.03,.4);Q(Bi,2.1,.35);Q(Br,1.8,.55);for(let i=0;i<4;i++)Q(at.children[1+i*2],1.85+i*.04,.32);for(let i=0;i<21;i++)Q(at.children[9+i],1.95+i*.015,.2);Q(zr,2.1,.45);Q(Ms,2.2,.45);Q(Oo,2.28,.35);Q(Ss,2.35,.45);Q(Gr,2.42,.35);Q(Es,2.48,.45);Q(ys,2.55,.35);Q(Ts,2.58,.35);Q(Fo,2.62,.35);Q(bs,2.66,.35);Q(Bo,2.7,.35);Q(ws,2.73,.35);Q(bo,2,.5);Q(Oi,2.05,.55);Q(Nr,2.15,.45);Q(Or,2.2,.45);for(let i=0;i<3;i++)Q(Qe.children[11+i],2.25+i*.03,.35);Q(zi,2.38,.45);Q(Gi,2.4,.55);Q(Hr,2.48,.4);Q(Vr,2.55,.35);Q(kr,2.6,.3);Q(zo,2.64,.3);Q(Hi,2.65,.45);Q(Wr,2.68,.45);Q(Xr,2.72,.35);Q(Ho,2.75,.35);Q(As,2.78,.3);Q(Vo,2.81,.3);Q(Wi,2.75,.55);Q(Yr,2.82,.35);Q(Cs,2.88,.35);Q(qr,2.93,.35);Q(Yi,2.85,.55);Q(ko,2.92,.35);Q(jr,2.96,.3);Q(Wo,2.98,.3);Q(qi,2.9,.45);Q(Ls,2.95,.35);Q(Ds,3,.35);for(let i=0;i<8;i++)Q(Ci.children[1+i],3.03+i*.02,.28);Q(Us,3.05,.4);Q(Is,3.1,.35);Q(ji,3.12,.45);Q(qo,3.18,.35);Q(jo,3.22,.35);Q(Ki,3.15,.45);Q(Ns,3.2,.35);Q(Ii,3.05,.4);Q(Lr,2.95,.55);Q(yo,3.02,.45);Q(So,3.2,.5);Q(Lh,3.25,.5);Q(Dh,3.3,.5);Q(Uh,3.32,.4);Q(Ih,3.36,.4);Q(F0,3.4,.4);ei(3.35,.7,0,1,i=>{jn.material.opacity=i,jn.scale.setScalar(.5+i*.5)});In(fo,2.2,.9,0,2.1);In(po,2.3,.7,0,1);In(Rr,2.35,.65,0,1.3);In(go,2.8,.55,0,1.2);In(_o,3.05,.5,0,.8);In(vo,2.5,.8,0,.45);In(mo,2.35,.6,0,.8);Ph.forEach((i,e)=>{In(i,2.3+e*.05,.5,0,.6)});ei(2.3,.7,0,1,i=>{zi.material.emissiveIntensity=i*2,Oi.material.emissiveIntensity=i*1.4});ei(2.15,.55,0,1,i=>{Nr.material.emissiveIntensity=i*1.9,Or.material.emissiveIntensity=i*1.9});ei(2.85,.45,0,1,i=>{qr.material.emissiveIntensity=i*1.8});ei(2.6,.5,0,1,i=>{Vr.material.emissiveIntensity=i*1.2});ei(2.3,.6,0,1,i=>{for(let e=0;e<3;e++)Qe.children[11+e].material.emissiveIntensity=i*1.5});ei(3.4,.6,0,1,i=>{Mr.material.opacity=i*.36,Zo.material.opacity=i*.09});const Bc=new _0,Ka=new fe;let dn=null;const zc=[{obj:$n,name:"便利店外墙"},{obj:xs,name:"便利店橱窗"},{obj:Fi,name:"自动门"},{obj:Ni,name:"便利店雨棚"},{obj:Oi,name:"便利店招牌"},{obj:Qe.children[11],name:"雨棚筒灯"},{obj:vs,name:"侧墙招牌"},{obj:at.children[1],name:"店内货架"},{obj:Ms,name:"冷藏柜"},{obj:Ss,name:"饮料柜"},{obj:Es,name:"收银台"},{obj:ys,name:"收银机"},{obj:Ts,name:"关东煮机"},{obj:bs,name:"杂志架"},{obj:ws,name:"促销海报"},{obj:zi,name:"天花板顶灯"},{obj:zr,name:"中岛货架"},{obj:Gi,name:"自动贩卖机"},{obj:Hi,name:"自行车"},{obj:As,name:"自行车座椅"},{obj:Wi,name:"路灯杆"},{obj:Cs,name:"路灯灯罩"},{obj:Yi,name:"电线杆"},{obj:jn,name:"电线"},{obj:qi,name:"垃圾桶"},{obj:Ls,name:"垃圾桶盖"},{obj:Ds,name:"雨伞架"},{obj:Is,name:"路牌"},{obj:Us,name:"路牌杆"},{obj:ji,name:"公告栏"},{obj:Ki,name:"空调外机"},{obj:Zn,name:"沥青路面"},{obj:Jn,name:"人行道"},{obj:Ui,name:"路缘石"},{obj:ps,name:"排水沟"},{obj:Tt.children[18],name:"斑马线"},{obj:Ii,name:"街角护栏"},{obj:ms,name:"小巷入口"},{obj:So,name:"地面积水"},{obj:Bi,name:"门口地垫"}];window.addEventListener("mousemove",i=>{Ka.x=i.clientX/window.innerWidth*2-1,Ka.y=-(i.clientY/window.innerHeight)*2+1,as.style.left=i.clientX+"px",as.style.top=i.clientY+"px"});const Hh=new Ah,V0=Hh.getElapsedTime()+.3;function k0(i){return 1-Math.pow(1-i,3)}function Vh(){requestAnimationFrame(Vh);const i=Hh.getElapsedTime(),e=i-V0;nn.update(),Zr.forEach(r=>{if(!(e<r.delay)&&(r.phase===0&&(r.type==="mesh"&&(r.mesh.visible=!0),r.phase=1),r.phase===1)){const o=Math.min((e-r.delay)/r.duration,1),a=k0(o);r.type==="mesh"?(r.mesh.position.y=r.startY+(r.mesh.userData._baseY-r.startY)*a,r.mesh.scale.setScalar(.01+(1-.01)*a)):r.type==="light"?r.light.intensity=r.from+(r.to-r.from)*a:r.type==="value"&&r.callback(r.from+(r.to-r.from)*a),o>=1&&(r.phase=2)}});const t=Mr.geometry.attributes.position.array;for(let r=0;r<Ko;r++)t[r*3+1]-=Gh[r],t[r*3+1]<-1&&(t[r*3+1]=7);Mr.geometry.attributes.position.needsUpdate=!0,Rr.intensity+=Math.sin(i*2)*.035,So.material.opacity=.42+Math.sin(i*2.4)*.05,Lh.material.opacity=.38+Math.sin(i*1.9+.5)*.04,Dh.material.opacity=.35+Math.sin(i*2.2+1)*.03,Uh.material.opacity=.18+Math.sin(i*1.7)*.03,Ih.material.opacity=.16+Math.sin(i*1.5+.3)*.03,Ns.rotation.z=i*2,Bc.setFromCamera(Ka,Ri);const n=zc.map(r=>r.obj),s=Bc.intersectObjects(n,!0);if(s.length>0){const r=s[0].object,o=zc.find(a=>a.obj===r||r.parent===a.obj||r.parent?.parent===a.obj||r.parent?.parent?.parent===a.obj);o&&dn!==o&&(dn&&dn.obj.scale.setScalar(1),dn=o,document.body.style.cursor="pointer",as.textContent=o.name,as.style.opacity=1)}else dn&&(dn.obj.scale.setScalar(1),dn=null,document.body.style.cursor="grab",as.style.opacity=0);dn&&dn.obj.scale.setScalar(1.035),fs.render()}window.addEventListener("resize",()=>{Ri.aspect=window.innerWidth/window.innerHeight,Ri.updateProjectionMatrix(),tn.setSize(window.innerWidth,window.innerHeight),fs.setSize(window.innerWidth,window.innerHeight),Ch.setSize(window.innerWidth,window.innerHeight)});Vh();
