import { Cliente } from './cliente';
import { Funcionario } from './funcionario';
export interface Chamado {
    idChamado?: number;
    titulo: string;
    descricao: string;
    dataAbertura?: string;
    dataFechamento?: string;
    status?: string;
    funcionario: Funcionario;
    cliente: Cliente;
}
