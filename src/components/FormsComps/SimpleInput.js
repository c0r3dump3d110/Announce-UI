import React from 'react'

export default function SimpleInput(props) {
    return (
        <div className="col-span-6 sm:col-span-3">
            <label 
                className="block text-sm font-medium text-gray-700">
                {props.label}
            </label>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                id={props.id}
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                onChange={props.onChange}
                required
            />
        </div>
    )
}
