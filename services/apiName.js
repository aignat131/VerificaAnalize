import supabase from "./supabase"

export async function getNames(){
const { data, error } = await supabase
.from('SearchBar')
.select('*')

if(error)
{
    console.error(error)
    throw new Error("Names could not be loaded");
}
else
{
    alert("You did it!");
}

return data;
}