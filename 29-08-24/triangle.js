
function Triangles(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += "*";
        }
        console.log(line);
    }
    

    

    for (let i = n; i >= 1; i--) {
        let line = "";
        for (let j = 1; j < i; j++) {
            line += "*";
        }
        console.log(line);
    }
}

const numberOfRows = 5;
Triangles(numberOfRows);
