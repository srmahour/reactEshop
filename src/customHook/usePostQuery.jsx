import { useEffect, useState } from "react";

export default function usePostQuery(url, data) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setError(null)
    if(data !== null){
        setLoading(true)
        fetch(url, { method: "POST", body: JSON.stringify(data) })
        .then((res) => {
            if (res.status === 200) {
              return res.json(); 
            } else {
              throw new Error("Request failed"); 
            }
        })
        .then((data) => {setResponse(data)})
        .then(() => setLoading(false))
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }
    
  }, [url, data]); 

  return [loading, error, response];
}
