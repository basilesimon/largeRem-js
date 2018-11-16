# Largest remainder calculator

From an array of numbers with decimals that add to 100, returns an array of integers that still add to 100 while keeping the least worst roundings.

Example:

```js
const foo = [20.4, 60.3, 19.3];

foo.reduce((a, b) => a + b);
// The sum is 100

foo.map(e => Math.round(e));
// [20, 60, 19], which sum is 99!

largeRem(foo);
// [21, 60, 19]
```

The sum of the rounded integers being 99, we need to increment one of the array elements by one. We pick the item which is arithmetically closest to the next largest integers (ie which remainder is the largest).

### Installation

```bash
$ yarn add large-rem-js
```

### Usage

```js
import { largeRem } from 'largeRem-js';

try {
  largeRem([20.5, 60.3, 19.2]);
} catch (e) {
  console.log(e);
}
// returns [21, 60, 19]
```

```js
try {
  largeRem([10, 10]);
} catch (e) {
  console.log(e);
}
// logs an error
```

### Use case

![Screenshot of The Sunday Times divorce survey](https://github.com/basilesimon/largeRem-js/blob/master/screenshot.png)

In this [divorce survey for The Sunday Times](https://www.thetimes.co.uk/article/meet-the-new-breed-of-happy-divorcee-women-who-are-empowered-positive-and-thrilled-to-be-single-7skzg3k8s), `large-rem-js` was used to consistently render 100 circles on the page. Previous roundings of these numbers gave us either 99 or 101 circles, as you'd expect.

In this instance, the circles were laid out using `d3-grid`.
