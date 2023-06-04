import express from "express";

import Mess from '../model/Mess.js'
import {getAllItem,addItem,getItemById,updateItem,deleteItem}  from '../controllers/mess-controller.js';

const Mess_Router = express.Router();
Mess_Router.get('/' ,getAllItem);
Mess_Router.post('/',addItem);
Mess_Router.get('/:id',getItemById);
Mess_Router.put('/:id',updateItem);
Mess_Router.delete('/:id' ,deleteItem);


export default Mess_Router;