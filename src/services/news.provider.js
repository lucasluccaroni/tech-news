const NewsApi = require("newsapi")
const { newsApi } = require("../config")

class NewsApiProvider {

    constructor() {
        this.newsApi = new NewsApi(newsApi)
    }

    async fetchNews() {
        const response = await this.newsApi.v2.topHeadlines({
            category: "technology",
            country: "us",
            pageSize: 50
        })

        const { articles } = response

        return articles.map(a => ({ title: a.title, description: a.description || "", url: a.url }))
    }
}

module.exports = { NewsApiProvider }