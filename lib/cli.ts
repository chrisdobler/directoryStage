import * as readline from 'readline';
import { App } from './main';
import stdio from 'stdio';
import * as fs from 'fs';

const app = new App();

const commandLoop = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('C:\\> ', (answer: string) => {
    rl.close();
    app.execute(answer, commandLoop, { listOutput: true });
  });
};

const ops = stdio.getopt({
  script: {
    key: 'S',
    required: false,
    description: 'If you would like to init with a scripted sequence.',
  },
});

// the user wants to use a script
if (ops.script) {
  let script = fs.readFileSync(ops.args[0], { encoding: 'utf8', flag: 'r' });
  do {
    const active = script.substring(
      0,
      script.indexOf('\\n') !== -1 ? script.indexOf('\\n') : script.length
    );
    console.log(active);
    script = script.substring(active.length + 2, script.length);
    app.execute(active, null, {
      listOutput: true,
    });
  } while (script.length);
}

commandLoop();
