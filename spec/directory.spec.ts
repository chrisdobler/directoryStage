import { Directory } from '../lib/directory';

const root = new Directory();

describe('a root directory', () => {
  it('should have empty children', () => {
    expect(root.children).toEqual({});
  });
  it('should not have a parent', () => {
    expect(root.parent).toBeNull();
  });
});

describe('when attaching a child', () => {
  beforeAll(() => {});
  xit('should show two attached children', () => {
    expect(root.children.length).toEqual(1);
  });
});

describe('a child node', () => {
  xit('should be abble to attach itself to a parent', () => {
    expect(root.children.length).toEqual(2);
  });
});
