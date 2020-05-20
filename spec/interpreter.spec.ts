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
});

it('can list a directory', () => {
  interpret('CREATE vegetables', root);
  console.log(root);
  console.log(interpret('LIST', root).message);
});
