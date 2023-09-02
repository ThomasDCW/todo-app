import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/features/todosSlice";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddTodoInput() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        title: title.trim(),
      };
      dispatch(addTodo(newTodo));
      setTitle("");
    }
  };

  return (
    <form className='flex my-4 justify-center ' onSubmit={handleAddTodo}>
      <input
        required
        type='text'
        placeholder='Add a todo'
        className='input input-bordered w-full max-w-xs'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit' className='btn btn-square btn-primary'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </button>
    </form>
  );
}
