import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";

class Pagination_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: this.props.currentPage,
    };
  }

  handlePageChange(pageNumber) {
    //console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  render() {
      console.log(this.props.pagination);
      const{totalCount,count}=this.props.pagination;
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={count}
          totalItemsCount={totalCount}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pagination: state.pagination,
  };
};

export default connect(mapStateToProps)(Pagination_);
