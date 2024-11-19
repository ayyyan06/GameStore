const form = document.getElementById('add-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = document.getElementsByClassName('input-field');
    let hasError = false;

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const errorText = input.parentElement.querySelector('.error-message');
        const incorrectUser = document.querySelector('.incorrectUser')
        const incorrectPassword = document.querySelector('.incorrectPassword')      

        if (errorText) {
            errorText.remove();
        }
        if(incorrectUser) {

            incorrectUser.remove()
        }
        if(incorrectPassword) {
            incorrectPassword.remove()
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
        }
    }


    if (!hasError) {
        const name = document.getElementById('name').value
        const password = document.getElementById('password')
        let userFound = false
        const names = Object.keys(localStorage)
        for(let j = 0; j < names.length; j++){
            if(names[j] === name){
                userFound = true
            }
        }

        if(userFound){
            console.log('Name taken')
        }
        else{
            console.log(password.value)
            localStorage.setItem(name, password.value)
            console.log(localStorage)
            alert('Account created successfully!')
        }
    }
});


