//객체
let obj = {
    a: 10
}

obj.b = 20
console.log(obj);

let a = 10;
let obj = {
	a: a
};
console.log(obj.a);
let obj = {
	a
};

let josh = {
    coding: function () {
        console.log('코딩');
    }
}
josh.coding();
let capt = {
    coding() {
        console.log('코딩');
    }
}
capt.coding();

//배열
var arr = [];
arr[0] = 10;
console.log(arr);
arr[1] = 20;
console.log(arr);
console.log(arr.length);

var arr = [];
arr.push(10);
console.log(arr);
arr.push('a');
console.log(arr);
arr.pop();
console.log(arr);
arr.splice(0, 1)
console.log(arr);

//forEach
var arr = ['a','b','c'];
arr.forEach(function(value) {
    console.log(value);
})

//map, filter
var arr = [10, 20, 30];
arr.map(function(item) {
    return item*10;
})
arr.map(function(a) {
    return a-10;
})
arr.filter(function(item) {
    if(item==10){
        return true;
    }
})

var arr = [10, 20, 30];
var newArr = [];
arr.forEach(function(item){
    newArr.push(item);
});
console.log(newArr);
arr.forEach(function(item){
    newArr.push(item*10);
});
console.log(newArr);
arr.forEach(function(item){
    if(item==10){
        newArr.push(item);
    }
});
console.log(newArr);