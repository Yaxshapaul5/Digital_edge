import { useState } from "react";
import ContactInfoDisplay from "../ContactInfoDisplay";
import "./style.css";

function ContactInfoSelector({ contactInfoWidgets }) {
  const [selected_contactInfoWidgets, handleParagraphClick] = useState(1);

  const isSelected_contactInfoWidgets = (index) => {
    return selected_contactInfoWidgets === index;
  };

  return (
    <div className="contact-address-widget">
      {contactInfoWidgets.map((data, index) => {
        return (
          <ContactInfoDisplay
            {...data}
            key={index}
            selectedClassName_contactInfoWidgets={isSelected_contactInfoWidgets(index) ? "text-block" : ""}
            handleParagraphClick={() => handleParagraphClick(index)}
          />
        );
      })}
    </div>
  );
}

export default ContactInfoSelector;
