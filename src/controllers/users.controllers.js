

module.exports = {
    index(req, res) {
        res.json({ message: 'Hello World from controller user' });
    },
    create(req, res) {
        let msg = '';
        res.json({ msg: msg });
    }
}