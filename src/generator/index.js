function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen()
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterable(array){
    for (const iterator of array) {
        yield iterator
    }
}

const array = [1,5,10,15,17,20,25]
const iter = iterable(array)
console.log(iter.next());