const ul = document.querySelector('ul');

const setColumn = (column) => {
    setTimeout(() => {
        ul.innerHTML += `<li>${column}<li>`
    }, Math.random() * 5000);
}

setColumn('hola');