import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData } from "../../utility/localstorage";
import ShowDonatedItems from "./ShowDonatedItems";

const Donation = () => {
  const datas = useLoaderData();
  const [donatedDatas, setDonatedDatas] = useState([]);
  useEffect(() => {
    const storedDonateData = getStoredDonationData();
    if (storedDonateData.length) {
      const datasDonated = datas.filter((data) =>
        storedDonateData.includes(data.id)
      );
      // console.log(datasDonated);
      setDonatedDatas(datasDonated);
    }
  }, []);
  return <ShowDonatedItems donatedDatas={donatedDatas}></ShowDonatedItems>;
};

export default Donation;
