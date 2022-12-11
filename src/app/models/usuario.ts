import { Perfil } from "../enums/perfil.enum";

export interface Usuario{
    id?: number,
    nome: string,
    email: string
    cpf: string,
    senha: string,
    perfil: Perfil

}