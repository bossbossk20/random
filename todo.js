angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.title = "Random 3 RC"
    todoList.show = true


    var nums = [{
      name : 'Tak' ,
      pic  :'img/tak.jpg'
    },
    {
        name : 'Mint' ,
        pic  :'img/mint.jpg'
    },
    {
        name : 'Fen' ,
        pic  :'img/fen.jpg'
    },
    {
        name : 'Dear' ,
        pic  :'img/dear.jpg'
    },
    {
        name : 'Golf' ,
        pic  : 'img/golf.jpg'
    },
    {
        name : 'Boy' ,
        pic  : 'img/boy.jpg'
    },
    {
        name : '1',
        pic  : 'img/nueng.jpg'
    },
    {
        name : 'Oom' ,
        pic  : 'img/oom.jpg'
    },
    {
        name : 'Koy',
        pic  : 'img/koy.jpg'
    },
    {
        name : 'Chai' ,
        pic  : 'img/chai.jpg'
    },
    {
        name : 'Ping',
        pic  : 'img/ping.jpg'
    },
    {
        name : 'BB'  ,
        pic  : 'img/bb.jpg'
    },
    {
        name : 'Pai' ,
        pic  : 'img/pai.jpg'
    },
    {
        name : 'Prite' ,
        pic  : 'img/prite.jpg'
    },
    {
        name : 'Chat' ,
        pic  : 'img/chat.jpg'
    },
    {
        name : 'Ken',
        pic  : 'img/ken.jpg'
    },
    {
        name : 'Bank',
        pic  : 'img/bank.jpg'
    }
  ]
  todoList.ranNums = []
  var i = nums.length
  var j = 0


    todoList.Random = function () {
      while (i--) {
          j = Math.floor(Math.random() * (i+1));
          todoList.ranNums.push(nums[j]);
          nums.splice(j,1);
          console.log (nums[j])
        }
        todoList.s = false
      }

      todoList.sum = function () {
        for (var k = 0; k < todoList.ranNums.length; k++) {
          console.log ("point random ("+(k+1)+") :"+todoList.ranNums[k].name)
      }//exit loop for
    } //end function


    var count = 0

      todoList.showlist = function () {

          todoList.single_name = todoList.ranNums[count].name
          todoList.single_pic  = todoList.ranNums[count].pic
          count++
      }






  })
