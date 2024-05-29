class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        suf=[""]*len(s)
        c=0
        for i in indices:
            suf[i]=s[c]
            c=c+1
        s2=""
        for j in suf:
            s2=s2+j
        return s2
