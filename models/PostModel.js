import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Post = db.define('posts',{
     title: {
        type: DataTypes.STRING
    } ,
     description: {
        type: DataTypes.JSON
    }
},{
    freezeTableName:true
});

export default Post;

(async()=>{
    await db.sync();
})();