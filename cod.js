const navitem = document.querySelectorAll('.nav-item');


navitem.forEach(nav=>{
    nav.addEventListener('mouseenter', ()=>{
        if(nav.children.length > 1){
            nav.children[1].style.top = "47px";

            nav.children[1].addEventListener('mouseleave', ()=>{
                nav.children[1].style.top = "-300px"
            })
        }

    })
})

