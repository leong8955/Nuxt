export default defineEventHandler(async (event) => {
//   //   this is used for POST method
//   const body = await readBody(event);

  const config = useRuntimeConfig();

  let result = {
    statusCode: -503,
    statusMessage: "serviceUnavailable",
  };

  // if (body.account_id == null) {
  //   return result;
  // }
  // if (body.auth == null) {
  //   return result;
  // }



  // temp return fixed result before api integration

  return {
    statusCode: 1,
    statusMessage: "OK",
    data: {
        title: "",
        data : {
            January: "20",
            February: "100",
            March: "245",
            April: "300",
            May: "400",
            June: "500",
            July: "600",
            August: "700",
        },
    },
  };
  //

  
  
  
  
  
  let url = "" + "";
  let response = {};
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (error) {
    response = {
      status: -1,
      statusdesc: error.message,
    };
  }

  /**
   *? Transform response into correct format
   */
  result = {
    statusCode: response?.status || null,
    statusMessage: response?.statusdesc || null,
    value: response?.value || null,
  };
  // console.log(result);

  /**
   *? Delay function for testing
   **/
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  return result;
});
