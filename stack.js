class Stack {
    constructor() {
        this.items = {};
        this.top = 0;
    };

    push(data) {
        this.top++;
        this.items[this.top] = data;
    };

    pop() {
        if(this.top === 0) {
            return null;
        };

        let deletedData = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return deletedData;
    };

    getSize() {
        return this.top;
    }

    isEmpty() {
        if(this.top === 0) {
            return true
        };

        return false;
    };

    peek() {
        if(this.top === 0) {
            return null
        };

        return this.items[this.top];
    }

    print() {
        let result = '';
        for(let i = this.top; i > 0; i--) {
            result += this.items[i] + " ";
        };

        return result;
    }


};

const stack = new Stack();
stack.push(3);
stack.push(6);
stack.push(7);
stack.pop();

console.log(stack);
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack.print());