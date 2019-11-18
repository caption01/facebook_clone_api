module.exports= (app, db) => {

    app.get('/comment', (req, res) => {

        db.comment.findAll()
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant get data'))

    })

    app.post('/comment', (req, res) => {

        db.comment.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant create user'))

    })

}