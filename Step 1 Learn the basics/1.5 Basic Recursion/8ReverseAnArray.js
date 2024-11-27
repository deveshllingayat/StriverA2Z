//Reverse an array
let arr = [1,3,4,2,5];
function swap(a,b){
    let temp = arr[a];
    arr[a] = arr[b]
    arr[b] = temp;
}
function f(i,arr,n){
    if(i>=n/2) return;
    swap(i,n-i-1)
    f(i+1,arr,n);
}
f(0,arr,arr.length)
console.log(arr)