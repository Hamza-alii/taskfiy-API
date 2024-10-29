const { IncomingForm }= require('formidable')
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandller")

exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, {'content-type' : 'application/json'})
    res.end(JSON.stringify(tasks))
}

exports.createTask = (req,res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, Files) => {
        if(err){
            res.writeHead(400, {'content-type' : 'application/json'});
            res.end(JSON.stringify({
                message : "error parsing form"
            }))
            return;
        }

        const Image = Files.Image[0]

        const tasks = readTasksFromFile()
        const newTask = {
            id: Date.now(),
            title: fields.title,
            description: fields?.description || " ",
            status: fields?.status || "panding",
            Image: Files.Image ? `/upload/${Image.originalFilename}` : null
        }

        tasks.push(newTask);

        writeTasksToFile(tasks);

        if(Files.Image) {
            copyfileSync(Image.filepath , path.join(__dirname, '../uploads', Image.originalFilename))
            res.end()
        }
    })
}

exports.updateTask = (req,res) => {
    res.end(JSON.stringify({
        message: "not yet implemented"
    }))
}

exports.delateTask = (req,res) => {
    res.end(JSON.stringify({
        message: "not yet implemented"
    }))
}
