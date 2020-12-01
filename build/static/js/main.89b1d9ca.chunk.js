(this.webpackJsonpbanner=this.webpackJsonpbanner||[]).push([[0],{2:function(e,t,o){e.exports={wrapper:"FormM_wrapper__18Lax",inputBlock:"FormM_inputBlock__14fA3",buttons:"FormM_buttons__2NCEX",inputForm:"FormM_inputForm__o6JBb",text:"FormM_text__1tnGk",color:"FormM_color___rsvv",chooseColor:"FormM_chooseColor__Cc8uF",colors:"FormM_colors__3Vb5q"}},26:function(e,t,o){e.exports={copyright:"CopyrightM_copyright__2x4vw"}},33:function(e,t,o){},35:function(e,t,o){},4:function(e,t,o){e.exports={wrapper:"PreviewM_wrapper__2fhrr",text:"PreviewM_text__1FdzG",header:"PreviewM_header__3hCL0",description:"PreviewM_description__2YxTq",descriptionToCheck:"PreviewM_descriptionToCheck__3FoiJ",headerToCheck:"PreviewM_headerToCheck__OhmzI",linkWrapper:"PreviewM_linkWrapper__2-Fog"}},40:function(e,t,o){},41:function(e,t,o){"use strict";o.r(t);var r=o(1),s=o(0),a=o.n(s),n=o(7),i=o.n(n),c=(o(33),o(15)),h=o(8),l=o(9),d=o(6),p=o(11),u=o(10),g=o(20),m=o(19),v=o.n(m),b=o(16),j=o.n(b),x=o(2),f=o.n(x),C=o(21),O=o(56);o(35);function k(e){return Object(r.jsx)("div",{children:Object(r.jsx)(O.a,Object(C.a)({className:"button"},e))})}var y=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(h.a)(this,o),r=t.call(this,e),j()(Object(d.a)(r)),r}return Object(l.a)(o,[{key:"onChangeColor",value:function(e){var t=e.target.value;this.props.changeColor(t)}},{key:"onChangeTextColor",value:function(e){var t=e.target.value;this.props.changeTextColor(t)}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:f.a.wrapper,children:[Object(r.jsxs)("form",{className:f.a.inputBlock,autoComplete:"off",children:[Object(r.jsx)("label",{children:"Insert the link that leads to the banner"}),Object(r.jsx)("input",{className:f.a.inputForm,onChange:this.props.onChange,name:"url",value:this.props.url}),Object(r.jsx)("label",{children:"Insert the link that leads to the picture or dataURI"}),Object(r.jsx)("input",{className:f.a.inputForm,onChange:this.props.saveImgBase,value:this.props.imgUrl,name:"imgUrl"}),this.props.imgError&&this.props.imgUrl.trim()&&Object(r.jsx)("div",{className:f.a.text,children:"This image'll be shown but won't be saved because of CORS."}),Object(r.jsx)("label",{children:"Header"}),Object(r.jsx)("input",{className:f.a.inputForm,onChange:this.props.onChange,value:this.props.header,name:"header"}),!this.props.headerFits&&Object(r.jsx)("div",{className:f.a.text,children:"Too long text"}),Object(r.jsx)("label",{children:"Text"}),Object(r.jsx)("textarea",{className:f.a.inputForm,onChange:this.props.onChange,value:this.props.description,name:"description"}),!this.props.textFits&&Object(r.jsx)("div",{className:f.a.text,children:"Too long text"}),Object(r.jsxs)("div",{className:f.a.colors,children:[Object(r.jsxs)("div",{className:f.a.chooseColor,children:["Pick background ",Object(r.jsx)("br",{}),"color"]}),Object(r.jsx)("input",{className:f.a.color,type:"color",list:"colorList",onChange:this.onChangeColor}),Object(r.jsxs)("div",{className:f.a.chooseColor,children:["Pick text ",Object(r.jsx)("br",{}),"color"]}),Object(r.jsx)("input",{className:f.a.color,type:"color",list:"colorList",onChange:this.onChangeTextColor})]})]}),Object(r.jsxs)("div",{className:f.a.buttons,children:[Object(r.jsx)(k,{type:"button",id:"png",onClick:this.props.print,children:"Save as PNG"}),Object(r.jsx)(k,{type:"button",id:"html",onClick:this.props.saveAsHtml,children:"Save as HTML"}),Object(r.jsx)(k,{type:"button",id:"json",onClick:this.props.saveAsJson,children:"Save as JSON"})]})]})}}]),o}(a.a.Component),_=o(4),w=o.n(_),T=function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(h.a)(this,o),(r=t.call(this,e)).description=a.a.createRef(),r.descriptionToCheck=a.a.createRef(),r.png=a.a.createRef(),r.header=a.a.createRef(),r.headerToCheck=a.a.createRef(),r.getRef=r.getRef.bind(Object(d.a)(r)),r}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.description.current.offsetHeight!==this.descriptionToCheck.current.offsetHeight?this.props.onTextLayoutChange(!1):this.props.onTextLayoutChange(!0),this.header.current.offsetHeight!==this.headerToCheck.current.offsetHeight?this.props.onHeaderLayoutChange(!1):this.props.onHeaderLayoutChange(!0)}},{key:"componentDidUpdate",value:function(){this.description.current.offsetHeight!==this.descriptionToCheck.current.offsetHeight?this.props.onTextLayoutChange(!1):this.props.onTextLayoutChange(!0),this.header.current.offsetHeight!==this.headerToCheck.current.offsetHeight?this.props.onHeaderLayoutChange(!1):this.props.onHeaderLayoutChange(!0)}},{key:"getRef",value:function(){return this.png.current}},{key:"render",value:function(){return console.log(this.png.current),Object(r.jsx)("a",{href:this.props.url,target:"_blank",className:w.a.linkWrapper,id:"linkBanner",children:Object(r.jsx)("div",{className:w.a.wrapper,id:"img",style:{backgroundImage:"url(".concat(this.props.imgUrl,")"),backgroundColor:this.props.backgroundColor},ref:this.png,children:Object(r.jsxs)("div",{className:w.a.text,children:[Object(r.jsx)("div",{className:w.a.header,ref:this.header,style:{color:this.props.color},children:this.props.header}),Object(r.jsx)("div",{className:"".concat(w.a.header," ").concat(w.a.headerToCheck),ref:this.headerToCheck,children:this.props.header}),Object(r.jsx)("div",{className:w.a.description,value:this.props.description,ref:this.description,style:{color:this.props.color},children:this.props.description}),Object(r.jsx)("div",{className:"".concat(w.a.description," ").concat(w.a.descriptionToCheck),ref:this.descriptionToCheck,children:this.props.description})]})})})}}]),o}(a.a.Component),F=o(26),N=o.n(F),S=function(){return Object(r.jsxs)("div",{className:N.a.copyright,children:[Object(r.jsx)("div",{children:"\xa9 Ostrovskaya Alexandra"}),Object(r.jsx)("div",{children:"Special for Avito"}),Object(r.jsx)("div",{children:"Unit VAS"}),Object(r.jsx)("div",{children:"2020"})]})},L=(o(40),function(e){Object(p.a)(o,e);var t=Object(u.a)(o);function o(e){var r;return Object(h.a)(this,o),(r=t.call(this,e)).state={url:"https://www.avito.ru/moskva",header:"Sample header",description:"Sample text Sample text Sample text Sample text",buttonIndex:"",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",base64Url:"",imgError:!1,textFits:!0,headerFits:!0,backgroundColor:"",color:""},r.preview=a.a.createRef(),j()(Object(d.a)(r)),r}return Object(l.a)(o,[{key:"changeTextColor",value:function(e){this.setState({color:e})}},{key:"changeColor",value:function(e){this.setState({backgroundColor:e})}},{key:"onChange",value:function(e){var t=e.target.name;this.setState(Object(c.a)({},t,e.target.value))}},{key:"handleEdit",value:function(e){e.preventDefault(),this.setState({buttonIndex:e.target.id})}},{key:"onTextLayoutChange",value:function(e){this.state.textFits!==e&&this.setState({textFits:e})}},{key:"onHeaderLayoutChange",value:function(e){this.state.headerFits!==e&&this.setState({headerFits:e})}},{key:"printDocument",value:function(e){var t=this;g(e,{useCORS:!0}).then((function(e){t.saveAsPng(e.toDataURL(),"banner.png")}))}},{key:"saveAsPng",value:function(e,t){if(this.state.textFits&&this.state.headerFits){var o=document.createElement("a");"string"===typeof o.download?(o.href=e,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)):window.open(e)}else v.a.fire({position:"top",icon:"warning",title:"Unable to save PNG (too long text)",showConfirmButton:!1,timer:1500})}},{key:"print",value:function(){this.printDocument(this.preview.current.getRef())}},{key:"saveImgBase",value:function(e){var t=this;this.setState({imgError:!1});var o=document.createElement("canvas"),r=o.getContext("2d"),s=new Image;s.crossOrigin="anonymous",s.src=e.target.value,s.onload=function(){o.width=s.width,o.height=s.height,r.drawImage(s,0,0),document.body.append(o);var e=o.toDataURL();t.setState({base64Url:e})},s.onerror=function(){t.setState({imgError:!0,base64Url:e.target.value})},this.setState({imgUrl:e.target.value})}},{key:"copyText",value:function(e,t){var o,r;if(this.state.textFits&&this.state.headerFits){var s=document.createElement("div");s.classList.add("copyDiv"),document.body.append(s),s.innerText=e,window.getSelection().removeAllRanges();var a=document.createRange();a.selectNodeContents(s),window.getSelection().addRange(a),console.log(e,s);try{r=document.execCommand("copy")}catch(n){console.error(n),r=!1}r||console.error("failed to copy!"),document.body.removeChild(s),window.getSelection().removeAllRanges(),o="".concat(t,r?" coppied successfully":" coppied unsuccessfully")}else r=!1,o="Too long text";v.a.fire({position:"top",icon:r?"success":"warning",title:o,showConfirmButton:!1,timer:1500})}},{key:"saveAsJson",value:function(){var e={href:this.state.url,header:this.state.header,description:this.state.description,imgUrl:this.state.imgUrl,backgroundColor:this.state.backgroundColor,color:this.state.color},t=JSON.stringify(e);this.copyText(t,"JSON")}},{key:"saveAsHtml",value:function(){var e=document.getElementById("preview");this.copyText(e.innerHTML,"HTML")}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsxs)("div",{className:"main-block",children:[Object(r.jsx)(y,{value:this.state.header,onChange:this.onChange,saveImgBase:this.saveImgBase,handleEdit:this.handleEdit,buttonIndex:this.state.buttonIndex,header:this.state.header,description:this.state.description,url:this.state.url,imgUrl:this.state.imgUrl,textFits:this.state.textFits,headerFits:this.state.headerFits,printDocument:this.printDocument,print:this.print,saveAsHtml:this.saveAsHtml,changeColor:this.changeColor,changeTextColor:this.changeTextColor,saveAsJson:this.saveAsJson,imgError:this.state.imgError}),Object(r.jsx)("div",{id:"preview",children:Object(r.jsx)(T,{onChange:this.onChange,header:this.state.header,description:this.state.description,url:this.state.url,imgUrl:this.state.base64Url||this.state.imgUrl,onTextLayoutChange:this.onTextLayoutChange,onHeaderLayoutChange:this.onHeaderLayoutChange,printDocument:this.printDocument,ref:this.preview,changeColor:this.changeColor,backgroundColor:this.state.backgroundColor,color:this.state.color})})]}),Object(r.jsx)(S,{})]})}}]),o}(a.a.Component)),H=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,57)).then((function(t){var o=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,n=t.getTTFB;o(e),r(e),s(e),a(e),n(e)}))};i.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)(L,{}),","]}),document.getElementById("root")),H()}},[[41,1,2]]]);
//# sourceMappingURL=main.89b1d9ca.chunk.js.map