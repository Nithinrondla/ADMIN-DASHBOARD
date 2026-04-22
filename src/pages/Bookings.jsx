import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Bookings = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: 'Meeting Room A', date: '2023-10-01', time: '10:00 AM' },
    { id: 2, name: 'Conference Room', date: '2023-10-02', time: '2:00 PM' }
  ]);

  const handleCancel = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  return (
    <Layout>
      <h1>Bookings</h1>
      {bookings.map(booking => (
        <Card key={booking.id} title={booking.name}>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Time:</strong> {booking.time}</p>
          <Button onClick={() => handleCancel(booking.id)}>Cancel</Button>
        </Card>
      ))}
    </Layout>
  );
};

export default Bookings;
