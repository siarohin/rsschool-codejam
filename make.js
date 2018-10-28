function make(...args) {

  if (typeof args[args.length - 1] === 'function') {
    const func = args.pop();
    return args.reduce((acc, el) => func(acc, el));
  }

  return make.bind(null, ...args);

}