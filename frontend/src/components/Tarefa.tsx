import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Tarefa.scss';

//#region definição estrutura
enum PrioridadeEnum {
	ALTA = 1,
	NORMAL = 2,
	BAIXA = 3
}

function PriorEnumToString(prioridade:PrioridadeEnum):string {
	switch (prioridade) {
		case 1: return 'Alta';
		case 2: return 'Normal';
		case 3: return 'Baixa';
	}

	return '';
}

enum StatusEnum {
	A_FAZER = 1,
	FAZENDO = 2,
	FEITO = 3,
	CANCELADO = 4
}

function StatusEnumToString(status:StatusEnum):string {
	switch (status) {
		case 1: return 'A Fazer';
		case 2: return 'Fazendo';
		case 3: return 'Feito';
		case 4: return 'Cancelado';
	}

	return '';
}


class Autor {
	constructor (
		public id:number,
		public nome:string) {}
}

class Tarefa {
	constructor (
		public id:number,
		public nome:string,
		public descr:string,
		public status:StatusEnum,
		public data_finalizacao:Date,
		public data_criacao:Date,
		public prioridade:PrioridadeEnum,
		public autor:Autor) {}
}

const autores = [
	new Autor(1, 'Lucas Jaques'),
	new Autor(2, 'Teste Autor')
]

const tarefas = [
	new Tarefa(1, 'Aniversário', 'uma tarefa de teste', StatusEnum.FAZENDO, new Date('2023/06/07'), new Date('2023/05/07'), PrioridadeEnum.ALTA, autores[0]),
	new Tarefa(2, 'Testing', '', StatusEnum.FEITO, new Date('2023/01/01'), new Date('2022/12/20'), PrioridadeEnum.BAIXA, autores[1]),
]

const dateOpts:Intl.DateTimeFormatOptions = {year:'numeric', month:'numeric', day:'numeric'}

//#endregion

export default function ToDoTask() {
	function renderTabela() {
		return tarefas.map((tarefa) => (
			<TableRow key={tarefa.id} >
				<TableCell>{tarefa.id}</TableCell>
				<TableCell> {tarefa.nome} </TableCell>
				<TableCell>{tarefa.autor.nome}</TableCell>
				<TableCell>{StatusEnumToString(tarefa.status)}</TableCell>
				<TableCell>{PriorEnumToString(tarefa.prioridade)}</TableCell>
				<TableCell>{tarefa.data_finalizacao.toLocaleDateString('pt-BR', dateOpts)}</TableCell>
			</TableRow>
		))
	}

	return <>
		<center>
			<TableContainer component={Paper} className={'tbl'}>
				<Table aria-label="Lista de Tarefas">
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Nome</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Data Finalização</TableCell>
							<TableCell>Prioridade</TableCell>
							<TableCell>Autor</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
						{renderTabela()}
					</TableBody>
				</Table>
			</TableContainer>
		</center>
	</>
}
