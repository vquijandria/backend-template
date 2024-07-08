const express = require('express');
const router = express.Router();
const fs = require('fs');

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skipFile = ['index'].includes(fileWithOutExt)
    if (!skipFile) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))   //TODO: localhost/users
        console.log('CARGAR RUTA --->', fileWithOutExt)
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Route not found' })
})

module.exports = router;