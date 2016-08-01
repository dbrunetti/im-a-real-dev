var factors = [];

function isPrime(num) {
	for (var i = 3; i < num; i++){
		if (num === 2){
			return true;
		} else if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function makeFactorsArray(num) {
	var testNum = num;
	//test each number between two and the given number
	for (var i = 2; i <=num; i++){
		if (isPrime(i)) {
			//if the number is prime, see if it is also a factor of testNum
			//if it is, add it to the factors array
			if (testNum % i ===0){
				factors.push(i);
				testNum = testNum / i;
				//reset the counter to find smaller factors first
				i = 1;
			}
		}
	}
	return factors;
}