function getDogImage() {
  let chosenBreed = $('#dogBreed').val();
  fetch(`https://dog.ceo/api/breed/${chosenBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status == 'error') {
    alert('breed not found');
  }
  else {
    //replace the existing image with the new one
    $('.results-img').replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    );
    //display the results section
    $('.results').removeClass('hidden');
  }
}
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});