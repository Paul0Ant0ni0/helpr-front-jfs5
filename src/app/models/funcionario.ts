import { Perfil } from "../enums/perfil.enum";

export interface Funcionario {
    idChamado?: number;
    nome: string;
    email: string;
    cpf:string;
    foto?: string;
    perfil: Perfil;
    cargo: any;
    senha:string;
}
