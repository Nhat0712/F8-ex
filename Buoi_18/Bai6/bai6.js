
        const chessboard = document.getElementById('chessboard');

        for (let i = 0; i < 8; i++) {
            const row = document.createElement('div');
            row.classList.add('row');

            for (let j = 0; j < 8; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if ((i + j) % 2 === 0) {
                    cell.classList.add('even');
                } else {
                    cell.classList.add('odd');
                }

                row.appendChild(cell);
            }

            chessboard.appendChild(row);
        }