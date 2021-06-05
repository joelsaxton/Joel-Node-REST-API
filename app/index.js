require('dotenv').config();
const express = require('express');

// Databases
require('./db/sequelize');

const app = express();
app.use(express.json());

const {user: UserModel} = require('./db/sequelize');

// Register new user - @todo use password bcrypt.hash()
app.route('/register').post(async (req, res) => {
  try {
  	
    const user = await UserModel.create(
      {
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
				state: req.body.state,
				zip: req.body.zip
			}
    );
	
		res.send({
			name: user.name,
			state: user.state,
			zip: user.zip
		});
		
  } catch (e) {
    res.send('error: ' + e);
  }
});

// Login user - @todo incorporate Password or other auth system and use password bcrypt.hash()
app.route('/login').post(async (req, res) => {
  try {
    const user = await UserModel.findOne({where: {email: req.body.email, password: req.body.password}});
    
    if (user) {
    	res.send({success: 'true'})
		}
	
		res.send({success: 'false'})
		
  } catch (e) {
    res.send('error: ' + e);
  }
});

// Update a user's name, state or zip
app.route('/user/:id').patch(async (req, res) => {
  try {
		const user = await UserModel.findOne({where: {id: req.params.id}});
		
		if (! user) {
			res.sendStatus(404);
		}
	
		user.name = req.body.name ? req.body.name : user.name;
		user.state = req.body.state ? req.body.state : user.state;
		user.zip = req.body.zip ? req.body.zip : user.zip;
		await user.save();
	
		res.send({
			name: user.name,
			state: user.state,
			zip: user.zip
		});
		
  } catch (e) {
    res.send('error: ' + e);
  }
});

// Get user by ID, includes 2 external API calls
app.route('/user/:id').get(async (req, res) => {
  try {
    const user = await UserModel.findOne({where: {id: req.params.id}});
    
		if (! user) {
			res.sendStatus(404);
		}
		
    res.send({
			name: user.name,
			state: user.state,
			zip: user.zip
		});
		
  } catch (e) {
    res.send('error: ' + e);
  }
});

const port = process.env.NODEJS_LOCAL_PORT || 3000;
app.listen(port, () => {
  console.log(`Worker: process ${process.pid} is up on port ${port}`);
});
