class Solution:
    def trailingZeroes(self, n: int) -> int:
        div=5
        c=0
        count=1
        while div**count<=n:
            temp=n/div**count
            c=c+round(temp-0.49999,0)
            count=count+1       
        return int(c)