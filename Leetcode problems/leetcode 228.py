class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        ranges=[]
        l=len(nums)
        count=0
        while count<l:
            temp=nums[count]
            while count<l-1 and nums[count]+1==nums[count+1]:
                count=count+1
            if temp==nums[count]:
                ranges.append(str(temp))
            else:
                ranges.append(str(temp)+"->"+str(nums[count]))
            count=count+1
        return ranges

