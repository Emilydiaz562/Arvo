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
/* FOTOS DECORATIVAS FLOTANTES */
.decoracion-fotos {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 1;
}

.df {
  position: absolute;
  width: 110px;
  opacity: 0.35;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.df:hover {
  transform: scale(1.08);
  opacity: 0.7;
}

.df1 {
  top: 200px;
  left: 5%;
  transform: rotate(-6deg);
}

.df2 {
  top: 550px;
  right: 12%;
  transform: rotate(5deg);
}

.df3 {
  top: 950px;
  left: 10%;
  transform: rotate(7deg);
}

.df4 {
  top: 1400px;
  right: 7%;
  transform: rotate(-4deg);
}
