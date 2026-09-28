const ICONS = {
    youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="23px" height="16px" viewBox="0 0 23 16" version="1.1"><defs><clipPath id="clip1"><path d="M 0.171875 0 L 22.832031 0 L 22.832031 16 L 0.171875 16 Z M 0.171875 0 "/></clipPath></defs><g id="surface1"><g clip-path="url(#clip1)" clip-rule="nonzero"><path style="stroke:none;fill-rule:nonzero;fill:rgb(100%,0%,0%);fill-opacity:1;" d="M 22.355469 2.5 C 22.09375 1.515625 21.328125 0.742188 20.351562 0.476562 C 18.585938 0 11.5 0 11.5 0 C 11.5 0 4.414062 0 2.648438 0.476562 C 1.671875 0.742188 0.90625 1.515625 0.644531 2.5 C 0.171875 4.28125 0.171875 8 0.171875 8 C 0.171875 8 0.171875 11.71875 0.644531 13.5 C 0.90625 14.484375 1.671875 15.257812 2.648438 15.523438 C 4.414062 16 11.5 16 11.5 16 C 11.5 16 18.585938 16 20.351562 15.523438 C 21.328125 15.257812 22.09375 14.484375 22.355469 13.5 C 22.828125 11.71875 22.828125 8 22.828125 8 C 22.828125 8 22.828125 4.28125 22.355469 2.5 Z M 22.355469 2.5 "/></g><path style="stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 9.230469 11.429688 L 15.117188 8 L 9.230469 4.570312 Z M 9.230469 11.429688 "/></g></svg>`,
    claude: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fill-rule="nonzero"></path></svg>`,
    google: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 12.245c0-.905-.075-1.565-.236-2.25h-10.54v4.083h6.186c-.124 1.014-.797 2.542-2.294 3.569l-.021.136 3.332 2.53.23.022C21.779 18.417 23 15.593 23 12.245z" fill="#4285F4"></path><path d="M12.225 23c3.03 0 5.574-.978 7.433-2.665l-3.542-2.688c-.948.648-2.22 1.1-3.891 1.1a6.745 6.745 0 01-6.386-4.572l-.132.011-3.465 2.628-.045.124C4.043 20.531 7.835 23 12.225 23z" fill="#34A853"></path><path d="M5.84 14.175A6.65 6.65 0 015.463 12c0-.758.138-1.491.361-2.175l-.006-.147-3.508-2.67-.115.054A10.831 10.831 0 001 12c0 1.772.436 3.447 1.197 4.938l3.642-2.763z" fill="#FBBC05"></path><path d="M12.225 5.253c2.108 0 3.529.892 4.34 1.638l3.167-3.031C17.787 2.088 15.255 1 12.225 1 7.834 1 4.043 3.469 2.197 7.062l3.63 2.763a6.77 6.77 0 016.398-4.572z" fill="#EB4335"></path></svg>`,
    chatgpt: `<svg fill="currentColor" fill-rule="evenodd" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z"></path></svg>`,
    gemini: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="#3186FF"></path><path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-0-_R_0_)"></path><path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-1-_R_0_)"></path><path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" fill="url(#lobe-icons-gemini-2-_R_0_)"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-0-_R_0_" x1="7" x2="11" y1="15.5" y2="12"><stop stop-color="#08B962"></stop><stop offset="1" stop-color="#08B962" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-1-_R_0_" x1="8" x2="11.5" y1="5.5" y2="11"><stop stop-color="#F94543"></stop><stop offset="1" stop-color="#F94543" stop-opacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="lobe-icons-gemini-2-_R_0_" x1="3.5" x2="17.5" y1="13.5" y2="12"><stop stop-color="#FABC12"></stop><stop offset=".46" stop-color="#FABC12" stop-opacity="0"></stop></linearGradient></defs></svg>`,
    powerschool: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M184.5 0c-5.9 0-10.6 4.7-10.6 10.4v480.7h-33.8V10.5c0-5.8-4.7-10.4-10.6-10.4H74.6C68.8 0 64 4.7 64 10.5v491.1c0 5.8 4.8 10.4 10.6 10.4 5.9 0 10.6-4.7 10.6-10.4V20.9h33.6v480.7c0 5.8 4.8 10.4 10.6 10.4h55c5.9 0 10.6-4.7 10.6-10.4V20.9h40.5c112.6 0 191.2 67.5 191.2 164.1 0 93-73.7 158.9-180.6 163v-31.4c82.7-4.3 141.6-58.4 141.6-132 0-77.8-62.6-132.2-152.2-132.2-2.8 0-5.5 1.1-7.5 3.1s-3.1 4.6-3.1 7.4l.1 54.5c0 5.8 4.8 10.4 10.6 10.4 33.6 0 67.6 17.6 67.6 56.8 0 33.4-27.8 56.8-67.6 56.8-5.9 0-10.6 4.7-10.6 10.4 0 5.8 4.8 10.4 10.6 10.4 51.4 0 88.8-32.7 88.8-77.7 0-42.6-31.6-73.2-78.2-77.2V73.5c71.4 4 120.3 48.5 120.3 111 0 65.5-53.8 111.3-130.9 111.3-5.9 0-10.6 4.7-10.6 10.4v52.2c0 5.8 4.8 10.4 10.6 10.4C358.7 369.1 448 291.7 448 185 448 76.1 360.6 0 235.6 0z" style="fill:#00aade"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M34.9 448h81.5V250.2L0 163v250.2C0 432.5 15.7 448 34.9 448" style="fill:#4285f4"/><path d="M395.6 448h81.5c19.3 0 34.9-15.7 34.9-34.9V163l-116.4 87.3" style="fill:#34a853"/><path d="M395.6 99v151.3L512 163v-46.5c0-43.2-49.3-67.8-83.8-41.9" style="fill:#fbbc04"/><path d="M116.4 250.2V99L256 203.7 395.6 99v151.3L256 355" style="fill:#ea4335"/><path d="M0 116.4V163l116.4 87.3V99L83.8 74.5C49.2 48.6 0 73.2 0 116.4" style="fill:#c5221f"/></svg>`,
    github: `<svg fill="currentColor" fill-rule="evenodd" height="1em" style="flex:none;line-height:1" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Github</title><path d="M12 0c6.63 0 12 5.276 12 11.79-.001 5.067-3.29 9.567-8.175 11.187-.6.118-.825-.25-.825-.56 0-.398.015-1.665.015-3.242 0-1.105-.375-1.813-.81-2.181 2.67-.295 5.475-1.297 5.475-5.822 0-1.297-.465-2.344-1.23-3.169.12-.295.54-1.503-.12-3.125 0 0-1.005-.324-3.3 1.209a11.32 11.32 0 00-3-.398c-1.02 0-2.04.133-3 .398-2.295-1.518-3.3-1.209-3.3-1.209-.66 1.622-.24 2.83-.12 3.125-.765.825-1.23 1.887-1.23 3.169 0 4.51 2.79 5.527 5.46 5.822-.345.294-.66.81-.765 1.577-.69.31-2.415.81-3.495-.973-.225-.354-.9-1.223-1.845-1.209-1.005.015-.405.56.015.781.51.28 1.095 1.327 1.23 1.666.24.663 1.02 1.93 4.035 1.385 0 .988.015 1.916.015 2.196 0 .31-.225.664-.825.56C3.303 21.374-.003 16.867 0 11.791 0 5.276 5.37 0 12 0z"></path></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    home: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    game: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 8.5 18.5 8.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
    heart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    folder: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>`
};

