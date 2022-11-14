
import { Dispatch, SetStateAction } from "react";
import Input from "./common/Input";
import SearchIcon from "../assets/svg/search"

type SearchingProps = {
  setSearchingVal: Dispatch<SetStateAction<string>>;
  searchingVal: string;
}

const Searching:React.FC<SearchingProps> = ({setSearchingVal, searchingVal}) => {

  const handleInputChange = (newVal: string) => {
    setSearchingVal(newVal);
  };

  return (
    <div className="mt-4">
      <div className="grid grid-cols-[minmax(200px,_600px)] justify-center">
         <Input curVal={searchingVal} handleInputChange={handleInputChange} leftIcon={<SearchIcon />}/>
      </div>
     
    </div>
  );
};

export default Searching;
