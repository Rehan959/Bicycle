window.addEventListener('scroll',()=>{ 
    const header = document.querySelector('ul')
    header.classList.toggle("sticky",window.scrollY>0)
});