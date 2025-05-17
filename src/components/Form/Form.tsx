import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'

export function Form() {
  const [state, handleSubmit] = useForm('xnnqqeqa') // Replace with your Formspree ID
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          id="name"
          type="text"
          name="name"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        
        <input
          placeholder="Email (optional)"
          id="email"
          type="email"
          name="email"
        />
        
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        
        <button
          type="submit"
          disabled={state.submitting || !message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