const DEFAULT_BOOKMARKS = [{
        name: "YouTube",
        url: "https://www.youtube.com/",
        icon: "youtube",
        color: "var(--color-love)"
    },
    {
        name: "Google",
        url: "https://www.google.com/",
        icon: "google",
        color: "var(--color-rose)"
    },
    {
        name: "Mail",
        url: "https://mail.google.com/",
        icon: "mail",
        color: "var(--color-iris)"
    }
];

const $ = id => document.getElementById(id);
const STORAGE_KEY = "apothem-startpage-state", WX_KEY = "apothem-startpage-weather";
const SETTING_KEYS = ["name", "theme", "animation", "starDensity", "starSpeed", "bgDim", "city", "lat", "lon", "units", "clock"];
let appState = { name: "User", theme: "dark", animation: "enabled", starDensity: "high", starSpeed: "normal", bgDim: 0, hasBackground: false, city: "", lat: null, lon: null, units: "F", clock: "24", bookmarks: null };
let legacyBg = null, bgURL = null, uid = 0, tickTimer, toastTimer;

const SUN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
const MOON = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
const WMO = { 0: "clear", 1: "mostly clear", 2: "partly cloudy", 3: "overcast", 45: "foggy", 48: "foggy", 51: "light drizzle", 53: "drizzle", 55: "heavy drizzle", 61: "light rain", 63: "rain", 65: "heavy rain", 71: "light snow", 73: "snow", 75: "heavy snow", 80: "rain showers", 81: "rain showers", 82: "heavy showers", 95: "thunderstorms", 96: "thunderstorms", 99: "thunderstorms" };

const SPEEDS = { slow: 1.5, normal: 4, fast: 9 };

