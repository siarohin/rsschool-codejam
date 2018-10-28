function sumOfOther(arr) {
	const summ = arr.reduce((acc, el) => acc + el);
	return arr.map(item => summ - item);	
}