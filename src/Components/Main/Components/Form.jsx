import React, { useState } from "react";
import style from "./Form.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Form() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form className={style.form__booking} action="POST">
      <h2 className={style.form__title}>25$ per night</h2>
      <DatePicker
        className={`${style.form__input} ${style.date__input}`}
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
        className={`${style.form__input} ${style.number__input}`}
      />
      <div>
        <button type="submit" className={style.form__button}>
          Book
        </button>
      </div>
    </form>
  );
}

export default Form;