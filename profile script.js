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


