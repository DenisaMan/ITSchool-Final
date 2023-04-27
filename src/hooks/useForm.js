import { useState } from "react";

export function useForm(initialData){
    const [formValues, setformValues] = useState(initialData);
    
      function registerField(key) {
        return {
          value: formValues[key],
          onChange: (event) => {
            const newValue = event.target.value;
    
            setformValues((newFormValue) => ({
              ...formValues,
              [key]: newValue,
            }));
          },
        };
      }
       return{
        formValues,
        registerField,
        setformValues
       }
}