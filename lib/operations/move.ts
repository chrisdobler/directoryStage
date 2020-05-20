export default {
  run: ({ root, opChain, outTo }) => {
    let { current, success } = root.traverseChain(opChain);
    const moveName = opChain[opChain.length - 1];
    root.children[outTo].children = {
      ...root.children[outTo].children,
      [moveName]: current.children[moveName],
    };
    delete current.children[moveName];
  },
};
