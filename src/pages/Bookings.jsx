import React, { useState } from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Input from '../components/common/Input';

const Bookings = () => {
  const [bookings, setBookings] = useState([
    { id: 1, name: 'Meeting Room A', date: '2023-10-01', time: '10:00 AM', status: 'confirmed', location: 'Building A, Floor 2', attendees: 8 },
    { id: 2, name: 'Conference Room', date: '2023-10-02', time: '2:00 PM', status: 'pending', location: 'Building B, Floor 1', attendees: 15 },
    { id: 3, name: 'Training Room', date: '2023-10-03', time: '9:00 AM', status: 'confirmed', location: 'Building A, Floor 3', attendees: 25 },
    { id: 4, name: 'Executive Suite', date: '2023-10-04', time: '3:00 PM', status: 'cancelled', location: 'Building C, Floor 5', attendees: 5 },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleCancel = (id) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'cancelled' } : booking
    ));
  };

  const handleDelete = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const getStatusBadge = (status) => {
    const statusConfig = {
      confirmed: { color: '#10b981', text: 'Confirmed' },
      pending: { color: '#f59e0b', text: 'Pending' },
      cancelled: { color: '#ef4444', text: 'Cancelled' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 12px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: config.color + '20',
        color: config.color
      }}>
        {config.text}
      </span>
    );
  };

  const containerStyle = {
    padding: '24px'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px'
  };

  const titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '8px'
  };

  const subtitleStyle = {
    color: '#6b7280'
  };

  const searchContainerStyle = {
    marginBottom: '32px'
  };

  const bookingsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px'
  };

  const bookingCardStyle = {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  };

  const bookingNameStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '12px'
  };

  const bookingInfoStyle = {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '8px'
  };

  const actionsContainerStyle = {
    display: 'flex',
    gap: '8px',
    marginTop: '16px'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '48px',
    color: '#6b7280'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div>
          <h1 style={titleStyle}>Bookings</h1>
          <p style={subtitleStyle}>Manage and track all room bookings</p>
        </div>
        <Button variant="primary">
          New Booking
        </Button>
      </div>

      <div style={searchContainerStyle}>
        <Input
          type="text"
          placeholder="Search bookings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
          Showing {filteredBookings.length} of {bookings.length} bookings
        </p>
        
        {filteredBookings.length === 0 ? (
          <Card>
            <div style={emptyStateStyle}>
              <p style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>No bookings found</p>
              <p>Try adjusting your search terms</p>
            </div>
          </Card>
        ) : (
          <div style={bookingsContainerStyle}>
            {filteredBookings.map((booking) => (
              <Card key={booking.id}>
                <div style={bookingCardStyle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h3 style={bookingNameStyle}>{booking.name}</h3>
                    {getStatusBadge(booking.status)}
                  </div>
                  
                  <div>
                    <p style={bookingInfoStyle}><strong>Date:</strong> {booking.date}</p>
                    <p style={bookingInfoStyle}><strong>Time:</strong> {booking.time}</p>
                    <p style={bookingInfoStyle}><strong>Location:</strong> {booking.location}</p>
                    <p style={bookingInfoStyle}><strong>Attendees:</strong> {booking.attendees}</p>
                  </div>
                  
                  <div style={actionsContainerStyle}>
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    {booking.status !== 'cancelled' && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleCancel(booking.id)}
                      >
                        Cancel
                      </Button>
                    )}
                    <Button 
                      size="sm" 
                      variant="danger"
                      onClick={() => handleDelete(booking.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
