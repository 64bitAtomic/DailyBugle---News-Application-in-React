let fun = async () => {
    const url = "https://gnews.io/api/v4/top-headlines?category=technology&apikey=b0c9a65ef9a55fb151cd9ecc7c2014fe&page=1&pageSize=9";
let data = await fetch(url);
let parsedData = await data.json();
console.log(parsedData.articles.length);
parsedData.articles.map((e)=>{
    console.log(e.title)
})
} 

fun()
