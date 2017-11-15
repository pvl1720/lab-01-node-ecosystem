
## Description
I have values for and and subtract,
domath.add(1,7);
domath.subtract(4,1);
which are later used by my tests to if their product is matching the right value.
Also I have "results" which are set to test if the result is null, instead of a sum of 2 numbers.
arithmetic.add('Aye',7);
expect(results).toEqual(null);

Subtract portion of the tests does the same, it tests to see if results = arithmetic.subtract(4,1);
would be equeal to 3

expect(results).toEqual(3);

and if it is a null,
arithmetic.subtract('naw',1);
expect(results).toEqual(null);
it is set to verify that as well
