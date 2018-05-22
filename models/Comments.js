const Item = require('./item');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
        commentItemId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        commentUserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commentUserName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Comment.associate = models => {
        models.Comment.belongsTo(models.Items, {
            onDelete: "CASCADE",
            foreignKey: 'commentItemId'
        })
    };

    Comment.associate = models => {
        models.Comment.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey: "commentUserId"
        }
    )
    }

    return Comment;


}