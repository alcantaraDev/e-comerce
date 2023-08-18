"use client"

import { useFormContext } from "react-hook-form"
import { FormInputProps } from "./@types"

type TextInputProps = FormInputProps

export function TextInput({id, placeholder}:TextInputProps) {
  const { register } = useFormContext()

  return (
    <input
    id={id}
    placeholder={placeholder}
    {...register(id)}
    className="bg-zinc-700 border-2 border-zinc-600 hover:border-sky-700 focus:outline-none focus:border-sky-600 rounded-lg p-2"
    />
  )
}