import { Request, Response } from "express";
import { Notes } from "../models/notes.model";

class NotesController {


    async getAll(req: Request, res: Response) {

        try {

            const allNotes = await Notes.findAll({ raw: true });
            res.send(allNotes);

        } catch (error) {
            res.sendStatus(501);
        }

    }



    async setOne(req: Request, res: Response) {

        try {

            const text = req.body;

            await Notes.create(text);

            res.send(`Nota creada correctamente`)

        } catch (error) {
            res.sendStatus(501);
        }

    }


    async delOne(req: Request, res: Response) {

        try {

            const id = req.params.id;

            await Notes.destroy({
                where: {
                    id: id
                }
            });

            res.send('Nota borrada correctamente')

        } catch (error) {
            res.sendStatus(501);
        }

    }


    async updateOne(req: Request, res: Response) {

        try {

            const id = req.params.id;
            const text = req.body.description;

            await Notes.update(


                {
                    description: text
                },
                {
                    where: {
                        id: id
                    }
                }



            );

            res.send('Nota actualizada correctamente')

        } catch (error) {
            res.sendStatus(501);
        }

    }

}

export const notesController = new NotesController();