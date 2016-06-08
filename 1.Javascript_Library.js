var _ = {
   map: function() {},
   reduce: function() {},
   find: function() {},
   filter: function() {},
   reject: function(list, predicate) {
     var newArr = [];
     for (var i = 0; i < list.length; i++) {
       if(!predicate(list[i])){
         newArr.push(list[i]);
       }
     }
     return newArr;
   }
 }
// you just created a library with 5 methods!
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); //should return [2, 4, 6] after you finish implementing the code above
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);
// => [1, 3, 5]
