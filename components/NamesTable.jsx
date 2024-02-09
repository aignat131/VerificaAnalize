import { getNames } from "../services/apiName";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";

function NamesTable({setResults}){
    return <div>${setResults}Lista de analize</div>
}

export default NamesTable;