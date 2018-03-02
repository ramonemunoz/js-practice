let wr = (msg = '--------') => document.write(`<br>${msg}`);

function factorial(num) {
	if (num < 2) return 1;
	return num * factorial(num - 1);
}
wr('Factorial');
wr(factorial(5));
wr();

function basicRecursion(max, current) {
	if (current > max) return;
	wr(current);
	basicRecursion(max, current + 1);
}
wr('Basic Recusrion');
basicRecursion(5, 1);
wr();

function fibonacci(n) {
	if (n <= 2) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

wr('Fibonacci');
for (var i = 1; i <= 20; i++) {
	wr(`${i} | ${fibonacci(i)}`);
}
wr();
