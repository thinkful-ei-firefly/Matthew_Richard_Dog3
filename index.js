/* eslint-disable indent */
'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      if (responseJson.status === 'success') updateHtml(responseJson.message);
      else updateErrorHtml(responseJson.message);
    })
  .catch(error => {
    updateErrorHtml(error.message);
  });
}

function main() {
  $('.form').on('submit', e => {
    e.preventDefault();
    let breed = $('.breed').val();
    console.log(breed);
    getDogImage(breed.toLowerCase());
  });
}

function updateErrorHtml(errorMsg) {
  $('.results').html(`<p>${errorMsg}</p>`);
}

function updateHtml(url) {
  $('.results').html(`<img src=${url}>`)
}

$(main);


