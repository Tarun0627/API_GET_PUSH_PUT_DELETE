/**
 * ResponseService
 *
 */
const codes = require('./responseCodes');

class ResponseService {
    static send(res, options, header) {
        header = typeof header !== 'undefined' ? header : {};
        const message = options.message || null;
        const response = {};
        response.code = options.status[0];
        response.success = options.status[0]==200 || options.status[0]==201 ? true:false;
        response.data = options.data || false;
        response.status = options.status[1];
        response.message = options.message || null;
        if (message) {
            response.message = message;
        }
        
       
        res.status(response.code)
            .set(header)
            .send(response);
    }

    static getCode() {
        return codes;
    }
}

module.exports = ResponseService;

