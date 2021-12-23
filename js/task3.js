// todo Площадь прямоугольника
/*
 * Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами, значения которых будут переданы в параметр dimensions в виде строки. Значения гарантированно разделены пробелом.
 */

function getRectArea(dimensions) {
    let a = Number(dimensions.split(' ')[0]);
    let b = Number(dimensions.split(' ')[1]);

    return a * b;
}

console.log(getRectArea('8 11'));
