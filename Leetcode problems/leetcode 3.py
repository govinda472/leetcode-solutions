class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        vis=[]
        l=len(s)
        p1=0
        p2=0
        m=0
        while p2<l and p1<l:
            if not s[p2] in vis:
                vis.append(s[p2])
            else:
                while not s[p2]==s[p1]:
                    vis.remove(s[p1])
                    p1=p1+1
                p1=p1+1
            p2=p2+1
            m=max(m,(p2-p1))
        return m