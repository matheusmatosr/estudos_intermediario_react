import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App(){

    const [tarefas, setTarefas] = useState([
        'Pagar fatura cartão', 
        'Estudar mais React'
    ]);
    const [input, setInput] = useState('');
    
    // qnd fica vazio [], vai automatico ser executado
   useEffect(() => {
        const tarefasStorage = localStorage.getItem('tarefas');

        if (tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }
   }, [])
   
    // toda vez que tarefas for atualizado vai chamar essa funcão
    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas])


    // o usecallback é para executar essa função somente qnd for add algo novo
    const handleAdd = useCallback(() => {
        setTarefas([...tarefas, input])
        setInput('');
    }, [input, tarefas]);
    
    const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

    // ul: lista
    return (
        <div>
            <h1>Hooks:</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <strong>Você tem {totalTarefas} tarefas!</strong>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="button" onClick={handleAdd}>Adicionar</button>
        </div>

    );
}

export default App;