let nav = document.querySelector('.naavbar')
console.log(nav);

window.addEventListener('scroll',function(){
    let scroll=window.scrollY
    if(scroll>100){
        nav.style.width=`100%`
        nav.style.top=`0px`
        
    }else{
        nav.style.width=`85%`
        // nav.style.top=`10px`
    }
})