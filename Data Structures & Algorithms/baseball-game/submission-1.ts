class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const scores: number[] = [];
        
        for (const operation of operations) {
            let value: number;
            switch (operation) {
                case '+':
                    value = scores.at(-1) + scores.at(-2);
                    scores.push(value);
                    break;
                case 'D':
                    value = scores.at(-1) * 2;
                    scores.push(value);
                    break;
                case 'C':
                    scores.pop();
                    break;
                default:
                    value = Number.parseInt(operation);
                    scores.push(value);
            }
        }

        const sum = scores.reduce((acc, curr) => acc + curr, 0);
        return sum;
    }
}
