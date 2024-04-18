/* import element */
import useForm from "../../forms/useForm.js";
import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import PAGES from "../../routes/pageModel.js";
import { onChangePage } from "../../routes/router.js";
import {
  CREATE_PIC_URL_FIELD,
  CREATE_PIC_URL_ERROR,
  CREATE_PIC_ALT_FIELD,
  CREATE_PIC_ALT_ERROR,
  CREATE_PIC_CREDIT_FIELD,
  CREATE_PIC_CREDIT_ERROR,
  CREATE_PIC_PRICE_FIELD,
  CREATE_PIC_PRICE_ERROR,
  CREATE_PIC_CANCEL_BTN,
  CREATE_PIC_SUBMIT_BTN,
} from "../../services/domService.js";
import INITIAL_CREATE_PIC_FORM from "../helpers/initialForms/initial_create_pic_form.js";
import Picture from "../models/Picture.js";
import CREATE_PIC_SCHEMA from "../models/schema/create_pic_schema.js";

export const createPicture = () => {
  /* array of inputs elemnts */
  const INPUTS_ARRAY = [
    CREATE_PIC_URL_FIELD,
    CREATE_PIC_ALT_FIELD,
    CREATE_PIC_CREDIT_FIELD,
    CREATE_PIC_PRICE_FIELD,
  ];
  /*array of errors elemnts */
  const ERRORS_ARRAY = [
    CREATE_PIC_URL_ERROR,
    CREATE_PIC_ALT_ERROR,
    CREATE_PIC_CREDIT_ERROR,
    CREATE_PIC_PRICE_ERROR,
  ];

  /** handlesubmit sethod **/
  const handleSubmitCreatePic = (data) => {
    try {
      data.user_id = "123456";

      const pic = new Picture(data, pictures);

      console.log(pic);
      onReset(INPUTS_ARRAY, ERRORS_ARRAY, rest.handleReset);
      pictures.push(pic);
      onChangePage(PAGES.HOME);
    } catch (error) {
      console.log(error);
    }
  };
  /** use form method **/
  const { errors, ...rest } = useForm(
    INITIAL_CREATE_PIC_FORM,
    CREATE_PIC_SCHEMA,
    handleSubmitCreatePic
  );

  /** event listener**/
  CREATE_PIC_URL_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      CREATE_PIC_URL_ERROR,
      CREATE_PIC_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  CREATE_PIC_ALT_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      CREATE_PIC_ALT_ERROR,
      CREATE_PIC_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  CREATE_PIC_CREDIT_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      CREATE_PIC_CREDIT_ERROR,
      CREATE_PIC_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  CREATE_PIC_PRICE_FIELD.addEventListener("input", (event) =>
    onInputChange(
      event,
      CREATE_PIC_PRICE_ERROR,
      CREATE_PIC_SUBMIT_BTN,
      rest.handleInputChange,
      rest.handleDisableSubmitBtn
    )
  );
  CREATE_PIC_CANCEL_BTN.addEventListener("click", () =>
    onReset(INPUTS_ARRAY, ERRORS_ARRAY, rest.handleReset)
  );
  CREATE_PIC_SUBMIT_BTN.addEventListener("click", rest.onSubmit);
};
