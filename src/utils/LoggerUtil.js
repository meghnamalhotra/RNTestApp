/**
 * @author Meghna Malhotra
 * @email meghna.malhotra@studiographene.com
 * @create date 2022-06-30 14:38:57
 * @modify date 2022-06-30 14:38:57
 * @desc Logger util for log & warn function enabled only in debug mode.
 */
class Logger {
  devMode = __DEV__;

  log(...args) {
    if (this.devMode) {
      console.log(...args);
    }
  }

  warn(...args) {
    if (this.devMode) {
      console.warn(...args);
    }
  }
}

export default new Logger();
