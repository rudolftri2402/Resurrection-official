
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    // Pastikan tombol dan menu tersedia
    if (!navToggle || !navMenu) {
        return;
    }

    // Buka atau tutup menu saat tombol ditekan
    navToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("active");

        navToggle.textContent = isOpen ? "✕" : "☰";
        navToggle.setAttribute("aria-expanded", isOpen);
        navToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
        );
    });

    // Tutup menu setelah salah satu link dipilih
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            navToggle.textContent = "☰";
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute(
                "aria-label",
                "Buka menu navigasi"
            );
        });
    });

    // Tutup menu jika tombol Escape ditekan
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            navMenu.classList.remove("active");
            navToggle.textContent = "☰";
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute(
                "aria-label",
                "Buka menu navigasi"
            );
        }
    });
});
