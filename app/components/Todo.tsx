"use client";
import { useState } from "react";

interface TodoProps {
  title: string;
}

export default function Todo({ title }: TodoProps) {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div className='space-x-6 p-4 flex justify-between items-center my-4 w-10/12 sm:w-8/12 md:w-7/12 lg:w-2/6  mx-auto shadow-md rounded-md'>
      <input
        type='checkbox'
        className='checkbox checkbox-primary'
        onClick={() => setChecked(!checked)}
      />
      <span className={!checked ? "" : "line-through"}>{title}</span>
      <button type='button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-5 h-5 text-error'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
          />
        </svg>
      </button>
    </div>
  );
}