/* ---------- helpers ---------- */
const escapeHtml = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
const okColor = c => /^var\(--[\w-]+\)$/.test(c) ? c : "var(--text-main)";
const hostOf = u => { try { return new URL(u).hostname; } catch { return ""; } };
function normalizeUrl(v) {
    v = String(v).trim();
    if (!v) return null;
    if (!/^https?:\/\//i.test(v)) v = "https://" + v;
    try { const u = new URL(v); return u.hostname.includes(".") || u.hostname === "localhost" ? u.href : null; } catch { return null; }
}
const idb = (mode, fn) => new Promise((res, rej) => {
    const r = indexedDB.open("apothem-startpage", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("kv");
    r.onsuccess = () => {
        const t = r.result.transaction("kv", mode), q = fn(t.objectStore("kv"));
        t.oncomplete = () => res(q && q.result);
        t.onerror = () => rej(t.error);
    };
    r.onerror = () => rej(r.error);
});
function toast(msg, label, fn) {
    const t = $("toast");
    (document.querySelector("dialog[open]") || document.body).append(t);
    t.textContent = msg + " ";
    if (label) {
        const b = document.createElement("button");
        b.textContent = label;
        b.onclick = () => { fn(); t.classList.remove("show"); };
        t.append(b);
    }
    t.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 5000);
}

/* ---------- state ---------- */
function loadSettings() {
    let p = {};
    try { p = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {}; } catch (e) { console.error("Failed to parse settings", e); }
    appState = { ...appState, ...p };
    legacyBg = appState.customBackground || null;
    delete appState.customBackground;
    if (!Array.isArray(appState.bookmarks)) appState.bookmarks = structuredClone(DEFAULT_BOOKMARKS);
}
function saveSettings() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appState)); }
    catch (e) { console.error(e); toast("Couldn't save settings: browser storage is full."); }
}

/* ---------- theme ---------- */
const lightMQ = matchMedia("(prefers-color-scheme: light)");
const reducedMQ = matchMedia("(prefers-reduced-motion: reduce)");
let palette = ["224, 222, 244", "235, 188, 186", "156, 207, 216", "196, 167, 231"]; // star, rose, foam, iris
const isLight = () => appState.theme === "light" || (appState.theme === "auto" && lightMQ.matches);
function applyTheme() {
    const light = isLight();
    document.documentElement.classList.toggle("light-theme", light);
    $("btn-theme").innerHTML = light ? SUN : MOON;
    $("btn-theme").setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    const cv = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
    const rgb = h => /^#[0-9a-f]{6}$/i.test(h) ? [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(",") : null;
    palette = [cv("--star-color") || palette[0], ...["--color-rose", "--color-foam", "--color-iris"].map((n, i) => rgb(cv(n)) || palette[i + 1])];
    drawStars();
}

/* ---------- greeting, clock ---------- */
function setText(id, t) { const e = $(id); if (e.textContent !== t) e.textContent = t; }
function tick() {
    clearTimeout(tickTimer);
    const d = new Date(), h = d.getHours();
    setText("greeting-time", h >= 5 && h < 12 ? "Good morning," : h >= 12 && h < 17 ? "Good afternoon," : h >= 17 && h < 22 ? "Good evening," : "Good night,");
    setText("greeting-name", appState.name + ".");
    setText("time-display", d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: appState.clock === "12" ? "h12" : "h23" }));
    tickTimer = setTimeout(tick, 1000 - (Date.now() % 1000) + 5);
}

/* ---------- weather (Open-Meteo, cached) ---------- */
async function fetchWeather(force) {
    const el = $("weather-display");
    if (appState.lat == null) { el.textContent = "set a weather location in settings"; return; }
    const k = [appState.lat, appState.lon, appState.units].join();
    let c = null;
    try { c = JSON.parse(localStorage.getItem(WX_KEY)); } catch { }
    if (c && c.k === k) { el.textContent = c.text; if (!force && Date.now() - c.t < 9e5) return; }
    try {
        const u = `https://api.open-meteo.com/v1/forecast?latitude=${appState.lat}&longitude=${appState.lon}&current=temperature_2m,weather_code&temperature_unit=${appState.units === "C" ? "celsius" : "fahrenheit"}`;
        const r = await fetch(u);
        if (!r.ok) throw new Error(r.status);
        const j = (await r.json()).current;
        const text = `it is ${WMO[j.weather_code] || "unsettled"}, and ${Math.round(j.temperature_2m)}°${appState.units}`;
        try { localStorage.setItem(WX_KEY, JSON.stringify({ k, t: Date.now(), text })); } catch { }
        el.textContent = text;
    } catch (e) {
        console.warn("Weather fetch failed", e);
        if (!c || c.k !== k) el.textContent = "weather unavailable";
    }
}
async function setCity(name) {
    const s = $("city-status");
    if (!name.trim()) { Object.assign(appState, { city: "", lat: null, lon: null }); saveSettings(); s.textContent = ""; return fetchWeather(); }
    s.textContent = "Searching…";
    try {
        const r = await fetch("https://geocoding-api.open-meteo.com/v1/search?count=1&name=" + encodeURIComponent(name.split(",")[0].trim()));
        const p = (await r.json()).results?.[0];
        if (!p) throw new Error("no match");
        Object.assign(appState, { city: p.name + (p.admin1 ? ", " + p.admin1 : ""), lat: p.latitude, lon: p.longitude });
        $("input-city").value = appState.city;
        s.textContent = "Location set.";
        saveSettings();
        fetchWeather();
    } catch { s.textContent = "Couldn't find that place. Try just the city name."; }
}

