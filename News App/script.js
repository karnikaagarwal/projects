const apiKey = "6428acabc9504422894b3ac662039c96"; // Replace with your actual API key
let page = 1;

async function fetchNews(loadMore = false) {
    if (!loadMore) page = 1; // Reset page on new search

    const query = document.getElementById("searchInput").value || "latest";
    const category = document.getElementById("categorySelect").value;
    const url = `https://newsapi.org/v2/top-headlines?q=${query}&category=${category}&page=${page}&apiKey=${apiKey}&pageSize=5`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ok" && data.articles.length > 0) {
            if (!loadMore) document.getElementById("newsContainer").innerHTML = "";
            displayNews(data.articles);
        } else {
            document.getElementById("newsContainer").innerHTML = "<p>No news found. Try another search.</p>";
        }
    } catch (error) {
        document.getElementById("newsContainer").innerHTML = "<p>Error fetching news. Try again.</p>";
    }
}

function displayNews(articles) {
    const newsContainer = document.getElementById("newsContainer");

    articles.forEach(article => {
        const newsItem = document.createElement("div");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read More</a>
        `;
        newsContainer.appendChild(newsItem);
    });

    document.getElementById("loadMoreBtn").style.display = "block";
}

function loadMoreNews() {
    page++;
    fetchNews(true);
}
