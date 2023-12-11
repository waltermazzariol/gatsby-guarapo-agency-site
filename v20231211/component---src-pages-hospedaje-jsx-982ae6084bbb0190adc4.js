"use strict";(self.webpackChunkonepage_starter=self.webpackChunkonepage_starter||[]).push([[605],{1937:function(e,t,a){var s=a(7294),r=a(1555);function l(e){let{title:t,subtitle:a,slogan:l}=e;return s.createElement(r.Z,{lg:12,className:"mb-5 mt-5"},s.createElement("h2",{className:"text-center"},t),s.createElement("p",{className:"mt-4 text-center"},a))}l.defaultProps={title:"Title",subtitle:"",slogan:""},t.Z=l},7617:function(e,t,a){var s=a(7294),r=a(682);t.Z=function(e){return s.createElement(r.Z,{as:"header",fluid:!0,className:"cover"},s.createElement("div",{className:"cover-wrapper"},s.createElement("div",{className:"cover-item text-center"},e.data?s.createElement("h1",{className:"cover-title",dangerouslySetInnerHTML:{__html:e.data.title}}):"",e.data?s.createElement("div",{className:"cover-subtitle pt-3"},e.data.subtitle):"")))}},3398:function(e,t,a){var s=a(7294),r=a(4854);t.Z=function(e){let{data:t,popular:a}=e;return s.createElement("div",{className:"container package mb-5"},s.createElement("div",{className:"row g-3 justify-content-center"},t.map(((e,t)=>s.createElement("div",{key:t,className:"col-12 col-md-6 col-lg-4"},s.createElement("span",{className:"item d-flex flex-column bg-second-color"},s.createElement("span",{className:"d-flex justify-content-between flex-wrap mb-3"},s.createElement("h3",{className:"item-main-title"},e.name),1===t&&a?s.createElement("div",{className:"item-tag-wrapper mt-2"},s.createElement("span",{className:"item-tag"},"Popular 😎")):""),s.createElement("div",{className:"item-price"},s.createElement("div",{className:"item-text-left"},e.from),s.createElement("span",{className:"item-title text-left text-color-second-color"},e.price),s.createElement("span",{className:"item-text-right"},e.time)),s.createElement("ul",{className:"item-list"},e.list.map(((e,t)=>s.createElement("li",{key:t},s.createElement("i",{className:"fa-solid fa-check-circle"}),e.text)))),s.createElement("span",{className:"d-flex flex-column mt-auto"},s.createElement("span",{className:"d-flex mt-auto"},s.createElement("a",{className:"item-btn button button--primary me-2",href:e.button_url,target:"_blank",rel:"noopener noreferrer"},e.button_text),e.button_text_second?s.createElement(r.Link,{className:"item-btn button button--outline",to:e.button_url_second,rel:"noopener noreferrer"},e.button_text_second):""),s.createElement("a",{className:"button button--text",href:"#form"},"¿Tienes una duda? Escríbenos"))))))))}},7714:function(e,t,a){a.r(t),a.d(t,{Head:function(){return F},default:function(){return I}});var s=a(7294),r=a(4410),l=a(5314),n=a(5505),c=a(9248),o=a(3398),i=a(7617),m=a(6565),d=a(5006),u=a(1937),f=a(3561),p=a(4184),v=a.n(p),b=a(6792),x=a(6558);const N=s.createContext(null);N.displayName="InputGroupContext";var h=N,E=a(5893);const y=s.forwardRef((({className:e,bsPrefix:t,as:a="span",...s},r)=>(t=(0,b.vE)(t,"input-group-text"),(0,E.jsx)(a,{ref:r,className:v()(e,t),...s}))));y.displayName="InputGroupText";var g=y;const j=s.forwardRef((({bsPrefix:e,size:t,hasValidation:a,className:r,as:l="div",...n},c)=>{e=(0,b.vE)(e,"input-group");const o=(0,s.useMemo)((()=>({})),[]);return(0,E.jsx)(h.Provider,{value:o,children:(0,E.jsx)(l,{ref:c,...n,className:v()(r,e,t&&`${e}-${t}`,a&&"has-validation")})})}));j.displayName="InputGroup";var Z=Object.assign(j,{Text:g,Radio:e=>(0,E.jsx)(g,{children:(0,E.jsx)(x.Z,{type:"radio",...e})}),Checkbox:e=>(0,E.jsx)(g,{children:(0,E.jsx)(x.Z,{type:"checkbox",...e})})}),w=a(5005),k=a(1555);var I=function(e){const t=e.data.allDataJson.edges[0].node,a=e.data.dataJson,{0:n,1:p}=(0,s.useState)("");return s.createElement(c.Z,{nav:a.navigation},s.createElement(i.Z,{data:t.cover}),s.createElement(d.Z,null,s.createElement("div",{className:"col-12 pt-4 small"},s.createElement("a",{href:"/"},"Inicio")," / Hospedaje Web")),s.createElement(d.Z,{className:"price mb-5",rowClass:"justify-content-center"},s.createElement(u.Z,{title:t.domains.title,subtitle:t.domains.description}),s.createElement(k.Z,{lg:8},s.createElement(f.Z,null,s.createElement(Z,{controlid:"formBasicName",className:"mb-3 InputGroup"},s.createElement(f.Z.Control,{type:"text",value:n,onChange:e=>p(e.target.value),placeholder:"Introduce el nombre del dominio .com .net .org .es"}),s.createElement(w.Z,{variant:"button button--primary text-white",type:"submit",href:"https://guarapohosting.com/cart.php?a=add&domain=register&query="+n,value:"Submit",target:"_blank","aria-label":"Sumit"},"Buscar Dominio"))))),s.createElement(d.Z,{className:"price"},s.createElement(u.Z,{title:t.packages.title}),s.createElement(o.Z,{data:t.packages.items})),s.createElement(d.Z,{anchor:"contact",className:"contact bg-dark",fluid:!0},s.createElement(m.Z,{data:a.contact})),s.createElement(r.Z,null,s.createElement(l.Z,{data:a.tags})))};function F(e){return s.createElement(n.Z,{page:"hospedaje",metas:e.data.allDataJson.edges[0].node.general})}},5005:function(e,t,a){var s=a(4184),r=a.n(s),l=a(7294),n=a(861),c=a(6792),o=a(5893);const i=l.forwardRef((({as:e,bsPrefix:t,variant:a="primary",size:s,active:l=!1,disabled:i=!1,className:m,...d},u)=>{const f=(0,c.vE)(t,"btn"),[p,{tagName:v}]=(0,n.FT)({tagName:e,disabled:i,...d}),b=v;return(0,o.jsx)(b,{...p,...d,ref:u,disabled:i,className:r()(m,f,l&&"active",a&&`${f}-${a}`,s&&`${f}-${s}`,d.href&&i&&"disabled")})}));i.displayName="Button",t.Z=i},3561:function(e,t,a){a.d(t,{Z:function(){return G}});var s=a(4184),r=a.n(s),l=a(5697),n=a.n(l),c=a(7294),o=a(5893);const i={type:n().string,tooltip:n().bool,as:n().elementType},m=c.forwardRef((({as:e="div",className:t,type:a="valid",tooltip:s=!1,...l},n)=>(0,o.jsx)(e,{...l,ref:n,className:r()(t,`${a}-${s?"tooltip":"feedback"}`)})));m.displayName="Feedback",m.propTypes=i;var d=m,u=a(6558),f=a(1377),p=a(6792);const v=c.forwardRef((({bsPrefix:e,className:t,htmlFor:a,...s},l)=>{const{controlId:n}=(0,c.useContext)(f.Z);return e=(0,p.vE)(e,"form-check-label"),(0,o.jsx)("label",{...s,ref:l,htmlFor:a||n,className:r()(t,e)})}));v.displayName="FormCheckLabel";var b=v;const x=c.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:a,inline:s=!1,reverse:l=!1,disabled:n=!1,isValid:i=!1,isInvalid:m=!1,feedbackTooltip:v=!1,feedback:x,feedbackType:N,className:h,style:E,title:y="",type:g="checkbox",label:j,children:Z,as:w="input",...k},I)=>{t=(0,p.vE)(t,"form-check"),a=(0,p.vE)(a,"form-switch");const{controlId:F}=(0,c.useContext)(f.Z),C=(0,c.useMemo)((()=>({controlId:e||F})),[F,e]),R=!Z&&null!=j&&!1!==j||function(e,t){return c.Children.toArray(e).some((e=>c.isValidElement(e)&&e.type===t))}(Z,b),P=(0,o.jsx)(u.Z,{...k,type:"switch"===g?"checkbox":g,ref:I,isValid:i,isInvalid:m,disabled:n,as:w});return(0,o.jsx)(f.Z.Provider,{value:C,children:(0,o.jsx)("div",{style:E,className:r()(h,R&&t,s&&`${t}-inline`,l&&`${t}-reverse`,"switch"===g&&a),children:Z||(0,o.jsxs)(o.Fragment,{children:[P,R&&(0,o.jsx)(b,{title:y,children:j}),x&&(0,o.jsx)(d,{type:N,tooltip:v,children:x})]})})})}));x.displayName="FormCheck";var N=Object.assign(x,{Input:u.Z,Label:b});a(2473);const h=c.forwardRef((({bsPrefix:e,type:t,size:a,htmlSize:s,id:l,className:n,isValid:i=!1,isInvalid:m=!1,plaintext:d,readOnly:u,as:v="input",...b},x)=>{const{controlId:N}=(0,c.useContext)(f.Z);return e=(0,p.vE)(e,"form-control"),(0,o.jsx)(v,{...b,type:t,size:s,ref:x,readOnly:u,id:l||N,className:r()(n,d?`${e}-plaintext`:e,a&&`${e}-${a}`,"color"===t&&`${e}-color`,i&&"is-valid",m&&"is-invalid")})}));h.displayName="FormControl";var E=Object.assign(h,{Feedback:d});const y=c.forwardRef((({className:e,bsPrefix:t,as:a="div",...s},l)=>(t=(0,p.vE)(t,"form-floating"),(0,o.jsx)(a,{ref:l,className:r()(e,t),...s}))));y.displayName="FormFloating";var g=y;const j=c.forwardRef((({controlId:e,as:t="div",...a},s)=>{const r=(0,c.useMemo)((()=>({controlId:e})),[e]);return(0,o.jsx)(f.Z.Provider,{value:r,children:(0,o.jsx)(t,{...a,ref:s})})}));j.displayName="FormGroup";var Z=j,w=a(1555);const k=c.forwardRef((({as:e="label",bsPrefix:t,column:a=!1,visuallyHidden:s=!1,className:l,htmlFor:n,...i},m)=>{const{controlId:d}=(0,c.useContext)(f.Z);t=(0,p.vE)(t,"form-label");let u="col-form-label";"string"==typeof a&&(u=`${u} ${u}-${a}`);const v=r()(l,t,s&&"visually-hidden",a&&u);return n=n||d,a?(0,o.jsx)(w.Z,{ref:m,as:"label",className:v,htmlFor:n,...i}):(0,o.jsx)(e,{ref:m,className:v,htmlFor:n,...i})}));k.displayName="FormLabel";var I=k;const F=c.forwardRef((({bsPrefix:e,className:t,id:a,...s},l)=>{const{controlId:n}=(0,c.useContext)(f.Z);return e=(0,p.vE)(e,"form-range"),(0,o.jsx)("input",{...s,type:"range",ref:l,className:r()(t,e),id:a||n})}));F.displayName="FormRange";var C=F;const R=c.forwardRef((({bsPrefix:e,size:t,htmlSize:a,className:s,isValid:l=!1,isInvalid:n=!1,id:i,...m},d)=>{const{controlId:u}=(0,c.useContext)(f.Z);return e=(0,p.vE)(e,"form-select"),(0,o.jsx)("select",{...m,size:a,ref:d,className:r()(s,e,t&&`${e}-${t}`,l&&"is-valid",n&&"is-invalid"),id:i||u})}));R.displayName="FormSelect";var P=R;const $=c.forwardRef((({bsPrefix:e,className:t,as:a="small",muted:s,...l},n)=>(e=(0,p.vE)(e,"form-text"),(0,o.jsx)(a,{...l,ref:n,className:r()(t,e,s&&"text-muted")}))));$.displayName="FormText";var _=$;const T=c.forwardRef(((e,t)=>(0,o.jsx)(N,{...e,ref:t,type:"switch"})));T.displayName="Switch";var S=Object.assign(T,{Input:N.Input,Label:N.Label});const L=c.forwardRef((({bsPrefix:e,className:t,children:a,controlId:s,label:l,...n},c)=>(e=(0,p.vE)(e,"form-floating"),(0,o.jsxs)(Z,{ref:c,className:r()(t,e),controlId:s,...n,children:[a,(0,o.jsx)("label",{htmlFor:s,children:l})]}))));L.displayName="FloatingLabel";var z=L;const O={_ref:n().any,validated:n().bool,as:n().elementType},V=c.forwardRef((({className:e,validated:t,as:a="form",...s},l)=>(0,o.jsx)(a,{...s,ref:l,className:r()(e,t&&"was-validated")})));V.displayName="Form",V.propTypes=O;var G=Object.assign(V,{Group:Z,Control:E,Floating:g,Check:N,Switch:S,Label:I,Text:_,Range:C,Select:P,FloatingLabel:z})},6558:function(e,t,a){var s=a(4184),r=a.n(s),l=a(7294),n=a(1377),c=a(6792),o=a(5893);const i=l.forwardRef((({id:e,bsPrefix:t,className:a,type:s="checkbox",isValid:i=!1,isInvalid:m=!1,as:d="input",...u},f)=>{const{controlId:p}=(0,l.useContext)(n.Z);return t=(0,c.vE)(t,"form-check-input"),(0,o.jsx)(d,{...u,ref:f,type:s,id:e||p,className:r()(a,t,i&&"is-valid",m&&"is-invalid")})}));i.displayName="FormCheckInput",t.Z=i},1377:function(e,t,a){const s=a(7294).createContext({});t.Z=s},2473:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=component---src-pages-hospedaje-jsx-982ae6084bbb0190adc4.js.map