class Queue {

    constructor() {
        this.items = {};
        this.front = 0;
        this.end = 0;
    }

    enqueue(data) {
        this.items[this.end] = data;
        this.end++;
    }

    dequeue() {
        if(this.front === this.end) {
            return null;
        };

        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data;
    };

    getSize() {
        return this.end - this.front;
    };

    itsEmpty() {
        if(this.end === this.front) {
            return true;
        };

        return false;
    }

    peek() {
        if(this.front === this.end) {
            return null;
        };

        return this.items[this.front];
    }

    print() {
        if(this.front === this.end) {
            return null;
        };

        let results = '';
        for(let i = this.front; i < this.end; i++) {
            results += this.items[i] + " ";
        };

        return results;
    }
}

let queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(6);
queue.dequeue();

console.log(queue);
console.log(queue.getSize());
console.log(queue.itsEmpty());
console.log(queue.print());