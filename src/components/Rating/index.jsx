import "./styles.scss";
import logoStar from "../../assets/images/icon-star.svg";

function Rating() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="Rating">
      <div className="Rating__logo-container">
        <img src={logoStar} alt="star logo" className="Rating__logo" />
      </div>
      <h1 className="Rating__title">How did we do?</h1>
      <p className="Rating__copy">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <section className="Rating__stars">
        <label htmlFor="1">
          <span>1</span>
          <input type="radio" id="1" name="rate" value="1" />
        </label>
        <label htmlFor="2">
          <span>2</span>
          <input type="radio" id="2" name="rate" value="2" />
        </label>
        <label htmlFor="3">
          <span>3</span>
          <input type="radio" id="3" name="rate" value="3" />
        </label>
        <label htmlFor="4">
          <span>4</span>
          <input type="radio" id="4" name="rate" value="4" />
        </label>
        <label htmlFor="5">
          <span>5</span>
          <input type="radio" id="5" name="rate" value="5" />
        </label>
      </section>
      <button type="submit" className="Rating__submit">
        Submit
      </button>
    </form>
  );
}

export default Rating;
