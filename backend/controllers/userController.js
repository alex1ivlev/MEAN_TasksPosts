const express = require('express');
const userBL = require('../models/userBL');

const appRouter = express.Router();

appRouter.route('/')
    .get(async function(req,resp)
    {
        let users = await userBL.getAllUsers();
        return resp.json(users);
    })

appRouter.route('/:id')
    .get(async function(req,resp)
    {
        let id = req.params.id;
        let user = await userBL.getUser(id);
        return resp.json(user);
    })

appRouter.route('/')
    .post(async function(req,resp)
    {
        let obj = req.body;
        let result = await userBL.addUser(obj);
        return resp.json(result);
    })


appRouter.route('/:id')
    .put(async function(req,resp)
    {
        let obj = req.body;
        let id = req.params.id;

        let result = await userBL.updateUser(id,obj);
        return resp.json(result);
    })

appRouter.route('/:id')
    .delete(async function (req, resp) {
        let id = req.params.id;

        let result = await userBL.deleteUser(id);
        return resp.json(result);
    })

appRouter.route('/:id/task')
    .post(async function(req,resp)
    {
        let id = req.params.id;
        let obj = req.body;
        let result = await userBL.addTask(id, obj);
        return resp.json(result);
    })
appRouter.route('/:id/task/:task_id')
    .put(async function(req,resp)
    {
        let id = req.params.id;
        let task_id = req.params.task_id;
        let result = await userBL.completeTask(id, task_id);
        return resp.json(result);
    })
appRouter.route('/:id/post')
    .post(async function(req,resp)
    {
        let id = req.params.id;
        let obj = req.body;
        let result = await userBL.addPost(id, obj);
        return resp.json(result);
    })
module.exports = appRouter;
