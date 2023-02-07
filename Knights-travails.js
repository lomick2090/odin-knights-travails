class position {
    constructor(coordinates) {
        this.start = coordinates;

        this.moves = [];

        this.last = null;

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
    let answer = [];

    square.buildMoveTree();
    square.moves.forEach(move1 => {
        move1.buildMoveTree();
        move1.last = square;
        move1.moves.forEach(move2 => {
            move2.buildMoveTree();
            move2.last = move1;
            move2.moves.forEach(move3=> {
                move3.buildMoveTree();
                move3.last = move2;
                move3.moves.forEach(move4=> {
                    move4.buildMoveTree();
                    move4.last = move3;
                    move4.moves.forEach(move5 => {
                        move5.buildMoveTree();
                        move5.last = move4;
                        move5.moves.forEach(move6 => {
                            move6.buildMoveTree();
                            move6.last = move5;
                        })
                    });
                });
            });
        });
    });

    let q = [];
    q.push(square);
    while (q[0]) {
        let current = q.shift();
        if (current.start[0] == end[0] && current.start[1] == end[1]) {
            answer.unshift(current.start);
            while (current.last) {
                current = current.last;
                answer.unshift(current.start)
            };
            return(answer)
        }
        current.moves.forEach(move => q.push(move));
    };
};