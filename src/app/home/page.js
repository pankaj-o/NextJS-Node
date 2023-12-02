"use client"
import React, { useEffect, useState } from 'react';
import Content from '../components/Content/page';
const data1 = 
[{
  name: "new",
  data: [
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
  ]
},
{
  name: "Liked",
  "data": [
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
  ]
},
{
  name: "recent",
  "data": [
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
    {
      title: "sartaj",
      descrption: "He is not just a singer..he is pure soul who have capability   to connect ur soul to God through his song..truth and deep meaning of words, peace, mindfulness texture of voice, uncrowned king of tone and rythmm.. completely justified ur name satinder sartaj ",
      link: "https://www.youtube.com/watch?v=ZXpzbc07kfY"
    },
  ]
}
]
const Page = () => {

  const [data, setData] = useState(data1);
  return (
    <div className='bg-sky-950 w-full h-screen flex'>
      <div className='left w-1/5'></div>

      <div className='centre bg-cyan-900 w-3/5 overflow-scroll '>

        {data.map((item, index) => (
          <div className='p-10'>

            <h1 className='p-1'> {item.name}</h1>
            <div className='flex overflow-scroll '>
              {item.data.map((res, index) => (

                <div className='p-1 m-1'>
                  <Content key={index} res={res} />
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      <div className='right w-1/5'></div>
    </div>
  );
};

export default Page;
