/*! kcharts - v1.3 - 2014-01-13 10:50:03 AM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/barchart/theme",function(){var e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}}}};return e}),KISSY.add("gallery/kcharts/1.3/barchart/cfg",function(){var e="ks-chart-",t=e+"default",r="{COLOR}";return{themeCls:t,autoRender:!0,colors:[],stackable:!1,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{color:"#eee",zIndex:10},min:0},yAxis:{isShow:!0,css:{zIndex:10},num:5,min:0},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!0,css:{}},bars:{isShow:!0,css:{background:r,border:"1px solid #fff"},barsRatio:.6,barRatio:.5},legend:{isShow:!1},tip:{isShow:!0,template:"",css:{},anim:{easing:"easeOut",duration:.3},offset:{x:0,y:0},boundryDetect:!0,alignX:"right",alignY:"bottom"}}}),KISSY.add("gallery/kcharts/1.3/barchart/index",function(e,t,r,a,n,o,i,s,c,l,d,h,f,u){var p,g,b=e.all,_="ks-chart-",m=_+"default",v=m+"-canvas",x=_+"evtlayout",w=x+"-bars",y="{COLOR}",C={initializer:function(){this.init()},init:function(){var t=this;t.chartType="barchart";var r=e.clone(u);t._cfg=e.mix(r,t.userConfig,void 0,void 0,!0),n.prototype.init.call(t,t._cfg),t._cfg.autoRender&&t.render()},render:function(){var t=this,r=t._cfg,a=t._innerContainer,c=r.themeCls;if(t._$ctnNode[0]){n.prototype.dataFormat.call(t,t._cfg),t._$ctnNode.html(""),t._bars={},t._finished=[],c=t._cfg.themeCls||u.themeCls,t._cfg=e.mix(e.clone(e.mix(u,l[c],void 0,void 0,!0)),t._cfg,void 0,void 0,!0),t.color=p=new i({themeCls:c}),t._cfg.colors.length>0&&p.removeAllColors();for(var d in t._cfg.colors)p.setColor(t._cfg.colors[d]);t.raphaelPaper=o(t._$ctnNode[0],r.width,r.height),t.paper=new s(t._$ctnNode,{clsName:v,width:a.width,height:a.height,left:a.tl.x,top:a.tl.y}),t._clonePoints=t._points,t.getBarsPos(),t.htmlPaper=new s(t._$ctnNode,{clsName:c}),n.Common.drawTitle.call(null,this,c),n.Common.drawSubTitle.call(null,this,c),t.renderEvtLayout(),t.renderTip(),n.Common.drawGridsX.call(null,this),n.Common.drawGridsY.call(null,this),n.Common.drawAxisX.call(null,this),n.Common.drawAxisY.call(null,this),n.Common.drawLabelsX.call(null,this),n.Common.drawLabelsY.call(null,this),t.renderLegend(),t.drawBars(function(){t.afterRender(),t.fix2Resize()}),t.bindEvt(),e.log(t)}},drawBar:function(t,r,a){var o,i=this,s=i._cfg,c=i.paper,l=v+"-bars",d=i._innerContainer,h=i.color.getColor(t).DEFAULT,f=i.processAttr(s.bars.css,h),u="x"==s.zoomType?!1:!0,p=i._barsPos[t][r],g=Math.round(p.x-0),b=Math.round(p.y-0),_=Math.round(p.width-0),m=Math.round(p.height-0);if(s.anim){var x=s.anim.duration?e.isNumber(s.anim.duration)?s.anim.duration:.5:.5,w=s.anim.easing?s.anim.easing:"easeOut";if(u){var y=n.prototype.data2GrapicData.call(i,0,!0,!1);o=c.rect(y,b,0,m).attr({posx:g,posy:b}).addClass(l).css(f).animate({width:_,left:g-d.x},x,w,function(){a&&a()})}else{var C=n.prototype.data2GrapicData.call(i,0,!1,!0);o=c.rect(g,C,_,0).attr({posx:g,posy:b}).addClass(l).css(f).animate({height:m,top:b-d.y},x,w,function(){a&&a()})}}else o=c.rect(g,b,_,m).attr({posx:g,posy:b}).addClass(l).css(f),a&&a();return o},getBarsPos:function(){var e=this,t=e._cfg.zoomType,r=e._cfg.stackable,a=e._innerContainer,o="y"==t,i=r?1:n.prototype.obj2Array(e._clonePoints).length,s=e._cfg.bars.barsRatio,c=e._cfg.bars.barRatio,l=o?e._pointsY.length>1?e._pointsY[1].y-e._pointsY[0].y:a.height:e._pointsX.length>1?e._pointsX[1].x-e._pointsX[0].x:a.width,d=l*s,h=c>=1?0:(1-c)/c,f=d/(i+(i-1)*h),u=f*(1-c)/c,p=r?0:f+u,g=(e._innerContainer.bl.y,e._innerContainer.bl.x),b=(l*(1-s)-l)/2,_=[];e._barsPos={};for(var m in e._points){var v=[];if(o){var x=n.prototype.data2GrapicData.call(e,0,!0,!1);for(var w in e._points[m]){var y={},C=e._points[m][w].x,A=Math.abs(C-x);y.y=b+e._points[m][w].y,r?(y.x=g+(_[w]||0),_[w]=_[w]?_[w]+A:A):y.x=C>x?C-A:x-A,y.width=A,y.height=f,v.push(y)}}else{var k=n.prototype.data2GrapicData.call(e,0,!1,!0);for(var w in e._points[m]){var y={},E=e._points[m][w].y,z=Math.abs(k-E);y.x=b+e._points[m][w].x,r?(y.y=E-(_[w]||0),_[w]=_[w]?_[w]+z:z):y.y=E>k?k:E,y.width=f,y.height=z,v.push(y)}}b+=p,e._barsPos[m]=v}},drawBars:function(e){var t=this;t._cfg;for(var r in t._barsPos){var a=[],n=[];for(var o in t._barsPos[r]){var i=t._barsPos[r][o];n[o]=i,a[o]=t.drawBar(r,o,function(){t._finished.push(!0),e&&t._finished.length==t._cfg.series.length&&e()}).attr({barGroup:r,barIndex:o,defaultColor:p.getColor(r).DEFAULT,hoverColor:p.getColor(r).HOVER})}var s={bars:a,posInfos:n,color:p.getColor(r)};t._bars[r]=s}return t._bars},renderTip:function(){if(this._cfg.tip.isShow){var t=this,r=t._cfg,a=t._innerContainer,n=r.tip.boundryDetect?{x:a.tl.x,y:a.tl.y,width:a.width,height:a.height}:{},o=e.mix(r.tip,{rootNode:t._$ctnNode,clsName:r.themeCls,boundry:n});return t.tip=new h(o),t.tip}},renderEvtLayout:function(){var e,t=this,r=t._innerContainer,a=(r.tl.y,t._points[0],r.height);t._multiple,t._evtEls._bars=[],e=t._evtEls.paper?t._evtEls.paper:t._evtEls.paper=new s(t._$ctnNode,{clsName:x,prependTo:!1,width:r.width,height:a,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var n in t._barsPos){var o=[];for(var i in t._barsPos[n]){var c=t._barsPos[n][i];o[i]=e.rect(c.x,c.y,c.width,c.height).addClass(w).attr({barGroup:n,barIndex:i})}t._evtEls._bars.push(o)}return e},clearEvtLayout:function(){var e=this;if(e._evtEls._bars)for(var t in e._evtEls._bars)for(var r in e._evtEls._bars[t])e._evtEls._bars[t][r].remove()},renderLegend:function(){if(this._cfg.legend.isShow){var t=this,r=t._cfg.legend,a=r.container&&b(r.container)[0]?b(r.container):t._$ctnNode,n=t._innerContainer,o=t.color._colors,i=o.length,s=t._cfg,l=t._cfg.series,d=e.map(l,function(e,t){t%=i;var r={},a=o[t];return r.text=e.text,r.DEFAULT=a.DEFAULT,r.HOVER=a.HOVER,r}),h=e.merge({interval:20,iconright:5,showicon:!0},s.legend.globalConfig);return t.legend=new c({container:a,bbox:{width:n.width,height:n.height,left:n.x,top:n.y},align:s.legend.align||"bc",offset:s.legend.offset||(/t/g.test(s.legend.align)?[0,0]:[0,20]),globalConfig:h,config:d}),t.legend.on("click",function(e){var t=e.index,r=(e.text,e.icon,e.el);1!=r.hide?(this.hideBar(t),r.hide=1,r.disable()):(this.showBar(t),r.hide=0,r.enable())},this),t.legend}},bindEvt:function(){var e=this,t=e._cfg;f.detach(b("."+w,e._$ctnNode),"mouseenter"),f.on(b("."+w,e._$ctnNode),"mouseenter",function(r){var a=b(r.currentTarget),n=a.attr("barIndex"),o=a.attr("barGroup");t.tip.isShow&&e.tipHandler(o,n),e.barChange(o,n)}),f.detach(b("."+w,e._$ctnNode),"click"),f.on(b("."+w,e._$ctnNode),"click",function(t){var r=b(t.currentTarget),a=r.attr("barIndex"),n=r.attr("barGroup");e.barClick(n,a)}),f.detach(b("."+w,e._$ctnNode),"mouseleave"),f.on(b("."+w,e._$ctnNode),"mouseleave",function(t){var r=b(t.currentTarget),a=r.attr("barIndex"),n=r.attr("barGroup"),o=e._bars[n].bars[a];o.css({background:o.attr("defaultColor")})}),f.detach(e._evtEls.paper.$paper,"mouseleave"),f.on(e._evtEls.paper.$paper,"mouseleave",function(){e.tip&&e.tip.hide(),e.paperLeave()})},paperLeave:function(){var e=this;e.fire("paperLeave",e)},barChange:function(t,r){var a=this,n=a._bars[t],o=e.mix({target:n.bars[r],currentTarget:n.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barChange",o)},barClick:function(t,r){var a=this,n=a._bars[t],o=e.mix({target:n.bars[r],currentTarget:n.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barClick",o)},tipHandler:function(t,r){var a=this,n=a._cfg,o=a.tip,i="y"==n.zoomType?!0:!1,s=(o.getInstance(),a._bars[t].bars[r]),c=s.attr("defaultColor"),l=a._cfg.tip.template,d=i?s.attr("posx")- -s.width()- -a._innerContainer.x:s.attr("posx"),h=s.attr("posy"),f=e.merge(a._points[t][r].dataInfo,n.series[t]);delete f.data,a._points[t][r].dataInfo,s.css({background:s.attr("hoverColor")}),l&&(e.mix(f,{groupindex:t,barindex:r}),o.fire("setcontent",{data:f}),o.fire("move",{x:d,y:h,style:a.processAttr(n.tip.css,c)}))},processAttr:function(t,r){var a=e.clone(t);for(var n in a)a[n]&&"string"==typeof a[n]&&(a[n]=a[n].replace(y,r));return a},showBar:function(t){var r=this,a=r._innerContainer;n.prototype.recoveryData.call(r,t),r._clonePoints[t]=r._points[t],n.Common.animateGridsAndLabels.call(null,r),r.getBarsPos();for(var o in r._bars)if(o!=t)for(var i in r._bars[o].bars)if(r._barsPos[o]){var s=r._barsPos[o][i];s&&r._bars[o].bars[i].stop().animate({height:s.height,width:s.width,top:s.y-a.y,left:s.x-a.x},.4,"easeOut",function(){}),r._bars[o].bars[i].attr({posx:s.x,posy:s.y})}var c=[],l=[];for(var i in r._barsPos[t]){var s=r._barsPos[t][i];c[i]=s,l[i]=r.drawBar(t,i).attr({barGroup:t,barIndex:i,defaultColor:p.getColor(t).DEFAULT,hoverColor:p.getColor(t).HOVER})}r._bars[t]={bars:l,posInfos:c,color:p.getColor(o)},r.clearEvtLayout(),r.renderEvtLayout(),r.bindEvt(),e.log(r)},fix2Resize:function(){var t=this;t._$ctnNode,t._cfg.anim="";var r=e.buffer(function(){t.init()},200);!t.__isFix2Resize&&t.on("resize",function(){t.__isFix2Resize=1,r()})},hideBar:function(t){var r=this,a=r._innerContainer;n.prototype.removeData.call(r,t),delete r._clonePoints[t],n.Common.animateGridsAndLabels.call(null,r),r.getBarsPos();for(var o in r._bars[t].bars)r._bars[t].bars[o].remove();for(var o in r._bars)if(o!=t)for(var i in r._bars[o].bars){var s=r._barsPos[o]?r._barsPos[o][i]:"";s&&r._bars[o].bars[i].stop().animate({height:s.height,width:s.width,top:s.y-a.y,left:s.x-a.x},.4,"easeOut",function(){}),r._bars[o].bars[i].attr({posx:s.x,posy:s.y})}r.clearEvtLayout(),r.renderEvtLayout(),r.bindEvt(),e.log(r)},afterRender:function(){var e=this;e.fire("afterRender",e)},getHtmlPaper:function(){return this.paper},getRaphaelPaper:function(){return this.raphaelPaper},clear:function(){this._$ctnNode.html("")}};return r.extend?g=n.extend(C):(g=function(e){var t=this;t.userConfig=e,t.init()},e.extend(g,n,C)),g},{requires:["node","base","gallery/template/1.0/index","gallery/kcharts/1.3/basechart/index","gallery/kcharts/1.3/raphael/index","gallery/kcharts/1.3/tools/color/index","gallery/kcharts/1.3/tools/htmlpaper/index","gallery/kcharts/1.3/legend/index","./theme","gallery/kcharts/1.3/tools/touch/index","gallery/kcharts/1.3/tip/index","event","./cfg"]});