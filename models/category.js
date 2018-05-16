

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
       
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    Category.associate = function (models) {
        models.Category.hasMany(models.Item, {foreignKey: 'itemCatId'});
    };

    return Category;
};
