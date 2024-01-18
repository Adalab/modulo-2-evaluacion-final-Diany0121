'use strict';

// CONSTANTES
const sectionList = document.querySelector('.js-div-list')
const ul = document.querySelector('.js-list');
const favoriteList = document.querySelector('.js-list-favorite');
const sectionFavorite = document.querySelector('.js-div-favorite');
const searchInput = document.querySelector('.js-search-input');
const searchBtn = document.querySelector('.js-search-btn');
const resetBtn = document.querySelector('.js-reset-btn');

let containerSerie = [];

//function getDataApi() {
    //fetch('https://api.jikan.moe/v4/anime?q=naruto')
    //.then(response => response.json())
    //.then(data =>{
        //containerSerie = data.data;
        //console.log(containerSerie);
        //renderSeries(containerSerie);
    //});
//}


for (const item of containerSerie) {
    const li = document.createElement('li');
    ul.appendChild(li);

    const article = document.createElement('article');
    li.appendChild(article);

}

//getDataApi();



// funcion para pintar el array
//function renderSeries (arraySerie) {
    //let html = '';
    //for (const serie of arraySerie) {
        //html += `<li><article>`
    //for (const pepino of data.images) {
        //html += `<img src="" alt="">
        //<h4>${data.name}</h4></article>`;
    //} html += `</li>`;
    //}
    //serieList.innerHTML = html;

    
//}



