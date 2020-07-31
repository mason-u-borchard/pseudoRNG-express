const express = require('express');
const path = require('path');
const app = express();
const pseudoRNG = require('./public/app.js')


// app.use(express.static(path.resolve(__dirname, "public")));

app.get('/', (req, res) => {
  pseudoRNG.randomByte()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('error logging random byte: ', err);
    });
});

app.listen(process.env.PORT || 5555, () => {
  console.log(`Listening at ${process.env.PORT || 5555}`)
});


// def getRand():
// while True:
//     numbers = np.random.randint(0,2,10)
//     print(numbers)
//     time.sleep(1)
