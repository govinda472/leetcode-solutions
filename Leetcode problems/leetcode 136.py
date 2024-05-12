class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        val=0
        for i in nums:
            val=val^i
        return val
