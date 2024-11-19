function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function hasLetters(phone) {
    const letterRegex = /[a-zA-Z]|[а-яА-Я]/;
    return letterRegex.test(phone);
}

const form = document.getElementById('add-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = document.getElementsByClassName('input-field');
    let hasError = false;

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const errorText = input.parentElement.querySelector('.error-message');

        if (errorText) {
            errorText.remove();
        }

        if (input.value === '') {
            input.classList.add('error');
            const textError = document.createElement('div');
            textError.textContent = 'This field is required';
            textError.classList.add('error-message');
            input.parentElement.prepend(textError);
            hasError = true;
        } else {
            input.classList.remove('error');

            if (input.id === 'tele') {
                if (hasLetters(input.value)) {
                    input.classList.add('error');
                    const textError = document.createElement('div');
                    textError.textContent = 'Phone number should not contain letters';
                    textError.classList.add('error-message');
                    input.parentElement.prepend(textError);
                    hasError = true;
                }
            } else if (input.id === 'mail') {
                if (!isEmailValid(input.value)) {
                    input.classList.add('error');
                    const mailError = document.createElement('div');
                    mailError.textContent = 'Invalid email address';
                    mailError.classList.add('error-message');
                    input.parentElement.prepend(mailError);
                    hasError = true;
                }
            }
        }
    }

    if (!hasError) {
        console.log("Form submitted successfully!");
        alert('Form submitted successfully');
    }
});


const switchMode = document.querySelector('.switch')

switchMode.addEventListener('click', () => {
    const wrapper = document.querySelector('body')
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


const burger = document.querySelector('.burger')

burger.addEventListener('click', () => {
    console.log('burger')
    const burgerEl = document.querySelector('.burger-menu').classList
    if(burgerEl.contains('burger-disable')){
        burgerEl.remove('burger-disable')
    }
    else{
        burgerEl.add('burger-disable')
    }
})
