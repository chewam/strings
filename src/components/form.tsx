import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import UploadField from "./upload-field";

const Form = () => {
  const [cv, setCV] = useState<File>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updates, setUpdates] = useState(false);
  const [portfolio, setPortfolio] = useState<File>();
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("NAME", event.target.value);
    setName(event.target.value);
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("EMAIL", event.target.value);
    setEmail(event.target.value);
  };

  const onCVUpload = (file: File | undefined) => {
    console.log("CV", file);
    setCV(file);
  };

  const onPortfolioUpload = (file: File | undefined) => {
    console.log("PORTFOLIO", file);
    setPortfolio(file);
  };

  const onPrivacyPolicyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPrivacyPolicy(event.target.checked);
  };

  const onUpdatesChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdates(event.target.checked);
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const body = new FormData();
    console.log("onSubmit", body);

    body.append("name", name);
    body.append("email", email);
    if (cv) body.append("cv", cv, cv.name);
    if (updates) body.append("updates", "true");
    if (portfolio) body.append("portfolio", portfolio, portfolio.name);

    const result = await fetch("/api/submit-cv", { method: "POST", body });
    console.log("result", result);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="fields">
        <input
          required
          type="text"
          value={name}
          placeholder="NAME"
          onChange={onNameChange}
        />
        <input
          required
          type="email"
          value={email}
          placeholder="EMAIL"
          onChange={onEmailChange}
        />
        <UploadField placeholder="CV" onChange={onCVUpload} required={true} />
        <UploadField placeholder="PORTFOLIO" onChange={onPortfolioUpload} />
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
            <input
              required
              type="checkbox"
              checked={privacyPolicy}
              onChange={onPrivacyPolicyChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="checkbox">
          <label>
            I want to receive regular updates, regarding similar and higher-paid
            job opportunities in the future.
            <input
              type="checkbox"
              checked={updates}
              onChange={onUpdatesChange}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <button className="big secondary flex-initial">Submit</button>
    </form>
  );
};

export default Form;
