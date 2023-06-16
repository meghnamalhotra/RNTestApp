/**
 * @author Himanshu Yadav
 * @email himanshu.yadav@studiographene.com
 * @create date 2022-06-23 18:53:18
 * @modify date 2022-06-23 18:53:53
 * @desc thunk middleware function
 */
function thunkMiddleware({getState, dispatch}) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else {
      return next(action);
    }
  };
}
export default thunkMiddleware;
