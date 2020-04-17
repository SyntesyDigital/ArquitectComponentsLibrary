A very simple DataTable.

```jsx
import { DataTable } from "architect-components-library";

<DataTable
  id={"services-datatable"}
  columns={[
    { data: "identifier", name: "Identifiant" },
    { data: "name", name: "Nom" },
    { data: "http_method", name: "Methode" },
    { data: "url", name: "URL" },
    { data: "action", name: "", orderable: false, searchable: false },
  ]}
  init={true}
  route={routes["extranet.services.datatable"]}
  onClick={this.handleDatatableClick.bind(this)}
/>;
```
