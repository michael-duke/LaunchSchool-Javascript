const age = () =>{

  let readline = require('readline');
  let rl = readline.createInterface(
  process.stdin, process.stdout);

  rl.setPrompt(`What is your age? `);
  rl.prompt();
  rl.on('line', (age) => {
    age =Number(age);
      console.log(`In 10 years, you will be ${age + 10} years old.`);
      console.log(`In 20 years, you will be ${age + 20} years old.`);
      console.log(`In 30 years, you will be`,age + 30 ,`years old.`);
      console.log(`In 40 years, you will be`,age + 40 ,`years old.`);
      rl.close();
  });
}