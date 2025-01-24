import { useState } from "react";
import "./App.css";

export default function App() {
  function signUp(formData) {
    const data = Object.fromEntries(formData);
    const workType = formData.getAll("workType");
    const allData = { ...data, workType };
    console.log(allData);
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

        <label htmlFor="age">Your age:</label>
        <select id="age" name="age" defaultValue="" required>
          <option value="" disabled>
            Choose an option
          </option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46-55">46-55</option>
          <option value="56-65">56-65</option>
        </select>

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

        <label htmlFor="description">Any comments:</label>
        <textarea
          id="comments"
          name="comments"
          defaultValue="Add your comments here"
        ></textarea>

        <button>Submit form</button>
      </form>
    </section>
  );
}
