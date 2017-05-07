module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
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
                type: DataTypes.DATE,
                allowNull: false
            }
        },
        {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // An Author (foreignKey) is required or a Post can't be made
                    Burger.belongsTo(models.Customer, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
    );
    return Burger;
};