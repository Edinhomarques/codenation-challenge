const crypto = require('crypto');

alphabet ='abcdefghijklmnopqrstuvwxyz';

/*enter the encrypted message below*/
const encryptedMessage = 'aolf kpk uva ruvd pa dhz ptwvzzpisl, zv aolf kpk pa! thyr adhpu'.toLocaleLowerCase();

/*enter the cipher key number below*/
const number_of_houses = 7

let position;
let decipheredMessage = '';

for (let index = 0; index < encryptedMessage.length; index++) {
  if(alphabet.indexOf(encryptedMessage[index]) == -1){
    decipheredMessage += encryptedMessage[index]
  }else {
    position = alphabet.indexOf(encryptedMessage[index]) 
    if(position - number_of_houses >= 0)
      decipheredMessage += alphabet[position - number_of_houses]
    else {
      decipheredMessage += alphabet[position - number_of_houses + alphabet.length]
    }
  }
  
}
console.log(decipheredMessage)


const hash = crypto.createHash('sha1', encryptedMessage)
                   .update(decipheredMessage)
                   .digest('hex');
console.log(hash);