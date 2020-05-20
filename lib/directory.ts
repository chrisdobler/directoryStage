import { root } from './main';

export interface DirectoryInterface {
  parent?: DirectoryInterface | null;
  children?: Array<DirectoryInterface | null>;
}

export class Directory implements DirectoryInterface {
  parent;
  children;

  constructor({ parent, children }: DirectoryInterface = {}) {
    this.parent = parent || root || null;
    this.children = children || [];
  }
}
