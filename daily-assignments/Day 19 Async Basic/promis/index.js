// Challenge 1

function sayHello() {
  setTimeout(()=>{console.log('Hello')},1000)
}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  resolve('Resolved!')
});

// Should print out "Resolved!"
// ADD CODE HERE
promise.then(item=>console.log(item))


// Challenge 3

  promise = new Promise(function(resolve, reject) {
    // ADD CODE HERE
    reject('Reject!')
  })

  // Should print out "Reject!"
  // ADD CODE HERE
  .catch((item)=>console.log(item))


// Challenge 4

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  resolve();
});

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!)); // this comes next
// console.log("I'm not the promise!"); // this comes first 


// Challenge 5
function delay(){
  var promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{ resolve();},1000)
    
  })
  return promise;
}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
 delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise((resolve,reject)=>{ resolve("Second!") })
var firstPromise = new Promise((resolve, reject)=>{ resolve(secondPromise) })

firstPromise.then(item=>console.log(item))




// Challenge 7
const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  var promiseArray = [];
  for (let i = 0; i<3; i++){
    promiseArray.push(fakeAPICall(i))
  }
  Promise.all([promiseArray[0], promiseArray[1], promiseArray[2]]).then(function(values) {
    console.log(values);
  });
}