import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import Header from "../components/Header";

const cachedUsers = []; // This will store the fetched users

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchAllUsers = async () => {
    // Check if users are already cached
    if (cachedUsers.length > 0) {
      setUsers(cachedUsers);
      toast.info("Using cached users");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.get("https://geeksenergy-backend.onrender.com/api/user/allUser");

      console.log("Fetched users:", data.formattedUsers);

      // Check if data is in the expected format
      if (data && data.formattedUsers) {
        setUsers(data.formattedUsers);
        cachedUsers.push(...data.formattedUsers); // Cache the fetched users
        console.log("Fetched users:", data.formattedUsers);
        toast.success("Fetched All registered users");
      } else {
        throw new Error("Unexpected data format");
      }
    } catch (err) {
      toast.error("Something went wrong: " + err.message);
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <>
    <Header/>
    <div className='container mx-auto'>
      {loading && <Loader />}
      <h1>Users List</h1>
      {JSON.stringify(users)}
    </div>
    </>
  );
};

export default Home;
