// _db.js
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "disaster_db",
});

const user = sequelize.define("user", {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  coordinates: DataTypes.STRING,
  type: DataTypes.STRING,
  availability: DataTypes.BOOLEAN,
});

const disaster = sequelize.define("disaster", {
  disasterId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  coordonates: DataTypes.STRING,
  type: DataTypes.STRING,
  severity: DataTypes.INTEGER,
});

const resource = sequelize.define("resource", {
  resourceId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  type: DataTypes.STRING,
  coordinates: DataTypes.STRING,
  availability: DataTypes.BOOLEAN,
});
const paragraph = sequelize.define("paragraph", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  paragraph: DataTypes.STRING,
});

export { user, disaster, resource, paragraph };
