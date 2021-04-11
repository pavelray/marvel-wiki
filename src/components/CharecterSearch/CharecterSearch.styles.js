import styled from 'styled-components';
import { COLORS } from '../../utility/constants';

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem;

    .charecter-search-input{
        display: flex;
        input{
            margin-right: 1rem;
            width: 100%;
            font-size: 2rem;
            text-transform: uppercase;
        
            &::placeholder {
                font-size: 1rem;
                text-transform: none;
            }
        }

        button{
            cursor: pointer;
            background-color: ${COLORS.type5};
            border: 1px solid ${COLORS.type4};
            text-decoration: none;
            font-size: 1rem;
            padding: .75rem;

            :hover{
                background-color: ${COLORS.type1};
            }
        }
    }
`