(this.webpackJsonpbanner=this.webpackJsonpbanner||[]).push([[0],{33:function(e,t,o){e.exports={copyright:"CopyrightM_copyright__11FWh"}},40:function(e,t,o){},47:function(e,t,o){},55:function(e,t,o){},56:function(e,t,o){"use strict";o.r(t);var n=o(2),r=o(0),a=o.n(r),i=o(13),s=o.n(i),c=(o(40),o(17)),l=o(18),h=o(14),p=o(21),d=o(20),u=o(29),b=o(22),g=o.n(b),m=o(19),j=o.n(m),x=o(9),f=o.n(x),v=o(6),C=o(70);o(47);function O(e){return Object(n.jsx)("div",{children:Object(n.jsx)(C.a,Object(v.a)({variant:"contained",style:{borderRadius:0,border:"1px solid lightgray",padding:"10px 14px",backgroundColor:"white",margin:"10px",lineHeight:"1.30rem",fontSize:"12px",textAlign:"center",minWidth:"110px"},className:"button"},e))})}var y=o(15),k=function(e){Object(p.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(c.a)(this,o),n=t.call(this,e),j()(Object(h.a)(n)),n}return Object(l.a)(o,[{key:"onChangeBgColor",value:function(e){var t=e.target.value;this.props.changeBgColor(t)}},{key:"onChangeTextColor",value:function(e){var t=e.target.value;this.props.changeTextColor(t)}},{key:"onChangeInput",value:function(e){console.log(e.target.name,e.target.value),this.props.changeInputVal(e.target.name,e.target.value)}},{key:"saveImgBase",value:function(e){var t=this,o=e.target.value,n=document.createElement("canvas"),r=n.getContext("2d"),a=new Image;a.crossOrigin="anonymous",a.src=e.target.value,a.onload=function(){n.width=a.width,n.height=a.height,r.drawImage(a,0,0),document.body.append(n);var e=n.toDataURL();t.props.base64Url(e,!1)},a.onerror=function(){t.props.base64Url(o,!0)},this.props.setImgUrl(o)}},{key:"clearForm",value:function(){var e=this;g.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, clear form!"}).then((function(t){t.isConfirmed&&(g.a.fire("Cleared!","Your form has been cleared.","success"),e.props.clearForm())}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:f.a.wrapper,children:[Object(n.jsxs)("form",{className:f.a.inputBlock,autoComplete:"off",children:[Object(n.jsx)("label",{children:"Insert the link that leads to the banner"}),Object(n.jsx)("input",{className:f.a.inputForm,onChange:this.onChangeInput,name:"url",value:this.props.url}),Object(n.jsx)("label",{children:"Insert the link that leads to the picture or dataURI"}),Object(n.jsx)("input",{className:f.a.inputForm,onChange:this.saveImgBase,value:this.props.imgUrl,name:"imgUrl"}),this.props.imgError&&this.props.imgUrl.trim()&&Object(n.jsx)("div",{className:f.a.text,children:"This image'll be shown but won't be saved because of CORS."}),Object(n.jsx)("label",{children:"Header"}),Object(n.jsx)("input",{className:f.a.inputForm,onChange:this.onChangeInput,value:this.props.header,name:"header"}),!this.props.headerFits&&Object(n.jsx)("div",{className:f.a.text,children:"Too long text"}),Object(n.jsx)("label",{children:"Text"}),Object(n.jsx)("textarea",{className:f.a.inputForm,onChange:this.onChangeInput,value:this.props.description,name:"description"}),!this.props.textFits&&Object(n.jsx)("div",{className:f.a.text,children:"Too long text"}),Object(n.jsxs)("div",{className:f.a.colors,children:[Object(n.jsxs)("div",{className:f.a.chooseColor,children:["Pick background ",Object(n.jsx)("br",{}),"color"]}),Object(n.jsx)("input",{className:f.a.color,type:"color",list:"colorList",onChange:this.onChangeBgColor}),Object(n.jsxs)("div",{className:f.a.chooseColor,children:["Pick text ",Object(n.jsx)("br",{}),"color"]}),Object(n.jsx)("input",{className:f.a.color,type:"color",list:"colorList",onChange:this.onChangeTextColor})]})]}),Object(n.jsxs)("div",{className:f.a.buttons,children:[Object(n.jsxs)(O,{type:"button",id:"png",onClick:this.props.print,children:["Save as ",Object(n.jsx)("br",{}),"PNG"]}),Object(n.jsxs)(O,{type:"button",id:"html",onClick:this.props.saveAsHtml,children:["Copy as ",Object(n.jsx)("br",{}),"HTML"]}),Object(n.jsxs)(O,{type:"button",id:"json",onClick:this.props.saveAsJson,children:["Copy as ",Object(n.jsx)("br",{}),"JSON"]}),Object(n.jsxs)(O,{type:"button",id:"clear",onClick:this.clearForm,children:["Clear ",Object(n.jsx)("br",{}),"form"]})]})]})}}]),o}(a.a.Component),w={changeTextColor:function(e){return{type:"CHANGE_TEXT_COLOR",payload:{textColor:e}}},changeBgColor:function(e){return{type:"CHANGE_BG_COLOR",payload:{bgColor:e}}},changeInputVal:function(e,t){return{type:"CHANGE_INPUT_VAL",payload:{name:e,value:t}}},setImgUrl:function(e){return{type:"SET_IMG_URL",payload:{imgUrl:e}}},base64Url:function(e,t){return{type:"BASE_64_URL",payload:{base64Url:e,imgError:t}}},clearForm:function(e,t,o,n,r,a){return{type:"CLEAR_FORM",payload:{url:e,imgUrl:t,header:o,description:n,textColor:r,bgColor:a}}}},_=Object(y.b)((function(e){return{textColor:e.textColor,bgColor:e.bgColor,description:e.description,header:e.header,url:e.url,imgUrl:e.imgUrl,imgError:e.imgError}}),w)(k),T=o(16),N=o(32),F="\n    width: 350px;\n    margin-bottom: 10px;\n    font-size: 30px;\n    text-decoration: none;\n    font-weight: bold;\n    color: black;\n    white-space: break-spaces;\n    line-height: 53px;\n    text-decoration: none;\n",U="\n    width: 350px;\n    margin-bottom: 10px;\n    font-size: 20px;\n    text-decoration: none;\n    color: black;\n    white-space: break-spaces;\n    line-height: 23px;\n    max-height: 65px;\n    text-decoration: none;\n",L="\n    max-height: none;\n    position: absolute;\n    visibility: hidden;\n    white-space: break-spaces;\n",R={wrapper:"\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: flex-end;\n        background-size: cover;\n        background-color: white;\n      ",text:"\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 50px;\n        color: white;\n      ",header:[F,"max-height: 60px;","white-space: nowrap;","overflow: hidden;","text-overflow: ellipsis;"].join(""),description:[U,"max-height: 65px;"].join(""),descriptionToCheck:[U,L].join(""),headerToCheck:[F,L].join(""),linkWrapper:"\n        text-decoration: none;\n        width: 100%;\n        display: flex;\n      "};T.b.use(Object(N.a)());var E=T.b.createStyleSheet(R),A=E.attach().classes,S=E.toString(),H=function(e){Object(p.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(c.a)(this,o),(n=t.call(this,e)).description=a.a.createRef(),n.descriptionToCheck=a.a.createRef(),n.png=a.a.createRef(),n.header=a.a.createRef(),n.headerToCheck=a.a.createRef(),j()(Object(h.a)(n)),n}return Object(l.a)(o,[{key:"componentDidMount",value:function(){this.checkOffsetHeight()}},{key:"componentDidUpdate",value:function(){this.checkOffsetHeight()}},{key:"checkOffsetHeight",value:function(){this.description.current.offsetHeight!==this.descriptionToCheck.current.offsetHeight?this.props.onTextLayoutChange(!1):this.props.onTextLayoutChange(!0),this.header.current.offsetHeight!==this.headerToCheck.current.offsetHeight?this.props.onHeaderLayoutChange(!1):this.props.onHeaderLayoutChange(!0)}},{key:"getRef",value:function(){return this.png.current}},{key:"render",value:function(){return Object(n.jsx)("a",{href:this.props.url,target:"_blank",className:A.linkWrapper,id:"linkBanner",children:Object(n.jsx)("div",{className:A.wrapper,id:"img",style:{backgroundImage:"url(".concat(this.props.imgUrl,")"),backgroundColor:this.props.bgColor},ref:this.png,children:Object(n.jsxs)("div",{className:A.text,children:[Object(n.jsx)("div",{className:A.header,ref:this.header,style:{color:this.props.textColor},children:this.props.header}),Object(n.jsx)("div",{className:"".concat(A.header," ").concat(A.headerToCheck),ref:this.headerToCheck,children:this.props.header}),Object(n.jsx)("div",{className:A.description,value:this.props.description,ref:this.description,style:{color:this.props.textColor},children:this.props.description}),Object(n.jsx)("div",{className:"".concat(A.description," ").concat(A.descriptionToCheck),ref:this.descriptionToCheck,children:this.props.description})]})})})}}]),o}(a.a.Component),I=Object(y.b)((function(e){return{textColor:e.textColor,bgColor:e.bgColor,description:e.description,header:e.header,url:e.url,imgUrl:e.base64Url||e.imgUrl,imgError:!1}}),null,null,{forwardRef:!0})(H),B=a.a.forwardRef((function(e,t){return Object(n.jsx)(I,Object(v.a)(Object(v.a)({},e),{},{ref:t}))})),M=o(33),D=o.n(M),G=function(){return Object(n.jsxs)("div",{className:D.a.copyright,children:[Object(n.jsx)("div",{children:"\xa9 Ostrovskaya Alexandra"}),Object(n.jsx)("div",{children:"Special for Avito"}),Object(n.jsx)("div",{children:"Unit VAS"}),Object(n.jsx)("div",{children:"2020"})]})},P=(o(55),function(e){Object(p.a)(o,e);var t=Object(d.a)(o);function o(e){var n;return Object(c.a)(this,o),(n=t.call(this,e)).state={textFits:!0,headerFits:!0},n.preview=a.a.createRef(),j()(Object(h.a)(n)),n}return Object(l.a)(o,[{key:"onTextLayoutChange",value:function(e){this.state.textFits!==e&&this.setState({textFits:e})}},{key:"onHeaderLayoutChange",value:function(e){this.state.headerFits!==e&&this.setState({headerFits:e})}},{key:"printDocument",value:function(e){var t=this;u(e,{useCORS:!0}).then((function(e){t.saveAsPng(e.toDataURL(),"banner.png")}))}},{key:"saveAsPng",value:function(e,t){if(this.state.textFits){var o=document.createElement("a");"string"===typeof o.download?(o.href=e,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)):window.open(e)}else g.a.fire({position:"top",icon:"warning",title:"Unable to save PNG (too long text)",showConfirmButton:!1,timer:1500})}},{key:"print",value:function(){this.printDocument(this.preview.current.getRef())}},{key:"copyText",value:function(e,t){var o,n;if(this.state.textFits){var r=document.createElement("div");r.classList.add("copyDiv"),document.body.append(r),r.innerText=e,window.getSelection().removeAllRanges();var a=document.createRange();a.selectNodeContents(r),window.getSelection().addRange(a),console.log(e,r);try{n=document.execCommand("copy")}catch(i){console.error(i),n=!1}n||console.error("failed to copy!"),document.body.removeChild(r),window.getSelection().removeAllRanges(),o="".concat(t,n?" coppied successfully":" coppied unsuccessfully")}else n=!1,o="Too long text";g.a.fire({position:"top",icon:n?"success":"warning",title:o,showConfirmButton:!1,timer:1500})}},{key:"saveAsJson",value:function(){var e={href:this.props.url,header:this.props.header,description:this.props.description,imgUrl:this.props.imgUrl,backgroundColor:this.props.backgroundColor,color:this.props.color},t=JSON.stringify(e);this.copyText(t,"JSON")}},{key:"saveAsHtml",value:function(){var e=document.getElementById("preview");this.copyText("\n        <style>".concat(S,"</style>\n        ").concat(e.innerHTML,"\n    "),"HTML")}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsxs)("div",{className:"main-block",children:[Object(n.jsx)(_,{saveImgBase:this.saveImgBase,handleEdit:this.handleEdit,textFits:this.state.textFits,headerFits:this.state.headerFits,printDocument:this.printDocument,print:this.print,saveAsHtml:this.saveAsHtml,saveAsJson:this.saveAsJson}),Object(n.jsx)("div",{id:"preview",children:Object(n.jsx)(B,{onTextLayoutChange:this.onTextLayoutChange,onHeaderLayoutChange:this.onHeaderLayoutChange,printDocument:this.printDocument,ref:this.preview})})]}),Object(n.jsx)(G,{})]})}}]),o}(a.a.Component)),J=Object(y.b)((function(e){return e}),{})(P),z=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,71)).then((function(t){var o=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;o(e),n(e),r(e),a(e),i(e)}))},V=o(25),W=o(24),Y={textColor:"",bgColor:"",description:"Sample text Sample text Sample text Sample text",header:"Sample header",url:"https://www.avito.ru/moskva",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",imgError:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_TEXT_COLOR":return Object(v.a)(Object(v.a)({},e),{},{textColor:t.payload.textColor});case"CHANGE_BG_COLOR":return Object(v.a)(Object(v.a)({},e),{},{bgColor:t.payload.bgColor});case"CHANGE_INPUT_VAL":var o=t.payload.name;return Object(v.a)(Object(v.a)({},e),{},Object(W.a)({},o,t.payload.value));case"SET_IMG_URL":return Object(v.a)(Object(v.a)({},e),{},{imgUrl:t.payload.imgUrl,imgError:!1});case"BASE_64_URL":var n=t.payload.imgError;return Object(v.a)(Object(v.a)({},e),{},{base64Url:t.payload.base64Url,imgError:n});case"CLEAR_FORM":return Object(v.a)(Object(v.a)({},e),{},{url:"",imgUrl:"",header:"",description:"",textColor:"",bgColor:""});default:return e}},K=Object(V.b)(X);s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(y.a,{store:K,children:Object(n.jsx)(J,{})})}),document.getElementById("root")),z()},9:function(e,t,o){e.exports={wrapper:"FormM_wrapper__3_aeo",inputBlock:"FormM_inputBlock__2j6uP",buttons:"FormM_buttons__3g0aD",inputForm:"FormM_inputForm__3SzpD",text:"FormM_text__1xw3i",color:"FormM_color__zrKOh",chooseColor:"FormM_chooseColor__2ups9",colors:"FormM_colors__16rIx"}}},[[56,1,2]]]);
//# sourceMappingURL=main.9b352719.chunk.js.map