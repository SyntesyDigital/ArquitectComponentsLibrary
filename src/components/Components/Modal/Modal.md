A very simple Modal.

```jsx
import { Modal } from "architect-components-library";

<Modal
  id={this.props.id}
  icon={this.props.icon}
  title={this.props.title}
  display={displayGroup}
  zIndex={10000}
  onModalClose={this.props.cancelEditGroup}
  onCancel={this.props.cancelEditGroup}
  onRemove={this.handleRemove.bind(this)}
  onSubmit={this.handleSubmit.bind(this)}
  size={this.props.size}
>

</Modal>;
```
