console.log("Script cargado")

const searchNews = () => {

    const searchInput = document.getElementById("searchInput")
    console.log("funcion search anda")
    console.log(searchInput.value)

    fetch(`/api/v1/news/search?title=${searchInput}`)
        .then(response => response.json())
        .then(news => displayNews(news) )
        .catch((error) => { console.error("Error fetching news => ", error) })
}


const displayNews = (news) => {

    console.log("NEWS => ", news)

    const newsContainer = document.getElementById("news-container")
    newsContainer.innerHTML = ""

    news.forEach(item => {
        const newsItem = document.createElement("div")
        newsItem.classList.add("news-item")

        const title = document.createElement("h3")
        title.textContent = item.title

        const description = document.createElement("p")
        description.textContent = item.description

        const url = document.createElement("a")
        url.textContent = "Read More"
        url.href = item.url
        url.target = "_blank"

        newsItem.appendChild(title)
        newsItem.appendChild(description)
        newsItem.appendChild(url)

        newsContainer.appendChild(newsItem)
    })
}


// const displayNews = (news) => {
//     const newsContainer = document.getElementById("news-container")
//     newsContainer.innerHTML = ""

//     news.forEach(item => {
//         const newsItem = document.createElement("div")
//         newsItem.classList.add("news-item")

//         const title = documment.createElement("h3")
//         title.textContext = item.title

//         const description = documment.createElement("p")
//         description.textContext = item.description

//         const url = document.createElement("a")
//         url.textContent = "Read more"
//         url.href = item.url
//         url.target = "_blank"

//         newsItem.appendChild(title)
//         newsItem.appendChild(description)
//         newsItem.appendChild(url)

//         newsContainer.appendChild(newsItem)

//     })
// }