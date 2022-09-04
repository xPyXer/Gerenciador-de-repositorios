import bcrypt from "bcryptjs";



export const createPasswordHash = async (password) => {
    bcrypt.hash(password, 8); //8 = bytes
};


// Usar criptografias NÃO REVERSÍVEIS
// XOR reversível n usar pra senhas
//Base64 reversível n usar pra senhas