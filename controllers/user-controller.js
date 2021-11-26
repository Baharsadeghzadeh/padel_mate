var User = require('../models/user');
const dboperations = require('../utils/dboperations');
const router = require('../utils/route');

const TABLE_NAME = 'tbl_user';

//create the route which will create all the user
router.route('/user').get((request, response)=>{
    dboperations.getAll(TABLE_NAME).then(result => {
        response.json(result[0]);
    })
})

router.route('/user/:id').get((request, response)=>{
    dboperations.getOneById(request.params.id).then(result => {
        response.json(result[0]);
    })
})

router.route('/adduser').post((request, response)=>{
    let user = {...request.body}

    dboperations.addOne(TABLE_NAME, user).then(result => {
        ///status that user created
        response.status(201).json(result);
    })
})

router.route('/updateuser').post((request, response)=>{
    let user = {...request.body}

    dboperations.updateOne(TABLE_NAME, user).then(result => {
        ///status that user created
        response.status(201).json(result);
    })
})