//*Time Complexity is not equalt to time taken by the program to run because it depends on the processor of the device i.e for older machines code may run slow and on latest machines code may run fast

//*What is time complexity?
//*It is the rate at which time taken increases with respect to input size.
//we measure time complexity using Big O(noOfStepsCodeWillTake) notation

//For example:
/* for(let i=0;i<n;i++){console.log(i)};
step 1 is: i=0
step 2 is: check if i<5
step 3 is: console.log(i)
step 4 is: i++
step 5 is: check if i<5
repeat until i>=5

Here loop will run for 5 times and each time it will do 3 tasks i.e check if i<5, print i, icrement i
that means 3 steps for each iteration for N iterations i.e 3x5 = 15 steps in total
so the T.C. Will be Big O(15)

we cant measure T.C. like this instead we use some rules
*Rule 1: always compute TC in terms of worst case scenario
*For example: 
if(marks<25) {
    console.log('D')
}else if(marks<45){
    console.log('C')
}else if(marks<65){
    conosle.log('B')
}else{
    console.log('A')
}
*So here, 
Best Case: it means the program executes in least operations i.e if marks = 10 then it will require only 2 operations first is check if marks<25 and then print grade 'D' so T.C. will be O(2)
Worst Case: it means at worst what are the no. of operations that program will require so if marks = 80 then no. of operations will be 4 and they are marks<25,marks<45,marks<65 and then print 'A'
so T.C. will be O(4).
Always compute T.C. in worst case scenario and you know the best case

*Rule 2: avoid constants 
*For example: lets say no. of operations code is taking : O(4N^3 + 3N^2 +8)
if N = 10^5 then operations would be : O(4(10)^15+3(10)^10+8) so here we can see that 8 is negligible as compared to other two terms hence we ignore constants in T.C because constants have less significance whenever input size is very large.

*Rule 3: avoid lower values
*For example: lets say no. of operations code is taking : O(4N^3 + 3N^2) for N = 10^5
So here also O(4(10)^15+3(10)^10) adding 10^10 to 10^15 will not have much significance bz it is like adding 1 in 100000 so we will avoid lower values like this.

*Big O, Theta, Omega
Big O : worst case complexity,upper bound
Theta : avg case
Omega : best case, lower bound

Question 1:
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
    block of code in constant time
    }
}
T.C will be O(N^2) after avoiding constants and lower values

Question 2:
for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
    block of code in constant time
    }
}
for i=0 ,j[0]
for i=1 ,j[0,1]
for i=2 ,j[0,1,2]
for i=3 ,j[0,1,2,3]
for i=4 ,j[0,1,2,3,4]
for i=n-1 ,j[0,1,2,3,4,...n-1]
we can say that operations are 1,2,3,4,5...n i.e sum of n natural numbers
T.C = O(N*(N+1)/2) =>exact TC is O(N^2/2 + N/2) => O(N^2/2)

*SPACE COMPLEXITY : It is memory space that your program take
Again we will use Big O notation for measuring S.C.

Space Complexity = Auxillary space + Input Space
Auxillary space is space that you take to solve the problem and input space is space you take to store input
example: lets say we have two inputs as below 
let a=2,b=4,c;
c = a+b
here a and b are inputs so it's space is called as input space
and c is variable that is used to solve the problem hence its space is called as auxillary space 

Space Complexity : O(3)

for array of size N i.e let a = [1,2,3,4,...N]
S.C. = O(N)

if you do 
a,b
b = a+b
its not good bcz data might be used in other places and you are manipulating the data
dont tamper with data given to you

Note: In coding competitions there will be mentioned that Time Limit: 1s,2s,3s so this basically means that T.C is O(10^8) after avoiding constants and lower values because most of platforms have servers that take 1s to do 10^8 operations and if time limit is 5s then it means 5x10^8 operations
*/
