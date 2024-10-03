class NewsDto {
    constructor(news) {
        this.id = news._id.toString()
        this.title = news.title
        this.description = news.description
        this.url = news.url
    }


    transform() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            url: this.url
        }
    }
}

module.exports = { NewsDto }