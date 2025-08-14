
  //for accurate location
  const getAccurateLocation = (loc,setLocation,setRefreshTrigger) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        console.log(loc);
        setRefreshTrigger((prev) => prev + 1);
      },
      (error) => {
        setLocation((prev) => ({ ...prev, error: error.message }));
      }
    );
  };
  export default getAccurateLocation
