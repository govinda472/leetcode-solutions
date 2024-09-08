/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var p1 = 0;
    var p2 = s.length - 1;
    var S = s.split('');

    while (p2 > p1) {
        while (p1 < p2 && !vowels.includes(S[p1].toLowerCase())) {
            p1++;
        }
        while (p1 < p2 && !vowels.includes(S[p2].toLowerCase())) {
            p2--;
        }
        if (p1 < p2) {
            var temp = S[p1];
            S[p1] = S[p2];
            S[p2] = temp;
            p1++;
            p2--;
        }
    }
    
    return S.join('');
};
