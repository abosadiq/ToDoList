import React from "react";

export default function ListItem(props) {
  const newItems = props.filterList.map(i => {
    return (
      <div
        key={i.key}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ace123",
          marginTop: "10px"
        }}
      >
        <p>{i.text}</p>
        <button key={i.key} onClick={() => props.handleDelete(i.key)}>
          delete
        </button>
      </div>
    );
  });
  return <div>{newItems}</div>;
}
