var generator = {
  min: 1,
  max: 6,
  
  /**
   * Generate a random number
   */
  getRandom: function () {
    return Math.round(Math.random() * (this.max - this.min) + this.min);
  },
  
  /**
   * Set the lower number boundry
   */
  setMin: function (newMin) {
    this.min = parseInt(newMin);
  },
  
  /**
   * Set the higher number boundry
   */
  setMax: function (newMax) {
    this.max = parseInt(newMax);
  }
};

var number = document.querySelector('.number');
var dup = []

 // keep[0] = ""
document.querySelector('.generate').onclick = function () {
	number.textContent = generator.getRandom();
  
  // console.log(dupicate)

   if(number.textContent==1){
    for(var i=0;i<dup.length;i++){
      if(number)
    }
    dup.push(1)
    console.log(dup)
    number.textContent="Mint"
    

  }
  if(number.textContent==2){
    dup.push(2)
    console.log(dup)
    number.textContent="TAK"
    
    
  }
  if(number.textContent==3){
    dup.push(3)
    console.log(dup)
    number.textContent="Chat"
    
  }
  if(number.textContent==4){
    dup.push(4)
    console.log(dup)
    number.textContent="Prite"
    
  }
  
   if(number.textContent==5){
    dup.push(5)
    console.log(dup)
    number.textContent="Oom"
  }
   if(number.textContent==6){
    dup.push(6)
    console.log(dup)
    number.textContent="Chai"
  }
  if(number.textContent==7){
    dup.push(7)
    console.log(dup)
    number.textContent="Ping"
  }
  if(number.textContent==8){
    dup.push(8)
    console.log(dup)
    number.textContent="Dear"
  }
   if(number.textContent==9){
    dup.push(9)
    console.log(dup)
    number.textContent="Golf"
  }
   if(number.textContent==10){
    dup.push(10)
    console.log(dup)
    number.textContent="1"
  }
   if(number.textContent==11){
    dup.push(11)
    console.log(dup)
    number.textContent="Bank"
  }
   if(number.textContent==12){
    dup.push(12)
    console.log(dup)
    number.textContent="Ken"
  }
   if(number.textContent==13){
    dup.push(13)
    console.log(dup)
    number.textContent="BB"
  }
   if(number.textContent==14){
    dup.push(14)
    console.log(dup)
    number.textContent="Pai"
  }
   if(number.textContent==15){
    dup.push(15)
    console.log(dup)
    number.textContent="Fen"
  }
   if(number.textContent==16){
    dup.push(16)
    console.log(dup)
    number.textContent="Boy"
  }
  if(number.textContent==17){
    dup.push(17)
    console.log(dup)
    number.textContent="Koy"
  }
 



};