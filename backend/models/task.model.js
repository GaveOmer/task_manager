const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Enter task name'],
		},
		description: {
			type: String,
			required: true,
		},
	},

	{
		timestamps: true,
	}
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
