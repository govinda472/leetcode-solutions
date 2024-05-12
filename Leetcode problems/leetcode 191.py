class Solution:
    def hammingWeight(self, n: int) -> int:
        num=0
        while n>1:
            if n%2==1:
                n=(n-1)/2
                num=num+1
            else:
                n=n/2
        return num+1
