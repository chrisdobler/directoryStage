const list = {
  run: ({ root: current, message = '', options }) => {
    const { listOutput } = options || {};
    let keys = null;
    if ((keys = Object.keys(current.children)))
      if (keys.length) {
        for (let i = 0; i < keys.length; i += 1) {
          listOutput
            ? console.log(keys[i])
            : (message = message + '\n' + keys[i]);
          if (current.children[keys[i]].children) {
            if (listOutput) {
              console.group();
              list.run({
                root: current.children[keys[i]],
                message,
                options,
              });
              console.groupEnd();
            } else
              message =
                message +
                list.run({
                  root: current.children[keys[i]],
                  options,
                }).message;
          }
        }
      }
    return { success: true, message };
  },
};
export default list;
