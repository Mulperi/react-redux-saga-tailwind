import { Todo } from '../models/todo.model';

/**
 * TodosService.
 */
export class TodosService {
  // /**
  //  * todosGet.
  //  * @param {page} page get page number
  //  * @param {pageSize} pageSize page suize
  //  * @return {Promise} Promise of wanted page
  //  */
  // static todosGet(
  //   page: number,
  //   pageSize: number
  // ): Promise<{ total: number; todos: Todo[] }> {
  //   return new Promise((resolve) => {
  //     resolve({
  //       total: 9,
  //       todos: [
  //         { id: 1, title: 'first' },
  //         { id: 2, title: 'second' },
  //         { id: 3, title: 'third' },
  //         { id: 4, title: 'qwe' },
  //         { id: 5, title: 'asd' },
  //         { id: 6, title: 'zxc' },
  //         { id: 7, title: '777' },
  //         { id: 8, title: '888' },
  //         { id: 9, title: '999' },
  //       ].slice(page * pageSize - pageSize, page * pageSize),
  //     });
  //   });
  // }

  /**
   * todosDelete.
   * @param {id} id to be deleted
   */
  static todosDelete(id: number) {}

  /**
   * todosGet.
   * @return {Promise} Promise of todos
   */
  static todosGet(): Promise<{ todos: Todo[] }> {
    return new Promise((resolve) => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((todos) => resolve({ todos }));
    });
  }
}
