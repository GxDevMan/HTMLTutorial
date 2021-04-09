/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class Queue {
    constructor() {
        this.size = 100;
        this.firstpointer = -1;
        this.lastpointer = -1;
        this.x = Array(this.size);
    }
    setsize(input) {
        if (x > 0) {
            this.size = input;
            this.x = new Array(x);
        }
    }
    clear() {
        this.firstpointer = -1;
        this.lastpointer = -1;
    }
    isEmpty() {
        return (this.firstpointer === -1 && this.lastpointer === -1);
    }
    isFull() {
        return ((this.lastpointer + 1) % this.size === this.firstpointer);
    }
    enqueue(any) {
        if (this.isFull()) {
            return -999;
        }
        if (this.isEmpty()) {
            this.firstpointer = 0;
        }
        this.lastpointer = (this.lastpointer + 1) % this.size;
        this.x[this.lastpointer] = any;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        var store = this.x[this.lastpointer];
        if (this.firstpointer === this.lastpointer) {
            this.clear();
        } else {
            this.firstpointer = (this.firstpointer + 1) % this.size;
        }
        return store;
    }
    printAll() {
        if (this.isEmpty()) {
            return null;
        } else {
            var store = "";
            for (var i = 0; i < this.size; i++) {
                store = this.x[i] + " ";
            }
            return store;
        }

    }
}