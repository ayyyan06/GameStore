const switchMode = document.querySelector('.switch')

switchMode.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper')
    const sales = document.querySelector('.sales-name')
    const games = document.querySelector('.games__title')
    console.log(wrapper)
    console.log(sales)
    if(wrapper.classList.contains('black')){
        wrapper.classList.remove('black')
        // sales.classList.remove('black')
        sales.classList.remove('black')
        sales.style.color = 'black'
        sales.style.borderBottom = '1px solid black'
        games.style.color = 'black'
        games.style.borderBottom = '1px solid black'
    }
    else{
        wrapper.classList.add('black')
        sales.classList.add('black')
        sales.style.color = 'white'
        sales.style.borderBottom = '1px solid white'
        games.style.color = 'white'
        games.style.borderBottom = '1px solid white'



    }
})
