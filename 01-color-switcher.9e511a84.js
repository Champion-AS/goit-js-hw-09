const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");let o,a=t.disabled,c=e.disabled;c=!0,t.addEventListener("click",(function(){a=!0,c=!1,o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;n.style.background=t}),1e3)})),e.addEventListener("click",(function(){a=!1,c=!0,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.9e511a84.js.map
