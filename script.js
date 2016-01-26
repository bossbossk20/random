var generator = {
  min: 1,
  max: 17,
  
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
var dupicate = 0
var keep = [16]
 // keep[0] = ""
document.querySelector('.generate').onclick = function () {
	number.textContent = generator.getRandom();
  
  // console.log(dupicate)

   if(number.textContent==1){
    keep[dupicate] = 1 
    number.textContent="Mint"
    

  }
  if(number.textContent==2){
    keep[dupicate] = 2
    number.textContent="TAK"
    
  }
  if(number.textContent==3){
    keep[dupicate] = 3
    number.textContent="Chat"
  }
  if(number.textContent==4){
    keep[dupicate] = 4
    number.textContent="Prite"
  }
  
   if(number.textContent==5){
    keep[dupicate] = 5
    number.textContent="Oom"
  }
   if(number.textContent==6){
    keep[dupicate] = 6
    number.textContent="Chai"
  }
  if(number.textContent==7){
    keep[dupicate] = 7
    number.textContent="Ping"
  }
  if(number.textContent==8){
    keep[dupicate] = 8
    number.textContent="Dear"
  }
   if(number.textContent==9){
    keep[dupicate] = 9
    number.textContent="Golf"
  }
   if(number.textContent==10){
    keep[dupicate] = 10
    number.textContent="1"
  }
   if(number.textContent==11){
    keep[dupicate] = 11
    number.textContent="Bank"
  }
   if(number.textContent==12){
    keep[dupicate] = 12
    number.textContent="Ken"
  }
   if(number.textContent==13){
    keep[dupicate] = 13
    number.textContent="BB"
  }
   if(number.textContent==14){
    keep[dupicate] = 14
    number.textContent="Pai"
  }
   if(number.textContent==15){
    keep[dupicate] = 15
    number.textContent="Fen"
  }
   if(number.textContent==16){
    keep[dupicate] = 16
    number.textContent="Boy"
  }
  if(number.textContent==17){
    keep[dupicate] = 17
    number.textContent="Koy"
  }
  console.log(keep[dupicate])
  dupicate++



};

