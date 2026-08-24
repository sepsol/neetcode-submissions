class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let consecutiveOnes: number = 0;
        let maxConsecutiveOnes: number = consecutiveOnes;

        for (const num of nums) {
            if (num === 1) {
                consecutiveOnes += 1;
            } else {
                consecutiveOnes = 0;
            }

            if (consecutiveOnes > maxConsecutiveOnes) {
                maxConsecutiveOnes = consecutiveOnes;
            }
        }

        return maxConsecutiveOnes;
    }
}
