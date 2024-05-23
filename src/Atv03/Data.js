const today = new Date();

function formatDate(date){
    return new Intl.DateTimeFormat(
        'pt-BR',
        {weekday: 'long'}
        ).format(date);
        
    }
    
    export default function TodoList(){
        const nome = 'Rayan Anzai';
        return(
            <>
                <h1>{nome}- Lista de tarefas</h1>
                <h1>{formatDate(today)}</h1>
            </>
        );
    }