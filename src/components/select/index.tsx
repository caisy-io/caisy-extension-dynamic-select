import { useCaisyField } from "@caisy/ui-extension-react";
import { useEffect, useState } from "react";

export function SelectWithDynamicData() {
  const { value, setValue, loaded, context } = useCaisyField();
  const [selectOptions, setSelectOptions] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    if (!loaded) return;
    if (!context) return;

    fetch(`/api/select-option?token=${context.token}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.options) {
          setSelectOptions(data.options);
        }
      });
  }, [loaded, context]);

  if (!loaded || Object.keys(selectOptions).length === 0) return <p>Loading...</p>;

  const currentValue = Object.keys(selectOptions).find((key) => key === value);
  return (
    <>
      <label htmlFor="custom-select">Choose a option:</label>
      <select
        name="customselect"
        value={currentValue}
        onChange={(e) => {
          setValue(
            Object.keys(selectOptions).find((key) => key === e?.target?.value)
          );
        }}
        id="custom-select"
      >
        <option value={""}>Select an option</option>
        {Object.keys(selectOptions).map((key) => {
          return (
            <option key={key} value={key}>
              {selectOptions[key]}
            </option>
          );
        })}
      </select>
    </>
  );
}
