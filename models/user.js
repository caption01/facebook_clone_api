module.exports = (sequelize, DataType) => {

    const User = sequelize.define('user', {
        user_id: {
            type: DataType.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_name: {
            type: DataType.STRING,
            allowNull: false,
            unique: true
        },
        user_password: {
            type: DataType.STRING,
            allowNull: false
        },
        user_profile: {
            type: DataType.STRING,
            allowNull: false
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    User.associate = (models) => {
        User.hasMany(models.post)
        User.hasMany(models.comment)
        User.hasMany(models.like)
    }
    

    return User
}