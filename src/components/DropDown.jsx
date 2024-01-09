const DropDown = ({ defaultText, tailwindClasses, imgUrl, iconCss }) => {
  return (
    <div className="">
      <select className={tailwindClasses}>
        <option value=''>{defaultText}</option>
      </select>
      <span className={iconCss}>
        <img src={imgUrl} alt={defaultText} />
      </span>
    </div>
  );
};

export default DropDown;
