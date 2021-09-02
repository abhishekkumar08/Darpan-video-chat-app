import "./App.css";
import Notifications from "./components/Notifications";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));
function App() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <AppBar
          className={classes.appBar}
          position="static"
          color="transparent"
        >
          <div className="header">दर्पण-Web Chat App</div>
        </AppBar>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </>
  );
}

export default App;
