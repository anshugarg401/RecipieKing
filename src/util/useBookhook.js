import axios from "axios";
import { useEffect,useState } from "react";
const useBookhook = (query,pageNumber,url) => {
    
    const [loading,setloading] = useState(true);
    const [error,seterror] = useState(false);
    const [Recipies,setRecipies] = useState([ ]);
    const [hasMore,sethasMore] = useState(false);
    useEffect(()=>{
        setRecipies([ ]);

    },[query])
    useEffect(()=>{
        let cancel;
        axios({
            method: "GET",
            url: "https://cors-anywhere.herokuapp.com/https://recipes.eerieemu.com/api/recipe/",
            params:{ q:query ,page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setRecipies(prevrecipies => {
                console.log(prevrecipies)
                return [...new Set([...prevrecipies , ...res.data.results.map(b=>[b.id,b.name,b.slug,b.image_path,b.description,b.rating_value])])]
            })
            sethasMore(res.data.results.length > 0);
            setloading(false);
        })
        .catch(e =>{
            if(axios.isCancel(e)) return 
            seterror(true);
        } )
        return ()=>cancel()
    },[query,pageNumber])
    return {loading,error,Recipies,hasMore}
}

export default useBookhook;