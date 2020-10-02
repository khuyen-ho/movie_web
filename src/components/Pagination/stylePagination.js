const style = (theme) => ({
  pagi: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  tagA: {
    backgroundColor: "#6c737e!important",
    position: "relative",
    display: "block",
    padding: ".5rem .75rem",
    marginLeft: -1,
    lineHeight: 1.25,
    color: "#fff",
    border: "1px solid #545357",
    textDecoration:'none',
    '&:hover':{
      color:'#000',
      textDecoration:'none',
      transition:'all 0.5s'
    }
  },
  active: {
    color:'#fff!important',
    backgroundColor: "#151516!important",
    borderColor: "#50555d!important",
  },
  tagUl: {
    display: "list-item",
    backgroundColor: "#6c737e!important",
  },
});
export default style;
