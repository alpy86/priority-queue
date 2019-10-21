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
		if (this.parent === null) return;

        let grandParent = this.parent.parent;
        let tempNode = this;
        let parent = this.parent;
        let left = this.left;
        let right = this.right;
        
        
        if (grandParent === null) {
            tempNode.parent = null;
        } else if ( grandParent !== null ) {
            tempNode.parent = grandParent;
            if (  parent === grandParent.left ) {
                 grandParent.left = tempNode;
            } else if (parent === grandParent.right) {
                grandParent.right = tempNode;
            }
        }
        parent.parent = tempNode; 
        if (parent.left === tempNode ) {
            tempNode.left = parent;
            tempNode.right = parent.right;
            
            
            if (parent.right !== null) {
                parent.right.parent = tempNode;
             }  

        } else if (parent.right === tempNode) {
            tempNode.right = parent;
            tempNode.left = parent.left;
            if (parent.left !== null) {
                parent.left.parent = tempNode;  
            }   
        }
        
        parent.left = left;
        
        if (parent.left !== null) {
            left.parent = parent;
        }
        parent.right = right;
        if (parent.right !== null) {
            right.parent = parent;
        }

        
	} 
}

module.exports = Node;
