import { Directory } from './directory';
import interpret from './interpreter';

let root = null;

class App {
  constructor() {
    root = new Directory();
  }

  execute(command: string, next: () => void) {
    const response = interpret(command, root);
    if (response.message) console.info(response.message);
    next();
  }
}

export { root, App };
