// # Data Structures

// These free programming courses are meant to help yo deal with large and complex data stuctures that you may not yet be familiar with.

// Working through the courses below, you will learn about each type of data structure, and implement algorithms to reinforce your understanding of them.





// ## Typed Arrays

// Arrays are JavaScript objects that can hold a lot of different elements

// let complexArr = [1, 5, "2", "Word", { "name": "James"}];

// Basically what happens in the background is that your browser will automaticall give the right amount of memory space for that array. It will also change as needed if you add or revove data.

// However, in the world of high performance and different element types, sometimes you need to be more specific on how much memory is given to an array.

// Typed arrays are the answer to this problem. you are now able to say hwo much memory you want to give an array. Bellow is a basic overview of the different types of arrays available and the size in bytes for each element in the array.

/*
|       Type        | Each element size in bytes |
|-------------------|----------------------------|
| Int8Array         |             1              |
| Uint8Array        |             1              |
| Uint8ClampedArray |             1              |
| Int16Array        |             2              |
| Uint16Array       |             2              |
| Int32Array        |             4              |
| Float32Array      |             4              |
| Float64Array      |             8              |
|-------------------|----------------------------|
*/

// There are two ways in creating these kind of arrays. One way is to create it directly. Below is how to create a 3 length 'Int16Array'.

// var i8 = new Int16Array(3);
// console.log(i8);
// // Returns [0, 0, 0]

// You can also create a buffer to assign how much data (in bytes) you want the array to take up.

// Note: To create typed arrays using buffers, you need to assign the number of bytes to be a multiple of the bytes listed above.

// Create same Int 16Array Array differently
// var byteSize = 6; // Needs to be multiple of 2
// var buffer = new ArrayBuffer(byteSize);
// var i8View = new Int16Array(buffer);
// console.log(buffer.byteLength); // Returns 6
// console.log(i8View.byteLength); // Returns 6
// console.log(i8View); // Returns [0, 0, 0]

// Buffers are general purpose objects that just carry data. you cannot access them normally. to access them, you need to first create a view.

// i8View[0] = 42;
// console.log(i8View); // Returns [42, 0, 0]

// Note: Typed arrays do not have some of the methods traditional arrays have such as '.pop()' or '.push()'. Typed arrays also fail 'Array.isArray()' that checks if something is an array. Although simpler, this can be an advantage for less sophisticated JavaScript engines to implement them.

// First create a 'buffer' that is 64-bytes. Then create a 'Int32Array' typed array with a view of it called 'i32View'.

// var buffer = new ArrayBuffer(64);
// var i32View = new Int32Array(buffer);






// ## Learn how a Stack Works

// You are probably familiar with a stack of books on your table. you have likely used the undo feature of a text editor. you are also probably used to hitting the back button on your phone to go back to the previous view in your app.

// You know what they have in common? They all store the data in a way so that you can traverse backward.

// The topmost book in the stack was the one that was put there last. If you remove that book from your stack's top, you would expose the book that was put there before the last book and so on.

// If you think about it, in all the above examples, you are getting Last-In-First-Out type of service. We will try to mimic this with our code.

// This data strorage scheme is called a Stack. In particular, we would have to implement the 'push()' method that pushes JavaScript objects at the top of the stack; and 'pop()' method, that removes the JvaScript object that's at the top of the stack at the current moment.

// Here we have a stack of homework assignments represented as an array: '"BIO12"' is at the base, and '"PSY44"' is at the top of the stack.

// Modify the given array and treat it like a 'stack' using the JavaScript methods mentioned above. Remove the top element '"PHY44"' from the stack. Then add '"CS550"' to be the new top element of the stack.

// let homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];
// // Only change code below this line
// homeworkStack.pop();
// homeworkStack.push("CS50");
// console.log(homeworkStack)





// ## Create a Stack Class

// In the last section, we talked about what a stack is and how we can use an array to represent a stack. In this section, we will be creating our own stack class. Although you can use arrays to create stacks, sometimes it is best to limit the amount of control we have with our stacks. Apart from the 'push' and 'pop' method, stacks have other useful methods. Let's add a 'peek', 'isEmpty, and 'clear' method to our stack class.

// Write a 'push' method that pushes an element to the top of the stack, a 'pop' method that removes and returns the element on the top of the stack, a 'peek' method that looks at the top element in the stack, an 'isEmpty' method that checks if the stack is empty, and a 'clear' method that removes all elements from the stack. Normally stacks don't have this, but we've added a 'print' helper method that console logs the collection.

