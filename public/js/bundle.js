!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";n(1);var r=n(2),i=function(e){return e&&e.__esModule?e:{default:e}}(r);new i.default("wordpress-reading-progress-end")},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){if(r(this,e),this.element=document.getElementById(t),null===this.element||void 0===this.element)return!1;this.screenHeight=this.getScreenHeight(),this.elementOffset=this.getElementOffset(),this.scrollPosition=this.getScrollPosition(),this.scrollbarElement=null,this.scrollbarElementID="wordpress-reading-progress-bar",this.appendScrollbarElement(document.getElementsByTagName("body")[0]),this.checkReadingProgress(),window.addEventListener("resize",this.checkReadingProgress.bind(this)),window.addEventListener("scroll",this.checkReadingProgress.bind(this))}return i(e,[{key:"getElementOffset",value:function(){return this.element.getBoundingClientRect().bottom}},{key:"getScreenHeight",value:function(){return Math.max(document.documentElement.clientHeight,window.innerHeight)}},{key:"getScrollPosition",value:function(){return document.documentElement.scrollTop}},{key:"appendScrollbarElement",value:function(e){this.scrollbarElement=document.createElement("div"),this.scrollbarElement.setAttribute("id",this.scrollbarElementID),this.scrollbarElement.classList.add("position-"+postReadingProgress.position),e.appendChild(this.scrollbarElement),this.scrollbarElement.appendChild(document.createElement("div"))}},{key:"checkReadingProgress",value:function(){this.elementOffset=this.getElementOffset(),this.screenHeight=this.getScreenHeight(),this.scrollPosition=this.getScrollPosition();var e=this.elementOffset-this.screenHeight,t=this.scrollPosition+e,n=Math.abs(100*e/t-100);n>100?(n=100,"1"==postReadingProgress.autohide&&this.scrollbarElement.classList.add(postReadingProgress.autohideAnimation)):"1"==postReadingProgress.autohide&&this.scrollbarElement.classList.remove(postReadingProgress.autohideAnimation),"top"==postReadingProgress.position||"bottom"==postReadingProgress.position?document.querySelector("#"+this.scrollbarElementID+" > div").style.width=n+"%":document.querySelector("#"+this.scrollbarElementID+" > div").style.height=n+"%"}}]),e}();t.default=s}]);