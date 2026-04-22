import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';

const Details = () => {
  const { id } = useParams();

  const details = {
    1: { title: 'Project Alpha', description: 'This is a detailed view of Project Alpha.', status: 'Active' },
    2: { title: 'Project Beta', description: 'Details about Project Beta.', status: 'Completed' }
  };

  const item = details[id] || { title: 'Unknown', description: 'No details available.', status: 'N/A' };

  return (
    <Layout>
      <h1>Details</h1>
      <Card title={item.title}>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Status:</strong> {item.status}</p>
      </Card>
    </Layout>
  );
};

export default Details;
