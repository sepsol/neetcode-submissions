class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const openingBrackets = ['(', '{', '['];
        const expectedClosingBrackets: string[] = [];

        try {
            for (const char of s) {
                if (openingBrackets.some(bracket => bracket === char)) {
                    switch (char) {
                        case '(':
                            expectedClosingBrackets.push(')');
                            break;
                        case '{':
                            expectedClosingBrackets.push('}');
                            break;
                        case '[':
                            expectedClosingBrackets.push(']');
                            break;
                        default:
                            throw new Error('Invalid opening bracket.');
                    }
                } else {
                    if (char === expectedClosingBrackets.at(-1)) {
                        expectedClosingBrackets.pop();
                    } else {
                        throw new Error('Invalid closing bracket.');
                    }
                }
            }

            if (expectedClosingBrackets.length !== 0) {
                throw new Error('Unclosed bracket pairs found.');
            }

            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}
