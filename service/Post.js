module.exports= (app, db) => {

    app.get('/post', (req, res) => {

        db.post.findAll({include: [db.comment, db.like]})
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant get post data'))

    })

    app.get('/post/:id', (req, res) => {
        
        let userId =  Number(req.params.id)

        db.post.findAll({
            where: {
                userUserId: userId
            }, include: [
                {model: db.comment},
                {model: db.like}
            ]
        })  
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json(`cant get post data from user_id ${req.params.id}`))
    })

    app.post('/post', (req, res) => {

        db.post.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant create post'))

    })

}