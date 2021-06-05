# Joel's Example REST API

### Setup Instructions
#### 1. Run docker-compose up
#### 2. You can reach the API at localhost:3000


This API:
1. POST /register Registers a user (name,email,password)
2. POST /login Authenticate a user.
3. PATCH /user Update a user's name, state and zip
4. GET /user/{id} Display a user

Notes:
1. It took me well over 2 hours to get to this point
2. I was able to sign up to an single external API for zip code weather, but I don't have any more time to work on this
3. I wanted to make an OpenAPI yaml file but I didn't have time. But I did include a Postman json file which you can import into Postman.
4. There are several todo's commented in the code, which mostly outline things I felt would be important to a more robust API
