"use client"

import { useForm, FormProvider } from "react-hook-form"

type RootFormProps = {
  children: React.ReactNode
  className?: string
}

export function RootForm({ children, className }:RootFormProps) {
  const FormProps = useForm()

  return (
    <form className={`flex flex-col ${className}`}>
      <FormProvider {...FormProps}>
        {children}
      </FormProvider>
    </form>
  )
}