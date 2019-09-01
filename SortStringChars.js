function AlphabetSoup(str) { 

    // code goes here  
    var i;
    var arr = str.split('');
    i = arr.sort();


    return arr.join(''); 
           
  }

  console.log(AlphabetSoup("Vivek"));


