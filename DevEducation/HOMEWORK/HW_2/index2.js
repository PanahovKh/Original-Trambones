//# 1

const getFullSquare = num => {
    let str = '';

    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            str += '*';
        }
        str += '\n';
    }

    return str;
}
console.log(getFullSquare(5));


//# 2

const getEmptySquare = num => {
    let str = '';

    for (let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            if(row === 0 || row === num-1 || column === 0 || column === num -1) {
                str += '*';
            } else str += ' ';
            
        }
        str +='\n';
    }

    return str;
}
console.log(getEmptySquare(5));

//# 3

 const getFullTriangle = num => {
    let str = '';

    for(let row = 0; row < num; row++) {
        for(let column = 0; column < num; column++) {
            if(column + row < num ) {
                str +=  '*';
            } 
        }
        str += '\n';
    }
    return str;

}
console.log(getFullTriangle(5));

//# 4

const getEmptyTriangle = num => {
    let str = '';

    for(let row = 0; row < num; row++) {
        for(let column = 0; column < num; column++) {
            if(row === 0 || column === 0 || row + column === num - 1) {
                str += '*';
            } else str += ' ';
        }
        str += '\n';

    }
    return str;
}
console.log(getEmptyTriangle(5));


//# 5 
const getEmptyWathc = num => {
    let str = '';

    for( let row = 0; row < num; row++) {
        for (let column = 0; column < num; column++) {
            if(row === 0 || row === num - 1 - column || row === num - 1 || row === column) {
                str += '*';
            } else str += ' ';
        }
        str += '\n';
    }
    
    return str;
}
 console.log(getEmptyWathc(5));









