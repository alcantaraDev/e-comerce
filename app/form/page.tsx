import { Form } from "@/components/form";

export default function FormPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <Form.Root className="bg-zinc-800 p-8 rounded-lg gap-4">
        <h1 className="text-2xl font-medium">Exemplo de Formulario</h1>
        <Form.Input.Text id="firstName" placeholder="nome"/>
        <Form.Input.Text id="lastName" placeholder="sobrenome"/>
        <Form.Submit/>
      </Form.Root>
    </main>
  )
}