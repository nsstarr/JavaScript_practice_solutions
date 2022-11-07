const data = [`A`, `B`, `C`]

//O(n) linear
for (let i = 0; i < data,length; i++){
    console.log(data[i])
}

//O(n^2) quadratic

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++){
     console.log(data[i] + data[j]);   
    }
}

