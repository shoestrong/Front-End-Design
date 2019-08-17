// const comp = require('../algorithm/combination-algorithm/comp')

import comp from '../algorithm/combination-algorithm/comp'

test(`23 == ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']`, () => {
  expect(comp('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
});