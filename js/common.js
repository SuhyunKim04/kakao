const header_main_btn = () => {
    const main_menu = document.querySelectorAll('.main_btn')
    const dim = document.querySelector('.dimm_bk');

    main_menu.forEach(menu => {
        menu.addEventListener('click', () =>{
            
            menuReset();
            menu.parentNode.classList.add('active')

            console.log(menu.parentNode)
            console.log(menu.parentElement)
            console.log(menu.closest('li'))
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


header_main_btn();