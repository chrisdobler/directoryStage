import interpret from '../lib/interpreter.ts';

import { Directory } from '../lib/directory';
const root = new Directory();

it('can create a directory', () => {
  interpret('CREATE grains', root);
  expect(Object.keys(root.children).length).toBeGreaterThan(0);
  expect(Object.keys(root.children)[0]).toEqual('grains');
});

it('can put a directory inside the first directory', () => {
  interpret('CREATE grains/squash', root);
  expect(Object.keys(root.children['grains'].children).length).toBeGreaterThan(
    0
  );
  expect(Object.keys(root.children['grains'].children)[0]).toEqual('squash');
});

describe('moving files', () => {
  beforeAll(() => {
    interpret('CREATE fruits', root);
    interpret('CREATE foods', root);
    interpret('CREATE fruits/apples', root);
    interpret('CREATE fruits/apples/fuji', root);
    interpret('CREATE vegetables', root);
  });
  it('can move fuji to vegetables', () => {
    interpret('MOVE fruits/apples/fuji vegetables', root);
    expect(Object.keys(root.children['vegetables'].children)).toContain('fuji');
  });
});
// wanted to pass final list into output but was having trouble with fromatting.

describe('deleting files', () => {
  beforeAll(() => {
    interpret('MOVE fruits foods', root);
  });
  it('can not delete an item that does not exist.', () => {
    expect(interpret('DELETE fruits/apples', root)).toEqual({
      message: 'Cannot delete fruits/apples - fruits does not exist',
      success: false,
    });
  });
  // interpret('DELETE foods/fruits/apples', root);
  it('can delete a dir that exists', () => {
    expect(interpret('DELETE foods/fruits/apples', root)).toEqual({
      success: true,
    });
    expect(
      root.children['foods'].children['fruits'].children['apples']
    ).toBeUndefined();
  });
});

it('can list a directory', () => {
  // interpret('CREATE fruits', root);
  // interpret('CREATE fruits/apples', root);
  // interpret('CREATE fruits/apples/fuji', root);
  // interpret('CREATE vegetables', root);
  // console.log(JSON.stringify(root, null, 2));
  // console.log(interpret('LIST', root).message);
});
