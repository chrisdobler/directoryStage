import { root } from './main';

export interface DirectoryInterface {
  children?: Array<DirectoryInterface | null>;
}

export class Directory implements DirectoryInterface {
  children;

  constructor({ children }: DirectoryInterface = {}) {
    this.children = children || {};
  }

  // will travel to the parent of the last dir in the chain.
  traverseChain(opChain: Array<string>) {
    let current = this;
    for (let i = 0; i < opChain.length - 1; i += 1) {
      const nextItem = current.children[opChain[i]];
      if (!nextItem)
        return {
          success: false,
          error: opChain[i],
        };
      current = nextItem;
    }
    return { success: true, current };
  }
}
