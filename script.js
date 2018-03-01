let wr = (msg = '--------') => document.write(`<br>${msg}`);

function factorial(num) {
	if (num < 2) return 1;
	return num * factorial(num - 1);
}
wr('Factorial');
wr(factorial(5));
