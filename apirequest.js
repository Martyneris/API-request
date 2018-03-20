const axios = require('axios');
  setInterval( function(){
      axios.get('https://api.bitfinex.com/v1/pubticker/BTCUSD').then(function (res) {
          console.log(`last price is ${res.data.last_price}`);
  })
  }, 10000 );

  // KOMENTARAI
 // 1) kreipimosi metodu pasirinkau axios, nes dokumentacijoje suradau jo tokia savybe,
 // kuri iskart grazina iskoduota json duomenu dali
 // 2) setInterval mano nurodyta funkcijos bloka atlikines kas 10000ms=10s ,
 //    kaip buvo nurodyta salygoje
 // 3) su axios.get kreipiuosi i adresa, kuris grazina reikalingo objekto duomenis
 // 4) juos gavus su metodu .then atlieku duomenu isvedima i console, nurodydamas
 //    reikalinga objekto dali, siuo atveju, salygoje buvo nurodyta isvesti "last price"
