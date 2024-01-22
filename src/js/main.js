"use strict";

// CONSTANTES
// section lista de series
const sectionList = document.querySelector(".js-div-list");
const serieList = document.querySelector(".js-ul-list");
// section lista de favoritos
const sectionFavorite = document.querySelector(".js-div-favorite");
const favoriteList = document.querySelector(".js-ul-list-favorite");
// section header
const searchInput = document.querySelector(".js-search-input");
const searchBtn = document.querySelector(".js-search-btn");
const resetBtn = document.querySelector(".js-reset-btn");

let containerSerie = [];

let containerSerieFavorite = [];


function handleSearchBtn (event){
  event.preventDefault();
  const inputValue = searchInput.value.toLocaleLowerCase();

  fetch(`https://api.jikan.moe/v4/anime?q=${inputValue}`)
    .then((response) => response.json())
    .then((dataApi) => {
      containerSerie = dataApi.data;
      renderListSeries(containerSerie, serieList);
      localStorage.setItem("serie", JSON.stringify(containerSerie));
    });

};

searchBtn.addEventListener('click', handleSearchBtn);


// función manejadora del evento click para añadir a favoritos
function handleClickCompleteSerie(event) {

    const idSerieList = event.currentTarget.id;
    //console.log(idSerieList);
    
    const findSerie = containerSerie.find((anime) => parseInt(idSerieList) === anime.mal_id);
    //console.log(findSerie)
    //console.log(containerSerie);

    //el index para no meter en favorite si esta
    const indexSerieInFav = containerSerieFavorite.findIndex((anime) => anime.mal_id === parseInt(idSerieList));

    if ( indexSerieInFav === -1){
        containerSerieFavorite.push(findSerie);
        console.log(containerSerieFavorite);
        renderListSeries(containerSerieFavorite, favoriteList);
    }

};

// function deleteSerie (idSerieList) {
//   const indexSerieInFav = containerSerieFavorite.findIndex((anime) => anime.mal_id === parseInt(idSerieList));
//   containerSerieFavorite.splice(indexSerieInFav, 1);
//   localStorage.setItem('serie', JSON.stringify(containerSerieFavorite));
//   renderListSeries(containerSerieFavorite, favoriteList);

// }


// función para escuchar eventos sobre todas las series
function eventSerie() {
  const allSerie = document.querySelectorAll('.js-select');

  for (const completeSerie of allSerie) {
    completeSerie.addEventListener('click', handleClickCompleteSerie);
  }
}



function renderListSeries(arrayListSerie, allContainerList){
  let html = "";
  for (const item of arrayListSerie) {
    html += `<li class="card js-select" id=${item.mal_id}>`;

    html += `<article><img src="${item.images.jpg.image_url}" alt="serie anime">
    <h4>${item.title}</h4></article>`;

    html += `</li>`;
  };
  allContainerList.innerHTML = html;

  eventSerie();

  
}


function getDataLocalStorage() {
  const dataSerie = JSON.parse(localStorage.getItem("serie"));
}
getDataLocalStorage();
