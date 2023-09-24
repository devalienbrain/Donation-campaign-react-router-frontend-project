import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";

const DataDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const allData = useLoaderData();
  useEffect(() => {
    const findData = allData?.find((details) => details.id === id);
    setDetails(findData);
  }, [allData, id]);
  console.log(details);
  return (
    <div>
      <ShowDetails details={details}></ShowDetails>
    </div>
  );
};

export default DataDetails;
