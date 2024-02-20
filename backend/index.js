const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');

const taskRoute = require('./routes/task.route.js');
const app = express();

//middlewares

//data to json
app.use(express.json());
// for forms
app.use(express.urlencoded({ extended: false }));
// cors
app.use(
	cors({
		origin: 'http://localhost:5173',
		methods: ['POST', 'PUT', 'GET', 'DELETE'],
	})
);
//routes
app.use('/api/tasks', taskRoute);

app.get('/', function (req, res) {
	res.send('Hello Wosasrld');
});

mongoose
	.connect(
		'mongodb+srv://feitan:3osp7AXTAtRuwDQ6@taskmanager.efnqivq.mongodb.net/Node-API?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connected');
		app.listen(3000, () => {
			console.log('server is running on  http://localhost:3000/api');
		});
	})
	.catch(() => {
		console.log('Failed');
	});
