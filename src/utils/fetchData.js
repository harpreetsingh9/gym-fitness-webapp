export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "51b6f31fbfmshe6193db1198d890p1cfabbjsn0760e76beab7",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
