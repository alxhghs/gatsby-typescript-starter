import React from "react";
import styled from "@emotion/styled";
import { Link, SEO } from "../components";

const Wrapper = styled("div")`
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
    height: 100%;
`;

const App: React.FC = () => {
    return (
        <Wrapper>
            <SEO />
            <h1>hello, world</h1>
            <Link to="/blog">Blog</Link>
        </Wrapper>
    )
};

export default App;
