// import { useLocalStorage } from 'hooks';

import { Container, Header, SearchForm, Section, TodoList } from 'components';

export const App = () => {
  // const [todos, setTodos] = useLocalStorage('todos', []);

  // const addTodo = text => {
  // const todo = {
  //   id: nanoid(),
  //   text,
  // };

  //   setTodos([...todos, todo]);
  // };

  // const handleSubmit = data => {
  //   addTodo(data);
  // };

  // const deleteTodo = id => {
  //   setTodos(todos.filter(todo => todo.id !== id));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
