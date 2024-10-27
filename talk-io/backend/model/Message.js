import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; 

const Message = sequelize.define('Message', {
    content: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
});

export default Message;
