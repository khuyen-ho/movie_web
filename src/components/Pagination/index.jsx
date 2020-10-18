import React, { Component } from "react";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import {
  GET_COURSE_LIST,
  GET_CURRENT_PAGE,
} from "../../redux/actions/actionType";
import { getCourseList } from "../../redux/actions/movieAction";
import style from "./style";
import { withStyles } from "@material-ui/core";

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
    this.props.dispatch(getCourseList(pageNumber));
  }
  render() {
    const {
      totalCount,
      count,
      currentPage,
      totalPages,
    } = this.props.pagination;
    // console.log(totalCount/totalPages);
    const { classes } = this.props;
    return (
      <>
        <Pagination
          innerClass={classes.pagi}
          //  activeClass={classes.active}
          activeLinkClass={classes.active}
          linkClass={classes.tagA}
          // itemClass="page-item"
          itemClass={classes.tagUl}
          //linkClass="page-link"
          activePage={this.state.activePage}
          itemsCountPerPage={9}
          totalItemsCount={totalCount}
          pageRangeDisplayed={10}
          onChange={this.handlePageChange.bind(this)}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pagination: state.pagination,
  };
};

export default connect(mapStateToProps)(withStyles(style)(Pagination_));
