'use strict';


function getDogImage() {
    let answer = document.getElementById("breed").value;
    //console.log(answer)
    fetch(`https://dog.ceo/api/breed/${answer}/images/random`)
    .then((response) => { if(!response.ok) {displayError();} 
    return response;})
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => console.log('Something went wrong. Try again later.'))
}

function displayError() {
  console.log("Sorry, we don't have a picture of that breed!")
  
  $('.altBox').html(`<section class="results hidden"><h2>You're barking up the wrong tree!</h2><p>We don't have a picture of that breed.</section><div class="results-img"></div>`)
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');}



function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //noBreed();
    getDogImage();
  });
}

watchForm();
