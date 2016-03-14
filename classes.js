var Die = function() {
    this.value = null;
    this.div = null;   
    this.insert = function() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        document.getElementById('dice-container').appendChild(this.div);
        
        //extra credit
        this.div.addEventListener('click', this.roll.bind(this));
        this.div.addeEventListener('dblclick', this.remove.bind(this));
        
    }
        
    this.roll = function () {
        var num = Math.floor(Math.random() * 6) + 1;
        this.value = num;
        this.div.innerHTML = num;
    }   
    
   //extra credit 
    Die.prototype.remove = function() {
        var index = dice.indexOf(this);
        if (index !== -1) {
            dice.splice(index, 1);
            this.div.remove();
        }
    }
            
 }
function addDice() {
    var die = new Die();
    die.insert();
    loadedDie.push(die);
}

var loadedDie = [];

function rollDice() {
    for (var i = 0; i < loadedDie.length; i++) {
        loadedDie[i].roll();    
    }   
}

function removeDie() {
   document.getElementById('dice-container').remove(this.div);
}


function sumDice() {
    var sum = 0;
    for (var i = 0; i < dice.length; i++) {
        sum += dice[i].value;
    }
    alert("The sum is " + sum);
}



