"use strict";

const FILES = {
  "packed-loader": "scripts/packed-loader.js",
  "main-loader": "scripts/main-loader.js",
  "loader-raw": "scripts/loader_raw.js",
  "deobf-anti": "scripts/deobfuscated_anti_debug.js",
  "anti-raw": "scripts/anti_debug_raw.js",
  "main-analysis": "scripts/MAIN_ANALYSIS.md",
  "main-raw": "scripts/main_raw.js",
};

function sitemap(html) {
  return html.replace(/<!--[\s\S]*?-->/g, "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function render(text) {
  return sitemap(text).replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="c">$1</span>');
}

const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = Array.from(document.querySelectorAll(".panel"));
const loaded = {};

async function loadInto(id) {
  if (loaded[id]) return;
  const target = document.querySelector(`pre#${id}`);
  try {
    const res = await fetch(FILES[id]);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    target.innerHTML = render(text);
    loaded[id] = true;
  } catch (e) {
    target.textContent = "Failed to load " + FILES[id] + ": " + e.message;
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.toggle("active", t === tab));
    const id = tab.dataset.target;
    panels.forEach((p) => p.classList.toggle("active", p.id === id + "-panel"));
    loadInto(id);
  });

  if (tab.classList.contains("active")) loadInto(tab.dataset.target);
});