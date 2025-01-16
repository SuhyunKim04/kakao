const header_main_btn = () => {
    const main_menu = document.querySelectorAll('.main_btn')
    const dim = document.querySelector('.dimm_bk');

    main_menu.forEach(menu => {
        menu.addEventListener('click', () =>{
            
            menuReset();
            menu.parentNode.classList.add('active')

            dim.classList.add('open');
        })
    })

    function menuReset() {
        main_menu.forEach(menu => {
            menu.parentElement.classList.remove('active');
        })
    }

    function focusOut(){
        dim.addEventListener('click',(e) => {
            e.target.classList.remove('open');
            menuReset();
        })
    }
    focusOut();
}

const footer_menu = () => {
    const fnb = document.querySelectorAll('.fnb');

    fnb.forEach(menu => {
        menu.addEventListener('click', () => {
            menu.parentNode.classList.add('active')
        })
    })
}

// const theme = () => {
//     const theme_btn = document.querySelector('.theme_btn');
//     const dimm_wt = document.querySelector('.dimm_wt');
//     theme_btn.addEventListener('click', () => {
//         dimm_wt.classList.add('open');
        
//     })
// }



const dimm_wt_open = () => {
    const dimm_wt = document.querySelector('.dimm_wt');
    dimm_wt.classList.add('open')
}

const dimm_wt_close = () => {
    const dimm_wt = document.querySelector('.dimm_wt');
    dimm_wt.classList.remove('open');
}
 

const search = () => {
    const search_icon = document.querySelector('.icon_search');
    const close_modal = document.querySelector('.icon_close');
    const search_modal_container = document.querySelector('.modal_search_container');
    search_icon.addEventListener('click', () => {
        dimm_wt_open();
        search_modal_container.classList.add('open');
    })

    close_modal.addEventListener('click', () => {
        dimm_wt_close();
        search_modal_container.classList.remove('open');
    })
   
}

const open_tablet =() => {
    const ham_icon = document.querySelector('.icon_ham');
    const tablet_menu = document.querySelector('.nav_wrap');
    const close_menu = document.getElementById('close_menu');
    ham_icon.addEventListener('click',() => {
        tablet_menu.classList.add('open')
    })

    close_menu.addEventListener('click' , () => {
        tablet_menu.classList.remove('open');
    })
}

 

document.body.addEventListener('htmx:afterSwap', () => {
 
    header_main_btn();
    // theme();
    search();
    open_tablet();

})
  