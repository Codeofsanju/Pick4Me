function findMissingLetter(array)
{  
  const letters = ['a','b','c','d','e','f','g','h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var index;
  var comparisonArray;
//  console.log(comparisonArray);

  if(array[0] === array[0].toUpperCase()){
    index = letters.indexOf(array[0].toLowerCase());
    comparisonArray = letters.splice(index, array.length);
    for(var i = 0; i < array.length; i++){
      if(array[i].toLowerCase() !== comparisonArray[i]){
          return comparisonArray[i].toUpperCase();
      }
  }
  }

  else{
    index = letters.indexOf(array[0]);
    comparisonArray = letters.splice(index, array.length);
    for(var i = 0; i < array.length; i++){
          if(array[i] !== comparisonArray[i]){
                  return comparisonArray[i];
            }
        }
    }
}

const arr = ['O','Q','R','S'];
console.log(findMissingLetter(arr));


