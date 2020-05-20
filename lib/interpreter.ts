import { Directory } from './directory';

import CREATE from './operations/create';
import LIST from './operations/list';
import MOVE from './operations/move';
import DELETE from './operations/delete';

import * as responses from './responses';

const operations = {
  CREATE,
  LIST,
  MOVE,
  DELETE,
};

export default (command: string, root) => {
  const [inOp, inDirs, outTo] = command.split(' ');

  if (!inOp || !operations[inOp])
    return { success: false, message: responses.UNKNOWN_COMMAND };

  const opChain = inDirs && inDirs.split('/');

  return operations[inOp].run({ root, opChain, outTo, inDirs });
};
