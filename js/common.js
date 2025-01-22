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
 

const footer_menu2 = () => {
    const footer_menus = document.querySelectorAll('.fnb > li:not(:first-child)');
    let activeIdx = 0;
    footer_menus.forEach( (menu, curIdx) => {
        menu.addEventListener('click', (e) => {
            const target = e.target;  
            if(activeIdx  === curIdx) {
                menu.classList.remove('active')
            } else {
                menu.classList.add('active')
                activeIdx = curidx
            }

            /*
            if(target.nodeName === 'A' || target.nodeName === 'H4') {
                console.log('clicked menu', menu)
                menu.classList.add('active')
            }
            */
        })
    })
}



const footer_menu = () => {
    const footer_titles = document.querySelectorAll('.footer_title');

    footer_titles.forEach( (title,index) => {
        title.addEventListener('click', (e) => {
            e.preventDefault();
            reset_menu();
            title.closest('li').classList.add('active'); 
        })
    })



    function reset_menu(index) {

        footer_titles.forEach( title => title.closest('li').classList.remove('active'))
        // footer_titles.forEach( (title,idx) => { 
        //     const isActive = title.closest('li').classList.contains('active');
        //     if(isActive){
              
        //         if( index !== idx) { 
        //             title.closest('li').classList.remove('active') 
        //         } 
        //     }
            
        // })
        // title 에서 열려있는 메뉴는 찾아서 닫아줘야해
       

        // footer_titles.closest('li').classList.remove('active')
        
    }

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
    //footer_menu();

    footer_menu2();

})
  