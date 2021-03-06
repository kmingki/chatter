const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

class Image extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
          //id가 기본적으로 들어있다.
          src:{
              type: DataTypes.STRING(200),
              allowNull: false,
          },
      },
      {
          modelName:'Image',
          tableName: 'images',
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci', //이모티콘 저장
          sequelize, 
    });
  }
  static associate(db){
      db.Image.belongsTo(db.Post);
  }
}

module.exports = Image;