describe('isPrime', function(){
	it("should return false when passed a non-prime number", function(){
		expect(isPrime(8)).toBe(false);
	});

	it("should return true when passed prime number", function(){
		expect(isPrime(11)).toBe(true);
	});

	it("should return true when passed 2", function(){
		expect(isPrime(2)).toBe(true);
	});
	//isPrime works correctly
});

describe('makeFactorsArray', function(){
	it('should return 2 when passed 2', function(){
		expect(makeFactorsArray(2)).toEqual([2]);
	});
});