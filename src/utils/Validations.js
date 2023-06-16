/**
 * @author Rahul Rajput
 * @email rahul@studiographene.com
 * @create date 2020-04-17 11:00:03
 * @modify date 2020-04-29 13:02:34
 * @desc [define validations here]
 */

import {Errors} from '../constants/Strings';

const Validations = {
  isValidText(value) {
    if (value === undefined) {
      return [false, Errors.valueMissing];
    }

    if (value.length === 0) {
      return [false, Errors.valueMissing];
    }

    return [true, undefined];
  },

  isValidPassword(password) {
    if (password === undefined) {
      return [false, Errors.error, Errors.blankPassword];
    }

    if (password.length === 0) {
      return [false, Errors.error, Errors.blankPassword];
    }

    if (password.includes(' ')) {
      return [false, Errors.error, Errors.invalidPassword];
    }

    if (password.length < 8) {
      return [false, Errors.error, Errors.invalidPasswordToShort];
    }

    if (password.length > 20) {
      return [false, Errors.error, Errors.invalidPasswordToLong];
    }

    return [true, undefined];
  },

  isEmailValid(email) {
    if (email === undefined) {
      return [false, Errors.error, Errors.blankEmail];
    }
    if (email.length === 0) {
      return [false, Errors.error, Errors.blankEmail];
    }
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.toLowerCase())) {
      return [true, undefined];
    } else {
      return [false, Errors.error, Errors.emailFormatInvalid];
    }
  },
};

module.exports = Validations;
