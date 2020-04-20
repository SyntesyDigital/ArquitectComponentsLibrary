A very simple IconField.

```jsx
import { ButtonDropdown } from "architect-components-library";

<ButtonDropdown
  label={"Actions"}
  list={[
    {
      label: "Nouveau",
      icon: "fa fa-plus-circle",
    //   route: routes["extranet.roles.create"],
      className: "",
    },
    {
      label: "Dupliquer",
      icon: "far fa-copy",
    //   onClick: this.handleDuplicate.bind(this),
      className: "",
    },
    {
      label: "Supprimer",
      icon: "fa fa-trash-alt",
    //   onClick: this.handleRemove.bind(this),
      className: "text-danger",
    },
  ]}
/>;
```
