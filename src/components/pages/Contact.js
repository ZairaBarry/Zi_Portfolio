import React, { useState } from 'react';




export default function Contact() {
  const validateEmail = (email) => {
    const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    return emailRegex.test(String(email).toLowerCase())
  }

  const [formState, setformState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errMsg, seterrMsg] = useState("")

  const { name, email, message } = formState;
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!errMsg) {
      console.log("submitForm", formState)


    }
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const validEmail = validateEmail(e.target.value)
      if (!validEmail) {
        seterrMsg("Enter valid email")

      }
      else {
        seterrMsg("")
      }
    }
    else {
      if (!e.target.value.length) {
        seterrMsg(`${e.target.name} is required`)

      }
      else {
        seterrMsg("")
      }
    }

    if (!errMsg) {
      setformState({ ...formState, [e.target.name]: e.target.value })
    }
  }
  return (

    <div class="contact" id="contact">
      <section class="mb-4">


        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>

        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>

        <div class="row">


          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>


              <div class="row">


                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="name" name="name"  class="form-control" onBlur={handleChange} defaultValue={name}></input>
                    <label for="name" style={{ color: "white"}}>Your name</label>
                  </div>
                </div>



                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" onBlur={handleChange} defaultValue={email}></input>
                    <label for="email" style={{ color: "white"}}>Your email</label>
                  </div>
                </div>


              </div>


              <div class="row">


                <div class="col-md-12">

                  <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" onBlur={handleChange} defaultValue={message}></textarea>
                    <label for="message" style={{ color: "white"}}>Your message</label>
                  </div>

                </div>
              </div>


            </form>

            <div class="text-center text-md-left">
              <a class="btn btn-primary" type="submit">Send</a>
            </div>
            {errMsg && (
            <div style = {{color:"red"}}
             class="status">{errMsg} </div>
            )}
          </div>



          <div class="col-md-3 text-center" style={{ color: "white"}}>
            <ul class="list-unstyled mb-0">
              <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Saint John, NB, Canada</p>
              </li>

              <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 00 000 000</p>
              </li>

              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>zaira.barakaeva22@gmail.com</p>
              </li>
            </ul>
          </div>


        </div>

      </section>

    </div>
    //
  )
}

