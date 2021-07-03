import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};

    background-color: ${props => props.theme.colors.secondary};

    @media(max-width: 770px){
        justify-content: flex-end;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        height: 70px;
        width: 100%;
    }
`;

export const ToggleContainer = styled.div`
    @media(max-width: 770px){
        display: none;
    }
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white};
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;