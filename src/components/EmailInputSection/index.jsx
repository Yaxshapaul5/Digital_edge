import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function EmailInputSection() {
  return (
    <div className="fullwidth-container">
      {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div className="flex-row-container">
        <input placeholder="Your Email" type="text" className="input-with-icon input-style-f62::placeholder" />
        <SvgIcon1 className="svg-container1" />
      </div>
    </div>
  );
}

export default EmailInputSection;
