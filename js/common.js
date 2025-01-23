const header_main_btn = () => {
  const main_menu = document.querySelectorAll(".main_btn");
  const dim = document.querySelector(".dimm_bk");

  main_menu.forEach((menu) => {
    menu.addEventListener("click", () => {
      menuReset();
      menu.parentNode.classList.add("active");

      dim.classList.add("open");
    });
  });

  function menuReset() {
    main_menu.forEach((menu) => {
      menu.parentElement.classList.remove("active");
    });
  }

  function focusOut() {
    dim.addEventListener("click", (e) => {
      e.target.classList.remove("open");
      menuReset();
    });
  }
  focusOut();
};

const footer_menu3 = () => {
  const menus = document.querySelectorAll(".fnb > li:not(:first-child)");
  menus[0].classList.add("active");
  menus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      e.preventDefault();
      closeActive(menu);
      menu.classList.toggle("active");
    });
  });

  function closeActive(activeMenu) {
    menus.forEach((menu) => {
      if (menu !== activeMenu && menu.classList.contains("active")) {
        menu.classList.remove("active");
      }
    });
  }
};

const footer_menu2 = () => {
  const footer_titles = document.querySelectorAll(".fnb > li");
  let curEl;
  footer_titles.forEach((title, idx) => {
    title.addEventListener("click", (e) => {
      e.preventDefault();

      if (curEl === idx) {
        title.classList.remove("active");
        curEl = null;
      } else {
        reset_menu();
        // 현재 클릭된 요소에 'active' 추가
        title.classList.add("active");
        curEl = idx;
      }
    });
  });

  function reset_menu() {
    // 모든 요소에서 'active' 제거
    footer_titles.forEach((item) => item.classList.remove("active"));
  }
}

const footer_menu4 = () => {
    const footer_titles = document.querySelectorAll(".fnb > li");
    let curEl;
    footer_titles.forEach((title, idx) => {
      title.addEventListener("click", (e) => {
        e.preventDefault();
        console.log('clicked')
        reset_menu(title)
        let hasActive = title.classList.contains('active'); 
        console.log('before toggle', hasActive)
        title.classList.toggle('active')
        console.log('after toggle', hasActive)
      });
    });
  
  
    function reset_menu(activeMenu) {
      footer_titles.forEach(menu => {
          // 클릭된 메뉴와 동일하지 않은 경우에만 'on' 제거
          if (menu !== activeMenu) {
              menu.classList.remove('active');
          }
      });
      }
     
  };

const footer_menu = () => {
  const footer_titles = document.querySelectorAll(".footer_title");

  footer_titles.forEach((title) => {
    title.addEventListener("click", (e) => {
      e.preventDefault();
      reset_menu(title);
      title.closest("li").classList.toggle("active");
    });
  });

  function reset_menu(activeTitle) {
    footer_titles.forEach((title) => {
      if (title !== activeTitle) {
        title.closest("li").classList.remove("active");
      }
    });
  }
};

const dimm_wt_open = () => {
  const dimm_wt = document.querySelector(".dimm_wt");
  dimm_wt.classList.add("open");
};

const dimm_wt_close = () => {
  const dimm_wt = document.querySelector(".dimm_wt");
  dimm_wt.classList.remove("open");
};

const search = () => {
  const search_icon = document.querySelector(".icon_search");
  const close_modal = document.querySelector(".icon_close");
  const search_modal_container = document.querySelector(
    ".modal_search_container"
  );
  search_icon.addEventListener("click", () => {
    dimm_wt_open();
    search_modal_container.classList.add("open");
  });

  close_modal.addEventListener("click", () => {
    dimm_wt_close();
    search_modal_container.classList.remove("open");
  });
};

const open_tablet = () => {
  const ham_icon = document.querySelector(".icon_ham");
  const tablet_menu = document.querySelector(".nav_wrap");
  const close_menu = document.getElementById("close_menu");
  ham_icon.addEventListener("click", () => {
    tablet_menu.classList.add("open");
  });

  close_menu.addEventListener("click", () => {
    tablet_menu.classList.remove("open");
  });
};

document.body.addEventListener("htmx:afterSwap", () => {
  footer_menu2();
  header_main_btn();
  // theme();
  search();
  open_tablet();
});
