var turn = "x";
    var board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    function hasWon(b, p){
        if (b[0][0] == p && b[0][1] == p && b[0][2] == p)
            return true;
    	else if (b[1][0] == p && b[1][1] == p && b[1][2] == p)
    		return true;
    	else if (b[2][0] == p && b[2][1] == p && b[2][2] == p)
    		return true;
    	else if (b[0][0] == p && b[1][0] == p && b[2][0] == p)
    		return true;
    	else if (b[0][1] == p && b[1][1] == p && b[2][1] == p)
    		return true;
    	else if (b[0][2] == p && b[1][2] == p && b[2][2] == p)
    		return true;
    	else if (b[0][0] == p && b[1][1] == p && b[2][2] == p)
    		return true;
    	else if (b[0][2] == p && b[1][1] == p && b[2][0] == p)
    		return true;
    	else
    		return false;
    }

    console.log(board[0].length);
    console.log(board.length);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            $('#board').append("<div class='square' id=" + j.toString()+i.toString()+ ">"+board[i][j]+"</div>");
        };
        linebreak = document.createElement("br");
        document.getElementById("board").appendChild(linebreak);
    };

    $( "#00" ).click(function() {
        if ($( "#00" ).html() != "x" && $( "#00" ).html() != "y") {
            if (turn == "x"){
                $( "#00" ).html("x");
                board[0][0] = "x";
                if (hasWon(board, turn)){
                    alert(turn + " is winner");
                };
                turn = "y";
            }

            else {
                $( "#00" ).html("y");
                board[0][0] = "y";
                turn = "x";
            }
        }
    });

    $( "#10" ).click(function() {
        if ($( "#10" ).html() != "x" && $( "#10" ).html() != "y") {
            if (turn === "x"){
                $( "#10" ).html("x");
                board[0][1] = "x";
                turn = "y";
            }

            else {
                $( "#10" ).html("y");
                board[0][1] = "y";
                turn = "x";
            }
        }
    });

    $( "#20" ).click(function() {
        if ($( "#20" ).html() != "x" && $( "#20" ).html() != "y") {
            if (turn === "x"){
                $( "#20" ).html("x");
                board[0][2] = "x";
                turn = "y";
            }

            else {
                $( "#20" ).html("y");
                board[0][2] = "y";
                turn = "x";
            }
        }
    });

    $( "#01" ).click(function() {
        if ($( "#01" ).html() != "x" && $( "#01" ).html() != "y") {
            if (turn === "x"){
                $( "#01" ).html("x");
                board[1][0] = "x";
                turn = "y";
            }

            else {
                $( "#01" ).html("y");
                board[1][0] = "y";
                turn = "x";
            }
        }
    });

    $( "#11" ).click(function() {
        if ($( "#11" ).html() != "x" && $( "#11" ).html() != "y") {
            if (turn === "x"){
                $( "#11" ).html("x");
                board[1][1] = "x";
                turn = "y";
            }

            else {
                $( "#11" ).html("y");
                board[1][1] = "y";
                turn = "x";
            }
        }
    });

    $( "#21" ).click(function() {
        if ($( "#21" ).html() != "x" && $( "#21" ).html() != "y") {
            if (turn === "x"){
                $( "#21" ).html("x");
                board[1][2] = "x";
                turn = "y";
            }

            else {
                $( "#21" ).html("y");
                board[1][2] = "y";
                turn = "x";
            }
        }
    });

    $( "#02" ).click(function() {
        if ($( "#02" ).html() != "x" && $( "#02" ).html() != "y") {
            if (turn === "x"){
                $( "#02" ).html("x");
                board[2][0] = "x";
                turn = "y";
            }

            else {
                $( "#02" ).html("y");
                board[2][0] = "y";
                turn = "x";
            }
        }
    });

    $( "#12" ).click(function() {
        if ($( "#12" ).html() != "x" && $( "#12" ).html() != "y") {
            if (turn === "x"){
                $( "#12" ).html("x");
                board[2][1] = "x";
                turn = "y";
            }

            else {
                $( "#12" ).html("y");
                board[2][1] = "y";
                turn = "x";
            }
        }
    });

    $( "#22" ).click(function() {
        if ($( "#22" ).html() != "x" && $( "#22" ).html() != "y") {
            if (turn === "x"){
                $( "#22" ).html("x");
                board[2][2] = "x";
                turn = "y";
            }

            else {
                $( "#22" ).html("y");
                board[2][2] = "y";
                turn = "x";
            }
        }
    });


