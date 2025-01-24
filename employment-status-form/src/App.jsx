import { useState } from 'react'
import './App.css'

export default function App() {
  function signUp(formData) {
    const email = formData.get("email")
    const password = formData.get("password")
      console.log(email,password)
    }

  return(
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="dona@paulsen.com" type="email" name="email" placeholder="dona@paulsen.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"></textarea>
        
        

        
        <button>Submit</button>

      </form>
    </section>
  )
}