/* ---------- bookmarks ---------- */
function svgUnique(svg) {
    const n = ++uid;
    return svg.replace(/\bid="([^"]+)"/g, `id="$1-${n}"`).replace(/url\(#([^)]+)\)/g, `url(#$1-${n})`);
}
function letterTile(bm) {
    const t = document.createElement("span");
    t.className = "bm-letter";
    t.innerHTML = `<span>${escapeHtml((bm.name[0] || "?").toUpperCase())}</span>`;
    return t;
}
function setIcon(el, bm) {
    if (ICONS[bm.icon]) { el.innerHTML = svgUnique(ICONS[bm.icon]); return; }
    const host = hostOf(bm.url);
    if (!host) { el.replaceChildren(letterTile(bm)); return; }
    const img = new Image();
    img.className = "bm-fav"; img.alt = ""; img.loading = "lazy"; img.draggable = false;
    img.src = `https://icons.duckduckgo.com/ip3/${host}.ico`;
    img.onerror = () => img.replaceWith(letterTile(bm));
    el.replaceChildren(img);
}
function renderBookmarks() {
    const box = $("bookmarks-container");
    box.replaceChildren();
    appState.bookmarks.forEach((bm, i) => {
        const a = document.createElement("a");
        a.href = bm.url; a.className = "bookmark"; a.dataset.index = i; a.style.setProperty("--i", i);
        a.setAttribute("aria-label", bm.name);
        a.style.color = okColor(bm.color);
        setIcon(a, bm);
        box.append(a);
    });
}
function commitBookmarks() { saveSettings(); renderBookmarks(); renderSettingsBookmarks(); }
function reorder(from, to) {
    if (from === to || to < 0 || to >= appState.bookmarks.length) return;
    appState.bookmarks.splice(to, 0, appState.bookmarks.splice(from, 1)[0]);
    commitBookmarks();
}
function deleteBookmark(i) {
    const [bm] = appState.bookmarks.splice(i, 1);
    commitBookmarks();
    toast(`Deleted “${bm.name}”.`, "Undo", () => { appState.bookmarks.splice(i, 0, bm); commitBookmarks(); });
}
function renderSettingsBookmarks() {
    const list = $("settings-bookmark-list");
    list.replaceChildren();
    if (!appState.bookmarks.length) { list.innerHTML = `<p style="color:var(--text-muted);font-size:.9rem">No bookmarks yet. Add one below.</p>`; return; }
    appState.bookmarks.forEach((bm, i) => {
        const item = document.createElement("div");
        item.className = "bookmark-list-item";
        item.draggable = true; item.dataset.index = i;
        item.innerHTML = `
            <div class="bookmark-info" style="color:${okColor(bm.color)}">
                <span class="bm-icon" style="display:contents"></span>
                <div class="bookmark-text">
                    <span class="bookmark-name" style="color:var(--text-main)">${escapeHtml(bm.name)}</span>
                    <span class="bookmark-url">${escapeHtml(bm.url)}</span>
                </div>
            </div>
            <div class="bookmark-actions">
                <button class="icon-btn btn-up" title="Move up" aria-label="Move ${escapeHtml(bm.name)} up"><svg viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
                <button class="icon-btn btn-down" title="Move down" aria-label="Move ${escapeHtml(bm.name)} down"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
                <button class="icon-btn btn-edit" title="Edit" aria-label="Edit ${escapeHtml(bm.name)}"><svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
                <button class="icon-btn btn-delete" title="Delete" aria-label="Delete ${escapeHtml(bm.name)}" style="color:var(--color-love)"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" stroke-width="2"/></svg></button>
            </div>`;
        setIcon(item.querySelector(".bm-icon"), bm);
        item.querySelector(".btn-up").onclick = () => reorder(i, i - 1);
        item.querySelector(".btn-down").onclick = () => reorder(i, i + 1);
        item.querySelector(".btn-edit").onclick = () => openBookmarkEditor(i);
        item.querySelector(".btn-delete").onclick = () => deleteBookmark(i);
        item.ondragstart = e => e.dataTransfer.setData("text/plain", i);
        item.ondragover = e => e.preventDefault();
        item.ondrop = e => { e.preventDefault(); reorder(+e.dataTransfer.getData("text/plain"), i); };
        list.append(item);
    });
}
function openBookmarkEditor(index) {
    const sel = $("bm-icon-selector");
    sel.replaceChildren();
    const bm = index >= 0 ? appState.bookmarks[index] : { name: "", url: "", icon: "auto", color: "var(--color-love)" };
    ["auto", ...Object.keys(ICONS)].forEach(key => {
        const o = document.createElement("button");
        o.type = "button"; o.className = "icon-option"; o.dataset.icon = key;
        o.title = key === "auto" ? "Site icon (automatic)" : key;
        o.setAttribute("aria-label", o.title);
        if (key === "auto") o.textContent = "Auto"; else o.innerHTML = svgUnique(ICONS[key]);
        o.onclick = () => { sel.querySelectorAll(".icon-option").forEach(x => { x.classList.remove("selected"); x.setAttribute("aria-pressed", "false"); }); o.classList.add("selected"); o.setAttribute("aria-pressed", "true"); };
        sel.append(o);
    });
    (sel.querySelector(`[data-icon="${bm.icon}"]`) || sel.firstChild).click();
    $("bm-edit-index").value = index;
    $("bm-modal-title").textContent = index >= 0 ? "Edit Bookmark" : "Add Bookmark";
    $("bm-name").value = bm.name;
    $("bm-url").value = bm.url || "https://";
    $("bm-url").setCustomValidity("");
    $("bm-color").value = bm.color;
    if ($("bm-color").selectedIndex < 0) $("bm-color").selectedIndex = 0;
    openModal("bookmark-editor-overlay");
}
function saveBookmark() {
    const i = parseInt($("bm-edit-index").value, 10), name = $("bm-name").value.trim(), u = $("bm-url"), url = normalizeUrl(u.value);
    u.setCustomValidity(url ? "" : "Enter a valid web address, like example.com");
    if (!name || !url) { $("bm-form").reportValidity(); return; }
    const on = document.querySelector(".icon-option.selected");
    const bm = { name, url, icon: on ? on.dataset.icon : "auto", color: $("bm-color").value };
    if (i >= 0) appState.bookmarks[i] = bm; else appState.bookmarks.push(bm);
    commitBookmarks();
    $("bookmark-editor-overlay").close();
}

