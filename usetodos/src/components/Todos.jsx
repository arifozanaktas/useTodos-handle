import React from 'react';
import useTodos from '../hooks/useTodos';


function Todos() {

    const { todos, loading, error } = useTodos()

    return <>
        <p style={{color:"red"}}>{error.message}</p>
        <h1>Todos</h1>
        <hr />
        {
            loading ? <p>Loading...</p> : <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity Per Units</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                <td>{todo.unitPrice}</td>
                                <td>{todo.unitsInStock}</td>
                                <td>{todo.quantityPerUnit}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        }
    </>
}

export default Todos