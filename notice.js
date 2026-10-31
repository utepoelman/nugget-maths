/* © Ute Poelman. All rights reserved. Terms of use: https://nugget-maths.co.nz/#terms */
(function(){
  if(document.getElementById("nm-notice"))return;
  var a=document.createElement("a");
  a.id="nm-notice";a.href="https://nugget-maths.co.nz/#terms";a.target="_blank";a.rel="noopener";
  a.textContent="© Ute Poelman · Terms of use";
  a.style.cssText="position:fixed;right:6px;bottom:4px;z-index:2147483647;font:11px/1.2 system-ui,sans-serif;color:#444;background:rgba(255,255,255,.8);padding:2px 6px;border-radius:6px;text-decoration:none";
  document.body.appendChild(a);
})();
