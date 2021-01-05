function addingAllTheWeirdStuff(array1, array2){
    let sumOdds = 0;
    let sumEvens = 0;
    // sum odds and evens in array2
    for(let i=0; i <= array2.length-1; i++){
        if(array2[i]%2===0){
          sumEvens += array2[i]
            }else if(array2[i]%2!==0){
          sumOdds += array2[i]
        }
    }
    // added both sums to array1
      for(let i=0; i<=array1.length-1; i++){
      if(array1[i] < 10){
        array1[i] += sumOdds
      }else{
        array1[i] += sumEvens
      }
    }
      // BONUS
    for(let i=0; i<=array2.length-1; i++){
      if(array2[i] > 20){
        for(let i=0; i<=array1.length-1; i++){
          array1[i] += 1
        }
      }
    }
      return array1
  }
  // Uncomment these to check your work!
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
  console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]