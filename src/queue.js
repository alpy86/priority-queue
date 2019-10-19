const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.heap.size() == this.maxSize) {
			throw ('Max queue size is exceeded');
		}
		this.heap.push(data, priority);
	}

	shift() {
		if (this.heap.size() == 0 ) {
			throw ('The queue is empty, can not shift'); 
		}
		return this.heap.pop();
	}
	size() {

	}

	isEmpty() {

	}
}

module.exports = PriorityQueue;
