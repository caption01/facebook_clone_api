module.exports = (sequelize, Datatype) => {

    const LikeCount = sequelize.define('like', {
        status : {
            type: Datatype.STRING,
            allowNull: false,
        }
    },{
        timestamps: false

    })

    LikeCount.associate = (models) => {
        LikeCount.belongsTo(models.user, {foreignKey: { allowNull: false }})
        LikeCount.belongsTo(models.post, {foreignKey: { allowNull: false }})
    }

    


    return LikeCount

}