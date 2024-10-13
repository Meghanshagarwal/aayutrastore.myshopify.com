var script_loaded = !1;

function loadJSscripts() {
    if (!script_loaded) {
        script_loaded = !0;
        var t = document.getElementsByTagName("script");
        for (i = 0; i < t.length; i++) null !== t[i].getAttribute("data-src") && (t[i].setAttribute("src", t[i].getAttribute("data-src")), delete t[i].dataset.src);
        var e = document.getElementsByTagName("link");
        for (i = 0; i < e.length; i++) null !== e[i].getAttribute("data-href") && (e[i].setAttribute("href", e[i].getAttribute("data-href")), delete e[i].dataset.href);
        document.dispatchEvent(new CustomEvent("StartKernelLoading")), setTimeout(function() {
            document.dispatchEvent(new CustomEvent("StartAsyncLoading"))
        }, 400)
    }
}
window.addEventListener("scroll", function(t) {
    loadJSscripts()
}), window.addEventListener("mousemove", function() {
    loadJSscripts()
}), window.addEventListener("touchstart", function() {
    loadJSscripts()
}), window.addEventListener ? window.addEventListener("load", function() {
    setTimeout(loadJSscripts, 4e3)
}, !1) : window.attachEvent ? window.attachEvent("onload", function() {
    setTimeout(loadJSscripts, 4e3)
}) : window.onload = loadJSscripts;