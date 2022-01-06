import { Router } from "express";
import { resize } from "../util/image";

const router = Router()

router.get('/images', (req, res) => {
    try {
        const filename = (req.query.filename as unknown) as string;
        const width = parseInt((req.query.width as unknown) as string);
        const height = parseInt((req.query.height as unknown) as string);
        resize(filename, width, height).then(outputFilename => {
            res.sendFile(outputFilename)})
            .catch(err => {
                console.log(`failed to resize: ${err}`)
                res.status(400).send(`<h1>Oops, there is something wrong...</h1> ${err}`)
            });
    } catch (err) {
        console.log(`failed to hanlde request: ${err}`)
        res.sendStatus(400)
    }
})

export default router;