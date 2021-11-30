const beepTimes = process.argv.slice(2);
console.log(beepTimes);

for (let time of beepTimes) {
  let num = parseInt(time);
  if (num) {
    if (num >= 0) {
      setTimeout(() =>{
        process.stdout.write('\x07');
      }, parseInt(time) * 1000);
    }
   
  }
  

}