import"./assets/modulepreload-polyfill-ec808ebb.js";const o="user-data",t=document.querySelector(".feedback-form");t.querySelector("textarea");t.addEventListener("input",function(e){const a={email:t.email.value.trim(),message:t.message.value.trim()};n(o,a)});t.addEventListener("submit",e=>{e.preventDefault();const a=s(o)||{};console.log(a),localStorage.removeItem(o),t.reset()});function s(e="empty"){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return{}}}function n(e,a){const r=JSON.stringify(a);localStorage.setItem(e,r)}function c(){const e=s(o)||{};t.email.value=e.email||"",t.message.value=e.message||""}c();
//# sourceMappingURL=commonHelpers2.js.map