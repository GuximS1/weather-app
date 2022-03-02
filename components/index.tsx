/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import classes from "./Main.module.scss";
import { Input } from "antd";
import Cities from "./Cities";
import { useRouter } from "next/router";

type Props = {};

const { Search } = Input;

function Weather({}: Props) {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSearch = (value: string) => {
    router.push({
      pathname: "[id]",
      query: {
        id: value,
      },
    });
  };
  return (
    <div>
      <div className={classes.search}>
        <Search
          placeholder="Search by city"
          onSearch={onSearch}
          enterButton
          style={{ width: "35%" }}
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"
            alt="img"
            width={40}
            height={40}
          />
          <h1 style={{ fontWeight: "bold", color: "white" }}>Weather.com</h1>
        </div>
      </div>
      <Cities />
    </div>
  );
}

export default Weather;
