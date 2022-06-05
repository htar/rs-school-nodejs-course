import { parentPort, workerData } from "worker_threads";

// n should be received from main thread
export const nthFibonacci = (n) => {
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread

  try {
    const res = nthFibonacci(workerData);

    parentPort.postMessage(res);
  } catch (error) {
    throw 'FS operation failed';
  }
};

export default (() => {
    sendResult();
})();
