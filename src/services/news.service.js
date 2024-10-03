const { NewsDto } = require("../dto/news.dto")

class NewsService {

    constructor(dao) {
        this.dao = dao
    }

    async search(title) {
        let results = await this.dao.searchByTitle(title)
        console.log("results del search en el service => ", results)

        let resultsTransformed = results.map(r => {
            const dto = new NewsDto(r)
            const transformation = dto.transform()
            return transformation
        })

        console.log("results post dto => ", resultsTransformed)
        
        return resultsTransformed
    }

    async synchronizeNews(provider) {
        try{
            const newsToUpsert = await provider.fetchNews()

            await this.dao.upsertNewsByTitle(newsToUpsert)
        }
        catch(err){
            console.log("Error fetching news Service => ", err)
        }
    }

}

module.exports = { NewsService }