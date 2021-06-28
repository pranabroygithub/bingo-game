   $(document).ready(function () {     //function to start the functionality after page is fullt loaded

        var globalcount = 1;
        var animationTimer;

        //function to make animation while custom pattern is selected
        function customanimation() {
            for (var i = 0; i < 25; i++) {
                var cell = $("td")[i];
                if (!$("#" + cell.id).hasClass("selected")) {
                    $("#" + cell.id).fadeOut();
                    $("#" + cell.id).fadeIn();
                }
            }
        }



        //function to shuffle the numbers inside the table
        $("#shuffle_btn").click(shuffle);

        //function to change the background color of the cells
        $("td").mouseenter(function () {

            var id = this.id;

            $("#" + id).addClass("onHover");
            
        })

        //function to change the background color of the cells
        $("td").mouseleave(function () {

            var id = this.id;
            //$("#"+id).css("background","orange");
            if ($("#" + id).hasClass("selected")) {
                $("#" + id).addClass("selected");
            }
            else {
                $("#" + id).removeClass("onHover");
                $("#" + id).addClass("notSelected");
            }


        });

        //function to make clicked cell select
        $("td").click(function () {

            var id = this.id;
            $("#" + id).removeClass("onHover");
            $("#" + id).removeClass("notSelected");

            $("#" + id).addClass("selected");
            bingo();




        });

        //function to start the game
        $("#start_btn").click(function () {
            document.getElementById("shuffle_btn").style.visibility = "hidden";
            $("td").removeClass("selected");
            $("#customPattern").css("visibility", "hidden");
        });

        //function to stop the game
        $("#stop_btn").click(function () {
            document.getElementById("shuffle_btn").style.visibility = "visible";
            $("#customPattern").css("visibility", "visible");
            $("#start_btn").css("visibility", "visible");
            $("#tb1").removeClass("customPatternselector");
            shuffle();
            clearInterval(animationTimer);



        });


        //function to generarte custom cell creation
        $("#customPattern").click(function () {
            //assiging class to make it select all cells
            $("#tb1").addClass("customPatternselector");

            $("td").removeClass("selected");
            // $("td").fadeOut();
            // $("td").fadeIn();

            $("#shuffle_btn").css("visibility", "hidden");
            $("#start_btn").css("visibility", "hidden");


            animationTimer = setInterval(customanimation, 1000);



            globalcount = 1;
            //make all the values one

            for (var i = 0; i < 25; i++) {
                var cell = $(".cells")[i];
                cell.innerHTML = 1;
                //cell.innerHTML.style.opacity="0.5";
                // $(cell.innerHTML).fadeIn();
            }

        });


        //function to generate the unique random number
        function gen() {
            var set = [];
            while (set.length < 25) {
                var r = Math.floor(Math.random() * 25) + 1;
                if (set.indexOf(r) === -1) set.push(r);
            }
            return set;
        }

        //function to place all shuffled random numbers generarted 
        function shuffle() {
            $("td").addClass("cells");
            $("td").removeClass("selected");
            $("#tb1").removeClass("cellDisable");
            $("#tb1").removeClass("customPatternselector");
            $("#heading1").css("visibility", "hidden");

            var k = 0;
            var table1 = document.getElementById("tb1");
            var set = gen();


            for (var i = 0; i < (table1.rows.length); i++) {
                var row = table1.getElementsByTagName("tr")[i];
                for (var j = 0; j < (table1.rows.length); j++) {
                    var data = row.getElementsByTagName("td")[j];
                    data.innerHTML = set[k];
                    k++;
                }
            }

        }

        //check the condition of bingo
        function bingo() {
            var bingoarray = {
                "row1": false, "row2": false, "row3": false, "row4": false, "row5": false,
                "col1": false, "col2": false, "col3": false, "col4": false, "col5": false,
                "diag1": false, "diag2": false
            };



            if ($("#td00").hasClass("selected") && $("#td01").hasClass("selected") && $("#td02").hasClass("selected") && $("#td03").hasClass("selected") && $("#td04").hasClass("selected")) {
                bingoarray["row1"] = true;
            }
            if ($("#td10").hasClass("selected") && $("#td11").hasClass("selected") && $("#td12").hasClass("selected") && $("#td13").hasClass("selected") && $("#td14").hasClass("selected")) {
                bingoarray["row2"] = true;
            }
            if ($("#td20").hasClass("selected") && $("#td21").hasClass("selected") && $("#td22").hasClass("selected") && $("#td23").hasClass("selected") && $("#td24").hasClass("selected")) {
                bingoarray["row3"] = true;
            }
            if ($("#td30").hasClass("selected") && $("#td31").hasClass("selected") && $("#td32").hasClass("selected") && $("#td33").hasClass("selected") && $("#td34").hasClass("selected")) {
                bingoarray["row4"] = true;
            }
            if ($("#td40").hasClass("selected") && $("#td41").hasClass("selected") && $("#td42").hasClass("selected") && $("#td43").hasClass("selected") && $("#td44").hasClass("selected")) {
                bingoarray["row5"] = true;
            }
            if ($("#td00").hasClass("selected") && $("#td10").hasClass("selected") && $("#td20").hasClass("selected") && $("#td30").hasClass("selected") && $("#td40").hasClass("selected")) {
                bingoarray["col1"] = true;
            }
            if ($("#td01").hasClass("selected") && $("#td11").hasClass("selected") && $("#td21").hasClass("selected") && $("#td31").hasClass("selected") && $("#td41").hasClass("selected")) {
                bingoarray["col2"] = true;
            }
            if ($("#td02").hasClass("selected") && $("#td12").hasClass("selected") && $("#td22").hasClass("selected") && $("#td32").hasClass("selected") && $("#td42").hasClass("selected")) {
                bingoarray["col3"] = true;
            }
            if ($("#td03").hasClass("selected") && $("#td13").hasClass("selected") && $("#td23").hasClass("selected") && $("#td33").hasClass("selected") && $("#td43").hasClass("selected")) {
                bingoarray["col4"] = true;
            }
            if ($("#td04").hasClass("selected") && $("#td14").hasClass("selected") && $("#td24").hasClass("selected") && $("#td34").hasClass("selected") && $("#td44").hasClass("selected")) {
                bingoarray["col5"] = true;
            }
            if ($("#td00").hasClass("selected") && $("#td11").hasClass("selected") && $("#td22").hasClass("selected") && $("#td33").hasClass("selected") && $("#td44").hasClass("selected")) {
                bingoarray["diag1"] = true;
            }
            if ($("#td04").hasClass("selected") && $("#td13").hasClass("selected") && $("#td22").hasClass("selected") && $("#td31").hasClass("selected") && $("#td40").hasClass("selected")) {
                bingoarray["diag2"] = true;
            }

            var count = 0;
            for (var i in bingoarray) {
                if (bingoarray[i] == true)
                    count++;
            }
            if (!$("#tb1").hasClass("customPatternselector")) {
                if (count >= 5) {
                    $("#heading1").css("visibility", "visible");
                    $("#tb1").addClass("cellDisable");
                }
            }
            else {

                globalcount++;
                for (var i = 0; i < 25; i++) {
                    var cell = $(".cells")[i];
                    if (!$(cell).hasClass("selected")) {
                        cell.innerHTML = globalcount;
                    }
                }
                if (count >= 12) {
                    clearInterval(animationTimer);
                    alert("allselected")
                    $("td").removeClass("selected");
                    $("#tb1").removeClass("customPatternselector");
                    $("#start_btn").css("visibility", "visible");
                }

            }

        }

        //load all the cells when page is loaded
        shuffle();


    });
