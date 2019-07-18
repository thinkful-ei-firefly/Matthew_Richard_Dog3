'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      updateHtml(responseJson.message);
    });
  //.catch(error => alert('Something went wrong. Try again later.'));
}

function main() {
  $('.form').on('submit', e => {
    e.preventDefault();
    let breed = $('.breed').val();
    console.log(breed);
    getDogImage(breed.toLowerCase());
  });
}

function updateHtml(url) {
  $('.results').html(`<img src=${url}>`)
}

$(main);


