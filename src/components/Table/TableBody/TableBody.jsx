
export const TableBody = ({columns, tableData}) => {
    return (
        <tbody>
           {tableData.map(data => (
            <tr key={data.id}>
               {columns.map(({key, label}) => (
                    <td key={key}>{data[key] ? data[key] : 'Введите данные'}</td>
                ) )}
            </tr>
           ))} 
        </tbody>
    )
}