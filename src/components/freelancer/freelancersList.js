import React, { useState, useEffect } from 'react';
import { List, Avatar } from 'antd';
import { apiClient } from '../../client/apiClient';

const Item = List.Item;

export const FreelancersList = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const freelancers = await apiClient.getFreelancers();
      setFreelancers(freelancers);
    };
    fetchData();
  }, []);

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        position: 'bottom',
        /*onChange: page => {
          console.log(page);
        },*/
        pageSize: 3,
      }}
      dataSource={freelancers}
      renderItem={item => (
        <Item key={item.title} extra={<button>Details</button>}>
          <Item.Meta
            avatar={
              <Avatar
                src={
                  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }
              />
            }
            title={<a href={item.href}>{item.fullname}</a>}
            description={item.id}
          />
          {item.birthDate}
        </Item>
      )}
    />
  );
};
