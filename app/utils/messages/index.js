'use strict';

module.exports = {
    UNDEFINED:'Data Undefined',
    SERVER_ERROR_MESSAGE: 'Internal Server Error.',
    SERVICE_UNAVAILABLE: 'Service is unavailable. Please try after some time!',
    ACCESS_DENIED: 'Access Denied!',
    INVALID_MOBILE: 'Mobile number is not valid. Please enter a valid mobile number',
    MOBILE_NOT_REG: 'This mobile number is not registered, please Sign Up first!',
    OTP_SENT: 'The code has been sent to your mobile number',
    VERIFIED_OTP: 'Success! The code has been verified',
    INVALID_REQUEST: 'Your request is invalid!!',
    INVALID_TOKEN: 'Your token is invalid',
    INVALID_CREDENTIALS: 'Invalid credentials!',
    TOKEN_EXPIRED: 'Token has expired!',
    USER_ALREADY_VERIFIED: 'User is already verified!',
    USER_ALREADY_EXIST: 'User already exists!',
    EMAIL_ALREADY_EXIST: 'Email already exists!',
    PHONE_ALREADY_EXIST: 'Phone already exists!',
    USER_CREATED: 'User created!',
    USER_STATUS_CHANGE: 'Status has changed',
    ACCESS_FORBIDDEN: 'You don\'t have sufficient access',
    STATUS_EXISTS: 'Status already exists!',
    SESSION_EXISTS: 'Session already exists!',
    STATUS_UPDATE: 'Status updated successfully',
    ERROR_VERIFY_EMAIL: 'Error verifying email!',
    EMAIL_NOT_REG: 'This email is not registered, please Sign Up first!',
    ALREADY_REG_WITH_EMAIL: 'Email already regiestered',
    ERROR_VERIFY_SUCCESS: 'Email verified!',
    LOGIN_SUCCESS: 'Logged In successfully!',
    LOGIN_FAIL: 'Cannot find user details with this credentials!',
    LOGIN_ERROR: 'Error during login!',
    LOGOUT_SUCCESS: 'LoggedOut successfully!',
    LOGOUT_ERROR: 'Error during logout!',
    QUESTION_POST_ERROR: 'Error during question post!',
    BOOKMARK_ERROR: 'Error during question bookmark!',
    RATING_ERROR: 'Error during question rating!',
    QUESTION_POST: 'Question post suessfully',
    QUESTION_DETAILS: 'Question get suessfully',
    ACCESS_TOKEN_REQUIRED: 'Access token is required!',
    UNAUTHORIZED_ACCESS: 'You don\'t have sufficient access..',
    STUDENT_NOT_FOUND: 'Student not found!',
    USER_PROFILE_UPDATE: 'User Profile has been updated successfully ',
    USER_PROFILE_NOT_FOUND: 'User not found',
    REQUEST_ACCEPTED: 'Request has been accepted!',
    SESSION_EXPIRED: 'Your session expired',
    REQUEST_REJECTED: 'Request has been rejected!',
    REQUEST_ALREADY_ACCAPTED: 'Request already been accepted!',
    QUESTION_ACCEPTED_PUSH_TITLE: 'Question Accepted',
    QUESTION_ACCEPTED_PUSH_TITLE_EXPERT: 'New Session Started',
    QUESTION_COMPLETED_PUSH_TITLE: 'Session Completed',
    QUESTION_NOT_FOUND: 'Not found!',
    NEW_MESSAGE_PUSH_TITLE: 'New Message',
    UNABLE_TO_DELETE: 'Unable to delete stream. Please try again.',
   
    RECORDING_FAILED: 'Unable to save a recording',
    RECORDING_START_FAILED: 'Unable to start a recording',
    SESSION_ALREADY_COMPLETED: 'Session already completed!',
    SESSION_COMPLETED_SUCCESSFULLY: 'Session has been completed!',
    SESSION_JOINED_SUCCESSFULLY: 'Session has been joined successfully!',
    ANSWER_SUBMITTED: 'Answer has been submitted successfully!',
    USER_UPDATED: 'user has be updated successfully!',
    SUCCESS: 'Success !!',
    IMAGE_FILE_NOT_FOUND: 'Only image file upload',
    UPLOADED_FILES: 'Images are upload',
    NO_DATA_FOUND: 'NO DATA FOUND',
    BOOKMARK_EXISTS: 'Bookmark already exists!',
    REQUEST_TOO_LONG: 'Request taking a too much time.Please wait ..',
    EXPERT_FOUND: 'Match expert found',
    EXPERT_NOT_FOUND: 'Not expert found',
    INTERNAL_SERVER_ERROR: 'Internal Server Error!',
    ACCOUNT_DELETE:'Your account has been deleted',
    SOMETHING_WRONG:'Something went wrong',
    REMOVEBOOKMARK:'Remove bookmark',
    BOOKMARKSUCCESS:'Successfully bookmark',
    MORE_THAN_24HRS:'More than 24 hours',
    REG_GOOGLE:'You are already registered with Google',
    UNAUTHORIZED: 'Wrong Password',
    NOT_SUFFICIENT_BALANCE: 'Not sufficient XP',
    VERIFY:'Verified user',
    NOT_VERIFY:'Not verify user',
    EXPIRED:'Your code has been expired',
    FILE_SAVE_ERROR:'File cannot be saved',
    NO_SESSION:'Session not available',
    NOT_FOUND:'Not found',
    DELETE:'Deleted',
    CODE_NOT_FOUND:'Invalid code',
    VERIFY_EMAIL:'Your email has been verified ',
    EMAILS_SENT: 'Emails sent successfully',
    EMAIL_SENT_FAILURE: 'Failed to send one or more emails',
    TASK_START: 'Task started successfully',
    TIMER_UPDATED: 'Timer updated successfully',
    TIMER_RETRIEVED: 'Timer retrieved successfully',
    DATA_FETCH_SUCCESS:'Data fetched successfully',
    MKTG_EMAIL_INSERT_SUCCESS: 'Marketing email inserted successfully',
    MKTG_EMAIL_UPDATE_SUCCESS: 'Marketing email updated successfully',
    MKTG_EMAIL_DELETE_SUCCESS: 'Marketing email deleted successfully',
    NOTE_INSERT_SUCCESS: 'Note inserted successfully',
    NOTES_FETCH_SUCCESS: 'Notes retrieved successfully',
    MISSING_PARAMETER: 'Missing required parameter',
    MKTG_WP_INSERT_SUCCESS: 'Whatsapp marketing information inserted successfully',
    MKTG_WP_UPDATE_SUCCESS: 'Whatsapp marketing information updated successfully',
    MKTG_WP_DELETE_SUCCESS: 'Whatsapp marketing information deleted successfully',
    ERR_READING_EMAIL: 'Failed to read emails',
    ERR_ADDING_NOTES: 'Failed to add note',
    ERR_FETCH_NOTES: 'Failed to retrieve notes',
    NOTES_DELETE_SUCCESS: 'Notes deleted successfully',
    ERR_DELETE_NOTES: 'Failed to delete notes',
    NOTE_UPDATE_SUCCESS: 'Note updated successfully',
    ERR_UPDATE_NOTES: 'Failed to update note',


    

    /**
     * It will return module signup message
     *
     * @param module
     *
     * @return {string}
     */
    registeredSuccess: (module) => {
        return module + ' registered successfully';
    },

    /**
     * It will return required field message
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfRequired: (fieldName) => {
        return fieldName + ' is required.';
    },

    /**
     * It will return message for valid URL.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfURL: (fieldName) => {
        return 'The ' + fieldName + ' must be a valid URL.';
    },

    /**
     * It will return message for alphanumeric field validation.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfAlphaNumeric: (fieldName) => {
        return 'The ' + fieldName + ' must be alpha numeric.';
    },

    /**
     * It will return message for numeric field validation.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfNumeric: (fieldName) => {
        return 'The ' + fieldName + ' field must be numeric.';
    },

    /**
     * It will return message for image extension validation
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkImageExtension: (fieldName, extension = 'jpg, png, jpeg') => {
        return 'The ' + fieldName + ' allows only (' + extension + ').';
    },

    /**
     * It will return message for valid date validation.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfValidDate: (fieldName, dateFormat = 'YYYY-MM-DD') => {
        return 'The ' + fieldName + ' must be in a (' + dateFormat + ')';
    },

    /**
     * It will return message for valid email.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfEmail: (fieldName) => {
        return fieldName + ' must be a valid email address.';
    },

    /**
     * It will return message for valid integer.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkInt: (fieldName) => {
        return 'The ' + fieldName + ' must be a valid integer.';
    },

    /**
     * It will return message for valid float value.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkFloat: (fieldName) => {
        return 'The ' + fieldName + ' must be a valid float value.';
    },

    /**
     * It will return message for integer value between min and max value.
     *
     * @param {string} fieldName
     * @param {integer} min
     * @param {integer} max
     *
     * @return {string}
     */
    checkIntAndMinMax: (fieldName, min, max) => {
        return 'The ' + fieldName + ' must be an integer and' +
            ' between ' + min + ' and ' + max + '.';
    },

    /**
     * It will return message for number value between min and max value.
     *
     * @param {string} fieldName
     * @param {integer} min
     * @param {integer} max
     *
     * @return {string}
     */
    checkNumberAndMinMax: (fieldName, min, max) => {
        return 'The ' + fieldName + ' must be a number and' +
            ' between ' + min + ' and ' + max + '.';
    },

    /**
     * It will return message for field must be a string with min and max
     * number of characters
     *
     * @param fieldName
     * @param min
     * @param max
     *
     * @return {string}
     */
    checkStringMinAndMax: (fieldName, min, max) => {
        return fieldName + ' must be a string and' +
            ' between ' + min + ' to ' + max + ' characters.';
    },

    /**
     * It will return message for enum validation
     *
     * @param {string} fieldName
     * @param {array} enumArray
     *
     * @return {string}
     */
    checkIfValidEnum: (fieldName, enumArray) => {
        return 'The ' + fieldName + ' must have a valid value from ' + enumArray;
    },

    /**
     * It will return message for valid value.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfValidValue: (fieldName) => {
        return 'The ' + fieldName + ' must have a valid value';
    },

    /**
     * It will return message for valid non empty array.
     *
     * @param {string} fieldName
     *
     * @return {string}
     */
    checkIfArray: (fieldName) => {
        return 'The ' + fieldName + ' must not be empty' +
            ' and it should be a valid array.';
    },

    /**
     *  It will return message when both field are not same
     *
     * @param {string} fieldName1
     * @param {string} fieldName2
     *
     * @return {string}
     */
    checkIfSame: (fieldName1, fieldName2) => {
        return fieldName1 + ' and ' + fieldName2 + ' does not match';
    },

    /**
     * It will return message for success in list api.
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_LIST_SUCCESS: (module) => {
        return module + ' list.';
    },

    /**
     * It will return message for error in list api.
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_LIST_ERROR: (module) => {
        return 'Error while listing ' + module + '.';
    },

    /**
     * It will return message for success in store api.
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_STORE_SUCCESS: (module) => {
        return module + ' added successfully!';
    },

    /**
     * It will return message for error is store api
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_STORE_ERROR: (module) => {
        return 'Error while inserting ' + module + ' details.';
    },

    /**
     * It will return message for success in specific get component
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_SHOW_SUCCESS: (module) => {
        return module + ' details.';
    },

    /**
     * It will return message for error in specific get component
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_SHOW_ERROR: (module) => {
        return 'Error during getting ' + module + ' details.';
    },

    /**
     * It will return message for components is already exist
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_EXISTS: (module) => {
        return 'The ' + module + ' already exists.';
    },

    /**
     * It will return message while component found
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_FOUND: (module) => {
        return module + ' found.';
    },

    /**
     * It will return message while component not found error
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_NOT_FOUND: (module) => {
        return 'The ' + module + ' you are looking for is not found.';
    },

    /**
     * It will return message for success in update component.
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_UPDATE_SUCCESS: (module) => {
        return module + ' details has been updated successfully!';
    },

    /**
     * It will return message for error in update component
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_UPDATE_ERROR: (module) => {
        return 'Could not able update ' + module + ' details.';
    },

    /**
     * It will return message for components if already updated
     *
     * @param {string} module - component name
     * @param {string} status - status name
     *
     * @return {string}
     */
    MODULE_STATUS_EXISTS: (module, status) => {
        return module + ' has already ' + status + '!';
    },

    /**
     * It will return message for success in enable/disable component.
     *
     * @param {string} module - component name
     * @param {string} status - enable / disable
     *
     * @return {string}
     */
    MODULE_STATUS_CHANGE: (module, status) => {
        return module + ' ' + status + ' successfully!';
    },

    /**
     * It will return message for error in enable/disable component.
     *
     * @param {string} module - component name
     * @param {string} status - enable / disable
     *
     * @return {string}
     */
    MODULE_STAUS_CHANGE_ERROR: (module, status) => {
        return 'Error while ' + status + ' ' + module + '.';
    },

    /**
     * It will return message for error in delete component.
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_DELETE_ERROR: (module) => {
        return 'Error while deleting ' + module;
    },

    /**
     * It will return message for success in delete component.
     *
     * @param {string} module - component name
     *
     * @return {string}
     */
    MODULE_DELETE_SUCCESS: (module) => {
        return 'The ' + module + ' has been deleted successfully';
    },

    /**
     * It will return message for error in uploaded file size limit
     *
     * @param {string} field - image field name
     * @param {number} size  - size of validated file.
     *
     * @return {string}
     */
    FILE_SIZE_LIMIT: (field, size) => {
        return 'The ' + field + ' size should be less than ' + size + ' MB.';
    },

    /**
     * It will return message for success during file upload.
     *
     * @param {string} field - image field name
     *
     * @return {string}
     */
    FILE_UPLOAD_SUCCESS: (field) => {
        return 'The ' + field + ' has been uploaded successfully.';
    },

    /**
     * It will return message for valid non empty string.
     *
     * @param {string} fieldName
     * @param {integer} min
     * @param {integer} max
     *
     * @return {string}
     */
    checkLength: (fieldName, min, max) => {
        let minimum = typeof min !== 'undefined' ? min.toString() : '';
        let maximum = typeof max !== 'undefined' ? max.toString() : '';

        if (minimum === maximum) {
            return fieldName + ' length should be ' + maximum + ' characters.';
        } else if (maximum === '') {
            return fieldName + ' length must be at least ' + minimum + ' characters.';
        } else if (minimum === '') {
            return fieldName + ' length should not be greater' +
                ' than ' + maximum + ' characters.';
        } else {
            return fieldName + ' length must be between' +
                ' ' + minimum + ' to ' + maximum + ' characters.';
        }
    },
    /**
     * It will return message for valid json.
     *
     * @param {String} fieldName
     *
     * @return {String}
     */
    checkIfValidJSON: (fieldName) => {
        return 'The ' + fieldName + ' field must be a valid JSON String.';
    },

    // file upload
    FILE_TYPE_MISMATCH: function (module) {
        return 'The ' + module + ' must be a valid image file.'
    },
    FILE_UPLOAD_ERROR: 'Error during file upload.',

    // 16-10-23
    TASK_CREATED: 'Task created successfully',
    TASKS_FETCHED: 'Tasks fetched successfully ',
    TASK_UPDATED: 'Task updated successfully',
    TASK_DELETED: 'Task deleted successfully',
    TASK_ACTIVITIES_DELETED: 'Task activities deleted successfully',
    TASK_ACTIVITY_UPDATED: 'Task activity updated successfully',
    TASK_ACTIVITY_CANCELLED: 'Task activity cancelled successfully',
    TASK_ACTIVITY_STARTED: 'Task activity started successfully',
    TASK_ACTIVITY_ENDED: 'Task activity ended successfully',
    TWILLIO_FAILURE: 'Failed to send message',
    PHONE_NOT_FOUND: 'Failed to find phone contact',
    FEEDBACK_SUCCESS: 'Feedback submitted successfully',
    VALIDATION_ERROR: 'Field validation failed on one or more fields',
    VERBS_FETCHED: 'Verbs fetched successfully',
    TASK_COUNT_BY_VERBS_SUCCESS: 'Tasks count for verbs fetched successfully',
    TASK_ACTIVITY_UPDATED_FAILURE: 'Failed to update task activity',
    TSK_ACT_CHART_FETCH_SUCCESS: 'Task activity chart fetched successfully',
    NO_USER_FOUND: 'NO USER FOUND',
    QUOTE_FETCH_SUCCESS: "Quote fetched successfully",
    QUOTE_FETCH_FAILED: "Failed to fetch quote",
    TSK_STATUS_CHART_FETCH_SUCCESS: 'Task status chart fetched successfully',
    BUG_REPORT_SUCCESS: 'Bug reported successfully',
    BUG_REPORTS_FETCH_SUCCESS: 'Bug reports fetched successfully',
    CONTACT_ENQ_CREATION_SUCCESS: 'Contact enquiry created successfully',
    CONTACT_ENQ_FETCH_SUCCESS: 'Contact enquiries fetched successfully',
    BUG_REPORT_UPDATE_SUCCESS: 'Bug report updated successfully',
    CONTACT_ENQ_UPDATE_SUCCESS: 'Contact enquiry updated successfully',
    CONTACT_ENQ_DELETE_SUCCESS: 'Contact enquiry deleted successfully',



};
