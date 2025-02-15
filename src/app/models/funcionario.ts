import { Perfil } from "../enums/perfil.enum";
import { Cargos } from "./cargos";

export interface Funcionario {
    id?: number;
    nome: string;
    email: string;
    cpf:string;
    foto?: string;
    perfil?: Perfil;
    cargo: Cargos;
    senha:string;
}
