import ReactSelect from "react-select";

const customStyles = {
  control: (base) => ({
    ...base,
    border: `1px solid #dfdede`,
    transition: "all 0.2s ease",
    boxShadow:
      "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
    "&:focus": {
      outline: "none",
      boxShadow: "0px 10px 20px rgba(256, 256, 256, 0.04), 0px 2px 6px rgba(256, 256, 256, 0.04), 0px 0px 1px rgba(256, 256, 256, 0.04)",
    border: `1px solid lightgrey`,
    }
  })
};

function Select({
  className,
  value,
  onChange,
  options,
  placeholder = 'Select val',
}){
  return (
    <ReactSelect
      className={className}
      styles={customStyles}
      options={options}
      placeholder={placeholder}
      theme={theme => ({
        ...theme,
        borderRadius: 5,
      })}
      value={value}
      onChange={onChange}
    />
  );
}

export default Select;