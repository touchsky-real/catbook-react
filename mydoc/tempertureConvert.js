const tempertureArrayConvert = (tempCelsiusArray) => {
    const tempFahrenheitArray = [];
    for (let i = 0; i < tempCelsiusArray.length;i++) {
        tempFahrenheitArray.push(tempCelsiusArray[i] * 9 / 5 + 32);
    }
    return tempFahrenheitArray;
};


const ArrayConvert = (Array,Function) => {
    const result = [];
    for (let i = 0; i < Array.length; i++) {
        result.push(Function(Array[i]));
    }
    return result;
};

const rectsareas = rects.map( (rect) => (rect.width * rect.height));
