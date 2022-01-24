const nums = []
var sum = 0
var avg

n = Number(prompt("How many numbers you want?"))

for (i = 0; i < n; i++)
    nums.push(Number(prompt("enter the number")))

for (i = 0; i < n; i++)
    sum += nums[i]
 
avg = sum / n
alert("avg="+avg)