import { useState } from "react";
import "./App.css";
import SearchBox from "./components/SearchBox";
import Button from "./components/Button";
import ProductList from "./components/ProductList";
import "./data/products";
import products from "./data/products";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);

  const filterProducts = products.filter((item) =>
    item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );
  return (
    <>
      <div className="container">
        <h1 className="title">상품 목록</h1>
        <div className="top-area">
          {/* 입력창 */}
          <SearchBox
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* 버튼 */}
          <Button text="🔍" onClick={() => setSearch("")} />
        </div>
        {/* 상품목록 */}
        <ProductList products={filterProducts} />
      </div>
    </>
  );
}
export default App;
