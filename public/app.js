// # def getRand():
// while True:
//     numbers = np.random.randint(0,2,10)
//     print(numbers)
//     time.sleep(1)


  var randomBit = function(){
    return Math.floor(Math.random() * Math.floor(2));
  }

  var pseudoRNG = function(){
    console.log
    var bitArr = [];
    for (var i = 0; i < 8; i++){
      bitArr.push(randomBit())
    }
    console.log(bitArr);
    return bitArr;
  }

  var randomByte = function(){
    setInterval(function(){
      pseudoRNG();
    }, 1000);
  }

  randomByte()



// setInterval(function(){
//   pseudoRNG();
// }, 1000);


// setTimeout(function(){
//   pseudoRNG();
// }, 1000);