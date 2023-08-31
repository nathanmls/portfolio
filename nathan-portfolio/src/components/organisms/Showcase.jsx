import React, { useRef } from 'react'; 

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Flex } from '@chakra-ui/react';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


function Image({imgname, title, text, altimg}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <Flex align={"center"} justify="center" ref={ref}>
        <img src={`/port-imgs/showcase/${imgname}.png`} alt={`${altimg}`} />
      </Flex>
      <motion.div style={{ y }}>
        <Flex h={"100%"} justifyContent={"center"} direction={"column"}>
        <h3>{title}</h3>
        <p>{text}</p>
        </Flex>
      </motion.div>
    </section>
  );
}

export default function Showcase() {

  return (
    <>
      {[
        {imgname: 1, altimg: 'Imoview CRM', title: 'Imoview CRM', text: `Imoview CRM is a customer relationship management system designed for real estate professionals that allows them to connect with their clients in a simple, fast, and digital way.

        My contribution to the project focused on user experience and interface design, ensuring that Imoview CRM is not only functional but also user-friendly and easy to navigate.`},
        {imgname: 2, altimg: 'Imoview CRM', title: 'Wippe Track', text: `Wippe Track is a health app developed for remote patient monitoring. It helps users control their health from a wide range of data sources, connected to devices integrated into the solution or also entered manually.

        As an interface designer and web developer, my contribution to the Wippe Track project focused on creating a user-friendly interface and developing the interface of the app and website. I worked to ensure that the app is not only functional but also easy to navigate, allowing users to monitor their health in a simple and intuitive way.
        `},
        {imgname: 3, altimg: 'Imoview CRM', title: 'Mateus App', text: `Mateus Mais is a shopping app developed by Grupo Mateus S/A that offers exclusive promotions from the Mateus Supermercados, Mix Atacarejo, and Camiño chains, as well as news from the brands Bumba Meu Pão and Spazio. With the Mateus Mais app, users can make purchases online and opt for easy delivery of thousands of products from their stores or pick up at the store.

        As a UX/UI Designer, my contribution to the Mateus Mais project focused on creating an intuitive and visually appealing interface for the app. I worked to ensure that the app is not only functional but also easy to navigate, allowing users to easily browse and buy products from various categories such as grocery, cold cuts, meats, vegetables, drinks, hygiene and beauty products, stationery, bazaar, automotive products, products for their pet, bakery, specialties and much more.
        `},
        {imgname: 4, altimg: 'Imoview CRM', title: 'Landing Pages for US Providers', text: `As a UX Designer and Front End Developer, my contribution to the Eleven Rush project focused on creating landing pages and email marketing campaigns for telecommunications providers as Frontier, AT&T and CenturyLink.

        I worked to design user-friendly and visually appealing landing pages that effectively communicated the benefits of the telecommunications providers' services. I also developed email marketing campaigns that were targeted and engaging, helping to drive conversions and increase customer loyalty.
        `},
      ].map((obj) => (
        <Image 
          imgname={obj.imgname}
          title={obj.title} 
          text={obj.text}
          altimg={obj.altimg}
        />
      ))}
    </>
  );
}