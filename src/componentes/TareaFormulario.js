    import React, { useState } from "react";
    import '../hojas-de-estilo/TareaFormulario.css';
    import { v4 as uuidv4} from  'uuid';
    function TareaFormulario(props) {
        const [input, setInput] = useState('');
        const manejoCambio = e => {
            setInput(e.target.value);
        }
        const manejoEnvios = e => {
            e.preventDefault();
            
            const tareaNueva =  {
                id: uuidv4(),
                texto: input,
                completada: false
            }
            props.onSubmit(tareaNueva);
        }
        return ( 
            <form className="tarea-formulario"
            onSubmit={manejoEnvios}>
                <input 
                className="tarea-input"
                type='text'
                placeholder='Añadir tarea...'
                name='texto'
                onChange={manejoCambio}
                />
                <button className='tarea-boton'>
                    Agregar Tarea
                    </button>
            </form>
        );

    }
    export default TareaFormulario;