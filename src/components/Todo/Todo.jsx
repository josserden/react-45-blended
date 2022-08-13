import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { useDispatch } from 'react-redux';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { deleteTodo } from 'redux/todosSlice';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDeleteTodo}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
