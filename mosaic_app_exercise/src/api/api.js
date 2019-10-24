
export const getTopHeadlines = async (page) => {
    try{
        //To be determined
        const key = '';
        var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'from=2019-10-23&' +
            'sortBy=popularity&' +
            'page=' + page + '&' +
            'apiKey=' + key;
        const resp = await fetch(url);
        return resp.json();
    }catch(error){
        throw error;
    }
}