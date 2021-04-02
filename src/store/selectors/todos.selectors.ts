import { createSelector } from 'reselect';
import { RootState } from '../root.reducer';
import { TodosState } from '../reducers/todos.reducer';

const selectFeatureTodos = (state: RootState) => state.todos as TodosState;

export const selectTodosEntities = createSelector(
  [selectFeatureTodos],
  (state) => state.entities
);

export const selectTodosPageSize = createSelector(
  [selectFeatureTodos],
  (state) => state.pageSize as number
);

export const selectTodosPage = createSelector(
  [selectFeatureTodos],
  (state) => state.page as number
);

export const selectTodosPagination = createSelector(
  [selectFeatureTodos],
  (state) => state.pagination as number[]
);

export const selectTodosAsArray = createSelector(
  [selectTodosEntities],
  (entities) => Object.keys(entities).map((id) => entities[id])
);

export const selectTodosAsArryCurrentPage = createSelector(
  [
    selectTodosEntities,
    selectTodosPagination,
    selectTodosPage,
    selectTodosPageSize,
  ],
  (todos, pagination, page, pageSize) =>
    pagination
      .slice(pageSize * page - pageSize, pageSize * page)
      .map((id) => todos[id])
);
