import User from "../models/User"

class UsersController {
    async index(req, res) {
        try {
            //... vai executar o código aqui
            const users = await User.find();
            return res.json(users);
        } catch(err) {
            //... retornar o erro
            console.error(err);
            return res.status(500).json({ error: "Internal server error."});
        }
    }

    async create(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email })
        } catch (err) {

        }
    }

    async read(req, res) {
        
    }

    async update(req, res) {
        
    }

    async delete(req, res) {
        
    }
};


export default new UsersController();