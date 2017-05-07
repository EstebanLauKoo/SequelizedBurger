module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            burger_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE(3),
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
            },
            updatedAt: {
                type: DataTypes.DATE(3),
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
            },
            createdAt: {
                type: DataTypes.DATE(3),
                allowNull: false,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
            }
        }
        //{
       //    // We're saying that we want our Author to have Posts
       //    classMethods: {
       //        associate: function(models) {
       //            // An Author (foreignKey) is required or a Post can't be made
       //            Burger.belongsTo(models.Customer, {
                    //                foreignKey: {
       //                    allowNull: false
                        //                }
       //            });
       //        }
       //    }
       //}
    );
    return Burger;
};