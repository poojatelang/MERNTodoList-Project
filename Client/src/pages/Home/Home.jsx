import React from 'react'
import axios from "axios";
import classes from "./styles.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {GlobalContext} from "../../Context/index"

const Home = () => {
  const { blogList, setBlogList, pending, setPending } =
  useContext(GlobalContext);
const navigate = useNavigate();
  return (
    <div>Home</div>
  )
}

export default Home