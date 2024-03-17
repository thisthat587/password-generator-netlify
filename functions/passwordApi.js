export const handler = async (event, context) => {
  try {
    // Process the incoming request
    const length = event.queryStringParameters && event.queryStringParameters.length ? event.queryStringParameters.length : 8;
    const lowercase = event.queryStringParameters.lowercase
    const uppercase = event.queryStringParameters.uppercase
    const numbers = event.queryStringParameters.numbers
    const symbols = event.queryStringParameters.symbols
    console.log(lowercase)
    console.log(uppercase)
    console.log(numbers)
    console.log(symbols)
    // const characters = 'abcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+{}:><?/.,;][|';
    let characters = '';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbersCharacters = '1234567890'
    const specialCharacters = '~!@#$%^&*()_+{}:><?/.,;][|'
    let password = '';

    if (lowercase === 'true') {
      characters += lowerCaseCharacters;
    }
    if (uppercase === 'true') {
      characters += upperCaseCharacters;
    }
    if (numbers === 'true') {
      characters += numbersCharacters;
    }
    if (symbols === 'true') {
      characters += specialCharacters
    }

    for (let i = 0; i < length; i++) {
      const index = Math.floor((Math.random() * (characters.length - 1)) + 1)
      password += characters.charAt(index);
    }
    console.log(password)
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
