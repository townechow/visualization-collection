"use strict";(self.webpackChunkvisualization_collection=self.webpackChunkvisualization_collection||[]).push([[4269],{60095:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(96540),c=n(39437),s=n(85880),a=n(79045),i=n(46935),o=n(9169),u=n(39830);const l=n.p+"images/a2edaf85.jpg",d=n.p+"images/573c0a93.jpg",p="AppPageFrame_container__HINEU",h="AppPageFrame_content__jCifX",m="AppPageFrame_page__DEPnj";var f=n(74848);const g=[0,-1.5,0],w=()=>{const{menuWidth:e}=(0,i.S)(),t=(0,r.useRef)(null),n=(0,r.useRef)(null),[w,v]=(0,r.useState)(0),x=(0,r.useRef)([]),j=(0,r.useRef)(0),_=(0,r.useRef)(s.os.timeline()),y=(0,r.useRef)(null),{camera:M,resize:N}=(0,o.A)(t,(e=>{if(t.current){const{clientHeight:n}=t.current;v(n);const r=new c.ZyN(16777215,1);r.position.set(0,0,1),e.add(r);const a=new c.ZyN(16777215,.5);a.position.set(0,0,-1),e.add(a);const i=new c.ZyN(16777215,.5);i.position.set(-1,1,1),e.add(i),(0,u.qO)("./public/model/spaceStation.glb").then((t=>{t.scene.scale.set(.15,.15,.15),t.scene.position.set(5,0,0),e.add(t.scene),x.current.push(t)})),(0,u.qO)("./public/model/spaceStation2.glb").then((t=>{t.scene.scale.set(1,1,1),t.scene.position.set(5,-20,0),t.scene.rotation.set(0,g[1],0),e.add(t.scene),x.current.push(t)})),(0,u.qO)("./public/model/spaceStation3.glb").then((t=>{t.scene.scale.set(.18,.18,.18),t.scene.position.set(5,-40,0),e.add(t.scene),x.current.push(t)}));for(let t=0;t<10;t++){const t=new c.Gu$(1.5,10,10),n=(new c.Tap).load(l),r=(new c.Tap).load(d),a=new c._4j({map:n,displacementMap:r,displacementScale:.5}),i=new c.ZLX(t,a,100);for(let e=0;e<1e3;e++){const t=1e3*Math.random()-500,n=1e3*Math.random()-500,r=1e3*Math.random()-500,s=new c.kn4;s.makeTranslation(t,n,r),i.setMatrixAt(e,s);const a=20*Math.random()-8;s.makeScale(a,a,a)}s.os.to(i.position,{duration:10*Math.random()+5,ease:"linear",z:-1e3,repeat:-1}),e.add(i)}}}),(()=>{if(t.current){const{clientHeight:e}=t.current;v(e),n.current&&(n.current.style.top="-".concat(j.current*e,"px"))}})),b=(0,a.A)((e=>{if(M){if(_.current&&_.current.isActive())return;if(e.wheelDelta<0&&j.current<x.current.length-1)j.current=j.current+1,_.current.to(M.position,{duration:.8,y:-20*j.current});else{if(!(e.wheelDelta>0&&j.current>0))return;j.current=j.current-1,_.current.to(M.position,{duration:.8,y:-20*j.current})}}if(t.current&&n.current){const{clientHeight:e}=t.current;y.current=s.os.to(n.current,{duration:.8,top:"-".concat(j.current*e,"px"),onComplete:()=>{var e;null===(e=y.current)||void 0===e||e.kill(),y.current=null}})}}),{wait:100});return(0,r.useLayoutEffect)((()=>{N()}),[e]),(0,r.useEffect)((()=>(window.addEventListener("mousewheel",b.run),()=>{window.removeEventListener("mousewheel",b.run)})),[]),(0,f.jsx)("div",{className:p,onMouseMove:e=>{if(t.current){const{clientWidth:n,clientHeight:r}=t.current,c=e.clientX/n*2-1,a=e.clientY/r*2-1,i=s.os.timeline(),o=x.current[j.current];o&&i.to(o.scene.rotation,{duration:.8,x:.5*a,y:.5*c+g[j.current]})}},ref:t,children:(0,f.jsxs)("div",{className:h,ref:n,children:[(0,f.jsx)("div",{className:m,style:{height:w>0?"".concat(w,"px"):"100vh"},children:(0,f.jsx)("p",{children:"Page One"})}),(0,f.jsx)("div",{className:m,style:{height:w>0?"".concat(w,"px"):"100vh"},children:(0,f.jsx)("p",{children:"Page Two"})}),(0,f.jsx)("div",{className:m,style:{height:w>0?"".concat(w,"px"):"100vh"},children:(0,f.jsx)("p",{children:"Page Three"})})]})})}}}]);