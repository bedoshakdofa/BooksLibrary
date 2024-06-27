class ApiFeatuers {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    pagination() {
        const page = this.queryString.page * 1 || 1;
        const skip = (page - 1) * 6;
        this.query = this.query.find().skip(skip).limit(6);
        return this;
    }

    search() {
        let queryObj = { ...this.queryString };
        delete queryObj["page"];
        for (const key in queryObj) {
            queryObj[key] = { $regex: queryObj[key], $options: "i" };
        }
        this.query = this.query.find(queryObj);
        return this.query;
    }
}

export default ApiFeatuers;
