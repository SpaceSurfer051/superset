"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5264],{15264:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f}),r(67294);var s=r(43323),a=r(51995),n=r(45697),o=r.n(n),i=r(15078),c=r.n(i),d=r(67190),p=r(28062);const l={data:o().shape({matrix:o().arrayOf(o().arrayOf(o().number)),nodes:o().arrayOf(o().string)}),width:o().number,height:o().number,colorScheme:o().string,numberFormat:o().string};function u(e,t){const{data:r,width:s,height:a,numberFormat:n,colorScheme:o,sliceId:i}=t;e.innerHTML="";const l=c().select(e);l.classed("superset-legacy-chart-chord",!0);const{nodes:u,matrix:h}=r,g=(0,d.JB)(n),m=p.getScale(o),y=Math.min(s,a)/2-10,f=y-24;let v;const x=c().svg.arc().innerRadius(f).outerRadius(y),$=c().layout.chord().padding(.04).sortSubgroups(c().descending).sortChords(c().descending),b=c().svg.chord().radius(f),T=l.append("svg").attr("width",s).attr("height",a).on("mouseout",(()=>v.classed("fade",!1))).append("g").attr("id","circle").attr("transform",`translate(${s/2}, ${a/2})`);T.append("circle").attr("r",y),$.matrix(h);const C=T.selectAll(".group").data($.groups).enter().append("g").attr("class","group").on("mouseover",((e,t)=>{v.classed("fade",(e=>e.source.index!==t&&e.target.index!==t))}));C.append("title").text(((e,t)=>`${u[t]}: ${g(e.value)}`));const N=C.append("path").attr("id",((e,t)=>`group${t}`)).attr("d",x).style("fill",((e,t)=>m(u[t],i))),k=C.append("text").attr("x",6).attr("dy",15);k.append("textPath").attr("xlink:href",((e,t)=>`#group${t}`)).text(((e,t)=>u[t])),k.filter((function(e,t){return N[0][t].getTotalLength()/2-16<this.getComputedTextLength()})).remove(),v=T.selectAll(".chord").data($.chords).enter().append("path").attr("class","chord").on("mouseover",(e=>{v.classed("fade",(t=>t!==e))})).style("fill",(e=>m(u[e.source.index],i))).attr("d",b),v.append("title").text((e=>`${u[e.source.index]} → ${u[e.target.index]}: ${g(e.source.value)}\n${u[e.target.index]} → ${u[e.source.index]}: ${g(e.target.value)}`))}u.displayName="Chord",u.propTypes=l;const h=u;var g=r(11965);const m=(0,s.Z)(h),y=e=>{let{className:t,...r}=e;return(0,g.tZ)("div",{className:t},(0,g.tZ)(m,r))};y.defaultProps={otherProps:{}},y.propTypes={className:o().string.isRequired,otherProps:o().objectOf(o().any)};const f=(0,a.iK)(y)`
  ${e=>{let{theme:t}=e;return`\n    .superset-legacy-chart-chord svg #circle circle {\n      fill: none;\n      pointer-events: all;\n    }\n    .superset-legacy-chart-chord svg .group path {\n      fill-opacity: ${t.opacity.mediumHeavy};\n    }\n    .superset-legacy-chart-chord svg path.chord {\n      stroke: ${t.colors.grayscale.dark2};\n      stroke-width: 0.25px;\n    }\n    .superset-legacy-chart-chord svg #circle:hover path.fade {\n      opacity:  ${t.opacity.light};\n    }\n  `}}
`},43323:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(67294),a=r(11965);function n(e,t){class r extends s.Component{constructor(e){super(e),this.container=void 0,this.setContainerRef=this.setContainerRef.bind(this)}componentDidMount(){this.execute()}componentDidUpdate(){this.execute()}componentWillUnmount(){this.container=void 0,null!=t&&t.componentWillUnmount&&t.componentWillUnmount.bind(this)()}setContainerRef(e){this.container=e}execute(){this.container&&e(this.container,this.props)}render(){const{id:e,className:t}=this.props;return(0,a.tZ)("div",{ref:this.setContainerRef,id:e,className:t})}}const n=r;return e.displayName&&(n.displayName=e.displayName),e.propTypes&&(n.propTypes={...n.propTypes,...e.propTypes}),e.defaultProps&&(n.defaultProps=e.defaultProps),r}}}]);
//# sourceMappingURL=44f35ec44f6e45934765.chunk.js.map