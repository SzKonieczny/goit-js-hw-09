!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.body,a=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));n.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.189be04c.js.map