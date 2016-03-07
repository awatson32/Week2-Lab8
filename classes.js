var Die = function() {
    this.value = null;
    this.div = null;   
    this.insert = function() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        document.getElementById('dice-container').appendChild(this.div);
        // this.div.addeEventListener('dblclick', removeDie);
        this.div.addEventListener('click', rollDice);
        
    }
        
    this.roll = function () {
        var num = Math.floor(Math.random() * 6) + 1;
        this.value = num;
        this.div.innerHTML = num;
    }   
    
    this.sum = function() {
        
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
    alert("Congrats! This is where the sum goes!");
}



