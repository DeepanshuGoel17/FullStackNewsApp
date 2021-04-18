// HTTP Request Helper class. 

import axios from "axios";

class HttpHelper {
  sendRequest = async (args) => {
    try {
      const { url, headers } = args;
      let headerParams;

      if (headers) {
        headerParams = {
          ...headers,
        };
      }
      const apiUrl = `${url}`;
      const response = await axios({
        ...args,
        headers: headerParams,
        url: apiUrl,
      });

      return response;
    } catch (error) {
      console.error(error);
      // throw error;
    }
  };

  getRequest = async (args) => {
    const { data, headers, error, status } = await this.sendRequest({
      ...args,
      method: "get",
    });

    if (status === 200) {
      return {
        data,
        error: null,
        headers,
        status,
      };
    }

    return {
      data,
      error: error || data,
      status,
    };
  };

  postRequest = async (args) => {
    const { data, headers, error, status } = await this.sendRequest({
      ...args,
      method: "post",
    });

    if ([200, 201, 204].indexOf(status) > -1) {
      return {
        data,
        error: null,
        headers,
        status,
      };
    }

    return {
      data: null,
      error: error || data,
      status,
    };
  };

  patchRequest = async (args) => {
    const { data, headers, error, status } = await this.sendRequest({
      ...args,
      method: "patch",
    });

    if (status === 204) {
      return {
        data,
        error: null,
        headers,
        status,
      };
    }

    return {
      data: null,
      error: error || data,
      status,
    };
  };

  deleteRequest = async (args) => {
    const { data, error, status } = await this.sendRequest({
      ...args,
      method: "delete",
    });

    if (status === 204) {
      return {
        data,
        error: null,
        status,
      };
    }

    return {
      data: null,
      error: error || data,
      status,
    };
  };
}

export default HttpHelper;
