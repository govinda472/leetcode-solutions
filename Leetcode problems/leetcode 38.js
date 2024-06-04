/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    r=nums.length -1;
    l=0;
    mid=Math.floor((r+l)/2);
    while(r>=l){
        mid=Math.floor((r+l)/2);
        if(nums[mid]<target){
            l=mid+1;
        }
        else if(nums[mid]>target){
            r=mid-1;
        }
        else{
            return mid;
        }
    }
    return l;
};
