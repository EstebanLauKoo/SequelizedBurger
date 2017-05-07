/**
 * Created by esteb on 5/7/2017.
 */
module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
            // Giving the Author model a name of type STRING
            name: DataTypes.STRING,
            updatedAt: {
                type: DataTypes.DATE(3),
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
            },
            createdAt: {
                type: DataTypes.DATE(3),
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
            }
        }
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        //{
        //    // We're saying that we want our Author to have Posts
        //    classMethods:
        //        associate: function(models) {
        //            // Associating Author with Posts
        //            // When an Author is deleted, also delete any associated Posts
        //            Customer.hasMany(models.Burger, {
        //                onDelete: "cascade"
        //            });
        //        }
        //    }
        //}
    );
    return Customer;
};
