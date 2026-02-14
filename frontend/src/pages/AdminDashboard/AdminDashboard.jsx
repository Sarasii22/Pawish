
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Routes, Route } from 'react-router-dom';
import './AdminDashboard.css';
import axios from 'axios';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="navbar-brand">PAWISH Admin</div>
      <div className="navbar-links">
        <Link to="/admin/pets" className="nav-link">Manage Pets</Link>
        <Link to="/admin/users" className="nav-link">Manage Users</Link>
        <Link to="/admin/applications" className="nav-link">Adoption Applications</Link>
        <Link to="/admin/alerts" className="nav-link">Pet Alerts</Link>
        <Link to="/admin/donations" className="nav-link">Donations</Link>
        <Link to="/" className="nav-link">Back to Site</Link>
      </div>
    </nav>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [users, setUsers] = useState([]);
  const [applications, setApplications] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.role !== 'admin') {
        navigate('/login');
        return;
      }
    } catch (err) {
      navigate('/login');
      return;
    }

    axios.get('http://localhost:5000/api/pets', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setPets(res.data)).catch(err => console.error('Error fetching pets:', err));

    axios.get('http://localhost:5000/api/users', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setUsers(res.data)).catch(err => console.error('Error fetching users:', err));

    axios.get('http://localhost:5000/api/adoptions', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setApplications(res.data)).catch(err => console.error('Error fetching applications:', err));

    axios.get('http://localhost:5000/api/alerts/pending', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setAlerts(res.data)).catch(err => console.error('Error fetching alerts:', err));

    axios.get('http://localhost:5000/api/donations', {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setDonations(res.data)).catch(err => console.error('Error fetching donations:', err));
  }, [navigate]);

  const handleDeletePet = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/pets/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setPets(pets.filter(pet => pet._id !== id));
    } catch (err) {
      alert(err.response?.data?.error || 'Error deleting pet');
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      alert(err.response?.data?.error || 'Error deleting user');
    }
  };

  const handleUpdateApplication = async (id, status) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/adoptions/${id}`, { status }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setApplications(applications.map(app => app._id === id ? res.data : app));
    } catch (err) {
      alert(err.response?.data?.error || 'Error updating application');
    }
  };

  const handleDeleteApplication = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/adoptions/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setApplications(applications.filter(app => app._id !== id));
    } catch (err) {
      alert(err.response?.data?.error || 'Error deleting application');
    }
  };

  const handleUpdateAlert = async (id, action) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/alerts/${id}/${action}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setAlerts(alerts.filter(alert => alert._id !== id)); // Remove from pending list
      alert(res.data.message);
      if (action === 'approve') {
        // Optionally refresh pets to reflect new pet immediately
        const petRes = await axios.get('http://localhost:5000/api/pets', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setPets(petRes.data);
      }
    } catch (err) {
      alert(err.response?.data?.error || `Error ${action}ing alert`);
    }
  };

  const handleDeleteAlert = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/alerts/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setAlerts(alerts.filter(alert => alert._id !== id));
    } catch (err) {
      alert(err.response?.data?.error || 'Error deleting alert');
    }
  };

  const handleDeleteDonation = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/donations/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setDonations(donations.filter(donation => donation._id !== id));
    } catch (err) {
      alert(err.response?.data?.error || 'Error deleting donation');
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}>Log Out</button>

        <Routes>
          <Route
            path="/pets"
            element={
              <section className="admin-section">
                <h2>Manage Pets</h2>
                <div className="admin-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Breed</th>
                        <th>Age</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pets.map(pet => (
                        <tr key={pet._id}>
                          <td>{pet.name}</td>
                          <td>{pet.species}</td>
                          <td>{pet.breed}</td>
                          <td>{pet.age}</td>
                          <td>
                            {/* <button className="button1" onClick={() => navigate(`/admin/pets/edit/${pet._id}`)}>Edit</button> */}
                            <button className="button2" onClick={() => handleDeletePet(pet._id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            }
          />
          <Route
            path="/users"
            element={
              <section className="admin-section">
                <h2>Manage Users</h2>
                <div className="admin-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map(user => (
                        <tr key={user._id}>
                          <td>{`${user.firstName} ${user.lastName}`}</td>
                          <td>{user.email}</td>
                          <td>{user.country}</td>
                          <td>
                            {/* <button className="button1" onClick={() => navigate(`/admin/users/edit/${user._id}`)}>Edit</button> */}
                            <button className="button2" onClick={() => handleDeleteUser(user._id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            }
          />
          <Route
            path="/applications"
            element={
              <section className="admin-section">
                <h2>Adoption Applications</h2>
                <div className="admin-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Pet Name</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.map(app => (
                        <tr key={app._id}>
                          <td>{app.petId ? app.petId.name : 'N/A'}</td>
                          <td>{app.userId ? `${app.userId.firstName} ${app.userId.lastName}` : 'N/A'}</td>
                          <td>{app.email}</td>
                          <td>{app.status}</td>
                          <td>
                            <button className="button1" onClick={() => handleUpdateApplication(app._id, 'approved')}>Approve</button>
                            <button className="button2" onClick={() => handleUpdateApplication(app._id, 'rejected')}>Reject</button>
                            <button className="button3" onClick={() => handleDeleteApplication(app._id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            }
          />
          <Route
            path="/alerts"
            element={
              <section className="admin-section">
                <h2>Pet Alerts</h2>
                <div className="admin-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Pet Name</th>
                        <th>Species</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alerts.length > 0 ? alerts.map(alert => (
                        <tr key={alert._id}>
                          <td>{alert.petName}</td>
                          <td>{alert.species}</td>
                          <td>{alert.userId ? `${alert.userId.firstName} ${alert.userId.lastName}` : 'N/A'}</td>
                          <td>{alert.status}</td>
                          <td>
                            <button className="button1" onClick={() => handleUpdateAlert(alert._id, 'approve')}>Approve</button>
                            <button className="button2" onClick={() => handleUpdateAlert(alert._id, 'reject')}>Reject</button>
                            <button className="button3" onClick={() => handleDeleteAlert(alert._id)}>Delete</button>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan="5">No pending alerts</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </section>
            }
          />
          <Route
            path="/donations"
            element={
              <section className="admin-section">
                <h2>Donations</h2>
                <div className="admin-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.map(donation => (
                        <tr key={donation._id}>
                          <td>{donation.fullName || (donation.userId ? `${donation.userId.firstName} ${donation.userId.lastName}` : 'N/A')}</td>
                          <td>{donation.email}</td>
                          <td>{donation.amount}</td>
                          <td>
                            <button className="button1" onClick={() => handleDeleteDonation(donation._id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
