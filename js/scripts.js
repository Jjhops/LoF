const errorText = document.querySelector(".error_text");
let Password = "Layers-demo#8!gh1%$";

function pusscheck() {
    if(document.getElementById('pass1').value != Password){
        alert('ERROR! Password Not Much.')
        return false;
    }
    if(document.getElementById('pass1').value === Password){
        alert("Your archive password: Layers-demo#5!g")
        window.open('./img/Layers of Fear-demo 1.3.0h.rar')
    }
}

function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
    modal = document.querySelector(modal),
    close = document.querySelector(close)

    const body = document.body

    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        body.classList.add(locked)
    });
    close.addEventListener('click', () => {
        modal.style.display = 'none'
        body.classList.remove('locked')
    });
    modal.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none'
            body.classList.remove('locked')
        }
    })
}
bindModal ('.modal__btn', '.modal__wrapper', '.modal__close')