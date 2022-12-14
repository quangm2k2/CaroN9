function equals3(a, b, c) {
	return a == b && b == c && a != "";
}

function checkWinner() {
	let winner = null;

	// hàng ngang
	for (let i = 0; i < 3; i++) {
		if (equals3(board[i][0], board[i][1], board[i][2])) {
			winner = board[i][0];
		}
	}

	// hàng dọc
	for (let i = 0; i < 3; i++) {
		if (equals3(board[0][i], board[1][i], board[2][i])) {
			winner = board[0][i];
		}
	}

	// đường chéo
	if (equals3(board[0][0], board[1][1], board[2][2])) {
		winner = board[0][0];
	}
	if (equals3(board[2][0], board[1][1], board[0][2])) {
		winner = board[2][0];
	}

	//kiểm tra xem còn ô trống không?
	let openSpots = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (board[i][j] == "") {
				openSpots++;
			}
		}
	}

	//trạng thái kết thúc game
	if (winner == null && openSpots == 0) {
		return "tie";
	} else {
		return winner;
	}
}
