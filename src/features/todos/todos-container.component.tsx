import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosGet } from '../../store/reducers/todos.reducer';
import { selectTodosAsArray } from '../../store/selectors/todos.selectors';

const TodosContainer: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodosAsArray);

  useEffect(() => {
    dispatch(todosGet());
  }, []);

  return (
    <div>
      <h2>Todos Container Component</h2>

      <section>
        {todos.map((item, index) => (
          <div key={index}>{JSON.stringify(item)}</div>
        ))}
      </section>
    </div>
  );
};

export default TodosContainer;
