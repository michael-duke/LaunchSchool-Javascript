const greetings = () => {

  let readline = require('readline');
  let rl = readline.createInterface(
  process.stdin, process.stdout);

  rl.setPrompt(`What is your name? `);
  rl.prompt();
  rl.on('line', (name) => {
      console.log(`Good Morning, ${name}`);
      console.log(`Good Afternoon, `+name)
      console.log(`Good Evening,`,name)
      rl.close();
  });
}
greetings();