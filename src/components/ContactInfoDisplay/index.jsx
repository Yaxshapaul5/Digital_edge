import "./style.css";

function ContactInfoDisplay({ contactAddressWidgetData, selectedClassName_contactInfoWidgets, handleParagraphClick }) {
  return (
    <p onClick={handleParagraphClick} className={`${selectedClassName_contactInfoWidgets} address-widget-text-style address-widget-margin-top`}>
      {contactAddressWidgetData}
    </p>
  );
}

export default ContactInfoDisplay;
