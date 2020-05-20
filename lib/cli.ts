import * as readline from 'readline';

import { App } from './main';

const app = new App();

const commandLoop = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('C:\\> ', (answer: string) => {
    rl.close();
    app.execute(answer, commandLoop);
  });
};

commandLoop();
