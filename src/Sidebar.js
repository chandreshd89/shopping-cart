import React from "react";

function Sidebar(props) {
  const { selectedSize, setSelectedSize } = props;

  const sizeHandler = (size) => {
    if (selectedSize.includes(size)) {
      const filterSize = selectedSize.filter((s) => s !== size);
      setSelectedSize(filterSize);
    } else {
      setSelectedSize([...selectedSize, size]);
    }
  };

  const active = (size) => (selectedSize.includes(size) ? "active" : "");

  return (
    <div className="size">
      <h1>Sizes :</h1>
      <div className="mar-left flex wrap">
        <div
          id="XS"
          onClick={() => sizeHandler("XS")}
          className={`size-range center ${active("XS")}`}
        >
          XS
        </div>
        <div
          id="S"
          className={`size-range center ${active("S")}`}
          onClick={() => sizeHandler("S")}
        >
          S
        </div>
        <div
          id="M"
          className={`size-range center ${active("M")}`}
          onClick={() => sizeHandler("M")}
        >
          M
        </div>
        <div
          id="ML"
          className={`size-range center ${active("ML")}`}
          onClick={() => sizeHandler("ML")}
        >
          ML
        </div>
        <div
          id="L"
          className={`size-range center ${active("L")}`}
          onClick={() => sizeHandler("L")}
        >
          L
        </div>
        <div
          id="XXL"
          className={`size-range center ${active("XXL")}`}
          onClick={() => sizeHandler("XXL")}
        >
          XXL
        </div>
        <div
          id="XL"
          className={`size-range center ${active("XL")}`}
          onClick={() => sizeHandler("XL")}
        >
          XL
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
