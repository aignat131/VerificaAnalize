import { useEffect, useState } from "react";

export default function(query, defaultMatches = media =window.matchMedia(query)) {
   const [matches,setMatches] =useState(defaultMatches)

   useEffect(() => {
   const media =window.matchMedia(query);
   
},[query])
}