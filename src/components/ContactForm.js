import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import styled from "styled-components"

function ContactForm() {
  const [state, handleSubmit] = useForm("xayanagl")
  if (state.succeeded) {
    return <p>Thanks for contacting!</p>
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="email">Your email</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      {/* <label id="message" htmlFor="message">
        Your message
      </label> */}
      <textarea id="message" name="message" placeholder="Your message here.." />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <div className="submit">
        <button type="submit" disabled={state.submitting}>
          Send!
        </button>
      </div>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 400px;
  font-size: 1.5em;

  input {
    /* display: inline-block; */
    width: 300px;
    line-height: 1.8em;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 3px;
    font-size: 0.7em;
    border-color: var(--third-color);
  }

  label {
    margin-top: 20px;
  }
  textarea {
    display: block;
    width: 100%;
    height: 35vh;
    border-radius: 5px;
    font-size: 0.7em;
    border-color: var(--third-color);
  }
  button {
    font-size: 1.2em;
    margin: 15px;
  }
  .submit {
    display: flex;
    justify-content: center;
  }
  button {
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid var(--third-color);
    color: var(--third-color);
  }
`

export default ContactForm
