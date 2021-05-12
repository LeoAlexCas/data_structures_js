class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Node(data, null);
        
        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        };

        this.size++;
    };

    insertAt(data, index) {
        if(index < 0 || index > this.size) {
            return null;
        };

        const newNode = new Node(data);
        let current = this.head;
        let previous;

        if(index === 0) {
            newNode.next = current;
            newNode.head = newNode;
        } else {
            for(let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };

            newNode.next = current;
            previous.next = newNode;
        };

        this.size++;
    };


    print() {
        if(!this.size) {
            return null;
        };

        let current = this.head;
        let results = '';
        while(current) {
            results += current.data + '->';
            current = current.next;
        }
        results += 'X';

        return results;
    };

    removeData(data) {
        let current = this.head;
        let previous = null;

        while(current != null) {
            if(current.data === data) {
                if(!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                };
                this.size--;
                return current.data;
            }
            previous = current;
            current = current.next;
        };

        return null;
    };

    removeFormIndex(index) {
        if(index < 0 || index > this.size) {
            return null;
        };

        let current = this.head;
        let previous = null;

        if(index === 0) {
            this.head = current.next;
        } else {
            for(let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            };
            previous.next = current.next;
        };
        this.size--;
        return current.data;
    }

    isEmpty() {
        if(this.size === 0) {
            return true;
        }
        return false;
    }

    getSize() {
        return this.size;
    }
}

const testNode = new Node('text', null);
console.log(testNode);

const linked = new LinkedList();
linked.add(12);
linked.add(25);
linked.add(26);
linked.add(32);

linked.removeFormIndex(1);

linked.insertAt(99, 2);

console.log(linked.print());
