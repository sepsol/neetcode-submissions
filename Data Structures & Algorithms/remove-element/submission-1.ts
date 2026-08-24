class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let count: number = 0;

        for (let i = 0, l = nums.length; i < l; i += 1) {
            if (nums[i] === val) {
                delete nums[i];
            } else {
                nums[count] = nums[i];
                if (i !== count) {
                    delete nums[i];
                }
                count += 1;
            }
        }

        return count;
    }
}
