/*! kcharts - v1.2 - 2013-12-17 12:29:34 PM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/legend/index",function(t,e,i,n,r,a){function s(e){d||(d=t.Node("<div/>").css({visibility:"hidden",position:"fixed",left:"-9999em",top:0}).appendTo(_)),i.append(e,d);var n={width:i.outerWidth(d),height:i.outerHeight(d)};return d.html(""),n}function o(t,e){var i=this.el,n=i.icon,r=i.des;"cy"===t?n.transform("t0,"+e):"top"===t&&r.css("top",e+"px")}function c(t,e){var i=this.el,n=i.icon,r=i.des;"cx"===t?n.transform("t"+e+",0"):"left"===t&&r.css(t,e+"px")}function l(e){var i=e.get("disablestyle"),n={icon:{stroke:"#ccc",fill:"#ccc"},text:{color:"#ccc"}};n=t.isFunction(i)?t.mix(n,i(this,this.index)):t.mix(n,i);var r=this.icon,a=this.des;r.attr(n.icon),a.css(n.text)}function h(e,i){var n=e.get("enablestyle"),r={icon:{stroke:i.DEFAULT,fill:i.DEFAULT},text:{color:i.DEFAULT}};r=t.isFunction(n)?t.mix(r,n(this,this.index)):t.mix(r,n);var a=this.icon,s=this.des;a.attr(r.icon),s.css(r.text)}t.merge;var d,f,p=r.BASIC[1],g=window,u=g.Raphael,_=t.one(document.body),x={offset:[0,0],globalConfig:{interval:5}},v={initializer:function(){this._setupPaper(),this._setupCon();var e=(this.get("bbox"),this.get("paper"),this.get("align")),i=this.get("iconfn");i&&t.isFunction(i)&&(this.icon=i),this.align(e)},_setupPaper:function(){var t=this.get("paper");if(!t){var e=this.get("container");t=u(e[0],i.width(e),i.height(e)),this.set("paper",t)}"VML"==u.type||(t.canvas.style.zIndex=10)},bindEvent:function(){var e=this.get("els"),i=this;t.each(e,function(e){var n=e.icon,r=e.des,a={icon:n,text:r,index:e.index,el:e};t.each(["click","mouseover","mouseout"],function(t){n[t](function(){i.fire(t,a)}),r.on(t,function(){i.fire(t,a)})})})},onframeend:function(){this.bindEvent()},_setupCon:function(){var t=this.get("container"),e=i.css(t,"position");"static"==e&&i.css(t,"position","relative")},item:function(t){var e=this.get("els");return e[t]},icon:function(t,e,i,n){var a,s=this.get("paper"),o=i;switch(n){case"triangle":a=r.triangle(t,e,{paper:s,size:o});break;case"linetriangle":a=r.linetriangle(t,e,{paper:s,size:o});break;case"rhomb":case"diamon":a=r.diamond(t,e,{paper:s,size:o});break;case"linerhomb":case"linediamond":a=r.linediamond(t,e,{paper:s,size:o});break;case"square":a=r.square(t,e,{paper:s,size:o});break;case"linesquare":a=r.linesquare(t,e,{paper:s,size:o});break;case"linecircle":a=r.linecircle(t,e,{paper:s,size:o});break;default:a=r.circle(t,e,{paper:s,size:o})}return a},align:function(t){var e={tl:"alignTopLeft",tc:"alignTopCenter",tr:"alignTopRight",rt:"alignRightTop",rm:"alignRightMiddle",rb:"alignRightBottom",bl:"alignBottomLeft",bc:"alignBottomCenter",br:"alignBottomRight",lt:"alignLeftTop",lm:"alignLeftMiddle",lb:"alignLeftBottom"},i=e[t]||"alignRight";this[i]()},alignTop:function(e,n){var r=this.get("container"),o=this.get("bbox"),d=this.get("offset"),f=(this.get("paper"),this.get("config")),g=this.get("globalConfig"),u=this,_=g.iconsize||[1,1],x=_*p||6,v=g.icontype,m=0,y=[];t.each(f,function(e,i){var n=e.text||"data"+i,r=t.Node('<span class="kcharts-legend-item">'+n+"</span>"),a=s(r);m+=a.width,y.push({el:r,width:a.width,height:a.height,zIndex:10,cursor:"pointer"})});var b=m,w=u.icon(-9999,9999,_,v),L=w.getBBox(),k=g.iconright||0,A=g.interval||0;w.remove(),b+=(L.width+k)*f.length+A*(f.length-1);var C=o.left+d[0],S=o.top+d[1]-2*x,T=C+(o.width-b)/2+x,E=S;if(n&&(E=E+4*x+o.height),"l"==e)T=0+d[0]+x;else if("r"==e){var Y=i.width(r);T=Y-b}var P=[],X=this.get("alignhook"),z=this.get("iconAttrHook"),N=this.get("spanAttrHook"),I=[],G=this.get("anim"),R=G?i.width(r):0,F={icontype:v,iconsize:x,iconright:k};t.each(f,function(e,n){X&&(F=X.call(u,F,n));var a=T,o=E;a+=R;var d=u.icon(a,o,_,e.icontype||F.icontype),f=d.getBBox(),p={};t.mix(p,e,!0,["DEFAULT","HOVER"]);var g={fill:p.DEFAULT};z&&(g=t.merge({fill:p.DEFAULT},z.call(u,n))),g.stroke=g.fill,d.attr(g);var x=e.text||"data"+n,v=i.create('<span class="kcharts-legend-item"></span>');i.html(v,x);var m,y,b=s(v);v=t.Node('<span class="kcharts-legend-item">'+x+"</span>"),m=T+F.iconsize+F.iconright,y=E-(f.height/2+(b.height-f.height)/2),m+=R;var w={left:m+"px",top:y+"px",position:"absolute",zIndex:10,cursor:"pointer"};p.DEFAULT&&(w.color=p.DEFAULT),N&&(w=t.merge(w,N.call(u,n))),v.css(w),v.appendTo(r),T+=b.width+2*F.iconsize+A+F.iconright;var L={icon:d,des:v,index:n,disable:function(){l.call(L,u,e)},enable:function(){h.call(L,u,e)}};P.push(L),G&&I.push({el:L,frame:c,from:{cx:0,left:m},to:{cx:-R,left:m-R}})}),this.set("els",P),G?(G.endframe=function(){u.onframeend()},a.AnimateObject(I,G)):u.onframeend()},alignTopLeft:function(){this.alignTop("l")},alignTopCenter:function(){this.alignTop("c")},alignTopRight:function(){this.alignTop("r")},alignRight:function(t){this.alignLeft(t,!0)},alignRightTop:function(){this.alignRight("t")},alignRightMiddle:function(){this.alignRight("m")},alignRightBottom:function(){this.alignRight("b")},alignBottomLeft:function(){this.alignTop("l",!0)},alignBottomCenter:function(){this.alignTop("c",!0)},alignBottomRight:function(){this.alignTop("r",!0)},alignLeft:function(e,n){var r=this.get("container"),c=this.get("bbox"),d=this.get("offset"),f=(this.get("paper"),this.get("config")),g=this.get("globalConfig"),u=this,_=g.iconsize||[1,1],x=_*p||6,v=g.icontype,m=0,y=f[0],b=u.icon(-9999,-9999,_,v),w=b.getBBox(),L=f.length,k=g.iconright||0,A=g.interval;b.remove();var C=y.text||"data",S=t.Node('<span class="kcharts-legend-item">'+C+"</span>"),T=s(S),E=Math.max(T.height,w.height);m+=E*L+A*(L-1);var Y,P,X,z,N=0,I=[];t.each(f,function(e,i){var n=t.Node('<span class="kcharts-legend-item">'+e.text+"</span>"),r=s(n);e.text||"data"+i,r.width>N&&(N=r.width),I.push({el:n,width:r.width,height:r.height})}),N+=k,n?(Y=c.left+c.width+d[0],P=c.top+d[1],X=Y+x,z=P):(Y=c.left+d[0],P=c.top+d[1],X=Y,z=P),"m"==e?z=c.top+(c.height-m)/2:"b"==e&&(z=c.top+c.height-m);var G=[],R=this.get("alignhook"),F=this.get("iconAttrHook"),D=this.get("spanAttrHook"),M=[],B=this.get("anim"),$=B?i.height(r):0,O={icontype:v,iconright:k};t.each(f,function(e,i){R&&(O=R.call(u,O,i));var a,s;n?(a=X+d[0],s=z+d[1]):(a=X-N-x+d[0],s=z+d[1]),s+=$;var c=u.icon(a,s,_,e.icontype||O.icontype),f=c.getBBox(),p=I[i],g={};t.mix(g,e,!0,["DEFAULT","HOVER"]);var v={fill:g.DEFAULT};F&&(v=t.merge(v,F.call(u,i))),v.stroke=v.fill,c.attr(v);var m,y,b=t.Node('<span class="kcharts-legend-item">'+e.text+"</span>");n?(m=X+x+f.width+d[0],y=z-(f.height/2+(T.height-f.height)/2)+d[1]):(m=X+d[0]-N+O.iconright,y=z-(f.height/2+(p.height-f.height)/2)+d[1]),y+=$;var w={left:m+"px",top:y+"px",position:"absolute",zIndex:10,cursor:"pointer"};g.DEFAULT&&(w.color=g.DEFAULT),D&&(w=t.merge(w,D.call(u,i))),b.css(w),b.appendTo(r);var L=Math.max(p.height,f.height);z+=L+A;var k={icon:c,des:b,index:i,disable:function(){l.call(k,u,e)},enable:function(){h.call(k,u,e)}};G.push(k),B&&M.push({el:k,frame:o,from:{cy:0,top:y},to:{cy:-$,top:y-$}})}),this.set("els",G),B?(B.endframe=function(){u.onframeend()},a.AnimateObject(M,B)):u.onframeend()},alignLeftTop:function(){this.alignLeft("t")},alignLeftMiddle:function(){this.alignLeft("m")},alignLeftBottom:function(){this.alignLeft("b")}};return e.extend?f=e.extend(v):(f=function(e){e=t.merge(x,e),this.set(e),this.initializer()},t.extend(f,e,v)),t.extend(f,t.Base,v),f},{requires:["base","dom","event","gallery/kcharts/1.2/icons/index","gallery/kcharts/1.2/animate/index","gallery/kcharts/1.2/raphael/index"]});