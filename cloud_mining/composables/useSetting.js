export const useSetting = () => {

  const getPublicIP = async () => {
    try {
      // https://httpbin.org/ip
      const response = await fetch('https://httpbin.org/ip');
      const data = await response.json();
      const ip = data.origin;
      if (ip){
        const result = {
          statusCode: 0,
          data: ip,
        }
        return result;
      } else {
        throw new Error("No IP returned");
      }
    } catch (error) {
      const result = {
        statusCode: 1,
        message: 'Failed to get public IP',
      }
      return result;
    }
  };

  const genRandomUUID = () => {
    return crypto.randomUUID();
  };

  const generateRandomBytes = (length) => {
    return crypto.getRandomValues(new Uint8Array(length));
  };

  const getChartData = async () => {
    try {
      const response = await $fetch('/api/settings/chartData');

      if (response.statusCode == 1) {
        const result = {
          statusCode: response.statusCode,
          message: response.statusMessage,
          data: response.data,
        }
        return result;

      } else {
        throw new Error(response)
      }
    } catch (error) {
      const result = {
        // statusCode: 1,
        // message: 'Error',

        statusCode: error.statusCode,
        message: error.statusMessage,
      }
      return result;
    }
  };
  
  return {
    getPublicIP,
    generateRandomBytes,
    genRandomUUID,

    getChartData,
  };
};