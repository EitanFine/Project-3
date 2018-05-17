

module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
       
        categoryType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
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
