const Icon = ({ chidren, text }) => (
  <div className="cursor-pointer">
    {chidren}
    <span className="ml-1 align-bottom">{text}</span>
  </div>
);

export default Icon;
