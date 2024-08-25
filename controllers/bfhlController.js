const { isNumeric, getHighestLowercaseAlphabet } = require('../utils/helperFunctions');

// POST method handler
exports.postData = (req, res) => {
  try {
    // Extract data from request body
    const { data } = req.body;

    // Validate the data field
    if (!data) {
      return res.status(400).json({
        is_success: false,
        message: 'Missing required field: data.',
      });
    }

    // Hardcoded values for user_id, email, and roll_number
    const user_id = "sonu_kumar_13072003";
    const email = "sonu1332003@gmail.com";
    const roll_number = "ABCD123"; // Assuming roll_number is also hardcoded

    // Separate numbers and alphabets from the data array
    const numbers = data.filter(isNumeric);
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));

    // Get the highest lowercase alphabet from the alphabets array
    const highest_lowercase_alphabet = getHighestLowercaseAlphabet(alphabets);

    // Construct the response
    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_lowercase_alphabet,
    };

    // Send the response
    res.status(200).json(response);
  } catch (error) {
    // Handle error
    res.status(500).json({
      is_success: false,
      message: 'An error occurred while processing the request.',
    });
  }
};

// GET method handler
exports.getData = (req, res) => {
  // Hardcoded response
  const response = {
    operation_code: 1,
  };

  // Send the response
  res.status(200).json(response);
};