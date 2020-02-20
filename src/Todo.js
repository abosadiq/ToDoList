import React from "react";
import Search from "./Search";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ListItem from "./ListItem";
class Todo extends React.Component {
  state = {
    item: [],
    currentItem: {
      text: "",
      key: ""
    },
    searchString: ""
  };

  handleInput = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      let newItems = [...this.state.item, newItem];
      this.setState({
        item: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      });
    }
  };
  handleDelete = key => {
    const deleteItem = this.state.item.filter(i => i.key !== key);
    this.setState({
      item: deleteItem
    });
  };
  handleChange = e => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    let filterList = this.state.item,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      filterList = filterList.filter(function(i) {
        return i.text.toLowerCase().match(searchString);
      });
    }
    return (
      <div
        style={{
          width: "500px",
          margin: "10px auto",
          border: "1px solid #000",
          padding: "20px 0"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",

            borderBottom: "2px solid #000"
          }}
        >
          <form onSubmit={this.addItem}>
            <TextField
              style={{ width: "400px" }}
              id="outlined-search"
              label="add items"
              type="add"
              variant="outlined"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <Button
              style={{ marginLeft: "20px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Add
            </Button>
          </form>
        </div>
        <Search
          searchString={this.state.searchString}
          handleChange={this.handleChange}
        />
        <ListItem
          item={this.state.item}
          handleDelete={this.handleDelete}
          filterList={filterList}
        />
      </div>
    );
  }
}
export default Todo;
