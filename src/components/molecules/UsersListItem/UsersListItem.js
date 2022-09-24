import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/button/Button';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles.js'


const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%'} }) => (
    <Wrapper>
        <StyledAverage value = {average}>{average}</StyledAverage>
        <StyledInfo>
            <p>
                {name}
                <Button onClick = {() => deleteUser(name)} />
            </p>
            <p>attendence: {attendance}</p>
        </StyledInfo>
    </Wrapper>
);

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    }),
};

export default UsersListItem;