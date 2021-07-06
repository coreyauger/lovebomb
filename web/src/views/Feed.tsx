import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Grid, IconButton, Toolbar, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import LovebombCard from "../components/LovebombCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    control: {
      padding: theme.spacing(2),
    },
    content: {
      padding: theme.spacing(2),
    },
  })
);

const Feed = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [feed, setFeed] = useState<any>(null);

  useEffect(() => {
    async function fetchMyAPI() {
      console.log("** calll");
      const response = await fetch(
        "https://polished-dust-2316.us-east1.akkaserverlessapps.com/lovebomb"
      );
      const responseJson = JSON.parse(
        "[" + (await response.text()).replaceAll("}\n{", "}, {") + "]"
      );
      console.log("responseJson", responseJson);
      setFeed(responseJson);
    }
    fetchMyAPI();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <Grid container className={classes.root} spacing={2}>
          {feed &&
            feed.map((x: any) => (
              <Grid item xs={3}>
                <LovebombCard key={x.id} lovebomb={x} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default Feed;
