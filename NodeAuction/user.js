const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            email : {
                type : Sequelize.STRING(40),
                allowNull : false,
                unique : true,
            },
            nick : {
                type : Sequelize.STRING(15),
                allowNull : false,
            },
            password : {
                type : Sequelize.STRING(100),
                allowNull : true,
            },
            money:{
                type : Sequelize.INTEGER,
                allowNull : false,
                defaultValue : 0,
            },
        },{
            sequelize,
        })
    }
}