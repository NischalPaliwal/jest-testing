const fetchData = (callback) => {
    setTimeout(() => {
        callback('Hello World from Nischal Paliwal');
    }, 1000)
}

module.exports = fetchData;