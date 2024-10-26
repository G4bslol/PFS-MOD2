import '../styles/Table.css'


function Table(props) {
    return (
        <>
            <table>
                <tbody className="tabela">
                    {props.users.map((e, index) => (
                        <tr key={index}>
                            <td>{e.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;