import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams, Link, Navigate } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const { groups } = useStudents();
  const { id } = useParams();

  if (!id && groups.length > 0) return <Navigate replace to={`/group/${groups[0]}`} />;
  
  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {groups.map((group) => (
            <Link key={group} to={`/group/${group}`}>
              {group}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <UsersList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;