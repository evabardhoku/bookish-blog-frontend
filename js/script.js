
document.querySelectorAll('.tab').forEach(tab => {

    tab.addEventListener('click', () => {

        let category = tab.getAttribute('data-tab');

        

        console.log(category);

        document.querySelector('.show').classList.remove('show');
        document.querySelector('.bold').classList.remove('bold');

        document.querySelector(`.other-titles.${category}`).classList.add('show');
        tab.classList.add('bold');

    })

})

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.innerHTML = 'View Cart'

        setTimeout(() => {
            btn.setAttribute('href', 'cart.html')
        }, 1000);
        
    })
})