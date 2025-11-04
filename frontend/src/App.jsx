import { useEffect, useState } from "react";
import api from "./services/api.js";



function App() {

  const [data, setData] = useState(null);

  useEffect( () => {
    const fetchData = async () => {
      const res = await api.get('/health');
      setData(res.data);
      console.log(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="text-center mt-10">
    {
      `response is ${data ? data.message : "loading..."}`
    }
    </div>
  );
}

export default App;

