
  //for default location
const getIP = async (setLocation) => {
  try {
    const res = await fetch("https://ipwhois.app/json/");
    const data = await res.json();
    setLocation({
      latitude: data.latitude,
      longitude: data.longitude,
      error: null,
    });
  } catch (error) {
    console.error("Error fetching IP location:", error);
  }
};

export default getIP;
