function make(...args) {
  let array = [];

  function func(...el) {
    if (typeof el[0] === 'function') {
      return array.reduce(el[0]);
    }
    array.push(...el);
    return func;
  }

  return func(...args);

};