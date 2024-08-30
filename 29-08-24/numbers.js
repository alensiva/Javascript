function NumberPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let space = '';
        
        for (let s = 0; s < rows - i; s++) {
            space += ' ';
        }
        
        for (let j = 1; j <= 2 * i - 1; j++) {
            space += j;
        }
        
        console.log(space);
    }
}

NumberPyramid(5);
