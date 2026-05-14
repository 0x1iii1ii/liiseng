function revealItems(selector) {
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) {
                    en.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.08,
        }
    );

    document.querySelectorAll(selector).forEach((el) => {
        obs.observe(el);
    });
}

function initPane(id) {
    if (id === "skills") {
        revealItems("#skills-grid .skill-card");
    }

    if (id === "exp") {
        revealItems("#timeline .tl-item");
    }

    if (id === "projects") {
        revealItems("#projects-grid .project-card");
    }

    if (id === "shop") {
        revealItems("#shop-grid .shop-card");
    }
}

export function initReveal() {
    window.initPane = initPane;
}