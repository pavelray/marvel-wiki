import styled from "styled-components";
import { COLORS } from "../../utility/constants";

export const Nav = styled.nav`
  background-color: ${COLORS.type3};
  color: ${COLORS.type1};
  left: 0;
  position: relative;
  top: 0;
  width: 100%;
  z-index: 9999;
  padding: 0.75rem 0;

  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    &:checked {
      ~ {
        #overlay {
          background-color: ${COLORS.type3};
          bottom: 0;
          left: 0;
          height: 100vh;
          position: fixed;
          right: 0;
          top: 0;
          width: 100vw;
          z-index: -1;
        }
        ul {
          margin: 1em;
          max-height: inherit;
          opacity: 1;
        }
      }
    }
  }
  label {
    cursor: pointer;
    display: block;
    padding: 0.5em;
    #menu-icon {
      float: right;
      margin-right: 0.5rem;
    }
  }
  #menu-icon {
    background: ${COLORS.type1};
    border-radius: 0.05em;
    height: 0.2em;
    transition: all 0.2s ease-in-out;
    width: 100%;
    display: inline-block;
    margin: 0.4em 0;
    max-width: 1em;
    position: relative;
    &:before {
      background: ${COLORS.type1};
      border-radius: 0.05em;
      height: 0.2em;
      transition: all 0.2s ease-in-out;
      width: 100%;
      content: "";
      left: 0;
      position: absolute;
      top: -0.4em;
    }
    &:after {
      background: ${COLORS.type1};
      border-radius: 0.05em;
      height: 0.2em;
      transition: all 0.2s ease-in-out;
      width: 100%;
      content: "";
      left: 0;
      position: absolute;
      bottom: -0.4em;
    }
  }
  input[type="checkbox"] {
    &:checked {
      + {
        label {
          #menu-icon {
            background: transparent;
            &:before {
              top: 0;
              transform: rotate(-45deg);
            }
            &:after {
              bottom: 0;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
  ul {
    font-size: 1.5em;
    list-style: none;
    margin: 0;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    text-align: center;
    > li {
      margin: 2.5em 0;

      :last-child {
        margin-top: 6em;
      }
    }
    a {
      color: ${COLORS.type1};
      text-decoration: none;
      font-size: 2rem;
      text-transform: uppercase;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
