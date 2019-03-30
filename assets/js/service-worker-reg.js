// This is the "Offline copy of pages" service worker generate from https://www.pwabuilder.com

if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
        console.log("[Kols PWA] active service worker found, no need to register");
    } else {
        // Register the service worker
        navigator.serviceWorker
            .register("pwabuilder-sw.js", {
                scope: "../../"
            })
            .then(function (reg) {
                console.log("[Kols PWA] Service worker has been registered for scope: " + reg.scope);
            });
    }
}