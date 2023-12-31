import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../../stores';
import { useCookies } from 'react-cookie';
import Navigation from '../../Authentication/Navigation';

import axios from 'axios';
import Service from './service';
// import Footer from '../../../components/footer';

export default function MainLayout() {

  const [boardResponse, setBoardResponse] = useState<string>('');
  const [cookies] = useCookies();
  const { user } = useUserStore();

  const getBoard = async (token: string) => {
    const requsetOption ={
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    // const URL = process.env.PROJECT_API_URL;

    await axios.get('http://localhost:8888/api/board/', requsetOption).then((response) => {
    // await axios.get('http://192.168.10.93:8888/api/board/', requsetOption).then((response) => {
        setBoardResponse(response.data);
    }).catch((error) => '');    
  }

  useEffect(() => {
    const token = cookies.token;
    if (token) getBoard(token);
    else setBoardResponse('');
  }, [cookies.token]);

  return (
    <>
      <Navigation />
      <Service />
      {/* <Footer /> */}
      {/* {boardResponse ? (<BoardMain />) : (<Authentication />)} */}
    </>
  )
}
