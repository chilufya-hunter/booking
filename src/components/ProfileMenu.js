import React, { useState } from 'react';
import './navbar.css';
import './ProfileMenu.css'

const ProfileMenu = () => {
  const [user, setUser] = useState({
    fullName: 'John Doe',
    phoneNumber: '+1234567890',
    referralCode: 'JOHNDOE123',
    referralReward: 50,
  });

  const [bookingHistory, setBookingHistory] = useState([
    { id: 1, dates: '2023-08-01 to 2023-08-05', amount: 400, status: 'Completed' },
    { id: 2, dates: '2023-09-15 to 2023-09-18', amount: 300, status: 'Upcoming' },
  ]);

  const [newPhoto, setNewPhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // In a real app, you'd upload this file to a server
      setNewPhoto(URL.createObjectURL(file));
    }
  };

  const copyReferralLink = () => {
    const referralLink = `https://yourguesthouse.com/refer/${user.referralCode}`;
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
            {newPhoto ? (
              <img src={newPhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                No Photo
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold">{user.fullName}</h3>
            <p className="text-gray-600">{user.phoneNumber}</p>
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="mb-4"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-2">Referral Program</h3>
        <p className="mb-2">Your referral code: <strong>{user.referralCode}</strong></p>
        <p className="mb-2">Current reward balance: ${user.referralReward}</p>
        <button
          onClick={copyReferralLink}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Copy Referral Link
        </button>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-bold mb-2">Booking History</h3>
        <div className="space-y-2">
          {bookingHistory.map(booking => (
            <div key={booking.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{booking.dates}</p>
                <p className="text-sm text-gray-600">${booking.amount}</p>
              </div>
              <span className={`px-2 py-1 rounded ${
                booking.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
              }`}>
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;