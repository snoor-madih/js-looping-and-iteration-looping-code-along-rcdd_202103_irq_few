// // Code your solutions in th
// let names;
// const event;
// function writeCards(names, event)
// {
// for (let i=0 ; i< writeCards.length;i++)
// {
//   console.log ("thank you 4{names[i],for wonderful ${event} gift!");
// }
// }
// writeCards(["Ada", "Brendan", "Ali"], "birthday");
// function countDown(num)
// {
//   let i =1;
//   while(i>=num)
//   {
//     console.log(i);
//     i--;
//   }
// }
// countDown(10);

function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}