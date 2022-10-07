import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles.js'
import { UserShape } from 'types/index.js';
//import { UsersContext } from 'providers/UsersProvider.js';

const UsersListItem = ({ userData: { average, name, attendance = '0%'} }) => {
    //const { deleteUser } = useContext(UsersContext);

    return (
        <Wrapper>
            <StyledAverage value = {average}>{average}</StyledAverage>
            <StyledInfo>
                <p>
                    {name}
                    <DeleteButton />
                </p>
                <p>attendence: {attendance}</p>
            </StyledInfo>
        </Wrapper>
    );
}
UsersListItem.propTypes = {
    userData: PropTypes.shape(UserShape),
};

export default UsersListItem;