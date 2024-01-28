import{r as E,l as F,q as G,m as R,u as Q,o as i,c,d as s,j as q,t as o,B as r,F as J,s as K,G as U,y as A}from"./index-PvhvoPf6.js";const W={class:"customer-section overflow-hidden py-5"},X={class:"row"},Y={class:"col-md-9 mx-auto p-3",id:"areaOfPrient"},Z={class:"card invoice-preview-card shadow-none py-5"},ss={class:"card-body invoice-padding pb-0 mb-5"},ts={class:"d-flex align-items-center justify-content-between"},es={style:{"text-align":"left","max-width":"35%"}},os=s("div",{class:"logo-wrapper mb-5"},[s("img",{src:U,alt:"",height:"40"})],-1),as=s("h3",{class:"mt-1 fw-semibold fs-3 mb-3 text-capitalize"},"Invoice To: ",-1),ns={key:0,class:"card-text mb-0 pb-0"},is={key:1,class:"card-text mb-0 pb-0"},cs={key:2,class:"card-text mb-0 pb-0"},ds={key:3,class:"card-text mb-0 pb-0"},ls={style:{"text-align":"right"}},rs={class:"mt-md-0 mt-2"},_s=s("h4",{class:"invoice-title"},[q(" Invoice "),s("span",{class:"invoice-number"},"#5433")],-1),ps={class:"invoice-date-wrapper"},vs={class:"invoice-date-title"},hs=A('<div class="invoice-date-wrapper"><p class="invoice-date-title text-capitalize">Order Status: <span class="badge bg-info ms-1">Shipped</span></p></div><div class="invoice-date-wrapper"><p class="invoice-date-title text-capitalize">Payment Status: <span class="badge bg-info ms-1">Pending</span></p></div>',2),us=s("hr",{class:"invoice-spacing"},null,-1),bs={class:"table-responsive"},ys={class:"table"},fs=s("thead",null,[s("tr",null,[s("th",{class:"py-1",width:"40%"},"Product Name"),s("th",{class:"py-1"},"Price"),s("th",{class:"py-1"},"size & Qty"),s("th",{class:"py-1"},"Total")])],-1),ms={class:"py-1"},gs={href:"#",class:"text-info text-capitalize"},ws={class:"py-1"},xs={class:"fw-bold"},ks={class:"py-1"},Ts={class:"fw-bold"},$s={class:"py-1"},Ps={class:"fw-bold"},js=s("hr",null,null,-1),Ss={class:"card-body invoice-padding pb-0"},zs={class:"row invoice-sales-total-wrapper"},Bs=s("div",{class:"col-md-8 order-md-1 order-2 mt-md-0 mt-3"},null,-1),Is={class:"col-md-4 d-flex justify-content-end order-md-2 order-1"},Ns={class:"invoice-total-wrapper w-100"},Cs={class:"invoice-total-item d-flex justify-content-between"},Hs=s("p",{class:"invoice-total-title"},"Subtotal:",-1),Ls={class:"invoice-total-amount"},Ms={class:"invoice-total-item d-flex justify-content-between"},qs=s("p",{class:"invoice-total-title"},"Delivery Charge:",-1),As={class:"invoice-total-amount"},Os=s("hr",{class:"my-50"},null,-1),Vs={class:"invoice-total-item d-flex justify-content-between"},Ds=s("p",{class:"invoice-total-title text-black fw-bolder"},"Grand Total:",-1),Es={class:"invoice-total-amount text-black fw-bolder"},Fs=A('<hr class="invoice-spacing"><div class="card-body invoice-padding pt-0"><div class="d-flex align-items-center justify-content-between"><div class="d-flex align-items-center"><span class="fw-bold me-1">Have a great day ! </span><span>Thank you for shopping <a href="/"> www.comfortwings.com</a></span></div></div></div>',2),Ks={__name:"Invoice",setup(Gs){const e=E(null),{sendRequest:O,loading:Rs,error:Qs}=F(),V=d=>{var n=document.getElementById(d).innerHTML,a=document.body.innerHTML;document.body.innerHTML=n,window.print(),document.body.innerHTML=a};return G(async()=>{var l;const d=R(),{user:n}=Q(),a=await O({method:"get",url:`/api/order-details/${(l=d==null?void 0:d.params)==null?void 0:l.id}`,headers:{Authorization:`Bearer ${n==null?void 0:n.token}`}});e.value=a==null?void 0:a.data,console.log(a)}),(d,n)=>{var a,l,_,p,v,h,u,b,y,f,m,g,w,x,k,T,$,P,j,S,z,B,I;return i(),c("section",W,[s("button",{class:"btn bg-info text-white",onClick:n[0]||(n[0]=t=>V("areaOfPrient"))},"Print Invoice"),s("div",X,[s("div",Y,[s("div",Z,[s("div",ss,[s("div",ts,[s("div",es,[s("div",null,[os,as,(l=(a=e.value)==null?void 0:a.customer)!=null&&l.full_name?(i(),c("p",ns,[q("Name: "),s("strong",null,o((p=(_=e.value)==null?void 0:_.customer)==null?void 0:p.full_name),1)])):r("",!0),(h=(v=e.value)==null?void 0:v.address)!=null&&h.phone?(i(),c("p",is,"Phone: "+o((b=(u=e.value)==null?void 0:u.address)==null?void 0:b.phone),1)):r("",!0),(f=(y=e.value)==null?void 0:y.address)!=null&&f.email?(i(),c("p",cs,"Email: "+o((g=(m=e.value)==null?void 0:m.address)==null?void 0:g.email),1)):r("",!0),(x=(w=e.value)==null?void 0:w.address)!=null&&x.address?(i(),c("p",ds,"Address: "+o((T=(k=e.value)==null?void 0:k.address)==null?void 0:T.address),1)):r("",!0)])]),s("div",ls,[s("div",rs,[_s,s("div",ps,[s("p",vs,"Order Date: "+o(($=e.value)==null?void 0:$.order_date),1)]),hs])])])]),us,s("div",bs,[s("table",ys,[fs,s("tbody",null,[(i(!0),c(J,null,K((P=e.value)==null?void 0:P.orderdetails,(t,D)=>{var N,C,H,L,M;return i(),c("tr",{key:`single-details-item-${D}`},[s("td",ms,[s("a",gs,o((N=t==null?void 0:t.product)==null?void 0:N.title)+"- "+o((H=(C=t==null?void 0:t.stoke)==null?void 0:C.varient)==null?void 0:H.replace(/\//g,"-").slice(0,-1)),1)]),s("td",ws,[s("span",xs,o((L=t==null?void 0:t.stoke)==null?void 0:L.price)+" $",1)]),s("td",ks,[s("span",Ts,o(t==null?void 0:t.quantity),1)]),s("td",$s,[s("span",Ps,o(((M=t==null?void 0:t.stoke)==null?void 0:M.price)*(t==null?void 0:t.quantity))+" $ ",1)])])}),128))])])]),js,s("div",Ss,[s("div",zs,[Bs,s("div",Is,[s("div",Ns,[s("div",Cs,[Hs,s("p",Ls,o((j=e.value)==null?void 0:j.sub_total)+" $",1)]),s("div",Ms,[qs,s("p",As," + "+o((B=(z=(S=e.value)==null?void 0:S.address)==null?void 0:z.order_area)==null?void 0:B.delivery_charge)+" $",1)]),Os,s("div",Vs,[Ds,s("p",Es,o((I=e.value)==null?void 0:I.grand_total)+" $",1)])])])])]),Fs])])])])}}};export{Ks as default};
