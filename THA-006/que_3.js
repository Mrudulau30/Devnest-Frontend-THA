//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
//Test Data :
//console.log(first([7, 9, 0, -2]));
//console.log(first([],3));
//console.log(first([7, 9, 0, -2],3));
//console.log(first([7, 9, 0, -2],6));
//console.log(first([7, 9, 0, -2],-3));
//Expected Output :
//7
//[]
//[7, 9, 0]
//[7, 9, 0, -2]
//[]


var first= function (n,x)
{
    if(n==null )
    {
        return void 1;
    }
    if(x<0)
    {
        return [];
    }
    if(x==null )
    {
        return (n[0]);
    }
    if(n!=null && x>=0)
    {
        return n.slice(0,x);
    }
};

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));