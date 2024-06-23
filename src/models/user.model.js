export default class UserModel{

    constructor( name, email, password){
        this.name =name;
        this.email = email;
        this.password = password;
    }

    static get(){
        return users;
    }
    static addUser(user){
        let newUser = new UserModel(
            user.name,
            user.email,
            user.password,
        );
        users.push(newUser);
        console.log(newUser);
    }

    static authenticateUser(reqUser){
        const result = users.find(
            (user) =>
            user.email === reqUser.email && user.password === reqUser.password
        );
        return result;
    }
}





var users = [];