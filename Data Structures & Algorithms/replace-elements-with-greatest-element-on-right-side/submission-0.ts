class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        for (let i = 0, l = arr.length; i < l; i += 1) {
            let greatestIndex: number = i + 1;

            if (greatestIndex >= l) {
                arr[i] = -1;
                break;
            }

            for (let j = i + 1; j < l; j += 1) {
                if (arr[j] > arr[greatestIndex]) {
                    greatestIndex = j;
                }
            }

            arr[i] = arr[greatestIndex];
        }

        return arr;
    }
}
