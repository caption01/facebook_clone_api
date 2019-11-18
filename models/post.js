module.exports = (sequelize, Datatype) => {

    const User = require('./user')
    const Comments = require('./comment')

    const Post = sequelize.define('post', {
        post_id : {
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

    Post.associate = (models) => {
        Post.belongsTo(models.user)
        Post.hasMany(models.comment)
    }

    


    return Post

}