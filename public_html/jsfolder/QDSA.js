/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var qtest = {
  size: 100,
  firstpointer: -1,
  lastpointer : -1,
  x: [],
  isEmpty : function() 
  {
      var compare1 = this.firstpointer;
      var compare2 = this.lastpointer;
      return (compare1 === -1 && compare2 === -1);
  },
  setsize: function(x)
  {
      if(x > 0)
      {
          this.size = x;
          this.x = new Array(x);
      }
  },
  clear: function()
  {
      this.firstpointer = -1;
      this.lastpointer = -1;
  },
  isFull: function()
  {
      return ((this.lastpointer+1) % this.size === this.firstpointer);
  },
  enqueue: function(anything)
  {
      if(this.isFull()){return -999;}
      if(this.isEmpty()){this.firstpointer = 0;}
      this.lastpointer = (this.lastpointer+1) % this.size;
      this.x[this.lastpointer] = anything;
  },
  dequeue: function()
  {
      if(this.isEmpty()){return null;}
      var store = this.x[this.lastpointer];
      if(this.firstpointer === this.lastpointer){this.clear();}
      else{this.firstpointer = (this.firstpointer+1)%this.size;}
      return store;
  },
  printall: function()
  {
        for (var i = 0; i < this.size; i++)
        {
            var compile = this.x[i] + " ";
        }
        return compile;
  }
};



