import{o,c as i,b as e,t as a,u as x,g as _,a as m,h as t,F as u,d as v,f as p,w as b,s as w,i as f}from"./index.ebb6f5df.js";const k={class:"card"},$=["src","alt"],y={class:"card-body"},B={class:"card-text"},C={__name:"ExperienceCard",props:{experience:Object},setup(c){return(d,r)=>(o(),i("div",k,[e("img",{src:`/images/${c.experience.image}`,class:"card-img-top",alt:c.experience.name},null,8,$),e("div",y,[e("p",B,a(c.experience.name),1)])]))}},E={class:"row g-3 align-items-md-center"},D={class:"col-md-6"},V=["src","alt"],F={class:"col-md-6"},N={class:"text-muted"},S={class:"mt-4"},T={class:"row g-2 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4"},j={id:"experiences-modal",class:"modal fade","data-bs-backdrop":"static",tabindex:"-1"},I={class:"modal-dialog modal-lg modal-dialog-scrollable"},L={class:"modal-content"},O={class:"modal-header"},R={class:"modal-title"},q=e("button",{type:"button","data-bs-dismiss":"modal",class:"btn-close","aria-label":"Close"},null,-1),z={class:"modal-body"},H={__name:"DetailView",setup(c){const d=x(),r=_(()=>d.params.slug),s=_(()=>w.destinations.find(n=>n.slug===r.value));return(n,A)=>{const h=m("router-link"),g=m("router-view");return o(),i(u,null,[e("h1",null,a(t(s).name),1),e("div",E,[e("div",D,[e("img",{src:`/images/${t(s).image}`,class:"w-100 img-thumbnail",alt:t(s).name},null,8,V)]),e("div",F,[e("p",N,a(t(s).description),1)])]),e("section",S,[e("h2",null,"Top Experiences In "+a(t(s).name),1),e("div",T,[(o(!0),i(u,null,v(t(s).experiences,l=>(o(),p(h,{key:l.slug,class:"col text-decoration-none",to:{name:"experiences.detail",params:{slug:t(s).slug,experienceSlug:l.slug}}},{default:b(()=>[f(C,{experience:l},null,8,["experience"])]),_:2},1032,["to"]))),128))])]),e("div",j,[e("div",I,[e("div",L,[e("div",O,[e("h5",R,"Top "+a(t(s).name)+" Experiences",1),q]),e("div",z,[(o(),p(g,{key:n.$router.path}))])])])])],64)}}};export{H as default};