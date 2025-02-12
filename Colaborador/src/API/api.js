export const fetchOccurrencesData = async () => {
  try {
    const response = await fetch("https://run.mocky.io/v3/4b43cb2f-df01-41fe-a093-f816533693eb");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching occurrences data:", error);
    throw error; 
  }
}; 

export const fetchCollaboratorData = async () => {
  try {
    const response = await fetch("https://run.mocky.io/v3/1584684c-5027-4f35-b7e1-fb97c6c0f820");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching occurrences data:", error);
    throw error; 
  }
}; 