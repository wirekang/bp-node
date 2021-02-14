import Counter from 'counter';

const counter = new Counter();
const print: string[] = [];
counter.increase();
print.push('1');
counter.increase(3);
print.push('+3');
counter.decrease(2);
print.push('-2');
console.log(print.join(''), '=', counter.count);
