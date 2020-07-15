/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}
    let i = 0
    while(i<nums.length){
        res = target -nums[i]
        if(map[res]!=undefined){
            return [map[res],i]
        }
        map[nums[i]] = i
        i++
    }
    return []

};