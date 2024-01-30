const User = require('./user/user.routes');



class Components {
    constructor(app) {
        this.app = app;
        this.initModules();
    }

    initModules() {
       
        // or use Awilix - ref - https://github.com/jeffijoe/awilix
        /* eslint-disable no-unused-vars */
         const userObj = new User(this.app);
        
    }
}

module.exports = Components;
