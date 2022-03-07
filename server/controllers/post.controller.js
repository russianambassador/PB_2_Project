export default class PostController{
    static async GetPostCheck(req, res, next) {
        res.send("welcome.Post Route works.Post Controller Works.Good start").catch(e => res.json({error: e}))
    }
}