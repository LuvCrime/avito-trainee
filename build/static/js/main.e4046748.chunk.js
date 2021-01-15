(this.webpackJsonpbanner=this.webpackJsonpbanner||[]).push([[0],{19:function(e,t,o){e.exports={copyright:"CopyrightM_copyright__11FWh"}},2:function(e,t,o){e.exports={wrapper:"FormM_wrapper__3_aeo",inputBlock:"FormM_inputBlock__2j6uP",buttons:"FormM_buttons__3g0aD",inputForm:"FormM_inputForm__3SzpD",text:"FormM_text__1xw3i",color:"FormM_color__zrKOh",chooseColor:"FormM_chooseColor__2ups9",colors:"FormM_colors__16rIx"}},26:function(e,t,o){},28:function(e,t,o){},33:function(e,t,o){},34:function(e,t,o){"use strict";o.r(t);var r=o(1),n=o(0),s=o.n(n),a=o(7),i=o.n(a),c=(o(26),o(13)),h=o(8),l=o(9),d=o(6),p=o(11),u=o(10),g=o(16),m=o(12),b=o.n(m),v=o(14),j=o.n(v),x=o(2),f=o.n(x),C=o(17),O=o(48);o(28);function k(e){return Object(r.jsx)("div",{children:Object(r.jsx)(O.a,Object(C.a)({variant:"contained",style:{borderRadius:0,border:"1px solid lightgray",padding:"10px 14px",backgroundColor:"white",margin:"10px",lineHeight:"1.30rem",fontSize:"12px",textAlign:"center",minWidth:"110px"},className:"button"},e))})}var y=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(h.a)(this,o),r=t.call(this,e),j()(Object(d.a)(r)),r}return Object(l.a)(o,[{key:"onChangeColor",value:function(e){var t=e.target.value;this.props.changeColor(t)}},{key:"onChangeTextColor",value:function(e){var t=e.target.value;this.props.changeTextColor(t)}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:f.a.wrapper,children:[Object(r.jsxs)("form",{className:f.a.inputBlock,autoComplete:"off",children:[Object(r.jsx)("label",{children:"Insert the link that leads to the banner"}),Object(r.jsx)("input",{className:f.a.inputForm,onChange:this.props.onChange,name:"url",value:this.props.url}),Object(r.jsx)("label",{children:"Insert the link that leads to the picture or dataURI"}),Object(r.jsx)("input",{className:f.a.inputForm,onChange:this.props.saveImgBase,value:this.props.imgUrl,name:"imgUrl"}),this.props.imgError&&this.props.imgUrl.trim()&&Object(r.jsx)("div",{className:f.a.text,children:"This image'll be shown but won't be saved because of CORS."}),Object(r.jsx)("label",{children:"Header"}),Object(r.jsx)("input",{className:f.a.inputForm,onChange:this.props.onChange,value:this.props.header,name:"header"}),!this.props.headerFits&&Object(r.jsx)("div",{className:f.a.text,children:"Too long text"}),Object(r.jsx)("label",{children:"Text"}),Object(r.jsx)("textarea",{className:f.a.inputForm,onChange:this.props.onChange,value:this.props.description,name:"description"}),!this.props.textFits&&Object(r.jsx)("div",{className:f.a.text,children:"Too long text"}),Object(r.jsxs)("div",{className:f.a.colors,children:[Object(r.jsxs)("div",{className:f.a.chooseColor,children:["Pick background ",Object(r.jsx)("br",{}),"color"]}),Object(r.jsx)("input",{className:f.a.color,type:"color",list:"colorList",onChange:this.onChangeColor}),Object(r.jsxs)("div",{className:f.a.chooseColor,children:["Pick text ",Object(r.jsx)("br",{}),"color"]}),Object(r.jsx)("input",{className:f.a.color,type:"color",list:"colorList",onChange:this.onChangeTextColor})]})]}),Object(r.jsxs)("div",{className:f.a.buttons,children:[Object(r.jsxs)(k,{type:"button",id:"png",onClick:this.props.print,children:["Save as ",Object(r.jsx)("br",{}),"PNG"]}),Object(r.jsxs)(k,{type:"button",id:"html",onClick:this.props.saveAsHtml,children:["Copy as ",Object(r.jsx)("br",{}),"HTML"]}),Object(r.jsxs)(k,{type:"button",id:"json",onClick:this.props.saveAsJson,children:["Copy as ",Object(r.jsx)("br",{}),"JSON"]}),Object(r.jsxs)(k,{type:"button",id:"json",onClick:this.props.clearForm,children:["Clear ",Object(r.jsx)("br",{}),"form"]})]})]})}}]),o}(s.a.Component),_=o(4),w=o.n(_),F=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(h.a)(this,o),(r=t.call(this,e)).description=s.a.createRef(),r.descriptionToCheck=s.a.createRef(),r.png=s.a.createRef(),r.header=s.a.createRef(),r.headerToCheck=s.a.createRef(),r.getRef=r.getRef.bind(Object(d.a)(r)),r}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.checkOffsetHeight()}},{key:"componentDidUpdate",value:function(){this.checkOffsetHeight()}},{key:"checkOffsetHeight",value:function(){this.description.current.offsetHeight!==this.descriptionToCheck.current.offsetHeight?this.props.onTextLayoutChange(!1):this.props.onTextLayoutChange(!0),this.header.current.offsetHeight!==this.headerToCheck.current.offsetHeight?this.props.onHeaderLayoutChange(!1):this.props.onHeaderLayoutChange(!0)}},{key:"getRef",value:function(){return this.png.current}},{key:"render",value:function(){return console.log(this.png.current),Object(r.jsx)("a",{href:this.props.url,target:"_blank",className:w.a.linkWrapper,id:"linkBanner",children:Object(r.jsx)("div",{className:w.a.wrapper,id:"img",style:{backgroundImage:"url(".concat(this.props.imgUrl,")"),backgroundColor:this.props.backgroundColor},ref:this.png,children:Object(r.jsxs)("div",{className:w.a.text,children:[Object(r.jsx)("div",{className:w.a.header,ref:this.header,style:{color:this.props.color},children:this.props.header}),Object(r.jsx)("div",{className:"".concat(w.a.header," ").concat(w.a.headerToCheck),ref:this.headerToCheck,children:this.props.header}),Object(r.jsx)("div",{className:w.a.description,value:this.props.description,ref:this.description,style:{color:this.props.color},children:this.props.description}),Object(r.jsx)("div",{className:"".concat(w.a.description," ").concat(w.a.descriptionToCheck),ref:this.descriptionToCheck,children:this.props.description})]})})})}}]),o}(s.a.Component),T=o(19),N=o.n(T),S=function(){return Object(r.jsxs)("div",{className:N.a.copyright,children:[Object(r.jsx)("div",{children:"\xa9 Ostrovskaya Alexandra"}),Object(r.jsx)("div",{children:"Special for Avito"}),Object(r.jsx)("div",{children:"Unit VAS"}),Object(r.jsx)("div",{children:"2020"})]})},U=(o(33),function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(h.a)(this,o),(r=t.call(this,e)).state={url:"https://www.avito.ru/moskva",header:"Sample header",description:"Sample text Sample text Sample text Sample text",buttonIndex:"",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",base64Url:"",imgError:!1,textFits:!0,headerFits:!0,backgroundColor:"",color:""},r.preview=s.a.createRef(),j()(Object(d.a)(r)),r}return Object(l.a)(o,[{key:"changeTextColor",value:function(e){this.setState({color:e})}},{key:"changeColor",value:function(e){this.setState({backgroundColor:e})}},{key:"onChange",value:function(e){var t=e.target.name;this.setState(Object(c.a)({},t,e.target.value))}},{key:"handleEdit",value:function(e){e.preventDefault(),this.setState({buttonIndex:e.target.id})}},{key:"onTextLayoutChange",value:function(e){this.state.textFits!==e&&this.setState({textFits:e})}},{key:"clearForm",value:function(){var e=this;b.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, clear form!"}).then((function(t){t.isConfirmed&&(b.a.fire("Cleared!","Your form has been cleared.","success"),e.setState({url:"",imgUrl:"",header:"",description:"",backgroundColor:"",color:""}))}))}},{key:"onHeaderLayoutChange",value:function(e){this.state.headerFits!==e&&this.setState({headerFits:e})}},{key:"printDocument",value:function(e){var t=this;g(e,{useCORS:!0}).then((function(e){t.saveAsPng(e.toDataURL(),"banner.png")}))}},{key:"saveAsPng",value:function(e,t){if(this.state.textFits&&this.state.headerFits){var o=document.createElement("a");"string"===typeof o.download?(o.href=e,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)):window.open(e)}else b.a.fire({position:"top",icon:"warning",title:"Unable to save PNG (too long text)",showConfirmButton:!1,timer:1500})}},{key:"print",value:function(){this.printDocument(this.preview.current.getRef())}},{key:"saveImgBase",value:function(e){var t=this;this.setState({imgError:!1});var o=document.createElement("canvas"),r=o.getContext("2d"),n=new Image;n.crossOrigin="anonymous",n.src=e.target.value,n.onload=function(){o.width=n.width,o.height=n.height,r.drawImage(n,0,0),document.body.append(o);var e=o.toDataURL();t.setState({base64Url:e})},n.onerror=function(){t.setState({imgError:!0,base64Url:e.target.value})},this.setState({imgUrl:e.target.value})}},{key:"copyText",value:function(e,t){var o,r;if(this.state.textFits&&this.state.headerFits){var n=document.createElement("div");n.classList.add("copyDiv"),document.body.append(n),n.innerText=e,window.getSelection().removeAllRanges();var s=document.createRange();s.selectNodeContents(n),window.getSelection().addRange(s),console.log(e,n);try{r=document.execCommand("copy")}catch(a){console.error(a),r=!1}r||console.error("failed to copy!"),document.body.removeChild(n),window.getSelection().removeAllRanges(),o="".concat(t,r?" coppied successfully":" coppied unsuccessfully")}else r=!1,o="Too long text";b.a.fire({position:"top",icon:r?"success":"warning",title:o,showConfirmButton:!1,timer:1500})}},{key:"saveAsJson",value:function(){var e={href:this.state.url,header:this.state.header,description:this.state.description,imgUrl:this.state.imgUrl,backgroundColor:this.state.backgroundColor,color:this.state.color},t=JSON.stringify(e);this.copyText(t,"JSON")}},{key:"saveAsHtml",value:function(){var e=document.getElementById("preview");this.copyText(e.innerHTML,"HTML")}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsxs)("div",{className:"main-block",children:[Object(r.jsx)(y,{value:this.state.header,onChange:this.onChange,saveImgBase:this.saveImgBase,handleEdit:this.handleEdit,buttonIndex:this.state.buttonIndex,header:this.state.header,description:this.state.description,url:this.state.url,imgUrl:this.state.imgUrl,textFits:this.state.textFits,headerFits:this.state.headerFits,printDocument:this.printDocument,print:this.print,saveAsHtml:this.saveAsHtml,changeColor:this.changeColor,changeTextColor:this.changeTextColor,saveAsJson:this.saveAsJson,imgError:this.state.imgError,clearForm:this.clearForm}),Object(r.jsx)("div",{id:"preview",children:Object(r.jsx)(F,{onChange:this.onChange,header:this.state.header,description:this.state.description,url:this.state.url,imgUrl:this.state.base64Url||this.state.imgUrl,onTextLayoutChange:this.onTextLayoutChange,onHeaderLayoutChange:this.onHeaderLayoutChange,printDocument:this.printDocument,ref:this.preview,changeColor:this.changeColor,backgroundColor:this.state.backgroundColor,color:this.state.color})})]}),Object(r.jsx)(S,{})]})}}]),o}(s.a.Component)),H=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,49)).then((function(t){var o=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;o(e),r(e),n(e),s(e),a(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(U,{})}),document.getElementById("root")),H()},4:function(e,t,o){e.exports={wrapper:"PreviewM_wrapper__hfJ4G",text:"PreviewM_text__ria0y",header:"PreviewM_header__xA6P3",headerToCheck:"PreviewM_headerToCheck___b4Fr",description:"PreviewM_description__2SR9s",descriptionToCheck:"PreviewM_descriptionToCheck__qQT6y",linkWrapper:"PreviewM_linkWrapper__15wLn"}}},[[34,1,2]]]);
//# sourceMappingURL=main.e4046748.chunk.js.map