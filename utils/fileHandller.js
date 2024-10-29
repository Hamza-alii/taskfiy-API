const fs = require('fs');
const path= require('path');
const taskRoutes = require('../routes/taskRoutes');

const filepath= './data/tasks.json';

exports.writeTasksToFile = (tasks) => {
    fs.writeFileSync(filepath, JSON.stringify(tasks, null , 2))
}

exports.readTasksFromFile = () => {
    if(!fs.existsSync(filepath)){
        this.writeTasksToFile([])
    }

    const date = fs.readFileSync(filepath);
    return JSON.stringify(date)
}