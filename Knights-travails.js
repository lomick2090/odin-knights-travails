class position {
    constructor(coordinates) {
        this.start = coordinates;

        this.moves = [];

        this.buildMoveTree = (coordinates = this.start) => {
            for (let i = -2; i <=2;i++) {
                console.log(this.moves)
                if (i == 0) {
                    continue;
                } else if (i % 2 == 0) {
                    for (let j = -1; j<= 1; j = j+2) {
                        console.log(j)
                        let a = coordinates[0]+i;
                        let b = coordinates[1]+j;
                        if (a > 8 || b > 8 || a < 1 || b < 1) {
                            continue;
                        }
                        this.moves.push([a,b]);
                    }

                } else {
                    for (let j = -2; j<=2; j = j+4) {
                        let a = coordinates[0]+i;
                        let b = coordinates[1]+j;
                        if (a > 8 || b > 8 || a < 1 || b < 1) {
                            continue;
                        }
                        this.moves.push([a,b]);
                    }
                }
                console.log(this.moves)
            }
        };
    }
}
board = new position([5,5]);
board.buildMoveTree();
console.log(JSON.stringify(board, null, 4))