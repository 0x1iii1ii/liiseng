function switchTab(id) {
    document
        .querySelectorAll(".tab-pane")
        .forEach((p) => p.classList.remove("active"));

    document
        .querySelectorAll(".tabs a")
        .forEach((a) => a.classList.remove("active"));

    const pane = document.getElementById("pane-" + id);

    if (pane) {
        pane.classList.add("active");
        pane.scrollTop = 0;
    }

    const link = document.querySelector(`.tabs a[data-tab="${id}"]`);

    if (link) {
        link.classList.add("active");

        link.scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });
    }

    if (window.initPane) {
        window.initPane(id);
    }
}

export function initTabs() {
    window.switchTab = switchTab;

    document.querySelectorAll("[data-tab]").forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            switchTab(el.dataset.tab);
        });
    });
}