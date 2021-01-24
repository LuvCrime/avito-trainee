const initialState = {
  textColor: "",
  bgColor: "",
  description: "Sample text Sample text Sample text Sample text",
  header: "Sample header",
  url: "https://www.avito.ru/moskva",
  imgUrl:
    "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
  imgError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TEXT_COLOR":
      return {
        ...state,
        textColor: action.payload.textColor,
      };
    case "CHANGE_BG_COLOR":
      return {
        ...state,
        bgColor: action.payload.bgColor,
      };
    case "CHANGE_INPUT_VAL":
      let name = action.payload.name;
      return {
        ...state,
        [name]: action.payload.value,
      };
    case "SET_IMG_URL":
      return {
        ...state,
        imgUrl: action.payload.imgUrl,
        imgError: false,
      };
    case "BASE_64_URL":
      let err = action.payload.imgError;
      return {
        ...state,
        base64Url: action.payload.base64Url,
        imgError: err,
      };
    case "CLEAR_FORM":
      return {
        ...state,
        url: "",
        imgUrl: "",
        header: "",
        description: "",
        textColor: "",
        bgColor: "",
      };
    default:
      return state;
  }
};
export default reducer;
