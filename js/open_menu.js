const open_menu = () => {
  const kebab = document.querySelectorAll(".kebab");
  const close = document.querySelectorAll(".icon_close");
  kebab.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest("li").querySelector(".card_modal");

      modal.classList.add("active");
      const icons = modal.querySelector(".modal_icons");
      icons.offsetHeight;
      setTimeout(() => {
        modal.style.opacity = 1;
        icons.classList.add("show");
      }, 0);
    });
  });

  close.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".card_modal");
      const icons = modal.querySelector(".modal_icons");
      modal.style.opacity = 0;
      icons.classList.remove("show");
      setTimeout(() => {
        modal.classList.remove("active");
      }, 200);
    });
  });
};
