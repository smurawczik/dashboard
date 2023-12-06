import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component
import { useCallback, useMemo, useRef } from "react";

import { CellClickedEvent } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { columnDefs, engineeringTeam } from "../mocks/team.mocks";

export const TeamTable = () => {
  const gridRef = useRef(null);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
    }),
    []
  );

  const cellClickedListener = useCallback((event: CellClickedEvent) => {
    console.log("cellClicked", event);
  }, []);

  return (
    <div
      className="ag-theme-alpine-dark"
      style={{ width: "100%", height: 300 }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={engineeringTeam}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
        onCellClicked={cellClickedListener}
        enableCellChangeFlash
      />
    </div>
  );
};
