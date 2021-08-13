console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.
// Add a function named `addToCollection`. This function should:
// Take in the album's `title`, `artist`, `yearPublished` as input parameters
// Create a new object having the above properties
// Add the new object to the end of the `collection` array
// Return the newly created object

let collection = [];
//Add collection function definition
function addToCollection(title, artist, yearPublished, tracks){
  const albumObj = {title, artist, yearPublished, tracks};
  collection.push(albumObj);//Adds the object in the collection
  return albumObj;//returns the object
}
//call the function to add objects in the collection: Adds 7 objects.
console.log(addToCollection('Indha deeraley', 'Saada Ali', 1991,
                          [{name: 'mzeeya', duration: 2},{name: 'kotokoto', duration: 16}]));

//Test the `addToCollection` function:
//Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
//(Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//Console.log each album as added using the returned value.
//After all are added, console.log the `collection` array.

console.log(addToCollection('Boomba train','Nameless', 2003,
                            [{name: 'kilakitu', duration: 5},{name: 'jimjim', duration: 6}]));
console.log(addToCollection('Zilizopendwa','Saadia Abdo', 1988,[{name: 'natapika', duration: 6},
                            {name: 'mayma', duration:100},{name: 'chekacheka', duration: 18}]));
console.log(addToCollection('Rabaaso', 'Abdi Diini', 2009, [{name: 'heblow', duration: 10},
                            {name: 'majimaji', duration: 25},{name: 'kituvitu', duration: 1}]));
console.log(addToCollection('Nipekitu', 'Nameless', 2000, [{name: 'tosha', duration: 5}]));
console.log(addToCollection('Mikasi','Ferooz', 2004, [{name: 'kotokoto', duration: 16}]));
console.log(addToCollection('Sema basi', 'Saadia Abdo', 2006, [{name: 'jimjim', duration: 12},
                            {name: 'sahau', duration: 7}]));

console.log(collection);// Check what is in the collection

// Add a function named showCollection. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection,
// like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information
// formatted like: TITLE by ARTIST, published in YEAR.
//Test the showCollection function.
function showCollection(albums){
  console.log(`The number of items in the array is: ${albums.length}`);
  for (let album= 0; album < albums.length; album++) {//Loop through the all the albums
    console.log(`${albums[album].title} by ${albums[album].artist},
      published in ${albums[album].yearPublished}:`);//Logs all the albums by title, artist and yearPublished
      //for loop over the tracks
      for (let track = 0; track < albums[album].tracks.length; track++) {
          console.log(`${track + 1}. ${albums[album].tracks[track].name}: ${albums[album].tracks[track].duration}`);
      }//logs all the tracks
  }
}
showCollection(collection);

// Add a function named findByArtist. This function should:
// Take in artist (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the collection and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(artist){
  let results = [];// an array to store all the matches
  for (let album of collection) {//loop through the collection
    if(album.artist === artist){//find the match
      results.push(album)//Add in the results array
    }
}
  return results;//return it.
}
console.log(findByArtist('Nameless'));

// STRETCH GOALS
// Create a function called search. This function should:
// Take an input parameter for a search criteria object.
// Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// The returned output from search should meet these requirements:
// Return a new array of all items in the collection matching all of the search criteria.
// If no results are found, return an empty array.
// If there is no search object or an empty search object provided as input,
//then return all albums in the collection.

function search(artist, year, trackName){
  let newAlbums = [];// Stores all the matches
  for (let album = 0; album < collection.length; album++){//Loop through the collection

      for (let track = 0; track < collection[album].tracks.length; track++) {//Loop through the tracks
          if(collection[album].artist === artist && collection[album].yearPublished === year
            && collection[album].tracks[track].name === trackName){//if we find a match
              newAlbums.push(collection[album]);// store it, if no match found newAlbums will be empty.
              return newAlbums;
          }
        }
      }
      return collection;//Otherwise return all collection if no search object or empty search object provided.
    }

console.log(search('Nameless', 2000,'tosha'));
console.log(search('Saadia Abdo', 1988,'natapika'));
console.log(search());
console.log(search('ahfdhhh',2015,'mishimishi'));


// Add an array of tracks to your album objects. Each track should have a name and duration.
//You will need to update the functions to support this new property:
// Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// Update the showCollection function to display the list of tracks for each album with its name and duration.
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
