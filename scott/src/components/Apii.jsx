
import { useEffect, useState } from "react";

export default function Apii() {
  const [data, setData] = useState([]);

 
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("jsonnnn", "json");
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  return (
    <div className="App">
      {
        data.map((item) => {
        return (
        <div>{item.email}</div>
        )
                  })}

    </div>
  );
}
