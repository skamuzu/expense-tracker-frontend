import React from 'react'
import type { FormAreaProps } from '@/types/types'
import { Link } from 'react-router-dom';


const FormArea = (props:FormAreaProps) => {

    const { message, route, path } = props;
    return (
    <section className="p-6 md:p-10 flex flex-col md:min-h-screen  w-full md:w-4/7 justify-start relative z-20 bg-white mb-10 md:mb-0">
        <h1 className="font-bold mb-8 text-2xl md:mb-32">Expense Tracker</h1>

        <p>
          {message}
          <Link to={`/${path}`} className="text-violet-500 underline">{route}</Link>
        </p>
      </section>
  )
}

export default FormArea