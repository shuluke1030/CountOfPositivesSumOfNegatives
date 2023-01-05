function countPositivesSumNegatives(input) {
    let count = 0;
    let sum = 0;

    for(let i = 0; i <= input.length -1 ; i++){
        if(input[i] > 0){
            count = count + 1 ;
        }else if (input[i] < 0){
            sum = sum + input[i]
        }
    }
    return [count , sum]
  }
    