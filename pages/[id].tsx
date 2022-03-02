/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import classes from "../styles/City.module.scss";
import { Card } from "antd";
import { DUMMY_DATA } from "../assets/icons";

type Props = {};
const GET_CITY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        timestamp
      }
    }
  }
`;

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
const day =
  new Date(Date.now()).toLocaleString("en-us", { weekday: "long" }) + " ";

function MainPage({}: Props) {
  const router = useRouter().query;
  const routing = useRouter();
  const { loading, error, data } = useQuery(GET_CITY, {
    variables: {
      name: router.id,
    },
  });
  var date = new Date(data?.getCityByName?.weather?.timestamp);
  if (loading)
    return (
      <h1 style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
        Loading....
      </h1>
    );
  if (error) {
    return (
      <h1 style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
        Put a valid city please!
      </h1>
    );
  }
  // const nesto = useMemo(() => {
  //   try {
  //     return ;
  //   } catch (e) {
  //     return "";
  //   }
  // }, [data]);
  const weather = (
    <h2 style={{ color: "black", fontWeight: "bold", textAlign: "left" }}>
      Weather today in {data?.getCityByName?.name}, &nbsp;
      {regionNames.of(data?.getCityByName?.country || "")}
    </h2>
  );

  const temperature = (
    <h1
      style={{
        float: "left",
        marginLeft: "3vh",
        fontWeight: "bold",
        fontSize: "4em",
      }}
    >
      {(
        parseFloat(data?.getCityByName?.weather?.temperature?.feelsLike) -
        273.15
      ).toFixed(0)}
      °
      <p style={{ fontSize: "0.3em", margin: "auto", fontWeight: "normal" }}>
        Feels Like
      </p>
    </h1>
  );
  if (data?.getCityByName === null)
    return (
      <div>
        <h1
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: "30vh",
            fontSize: "5em",
          }}
        >
          Please put a valid city!
        </h1>
        <button
          className={classes.button}
          onClick={() => {
            routing.push("/");
          }}
          style={{ marginLeft: "88vh" }}
        >
          Go to Homepage
        </button>
      </div>
    );
  return (
    <div className={classes.city}>
      <div className={classes.city_position}>
        <div style={{ marginTop: "5vh" }}></div>
        <Card style={{ width: "60%", marginTop: 16 }} className={classes.card}>
          {weather}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {temperature}
            <h1 style={{ marginRight: "10vh", marginTop: "2vh" }}>
              {DUMMY_DATA.map((item1) => {
                if (item1.name === data?.getCityByName?.weather?.summary.title)
                  return (
                    <img
                      src={item1.icon}
                      alt=""
                      width={100}
                      key={Math.random().toString(36).substring(2, 9)}
                    />
                  );
              })}
            </h1>
          </div>
          <div className={classes.stats}>
            <div className={classes.leftstats}>
              <p>
                <hr />
                &nbsp;
                <img src="https://img.icons8.com/ios-glyphs/16/000000/clouds.png" />{" "}
                Clouds
                <span>{data?.getCityByName?.weather?.clouds?.all}</span>
              </p>
              <p>
                <hr />
                &nbsp;
                <img src="https://img.icons8.com/small/16/000000/temperature.png" />{" "}
                Temperature
                <span>
                  {(
                    parseFloat(
                      data?.getCityByName?.weather?.temperature?.actual
                    ) - 273.15
                  ).toFixed(0)}
                  °
                </span>
              </p>
              <p>
                <hr />
                &nbsp;
                <img src="https://img.icons8.com/ios-glyphs/16/000000/telescope.png" />{" "}
                Sky
                <span>
                  {data?.getCityByName?.weather?.summary?.description}
                </span>
              </p>

              <p>
                <hr />
                &nbsp;
                <img src="https://img.icons8.com/ios-filled/16/000000/hygrometer.png" />{" "}
                Humidity
                <span>{data?.getCityByName?.weather?.clouds?.humidity}</span>
                <hr />
              </p>
            </div>
            <div className={classes.rightstats}>
              <p>
                <hr />
                &nbsp;&nbsp;&nbsp;
                <img src="https://img.icons8.com/small/16/000000/visible.png" />{" "}
                Visibility
                <span>
                  {(
                    parseFloat(
                      data?.getCityByName?.weather?.clouds?.visibility
                    ) / 1000
                  ).toFixed(2)}{" "}
                  km
                </span>
              </p>
              <p>
                <hr />
                &nbsp;&nbsp;&nbsp;
                <img src="https://img.icons8.com/small/16/000000/wind.png" />{" "}
                Wind
                <span>{data?.getCityByName?.weather?.wind?.speed} km/h</span>
              </p>
              <p>
                <hr />
                &nbsp;&nbsp;&nbsp;
                <img src="https://img.icons8.com/small/16/000000/wind-speed-33-37.png" />{" "}
                Wind direction
                <span>{data?.getCityByName?.weather?.wind?.deg} deg°</span>
              </p>

              <p>
                <hr />
                &nbsp;
                <img src="https://img.icons8.com/material-rounded/24/000000/clock.png" />{" "}
                Measured
                <span>
                  {date.getHours()}:{date.getMinutes()}
                </span>
                <hr />
              </p>
            </div>
          </div>
        </Card>
        <button
          className={classes.button}
          onClick={() => {
            routing.push("/");
          }}
        >
          Go to Homepage
        </button>
        <h2
          style={{
            color: "#00FF11",
            textAlign: "center",
            fontWeight: "bold",
            marginTop: "20vh",
          }}
        >
          {"Weather for " + day}
        </h2>
      </div>
    </div>
  );
}

export default MainPage;
