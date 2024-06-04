/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for(i=0; i<nums.length; i++){
        if(map[nums[i]]!=undefined){
            return true;
        }
        else{
            map[nums[i]]=true
        }
    }
    return false
};
