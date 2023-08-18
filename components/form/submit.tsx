type SubmitFormProps = {
  placeholder?: string
  className?: string
}

export function SubmitForm({placeholder, className}:SubmitFormProps) {
  return (
    <button 
    type="submit"
    className={`p-2 bg-sky-600 hover:bg-sky-500 rounded-lg ${className}`}
    >
      <span className="font-medium">
        {placeholder ?? "Enviar"}
      </span>
    </button>
  )
}