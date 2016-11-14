function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function createMatrix(ARR_SIZE) {
    var result = [];

    for (var i = 0; i < ARR_SIZE; i++) {
        result[i] = [];
        for (var j = 0; j < ARR_SIZE; j++) {
            result[i][j] = rand(0, 99);
        }
    }
    return result;
}

var arr = createMatrix(10);
console.table(arr);

// 1) Пройти  массив по периметру ПРОТИВ часовой стрелки.

var border = {
    top: arr[0].slice(1, arr[0].length - 1).reverse(),
    right: [],
    bottom: arr[arr.length - 1].slice(1, arr[arr.length - 1].length - 1),
    left: []
};

for (var i = 0; i < arr.length; i++) {
    border.left.push(arr[i][0]);

    border.right.push(arr[i][arr[i].length - 1]);
}

var perimeterCounterClockwise = border.left.concat(border.bottom, border.right.reverse(), border.top);
console.log(perimeterCounterClockwise);

// Пройти треугольник  по периметру 

var borderTriangle = {
        cathetusLeft: [],
        cathetusRight: [],
        cathetusBottom: arr[arr.length - 1].slice(1, arr[arr.length - 1].length - 1),
        mainDiagonal: [],
        secondaryDiagonal: []
    };
// mainDiagonal и secondaryDiagonal состоит из всех элементов находящихся на диагонале
for (var i = 0; i < arr.length; i++) {
    borderTriangle.mainDiagonal.push(arr[i][i]);

    var j = arr.length - 1 - i;
    borderTriangle.secondaryDiagonal.push(arr[i][j]);
}
// cathetusLeft, cathetusRight, СathetusBottom состоит из всех элементов на стороне, кроме крайних
for (var i = 1; i < arr.length - 1; i++) {
    borderTriangle.cathetusLeft.push(arr[i][0]);
    borderTriangle.cathetusRight.push(arr[i][arr.length - 1]);
}
// 3) Пройти треугольник (2 строны + ПОБОЧНАЯ диагональ) по периметру ПРОТИВ часовой стрелки от точки 9-9.

var perimeterTringle2 = [];
perimeterTringle2.push(arr[arr.length - 1][arr.length - 1]);
perimeterTringle2 = perimeterTringle2.concat(borderTriangle.cathetusRight.reverse(), borderTriangle.secondaryDiagonal, borderTriangle.cathetusBottom);
console.log(perimeterTringle2);

// 2) Пройти треугольник (2 строны + ГЛАВНАЯ диагональ) по периметру по часовой стрелки от точки 0-0.
var perimeterTringle = borderTriangle.mainDiagonal.concat(borderTriangle.cathetusBottom.reverse(), arr[arr.length - 1][0], borderTriangle.cathetusLeft.reverse());
console.log(perimeterTringle);


