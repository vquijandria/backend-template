const { httpError } = require("../helpers/handleError")
const userModel = require('../models/users')

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = async (req, res) => {
    try {
        const { id } = req.params
        const resDetail = await userModel.findById(id)
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const createItem = async (req, res) => {
    try{
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name, age, email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updateItem = async (req, res) => {
    try {
        const { id } = req.params
        const { name, age, email } = req.body
        const resDetail = await userModel.findByIdAndUpdate(id, {
            name, age, email
        })
        res.send({ data: resDetail })
    } catch (e){
        httpError(res, e)
    
    }
}

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params
        const resDetail = await userModel.findByIdAndDelete(id)
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };