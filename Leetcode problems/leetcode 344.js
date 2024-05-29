/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    left=0;
    right=s.length-1;
    while (left<right){
        temp=s[left];
        s[left]=s[right];
        s[right]=temp;
        left=left+1;
        right=right-1;
    }

};
