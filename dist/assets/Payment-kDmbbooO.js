import{_ as C,A as P,q as M,a as T,u as A,l as $,r as k,s as q,o,c as a,d as e,e as I,z as S,t as u,f as d,p as B,k as D}from"./index-XtAJ1EXg.js";const n=c=>(B("data-v-0fc857ce"),c=c(),D(),c),z={class:"customer-section"},O={class:"container"},R=n(()=>e("h3",{class:"text-capitalize fw-semibold fs-3"},"Select Your Payment Method",-1)),j={class:"method row flex-wrap mt-5"},V={class:"col-lg-6"},L={class:"row flex-wrap"},U={class:"col-6"},Y=n(()=>e("label",{for:"cash_on_delivery",class:"method-item",role:"button"},[e("i",{class:"bi bi-cash-coin"}),e("p",null,"Cash On Delivery")],-1)),E={class:"col-6"},N=n(()=>e("label",{for:"credit_card",class:"method-item",role:"button"},[e("i",{class:"bi bi-credit-card"}),e("p",null,"Stripe")],-1)),Q={class:"col-lg-6 col-md-6 col-12"},F={class:"method-item align-items-start"},G=n(()=>e("h3",{class:"text-start fw-semibold"},"Order Summary",-1)),H={class:"w-100 mb-4"},J={class:"d-flex align-items-center justify-content-between mb-3"},K={class:"fs-5"},W={class:"d-flex align-items-center justify-content-between mb-3"},X=n(()=>e("p",{class:"fs-5"},"Included Delivery Charge ",-1)),Z={key:0},ee={key:1},te={class:"d-flex align-items-center justify-content-between"},se=n(()=>e("p",{class:"fs-3"},"Total Amount",-1)),oe={key:0},ae={key:1,class:"fs-3 text-info"},de=["disabled"],ne=n(()=>e("div",{class:"spinner-border fs-3",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1)),re=[ne],ie={__name:"Payment",setup(c){const r=P(),h=M(),v=T(),p=A(),{loading:m,sendRequest:b}=$(),y=k(null),i=k({addressId:h.query.addressId,orders:r.getCartItems,paymentMethod:null,orderTotal:r.getCartTotalPrice}),x=async()=>{var t,l;const _=await p.getToken();if(!i.value.paymentMethod)$toast.error("Please Select Your Payment Method...");else{const s=await b({url:"/api/save-order",method:"POST",data:i.value,headers:{Authorization:`Bearer ${_}`}});if(r.clearCart(),s!=null&&s.data&&((t=s.data)==null?void 0:t.type)==="stripe_payment")window.open((l=s.data)==null?void 0:l.data);else return v.push({name:"ordercomplate"})}};return q(async()=>{const _=await p.getToken();if(h.query.addressId){const t=await b({method:"get",url:`/api/address/${h.query.addressId}`,headers:{Authorization:`Bearer ${_}`}});y.value=t==null?void 0:t.data}else v.push({name:"checkout",query:{invalidAddressId:!0}})}),(_,t)=>{var l,s,g,w;return o(),a("section",z,[e("div",O,[R,e("div",j,[e("div",V,[e("div",L,[e("div",U,[I(e("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=f=>i.value.paymentMethod=f),name:"payment",id:"cash_on_delivery",value:"cod",class:"method-radio"},null,512),[[S,i.value.paymentMethod]]),Y]),e("div",E,[I(e("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=f=>i.value.paymentMethod=f),name:"payment",id:"credit_card",value:"stripe",class:"method-radio"},null,512),[[S,i.value.paymentMethod]]),N])])]),e("div",Q,[e("div",F,[G,e("ul",H,[e("li",J,[e("p",K,"Subtotal ("+u(d(r).getCartLength)+" Items Total Of Qty And Prices)",1),e("p",null,"$ "+u(d(r).getCartTotalPrice),1)]),e("li",W,[X,d(m)?(o(),a("p",Z,"...")):(o(),a("p",ee,"$ "+u((s=(l=y.value)==null?void 0:l.order_area)==null?void 0:s.delivery_charge),1))]),e("li",te,[se,d(m)?(o(),a("p",oe,"...")):(o(),a("p",ae,"$ "+u(parseInt(d(r).getCartTotalPrice)+parseInt((w=(g=y.value)==null?void 0:g.order_area)==null?void 0:w.delivery_charge)),1))])]),d(m)?(o(),a("button",{key:0,class:"primary-button w-50",disabled:d(p).loading},re,8,de)):(o(),a("button",{key:1,onClick:x,class:"primary-button"},"Confirm Order"))])])])])])}}},ce=C(ie,[["__scopeId","data-v-0fc857ce"]]);export{ce as default};
