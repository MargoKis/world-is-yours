import React, { useState } from "react";
import { useTable } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ProductsList = ({ onAddProductClick }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const data = React.useMemo(
    () => [
      {
        code: "1234",
        name: "Трекінгове взуття",
        category: "Взуття",
        price: 100,
        quantity: 10,
        status: "В наявності",
      },
      {
        code: "5678",
        name: "Бігова куртка",
        category: "Одяг",
        price: 80,
        quantity: 20,
        status: "В наявності",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Артикул", accessor: "code" },
      { Header: "Назва товару", accessor: "name" },
      { Header: "Категорія", accessor: "category" },
      { Header: "Ціна на сайті", accessor: "price" },
      { Header: "Кількість", accessor: "quantity" },
      { Header: "Статус", accessor: "status" },
      { Header: "Дії", accessor: "actions" },
    ],
    []
  );

  const renderActions = (row) => (
    <div className="flex flex-row justify-center gap-8">
      <FontAwesomeIcon icon={faPen} style={{ cursor: "pointer" }} />
      <FontAwesomeIcon
        icon={faTrashAlt}
        style={{ color: "red", cursor: "pointer" }}
      />
    </div>
  );

  const augmentedData = data.map((item) => ({
    ...item,
    actions: renderActions(item),
  }));

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: augmentedData });

  const toggleRowSelection = (code) => {
    if (selectedRows.includes(code)) {
      setSelectedRows(selectedRows.filter((rowCode) => rowCode !== code));
    } else {
      setSelectedRows([...selectedRows, code]);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between mb-4">
        <button
          className="p-4 w-80 text-blue font-bold rounded-lg border border-blue bg-white"
          onClick={onAddProductClick}
        >
          Додати товар
        </button>
        <div className="flex flex-col">
          <p className="">Всього товарів - 100 000</p>
          <p className="">Товарів у підкатегорії - 5000</p>
        </div>
      </div>

      <table
        {...getTableProps()}
        className="border-collapse border border-gray-300 rounded-lg"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th className="p-2 border border-gray-300 bg-blue text-white font-medium"></th>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="p-2 border border-gray-300 bg-blue text-white font-medium"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const isRowSelected = selectedRows.includes(row.original.code);
            return (
              <tr
                {...row.getRowProps()}
                className={isRowSelected ? "bg-highlight" : ""}
                onClick={() => toggleRowSelection(row.original.code)}
              >
                <td className="p-2 border border-gray-300">
                  <input type="checkbox" checked={isRowSelected} readOnly />
                </td>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-2 border border-gray-300"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductsList;
