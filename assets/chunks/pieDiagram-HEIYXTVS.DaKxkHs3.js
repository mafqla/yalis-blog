import{p as q}from"./chunk-WASTHULE.DfyWWkEw.js";import{p as H}from"./wardley-RL74JXVD-T2LBEBUU.C0j6I5nc.js";import{g as J,s as Y,a as tt,b as et,v as at,t as it,_ as s,l as w,c as rt,I as st,aO as lt,aP as nt,aQ as B,aR as ot,e as ct,B as dt,aS as pt,K as gt}from"../app.DSwGNx00.js";import"./chunk-MFRUYFWM.BHBmxDx6.js";import"./framework.CW-6O5Zu.js";import"./theme.CV6NJBc4.js";var ht=gt.pie,C={sections:new Map,showData:!1},u=C.sections,D=C.showData,ut=structuredClone(ht),ft=s(()=>structuredClone(ut),"getConfig"),mt=s(()=>{u=new Map,D=C.showData,dt()},"clear"),vt=s(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(t)||(u.set(t,a),w.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),St=s(()=>u,"getSections"),xt=s(t=>{D=t},"setShowData"),wt=s(()=>D,"getShowData"),G={getConfig:ft,clear:mt,setDiagramTitle:it,getDiagramTitle:at,setAccTitle:et,getAccTitle:tt,setAccDescription:Y,getAccDescription:J,addSection:vt,getSections:St,setShowData:xt,getShowData:wt},Ct=s((t,a)=>{q(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Dt={parse:s(async t=>{const a=await H("pie",t);w.debug(a),Ct(a,G)},"parse")},$t=s(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),yt=$t,Tt=s(t=>{const a=[...t.values()].reduce((r,n)=>r+n,0),$=[...t.entries()].map(([r,n])=>({label:r,value:n})).filter(r=>r.value/a*100>=1);return pt().value(r=>r.value).sort(null)($)},"createPieArcs"),At=s((t,a,$,y)=>{var F;w.debug(`rendering pie chart
`+t);const r=y.db,n=rt(),T=st(r.getConfig(),n.pie),A=40,l=18,p=4,c=450,d=c,f=lt(a),o=f.append("g");o.attr("transform","translate("+d/2+","+c/2+")");const{themeVariables:i}=n;let[_]=nt(i.pieOuterStrokeWidth);_??(_=2);const b=T.textPosition,g=Math.min(d,c)/2-A,L=B().innerRadius(0).outerRadius(g),O=B().innerRadius(g*b).outerRadius(g*b);o.append("circle").attr("cx",0).attr("cy",0).attr("r",g+_/2).attr("class","pieOuterCircle");const h=r.getSections(),P=Tt(h),I=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(e=>{m+=e});const E=P.filter(e=>(e.data.value/m*100).toFixed(0)!=="0"),v=ot(I).domain([...h.keys()]);o.selectAll("mySlices").data(E).enter().append("path").attr("d",L).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),o.selectAll("mySlices").data(E).enter().append("text").text(e=>(e.data.value/m*100).toFixed(0)+"%").attr("transform",e=>"translate("+O.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const N=o.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...h.entries()].map(([e,x])=>({label:e,value:x})),S=o.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(e,x)=>{const M=l+p,X=M*k.length/2,Z=12*l,j=x*M-X;return"translate("+Z+","+j+")"});S.append("rect").attr("width",l).attr("height",l).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),S.append("text").attr("x",l+p).attr("y",l-p).text(e=>r.getShowData()?`${e.label} [${e.value}]`:e.label);const U=Math.max(...S.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),K=d+A+l+p+U,R=((F=N.node())==null?void 0:F.getBoundingClientRect().width)??0,Q=d/2-R/2,V=d/2+R/2,W=Math.min(0,Q),z=Math.max(K,V)-W;f.attr("viewBox",`${W} 0 ${z} ${c}`),ct(f,c,z,T.useMaxWidth)},"draw"),_t={draw:At},Mt={parser:Dt,db:G,renderer:_t,styles:yt};export{Mt as diagram};
