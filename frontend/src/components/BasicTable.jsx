import React, { useMemo } from "react";
import jsonData from "../data.json";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import moment from "moment";


export default function BasicTable() {

  const data = useMemo(() => {
    return jsonData.map((item) => {
      return {
        ...item,
        createdAt: moment(item.createdAt).format("MMM-DD-YY"),
        updatedAt: moment(item.updatedAt).format("DD-MMM-YY"),
        price: item.price ?? 0,
        sale_price: item.sale_price ?? 0,
      };
    });
  }, [jsonData]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 50,
      },
      {
        accessorKey: "category",
        header: "Category",
        size: 50,
      },
      {
        accessorKey: "subcategory",
        header: "Subcategory",
        size: 50,
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        size: 50,
      },
      {
        accessorKey: "updatedAt",
        header: "updatedAt",
        size: 50,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 50,
      },
      {
        accessorKey: "sale_price",
        header: "Sale Price",
        size: 50,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data,
    columns,
    muiPaginationProps: {
      color: "standard",
      shape: "rounded",
      showRowsPerPage: false,
      variant: "outlined",
    },
    paginationDisplayMode: "pages",
    positionPagination: "bottom"
  });

  return <MaterialReactTable table={table} />;
}
