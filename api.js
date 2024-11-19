const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.10&longitude=71.26&current=temperature_2m'

console.log('asd')

async function weather(url){
  const data = await fetch(url)
  const final = await data.json()
  // console.log(final)
  show(final)
}

function show(data){
  const div = document.querySelector('.weather')
  div.textContent = `temperature is ${data.current.temperature_2m}`
  // console.log(data.current.temperature_2m)
}



weather(url)