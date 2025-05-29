document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    });
  });

  // Abrir e fechar o menu responsivo
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");

  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
});
