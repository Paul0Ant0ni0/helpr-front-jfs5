import { Setor } from "../enums/setor.enum";

export interface FuturosCandidatos {
    id?: number;
    nomeCompleto: string;
    email: string;
    descricaoDasHabilidades:string;
    setor: Setor;
}
