import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import style from "./Search.module.css";
import supabase from "../services/supabase";
import Spinner from "../components/Spinner"


export default function SearchBar ({ setResults }) {
  const [isLoading, setIsLoading] = useState("");
  const [input, setInput] = useState("");

  const fetchData = async(value) => {
    setIsLoading(true); 
    const{data,error} = await supabase
    .from("SearchBar") 
    .select("*")
    .ilike("name", `%${value}%`);

  if (error) {
    console.error("Error fetching data from Supabase:", error.message);
    return;
  }

  setResults(data);
  setIsLoading(false);
};

const handleChange = (value) => {
  setInput(value);
  fetchData(value);
};

return (
  <div className={style.inputWrapper}>
    <FaSearch className={style.icon} />
    <input
      placeholder="Scrie aci..."
      value={input}
      onChange={(e) => handleChange(e.target.value)}
    />
  {isLoading && <Spinner />}
  </div>
);
}