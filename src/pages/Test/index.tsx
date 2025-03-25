import { useEffect } from "react";
import Grid from "../../components/Grid";
import { useCategory } from "../../zustand/getCategory";

const Test = () => {
  const { category, getCategory } = useCategory();
  useEffect(() => {
    getCategory("/category.json");
    //eslint-disable-next-line
  }, []);
  console.log(category);

  return <Grid data={category} />;
};

export default Test;
