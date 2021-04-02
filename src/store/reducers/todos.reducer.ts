import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../shared/models/todo.model';

export interface TodosState {
  entities: { [key: string]: Todo };
  loading: boolean;
  page: number;
  pageSize: 3;
  total: number;
  pagination: number[];
  entitiesTrack: number[];
  maxThreshold: number;
  errorMessage: string | null;
}

export const initialState: TodosState = {
  entities: {},
  page: 1,
  pageSize: 3,
  total: 0,
  loading: false,
  pagination: [],
  entitiesTrack: [],
  maxThreshold: 6,
  errorMessage: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todosGet(state: TodosState) {
      state.loading = true;
      // state.page = payload.page;
    },
    todosGetSuccess(
      state: TodosState,
      action: PayloadAction<{ todos: Todo[] }>
    ) {
      state.loading = false;
      action.payload.todos.forEach((todo: Todo, index: number) => {
        state.entities[todo.id] = todo;
      });
    },
    // todosGetSuccess(state: TodosState, { payload }: any) {
    //   state.loading = false;
    //   payload.todos.forEach((todo: Todo, index: number) => {
    //     // Update tracking and remove items if threshold exceeded
    //     state.entitiesTrack.unshift(todo.id);
    //     if (state.entitiesTrack.length > state.maxThreshold) {
    //       const position = state.entitiesTrack.length - 1;
    //       const lastItem = state.entitiesTrack[position];
    //       delete state.entities[lastItem];
    //       state.entitiesTrack = state.entitiesTrack.slice(0, position);
    //     }

    //     // Set entity to state
    //     state.entities[todo.id] = todo;

    //     // Set pagination
    //     state.pagination[state.page * state.pageSize - state.pageSize + index] =
    //       todo.id;

    //     // Set total
    //     state.total = payload.total;
    //   });
    // },
    todosGetFailed(state: TodosState, { payload }: any) {
      state.loading = false;
      state.errorMessage = payload.errorMessage;
    },
    todosDelete(state: TodosState, { payload }: any) {
      state.loading = true;
    },
    todosDeleteSuccess(state: TodosState, { payload }: any) {
      state.loading = false;
      delete state.entities[payload.id];
    },
    todosDeleteFailed(state: TodosState, { payload }: any) {
      state.loading = false;
    },
  },
});

// export function todosUpdateEntitiesTrack() {}

export const {
  todosGet,
  todosGetSuccess,
  todosGetFailed,
  todosDelete,
  todosDeleteSuccess,
  todosDeleteFailed,
} = todosSlice.actions;

export default todosSlice.reducer;
