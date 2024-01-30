const express = require('express');
const DBConnection = require('./db');
const Components = require('./components/index');

class Server {
    constructor() {
            this.port = process.env.PORT || 3001;
            this.app = express();
            this.initMiddleware();
            this.initializeDbConnection();
            this.initializeApp();
            // this.startServer();
        }
        initializeDbConnection() {
            this.connection = new DBConnection()
        }
    
        initializeApp() {
            // this.initConfig();
            this.setComponents();
        }
        setComponents() {
            this.components = new Components(this.app);
        }

        initMiddleware() {
            this.app.use(express.json())
        }
    
        initConfig() {
            
            this.app.set('port', this.port);
        }
        setComponents() {
            this.components = new Components(this.app);
        }
    
        startServer() {
            
            this.app.listen(this.port, () => {
                console.log(`Server is running on port : ${this.port}`); // eslint-disable-line no-console
            });
        }

    }
module.exports = Server;

// app.get('/', (req, res) => {
//     res.send("Hello, I am tarun Patel");
// });

// app.get('/students', (req, res) => {
//     res.json(students);
// }
// );
// // app.post('/students', (req, res) => {
// //     res.json("This is post API");
// // }
// // );
// app.post('/students', (req, res) => {
//     if (!req.body.email) {
//         res.status(400)
//         return res.json({ error: "email is required..." })
//     }
//     const user = {
//         id: students.length + 1,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//         email: req.body.email
//     }

//     students.push(user);
//     res.json(user);
//     //             res.send('this is post api');
//     // res.json("Student post reqeust");
// }
// );

// app.put("/put/:id", (req, res) => {
//     let id = req.params.id;
//     // console.log(id);
//     // res.json(id)
//     let first_name = req.body.first_name;
//     let last_name = req.body.last_name;
//     let email = req.body.email

//     let index = students.findIndex((student) => {
//         return (student.id == Number.parseInt(id))

//     })
//     if (index >= 0) {
//         let std = students[index]
//         std.last_name = last_name;
//         std.first_name = first_name; 
//         std.email = email;
//         res.json(std);

//     }
//     else {
//         res.status(404)
//     }
// }

// );
// app.delete('/delete/:id', (req, res) => {
//     let id = req.params.id;
//     let index = students.findIndex((student)=>{
//         return (student.id == Number.parseFloat(id))
//     }
//     )
//     if (index >=0){
//         let std = students[index];
//         students.splice(index,1);
//         res.json(std);
//     } else{
//         res.status(404);
//     }
// })
