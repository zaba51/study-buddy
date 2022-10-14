import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo } from './UsersListItem.styles.js'
import { UserShape } from 'types/index.js';
//import { UsersContext } from 'providers/UsersProvider.js';
import { Average } from 'components/atoms/Average/Average';

const UsersListItem = ({ userData: { average, name, attendance = '0%'}, ...props }) => {
    //const { deleteUser } = useContext(UsersContext);

    return (
        <Wrapper {...props}>
            <Average value = {average}>{average}</Average>
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