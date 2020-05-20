const list = {
  run: ({ root: current, message = '', options }) => {
    // I don't like outputing console here because it is not so testable, but the tab group formatting in node was quite tricky.
    const { listOutput } = options || {};

    let keys = null;
    if ((keys = Object.keys(current.children)).sort())
      if (keys.length) {
        for (let i = 0; i < keys.length; i += 1) {
          console.log(keys[i]);
          if (current.children[keys[i]].children) {
            console.group();
            list.run({
              root: current.children[keys[i]],
              message,
              options,
            });
            console.groupEnd();
          }
        }
      }
    return { success: true, message };
  },
};
export default list;
