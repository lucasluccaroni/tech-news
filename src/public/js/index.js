console.log("Script cargado")

const searchNews = () => {
    const searchInput = document.getElementById("searchInput")
    console.log("funcion search anda")
    console.log(searchInput.value)

    fetch(`/api/v1/news/search?title=${searchInput}`)

        .then((response)=> {
            response.json()
        })
        .then((news)=>{
            displayNews(news)
        })



}