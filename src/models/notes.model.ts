import { Model, DataTypes, Sequelize} from "sequelize";
import { database } from "../databases";


export class Notes extends Model {

    public id!: number;
    public description!: string;
    public createdAt!: Date;
    public updateAt!: Date



}


Notes.init({

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }


},
    {
        tableName: 'notes',
        sequelize: database
    });