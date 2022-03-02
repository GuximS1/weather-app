import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import Weather from "../components";
import Particle from "../components/Particle";
const GET_WEATHER = gql`
  query {
    getCityByName(name: "Skopje") {
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
const Home: NextPage = () => {
  // const { loading, error, data } = useQuery(GET_WEATHER);

  // if (loading)
  //   return <h1 style={{ textAlign: "center", margin: "20px" }}>IS Loading</h1>;
  // if (error) return <h1>Error! ${error.message}</h1>;

  // console.log(data);
  return (
    <div className={styles.mainpage}>
      {/* <Particle /> */}
      <Weather />
    </div>
  );
};

export default Home;
