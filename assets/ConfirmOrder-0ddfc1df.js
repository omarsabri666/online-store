import{U as m,r as i,j as e,b as u,u as b,Q as f}from"./index-38b55d1c.js";import{u as c}from"./index.esm-0b1837c1.js";function p(){const{register:r}=c(),{setAddress:a,address:t}=m(),[s,d]=i.useState(!1),n=async o=>{o.preventDefault();try{const{address:l}=await u();a(l),d(!0),console.log(s)}catch(l){console.error(l)}};return e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"address",className:"form-label mb-2",children:"Address"}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{required:!0,id:"address",name:"address",type:"text",defaultValue:t,placeholder:"Address",...r("address"),className:"form-control"}),!s&&e.jsx("button",{onClick:n,disabled:s,className:"btn btn-primary",children:"Get Address"})]})]})}function N(){const{userName:r,setName:a}=m(),t=b(),{register:s,handleSubmit:d}=c();function n(o){a(o.name),t("/orderinfo"),f.success("order completed")}return e.jsxs("form",{onSubmit:d(n),className:"col-md-6 mx-auto",children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{htmlFor:"name",className:"form-label",children:"Name"}),e.jsx("input",{required:!0,id:"name",name:"name",defaultValue:r,type:"text",placeholder:"Name",...s("name"),className:"form-control"})]}),e.jsx(p,{}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Confirm"})]})}export{N as default};
