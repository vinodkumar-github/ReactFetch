import React, { useState, useEffect } from "react";

function Content({ current }) {
  const [data, setData] = useState([]);
  const MURL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    async function fetchData() {
      const AURL = `${MURL}/${current}`;
      try {
        const response = await fetch(AURL);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const dataResponse = await response.json();
        setData(dataResponse);
      } catch (error) {
        console.error('Fetch error or processing error:', error);
      }
    }
    fetchData();
  }, [current]);

  return (
    <div className='Content'>
      <br /><br />
      <table>
        <tbody>
          {data.map((dat, index) => (
            <tr key={index}>
              {Object.keys(dat).map((key) => (
                <td key={key}>{dat[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
