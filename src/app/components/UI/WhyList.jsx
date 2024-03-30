const WhyList = ({ number, description, key }) => {
  return (
    <div className="why_item" key={key}>
      <div className="why_number">{number}</div>
      <div className="why_text">
        <p className="text">{description}</p>
      </div>
    </div>
  );
};

export default WhyList;
