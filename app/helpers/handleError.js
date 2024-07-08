const httpError = (res, err) => {
    console.log(err)
    res.status(500)
    res.send({ error: 'Internal server error' })
}

module.exports = { httpError };