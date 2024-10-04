const NewsModel = require("./models/news.model")

class NewsDao {

    /**
     * 
     * @param {String} title 
     */

    async searchByTitle(title) {
        const results = await NewsModel.find({
            title: {
                $regex: title,
                $options: "i"
            }
        })
        // console.log("results del dao => ", results)

        return results
    }

    async upsertNewsByTitle(newsArray) {

        for (const news of newsArray) {

            await NewsModel.updateOne(
                { title: news.title },
                { $set: { description: news.description, url: news.url, title: news.title } },
                { upsert: true }
            )
        }
    }
}

module.exports = { NewsDao }
