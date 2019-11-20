module.exports= (app, db) => {

    app.get('/like', (req, res) => {

        db.like.findAll()
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant get like'))

    })

    app.post('/like', (req, res) => {

        db.like.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant create like'))

    })

}