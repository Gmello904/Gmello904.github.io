// Website chat bubble. Usage: <script src="https://YOUR-SITE/widget.js" data-agent="AGENT_ID"></script>
(function () {
  var s = document.currentScript, id = s.getAttribute("data-agent"), origin = new URL(s.src).origin;
  var b = document.createElement("button"), f = document.createElement("iframe");
  b.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'; b.setAttribute("aria-label", "Chat with us");
  b.style.cssText = "position:fixed;right:20px;bottom:20px;width:58px;height:58px;border-radius:50%;border:0;background:#0b86b8;color:#fff;font-size:26px;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.25);z-index:99999";
  f.src = origin + "/chat/" + id;
  f.style.cssText = "position:fixed;right:20px;bottom:90px;width:360px;max-width:calc(100vw - 40px);height:520px;max-height:calc(100vh - 110px);border:0;border-radius:16px;box-shadow:0 10px 40px rgba(0,0,0,.3);display:none;z-index:99999;background:#fff";
  b.onclick = function () { f.style.display = f.style.display === "none" ? "block" : "none"; };
  document.body.appendChild(f); document.body.appendChild(b);
})();
