const { constants } = require("buffer");
const responseService = require("../../utils/ResponseService/");
const messages = require("../../utils/messages");
const { students } = require("../../utils/constants/constants");
const UserModel = require("./user.model");

class userController {

    constructor() {
        this.User = new UserModel();
    }

    lists = async (req, res) => {
        // res.json({});

        const studentList  = await this.User.listStudents({})

        console.log('List',students)
        return responseService.send(res, {
            status: responseService.getCode().codes.OK,
            message: messages.SUCCESS,
            data: studentList
        });
    }

    record = (req, res) => {
        if (!req.body.firstName) {
            // res.status(400)
            return responseService.send(res, {
                status: responseService.getCode().codes.BAD_REQUEST,
                message: messages.INVALID_CREDENTIALS,
                data: false
            });
            
        }
        const user = {
            id: students.length + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        }
        const data = this.User.create(user);
        // res.json(user);
        return responseService.send(res, {
            status: responseService.getCode().codes.OK,
            message: messages.SUCCESS,
            data: data
        });
        //             res.send('this is post api');
        // res.json("Student post reqeust");
    }
    changes = (req, res) => {
        let id = req.params.id;
        // console.log(id);
        // res.json(id)
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let email = req.body.email

        let index = students.findIndex((student) => {
            return (student.id == Number.parseInt(id))

        })
        if (index >= 0) {
            let std = students[index]
            std.lastName = lastName;
            std.firstName = firstName;
            std.email = email;

            // res.json(std);
            return responseService.send(res, {
                status: responseService.getCode().codes.OK,
                message: messages.SUCCESS,
                data: std
            });

        }
        else {
            return responseService.send(res, {
                status: responseService.getCode().codes.NOT_FOUND,
                message: messages.NOT_FOUND,
                data: false
            });
            // res.status(404)
        }



    }
    remove = (req, res) => {
        let id = req.params.id;
        let index = students.findIndex((student) => {
            return (student.id == Number.parseFloat(id))
        }
        )
        if (index >= 0) {
            let std = students[index];
            students.splice(index, 1);
            return responseService.send(res, {
                status: responseService.getCode().codes.OK,
                message: messages.SUCCESS,
                data: std
            });
            // res.json(std);
        } else {
            // res.status(404);
            return responseService.send(res, {
                status: responseService.getCode().codes.NOT_FOUND,
                message: messages.NOT_FOUND,
                data: false
            });
        }
    }
}

module.exports = userController;
