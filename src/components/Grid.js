import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default function Grid() {
  const [state, setState] = useState({
    columnDefs: [
      {
        headerName: "Make",
        field: "make"
      },
      {
        headerName: "Model",
        field: "model"
      },
      {
        headerName: "Price",
        field: "price"
      }
    ],
    rowData: [
      {
        make: "Toyota",
        model: "Celica",
        price: 35000
      },
      {
        make: "Ford",
        model: "Mondeo",
        price: 32000
      },
      {
        make: "Porsche",
        model: "Boxter",
        price: 72000
      }
    ]
  });

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "300px",
        width: "600px"
      }}
    >
      <AgGridReact columnDefs={state.columnDefs} rowData={state.rowData}></AgGridReact>
    </div>
  );
}
