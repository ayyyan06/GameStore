// console.log(GAMES)


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


// const game5 = document.querySelector('.gitem5')
// console.log(game5.children[2].dataset.genres)


const sound = document.getElementById('sound')
sound.addEventListener('click', () => {
    let mySound = new Audio('game-images/sound.mp3')
    mySound.play()
    

})



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
            
            // if(image!==0){
            //     show(image-1)
            // }
            // else{
            //     show(2)
            // }
        }
    })
})


document.querySelector('.filter-btn').addEventListener('click', function () {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    
});

// const sw = document.querySelector('button.filter-btn')
// sw.addEventListener('click', () => {
//     if(sound.style.backgroundColor = '#0e1e49'){
//         sound.style.backgroundColor = 'black'
//     }
//     else{
//         sound.style.backgroundColor = '#0e1e49'
//     }
// })






const filter = document.querySelector('.filter-dropdown')

const filterEl = document.querySelectorAll('.filter-el')



filterEl.forEach((genre) => {
    genre.addEventListener('click', (genre) =>{
        genre.preventDefault

        // console.log(genre.target.classList)

        // console.log(className)
        if(genre.target.classList.contains('filterActive')){
            // console.log('asdas', genre, genre.className)
            genre.target.classList.remove('filterActive')
            // showGames(genre)
            // back(genre.target.dataset.filter)
        }
        else{
            // console.log('nooo')
            genre.target.classList.add('filterActive')
            // showGames(genre.target.dataset.filter)
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
            showGameNew(arr)
        }
        else{
            showAll()
        }


    })
})


function showAll(){
    const games = document.querySelectorAll('.game__item')
    games.forEach(item => {
        if(item.classList.contains('disable')){
            item.classList.remove('disable')
        }
    })
}

function showGameNew(arr){
    const games = document.querySelectorAll('.game__item')

    games.forEach((game) => {
        const gameGenre = game.children[2]

        if(arr.includes(gameGenre.dataset.genres)){
            console.log('jbsdkds')
            if(game.classList.contains('disable')){
                console.log(game.classList)
                game.classList.remove('disable')
            }
        }
        else{
            console.log('nooo')
            game.classList.add('disable')

        }

        // if(gameGenre.dataset.genres === genre){
        //     console.log('yeaa')
        // }
        // else{
        //     game.classList.add('disable')
        //     console.log('noo')
        // }
    })
}

function renderGames(games){
    games.forEach(gamesItem => {
        const game = document.createElement(`
            <div class="game__item gitem1">
                <div class="game-img"></div>
                <div class="game-name">CS2</div>
                <div class="game-genres" data-genres="Shooter"><strong>Genres</strong> ${GAMES[0].genre}</div>
                <div class="game-price"><strong>Price</strong>  7500</div>
                <button type="button" class="game-buy">BUY</button>   
            </div>   
        `)
    })
}


function back(genre){
    const games = document.querySelectorAll('.game__item')
    games.forEach((game) => {
        const gameGenre = game.children[2]
        // console.log(genre)
        // console.log(gameGenre    .dataset.genres)
        if(gameGenre.dataset.genres === genre){
            console.log('yeaa')
        }
        else{
            game.classList.remove('disable')
            console.log('noo')
        }
    })
}

function showGames(genre){
    const games = document.querySelectorAll('.game__item')
    games.forEach((game) => {
        const gameGenre = game.children[2]
        // console.log(genre)
        // console.log(gameGenre    .dataset.genres)
        if(gameGenre.dataset.genres === genre){
            console.log('yeaa')
        }
        else{
            game.classList.add('disable')
            console.log('noo')
        }
    })
}




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
