const UNKNOWN_COMMAND = 'Bad command or file name';
import { Directory } from './directory';

const operations = {
  CREATE: {
    run: (root, opChain) => {
      let current = root;
      for (let i = 0; i < opChain.length; i += 1) {
        if (current.children[opChain[i]]) continue;
        else
          current.children = {
            ...current.children,
            [opChain[i]]: new Directory({
              parent: current,
            }),
          };
      }
      return { success: true };
    },
  },
  LIST: {
    run: (current, opChain, nu, message: string = '') => {
      if (current && Object.keys(current.children).length) {
        for (let i = 0; i < Object.keys(current.children).length; i += 1) {
          message = `${message}${Object.keys(current.children)[i]}\n`;
        }
      }
      return { success: true, message };
    },
  },
  MOVE: {},
  DELETE: {},
};

export default (command: string, root) => {
  const [inOp, inDirs, outTo] = command.split(' ');

  if (!inOp || !operations[inOp])
    return { success: false, message: UNKNOWN_COMMAND };

  const opChain = inDirs && inDirs.split('/');

  return operations[inOp].run(root, opChain, outTo);
};
