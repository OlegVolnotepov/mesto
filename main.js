(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o){var i=this,u=e.data,c=e.handleCardClick,a=e.handeDeleteCardIcon,l=e.handleSetLike,s=e.handleUnSetLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_like",(function(){i._elementLike.classList.toggle("elements__like_active")})),t(this,"removeCard",(function(){i._element.remove(),i._element=null})),t(this,"renderCard",(function(){i._element=i._selector.cloneNode(!0);var e=i._element.querySelector(".elements__img");return i._elementLike=i._element.querySelector(".elements__like"),i._elementLikeCounter=i._element.querySelector(".elements__like-counter"),i._element.querySelector(".elements__title").textContent=i._title,i._likesNumber=i._element.querySelector(".elements__like-counter"),i._likesNumber.textContent=i._likeCouter,e.src=i._link,e.alt=i._title,i._checkOwnerCard(i._id,i._element),i._checkIsliked(i._isLiked),i._setEventListeners(),i._element})),this._title=u.name,this._link=u.link,this._likeCouter=u.likes.length,this._handleCardClick=c,this._handeDeleteCardIcon=a,this._handleSetLike=l,this._handleUnSetLike=s,this._selector=r,this._id=u.id,this._myId=o,this._cardId=u.cardId,this._isLiked=u.likes,this._likeButton=this._selector.querySelector(".elements__like")}var r,o;return r=n,(o=[{key:"handleLikeCard",value:function(e){this._likes=e.likes,this._elementLike.classList.toggle("elements__like_active"),this._elementLike.classList.contains("elements__like_active")?this._elementLikeCounter.textContent=this._likes.length+1:this._elementLikeCounter.textContent=this._elementLikeCounter.textContent-1}},{key:"_checkIsliked",value:function(e){var t=this;e.length>0&&e.map((function(e){e._id===t._myId&&t._elementLike.classList.add("elements__like_active")}))}},{key:"likeCount",value:function(){this._element.querySelector(".elements__like-counter").textContent=this._likeCouter+1}},{key:"likeUnCount",value:function(){this._element.querySelector(".elements__like-counter").textContent=this._likeCouter-1}},{key:"_checkOwnerCard",value:function(e,t){e!=this._myId&&null!=e&&(t.querySelector(".elements__trash").style.visibility="hidden")}},{key:"_setEventListeners",value:function(){var e=this;this._elementLike.addEventListener("click",(function(){e._elementLike.classList.contains("elements__like_active")?e._handleUnSetLike(e._cardId):e._handleSetLike(e._cardId)})),this._element.querySelector(".elements__img").addEventListener("click",(function(){e._handleCardClick(e._title,e._link)})),this._element.querySelector(".elements__trash").addEventListener("click",(function(){e._handeDeleteCardIcon(e._cardId)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=o((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_checkInputValidity",(function(e){e.validity.valid?r._unsetFieldError(e):r._setFieldError(e)})),i(this,"resetValidation",(function(){r._setSubmitButtonState(),r._inputList.forEach((function(e){r._unsetFieldError(e)}))})),i(this,"_setFieldError",(function(e){document.querySelector(".".concat(e.getAttribute("id"),"-error")).textContent=e.validationMessage,e.classList.add(r._config.inputErrorClass)})),i(this,"_unsetFieldError",(function(e){document.querySelector(".".concat(e.getAttribute("id"),"-error")).textContent="",e.classList.remove(r._config.inputErrorClass)})),i(this,"_setSubmitButtonState",(function(){r._form.checkValidity()?(r._submitButton.classList.remove(r._config.submitDisable),r._submitButton.removeAttribute("disabled","disabled")):(r._submitButton.classList.add(r._config.submitDisable),r._submitButton.setAttribute("disabled","disabled"))})),i(this,"enableValidation",(function(){r._setSubmitButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._setSubmitButtonState()}))}))})),this._config=t,this._form=n,this._inputList=this._form.querySelectorAll(t.inputSelector),this._submitButton=this._form.querySelector(this._config.submitButton)}));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=a((function e(t,n){var r=this,o=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"addItem",(function(e){r._containerSelector.prepend(e)})),l(this,"renderItems",(function(){r._initialItems.forEach((function(e){return r._renderer(e)}))})),this._initialItems=o,this._renderer=i,this._containerSelector=n}));function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._escapeClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._escapeClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._escapeClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImg=t._popup.querySelector(".popup-img__img"),t._popupImgTitle=t._popup.querySelector(".popup-img__title"),t}return t=u,(n=[{key:"open",value:function(e){this._popupImg.src=e.link,this._popupImgTitle.textContent=e.name,this._popupImg.alt=e.name,_(v(u.prototype),"open",this).call(this)}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function O(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e,t){var n,r=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,r))._handleFormSubmit=o,n._popupForm=n._popup.querySelector(t),n._submitButton=n._popup.querySelector(".popup__button"),n._submitButtonText=n._submitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupForm.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){this._popupForm.reset(),w(L(u.prototype),"close",this).call(this)}},{key:"open",value:function(){w(L(u.prototype),"open",this).call(this)}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonText}},{key:"setEventListeners",value:function(){var e=this;w(L(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(t),this._aboutElement=document.querySelector(n),this._avatarElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._nameElement.textContent,about:this._aboutElement.textContent},this._userInfo}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._aboutElement.textContent=e.about,this._avatarElement.src=e.avatar}},{key:"setAvatar",value:function(e){this._avatarElement.src=e.avatar}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_Response",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getAllCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._Response(t)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then((function(e){return t._Response(e)}))}},{key:"getUser",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._Response(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._Response(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._Response(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._Response(e)}))}},{key:"unSetLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._Response(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then((function(e){return t._Response(e)}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=F(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function F(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function D(e,t){return D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},D(e,t)}function V(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t){var n,r=e.popupSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,r))._handleFormSubmit=o,n._popupForm=n._popup.querySelector(t),n}return t=u,(n=[{key:"close",value:function(){x(U(u.prototype),"close",this).call(this)}},{key:"open",value:function(){x(U(u.prototype),"open",this).call(this)}},{key:"submitCallback",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;x(U(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p),N={formSelector:".popup__form",inputSelector:".popup__input",submitButton:".popup__button",submitDisable:"popup__button_disabled",inputErrorClass:"popup__input_error"},J=document.querySelector(".popup__form"),H=document.querySelector(".popup__form-card"),z=document.querySelector(".popup-avatar__form"),M=document.querySelector(".profile__edit"),G=document.getElementById("name"),K=document.getElementById("about"),Q=document.querySelector("#elements__card").content,W=document.querySelector(".elements"),X=document.querySelector(".profile__add-button"),Y=document.querySelector(".profile__avatar-button"),Z=Q.querySelector(".elements__card"),$=new u(N,J),ee=new u(N,H),te=new u(N,z),ne=new k(".popup-img");ne.setEventListeners(),ee.enableValidation(),$.enableValidation(),te.enableValidation();var re=new q({url:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"62838c5f-4a61-4c03-9d7e-35ad7fdce1d3","Content-Type":"application/json"}}),oe=re.getAllCards(),ie=[],ue=re.getUser();oe.then((function(e){e.map((function(e){return ie.push({name:e.name,link:e.link,likes:e.likes,id:e.owner._id,cardId:e._id})}));var t=new s({items:ie.reverse(),renderer:function(e){t.addItem(ce(e))}},W);t.renderItems()})).catch((function(e){return console.log(e)})),ue.then((function(e){fe.setUserInfo(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var ce=function(e){var t=new n({data:e,handleCardClick:function(){ne.open(e)},handeDeleteCardIcon:function(e){he.open(),he.submitCallback((function(){re.deleteCard(e).then((function(){he.close(),t.removeCard()})).catch((function(e){return console.log(e)}))}))},handleSetLike:function(n){re.setLike(n).then((function(n){t.handleLikeCard(e)})).catch((function(e){return console.log(e)}))},handleUnSetLike:function(n){re.unSetLike(n).then((function(n){t.handleLikeCard(e)})).catch((function(e){return console.log(e)}))}},Z,"fc356f4405f733098454fe93");return t.renderCard()},ae=new s({items:ie,renderer:function(e){ae.addItem(ce(e))}},W),le=new j({popupSelector:".popup-card",handleFormSubmit:function(e){le.loading(!0),re.addNewCard(e).then((function(e){ae.addItem(ce(e))})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){le.loading(!1)})),le.close()}},".popup__form-card");le.setEventListeners();var se=new j({popupSelector:".popup-avatar",handleFormSubmit:function(e){le.loading(!0),re.updateAvatar(e).then((function(e){fe.setAvatar(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){se.loading(!1)})),se.close()}},".popup-avatar__form");se.setEventListeners(),X.addEventListener("click",(function(){le.open(),ee.resetValidation()})),Y.addEventListener("click",(function(){se.open(),ee.resetValidation()}));var fe=new I(".profile__name",".profile__about",".profile__avatar"),pe=new j({popupSelector:".profile-popup",handleFormSubmit:function(e){re.setUserInfo(e),fe.setUserInfo(e),pe.close()}},".profile-form");M.addEventListener("click",(function(){var e=fe.getUserInfo();G.value=e.name,K.value=e.about,$.resetValidation(),pe.open()})),pe.setEventListeners();var he=new A({popupSelector:".popup-remove-card",handleFormSubmit:function(){re.deleteCard()}},".popup-remove-card__form");he.setEventListeners()})();