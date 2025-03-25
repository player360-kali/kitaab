import Categories from "../../components/sections/Categories";
import Header from "../../components/sections/Header";
import right_link_icon from "../../assets/right_link_icon.svg";
import Card from "../../components/Card";
import { useCategories } from "../../zustand/getCategories";
import { useEffect } from "react";
import CategoryCard from "../../components/CategoryCard";
import { useCategory } from "../../zustand/getCategory";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";

const Home = () => {
  const { categories, getCategories } = useCategories();
  const { category, getCategory } = useCategory();

  useEffect(() => {
    getCategories("/categories.json");
    getCategory("/category.json");
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Categories
        title="Kategoriyalar"
        link="Barchasini ko’rish"
        to="/categories/"
        rightLinkIcon={<img src={right_link_icon} alt="Link icon" />}
      >
        <Card data={categories} />
      </Categories>

      <Categories
        title="Divanlar"
        link="Barchasini ko'rish"
        to="/categories/divan"
        rightLinkIcon={<img src={right_link_icon} alt="Link icon" />}
      >
        <CategoryCard type="divan" data={category} />
      </Categories>

      <Categories
        title="Kreslolar"
        link="Barchasini ko'rish"
        to="/categories/kreslo"
        rightLinkIcon={<img src={right_link_icon} alt="Link icon" />}
      >
        <CategoryCard type="kreslo" data={category} />
      </Categories>

      <Categories
        title="Stollar"
        link="Barchasini ko'rish"
        to="/categories/stol"
        rightLinkIcon={<img src={right_link_icon} alt="Link icon" />}
      >
        <CategoryCard type="stol" data={category} />
      </Categories>

      <Categories
        title="Stullar"
        link="Barchasini ko'rish"
        to="/categories/stul"
        rightLinkIcon={<img src={right_link_icon} alt="Link icon" />}
      >
        <CategoryCard type="stul" data={category} />
      </Categories>

      <Categories
        title="Karavotlar"
        link="Barchasini ko'rish"
        to="/categories/stul"
        rightLinkIcon={<img src={right_link_icon} alt="Link icon" />}
      >
        <CategoryCard type="karavot" data={category} />
      </Categories>

      <Contact />

      <Footer />
    </>
  );
};
export default Home;