/* ---------- background + starfield ---------- */
let canvas, ctx, stars = [], raf = null, last = 0, dpr = 1;
function applyBackground() {
    const has = appState.hasBackground && bgURL;
    const b = document.body;
    b.style.backgroundImage = has ? `url("${bgURL}")` : "none";
    b.style.backgroundSize = "cover"; b.style.backgroundPosition = "center";
    b.classList.toggle("has-bg", !!has);
    $("bg-canvas").style.display = document.querySelector(".nebula-overlay").style.display = has ? "none" : "block";
    $("bg-dim").style.opacity = has ? appState.bgDim / 100 : 0;
    if (!has && appState.animation === "enabled" && !reducedMQ.matches) startAnim(); else { stopAnim(); if (!has) drawStars(); }
}
async function setBackground(blob) {
    if (blob) await idb("readwrite", s => s.put(blob, "bg")); else await idb("readwrite", s => s.delete("bg"));
    if (bgURL) URL.revokeObjectURL(bgURL);
    bgURL = blob ? URL.createObjectURL(blob) : null;
    appState.hasBackground = !!blob;
    applyBackground();
}
function generateStars() {
    const n = { low: 50, medium: 100, high: 200 }[appState.starDensity] || 100;
    stars = Array.from({ length: n }, () => {
        const q = Math.random(), z = q < .55 ? 0 : q < .88 ? 1 : 2; // far / mid / near
        return {
            x: Math.random() * innerWidth, y: Math.random() * innerHeight, z,
            r: [.35 + Math.random() * .35, .6 + Math.random() * .5, 1 + Math.random() * .8][z],
            max: [.45, .75, 1][z], pm: [.4, 1, 1.9][z],
            o: Math.random(), speed: .01 + Math.random() * .05, dir: Math.random() > .5 ? 1 : -1,
            tint: Math.random() < .16, t: Math.floor(Math.random() * 3)
        };
    });
}
function resizeCanvas() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    generateStars(); drawStars();
}
function drawStars() {
    if (!ctx) return;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    const light = isLight(); // Dawn: soft rose/foam/iris motes instead of dark specks
    for (const s of stars) {
        const col = light || s.tint ? palette[1 + s.t] : palette[0];
        ctx.beginPath();
        ctx.arc(s.x, s.y, light ? s.r * 1.3 : s.r, 0, 6.2832);
        ctx.fillStyle = `rgba(${col},${(s.o * s.max * (light ? .5 : 1)).toFixed(3)})`;
        ctx.fill();
    }
}
let shoot = null, nextShoot = 0;
function spawnShoot(t) {
    const right = Math.random() > .5, a = (.12 + Math.random() * .25) * Math.PI;
    shoot = { x: Math.random() * innerWidth * .6 + (right ? 0 : innerWidth * .4), y: Math.random() * innerHeight * .35, vx: (right ? 1 : -1) * Math.cos(a) * 14, vy: Math.sin(a) * 14, life: 0 };
    nextShoot = t + 20000 + Math.random() * 25000;
}
function drawShoot() {
    const p = shoot, fade = Math.sin(Math.min(p.life / 60, 1) * Math.PI), col = isLight() ? palette[3] : palette[0];
    const g = ctx.createLinearGradient(p.x, p.y, p.x - p.vx * 7, p.y - p.vy * 7);
    g.addColorStop(0, `rgba(${col},${(.9 * fade).toFixed(3)})`); g.addColorStop(1, `rgba(${col},0)`);
    ctx.strokeStyle = g; ctx.lineWidth = 1.6; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 7, p.y - p.vy * 7); ctx.stroke();
}
function frame(t) {
    raf = requestAnimationFrame(frame);
    const dt = t - last;
    if (dt < 14) return; // ~60fps cap
    last = t;
    const k = Math.min(dt, 100) / 16.7, m = SPEEDS[appState.starSpeed] || 4, tw = 1 + (m - 1) / 4;
    for (const s of stars) {
        s.o += s.speed * s.dir * k * tw * (.5 + s.pm / 2);
        if (s.o >= 1) { s.o = 1; s.dir = -1; } else if (s.o <= .1) { s.o = .1; s.dir = 1; }
        s.y -= .1 * k * m * s.pm; if (s.y < 0) s.y = innerHeight;
    }
    drawStars();
    if (!shoot && t > nextShoot) spawnShoot(t);
    if (shoot) { shoot.x += shoot.vx * k; shoot.y += shoot.vy * k; shoot.life += k; if (shoot.life > 60) shoot = null; else drawShoot(); }
}
function startAnim() { if (!raf) { last = 0; nextShoot = performance.now() + 5000 + Math.random() * 10000; raf = requestAnimationFrame(frame); } }
function stopAnim() { cancelAnimationFrame(raf); raf = null; shoot = null; }
function initCanvas() {
    canvas = $("bg-canvas"); ctx = canvas.getContext("2d");
    resizeCanvas();
    let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resizeCanvas, 150); });
}

