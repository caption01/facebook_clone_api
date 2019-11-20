module.exports = (sequelize, Datatype) => {

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
        image_content : {
            type: Datatype.TEXT,
            allowNull: true
        },
        text_content : {
            type: Datatype.TEXT,
            allowNull: false
        }
    })


    Post.associate = (models) => {
        Post.belongsTo(models.user, {foreignKey: {allowNull: false  }})
        Post.hasMany(models.comment)
        Post.hasMany(models.like)
    }

    


    return Post

}