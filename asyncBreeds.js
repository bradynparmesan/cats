// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, doneProcess) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
 
    console.log("In readFile's Callback: it has the data.");
    if (!error) doneProcess(data);
  });
};


const printOutCatBreed = breed => {
  console.log('Return Value: ', breed)
};


breedDetailsFromFile('Bombay', printOutCatBreed);