/* ---------- dialogs, settings ---------- */
function openModal(id) { const d = $(id); d.setAttribute("aria-label", d.querySelector("h2").textContent); if (!d.open) d.showModal(); }
function syncForm() {
    $("input-name").value = appState.name; $("select-theme").value = appState.theme; $("input-city").value = appState.city;
    $("select-units").value = appState.units; $("select-clock").value = appState.clock;
    $("select-animation").value = appState.animation; $("select-stars").value = appState.starDensity; $("select-speed").value = appState.starSpeed; $("range-dim").value = appState.bgDim;
}
function openSettings() { syncForm(); renderSettingsBookmarks(); openModal("settings-overlay"); }

async function importData(file) {
    try {
        const d = JSON.parse(await file.text());
        SETTING_KEYS.forEach(k => { if (k in d && (typeof d[k] === typeof appState[k] || (["lat", "lon"].includes(k) && typeof d[k] === "number"))) appState[k] = d[k]; });
        if (Array.isArray(d.bookmarks)) appState.bookmarks = d.bookmarks.map(b => ({ name: String(b.name || "").slice(0, 60), url: normalizeUrl(b.url || ""), icon: String(b.icon || "auto"), color: okColor(b.color) })).filter(b => b.name && b.url);
        if (typeof d.background === "string" && d.background.startsWith("data:image/")) await setBackground(await (await fetch(d.background)).blob());
        saveSettings(); applyTheme(); tick(); fetchWeather(); renderBookmarks(); renderSettingsBookmarks(); syncForm(); applyBackground(); generateStars(); drawStars();
        toast("Settings imported.");
    } catch (e) { console.error(e); toast("That file isn't a valid backup."); }
}
async function exportData() {
    const data = { version: 2, bookmarks: appState.bookmarks };
    SETTING_KEYS.forEach(k => data[k] = appState[k]);
    try {
        const b = await idb("readonly", s => s.get("bg"));
        if (b) data.background = await new Promise(r => { const f = new FileReader(); f.onload = () => r(f.result); f.readAsDataURL(b); });
    } catch { }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    a.download = "startpage-backup.json"; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1e4);
}

