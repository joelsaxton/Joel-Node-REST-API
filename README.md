# Joel's Example REST API

### Setup Instructions
#### 1. Run docker-compose up
#### 2. You may have to run docker exec -it {mysql_container} bash -l then create the database 'example_db' by doing mysql -uroot -proot then create database example_db;
#### 3. If you needed to create the db then do docker-compose down && docker-compose up -d to create the users table
#### 3. You can reach the API at localhost:3000


This API:
1. POST /register Registers a user (name,email,password)
2. POST /login Authenticate a user.
3. PATCH /user/:id Update a user's name, state and zip
4. GET /user/:id Display a user

Notes:
1. It took me well over 2 hours to get to this point
2. I was able to sign up to an single external API for zip code weather, but Axios was breaking for some reason and I ran out of time.
3. I wanted to make an OpenAPI yaml file but instead I included a Postman json file which you can import into Postman.
4. There are several todo's commented in the code, which mostly outline things I felt would be important to a more robust API
