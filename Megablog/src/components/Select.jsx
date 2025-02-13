import React,{useId} from 'react'

function Select({
    options,
    label,
    className='',
    ...props
},ref) {
    const id=useId()
  return (
    <div className='w-full'>
        {label&& <label htmlFor={id} className=''></label>}
        <select 
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 w-full border border-gray-300 rounded-lg
            focus:bg-gray-50 text-black outline-none
            bg-white duration-200 
           ${className}`}>
            {options?.map((option) => (
                <option key={option} value={option.value}>
                    {option}
                </option>
            ))}
           </select>
      
    </div>
  )
}

export default React.forwardRef(Select)
