module.exports= (app, db) => {

    app.get('/post', (req, res) => {

        db.post.findAll({include: [db.comment]})
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant get post data'))

    })

    app.post('/post', (req, res) => {

        db.post.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant create post'))

    })

}