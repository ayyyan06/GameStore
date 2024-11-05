renderGames(['Shooter', 'MMO', 'Open World', 'Western', 'Battle Royal'])


const news = document.querySelectorAll('.news__item')

news.forEach(element => {
    element.addEventListener('click', function show(element){
        const next = element.target.nextElementSibling
        console.log(next.classList.value)
        console.log(next)
        if(next.classList.value === 'news__item-descr' || next.classList.value === 'news__item-descr hide'){
            next.classList.toggle('hide')        
        }

    })
});



const images = document.querySelectorAll('.sale')

let image = 0

const controls = document.querySelectorAll('.controls')


function show(next){    
    images[image].classList.remove('active')
    images[next].classList.add('active')
    image = next
}

controls.forEach((contr)=> {
    contr.addEventListener('click', (e)=>{
        if(e.target.classList.value === 'controls next'){
            if(image!== 2){
                show(image+1)
            }
            else if(image === 2){
                show(0)
            }
        }        
        else{
            switch (image) {
                case 0:
                    show(2);
                    break;
                default:
                    show(image - 1);
                    break;
            }
        }
    })
})



// games filter



document.querySelector('.filter-btn').addEventListener('click', function () {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    
});
const filter = document.querySelector('.filter-dropdown')

const filterEl = document.querySelectorAll('.filter-el')



filterEl.forEach((genre) => {
    genre.addEventListener('click', (genre) =>{
        // genre.preventDefault

        if(genre.target.classList.contains('filterActive')){
            genre.target.classList.remove('filterActive')
        }
        else{
            genre.target.classList.add('filterActive')
        }

        let arr = []
        console.log(arr)

        filterEl.forEach(filterItem => {
            if(filterItem.classList.contains('filterActive'))
                {
                arr.push(filterItem.dataset.filter)
            }
        })

        if(arr.length>0){
            console.log(arr)
            renderGames(arr)
        }
        else{
            renderGames(['Shooter', 'MMO', 'Open World', 'Western', 'Battle Royal'])
        }
    })
})



function renderGames(games){
    const gameList = document.querySelector('.games__list')
    if(gameList !== ''){
        gameList.innerHTML = ''
    }
    for(let i = 0; i < games.length; i++){
        GAMES.forEach(item => {
            if(item.genre === games[i]){
                // console.log(item.name)
                const game = document.createElement('div')
                game.className = `game__item gitem${item.id}`
                game.innerHTML = `
                    <div class="game-img"></div>
                    <div class="game-name">${item.name}</div>
                    <div class="game-genres" data-genres="${item.genre}"><strong>Genres</strong> ${item.genre}</div>
                    <div class="game-price"><strong>Price</strong>  ${item.price}</div>
                    <button type="button" class="game-buy">BUY</button>   
                `
                gameList.append(game)
            }
        })   
    }   
}


// games buying

let basket = []

if(localStorage.getItem('basket') === ''){
    console.log('empty', localStorage)
    basket = []
}
else{
    basket = localStorage.getItem('basket').split(',') 
    console.log(basket)   
    console.log('not empty', localStorage)
}
console.log(basket)

const buyGame = document.querySelectorAll('.game-buy')
console.log(buyGame)
buyGame.forEach(x =>{
    x.addEventListener('click', (buy) => {   
        buy = x.parentElement
        value = buy.children[1].innerHTML
        console.log(value)

        let exist = false
        console.log(basket)

        basket.forEach(game => {
            if(game === value){
                exist = true
            }
        })

        if(!exist){
            basket.push(buy.children[1].innerHTML)
            console.log(basket)
            localStorage.setItem('basket', basket)
            console.log(localStorage)
        }
    })
})
console.log(localStorage)


document.querySelector('body').addEventListener('DOM    ')











// function showAll(){
    //     const games = document.querySelectorAll('.game__item')
    //     games.forEach(item => {
    //         if(item.classList.contains('disable')){
    //             item.classList.remove('disable')
    //         }
    //     })
    // }

// function back(genre){
//     const games = document.querySelectorAll('.game__item')
//     games.forEach((game) => {
//         const gameGenre = game.children[2]
//         // console.log(genre)
//         // console.log(gameGenre    .dataset.genres)
//         if(gameGenre.dataset.genres === genre){
//             console.log('yeaa')
//         }
//         else{
//             game.classList.remove('disable')
//             console.log('noo')
//         }
//     })
// }

// function showGames(genre){
//     const games = document.querySelectorAll('.game__item')
//     games.forEach((game) => {
//         const gameGenre = game.children[2]
//         // console.log(genre)
//         // console.log(gameGenre    .dataset.genres)
//         if(gameGenre.dataset.genres === genre){
//             console.log('yeaa')
//         }
//         else{
//             game.classList.add('disable')
//             console.log('noo')
//         }
//     })
// }




// function showGameNew(arr){
//     const games = document.querySelectorAll('.game__item')

//     games.forEach((game) => {
//         const gameGenre = game.children[2]

//         if(arr.includes(gameGenre.dataset.genres)){
//             console.log('jbsdkds')
//             if(game.classList.contains('disable')){
//                 console.log(game.classList)
//                 game.classList.remove('disable')
//             }
//         }
//         else{
//             console.log('nooo')
//             game.classList.add('disable')

//         }
//     })
// }



// const open = document.querySelector('.popup-btn')

// const popup = document.querySelector('.popup')
// open.addEventListener('click', function openPopup(el){
//     el.preventDefault()
//     open.style.backgroundColor = '#8cbae8'
//     popup.classList.remove('close')
// })

// const close = document.querySelector('.popup__close-btn')
// close.addEventListener('click', ()=> {
//     popup.classList.add('close')
// })


// function updateTime() {
//     const clock = document.getElementById('clock');
//     const now = new Date();
//     const time = now.toLocaleTimeString();
//     const date = now.getDate()
//     const month = now.getMonth()
//     const year = now.getFullYear()
//     clock.textContent = `${time}, ${date}, ${month+1}, ${year}`;
// }

// setInterval(updateTime, 1000);
// updateTime(); 
