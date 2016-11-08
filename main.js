// ДЗ
// 1. создать массив на 30 элементов, заполнить случайными числами,
// причем четные элементы заполнить числами больше нуля
// а нечетные - меньше нуля. (подсказка - % это остаток от деления)
// [-33, 55, -9, 48, -2, 1]
// 2. Этот массив пройти циклом и вывести каждый пятый элемент

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// create an array
var arr = [];
for (var i = 0; i < 30; i++) {
    if (i % 2 === 0) {
        arr.push(rand(-100, 0));
    } else {
        arr.push(rand(0, 100));
    }
}

console.log(arr)

 // output of each fifth element 

for (var i = 0; i < 30; i += 5) {
    console.log(arr[i]);
}
