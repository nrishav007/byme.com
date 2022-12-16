import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getsinglepage } from "./../../Fetch/Fetch";
import Details from "./Details";

const SingleData = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const getData = () => {
    getsinglepage(params.id)
      .then((res) => {
        console.log(res.data, "from api");
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, [params.id]);
  console.log(data, "from state");

  return (
    <div>
      {
        data.length > 0 &&
        data.map((elem) => {
          return <Details key={elem.id}  
             image={elem.image}
          />
                      
})
        
        
        }


    </div>
  );


};

export default SingleData;
