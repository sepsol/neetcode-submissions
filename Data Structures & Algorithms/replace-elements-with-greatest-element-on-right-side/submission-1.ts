class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0, n = arr.length; i < n; i++) {
            let rightMax: number = -1;

            for (let j = i + 1; j < n; j++) {
                rightMax = Math.max(arr[j], rightMax);
            }

            arr[i] = rightMax;
        }

        return arr;
    }
}
