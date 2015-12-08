interface ITodo {
  title: string;
  checked: boolean;
  render: (listElement: HTMLElement) => HTMLElement;
}
