(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),o=a(4),r=a.n(o),s=a(3),i=(a(19),a(0)),l=function(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],r=c[1];return Object(i.jsx)("header",{onSubmit:function(e){e.preventDefault(),t(o),r("")},className:"Searchbar",children:Object(i.jsxs)("form",{className:"SearchForm",children:[Object(i.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(i.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(i.jsx)("input",{value:o,onChange:function(e){return r(e.target.value)},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},u=(a(21),a(22),function(e){var t=e.image,a=e.onShowModal,n=e.onShowImage;return Object(i.jsx)("li",{className:"ImageGalleryItem",children:Object(i.jsx)("img",{src:t.webformatURL,alt:t.tags,onClick:function(){a(),n(t)},className:"ImageGalleryItem-image"})})}),m=function(e){var t=e.images,a=e.onShowModal,n=e.onShowImage;return Object(i.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(i.jsx)(u,{image:e,onShowModal:a,onShowImage:n},e.id)}))})},b=(a(23),document.querySelector("#modal-root")),j=function(e){var t=e.image;e.onCloseModal;return Object(o.createPortal)(Object(i.jsx)("div",{className:"Overlay",onKeyDown:function(e){console.log(e)},tabIndex:"0",children:Object(i.jsx)("div",{className:"Modal",children:Object(i.jsx)("img",{src:t.largeImageURL,alt:t.tags})})}),b)},h=a(6),f=a.n(h);f.a.defaults.baseURL="https://pixabay.com/api/";var d=function(e){return f.a.get("https://pixabay.com/api/?key=".concat("20378001-e5e40f3ffb0fb0828fca51f1b","&q=").concat(e,"&image_type=photo")).then((function(e){return e.data.hits}))},g=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),r=Object(s.a)(o,2),u=r[0],b=r[1],h=Object(n.useState)({}),f=Object(s.a)(h,2),g=f[0],O=f[1],p=function(){b(!u)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{onSubmit:function(e){d(e).then((function(e){return c(e)})),console.log(a)}}),Object(i.jsx)(m,{images:a,onShowModal:p,onShowImage:function(e){O(e)}}),u&&Object(i.jsx)(j,{image:g,onCloseModal:p})]})};a(42);r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b869b513.chunk.js.map