export const handler = async (event, context) => {
  try {
    // Process the incoming request
    const length = event.queryStringParameters && event.queryStringParameters.length ? event.queryStringParameters.length : 8;
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+{}:><?/.,;][|';
    let password = '';

    for (let i = 0; i < length; i++) {
      const index = Math.floor((Math.random() * (characters.length - 1)) + 1)
      password += characters.charAt(index);
    }

    // Construct the response body
    const responseBody = {
      message: password,
      event: event,
      context: context
    };

    // Return the response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(responseBody)
    };
  } catch (error) {
    // Handle any errors
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
