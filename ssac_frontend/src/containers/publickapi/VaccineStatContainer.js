import React, { useState, useEffect } from "react";
import axios from "axios";
import VaccineStatComponent from "../../components/publicapi/VaccineStatComponent";

function VaccineStatContainer() {
  const [data, setData] = useState("");

  const today = new Date();
  var year = today.getFullYear();
  var month = ("0" + (today.getMonth() + 1)).slice(-2);
  var day = ("0" + today.getDate()).slice(-2);

  const yesterday = new Date(year, month, day - 1);
  var year1 = yesterday.getFullYear();
  var month1 = ("0" + yesterday.getMonth()).slice(-2);
  var day1 = ("0" + yesterday.getDate()).slice(-2);

  var todayString = year + "-" + month + "-" + day;
  var yesString = year1 + "-" + month1 + "-" + day1;
  var population = 51334220;

  const [per, setPer] = useState({});
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://api.odcloud.kr/api/15077756/v1/vaccine-stat?cond%5BbaseDate%3A%3ALT%5D=" +
            todayString +
            "&cond%5BbaseDate%3A%3AGT%5D=" +
            yesString +
            "&cond%5Bsido%3A%3AEQ%5D=%EC%A0%84%EA%B5%AD&serviceKey=Xr1y2g7%2BJIW9%2F8j%2FCkNxKCCGWbyQCYp%2B%2FrjgGfS%2B8GHiRUbYodo363awRtffSc26LP3z%2BQLLZADqZQxO%2B2MLuQ%3D%3D"
        );
        if (response.status === 200) {
          const result = response.data.data[0];
          console.log(result);
          console.log(
            ((result.accumulatedFirstCnt / population) * 100).toFixed(1)
          );

          console.log(
            ((result.accumulatedSecondCnt / population) * 100).toFixed(1)
          );
          setPer(result);
          console.log(per);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://coroname.me/today");
        if (response.status === 200) {
          const result = response.data.confirm_num;
          console.log(result);
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return <VaccineStatComponent data={data} per={per} population={population} />;
}
export default VaccineStatContainer;