function setupEventListeners() {
    const on = (id, ev, fn) => $(id).addEventListener(ev, fn);
    const save = () => saveSettings();
    on("btn-theme", "click", () => toggleTheme());
    on("btn-settings", "click", openSettings);
    on("btn-info", "click", () => openModal("info-overlay"));
    document.querySelectorAll(".close-modal").forEach(b => b.addEventListener("click", () => b.closest("dialog").close()));
    document.querySelectorAll("dialog").forEach(d => d.addEventListener("click", e => { if (e.target === d) d.close(); }));
    lightMQ.addEventListener("change", () => appState.theme === "auto" && applyTheme());
    reducedMQ.addEventListener("change", applyBackground);

    const tabs = [...document.querySelectorAll(".tab-btn")];
    document.querySelector(".tabs").setAttribute("role", "tablist");
    const selectTab = (b, focus) => { tabs.forEach(x => { const a = x === b; x.classList.toggle("active", a); x.setAttribute("aria-selected", a); x.tabIndex = a ? 0 : -1; $(x.dataset.target).classList.toggle("active", a); }); if (focus) b.focus(); };
    tabs.forEach((b, i) => {
        b.setAttribute("role", "tab"); $(b.dataset.target).setAttribute("role", "tabpanel");
        b.onclick = () => selectTab(b);
        b.onkeydown = e => { const d = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (d) selectTab(tabs[(i + d + tabs.length) % tabs.length], true); };
    });
    selectTab(tabs[0]);

    on("input-name", "input", e => { appState.name = e.target.value.trim() || "User"; save(); tick(); });
    on("select-theme", "change", e => { appState.theme = e.target.value; save(); applyTheme(); });
    on("select-units", "change", e => { appState.units = e.target.value; save(); fetchWeather(); });
    on("select-clock", "change", e => { appState.clock = e.target.value; save(); tick(); });
    on("input-city", "change", e => setCity(e.target.value));
    on("select-animation", "change", e => { appState.animation = e.target.value; save(); applyBackground(); });
    on("select-stars", "change", e => { appState.starDensity = e.target.value; save(); generateStars(); drawStars(); });
    on("select-speed", "change", e => { appState.starSpeed = e.target.value; save(); });
    on("range-dim", "input", e => { appState.bgDim = +e.target.value; applyBackground(); });
    on("range-dim", "change", save);

    on("btn-upload-bg", "click", () => $("bg-file-input").click());
    on("btn-clear-bg", "click", async () => { await setBackground(null); save(); });
    on("bg-file-input", "change", async e => {
        const f = e.target.files[0]; e.target.value = "";
        if (!f) return;
        try {
            const bmp = await createImageBitmap(f), sc = Math.min(1, 2560 / Math.max(bmp.width, bmp.height));
            const c = document.createElement("canvas");
            c.width = Math.round(bmp.width * sc); c.height = Math.round(bmp.height * sc);
            c.getContext("2d").drawImage(bmp, 0, 0, c.width, c.height);
            await setBackground(await new Promise(r => c.toBlob(r, "image/jpeg", .87)));
            save();
        } catch (err) { console.error(err); toast("Couldn't use that image."); }
    });

    on("btn-export", "click", exportData);
    on("btn-import", "click", () => $("import-file").click());
    on("import-file", "change", e => { const f = e.target.files[0]; e.target.value = ""; if (f) importData(f); });

    on("btn-add-bookmark", "click", () => openBookmarkEditor(-1));
    on("bm-form", "submit", e => { e.preventDefault(); saveBookmark(); });
    on("bm-url", "input", e => e.target.setCustomValidity(""));

    // 1–9 opens the matching bookmark
    addEventListener("keydown", e => {
        if (e.metaKey || e.ctrlKey || e.altKey || !menu.hidden || document.querySelector("dialog[open]") || /INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
        const bm = appState.bookmarks[+e.key - 1];
        if (bm && +e.key >= 1) location.href = bm.url;
    });
}

/* ---------- custom context menu ---------- */
const menu = document.createElement("div");
menu.id = "ctx-menu"; menu.setAttribute("role", "menu"); menu.hidden = true;
document.body.append(menu);
const hideMenu = () => { menu.hidden = true; };
let themeOrigin = null;
function toggleTheme(o) {
    const go = () => { appState.theme = isLight() ? "dark" : "light"; saveSettings(); applyTheme(); };
    if (!document.startViewTransition || reducedMQ.matches) return go();
    const b = $("btn-theme").getBoundingClientRect(), root = document.documentElement;
    const x = o ? o.x : b.left + b.width / 2, y = o ? o.y : b.top + b.height / 2;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    root.classList.add("no-tr");
    const vt = document.startViewTransition(go);
    vt.ready.then(() => root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] }, { duration: 700, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" })).catch(() => {});
    vt.finished.finally(() => root.classList.remove("no-tr"));
}
async function copyText(text) {
    try { await navigator.clipboard.writeText(text); }
    catch {
        const t = document.createElement("textarea");
        t.value = text; (document.querySelector("dialog[open]") || document.body).append(t);
        t.select(); document.execCommand("copy"); t.remove();
    }
    toast("Link copied.");
}
function showMenu(x, y, items) {
    menu.replaceChildren();
    themeOrigin = { x, y };
    items.forEach(it => {
        if (it === "-") { const s = document.createElement("div"); s.className = "ctx-sep"; s.setAttribute("role", "separator"); menu.append(s); return; }
        const b = document.createElement("button");
        b.type = "button"; b.className = "ctx-item" + (it.danger ? " danger" : ""); b.setAttribute("role", "menuitem");
        b.textContent = it.label;
        b.onclick = () => { hideMenu(); it.run(); };
        menu.append(b);
    });
    (document.querySelector("dialog[open]") || document.body).append(menu);
    menu.style.left = menu.style.top = "0px";
    menu.hidden = false;
    const r = menu.getBoundingClientRect();
    menu.style.left = Math.max(8, Math.min(x, innerWidth - r.width - 8)) + "px";
    menu.style.top = Math.max(8, Math.min(y, innerHeight - r.height - 8)) + "px";
    menu.querySelector(".ctx-item")?.focus();
}
function menuFor(t) {
    const tile = t.closest(".bookmark"), row = t.closest(".bookmark-list-item"), el = tile || row;
    if (el) {
        const i = +el.dataset.index, bm = appState.bookmarks[i], last = appState.bookmarks.length - 1;
        return [
            ...(tile ? [{ label: "Open", run: () => { location.href = bm.url; } }, { label: "Open in new tab", run: () => window.open(bm.url, "_blank", "noopener") }, "-"] : []),
            { label: "Copy link", run: () => copyText(bm.url) },
            { label: "Edit…", run: () => openBookmarkEditor(i) },
            ...(i > 0 ? [{ label: tile ? "Move left" : "Move up", run: () => reorder(i, i - 1) }] : []),
            ...(i < last ? [{ label: tile ? "Move right" : "Move down", run: () => reorder(i, i + 1) }] : []),
            "-",
            { label: "Delete", danger: true, run: () => deleteBookmark(i) }
        ];
    }
    if (document.querySelector("dialog[open]")) return [];
    return [
        { label: "Add bookmark…", run: () => openBookmarkEditor(-1) },
        "-",
        { label: "Refresh weather", run: () => fetchWeather(true) },
        { label: isLight() ? "Switch to Rosé Pine (dark)" : "Switch to Rosé Pine Dawn (light)", run: () => toggleTheme(themeOrigin) },
        { label: "Change background…", run: () => $("bg-file-input").click() },
        ...(appState.hasBackground ? [{ label: "Clear background", run: async () => { await setBackground(null); saveSettings(); } }] : []),
        "-",
        { label: "Settings", run: openSettings },
        { label: "About", run: () => openModal("info-overlay") }
    ];
}
function setupContextMenu() {
    addEventListener("contextmenu", e => {
        const t = e.target;
        if (!(t instanceof Element)) return;
        if (t.closest('input:not([type="range"]):not([type="file"]), textarea')) { hideMenu(); return; } // native cut/copy/paste in text fields
        e.preventDefault();
        const items = menuFor(t);
        if (items.length) showMenu(e.clientX, e.clientY, items); else hideMenu();
    });
    addEventListener("pointerdown", e => { if (!menu.hidden && !menu.contains(e.target)) hideMenu(); }, true);
    addEventListener("blur", hideMenu);
    addEventListener("resize", hideMenu);
    addEventListener("scroll", hideMenu, true);
    document.querySelectorAll("dialog").forEach(d => d.addEventListener("close", hideMenu));
    addEventListener("keydown", e => {
        if (menu.hidden) return;
        const items = [...menu.querySelectorAll(".ctx-item")], i = items.indexOf(document.activeElement);
        if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); hideMenu(); }
        else if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
        else if (e.key === "Tab") hideMenu();
    }, true);
    // no click-drag / double-click text selection outside text fields
    document.addEventListener("selectstart", e => {
        const el = e.target.nodeType === 3 ? e.target.parentElement : e.target;
        if (!el?.closest?.("input, textarea")) e.preventDefault();
    });
}

async function init() {
    setTimeout(() => document.body.classList.remove("intro"), 3200);
    loadSettings();
    applyTheme();
    tick();
    fetchWeather();
    setInterval(() => fetchWeather(), 9e5);
    renderBookmarks();
    setupEventListeners();
    setupContextMenu();
    initCanvas();
    try {
        if (legacyBg) { await setBackground(await (await fetch(legacyBg)).blob()); saveSettings(); }
        else if (appState.hasBackground) { const b = await idb("readonly", s => s.get("bg")); if (b) { bgURL = URL.createObjectURL(b); } else appState.hasBackground = false; }
    } catch (e) { console.error(e); appState.hasBackground = false; }
    applyBackground();
}
init();
