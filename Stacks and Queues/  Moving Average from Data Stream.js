/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = new Queue()
    this.size = size
    this.sum = 0
};

/** 
 * @param {number} val
 * @return {number}
 * Time is O(1)
 * Space is O(n), where is size of queue
 */
MovingAverage.prototype.next = function(val) {
    if (this.queue.size() >= this.size) {
        this.sum = this.sum - this.queue.dequeue()
    }
    this.queue.enqueue(val)
    this.sum = this.sum + val
    return this.sum / this.queue.size()
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */