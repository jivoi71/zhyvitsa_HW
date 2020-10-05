//Taking data from textareas ->

let doc = document;

doc.querySelector('.order__button').addEventListener('click', function () {
    let name = doc.querySelector('#name').value
    let seat = doc.querySelector('#seat').value
    let fcourse = doc.querySelector('#fcourse').value
    let scourse = doc.querySelector('#scourse').value
    let drink = doc.querySelector('#drink').value

    doc.querySelector('.order-list__pay').innerHTML = `
    <div><strong>Name: </strong>${name}</div>
    <div><strong>Number of seat: </strong>${seat}</div>
    <div><strong>First course: </strong>${fcourse}</div>
    <div><strong>Second course: </strong>${scourse}</div>
    <div><strong>Drink: </strong>${drink}</div>
    `;
});