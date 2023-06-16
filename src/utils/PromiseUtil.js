/**
 * @author Himanshu Yadav
 * @email himanshu.yadav@studiographene.com
 * @create date 2022-07-12 13:00:52
 * @modify date 2022-07-12 13:02:01
 * @desc Util file containing functions on promises
 */
import {Errors} from '../constants/Strings';
export function timeoutPromise(timeoutSpec, promise) {
  const timeouter = new Promise((_, reject) => {
    setTimeout(
      () => wrappedReject(timeoutSpec, reject),
      timeoutSpec.timeoutMsec,
    );
  });
  return Promise.race([timeouter, promise]);
}

export function wrappedReject(timeoutSpec, reject) {
  if (timeoutSpec.timeoutFn) {
    timeoutSpec.timeoutFn(timeoutSpec.timeoutMsec);
  }
  reject(Errors.noInternet);
}

export function createTimeoutReject(msec, fn) {
  return {timeoutMsec: msec, timeoutFn: fn};
}
