// ==============================
//  CAMBIO DE TEMA CLARO / OSCURO
// ==============================

// Selecciona el botón que alterna el tema
const toggleBtn = document.getElementById("toggle-theme");

// Aplica el tema guardado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Evento para alternar el tema
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Guarda la preferencia del usuario
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";

    localStorage.setItem("theme", currentTheme);
  });
}

// ==============================
//  SCROLL SUAVE A SECCIONES
// ==============================

// Aplica scroll suave a enlaces internos (#)
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// ==============================
//  CONTADOR DE VISITAS
// ==============================

// Incrementa contador en localStorage
let visitas = localStorage.getItem("visitas");

if (!visitas) {
  visitas = 0;
}

visitas++;
localStorage.setItem("visitas", visitas);

// Muestra contador si existe el elemento
const contador = document.getElementById("contador-visitas");
if (contador) {
  contador.textContent = `Visitas: ${visitas}`;
}

// ==============================
//  BOTÓN WHATSAPP FLOTANTE
// ==============================

const wppBtn = document.querySelector(".wpp-btn");

if (wppBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      wppBtn.classList.add("show");
    } else {
      wppBtn.classList.remove("show");
    }
  });
}

// ==============================
//  ANIMACIÓN DE SECCIONES AL SCROLL
// ==============================

// Selecciona todas las secciones a animar
const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

// Observa cada sección
secciones.forEach((seccion) => {
  observer.observe(seccion);
});
