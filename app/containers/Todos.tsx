import AddTodoInput from "../components/AddTodoInput";

interface TodosProps {
  children: JSX.Element;
}

export default function TodoContainer({ children }: TodosProps) {
  return (
    <section className='flex flex-col w-10/12 mx-auto h-auto mt-8'>
      <AddTodoInput />
      {children}
    </section>
  );
}
