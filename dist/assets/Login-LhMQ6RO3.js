import{r as t,j as e,Q as o,L as i}from"./index-PivmmkyQ.js";import{a as m,E as l,I as x,L as p}from"./APIRequest-FTJ4yMbw.js";const h=()=>{let a,r=t.useRef();const d=()=>{let s=r.value,n=a.value;m(s)?l("Invalid Email Address"):x(n)?l("Password Required"):p(s,n).then(c=>{c===!0&&(window.location.href="/")})};return e.jsx(t.Fragment,{children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"col-md-7 col-lg-6 center-screen",children:e.jsx("div",{className:"card w-90  p-4",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h4",{children:"SIGN IN"}),e.jsx("br",{}),e.jsx("input",{ref:s=>r=s,placeholder:"User Email",className:"form-control animated fadeInUp",type:"email"}),e.jsx("br",{}),e.jsx("input",{ref:s=>a=s,placeholder:"User Password",className:"form-control animated fadeInUp",type:"password"}),e.jsx("br",{}),e.jsx("button",{onClick:d,className:"btn w-100 animated fadeInUp float-end btn-primary",children:"Next"}),e.jsx(o,{}),e.jsx("hr",{}),e.jsx("div",{className:"float-end mt-3",children:e.jsxs("span",{children:[e.jsx(i,{className:"text-center ms-3 h6 animated fadeInUp",to:"/Registration",children:"Sign Up "}),e.jsx("span",{className:"ms-1",children:"|"}),e.jsx(i,{className:"text-center ms-3 h6 animated fadeInUp",to:"/SendOTP",children:"Forget Password"})]})})]})})})})})})};export{h as default};
