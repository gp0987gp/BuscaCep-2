import axios from 'axios';
import React, {
    Component, useState, ChangeEvent, FormEvent, useEffect
} from 'react';
import styles from '../App.module.css';
import { CadastroInterface } from '../interface/CadastroInterface';
const Listagem = () => {

    const [usuarios, setUsuarios] = useState<CadastroInterface[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fatchData() {
            try {
                const response = await axios.get('http://10.137.9.131:8000/api/find')
                setUsuarios(response.data.data);

            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }

        fatchData();
    }, []);


    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem de Usuários
                            </h5>
                            <table className='table table-hover '>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>E-mail</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.cpf}</td>
                                        <td>{usuario.email}r</td>
                                        <td>
                                            <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                            <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default Listagem;