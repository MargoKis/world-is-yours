import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const FormFields = () => {
  return (
    <div className="flex flex-row ml-8 mt-8">
      <div className="flex flex-col w-1/3">
        <InputField
          id="input1"
          label="Артикул"
          placeholder="Введіть артикул товару"
        />
        <InputField
          id="input2"
          label="Категорія"
          placeholder="Введіть категорію товару"
        />
        <InputField
          id="input3"
          label="Для кого"
          placeholder="Оберіть для кого призначений товар"
          selectOptions={[
            { value: "option1", label: "Для жінок" },
            { value: "option2", label: "Для чоловіків" },
          ]}
        />
        <InputField
          id="input4"
          label="Назва товару"
          placeholder="Введіть назву товару"
        />
        <InputField
          id="input5"
          label="Ціна на сайті"
          placeholder="Вкажіть ціну товару на сайті"
        />
        <InputField
          id="input6"
          label="Статус товару"
          placeholder="Оберіть статус товару"
          selectOptions={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
          ]}
        />
      </div>

      <div className="flex flex-col w-1/3 ml-20 gap-0.5">
        <InputField
          id="input7"
          label="Опис товару"
          placeholder="Введіть невеликий опис товару"
          maxLength={150}
        />
        <TextAreaField
          id="input8"
          label="Особливості"
          placeholder="Які є особливості товару?"
          rows={4}
          maxLength={500}
        />
        <TextAreaField
          id="input9"
          label="Матеріал"
          placeholder="Матеріал товару"
          rows={8}
          maxLength={150}
        />
        <TextAreaField
          id="input10"
          label="Догляд"
          placeholder="Як доглядати за товаром?"
          rows={6}
          maxLength={500}
        />
      </div>
    </div>
  );
};

export default FormFields;
