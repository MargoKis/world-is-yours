import React from 'react';
import { useTable } from 'react-table';

const ProductsList = () => {
  const columns = React.useMemo(
    () => [
      { Header: 'Артикул', accessor: 'code' },
      { Header: 'Назва товару', accessor: 'name' },
      { Header: 'Категорія', accessor: 'category' },
      { Header: 'Ціна', accessor: 'price' },
      { Header: 'Кількість', accessor: 'quantity' },
      { Header: 'Статус', accessor: 'status' },
      { Header: 'Дії', accessor: 'actions' },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { code: '1234', name: 'Трекінгове взуття', category: 'Взуття', price: 100, quantity: 10, status: 'В наявності', actions: 'Редагувати' },

    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <>
     <div className='flex flex-row justify-between mb-4'>
         <button className='p-4 w-80 text-blue font-bold rounded-lg border border-blue bg-white'>Додати товар</button>
         <div className='flex flex-col'>
           <p className=''>Всього товарів - 100 000</p>
          <p className=''>Товарів у підкатегорії - 5000</p>
         </div>
       </div>
  
    <div>
      <table {...getTableProps()} className="border-collapse border border-gray-300 w-full">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="p-2 border border-gray-300">{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()} className="p-2 border border-gray-300">{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default ProductsList;


