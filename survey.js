const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? (Nicknames are also acceptable!) ", (name) => {
  console.log(`Your name is: ${name}\n`);
  
  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`An activity you like to do is: ${activity}\n`);

    rl.question("What do you listen to while doing that? ", (music) => {
      console.log(`While doing your activity, you like to listen to: ${music}\n`);
      
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc.) ", (favMeal) => {
        console.log(`Your favourite meal is: ${favMeal}\n`);
      
        rl.question("What's your favourite thing to eat for that meal? ", (favFood) => {
          console.log(`Your favourite thing to eat for that meal is: ${favFood}\n`);
        
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            console.log(`Your absolute favourite sport is: ${sport}\n`);
          
            rl.question("What's your super power? In a few words, tell us what you are amazing at! ", (skill) => {
              console.log(`Your super power is: ${skill}\n`);
              console.log("Here is your profile:\n");
              console.log(`${name} likes ${activity} while listening to ${music}, loves eating ${favFood} for ${favMeal}, prefers ${sport} over other sports and is amazing at ${skill}.\n`);
            
              rl.close();
            });
          });
        });
      });
    });
  });
});
