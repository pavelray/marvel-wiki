import styled from 'styled-components';
import { COLORS } from '../../utility/constants';

export const AboutContainer = styled.div`
    background-color: ${COLORS.type5};
    height: 90vh;
    .about-container{
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    p{
        position:absolute;
        font-size: 1.5rem;
        bottom: 0;
        padding: 2rem;
        text-align: center;
        width: 100%;
        background-color: ${COLORS.type5};
    }
`;