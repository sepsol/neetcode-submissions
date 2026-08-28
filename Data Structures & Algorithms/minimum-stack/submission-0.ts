class MinStack {
    mainStack: number[];
    minsStack: number[];

    constructor() {
        this.mainStack = [];
        this.minsStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.mainStack.push(val);
        const lastVal = this.mainStack.at(-1);
        const lastMin = this.minsStack.at(-1) ?? lastVal;
        this.minsStack.push(lastVal < lastMin ? lastVal : lastMin);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.mainStack.pop();
        this.minsStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.mainStack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minsStack.at(-1);
    }
}
