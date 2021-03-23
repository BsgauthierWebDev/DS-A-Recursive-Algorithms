class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class CreateStack {
    constructor() {
        this.top = null
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data,null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node;
        return node.data
    }
}

module.exports = CreateStack