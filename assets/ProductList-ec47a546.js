import{U as c,u as i,j as s,f as n,c as d,A as l,d as o}from"./index-38b55d1c.js";function u({item:e}){const{dispatch:r}=c(),a=i();function t(){r({type:"selectItem",payload:e.id}),a(`/ProductList/${e.id}`)}return s.jsx("div",{style:{cursor:"pointer"},className:"col-md-4 cursor-pointer",children:s.jsxs("div",{className:"card",onClick:t,children:[s.jsx("img",{width:250,height:250,src:e.image,alt:e.title,className:"card-img-top"}),s.jsxs("div",{className:"card-body",children:[s.jsx("h5",{className:"card-title",children:e.title}),s.jsx("p",{className:"card-text",children:n(e.price)})]})]})})}function x(){const{isLoading:e,error:r,data:a}=d({queryKey:["itemsData"],queryFn:()=>o()});return e?s.jsxs("div",{className:"d-flex align-items-center justify-content-center",children:[s.jsx(l,{className:"spin-animation h-5 w-5 mr-2"}),s.jsx("p",{children:"Loading..."})]}):r?s.jsx("div",{className:"",children:s.jsxs("p",{className:"text-danger",children:["Could not load data. Error: ",r.message]})}):s.jsx("div",{className:"  ",children:s.jsx("div",{className:"row justify-content-center g-4  ",children:a==null?void 0:a.map(t=>s.jsx(u,{item:t},t.id))})})}export{x as default};
