class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        while n>=4:
            n=n/4
        if n==1:
            return True
        else:
            return False
