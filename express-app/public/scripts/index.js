const ul = document.querySelector('ul');

const addChild = (column) => {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(column));
    ul.appendChild(li);
}

const setColumn = (column) => {
    const randomDelay = Math.floor(Math.random() * 5000) + 1;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(addChild(column));
        }, randomDelay);
    });
}

const columns = ['Columna SKT_ID', 'Columna Amount', 'Columna Getway', 'Columna Date', 'Columna Issuer', 'Columna User_id'];

const showColumns = async () => {
    for (let col of columns) {
        await setColumn(col);
    }
}

showColumns();
