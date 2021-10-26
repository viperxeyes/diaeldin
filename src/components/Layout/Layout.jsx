import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import SideBanners from "../SideBanners/SideBanners";

export default function Layout() {
  const [scrollValue, SetScrollValue] = useState(0);
  const [oldScrollValue, setOldScrollValue] = useState(0);
  const scrolling = (e) => {
    SetScrollValue((prevState) => {
      setOldScrollValue(prevState);
      return Math.round(e.target.scrollTop);
    });
  };
  return (
    <div
      id="ScrollableContainer"
      className="absolute bg-gray-900 overflow-hidden    w-full h-full pt-20 z-0 scrollbar-thumb-gray-600 scrollbar-track-gray-850 scrollbar-thin   scrollbar-thumb-rounded-md scrollbar-track-rounded-md  "
      onScroll={(e) => {
        scrolling(e);
      }}
    >
      <Header scrollValue={scrollValue} oldScrollValue={oldScrollValue} />
      <SideBanners />
      <main className="  ">
        <section className=" ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          dolores quam magnam delectus eos dicta quia debitis recusandae quas.
          Corporis sapiente eos eligendi quae modi quaerat maxime doloremque
          dolores praesentium officiis inventore, autem atque rerum recusandae
          ipsam voluptatem deserunt quo dolore fugit nemo ducimus. Ipsum vitae
          veritatis ut quo nemo assumenda officiis voluptatibus doloremque
          aliquam sed adipisci placeat doloribus explicabo est error minima
          sapiente, ullam ipsa optio. Temporibus iste suscipit veritatis
          deleniti amet? Perferendis distinctio eveniet dolore tenetur pariatur
          suscipit ipsam quasi! Reprehenderit asperiores eos quibusdam
          consectetur sunt perspiciatis, totam quam tempore sint nobis id eius
          sed eligendi ratione voluptates est vitae saepe velit pariatur.
          Officia quasi velit animi cupiditate illum unde numquam eos dolorum
          saepe fugiat, quia officiis porro mollitia repellendus laboriosam sint
          architecto. Illum ab perspiciatis dolorem consequatur hic vel
          consectetur, quod explicabo animi esse? Non magni odio expedita
          voluptatem temporibus ratione quaerat aut delectus, tempora minus
          nobis consequatur sint enim? Nobis consequuntur molestiae magnam culpa
          dicta, soluta et iste nihil laudantium odio praesentium libero illum
          rerum temporibus sequi distinctio deserunt fuga accusantium ducimus
          incidunt suscipit voluptates. Quaerat blanditiis at laborum maxime.
          Et, hic quae asperiores quibusdam suscipit reiciendis in. Officia
          eveniet debitis accusamus quam recusandae reiciendis inventore
          tempore, ducimus nihil. Odit dolore provident commodi quibusdam
          doloremque inventore itaque quisquam repudiandae distinctio pariatur?
          Soluta atque odio repellendus rem dignissimos sunt ab incidunt minus
          adipisci aut sequi deleniti voluptas dolores obcaecati, reiciendis
          rerum! Vel est dolor obcaecati labore alias provident accusamus aut,
          quos facilis aperiam similique dicta quasi dolore dolorem ut in at eos
          cum! Vel veritatis voluptatibus hic labore reprehenderit atque cumque
          tempore officia animi aliquid aspernatur facere sed repellat
          consequatur totam porro perspiciatis earum, quisquam ipsum dolores
          est! Labore, velit alias nostrum, molestiae ea repellendus voluptatum
          iusto repudiandae sit facere natus a inventore iure, asperiores minus
          id ut eos. Possimus explicabo nihil veniam dolorum sint, consequatur
          enim vel quidem delectus ipsa animi! Esse velit similique deserunt
          sunt atque sit mollitia, at ab error aperiam eum, voluptas aliquam
          culpa saepe? Saepe quia neque quae eligendi similique odio adipisci
          officiis aliquid quos nesciunt sequi recusandae sit, ullam omnis
          repudiandae veritatis voluptates inventore doloremque ratione
          voluptatem magni facere iste minus praesentium! Commodi optio, nemo
          nisi voluptate quam doloribus tempore laborum, ut labore excepturi
          natus modi, quidem dolores vitae porro cumque! Pariatur quo quis
          officia deleniti totam ipsum numquam ratione iusto adipisci. Accusamus
          perspiciatis, ipsam expedita minima voluptatibus cum veniam quam in
          doloribus veritatis sit quas voluptatem doloremque autem sed, culpa
          itaque mollitia et architecto, earum quaerat odit minus? Illum,
          laudantium voluptatum velit iusto alias voluptates non maiores.
          Cupiditate ipsam quaerat voluptas. Necessitatibus saepe error
          asperiores non exercitationem. Rem laboriosam quisquam id. Laboriosam
          aut dolore eius in expedita corrupti beatae eligendi excepturi. Odit
          necessitatibus reprehenderit quam nostrum dicta nobis aperiam
          inventore quibusdam. Unde sint enim eligendi fuga expedita illo
          consectetur esse quidem voluptatum sequi nostrum quasi cumque
          accusamus provident dolore iusto facilis, corrupti nesciunt minus.
          Quod, veritatis rem! Quisquam sed ullam aliquam similique quas
          aspernatur doloribus, unde reprehenderit ut rem obcaecati!
        </section>
      </main>

      <Footer />
    </div>
  );
}
