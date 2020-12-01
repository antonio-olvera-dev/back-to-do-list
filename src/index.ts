import express from "express";
import { json } from "sequelize/types";
import { notesRoutes } from "./routes/notes.routes";

const app = express();


app.use(express.json());
app.use('/', notesRoutes.router);

app.set('port', 3000);
app.listen(app.get('port'), ()=>{

    console.log(`http://localhost:${app.get('port')}`);
    
});

