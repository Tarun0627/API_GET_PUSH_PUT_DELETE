//  read upd del create
const { Student } = require('../../modals/index');
const { students } = require('../../utils/constants/constants');

class Model {
    async create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const note = new Student(data);
                await note.save();
                resolve(note);
            } catch (err) {
                reject(err);
            }
        });
    }

    //  {firstName:'jOHN'}
    async listStudents(whereClause) {
        return new Promise(async (resolve, reject) => {
            try {
                const StudentNote = await Student.find(whereClause);
               
                resolve(StudentNote);
            } catch (err) {
               
                reject(err);
            }
        });

    }
    async updateStudent(whereClause, updateData) {
        return new Promise(async (resolve, reject) => {
            try {
                const updateStudent = await Student.updateone(whereClause, updateData);
                
                resolve(updateStudent);
            } catch (err) {
               
                reject(err);
            }
        });
    }


    async deleteStudent(whereClause) {
        return new Promise(async (resolve, reject) => {
            try {
                const deleteResult = await Student.deleteOne(whereClause);
                
                resolve(deleteResult);
            } catch (err) {
               
                reject(err);
            }
        });
    }
}
module.exports = Model;
