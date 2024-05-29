/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    s2=new Array(s.length);
    count=0;
    while(count<s.length){
        pos=indices.at(count);
        s2[pos]=s[count];
        count=count+1;
    }
    return s2.join('');
};
