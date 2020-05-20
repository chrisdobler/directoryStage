xit('A batch list of created directories', () => {
  expect(output).toEqual(`
  fruits
  apples
    fuji
  grains
  `);
});

xit('A batch of mixed moved and created directories', () => {
  expect(output).toEqual(`
  foods
  fruits
    apples
      fuji
  grains
  vegetables
    squash
  `);
});

xit('A batch of delete operations', () => {
  expect(output).toEqual(`
  foods
  fruits
  grains
  vegetables
    squash
  `);
});
