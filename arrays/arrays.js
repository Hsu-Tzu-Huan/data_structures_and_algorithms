const strings = ['a', 'b', 'c', 'd'];
// if 32 bit system: 
//4 items * 4 shelfs = 16 bytes of storage

//access 
strings[2] //O(1)

//push
strings.push('e'); //O(1)

//pop
strings.pop();
strings.pop(); //O(1)

//unshift 
//add something at the beginning of the array
strings.unshift('x'); //O(n), since we need to shift all the item to the next index.

//splice
strings.splice(2, 0, 'alien');  //O(n), similar to unshift operation

console.log(strings)