// function Stack() {
//     let collection = [];
//     this.print = function() {
//         console.log(collection);
//     };
//     // Only change code below this line
//     this.push = function (val) {
//         return collection.push(val);
//     }

//     this.pop = function () {
//         return collection.pop();
//     }

//     this.peek = function () {
//         return collection[collection.length - 1];
//     }

//     this.isEmpty = function () {
//         return !collection[0];
//     }
//     this.clear = function() {
//         collection.length = 0;
//     }
//     // Only change code above this line
// };

// const bookStack = new Stack();
// console.log(bookStack.isEmpty())
// bookStack.push("The Complete Book of C Programming");
// console.log(bookStack.peek())
// console.log(bookStack.isEmpty())






// ## Create a Queue Class

// Like stacks, queues are a collection of elements. But unlike stacks, queues follow the FIFO(First-In First-Out) principle. Elements added to a queue are pushed to the tail, or the end, of the queue, and only the element ate the front of the queue is allowed to be removed.

// We could use an array to represent a queue, but just like stacks, we want to limti the amount of control we have over our queues.

// The two main methods of a queue class is the enqueue and dequeue method. The enqueue mehtod pushs an element to the tail fo the queue, and the dequeue mehtod removes and returns the element at teh front of the queue. Other useful mehtods are the front, size, and isEmpty methods.

// Writes an 'enqueue' method that pushes an element to the tail of the queue, a 'dequeue' method that removes and returns the front element, a 'front' mehtod that lets us see the front element, a 'size' method that shows the length, and an 'isEmpty' method to check if the queue is empty.

// function Queue() {
//     let collection = [];
//     this.print = function() {
//         console.log(collection_);
//     };
//     // Only change code below this line
//     this.enqueue = function(value) {
//         collection.unshift(value)
//     };
//     this.dequeue = function() {
//         return collection.pop();
//     };
//     this.front = function() {
//         return collection[collection.length - 1]
//     };
//     this.size = function() {
//         return collection.length;
//     };
//     this.isEmpty = function() {
//         return collection.length < 1 && !collection[0];
//     }




//     // Only change code above this line
// }

// const getInline = new Queue();





// ## Create a Priority Queue Class

// In this challenge you will be creating a Priority Queue. A Priority Queue is a special type of Queue in which items may have additional information which specifies their priority. This could simply represented with an integer. Item priority will override placement order in determining the sequence items are dequeued. If an item with a higher priority is enqueued after items with lower, the higher priority item will be dequeued before all the others.

// For instance, let's imagine we have a priority queue with three items:

// [['kitten', 2], ['dog', 2], ['rabbit', 2]]

// Here the second value (an integer) represents item priority. If we enqueue '['human', 1]' with a priority of '1' (assuming lower priorities are given precedence) it would then be the first item to be dequeued. The collection would look like this: 

// [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]

// We've started writing a 'PriorityQueue' in the code editor. You will need to add an 'enqueue' method for adding items with a priority, a 'dequeue' method for removing and returning items, a 'size' method to return the number of items in the queue, a 'front' method to return the elment at the front of the queue, and finally and 'isEmpty' method that will return 'true' if the queue is empty or 'false' if it is not.

// The 'enqueue' should accept items with the format shown above ('['human', 1]') where '1' represents the priority. 'dequeue' and 'front' should return only the item's name. not its priority.

// function PriorityQueue() {
//     this.collection = [];
//     this.printCollection = function() {
//         console.log(this.collection);
//     };
//     // Only change code below this line
//     this.enqueue = function(stringAndPriority) {
//         this.collection.unshift(stringAndPriority);

//         if(this.collection.length > 1){
//         console.log(this.collection)
//         this.collection.sort((a, b) => {
//             a = a[1];
//             b = b[1];
//             return (a === b) ? 0 : (a < b) ? -1 : 1
//         })
//         }
//     };
//     this.dequeue = function() {
//         const nextInLine = this.collection.pop();
//         return nextInLine[0];
//     };
//     this.size = function() {
//         return this.collection.length;
//     }
//     this.front = function() {
//         return this.collection[0][0]
//     };
//     this.isEmpty = function() {
//         return !this.collection.length;
//     }
//     // Only change code above this line
// };

// const cutInLine = new PriorityQueue;
// console.log(cutInLine.isEmpty());
// cutInLine.enqueue(["firstInline", 2]);
// (console.log(cutInLine.front()))
// cutInLine.enqueue(["secondInline", 1]);
// (console.log(cutInLine.front()))
// console.log(cutInLine.isEmpty());
// cutInLine.enqueue(["thireInline", 3]);
