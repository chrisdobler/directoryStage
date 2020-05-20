# Directory Stage

Directory stage is a cli environment which stages a set of virtual folders based on the
inputs you give it.

To start the cli:

```
  yarn && yarn start
```

To run the available case tests:

```
  yarn spec
```

# Try out some sample data

To try out the requested test cases start up the interface with a seed script. The challenge for directory stage was to use this set below:

```
yarn start --script='CREATE fruits
CREATE vegetables
CREATE grains
CREATE fruits/apples
CREATE fruits/apples/fuji
LIST
CREATE grains/squash
MOVE grains/squash vegetables
CREATE foods
MOVE grains foods
MOVE fruits foods
MOVE vegetables foods
LIST
DELETE fruits/apples
DELETE foods/fruits/apples
LIST'
```

But wait, the fun doesn't have to end there. When the script is finished you will be left with a command prompt where you can test additional cases.
