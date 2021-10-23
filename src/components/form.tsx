import Link from "next/link";

const Form = () => {
  return (
    <form>
      <div className="fields">
        <input placeholder="NAME" />
        <input placeholder="EMAIL" />
        <input placeholder="CV" />
        <input placeholder="PORTFOLIO" />
      </div>
      <div className="checkboxes">
        <div className="checkbox">
          <label>
            <span>
              I agree with your{" "}
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </span>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="checkbox">
          <label>
            I want to receive regular updates, regarding similar and higher-paid
            job opportunities in the future.
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <button className="big secondary flex-initial">Submit</button>
    </form>
  );
};

export default Form;
