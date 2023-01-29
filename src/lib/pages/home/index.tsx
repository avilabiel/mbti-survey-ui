import { Grid } from "@chakra-ui/react";
import Header from "./components/Header";
import MbtiSurvey from "./components/MbtiSurvey";

const Home = () => {
  return (
    <Grid gap={4}>
      <Header />
      <MbtiSurvey />
    </Grid>
  );
};

export default Home;
