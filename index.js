// Adicionar contato
function addContact() {
    let cName = document.querySelector('#name').value.toUpperCase();
    let cNumber = document.querySelector('#number').value;
    let displayNotification = document.querySelector('#displayNoti');

    if (!cName || !cNumber) {
        displayNotification.innerHTML = 'Por favor, dê mais informações !';
        displayNotification.style.color = 'red';
    } else {
        // Adicionar itens
        localStorage.setItem(cName, cNumber);
        displayNotification.innerHTML = '✔ Contato adicionado com sucesso';
        displayNotification.style.color = 'green';
    }
    setInterval(() => {
        displayNotification.innerHTML = '';
    }, 2000);
}

// Buscar contato
function searchContact() {
    let displayDetail = document.querySelector('#displayContact');
    let displayOutput = document.getElementById('displayContact');
    displayOutput.classList.add('displayContactStyle');
    let searchContactName = document.querySelector('#searchContactName').value.toUpperCase();

    // Buscar item
    let output = localStorage.getItem(searchContactName);
    displayDetail.innerHTML = `${searchContactName} : ${output == null ? " Este contato não existe" : `+55 ${output}`}`;

    searchContactName = '';
}

function reset() {
    location.reload();
}