import React from "react";
import { Button, Space } from "antd";
import {
  SearchOutlined,
  CarOutlined,
} from "@ant-design/icons";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  homeButtonRed: {
    height: "10vh",
    backgroundColor: "#ca0001",
    fontSize: "1.5em",
  },
  homeButtonBlack: {
    height: "10vh",
    backgroundColor: "black",
    fontSize: "1.5em",
  },
  homeButtonIcon: {
    fontSize: "1.5em",
    alignSelf: "start",
  },
});

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Space
      direction="vertical"
      size="large"
      style={{
        width: "100%",
        height: "100%",
        "justify-content": "space-evenly",
      }}
    >
      <Button
        type="primary"
        block
        className={classes.homeButtonRed}
        icon={<SearchOutlined className={classes.homeButtonIcon} />}
        onClick={(e)=> {e.preventDefault(); navigate('/buscar');}}
      >
        PROCURAR
      </Button>
      <Button
        type="primary"
        block
        className={classes.homeButtonBlack}
        icon={<CarOutlined className={classes.homeButtonIcon} />}
        onClick={(e)=> {e.preventDefault(); navigate('/oferecer');}}
      >
        OFERECER
      </Button>
    </Space>
  );
};

export default Home;
