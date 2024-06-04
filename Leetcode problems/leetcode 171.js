/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    val=0;
    idx=26**(columnTitle.length-1)
    for(i=0; i<columnTitle.length; i++){
        val=val+(columnTitle[i].charCodeAt()-64)*idx;
        idx=idx/26
    }
    return val;
};
