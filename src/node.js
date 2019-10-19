class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.left = null;
		this.right = null;
		this.parent = null;
	}

	appendChild(node) {
		if (this.left === null) {
			node.parent = this;
			this.left = node;	
		} else if (this.right == null) {
			node.parent = this;
			this.right = node;	
		}
	}

	removeChild(node) {
		if (this.left === node) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right === node) {
			this.right.parent = null;
			this.right = null;
		
		} else {
			throw ('') ;
		}
		
		node.parent = null;

	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
