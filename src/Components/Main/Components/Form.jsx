import React, { useState } from "react";
import "./Form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form className="form__booking" action="POST">
      <h2 className="form__title">25$ per night</h2>
      <DatePicker
        className="form__input date__input"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="pt-BR"
        showTimeSelect
        timeFormat="p"
        timeIntervals={15}
        dateFormat="Pp"
      />
      <br />
      <input
        placeholder="Guest"
        type="number"
        name="number_form"
        className="form__input number__input"
      />
      <div className="buttons">
        <button type="submit" className="form__button">
          Book
        </button>
      </div>
    </form>
  );
}

export default Form;