// const url = 'http://the-server.ie'

let getReadings = (nodeId, opts) => {

//   { start, end, cnt } = opts;
//   { data } = await axios.get(url, { start, end, count: cnt });
//   return JSON.parse(data); // [ { t: 20.4, h: 0.87, date: 23875983759834 } ]  
  if (nodeId === '1'){
    return(
        [
          { date: '12/10', t: 30.4, h: 35.3 },
          { date: '13/10', t: 40.8, h: 35.3 },
          { date: '14/10', t: 35.3, h: 33.2 },
          { date: '15/10', t: 25.2, h: 38.6 },
          { date: '16/10', t: 49.3, h: 31.5 },
          { date: '17/10', t: 61.1, h: 38.2 },
          { date: '18/10', t: 37.6, h: 31.1 },
          { date: '19/10', t: 39.3, h: 33.7 },
          { date: '20/10', t: 41.3, h: 32.9 },
        ]
    )
  } else if (nodeId === '2'){
    return(
      [
        { date: '12/10', t: 26.4, h: 25.3 },
        { date: '13/10', t: 33.8, h: 32.3 },
        { date: '14/10', t: 25.3, h: 23.2 },
        { date: '15/10', t: 13.2, h: 28.6 },
        { date: '16/10', t: 22.3, h: 21.5 },
        { date: '17/10', t: 19.1, h: 22.2 },
        { date: '18/10', t: 30.6, h: 31.1 },
        { date: '19/10', t: 29.3, h: 33.7 },
        { date: '20/10', t: 31.3, h: 23.9 },
      ]
    )
  } else {
    return(
      { date: '12/10', t: 26.4, h: 25.3 }
    )
  }
}

export {
  getReadings
}