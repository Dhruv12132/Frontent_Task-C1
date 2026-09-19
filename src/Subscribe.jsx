import { useState } from "react"

function Subscribe() {

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function subscribe() {

    if (email === "") {
      setMessage("Please enter your email")
    } else {
      setMessage("Thank you for subscribing!")
    }

  }

  return (
    <section id="subscribe" className="section">

      <h2 className="text-2xl text-center font-bold">
        Subscribe
      </h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={subscribe}>
        Subscribe
      </button>

      <p>
        {message}
      </p>

    </section>
  )
}

export default Subscribe