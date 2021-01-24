export const changeTextColor = (textColor) => {
  return {
    type: "CHANGE_TEXT_COLOR",
    payload: {
      textColor,
    },
  };
};

export const changeBgColor = (bgColor) => {
  return {
    type: "CHANGE_BG_COLOR",
    payload: {
      bgColor,
    },
  };
};

export const changeInputVal = (name, value) => {
  return {
    type: "CHANGE_INPUT_VAL",
    payload: {
      name,
      value,
    },
  };
};

export const setImgUrl = (imgUrl) => {
  return {
    type: "SET_IMG_URL",
    payload: {
      imgUrl,
    },
  };
};

export const base64Url = (base64Url, imgError) => {
  return {
    type: "BASE_64_URL",
    payload: {
      base64Url,
      imgError,
    },
  };
};

export const clearForm = (
  url,
  imgUrl,
  header,
  description,
  textColor,
  bgColor
) => {
  return {
    type: "CLEAR_FORM",
    payload: {
      url,
      imgUrl,
      header,
      description,
      textColor,
      bgColor,
    },
  };
};
