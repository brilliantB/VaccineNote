import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import DetailPost from "../../components/post/DetailPost";
import client from "../../libs/api/_client";
function DetailPostContainer() {
  const params = useParams();
  const { postId } = params;
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await client.get(`vaccine/post/${postId}`);

        if (response.status === 200) {
          const result = response.data.data;
          console.log(response);
          console.log(result);
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return <DetailPost data={data} />;
}

export default DetailPostContainer;
