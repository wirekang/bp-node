export default class Counter {
  count = 0;

  increase(by = 1): void {
    this.count += by;
  }

  decrease(by = 1): void {
    this.count -= by;
  }
}
