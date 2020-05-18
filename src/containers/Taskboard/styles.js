const styles = (theme) => ({
  taskboard: {
    display: 'flex',
    alignItems: 'center',
  },
  shape: {
    // backgroundColor: 'red',
    // color: 'white',
    //borderColor: '#cccccc',
    padding: '5px 15px',
    margin: '0 10px',
    //borderRadius: 5
    backgroundColor: theme.color.primary,
    color: theme.shape.textColor,
  },
});

export default styles;
