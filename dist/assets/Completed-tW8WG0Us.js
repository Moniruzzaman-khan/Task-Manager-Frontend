import{u as o,r as c,j as s,C as r,A as m,a as x,b as p}from"./index-PivmmkyQ.js";import{T as l}from"./APIRequest-FTJ4yMbw.js";import{D as h,U as j}from"./UpdateAlert-6kJ2JkVb.js";const v=()=>{const t=o(e=>e.task.Completed);c.useEffect(()=>{l("Completed")},[]);const d=e=>{h(e).then(a=>{a===!0&&l("Completed")})},n=(e,a)=>{j(e,a).then(i=>{i===!0&&l("Completed")})};return s.jsx(c.Fragment,{children:s.jsxs(r,{fluid:!0,className:"content-body",children:[s.jsxs("div",{className:"row p-0 m-0",children:[s.jsx("div",{className:"col-12 col-md-6 col-lg-8 px-3",children:s.jsx("h5",{children:"Task Completed"})}),s.jsx("div",{className:"col-12 float-end col-md-6 col-lg-4 px-2",children:s.jsxs("div",{className:"row",children:[s.jsx("div",{className:"col-8",children:s.jsx("input",{className:"form-control w-100"})}),s.jsx("div",{className:"col-4",children:s.jsx("button",{className:"btn btn-primary w-100",children:"Search"})})]})})]}),s.jsx("div",{className:"row p-0 m-0",children:t.map((e,a)=>s.jsx("div",{className:"col-12 col-lg-4 col-sm-6 col-md-4  p-2",children:s.jsx("div",{className:"card h-100",children:s.jsxs("div",{className:"card-body",children:[s.jsx("h6",{className:"animated fadeInUp",children:e.title}),s.jsx("p",{className:"animated fadeInUp",children:e.description}),s.jsxs("p",{className:"m-0 animated fadeInUp p-0",children:[s.jsx(m,{})," ",e.createdDate,s.jsx("a",{onClick:n.bind(void 0,e._id,e.status),className:"icon-nav text-primary mx-1",children:s.jsx(x,{})}),s.jsx("a",{onClick:d.bind(void 0,e._id),className:"icon-nav text-danger mx-1",children:s.jsx(p,{})}),s.jsx("a",{className:"badge float-end bg-success",children:e.status})]})]})})},a.toString()))})]})})};export{v as default};