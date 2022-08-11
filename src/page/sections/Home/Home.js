import styled from "styled-components";

import { Navbar } from "../../../Components/Navbar/Navbar";
import { Main } from "./Sections/Main/Main";
import { RecentPosts } from "./Sections/Recent posts/RecentPosts";
import { FeaturedWorks } from "./Sections/Featured works/FeaturedWorks";
import { Footer } from "../../../Components/Footer/Footer";

export function Home() {
  return (
    <StyledHome>
      <Navbar />
      <Main />
      <RecentPosts />
      <FeaturedWorks />
      <Footer />
    </StyledHome>
  );
}

const StyledHome = styled.div``;
