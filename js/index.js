const passInputCheckbox = document.querySelector('input[type=checkbox]')
const passInput = document.querySelector('input[type=password]')


const hidePass = () => {
    if (passInputCheckbox.checked)
        passInput.setAttribute('type', 'text')
    else
        passInput.setAttribute('type', 'password')
}


passInputCheckbox.addEventListener('click', e => {
        hidePass()
    }
);


