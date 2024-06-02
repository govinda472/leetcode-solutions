/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    numspace=0;
    words=[];
    for(i=0; i<text.length; i++){
        if(text[i]!=" "){
            start=i;
            while(text[i]!=" " && i<text.length){
            i++;
            }
            words.push(text.slice(start,i));
        }
        if(text[i]==" "){
            numspace+=1;
        }
    }
    overflow=numspace;
    between_space=0;
    if(words.length>1){
        overflow=Math.max(0,numspace%(words.length-1));
        between_space=(numspace-overflow)/(words.length-1);
    }
    s=words.join(" ".repeat(between_space));
    final=s.concat(" ".repeat(overflow));
    return final;
};
