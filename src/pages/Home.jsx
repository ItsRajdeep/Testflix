import React from 'react';
import request from '../Request';
import Main from '../Components/Main';
import Row from '../Components/Row';
const Home = () => {

  return (
    <>
        <Main />
        <Row rowID="1" title='Up coming' fetchURL={request.requestUpcoming} />
        <Row rowID="2" title='Trending' fetchURL={request.requestPopular} />
        <Row rowID="3" title='Popular' fetchURL={request.requestUpcoming} />
        <Row rowID="4" title='Top Rated' fetchURL={request. requestTopRated} />
        {/* const axios = require('axios'); */}

    </>
  )
}

export default Home;