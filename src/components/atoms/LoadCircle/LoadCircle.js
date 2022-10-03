import { theme } from 'assets/styles/theme';
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    100% {
        transform: translate(-50%, -50%) rotate(1turn);
    }
`;

export const LoadCircle = styled.div`
    width: 50px;
    height: 50px;
    border: 3px solid rgba(0, 0, 0, 0.3);
    border-right-color: ${({ theme }) => theme.colors.darkGrey};
    position:absolute;
    top:50%;
    left:50%;
    border-radius: 50%;
    z-index: 1;
    transform: translate(-50%, -50%) rotate(0);
    animation: ${rotate} 0.5s 0s infinite linear;
}
`;


