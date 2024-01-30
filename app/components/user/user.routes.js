// const { students } = require('../../utils/constants');
const UserController = require('./user.controller')

class UserRoute {
    constructor(app) {
        this.app = app;
        this.userController = new UserController();
        this.initRoutes();
    }
    initRoutes() {


        this.app.get('/', (req, res) => {
            res.send("Hello, I am tarun Patel");
        });

        this.app.get('/students', (req,res)=>{
           this.userController.lists(req, res)
        });
        this.app.post('/students/create', (req, res) => {
           this.userController.record(req, res)
        });
        // this.app.post('/students', this.userController.put(req, res)
        // );
        this.app.put('/students/change/:id', (req, res) => {
            this.userController.changes(req, res)
         }); 
        // this.app.put("/put/:id", this.userController.put(req, res)
        // );
        this.app.delete('/students/delete/:id',(req,res) =>{
        this.userController.remove(req, res)
        });

    }
}

module.exports = UserRoute;