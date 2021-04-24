import styled from 'styled-components';

export const HomePageContainer = styled.div`
    padding: 2rem;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(to right bottom, rgba(242, 204, 143, 0.8), rgba(244, 241, 222, 0.8)),
            url(${props => props.imageUrl});
    text-align: center;
    text-transform: uppercase;
    .heading-wrapper{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }

    .heading-main{
        font-size: 5rem;
        letter-spacing: 1rem;
        margin-bottom: 2rem;
        @media (max-width:499px){
            font-size: 2rem;
            letter-spacing: .75rem;
        }

        @media (max-width:1024px){
            font-size: 3rem;
            letter-spacing: 1rem;
        }
        
    }

    .heading-list{
        display:flex;
        justify-content:space-evenly;
        font-size: 2rem;
        line-height: 1.2;
        @media (max-width:499px){
            font-size: 1rem;
        }

        @media (max-width:768){
            font-size: 1rem;
        }

        span{
            padding-bottom: 1rem;
            font-style: italic;
            padding-left: 1rem;
            padding-right: 1rem;
            :hover{
                padding-bottom: 1rem;
                border-bottom: 1px solid;
                font-weight: bold;
                cursor:pointer;
            }
        }
    }

    
`;