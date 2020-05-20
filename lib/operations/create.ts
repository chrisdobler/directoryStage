import { Directory } from '../directory';

export default {
  run: ({ root, opChain }) => {
    let current = root;
    for (let i = 0; i < opChain.length; i += 1) {
      if (current.children[opChain[i]]) {
        current = current.children[opChain[i]];
        continue;
      } else
        current.children = {
          ...current.children,
          [opChain[i]]: new Directory({
            parent: current,
          }),
        };
    }
    return { success: true };
  },
};
