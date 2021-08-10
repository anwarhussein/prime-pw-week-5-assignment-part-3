console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.
// Add a function named `addToCollection`. This function should:
// Take in the album's `title`, `artist`, `yearPublished` as input parameters
// Create a new object having the above properties
// Add the new object to the end of the `collection` array
// Return the newly created object
let collection = [];

function addToCollection(title, artist, yearPublished){
  const albumObj = {
    title: 'indha deeraley',
    artist:'Saada Ali',
    yearPublished: 1991
}
  collection.push(albumObj);
  return albumObj;
}
//Test the `addToCollection` function:
//Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
//(Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//Console.log each album as added using the returned value.
//After all are added, console.log the `collection` array.
