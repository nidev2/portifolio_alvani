(() => {
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const links = [...menu.querySelectorAll("a:not(.btn-outline)")];

/* Menu móvel */
const closeMenu = () => {
menu.classList.remove("aberto");
burger.setAttribute("aria-expanded", "false");
};
burger.addEventListener("click", () => {
const open = menu.classList.toggle("open");
burger.setAttribute("aria-expanded", String(open));
});
menu.addEventListener("click", (e) => {
se (e.target.closest("a")) fecharMenu();
});
janela.adicionarOuvinteDeEvento("redimensionar", () => {
if (window.innerWidth > 900) closeMenu();
});

/* Sombra na barra de navegação ao rolar */
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* Link ativo conforme a seção visível */
const sections = links
.map((a) => document.querySelector(a.getAttribute("href")))
.filter(Boolean);

const spy = new IntersectionObserver(
(entradas) => {
entradas.forEach((entrada) => {
se (!entrada.isIntersecting) retorne;
const id = "#" + entry.target.id ;
links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
});
},
{rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((s) => spy.observe(s));

/* Animação de entrada (reveal) */
const reveal = new IntersectionObserver(
(entradas, obs) => {
entradas.forEach((entrada) => {
se (entrada.éIntersectante) {
entry.target.classList.add("visible");
obs.unobserve(entry.target);
}
});
},
{ limite: 0,12 }
);
document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

/* Cartões de serviço entram em cascata */
document.querySelectorAll(".card").forEach((card, i) => {
card.style.transitionDelay = `${i * 60}ms`;
});

/* Pequena paralaxe nas estrelas do hero (desktop) */
const herói = document.querySelector(".herói");
const estrelas = herói.querySelectorAll(".estrela");
if (window.matchMedia("(min-width: 901px) and (prefers-reduced-motion: no-preference)").matches) {
herói.adicionarOuvinteDeEvento("mousemove", (e) => {
const x = (e.clientX / window.innerWidth - 0.5) * 2;
const y = (e.clientY / window.innerHeight - 0.5) * 2;
estrelas.paraCada((s, i) => {
const d = (i % 3 + 1) * 6;
s.style.translate = `${x * d}px ${y * d}px`;
});
});
}
})();
