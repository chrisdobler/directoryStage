import { Directory } from './directory';
import interpret from './interpreter';

let root = null;

class App {
  constructor() {
    root = new Directory();
  }

  execute(
    command: string,
    next?: () => void,
    options?: {
      listOutput: boolean; // send list directly to console to preserve formatting.
    }
  ) {
    const response = interpret(command, root, options);
    if (response && response.message) console.info(response.message);
    next && next();
  }
}

export { root, App };
