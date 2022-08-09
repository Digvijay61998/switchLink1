// @flow
import axios from 'axios';
import {merge as _merge} from 'lodash';
import _ from 'lodash';
import Snackbar from 'react-native-snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setHeader = async () => {
  var promise = new Promise(async (resolve, reject) => {
    let defaultHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let userToken = JSON.parse(await AsyncStorage.getItem("userToken"));
    console.log("token---",userToken);
    if (userToken?.accessToken) {
      defaultHeaders["authorization"] = userToken.accessToken;
      resolve(defaultHeaders);
    } else {
      reject(defaultHeaders);
    }
  });

  return await promise.then(
    (result) => {
      return result;
    },
    function (error) {
      return error;
    }
  );
};

const baseAxios = async (options) => {
  const headersObj = await setHeader();
  
  console.log("@@@Api Request headersObj=====", headersObj);

  return axios.create({
    baseURL: 'http://192.168.1.19:8080/api/switchlink/',
    timeout: options?.timeout || 30000,
    headers: headersObj,
  });
};

const executeRequest = async (method, pathname, data, options) => {
  console.log("@@@Api Request=====", method, pathname, data);
  const body = method === "get" || !data ? {} : { data };
  const reqObj = options?.query
    ? {method, url: pathname, params: options.query, ...body}
    : {method, url: pathname, ...body};
  console.log('@@@Api Request reqObj=====', reqObj);

  const baseAxiosRequest = await baseAxios(options);
  console.log("@@@Api baseAxiosRequest reqObj=====", baseAxiosRequest);

  return new Promise(async (resolve, reject) => {
    return baseAxiosRequest
      .request(reqObj)
      .then(res => {
        console.log('@@@res', res);
        resolve(res);
      })
      .catch(error => {
        console.log('@@@ Api Error', error);
        reject(error);
      });
  });
};

export default {
  get(pathname, options) {
    return executeRequest('get', pathname, null, options);
  },

  post(pathname, data, options) {
    return executeRequest('post', pathname, data, options);
  },

  put(pathname, data, options) {
    return executeRequest('put', pathname, data, options);
  },

  delete(pathname, data, options) {
    return executeRequest('delete', pathname, data, options);
  },

  all(promises) {
    return axios.all(promises);
  },

  handleResponse(response) {
    if (response) {
      if (response && response.status == 200) {
        return {success: true, data: response.data};
      } else {
        let message =
          typeof response.message === 'string'
            ? response.message
            : typeof response.message === 'object'
            ? response.message.denied
              ? this.handleError(response.message.denied)
              : response.message.incorrect_password
              ? this.handleError(response.message.incorrect_password)
              : response.message.invalid_email
              ? this.handleError(response.message.invalid_email)
              : 'Some Error'
            : 'Some Error!';
        Snackbar.show({
          text: message,
          duration: Snackbar.LENGTH_SHORT,
        });
        return {success: false, data: response.message};
      }
    }
  },

  handleLoginResponse(response) {
    if (response) {
      // console.log('@@@ Handle Res=======', response);
      if (response.data && response.status == 200) {
        return {success: true, data: response.data};
      } else {
        let message =
          typeof response.errors === 'string'
            ? response.errors
            : typeof response.errors === 'object'
            ? response.errors.denied
              ? this.handleError(response.errors.denied)
              : response.errors.incorrect_password
              ? this.handleError(response.message.incorrect_password)
              : response.message.invalid_email
              ? this.handleError(response.message.invalid_email)
              : 'Some Error'
            : 'Some Error!';
        // console.log('@@@ Handle Error Res=======', response);
        Snackbar.show({
          text: message,
          duration: Snackbar.LENGTH_SHORT,
        });
        return {
          success: false,
          data: response.message,
          id:
            response.data &&
            response.data.length > 0 &&
            response.data[0] &&
            response.data[0].id,
        };
      }
    }
  },

  handleResponseForMessage(response) {
    if (response) {
      // console.log('handleResponseForMessage==', response.message);
      if (response && response.code == 200) {
        const message = response.message;
        Snackbar.show({
          text: message,
          duration: Snackbar.LENGTH_SHORT,
        });
        return {success: true, data: message};
      } else {
        let message =
          typeof response.message === 'string'
            ? response.message
            : typeof response.message === 'object'
            ? response.message.denied
              ? this.handleError(response.message.denied)
              : response.message.incorrect_password
              ? this.handleError(response.message.incorrect_password)
              : response.message.invalid_email
              ? this.handleError(response.message.invalid_email)
              : 'Some Error'
            : 'Some Error!';
        Snackbar.show({
          text: message,
          duration: Snackbar.LENGTH_SHORT,
        });
        return {success: false, data: response.message};
      }
    }
  },

  handleResponseForSearchMessage(response) {
    if (response) {
      // console.log('handleResponseForMessage==', response.message);
      if (response && response.code == 200) {
        const message = response.message;
        Snackbar.show({
          text: message,
          duration: Snackbar.LENGTH_SHORT,
        });
        return {success: true, data: response.data};
      } else {
        let message =
          typeof response.message === 'string'
            ? response.message
            : typeof response.message === 'object'
            ? response.message.denied
              ? this.handleError(response.message.denied)
              : response.message.incorrect_password
              ? this.handleError(response.message.incorrect_password)
              : response.message.invalid_email
              ? this.handleError(response.message.invalid_email)
              : 'Some Error'
            : 'Some Error!';
        Snackbar.show({
          text: message,
          duration: Snackbar.LENGTH_SHORT,
        });
        return {success: false, data: response.message};
      }
    }
  },

  handleError(message) {
    return typeof message === 'object' &&
      Array.isArray(message) &&
      message.length > 0
      ? message[0]
      : 'Some Error';
  },
};
