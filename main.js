const menu = document.querySelector('.fa-bars');
const cartelera = document.querySelector('.bt_1');
const pronto = document.querySelector('.bt_2');
const opciones = document.querySelector('.bt_3');
const comida = document.querySelector('.bt_4');
const user = document.querySelector('.fa-user');
const mostrar_cartelera = document.querySelector('.cartelera');
const estrenos = document.querySelector('.estrenos');
const other = document.querySelector('.other');
const users = document.querySelector('.users');

cartelera.addEventListener('click', toggleCartelera);
pronto.addEventListener('click', toggleEstrenos);
opciones.addEventListener('click', toggleOtros);
user.addEventListener('click', toggleUsers);

function toggleCartelera() {
    mostrar_cartelera.classList.toggle('inactive');
    estrenos.classList.add('inactive');
    other.classList.add('inactive');
    users.classList.add('inactive');
}

function toggleEstrenos() {
    estrenos.classList.toggle('inactive');
    mostrar_cartelera.classList.add('inactive');
    other.classList.add('inactive');
    users.classList.add('inactive');
}

function toggleOtros() {
    other.classList.toggle('inactive');
    mostrar_cartelera.classList.add('inactive');
    estrenos.classList.add('inactive');
    users.classList.add('inactive');
}

function toggleUsers() {
    users.classList.toggle('inactive');
    mostrar_cartelera.classList.add('inactive');
    estrenos.classList.add('inactive');
    other.classList.add('inactive');
}