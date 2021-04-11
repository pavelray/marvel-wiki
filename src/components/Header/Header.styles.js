import styled from "styled-components";
import { COLORS } from "../../utility/constants";

export const Nav = styled.nav`
    background-color: ${COLORS.type3};
    ul{
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
    }
    li {
        display: inline-flex;
        padding: 1rem;
        color: white;
        font-weight: bold;
    }
`;
