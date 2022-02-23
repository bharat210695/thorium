// Q1.write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing

app.get("/sol1", function(req, res) {

    let array = [1, 2, 3, 5, 6, 7]
    let total = 0;
    for (var i in array) {
        total = total + array[i];
    }
    let last = array.pop()
    let sum = last * (last + 1) / 2
    let missingNumber = sum - total

    res.send({ data: missingNumber });
});


//Q2.write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing


app.get("/sol2", function(req, res) {
    let array = [33, 34, 35, 37, 38]
    let len = array.length
    let total = 0;
    for (var i in array) {
        total = total + array[i];
    }

    let first = array[0]
    let last = array.pop()
    let sum = (len + 1) * (first + last) / 2
    let missingNumber = sum - total

    res.send({ data: missingNumber });
});