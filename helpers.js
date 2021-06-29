export const requestData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
};
