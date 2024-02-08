class Solution:
    def rob(self, nums: List[int]) -> int:
        l=len(nums)
        if l==1:
            return nums[0]
        if l==2:
            return max(nums[0],nums[1])
        n=nums[0]+nums[2]
        dp=[nums[0],nums[1],n]
        if l==3:
            return max(dp)
        count=3
        while count<l:
            temp=nums[count]+max(dp[count-2],dp[count-3])
            dp.append(temp)
            count=count+1
        l2=len(dp)
        m=max(dp[l2-1],dp[l2-2])
        return m