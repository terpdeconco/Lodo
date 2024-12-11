let obj = {
    name: 'Alice',
};

// Define a property descriptor for 'age'
Object.defineProperty(obj, 'age', {
    value: 25,
    writable: true,
    enumerable: true,
    configurable: true
});

// Accessing the descriptor's value
let descriptor = Object.getOwnPropertyDescriptor(obj, 'age');
console.log(descriptor.value);  // Output: 25
