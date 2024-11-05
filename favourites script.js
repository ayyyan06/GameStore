basket = localStorage.getItem('basket').split(',')

renderGames(basket)

function renderGames(games){
    const gameList = document.querySelector('.games__list')

    if(games.length === 0 || JSON.stringify(games) === JSON.stringify([''])){
        if(document.querySelector('.games__list').innerHTML === ''){
            console.log('bbi')
            const emptyText = document.createElement('div')
            emptyText.className = 'empty'
            emptyText.textContent = 'You have not chosen any game yet...'
            document.querySelector('.games__list').append(emptyText)
            if(document.querySelector('.sum')){
                document.querySelector('.sum').innerHTML = ''
            }
        }
    }
    else{
        for(let i = 0; i < games.length; i++){
            GAMES.forEach(item => {
                if(item.name === games[i]){
                    const game1 = document.createElement('div')
                    game1.className = `game__item gitem${item.id}` 
                    game1.innerHTML = `
                        <div class="game-img"></div>
                        <div class="game-name">${item.name}</div>
                        <div class="game-genres" data-genres="${item.genre}"><strong>Genres</strong> ${item.genre}</div>
                        <div class="game-price"><strong>Price</strong>  ${item.price}</div>
                        <button type="button" class="game-delete">Delete</button>   
                    `
                    gameList.append(game1)
                }
            })   
        } 
        const sum = document.createElement('div')
        sum.className = 'sum'
        sum.innerHTML = 'your sum'
        document.querySelector('.games').append(sum)
    }
}


document.querySelector('.games__list').addEventListener('click', (e) => {
    if(e.target.classList.contains('game-delete')) {
        const newArr =[]
        const parent = e.target.parentElement
        const name = parent.children[1].innerHTML
        console.log(name)
        console.log('localStorage = ', localStorage)
        console.log('basket = ', basket)
        basket.forEach(item => {
            if(item !== name){
                newArr.push(item)
            }
        })
        console.log('newarr = ', newArr)

        basket = newArr
        localStorage.setItem('basket', basket)
        const restart = document.querySelector('.games__list')
        restart.innerHTML = ''
        renderGames(basket)
        if(document.querySelector('.games__list').innerHTML === ''){
            const emptyText = document.createElement('div')
            emptyText.className = 'empty'
            emptyText.textContent = 'You have not chosen any game yet...'
            document.querySelector('.games__list').append(emptyText)
        }
        else{

        }
    }
})