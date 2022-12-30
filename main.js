const img = document.querySelectorAll('.img');


img.forEach(image=>{
    image.addEventListener('click',()=>{
        removeActive();
        image.querySelector('.footer').classList.add('active');
        image.classList.add('active');
    });
})


const removeActive = () =>{
    img.forEach(image=>{
        image.querySelector('.footer').classList.remove('active');
        image.classList.remove('active');
    })
}