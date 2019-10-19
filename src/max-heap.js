const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;	
	}

	push(data, priority) {
		var node = new Node (data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.length++;
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;
	}

	isEmpty() {
		if (this.root === null) {
			return true;
		} else {
			return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	insertNode(node) {
		if ( this.root === null) {
			this.root = node;
			this.parentNodes[0] = node;
		}
	}

	shiftNodeUp(node) {
		if (node.parent == null) {
			this.root = node;
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
