

var words = ["ground", "control", "to", "major", "tom"];


function map(arr, tranformFunc){
  var outputArr = [];
  for( var i =0; i <arr.length; i++){
    outputArr.push(tranformFunc(arr[i]));
  }
  return outputArr;
};

console.log(
  map(words, function(word){
  return word.length;
})
  );

console.log(
  map(words, function(word){
  return word.toUpperCase();
})
  );

console.log(
  map(words, function(word){
  return word.split(''.reverse().join('');
})
  );




//[2 10 12 14]