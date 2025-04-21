import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { ifHave } from "../../utility/Wish";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Books/Book";
const Tablist = () => {
  const data = useLoaderData();

  const [readList, setReadList] = useState([])
  const [sort, setShort] = useState('')

  useEffect(() => {
    const getDataLocal = ifHave();
    const convertStoreData = getDataLocal.map(id => Number(id))
    const readingItems = data.filter(item => convertStoreData.includes(item.bookId));
    setReadList(readingItems)
  }, []);

  const handleShort = (t) => {
    setShort(t)
    if (t === "pages") {
      const shortType = [...readList].sort((s, g) => -s.totalPages + g.totalPages)
      setReadList(shortType)
    }

    if (t === "rating") {
      const shortType = [...readList].sort((s, g) => s.totalPages - g.totalPages)
      setReadList(shortType)
    }
  }

  return (
    <>
      <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
        short by :{sort ? sort : ''}
      </button>
      <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
        <li><a onClick={() => handleShort("pages")} >Pages</a></li>
        <li><a onClick={() => handleShort("rating")}>Rating</a></li>
      </ul>
      <Tabs>
        <TabList>
          <Tab>Wish list</Tab>
          <Tab>Read list</Tab>
        </TabList>
        <TabPanel>
          {
            readList.map((id, i) => <Book book={id} key={i}></Book>)
          }
        </TabPanel>
        <TabPanel>

        </TabPanel>
      </Tabs>
    </>
  );
};

export default Tablist;
