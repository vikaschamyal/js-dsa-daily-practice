function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },

    decrement: function () {
      count--;
      return count;
    },

    reset: function () {
      count = 0;
      return count;
    }
  };
}

const counter = createCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset();     // 0
counter.increment(); // 1
