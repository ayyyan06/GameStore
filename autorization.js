
const form = document.getElementById('add-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = document.getElementsByClassName('input-field');
    let hasError = false;
    let correctLogin = false

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
                correctLogin = true
                const passwordFromStorage = localStorage.getItem(names[j])
                console.log(passwordFromStorage)
                if(password.value === passwordFromStorage){
                    console.log('nicee')
                    window.location.href = 'web_Assignment_1.html'
                }
                else{
                    console.log(password.parentElement)
                    const incorrectPassword = document.createElement('div')
                    incorrectPassword.className = 'incorrectPassword'
                    incorrectPassword.innerText = 'Incorrect Password'
                    password.parentElement.append(incorrectPassword)
                }
            }
        }

        if(!userFound){
            const username = document.getElementById('name')
            console.log(username.parentElement)
            const incorrectName = document.createElement('div')
            incorrectName.className = 'incorrectUser'
            incorrectName.innerText = 'User not found'
            username.parentElement.append(incorrectName)
        }

    }
})


    