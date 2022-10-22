import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../Loading/Loading";
import Strip from "../Strip/Strip";
import { filterData } from "../../Utils/filterData";

const Overview = (props) => {
  const { searchValue } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!props.data.length) {
      dispatch(props.action);
    }
  }, [dispatch, props.data, props.action]);

  useEffect(() => {
    if (props.data.length) {
      setLoading(false);
    }
  }, [props.data]);

  useEffect(() => {
    setFilteredData([...filterData(props.data, searchValue)]);
  }, [searchValue, props.data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Strip
        data={filteredData}
        title={props.title}
        enableButtons={props.enableButtons}
      />
    </main>
  );
};

export default Overview;
