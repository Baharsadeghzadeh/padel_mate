var UserPlacement = require('../models/user-placement');
const dboperations = require('../utils/dboperations');
const router = require('../utils/route');
const sql = require('mssql');

const TABLE_NAME = 'tbl_userPlacement';

router.route('/adduserplacement').post((request, response)=>{
    let placement = {...request.body}
    const data = [
        {
            name: 'UserId',
            data_type: sql.Int,
            value: placement.UserId,
        },
        {
            name: 'QuestionOneInt',
            data_type: sql.Int,
            value: placement.QuestionOneInt,
        },
        {
            name: 'QuestionTwoInt',
            data_type: sql.Int,
            value: placement.QuestionTwoInt,
        },
        {
            name: 'QuestionThreeInt',
            data_type: sql.Int,
            value: placement.QuestionThreeInt,
        },
        {
            name: 'QuestionFourInt',
            data_type: sql.Int,
            value: placement.QuestionFourInt,
        },
        {
            name: 'QuestionFiveInt',
            data_type: sql.Int,
            value: placement.QuestionFiveInt,
        },
        {
            name: 'UserStateLevelInt',
            data_type: sql.Int,
            value: placement.UserStateLevelInt,
        },
    ];

    dboperations.executeSp('sp_addUserPlacement', data).then(result => {
        ///status that user created
        response.status(201).json(result);
    })
})