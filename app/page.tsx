"use client";
import Todo from "./components/Todo";
import Todos from "./containers/Todos";
import { useAppSelector } from "./redux/hooks";

export default function Home() {
  const todos = useAppSelector((state) => state.todosReducer.todos);
  console.log(todos);

  return (
    <main className='flex flex-col mx-auto'>
      <Todos>
        <>
          {todos.map((t) => (
            <div key={t.id}>
              <Todo id={t.id} title={t.title} />
            </div>
          ))}
        </>
      </Todos>
    </main>
  );
}
