import { expect } from 'chai';
import Counter from 'counter';

describe('# Counter', () => {
  it('checking counter', () => {
    const counter = new Counter();
    counter.increase(4);
    expect(counter.count).eq(4);
  });
});
