import{U as c,u as l,j as e}from"./index-2cd5fc6d.js";import{u}from"./index.esm-86e5eb14.js";function x(){const{userName:a,dispatch:t}=c(),o=l();console.log(a);const{handleSubmit:n,register:s,reset:m}=u();function i(r){console.log(r),t({type:"signIn",payload:r.userName}),m(),o("/productList")}return e.jsxs("form",{onSubmit:n(i),className:"col-md-6 mx-auto my-4",children:[e.jsx("h1",{className:"text-center mb-4",children:"Please Sign in"}),e.jsx("div",{className:"form-group",children:e.jsx("input",{required:!0,placeholder:"User Name",name:"userName",className:"form-control",type:"text",...s("userName")})}),e.jsx("div",{className:"form-group my-4",children:e.jsx("input",{required:!0,placeholder:"Password",name:"password",type:"password",className:"form-control",...s("Password")})}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign In"})]})}export{x as default};
