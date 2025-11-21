/* ===========================
   ARVO — script.js
   =========================== */

/* ---------- MENÚ MÓVIL ---------- */

function toggleMenu() {
  const navMobile = document.getElementById("navMobile");
  navMobile.classList.toggle("open");
}

/* Cerrar menú móvil al hacer clic fuera (móvil) */
document.addEventListener("click", function(e){
  const navMobile = document.getElementById("navMobile");
  const menuBtn = document.querySelector(".menu-btn");

  // solo cerrar si está abierto y el clic es fuera del menú
  if(navMobile.classList.contains("open")){
    const clickInsideMenu = navMobile.contains(e.target) || menuBtn.contains(e.target);
    if(!clickInsideMenu){
      navMobile.classList.remove("open");
    }
  }
});

/* ---------- ANIMACIÓN DE SECCIONES (FADE-IN EN SCROLL) ---------- */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

// Aplicamos animación a cada elemento con ".fade-in"
document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

/* ---------- FOOTER: Año automático ---------- */

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Reduce motion (si el usuario lo pide) ---------- */

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("*").forEach(el => {
    el.style.transition = "none";
    el.style.animation = "none";
  });
}

