function player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}

player.prototype.goodgame = function () {
    this.value = coinflip(2)

    if (this.value = 0) {
        if (this.offense != 0) {
            return this.offense + 1;
        }
    }
    if (this.value = 1) {
        if (this.defense != 0) {
            return this.defense + 1;
        }
    }
}

player.prototype.badgame = function () {
    this.value = coinflip(2)

    if (this.value = 0) {
        if (this.offense != 0) {
            return this.offense - 1;
        }
    }
    if (this.value = 1) {
        if (this.defense != 0) {
            return this.defense - 1;
        }
    }
}

var coinflip = function (num) {
    return Math.floor((Math.random() * num));

}

var start = function () {
    console.log("starting teamwork.js");
    var mainTeam;
    var subTeam;
    createMainPlayers();
    createSubPlayer();
}

var createMainPlayers = function () {
    var input;
    var team;
    console.log("Please create the souls of 5 players, 5 main");
    console.log("in this order Please input");
    console.log("name, position, offense score, defence score");
    input = process.argv.slice(2);
    for (var i = 0; i < 5; i++) {
        var final = false;
        while (final = false) {

            console.log("Please in put the stats for player " + (i + 1));
            input = process.argv.slice(2);

            console.log("Are you sure this is correct?");
            console.log("Name : " + input[0]);
            console.log("Position : " + input[1]);
            console.log("Offense score : " + input[2]);
            console.log("Defence score: " + input[3]);

            console.log("Please enter true or false");
            var asking = process.argv.slice(2);
            if (asking === true) {
                final = true;
            }
        }
        team += new player(input[0], input[1], input[2], input[3]);
        console.log("New player added!")
        console.log("Name : " + team[0].name);
        console.log("Position : " + team[0].position);
        console.log("Offense score : " + team[0].offense);
        console.log("Defence score: " + team[0].defense);

    }

}

createSubPlayer = function () {
    var input;
    console.log("Please create the souls of 5 players, 5 main");
    console.log("in this order Please input");
    console.log("name, position, offense score, defence score");
    input = process.argv.slice(2);
    for (var i = 0; i < 3; i++) {
        var otherfinal = false;
        while (otherfinal = false) {

            console.log("Please in put the stats for player " + (i + 1));
            input = process.argv.slice(2);

            console.log("Are you sure this is correct?");
            console.log("Name : " + input[0]);
            console.log("Position : " + input[1]);
            console.log("Offense score : " + input[2]);
            console.log("Defence score: " + input[3]);

            console.log("Please enter true or false");
            var thisasking = process.argv.slice(2);
            if (thisasking === true) {
                otherfinal = true;
            }
        }
    }
}


start();