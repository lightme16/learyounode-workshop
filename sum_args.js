var result = 0;
process.argv.forEach(function(element){

    if (! isNaN(element))
      result = result + Number(element);
});
console.log(result);
