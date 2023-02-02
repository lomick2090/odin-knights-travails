class position {
    constructor(coordinates) {
        this.start = coordinates;

        this.moves = [];

        this.buildMoveTree = (coordinates = this.start) => {
            for (let i = -2; i <=2;i++) {
                if (i == 0) {
                    continue;
                } else if (i % 2 == 0) {
                    for (let j = -1; j<= 1; j = j+2) {
                        let a = coordinates[0]+i;
                        let b = coordinates[1]+j;
                        if (a > 8 || b > 8 || a < 1 || b < 1) {
                            continue;
                        }
                        this.moves.push((new position([a,b])));
                    }

                } else {
                    for (let j = -2; j<=2; j = j+4) {
                        let a = coordinates[0]+i;
                        let b = coordinates[1]+j;
                        if (a > 8 || b > 8 || a < 1 || b < 1) {
                            continue;
                        }
                        this.moves.push((new position([a,b])));
                    }
                }
            }
        };
    }
}

function knightMoves(init, end) {

    let square = new position(init);
    if (square.start[0] == end[0] && square.start[1] == end[1]) {
        finished = true
    };
    square.buildMoveTree();
    square.moves.forEach(move1 => {
        move1.buildMoveTree();
        console.log(move1)
        move1.moves.forEach(move2 => {
            move2.buildMoveTree();
            move2.moves.forEach(move3=> {
                move3.buildMoveTree();
                move3.moves.forEach(move4=> {
                    move4.buildMoveTree();
                    move4.moves.forEach(move5 => {
                        move5.buildMoveTree();
                    })
                })
            })
        })
    });
    console.log(JSON.stringify(square, null, 5))
}

knightMoves([5,5],[5,5]);