import { initMatrix } from "./matrix.js";
import { initTabs } from "./tabs.js";
import { initReveal } from "./reveal.js";
import { loadPages } from "./loader.js";

async function init() {
  await loadPages();

  initMatrix();
  initTabs();
  initReveal();

  window.switchTab("home");
}

init();
