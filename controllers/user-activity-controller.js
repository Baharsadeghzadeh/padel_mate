var UserActivity = require('../models/user-activity');
var ActivityPlayer = require('../models/user-activity');
const dboperations = require('../utils/dboperations');
const userActivityDboperations = require('../utils/userActivityDboperations');
const router = require('../utils/route');
const sql = require('mssql');

const TABLE_NAME = 'tbl_userActivity';

router.route('/activity/:id').get((request, response)=>{
    dboperations.getOneById(request.params.id).then(result => {
        response.json(result[0]);
    })
})

router.route('/useractivity/:userid').get((request, response)=>{
    dboperations.getDataByUserId(request.params.userid).then(result => {
        response.json(result[0]);
    })
})

router.route('/adduseractivity').post((request, response)=>{
    let activity = {...request.body}

    dboperations.addOne(TABLE_NAME, activity).then(result => {
        ///status that user created
        response.status(201).json(result);
    })
})

router.route('/updateuseractivity').post((request, response)=>{
    let activity = {...request.body}

    dboperations.updateOne(TABLE_NAME, activity).then(result => {
        ///status that user created
        response.status(201).json(result);
    })
})

router.route('/deleteuseractivity/:id').get((request, response)=>{
    dboperations.deleteOneById(request.params.id).then(result => {
        response.json(result[0]);
    })
})

