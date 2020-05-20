import { Directory } from './directory';
import interpret from './interpreter';

let root = null;

class App {
  constructor() {
    root = new Directory();
  }

  execute(command: string, next: () => void) {
    interpret(command);
    next();
  }
}

export { root, App };
