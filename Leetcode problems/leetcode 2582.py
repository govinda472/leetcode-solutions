class Solution:
    def passThePillow(self, n: int, time: int) -> int:
        val=(time)%((n-1)*2)
        if val>=n:
            return (n-(val%(n-1)))
        else:
            return (1+val)