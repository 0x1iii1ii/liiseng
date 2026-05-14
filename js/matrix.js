export function initMatrix() {
    const canvas = document.getElementById("matrix-rain");
    const ctx = canvas.getContext("2d");

    const CHARS =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"#_&(),.;:?!\\\\@{}[]^~';

    const FS = 14;

    let columns;
    let drops;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        columns = Math.floor(canvas.width / FS);

        drops = Array.from(
            { length: columns },
            () => (Math.random() * canvas.height) / FS
        );
    }

    function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#FFA500";
        ctx.font = `${FS}px VT323`;

        drops.forEach((y, i) => {
            ctx.fillText(
                CHARS[Math.floor(Math.random() * CHARS.length)],
                i * FS,
                y * FS
            );

            if (y * FS > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        });
    }

    resize();

    window.addEventListener("resize", resize);

    setInterval(draw, 50);
}