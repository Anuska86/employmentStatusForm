import { useState } from "react";
import "./App.css";

export default function App() {
  function signUp(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const employmentStatus = formData.get("employmentStatus");
    const workType= formData.getAll("workType");
    console.log(email, password, employmentStatus,workType);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="dona@paulsen.com"
          type="email"
          name="email"
          placeholder="dona@paulsen.com"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          defaultValue="password123"
          type="password"
          name="password"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label className="radioCenter">
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label className="radioCenter">
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label className="radioCenter">
            <input
              type="radio"
              name="employmentStatus"
              value="full-time"
              defaultChecked={true}
            />
            Full-time
          </label>
          <label className="radioCenter">
            <input type="radio" name="employmentStatus" value="internship" />
            Internship
          </label>
        </fieldset>

        <fieldset>
          <legend>Preferred type of work:</legend>
          <label className="checkboxCenter">
            <input type="checkbox" name="workType" value="per hour" />
            Per hour
          </label>
          <label className="checkboxCenter">
            <input type="checkbox" name="workType" value="remote" />
            Remote
          </label>
          <label className="checkboxCenter">
            <input type="checkbox" name="workType" value="hybrid" />
            Hybrid
          </label>
          <label className="checkboxCenter">
            <input type="checkbox" name="workType" value="office" />
            In office
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    </section>
  );
}
