
let timeout;
/**
 * 
 * @param {Functoin} callBack function to invoke 
 * @param {Number} time time after to invoke function
 * @param {Array<number>} arg args for the function 
 * A function to invoke a function only one after a given time
 */
export const debounce = (callBack, time, arg) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    callBack(...arg);
  }, time);
};
