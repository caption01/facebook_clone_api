module.exports = (sequelize, Datatype) => {

    const Post = require('./post')
    const User = require('./user')


    const Comments = sequelize.define('comment', {
        comment_id : {
            type: Datatype.INTEGER(10),
            uniqe: true,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        image_url : {
            type: Datatype.STRING,
            allowNull: true
        },
        image_text : {
            type: Datatype.TEXT,
            allowNull: true
        },
        text : {
            type: Datatype.TEXT,
            allowNull: true
        }
    })

    Comments.associate = (models) => {
        Comments.belongsTo(models.user)
        Comments.belongsTo(models.post)
    }

    return Comments

}