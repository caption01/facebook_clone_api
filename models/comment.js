module.exports = (sequelize, Datatype) => {

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
        Comments.belongsTo(models.user, {foreignKey: { allowNull: false }})
        Comments.belongsTo(models.post, {foreignKey: { allowNull: false }})
    }

    return Comments

}