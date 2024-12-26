(()=>{"use strict";function e(e){c(e.target)}function t(){document.querySelector(".popup_is-opened").addEventListener("click",e)}function n(){document.querySelector(".popup_is-opened").removeEventListener("click",e)}function r(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function o(o){o.classList.add("popup_is-opened");var c=o.querySelector(".popup__content");document.addEventListener("keydown",r),o.addEventListener("click",e),c.addEventListener("mouseleave",t),c.addEventListener("mouseenter",n)}function c(o){o.classList.remove("popup_is-opened");var c=o.querySelector(".popup__content");o.removeEventListener("click",e),c.removeEventListener("mouseleave",t),c.removeEventListener("mouseenter",n),document.removeEventListener("keydown",r)}var a=document.querySelector("#card-template").content;function u(e,t){var n=a.querySelector(".places__item").cloneNode(!0);n.setAttribute("id",e._id),n.querySelector(".card__title").textContent=e.name;var r=n.querySelector(".card__image"),o=n.querySelector(".card__delete-button"),c=n.querySelector(".card__like-button"),u=n.querySelector(".card__like-amount");return e.owner._id!==t&&o.remove(),r.setAttribute("src",e.link),r.setAttribute("alt",e.name),e.likes.some((function(e){return e._id===t}))&&c.classList.add("card__like-button_is-active"),u.textContent=e.likes.length,n}function i(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n):t.classList.add(n)}var s={baseUrl:"https://nomoreparties.co/v1/apf-cohort-202",headers:{authorization:"80877a10-c5fa-4f46-a62a-b3eb68e35d30","Content-Type":"application/json"}};function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var p,d,_=document.querySelector(".profile__title"),f=document.querySelector(".profile__description"),m=document.querySelector(".profile__image"),v=document.querySelector(".profile__edit-button"),y=document.querySelector(".popup_type_edit"),h=y.querySelector(".popup__form"),b=y.querySelector(".popup__input_type_name"),S=y.querySelector(".popup__input_type_description"),q=y.querySelector(".popup__close"),L=y.querySelector(".popup__button"),k=document.querySelector(".popup_type_avatar"),g=k.querySelector(".popup__form"),E=k.querySelector(".popup__input_type_avatar"),C=k.querySelector(".popup__button"),j=k.querySelector(".popup__close"),A=document.querySelector(".popup_type_image"),x=A.querySelector(".popup__image"),P=A.querySelector(".popup__caption"),U=A.querySelector(".popup__close"),I=document.querySelector(".places__list"),T=document.querySelector(".profile__add-button"),w=document.querySelector(".popup_type_new-card"),O=w.querySelector(".popup__form"),D=w.querySelector(".popup__input_type_card-name"),N=w.querySelector(".popup__input_type_url"),J=w.querySelector(".popup__close"),G=w.querySelector(".popup__button");function H(e,t,n,r){n.textContent="Сохранение...",e.then(r).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){c(t),n.textContent="Сохранить"}))}Promise.all([fetch("".concat(s.baseUrl,"/users/me"),{method:"GET",headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})),fetch("".concat(s.baseUrl,"/cards"),{method:"GET",headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];_.textContent=o.name,f.textContent=o.about,m.style.backgroundImage="url(".concat(o.avatar,")"),p=o._id,c.forEach((function(e){return I.append(u(e,p))}))})).catch((function(e){return console.log("Ошибка: ".concat(e))})),y.classList.add("popup_is-animated"),w.classList.add("popup_is-animated"),A.classList.add("popup_is-animated"),d={formClass:".popup__form",inputClass:".popup__input",inputErrorClass:"popup__input_error",buttonClass:".popup__button",buttonInactiveClass:"popup__button_inactive",errorClass:"popup__error-text_active"},Array.from(document.querySelectorAll(d.formClass)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputClass)),r=e.querySelector(t.buttonClass);i(n,r,t.buttonInactiveClass),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n,r){t.validity.valid?function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));o.textContent="",t.classList.remove(n),o.classList.remove(r)}(e,t,n,r):function(e,t,n,r,o){var c=e.querySelector(".".concat(t.id,"-error"));c.textContent=n,t.classList.add(r),c.classList.add(o)}(e,t,t.validationMessage,n,r)}(e,o,t.inputErrorClass,t.errorClass),i(n,r,t.buttonInactiveClass)}))})),e.addEventListener("submit",(function(){r.classList.add(t.buttonInactiveClass)}))}(e,d)})),v.addEventListener("click",(function(){b.value=_.textContent,S.value=f.textContent,o(y)})),h.addEventListener("submit",(function(e){var t,n;e.preventDefault(),H((t=b.value,n=S.value,fetch("".concat(s.baseUrl,"/users/me"),{method:"PATCH",headers:s.headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))),y,L,(function(e){_.textContent=e.name,f.textContent=e.about}))})),q.addEventListener("click",(function(){return c(y)})),m.addEventListener("click",(function(){E.value=m.style.backgroundImage.slice(5,-2),o(k)})),g.addEventListener("submit",(function(e){var t;e.preventDefault(),H((t=E.value,fetch("".concat(s.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))),k,C,(function(e){m.style.backgroundImage="url(".concat(e.avatar,")")}))})),j.addEventListener("click",(function(){return c(k)})),T.addEventListener("click",(function(){D.value="",N.value="",o(w)})),O.addEventListener("submit",(function(e){var t,n;e.preventDefault(),H((t=D.value,n=N.value,fetch("".concat(s.baseUrl,"/cards"),{method:"POST",headers:s.headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))),w,G,(function(e){return I.prepend(u(e,p))}))})),J.addEventListener("click",(function(){return c(w)})),U.addEventListener("click",(function(){return c(A)})),I.addEventListener("click",(function(e){if(e.target.classList.contains("card__image"))x.setAttribute("src",""),x.setAttribute("src",e.target.src),P.textContent=e.target.alt,o(A);else if(e.target.classList.contains("card__like-button")){e.target.classList.toggle("card__like-button_is-active");var t,n=e.target.closest(".places__item"),r=n.querySelector(".card__like-amount");e.target.classList.contains("card__like-button_is-active")?(a=n.id,t=fetch("".concat(s.baseUrl,"/cards/likes/").concat(a),{method:"PUT",headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))):t=function(e){return fetch("".concat(s.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(n.id),t.then((function(e){return r.textContent=e.likes.length})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}else if(e.target.classList.contains("card__delete-button")){var c=e.target.closest(".places__item");(function(e){return fetch("".concat(s.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:s.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))})(c.id).then((function(e){return c.remove()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}var a}))})();