import * as React from "react";

import * as styles from "./styles.module.scss";

const Form = () => {
  return (
    <>
      <h4>Your Details</h4>
      <form className={`${styles.form}`}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="email" placeholder="Confirm Email" />
        <input type="tel" placeholder="Phone" />
        <input type="tel" placeholder="Confirm Phone Number" />
        <input type="number" placeholder="House Number" />
        <input type="text" placeholder="Postcode" />
        <div className={styles.formCheck}>
          <input type="checkbox" id="terms" name="terms"/>
          <label htmlFor="terms">I agree with our <a href="/">Terms and Conditions</a></label>
        </div>
        <div className={styles.submitBtn}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default Form;
