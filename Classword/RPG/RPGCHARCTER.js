var character = {
    Name: null,
    Profession: null,
    Gender: null,
    Age: null,
    Strength: null,
    HitPoints: null,
    PrintStats: Function({

    })
}

var input = process.argv.slice(2);
var NameInput = input[0],
    ProfessionInput = input[1],
    GenderInput = input[2],
    AgeInput = input[3],
    StrengthInput = input[4],
    HitPointInput = input[5];
var start = function () {
    var Player = character;
    
    Player = createCharacter(Player);


};

var createCharacter = function(a){
    a.Name = NameInput;
    a.Profession = ProfessionInput;
    a.Gender = GenderInput;
    a.Strength = StrengthInput;
    a.HitPoints = HitPointInput;
    return a;
}

start();