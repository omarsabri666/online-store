import{R as z}from"./index-38b55d1c.js";var le=e=>e.type==="checkbox",ee=e=>e instanceof Date,O=e=>e==null;const Xe=e=>typeof e=="object";var m=e=>!O(e)&&!Array.isArray(e)&&Xe(e)&&!ee(e),ft=e=>m(e)&&e.target?le(e.target)?e.target.checked:e.target.value:e,ct=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,dt=(e,i)=>e.has(ct(i)),yt=e=>{const i=e.constructor&&e.constructor.prototype;return m(i)&&i.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function K(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Ee&&(e instanceof Blob||e instanceof FileList))&&(s||m(e)))if(i=s?[]:{},!s&&!yt(e))i=e;else for(const r in e)e.hasOwnProperty(r)&&(i[r]=K(e[r]));else return e;return i}var ae=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>e===void 0,d=(e,i,s)=>{if(!i||!m(e))return s;const r=ae(i.split(/[,[\].]+?/)).reduce((a,l)=>O(a)?a:a[l],e);return k(r)||r===e?k(e[i])?s:e[i]:r};const qe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},N={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};z.createContext(null);var ht=(e,i,s,r=!0)=>{const a={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const c=l;return i._proxyFormState[c]!==N.all&&(i._proxyFormState[c]=!r||N.all),s&&(s[c]=!0),e[c]}});return a},U=e=>m(e)&&!Object.keys(e).length,gt=(e,i,s,r)=>{s(e);const{name:a,...l}=e;return U(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(c=>i[c]===(!r||N.all))},Fe=e=>Array.isArray(e)?e:[e];function vt(e){const i=z.useRef(e);i.current=e,z.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var I=e=>typeof e=="string",_t=(e,i,s,r,a)=>I(e)?(r&&i.watch.add(e),d(s,e,a)):Array.isArray(e)?e.map(l=>(r&&i.watch.add(l),d(s,l))):(r&&(i.watchAll=!0),s),pe=e=>/^\w*$/.test(e),Ye=e=>ae(e.replace(/["|']|\]/g,"").split(/\.|\[/));function x(e,i,s){let r=-1;const a=pe(i)?[i]:Ye(i),l=a.length,c=l-1;for(;++r<l;){const b=a[r];let A=s;if(r!==c){const L=e[b];A=m(L)||Array.isArray(L)?L:isNaN(+a[r+1])?{}:[]}e[b]=A,e=e[b]}return e}var Vt=(e,i,s,r,a)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[r]:a||!0}}:{};const me=(e,i,s)=>{for(const r of s||Object.keys(e)){const a=d(e,r);if(a){const{_f:l,...c}=a;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else m(c)&&me(c,i)}}};var He=e=>({isOnSubmit:!e||e===N.onSubmit,isOnBlur:e===N.onBlur,isOnChange:e===N.onChange,isOnAll:e===N.all,isOnTouch:e===N.onTouched}),We=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),At=(e,i,s)=>{const r=ae(d(e,s));return x(r,"root",i[s]),x(e,s,r),e},te=e=>typeof e=="boolean",Oe=e=>e.type==="file",G=e=>typeof e=="function",ce=e=>{if(!Ee)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},fe=e=>I(e),Te=e=>e.type==="radio",de=e=>e instanceof RegExp;const $e={value:!1,isValid:!1},Ke={value:!0,isValid:!0};var Ze=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||e[0].value===""?Ke:{value:e[0].value,isValid:!0}:Ke:$e}return $e};const ze={isValid:!1,value:null};var je=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,ze):ze;function Ge(e,i,s="validate"){if(fe(e)||Array.isArray(e)&&e.every(fe)||te(e)&&!e)return{type:s,message:fe(e)?e:"",ref:i}}var j=e=>m(e)&&!de(e)?e:{value:e,message:""},Je=async(e,i,s,r,a)=>{const{ref:l,refs:c,required:b,maxLength:A,minLength:L,min:Y,max:S,pattern:_,validate:$,name:C,valueAsNumber:ge,mount:oe,disabled:ve}=e._f,g=d(i,C);if(!oe||ve)return{};const M=c?c[0]:l,q=V=>{r&&M.reportValidity&&(M.setCustomValidity(te(V)?"":V||""),M.reportValidity())},E={},re=Te(l),se=le(l),_e=re||se,B=(ge||Oe(l))&&k(l.value)&&k(g)||ce(l)&&l.value===""||g===""||Array.isArray(g)&&!g.length,J=Vt.bind(null,C,s,E),H=(V,v,w,T=W.maxLength,R=W.minLength)=>{const P=V?v:w;E[C]={type:V?T:R,message:P,ref:l,...J(V?T:R,P)}};if(a?!Array.isArray(g)||!g.length:b&&(!_e&&(B||O(g))||te(g)&&!g||se&&!Ze(c).isValid||re&&!je(c).isValid)){const{value:V,message:v}=fe(b)?{value:!!b,message:b}:j(b);if(V&&(E[C]={type:W.required,message:v,ref:M,...J(W.required,v)},!s))return q(v),E}if(!B&&(!O(Y)||!O(S))){let V,v;const w=j(S),T=j(Y);if(!O(g)&&!isNaN(g)){const R=l.valueAsNumber||g&&+g;O(w.value)||(V=R>w.value),O(T.value)||(v=R<T.value)}else{const R=l.valueAsDate||new Date(g),P=ne=>new Date(new Date().toDateString()+" "+ne),Q=l.type=="time",ie=l.type=="week";I(w.value)&&g&&(V=Q?P(g)>P(w.value):ie?g>w.value:R>new Date(w.value)),I(T.value)&&g&&(v=Q?P(g)<P(T.value):ie?g<T.value:R<new Date(T.value))}if((V||v)&&(H(!!V,w.message,T.message,W.max,W.min),!s))return q(E[C].message),E}if((A||L)&&!B&&(I(g)||a&&Array.isArray(g))){const V=j(A),v=j(L),w=!O(V.value)&&g.length>+V.value,T=!O(v.value)&&g.length<+v.value;if((w||T)&&(H(w,V.message,v.message),!s))return q(E[C].message),E}if(_&&!B&&I(g)){const{value:V,message:v}=j(_);if(de(V)&&!g.match(V)&&(E[C]={type:W.pattern,message:v,ref:l,...J(W.pattern,v)},!s))return q(v),E}if($){if(G($)){const V=await $(g,i),v=Ge(V,M);if(v&&(E[C]={...v,...J(W.validate,v.message)},!s))return q(v.message),E}else if(m($)){let V={};for(const v in $){if(!U(V)&&!s)break;const w=Ge(await $[v](g,i),M,v);w&&(V={...w,...J(v,w.message)},q(w.message),s&&(E[C]=V))}if(!U(V)&&(E[C]={ref:M,...V},!s))return E}}return q(!0),E};function bt(e,i){const s=i.slice(0,-1).length;let r=0;for(;r<s;)e=k(e)?r++:e[i[r++]];return e}function xt(e){for(const i in e)if(e.hasOwnProperty(i)&&!k(e[i]))return!1;return!0}function p(e,i){const s=Array.isArray(i)?i:pe(i)?[i]:Ye(i),r=s.length===1?e:bt(e,s),a=s.length-1,l=s[a];return r&&delete r[l],a!==0&&(m(r)&&U(r)||Array.isArray(r)&&xt(r))&&p(e,s.slice(0,-1)),e}function we(){let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}}var ye=e=>O(e)||!Xe(e);function X(e,i){if(ye(e)||ye(i))return e===i;if(ee(e)&&ee(i))return e.getTime()===i.getTime();const s=Object.keys(e),r=Object.keys(i);if(s.length!==r.length)return!1;for(const a of s){const l=e[a];if(!r.includes(a))return!1;if(a!=="ref"){const c=i[a];if(ee(l)&&ee(c)||m(l)&&m(c)||Array.isArray(l)&&Array.isArray(c)?!X(l,c):l!==c)return!1}}return!0}var et=e=>e.type==="select-multiple",Ft=e=>Te(e)||le(e),De=e=>ce(e)&&e.isConnected,tt=e=>{for(const i in e)if(G(e[i]))return!0;return!1};function he(e,i={}){const s=Array.isArray(e);if(m(e)||s)for(const r in e)Array.isArray(e[r])||m(e[r])&&!tt(e[r])?(i[r]=Array.isArray(e[r])?[]:{},he(e[r],i[r])):O(e[r])||(i[r]=!0);return i}function rt(e,i,s){const r=Array.isArray(e);if(m(e)||r)for(const a in e)Array.isArray(e[a])||m(e[a])&&!tt(e[a])?k(i)||ye(s[a])?s[a]=Array.isArray(e[a])?he(e[a],[]):{...he(e[a])}:rt(e[a],O(i)?{}:i[a],s[a]):s[a]=!X(e[a],i[a]);return s}var ke=(e,i)=>rt(e,i,he(i)),st=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:r})=>k(e)?e:i?e===""?NaN:e&&+e:s&&I(e)?new Date(e):r?r(e):e;function Se(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Oe(i)?i.files:Te(i)?je(e.refs).value:et(i)?[...i.selectedOptions].map(({value:s})=>s):le(i)?Ze(e.refs).value:st(k(i.value)?e.ref.value:i.value,e)}var wt=(e,i,s,r)=>{const a={};for(const l of e){const c=d(i,l);c&&x(a,l,c._f)}return{criteriaMode:s,names:[...e],fields:a,shouldUseNativeValidation:r}},ue=e=>k(e)?e:de(e)?e.source:m(e)?de(e.value)?e.value.source:e.value:e,Dt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qe(e,i,s){const r=d(e,s);if(r||pe(s))return{error:r,name:s};const a=s.split(".");for(;a.length;){const l=a.join("."),c=d(i,l),b=d(e,l);if(c&&!Array.isArray(c)&&s!==l)return{name:s};if(b&&b.type)return{name:l,error:b};a.pop()}return{name:s}}var kt=(e,i,s,r,a)=>a.isOnAll?!1:!s&&a.isOnTouch?!(i||e):(s?r.isOnBlur:a.isOnBlur)?!e:(s?r.isOnChange:a.isOnChange)?e:!0,St=(e,i)=>!ae(d(e,i)).length&&p(e,i);const mt={mode:N.onSubmit,reValidateMode:N.onChange,shouldFocusError:!0};function Et(e={},i){let s={...mt,...e},r={submitCount:0,isDirty:!1,isLoading:G(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},l=m(s.defaultValues)||m(s.values)?K(s.defaultValues||s.values)||{}:{},c=s.shouldUnregister?{}:K(l),b={action:!1,mount:!1,watch:!1},A={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,Y=0;const S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},_={values:we(),array:we(),state:we()},$=e.resetOptions&&e.resetOptions.keepDirtyValues,C=He(s.mode),ge=He(s.reValidateMode),oe=s.criteriaMode===N.all,ve=t=>n=>{clearTimeout(Y),Y=setTimeout(t,n)},g=async t=>{if(S.isValid||t){const n=s.resolver?U((await B()).errors):await H(a,!0);n!==r.isValid&&_.state.next({isValid:n})}},M=t=>S.isValidating&&_.state.next({isValidating:t}),q=(t,n=[],u,y,f=!0,o=!0)=>{if(y&&u){if(b.action=!0,o&&Array.isArray(d(a,t))){const h=u(d(a,t),y.argA,y.argB);f&&x(a,t,h)}if(o&&Array.isArray(d(r.errors,t))){const h=u(d(r.errors,t),y.argA,y.argB);f&&x(r.errors,t,h),St(r.errors,t)}if(S.touchedFields&&o&&Array.isArray(d(r.touchedFields,t))){const h=u(d(r.touchedFields,t),y.argA,y.argB);f&&x(r.touchedFields,t,h)}S.dirtyFields&&(r.dirtyFields=ke(l,c)),_.state.next({name:t,isDirty:v(t,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else x(c,t,n)},E=(t,n)=>{x(r.errors,t,n),_.state.next({errors:r.errors})},re=(t,n,u,y)=>{const f=d(a,t);if(f){const o=d(c,t,k(u)?d(l,t):u);k(o)||y&&y.defaultChecked||n?x(c,t,n?o:Se(f._f)):R(t,o),b.mount&&g()}},se=(t,n,u,y,f)=>{let o=!1,h=!1;const F={name:t};if(!u||y){S.isDirty&&(h=r.isDirty,r.isDirty=F.isDirty=v(),o=h!==F.isDirty);const D=X(d(l,t),n);h=d(r.dirtyFields,t),D?p(r.dirtyFields,t):x(r.dirtyFields,t,!0),F.dirtyFields=r.dirtyFields,o=o||S.dirtyFields&&h!==!D}if(u){const D=d(r.touchedFields,t);D||(x(r.touchedFields,t,u),F.touchedFields=r.touchedFields,o=o||S.touchedFields&&D!==u)}return o&&f&&_.state.next(F),o?F:{}},_e=(t,n,u,y)=>{const f=d(r.errors,t),o=S.isValid&&te(n)&&r.isValid!==n;if(e.delayError&&u?(L=ve(()=>E(t,u)),L(e.delayError)):(clearTimeout(Y),L=null,u?x(r.errors,t,u):p(r.errors,t)),(u?!X(f,u):f)||!U(y)||o){const h={...y,...o&&te(n)?{isValid:n}:{},errors:r.errors,name:t};r={...r,...h},_.state.next(h)}M(!1)},B=async t=>s.resolver(c,s.context,wt(t||A.mount,a,s.criteriaMode,s.shouldUseNativeValidation)),J=async t=>{const{errors:n}=await B();if(t)for(const u of t){const y=d(n,u);y?x(r.errors,u,y):p(r.errors,u)}else r.errors=n;return n},H=async(t,n,u={valid:!0})=>{for(const y in t){const f=t[y];if(f){const{_f:o,...h}=f;if(o){const F=A.array.has(o.name),D=await Je(f,c,oe,s.shouldUseNativeValidation&&!n,F);if(D[o.name]&&(u.valid=!1,n))break;!n&&(d(D,o.name)?F?At(r.errors,D,o.name):x(r.errors,o.name,D[o.name]):p(r.errors,o.name))}h&&await H(h,n,u)}}return u.valid},V=()=>{for(const t of A.unMount){const n=d(a,t);n&&(n._f.refs?n._f.refs.every(u=>!De(u)):!De(n._f.ref))&&Ve(t)}A.unMount=new Set},v=(t,n)=>(t&&n&&x(c,t,n),!X(Le(),l)),w=(t,n,u)=>_t(t,A,{...b.mount?c:k(n)?l:I(t)?{[t]:n}:n},u,n),T=t=>ae(d(b.mount?c:l,t,e.shouldUnregister?d(l,t,[]):[])),R=(t,n,u={})=>{const y=d(a,t);let f=n;if(y){const o=y._f;o&&(!o.disabled&&x(c,t,st(n,o)),f=ce(o.ref)&&O(n)?"":n,et(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?le(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(F=>F===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):Oe(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||_.values.next({name:t,values:{...c}})))}(u.shouldDirty||u.shouldTouch)&&se(t,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ne(t)},P=(t,n,u)=>{for(const y in n){const f=n[y],o=`${t}.${y}`,h=d(a,o);(A.array.has(t)||!ye(f)||h&&!h._f)&&!ee(f)?P(o,f,u):R(o,f,u)}},Q=(t,n,u={})=>{const y=d(a,t),f=A.array.has(t),o=K(n);x(c,t,o),f?(_.array.next({name:t,values:{...c}}),(S.isDirty||S.dirtyFields)&&u.shouldDirty&&_.state.next({name:t,dirtyFields:ke(l,c),isDirty:v(t,o)})):y&&!y._f&&!O(o)?P(t,o,u):R(t,o,u),We(t,A)&&_.state.next({...r}),_.values.next({name:t,values:{...c}}),!b.mount&&i()},ie=async t=>{const n=t.target;let u=n.name,y=!0;const f=d(a,u),o=()=>n.type?Se(f._f):ft(t);if(f){let h,F;const D=o(),Z=t.type===qe.BLUR||t.type===qe.FOCUS_OUT,lt=!Dt(f._f)&&!s.resolver&&!d(r.errors,u)&&!f._f.deps||kt(Z,d(r.touchedFields,u),r.isSubmitted,ge,C),be=We(u,A,Z);x(c,u,D),Z?(f._f.onBlur&&f._f.onBlur(t),L&&L(0)):f._f.onChange&&f._f.onChange(t);const xe=se(u,D,Z,!1),at=!U(xe)||be;if(!Z&&_.values.next({name:u,type:t.type,values:{...c}}),lt)return S.isValid&&g(),at&&_.state.next({name:u,...be?{}:xe});if(!Z&&be&&_.state.next({...r}),M(!0),s.resolver){const{errors:Pe}=await B([u]),ot=Qe(r.errors,a,u),Ie=Qe(Pe,a,ot.name||u);h=Ie.error,u=Ie.name,F=U(Pe)}else h=(await Je(f,c,oe,s.shouldUseNativeValidation))[u],y=isNaN(D)||D===d(c,u,D),y&&(h?F=!1:S.isValid&&(F=await H(a,!0)));y&&(f._f.deps&&ne(f._f.deps),_e(u,F,h,xe))}},ne=async(t,n={})=>{let u,y;const f=Fe(t);if(M(!0),s.resolver){const o=await J(k(t)?t:f);u=U(o),y=t?!f.some(h=>d(o,h)):u}else t?(y=(await Promise.all(f.map(async o=>{const h=d(a,o);return await H(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!r.isValid)&&g()):y=u=await H(a);return _.state.next({...!I(t)||S.isValid&&u!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:u}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!y&&me(a,o=>o&&d(r.errors,o),t?f:A.mount),y},Le=t=>{const n={...l,...b.mount?c:{}};return k(t)?n:I(t)?d(n,t):t.map(u=>d(n,u))},Ce=(t,n)=>({invalid:!!d((n||r).errors,t),isDirty:!!d((n||r).dirtyFields,t),isTouched:!!d((n||r).touchedFields,t),error:d((n||r).errors,t)}),it=t=>{t&&Fe(t).forEach(n=>p(r.errors,n)),_.state.next({errors:t?r.errors:{}})},Re=(t,n,u)=>{const y=(d(a,t,{_f:{}})._f||{}).ref;x(r.errors,t,{...n,ref:y}),_.state.next({name:t,errors:r.errors,isValid:!1}),u&&u.shouldFocus&&y&&y.focus&&y.focus()},nt=(t,n)=>G(t)?_.values.subscribe({next:u=>t(w(void 0,n),u)}):w(t,n,!0),Ve=(t,n={})=>{for(const u of t?Fe(t):A.mount)A.mount.delete(u),A.array.delete(u),n.keepValue||(p(a,u),p(c,u)),!n.keepError&&p(r.errors,u),!n.keepDirty&&p(r.dirtyFields,u),!n.keepTouched&&p(r.touchedFields,u),!s.shouldUnregister&&!n.keepDefaultValue&&p(l,u);_.values.next({values:{...c}}),_.state.next({...r,...n.keepDirty?{isDirty:v()}:{}}),!n.keepIsValid&&g()},Ae=(t,n={})=>{let u=d(a,t);const y=te(n.disabled);return x(a,t,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:t}},name:t,mount:!0,...n}}),A.mount.add(t),u?y&&x(c,t,n.disabled?void 0:d(c,t,Se(u._f))):re(t,!0,n.value),{...y?{disabled:n.disabled}:{},...s.progressive?{required:!!n.required,min:ue(n.min),max:ue(n.max),minLength:ue(n.minLength),maxLength:ue(n.maxLength),pattern:ue(n.pattern)}:{},name:t,onChange:ie,onBlur:ie,ref:f=>{if(f){Ae(t,n),u=d(a,t);const o=k(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Ft(o),F=u._f.refs||[];if(h?F.find(D=>D===o):o===u._f.ref)return;x(a,t,{_f:{...u._f,...h?{refs:[...F.filter(De),o,...Array.isArray(d(l,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),re(t,!1,void 0,o)}else u=d(a,t,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||n.shouldUnregister)&&!(dt(A.array,t)&&b.action)&&A.unMount.add(t)}}},Ue=()=>s.shouldFocusError&&me(a,t=>t&&d(r.errors,t),A.mount),Me=(t,n)=>async u=>{u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let y=K(c);if(_.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:o}=await B();r.errors=f,y=o}else await H(a);p(r.errors,"root"),U(r.errors)?(_.state.next({errors:{}}),await t(y,u)):(n&&await n({...r.errors},u),Ue(),setTimeout(Ue)),_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ut=(t,n={})=>{d(a,t)&&(k(n.defaultValue)?Q(t,d(l,t)):(Q(t,n.defaultValue),x(l,t,n.defaultValue)),n.keepTouched||p(r.touchedFields,t),n.keepDirty||(p(r.dirtyFields,t),r.isDirty=n.defaultValue?v(t,d(l,t)):v()),n.keepError||(p(r.errors,t),S.isValid&&g()),_.state.next({...r}))},Ne=(t,n={})=>{const u=t||l,y=K(u),f=t&&!U(t)?y:l;if(n.keepDefaultValues||(l=u),!n.keepValues){if(n.keepDirtyValues||$)for(const o of A.mount)d(r.dirtyFields,o)?x(f,o,d(c,o)):Q(o,d(f,o));else{if(Ee&&k(t))for(const o of A.mount){const h=d(a,o);if(h&&h._f){const F=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ce(F)){const D=F.closest("form");if(D){D.reset();break}}}}a={}}c=e.shouldUnregister?n.keepDefaultValues?K(l):{}:K(f),_.array.next({values:{...f}}),_.values.next({values:{...f}})}A={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!b.mount&&i(),b.mount=!S.isValid||!!n.keepIsValid,b.watch=!!e.shouldUnregister,_.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty?r.isDirty:!!(n.keepDefaultValues&&!X(t,l)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&t?ke(l,t):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Be=(t,n)=>Ne(G(t)?t(c):t,n);return{control:{register:Ae,unregister:Ve,getFieldState:Ce,handleSubmit:Me,setError:Re,_executeSchema:B,_getWatch:w,_getDirty:v,_updateValid:g,_removeUnmounted:V,_updateFieldArray:q,_getFieldArray:T,_reset:Ne,_resetDefaultValues:()=>G(s.defaultValues)&&s.defaultValues().then(t=>{Be(t,s.resetOptions),_.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_subjects:_,_proxyFormState:S,get _fields(){return a},get _formValues(){return c},get _state(){return b},set _state(t){b=t},get _defaultValues(){return l},get _names(){return A},set _names(t){A=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:ne,register:Ae,handleSubmit:Me,watch:nt,setValue:Q,getValues:Le,reset:Be,resetField:ut,clearErrors:it,unregister:Ve,setError:Re,setFocus:(t,n={})=>{const u=d(a,t),y=u&&u._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),n.shouldSelect&&f.select())}},getFieldState:Ce}}function Ct(e={}){const i=z.useRef(),s=z.useRef(),[r,a]=z.useState({isDirty:!1,isValidating:!1,isLoading:G(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:G(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Et(e,()=>a(c=>({...c}))),formState:r});const l=i.current.control;return l._options=e,vt({subject:l._subjects.state,next:c=>{gt(c,l._proxyFormState,l._updateFormState,!0)&&a({...l._formState})}}),z.useEffect(()=>{e.values&&!X(e.values,s.current)?(l._reset(e.values,l._options.resetOptions),s.current=e.values):l._resetDefaultValues()},[e.values,l]),z.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),i.current.formState=ht(r,l),i.current}export{Ct as u};
