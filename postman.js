node app.js
//Open Postman and send a POST request to
POST http://localhost:5000/api/auth/register
//In the Body section, set it to raw and JSON, and send the following data
{
  "username": "john_doe",
  "password": "password123"
}
//You should receive a response
{
  "message": "User registered successfully."
}

