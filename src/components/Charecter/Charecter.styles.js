import styled from 'styled-components';
import { COLORS } from '../../utility/constants';

export const CharecterWrapper = styled.div`
    padding: 1rem;

    .name{
        span{
            font-size: .75rem;
            font-weight: normal;
            margin-left: .75rem;
            color: ${COLORS.type4};
            border-bottom: 1px solid ${COLORS.type4};
            font-style: italic;

            @media (max-width:299px){
                font-size: .5rem;
                margin-left: .5rem;
            }
        }
    }
    .description{
        font-size: 2rem;
        img{
            float: left;
            margin-right: 1rem;
           
            @media (max-width:499px){
                width: 150px;
                margin-right: .75rem;
            }
            @media (min-width:500px){
                width: 20%;
            }
        }

        @media (max-width:499px){
            font-size: 1rem;
        }
    }

    .reference{
        margin-top: .75rem;
    }
    .reference-title{
        font-size: 1.5rem;
        font-weight: bold;
        margin-right: .5rem;
    }

    .links{
        text-decoration:none;
        display: inline;
        font-size: 1rem;
        padding: .5rem;
        text-transform: uppercase;
    }
`;
