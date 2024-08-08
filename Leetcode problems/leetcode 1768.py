class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        merged=""
        x=len(word1)
        y=len(word2)
        for i in range(max(x,y)):
            if i<x:
                merged=merged+word1[i]
            if i<y:
                merged=merged+word2[i]
        return merged
