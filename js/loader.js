async function loadPartial(id, file) {
    const res = await fetch(file);
    document.getElementById(id).innerHTML = await res.text();
}

export async function loadPages() {
    await loadPartial("header-container", "pages/header.html");

    const app = document.getElementById("app");

    const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "shop"
    ];

    for (const section of sections) {
        const res = await fetch(`pages/${section}.html`);
        app.innerHTML += await res.text();
    }

    await loadPartial("footer-container", "pages/footer.html");
}