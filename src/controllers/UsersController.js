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
            if (user) {
                return res.status(422).json({ message: `User ${email} already exists.`})
            }

            const newUser = await User.create({ email, password });
            return res.status(200).json({newUser});
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