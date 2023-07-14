import Todo from "./components/Todo";
import Todos from "./containers/Todos";

export default function Home() {
  return (
    <main className='flex flex-col mx-auto'>
      <Todos>
        <>
          <Todo title='Hello world' />
          <Todo title='Todo Application' />
          <Todo title='Coded in Nextjs' />
        </>
      </Todos>
    </main>
  );
}
