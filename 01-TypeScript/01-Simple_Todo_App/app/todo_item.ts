///<reference path="../interfaces/itodo.ts"/>

class TodoItem implements ITodo {
  title: string;
  checked: boolean;
  constructor(title: string) {
    this.title = title;
    this.checked = false;
  }
  render(listItem: HTMLElement): HTMLElement {
    const checkbox: HTMLInputElement = document.createElement('input');
    const label: HTMLLabelElement = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.checked = this.checked;

    label.textContent = this.title;

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
  }
}

export default TodoItem;
