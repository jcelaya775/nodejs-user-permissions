function authUser(req, res, next) {
    if (req.user == null) {
        return res.status(403).send('You need to sign in')
    }

    next()
}

function authRole(role) {
    return (req, res, next) => {
        console.log(req.user.role)
        if (req.user.role !== role) {
            res.status(401)
            return res.send('Not allowed')
        }

        next()
    }
}

module.exports = { authUser, authRole }