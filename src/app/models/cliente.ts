import { Perfil } from "../enums/perfil.enum";

export interface Cliente {
    id?: number;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    perfil?: Perfil.CLIENTE;
    senha?: string;
}
