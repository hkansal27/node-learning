var a;

function init() {
	a = 1;
}

function incr() {
	var a = a + 1;
}

init()
console.log('value of a after init is %d', a);

incr()
console.log('value of a after incr is %d', a);

