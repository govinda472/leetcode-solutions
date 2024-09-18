/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sortedNums = nums.map((num, index) => ({ num, index }));
    sortedNums=sortedNums.sort((a, b) => a.num - b.num)
    var left=0;
    var right= sortedNums.length-1;
    while(right>left){
        sum = sortedNums[left].num + sortedNums[right].num
        if(sum==target){
            return [sortedNums[left].index, sortedNums[right].index]
        }
        else if (sum > target){
            right=right-1;
        }
        else{
            left=left+1;
        }
    }
};
