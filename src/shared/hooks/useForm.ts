import { FormEvent } from "react"

export const useForm = () => {  
  const submitHandler = (callback: (data: any) => void) => {
    return (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const data = Object.fromEntries(formData.entries())
      callback(data)
    }
  }
  return {
    submitHandler
  }
}