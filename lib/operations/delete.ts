import * as responses from '../responses';

export default {
  run: ({ root, opChain, inDirs }) => {
    let response = root.traverseChain(opChain);
    if (!response.success) {
      return {
        success: false,
        message: `Cannot delete ${inDirs} - ${response.error} does not exist`,
      };
    }
    delete response.current.children[opChain[opChain.length - 1]];
    return {
      success: true,
    };
  },
};
