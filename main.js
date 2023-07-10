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
const cards_container = document.querySelector('.cards_container');
const bars = document.querySelector('.fa-bars');
const menu_hamburguesa = document.querySelector('.menu_hamburguesa');


cartelera.addEventListener('click', toggleCartelera);
pronto.addEventListener('click', toggleEstrenos);
opciones.addEventListener('click', toggleOtros);
user.addEventListener('click', toggleUsers);
bars.addEventListener('click', toggleMenu);


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

function toggleMenu() {
    menu_hamburguesa.classList.toggle('inactive');
}

const product_list = [];
product_list.push({
    name : 'John Wick 4',
    gender : 'Action',
    image : 'img/John_Wick_4.jpg',
    quality: '8.5',
    duration: '2h 10min'
});

product_list.push({
    name : 'pantalla',
    gender : 450,
    image : 'https://cdn.coordiutil.com/imagen-computador_de_mesa_celeron_pantalla_lg_teclado_y_mouse-1296638-800-600-1-75.jpg'
});

product_list.push({
    name : 'car',
    gender : 650,
    image : ''
});

product_list.push({
    name : 'bike',
    gender : 120,
    image : ''
});

product_list.push({
    name : 'pantalla',
    gender : 450,
    image : ''
});

product_list.push({
    name : 'car',
    gender : 650,
    image : ''
});

product_list.push({
    name : 'John Wick 4',
    gender : 'Action',
    image : 'img/John_Wick_4.jpg',
    quality: '8.5',
    duration: '2h 10min'
});

product_list.push({
    name : 'pantalla',
    gender : 450,
    image : 'https://cdn.coordiutil.com/imagen-computador_de_mesa_celeron_pantalla_lg_teclado_y_mouse-1296638-800-600-1-75.jpg'
});

product_list.push({
    name : 'car',
    gender : 650,
    image : ''
});

product_list.push({
    name : 'bike',
    gender : 120,
    image : ''
});

product_list.push({
    name : 'pantalla',
    gender : 450,
    image : ''
});

product_list.push({
    name : 'car',
    gender : 650,
    image : ''
});

product_list.push({
    name : 'John Wick 4',
    gender : 'Action',
    image : 'img/John_Wick_4.jpg',
    quality: '8.5',
    duration: '2h 10min'
});

product_list.push({
    name : 'pantalla',
    gender : 450,
    image : 'https://cdn.coordiutil.com/imagen-computador_de_mesa_celeron_pantalla_lg_teclado_y_mouse-1296638-800-600-1-75.jpg'
});

product_list.push({
    name : 'car',
    gender : 650,
    image : ''
});

product_list.push({
    name : 'bike',
    gender : 120,
    image : ''
});

product_list.push({
    name : 'pantalla',
    gender : 450,
    image : ''
});

product_list.push({
    name : 'car',
    gender : 650,
    image : ''
});

product_list.push({
    name : 'pantalla',
    gender : 450,
    image : ''
});

product_list.push({
    name : 'car',
    gender : 650,
    image : ''
});

function render_product(arr){
    for (product of arr){
        const product_card = document.createElement('div');
        product_card.classList.add('product-card');
    
        const product_image = document.createElement('img');
        product_image.setAttribute('src', product.image);
    
        const product_info = document.createElement('div');
        product_info.classList.add('product-info');
    
        const product_info_div = document.createElement('div');
        product_info_div.classList.add('product-info-text');
    
        const product_gender = document.createElement('p');
        product_gender.innerText = product.name;
    
        const product_name = document.createElement('p');
        product_name.innerText = product.gender;

        const product_quality = document.createElement('p');
        product_quality.innerText = product.quality;
    
        const product_duration = document.createElement('p');
        product_duration.innerText = product.duration;
    
        product_info_div.appendChild(product_gender);
        product_info_div.appendChild(product_name);
        product_info_div.appendChild(product_quality);
        product_info_div.appendChild(product_duration);
    
        const product_figure = document.createElement('figure');
        const product_img_cart = document.createElement('i');
        product_img_cart.setAttribute('class', 'fa-solid fa-heart like fa-xl');

        product_img_cart.addEventListener('click', toggleHeart);
    
        function toggleHeart() {
            product_img_cart.classList.toggle('like');
        }


        product_figure.appendChild(product_img_cart);
    
        product_info.appendChild(product_info_div);
        product_info.appendChild(product_figure);
    
        product_card.appendChild(product_image);
        product_card.appendChild(product_info);
    
        cards_container.appendChild(product_card);

        

       
        
    }
}

render_product(product_list);