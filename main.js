import {
    fromEvent,
    generate,
    Observable,
    range,
    of,
    concatMap,
    delay } from "rxjs";


// Generate number events sequentially (deterministically) in the range 1..10
// with only the time randomized
//
// Note the use of the nested .pipe() function, which accepts
// pipeable operators. Pipeable operators are pure functions which
// accept an Observable as an argument and return another Observable

range(1, 10).pipe(
    concatMap(i =>
        of(i)
        .pipe(
            delay(1000 + (Math.random() * 4000))
        )
    )
).subscribe(val => { console.log(val); });


// From 'RxJS in Action", Chapter 3
//
// Generate an infinite stream of number events with
// randomized delays inbetween

const s = new Observable( observer => {
  let i = 0;
  setInterval(()=>{
    observer.next(i++);
  }, 500);
});

let observable_1 = range(1, Number.POSITIVE_INFINITY);
let observable_1_str = JSON.stringify(observable_1, null, 2);

let names = Object.getOwnPropertyNames(observable_1);
let names_str = JSON.stringify(names, null, 2);

console.log(`names: ${names_str}\n ---- \n${observable_1_str}`);
console.log(`keys: ${Object.keys(observable_1)}`);

// observable_1.subscribe(val => {console.log(val);});

// Next: try the generate() operator from RxJS

let initial_state = 0;
let obs_2 = generate(initial_state, );


//              TOPICS / Datatypes
//
// - Observable.pipe()
// - Observer
//      - Subscriber
//          - implements Observer
//          - extends Subscription
//          - all Observers get converted to a Subscriber, in order
//            to provide Subscription-like capabilities such as unsubscribe.
//            Subscriber is a common type in RxJS, and crucial for
//            implementing operators, but it is rarely used as a public API.
// - Subscription -- returned by Observable.subscribe()