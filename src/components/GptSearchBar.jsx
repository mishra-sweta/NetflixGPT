import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GptSearchBar = () => {
  const langConfig = useSelector((store) => store.config.lang);
  return (
    <div className="p-[10%] flex justify-center">
      <form className="text-white bg-black p-4 w-1/2 grid grid-cols-12 rounded">
        <input
          className="border p-2 bg-white mx-2 col-span-9 text-black"
          type="text"
          placeholder={lang[langConfig]?.gptSearchPlaceholder}
        />
        <button className="col-span-3 p- mx-2 bg-red-800 rounded cursor-pointer">
          {lang[langConfig]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
