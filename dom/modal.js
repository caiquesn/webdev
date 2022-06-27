const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

// apertar o botão remove a class invisible da div
buttonOpenModal.onclick = function() {
    modalWrapper
    .classList
    .remove('invisible')
}

// apertar ESC adiciona a class invisible da div
document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if (isEscKey) {
        modalWrapper
        .classList
        .add('invisible')
    }
})
