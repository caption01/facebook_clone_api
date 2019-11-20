module.exports= (app, db) => {

    app.get('/user', (req, res) => {

        db.user.findAll({
            include: {
                model: db.post,
                include: {
                    model: db.comment
                }
            }
        })  
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant get data'))
            
    })

    app.get('/user/:id', (req, res) => {
        
        let userId =  Number(req.params.id)

        db.user.findAll({
            where: {
                user_id: userId
            }, include: {
                model: db.post,
                include: {
                    model: db.comment
                }
            }
        })  
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json(`cant get data from user_id ${req.params.id}`))
    })

    app.post('/user', (req, res) => {

        db.user.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(404).json('cant create user'))

    })

}