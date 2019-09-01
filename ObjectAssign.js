let c1 = {
    a: 11,
    b: 12,
    c: 14
};

let c2 ={
    b: 22,
    c: 24
};

let c3 ={
    c:34
};

let finalObject = Object.assign({},c1,c2,c3);
console.log(finalObject);