import{r as d,g as f,j as e,k as t,Q as x,l as p}from"./index-PivmmkyQ.js";import{I as n,E as a,e as j}from"./APIRequest-FTJ4yMbw.js";const h=()=>{let r,l=d.useRef(),i=f();const c=()=>{let s=r.value,o=l.value;n(s)?a("Password Required"):n(o)?a("Confirm Password Required"):s!==o?a("Password & Confirm Password Should be Same"):j(t(),p(),s).then(m=>{m===!0&&i("/Login")})};return e.jsx(d.Fragment,{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-md-7 col-lg-6 center-screen",children:e.jsx("div",{className:"card w-90 p-4",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{children:"SET NEW PASSWORD"}),e.jsx("br",{}),e.jsx("label",{children:"Your email address"}),e.jsx("input",{readOnly:!0,value:t(),placeholder:"User Email",className:"form-control animated fadeInUp",type:"email"}),e.jsx("br",{}),e.jsx("label",{children:"New Password"}),e.jsx("input",{ref:s=>r=s,placeholder:"New Password",className:"form-control animated fadeInUp",type:"password"}),e.jsx("br",{}),e.jsx("label",{children:"Confirm Password"}),e.jsx("input",{ref:s=>l=s,placeholder:"Confirm Password",className:"form-control animated fadeInUp",type:"password"}),e.jsx("br",{}),e.jsx("button",{onClick:c,className:"btn w-100 animated fadeInUp float-end btn-primary",children:"Next"}),e.jsx(x,{})]})})})})})})};export{h as default};
