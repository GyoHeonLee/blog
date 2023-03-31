import counterView from "./counterView";
import filtersView from "./filtersView";
import todosView from "./todosView";

const app = (targetElement: HTMLElement, state: any) => {
  const element = targetElement.cloneNode(true) as HTMLElement;

  const list = element.querySelector(".todo-list") as HTMLElement;
  const counter = element.querySelector(".todo-count") as HTMLElement;
  const filters = element.querySelector(".filters") as HTMLElement;

  list.replaceWith(todosView(list, state));
  counter.replaceWith(counterView(counter, state));
  filters.replaceWith(filtersView(filters, state));

  return element;
};

export default app;