const NewsModel = require("./models/news.model")

class NewsDao {
    
    /**
     * 
     * @param {String} title 
     */
    
    async searchByTitle(title){
        const results = await NewsModel.find({
            title: {
                $regex: title,
                $options: "i"
            }
        })
        console.log("results del dao => ", results)

        return results
    }
}

module.exports = { NewsDao }
