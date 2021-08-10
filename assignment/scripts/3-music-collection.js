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
    title: title,
    artist:artist,
    yearPublished: yearPublished
}
  collection.push(albumObj);
  return albumObj;
}
console.log(addToCollection('Indha deeraley', 'Saada Ali', 1991));
//Test the `addToCollection` function:
//Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
//(Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//Console.log each album as added using the returned value.
//After all are added, console.log the `collection` array.

console.log(addToCollection('Boomba train','nameless',2003));
console.log(addToCollection('zilizopendwa','Saadia Abdo',1988));
console.log(addToCollection('Rabaaso', 'Abdi Diini',2009));
console.log(addToCollection('nipekitu', 'nameless',2000));
console.log(addToCollection('Mikasi','Ferooz', 2004));
console.log(addToCollection('sema basi', 'Mb dogg', 2006));

console.log(collection);

// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection,
// like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information
// formatted like: TITLE by ARTIST, published in YEAR.

function showCollection(array){
  console.log(array.length);
}
showCollection(collection);
