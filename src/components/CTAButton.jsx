const CTAButton = ({ text }) => {
  return (
    <button className="btn btn-dark min-w-52">
      <span className="btn-inner">
        <span className="btn-slide" />
        <span className="btn-content text-xl">{text}</span>
      </span>
    </button>
  );
};

export default CTAButton;
