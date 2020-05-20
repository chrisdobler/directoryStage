import * as readline from 'readline';

import evaluate from './main';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commandLoop = (async () => {
  const answer: string = await new Promise((res, rej) =>
    rl.question('C:\\> ', (answer: string) => {
      res(answer);
      rl.close();
    })
  );

  evaluate(answer, commandLoop);
})();
