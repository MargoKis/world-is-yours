import React from "react";
import { useTable } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import tent from "../../../../assets/png/tent.png";

const ProductsList = () => {
  const data = React.useMemo(
    () => [
      {
        code: "1234",
        photo: (
          <img
            src={tent}
            alt="Трекінгове взуття"
            className="w-20 h-20 mr-2 rounded-xl"
          />
        ),
        name: "Трекінгове взуття",
        category: "Взуття",
        price: 100,
        quantity: 10,
        status: "В наявності",
      },
      {
        code: "5678",
        photo: (
          <img
            src={tent}
            alt="Бігова куртка"
            className="w-20 h-20 mr-2 rounded-xl"
          />
        ),
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
      { Header: "Фото", accessor: "photo" },
      { Header: "Назва товару", accessor: "name" },
      { Header: "Категорія", accessor: "category" },
      { Header: "Ціна на сайті", accessor: "price" },
      { Header: "Кількість", accessor: "quantity" },
      { Header: "Статус", accessor: "status" },
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

  return (
    <>
      <table
        {...getTableProps()}
        className="border-collapse border border-gray-300 rounded-lg mr-10"
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
            return (
              <tr {...row.getRowProps()}>
                <td className="p-2 border border-gray-300">
                  <input type="checkbox" />
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
