const list = {
  run: ({ root: current, message = '' }) => {
    let keys = null;
    if ((keys = Object.keys(current.children)))
      if (keys.length) {
        for (let i = 0; i < keys.length; i += 1) {
          // wanted to pass final list into output but was having trouble with fromatting.

          message = message + '\n' + keys[i];
          // console.log(keys[i]);
          if (current.children[keys[i]].children) {
            // console.group();

            message =
              message +
              list.run({
                root: current.children[keys[i]],
              }).message;
            // operations['LIST'].run({
            //   root: current.children[keys[i]],
            //   message,
            // });
            // console.groupEnd();
          }
        }
      }
    return { success: true, message };
  },
};
export default list;
