self.addEventListener("install", (ev) => {
    console.log(`[SW]: Installed`);
});

self.addEventListener("activate", (ev) => {
    console.log(`[SW]: Activated`);
});

self.addEventListener("fetch", (ev) => {
    console.log(`[SW]: Fetching`);
});