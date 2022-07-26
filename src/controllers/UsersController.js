import User from "../models/User"
import { createPasswordHash } from "../services/auth"


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
            const user = await User.findOne({ email, password })

            if (user) {
                return res
                .status(422)
                .json({ message: `User ${email} already exists.`})
            }
            //Criptografa o password
            const encryptedPassword = await createPasswordHash(password);
            const newUser = await User.create({ email, encryptedPassword });


            return res.status(201).json(newUser);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error."})
        };
    }

    async read(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
        if (!user) {
            return res.status(404).json();
        }
        return res.json(user)

        } catch(err) {            
            //... retornar o erro
            console.error(err);
            return res.status(500).json({ error: "Internal server error."});
        }
    }

    async update(req, res) {
        
    }

    async delete(req, res) {
        
    }
};


export default new UsersController();