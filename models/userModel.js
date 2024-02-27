// userModel.js

//  user model
class User {
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    //  method to get user details
    getUserDetails() {
        return {
            id: this.id,
            username: this.username,
            email: this.email
        };
    }

    //  method to update user details
    updateUserDetails(username, email) {
        this.username = username;
        this.email = email;
        // Logic to update user details in the database (if applicable)
    }
}

module.exports = User;
