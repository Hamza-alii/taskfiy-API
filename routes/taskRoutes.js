const { getTasks, createTask, updateTask, delateTask } = require("../controllers/teskControllers")

const taskRoutes = (req,res) =>{
    if(req.method == "GET"){
        getTasks(req,res)
    }else if(req.method == "POST"){
        createTask(req,res)
    }else if(req.method == "PATCH"){
        updateTask(req,res)
    }else if(req.method == "DELATE"){
        delateTask(req,res)
    }else{
        res.writeHead(404, 'Date Not Found', {' content-type' : 'application/json'})
        res.end(JSON.stringify({
            message: "unknown method required.."
        }))
    }
}

module.exports = taskRoutes