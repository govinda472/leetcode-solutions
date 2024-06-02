/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    

    let sum=0;
    for(let i=0; i<arr.length; i++){
        
        for(let l=1; l + i<=arr.length; l+=2){
            let sub=0;
            for(let j=i; j<l+i; j++){
                sub+=arr[j];
            }
            sum+=sub;
        }
        
    }
    return sum;

    
    
    
};
