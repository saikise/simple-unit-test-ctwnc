"use client";

import styles from "./Form.module.scss";

export type FormValues = {
  fullName: string;
  dateOfBirth: string;
  email: string;
  mobileNumber: string;
  computer: "mac" | "pc";
  beverage: "coffee" | "tea";
  file: File;
};

export type FormProps = {
  handleSubmit: (formValues: FormValues) => void;
};

const Form = ({ handleSubmit }: FormProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Registration</h1>
      <form
        id="form"
        onSubmit={(e) => {
          // Prevent the page from refreshing when the form is submitted
          e.preventDefault();
          // Get all form values since we have defined handleSubmit to accept object of type FormValues
          const formData = new FormData(e.target as HTMLFormElement);
          const formValues = Object.fromEntries(
            formData.entries()
          ) as FormValues;
          handleSubmit(formValues);
        }}
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label
            htmlFor="fullName"
            className={styles.formLabel}
            data-cy="fullNameInputLabel"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={styles.formInput}
            required
            aria-required="true"
            aria-label="Full Name"
            data-cy="fullNameInput"
          />
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="dateOfBirth"
            className={styles.formLabel}
            data-cy="dateOfBirthInputLabel"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className={styles.formInput}
            required
            aria-required="true"
            aria-label="Date of Birth"
            data-cy="dateOfBirthInput"
          />
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="email"
            className={styles.formLabel}
            data-cy="emailInputLabel"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.formInput}
            required
            aria-required="true"
            aria-label="Email"
            data-cy="emailInput"
          />
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="mobileNumber"
            className={styles.formLabel}
            data-cy="mobileInputLabel"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            className={styles.formInput}
            required
            aria-required="true"
            aria-label="Mobile Number"
            data-cy="mobileNumberInput"
          />
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="computer"
            className={styles.formLabel}
            data-cy="computerSelectLabel"
          >
            Computer
          </label>
          <select
            id="computer"
            name="computer"
            className={styles.formSelect}
            required
            aria-required="true"
            aria-label="Computer"
            data-cy="computerSelect"
          >
            <option value="mac">Mac</option>
            <option value="pc">PC</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="file"
            className={styles.formLabel}
            data-cy="fileInputLabel"
          >
            Upload File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className={styles.formInput}
            aria-label="Upload File"
            data-cy="fileInput"
          />
        </div>
        <div className={styles.formGroup}>
          <div>
            <label htmlFor="coffee" data-cy="radioRadioLabel">
              <input
                type="radio"
                id="coffee"
                name="beverage"
                value="coffee"
                required
                data-cy="coffeeRadio"
              />
              Coffee
            </label>
            <label htmlFor="tea" data-cy="teaRadioLabel">
              <input
                type="radio"
                id="tea"
                name="beverage"
                value="tea"
                required
                data-cy="teaRadio"
              />
              Tea
            </label>
          </div>
        </div>
        <div className={styles.formGroup}>
          <button
            type="submit"
            name="Submit"
            className={styles.formSubmitButton}
            data-cy="submitButton"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
