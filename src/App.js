import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/SideBar";
import Title from "./components/Title";
import Page from "./components/Page";

function App() {
  const key = "FFN2nvk7HaNOkac1jm7DCLz0IJSml2Lr";

  const [title, setTitle] = useState("Most viewed - day");
  const [articleCount, setArticleCount] = useState(10);
  const [articlesData, setArticlesData] = useState([]);

  const [url, setUrl] = useState(
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=" + key
  );
  const [data, setData] = useState([]);

  const handleSetUrl = (sort, time, num) => {
    setUrl(
      "https://api.nytimes.com/svc/mostpopular/v2/" +
        sort +
        "/" +
        time +
        ".json?api-key=" +
        key
    );
    setArticleCount(num);
    console.log(articleCount);
    setTitle(
      `Most ${sort} - ${time === "1" ? "day" : time === "7" ? "week" : "month"}`
    );
  };

  const formatArticles = () => {
    let temp = [];
    for (let i = 0; i < articleCount; i++) {
      try {
        temp[i] = {
          key: i + 1,
          title: data[i].title,
          image: data[i].media[0]["media-metadata"][0].url,
          abstract: data[i].abstract,
          date: data[i].published_date,
        };
      } catch {
        temp[i] = {
          key: i + 1,
          title: "n/a",
          image: "",
          abstract: "n/a",
          date: "n/a",
        };
      }
    }
    setArticlesData(temp);
    console.log(articlesData);
  };

  const getArticles = async (url) => {
    try {
      const response = await fetch(url);

      const data = await response.json();

      console.log("found data");
      console.log(data); // you can view if a response went through in developer mode.

      setData(data.results); // it should at most display 15 articles
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    getArticles(url);
  }, [url]);

  useEffect(() => {
    formatArticles();
  }, [data, articleCount]);

  return (
    <div className="App">
      <header className="App-header">
        <Title title={title} />
      </header>
      <div className="main-content">
        <div className="left-content">
          <Sidebar search={handleSetUrl}></Sidebar>
        </div>
        <div className="right-content">
          <Page items={articlesData}></Page>
        </div>
      </div>
    </div>
  );
}

export default App;
