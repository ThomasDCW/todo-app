export default function AddTodoInput() {
  return (
    <form className='flex my-4 justify-center '>
      <input
        type='text'
        placeholder='Add a todo'
        className='input input-bordered w-full max-w-xs'
      />
      <button type='button' className='btn btn-square btn-primary'>
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
