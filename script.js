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

wr('Bubble Sort');
var bubbleSort = nums => {
	do {
		var swapped = false;
		for (var i = 0; i < nums.length; i++) {
			if (nums[i] > nums[i + 1]) {
				var temp = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return nums;
};
var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
wr(nums);
wr(bubbleSort(nums));
wr();

wr('Insertion Sort');
var insertionSort = nums => {
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] < nums[j]) {
				let spliced = nums.splice(i, 1);
				nums.splice(j, 0, spliced[0]);
			}
		}
	}
	return nums;
};
var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
wr(nums);
wr(insertionSort(nums));
wr();

wr('Merge Sort');
const mergeSort = nums => {
	if (nums.length < 2) {
		return nums;
	}
	const length = nums.length;
	const middle = Math.floor(length / 2);
	const left = nums.slice(0, middle);
	const right = nums.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
	const results = [];

	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return results.concat(left, right);
};

var nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
wr(nums);
wr(mergeSort(nums));
wr();

wr('Quick Sort');
const quickSort = nums => {
	if (nums.length <= 1) return nums;

	const pivot = nums[nums.length - 1];
	const left = [];
	const right = [];

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] < pivot) {
			left.push(nums[i]);
		} else {
			right.push(nums[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};
wr(nums);
wr(quickSort(nums));
wr();

wr('Data Structures - Interfaces');
wr('Set');
wr('Map');
wr('Stack');
wr('Queue');

wr('Data Structures - Implementations');
