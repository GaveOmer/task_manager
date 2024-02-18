const express = require('express');
const mongoose = require('mongoose');

const Task = require('./models/task.model.js');
const app = express();

app.use(express.json());

app.get('/', function (req, res) {
	res.send('Hello Wosasrld');
});

app.get('/api/tasks', async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.status(200).json(tasks);
	} catch (error) {}
	res.status(500).json({ message: error.message });
});

app.get('/api/tasks/:id', async (req, res) => {
	try {
		const task = await Task.find({ id: req.params.id });
    res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

app.post('/api/post_tasks', async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

mongoose
	.connect(
		'mongodb+srv://feitan:3osp7AXTAtRuwDQ6@taskmanager.efnqivq.mongodb.net/Node-API?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('Connected');
		app.listen(3000, () => {
			console.log('server is running on port 3000');
		});
	})
	.catch(() => {
		console.log('Failed');
	});
