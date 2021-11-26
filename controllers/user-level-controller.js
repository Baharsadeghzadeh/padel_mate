var UserLevel = require('../models/user-level');
const dboperations = require('../utils/dboperations');
const router = require('../utils/route');

const TABLE_NAME = 'tbl_userLevel';

router.route('/adduserlevel').post((request, response)=>{
    let level = {...request.body}

    dboperations.addOne(TABLE_NAME, level).then(result => {
        ///status that user created
        response.status(201).json(result);
    })
})

router.route('/getuserlevelandscore/:userid').get((request, response)=>{
    const user_id = [
        {
            name: 'UserId',
            data_type: sql.Int,
            value: request.params.id,
        },
    ];

    dboperations.getSpData('sp_getUserLevel', user_id).then(result => {
        ///status that user created
        response.status(201).json(result);
    })
})