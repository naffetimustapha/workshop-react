import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import{Carousel,Card,Button}from"react-bootstrap"
function App() {
  return (
    <div className="App">
      <h1>geek zone</h1>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://johnnyalucard.com/wp-content/uploads/2021/09/20-Hellsing-Ultimate-5.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>hellsing ultimate</h3>
          <p>The vampire Alucard, his master Sir Integra Fairbrook Wingates Hellsing, and his newly sired ward Seras Victoria, try to protect England from a war-crazed SS-Major who seeks to start an eternal war with his vampire army..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.animesenpai.net/wp-content/uploads/2022/10/PicsArt_10-02-04.35.34_compress8-1024x577.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>berserk</h3>
          <p>Guts is a skilled swordsman who joins forces with a mercenary group named 'The Band of the Hawk', lead by the charismatic Griffith, and fights with them as they battle their way into the royal court.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/68/6b/e9/686be9aaea21cce0b81eae2738b9d235.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>monster</h3>
          <p>
          A brilliant neurosurgeon finds his life in utter turmoil after getting involved with a psychopathic former patient.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.animesenpai.net/wp-content/uploads/2022/10/PicsArt_10-02-04.35.34_compress8-1024x577.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>berserk</h3>
          <p>Guts is a skilled swordsman who joins forces with a mercenary group named 'The Band of the Hawk', lead by the charismatic Griffith, and fights with them as they battle their way into the royal court.</p>
        </Carousel.Caption>
      </Carousel.Item>








      <section className='cards'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i0.wp.com/www.senpai.com.mx/wp-content/uploads/2021/11/Esto-es-todo-lo-que-se-sabe-del-Multivero-en-el-MCU-compressed-8.jpg?fit=1280%2C720&ssl=1" />
      <Card.Body>
        <Card.Title>one piece</Card.Title>
        <Card.Text>
        Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".
        </Card.Text>
        <Button variant="primary">watch here</Button>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEul5vAkJbnqNcHqGy1aH498u5ZUX_eOWpg&usqp=CAU" />
      <Card.Body>
        <Card.Title>attack on titans</Card.Title>
        <Card.Text>
        After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.
        </Card.Text>
        <Button variant="primary">watch here</Button>
      </Card.Body>
    </Card>




    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>bleach</Card.Title>
        <Card.Text>
        High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from "Hollows".
        </Card.Text>
        <Button variant="primary">watch here</Button>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Awhig4mV7vPLMdo3NEgA20gUkcYzMHbIFA&usqp=CAU" />
      <Card.Body>
        <Card.Title>naruto shippuden</Card.Title>
        <Card.Text>
        Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.
        </Card.Text>
        <Button variant="primary">watch here</Button>
      </Card.Body>
    </Card>




    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://nefariousreviews.files.wordpress.com/2018/01/rainbow-featured.jpg" />
      <Card.Body>
        <Card.Title>rainbow</Card.Title>
        <Card.Text>
          Set in 1955, the anime follows the story of seven teenagers locked in a reformatory, waiting for a ray of light in a daily hell of suffering and humiliation, focusing especially on how they faced the life once regained freedom.
        </Card.Text>
        <Button variant="primary">watch here</Button>
      </Card.Body>
    </Card>







    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.hitekno.com/thumbs/2021/12/17/87841-black-clover/350x230-img-87841-black-clover.jpg" />
      <Card.Body>
        <Card.Title>black clover</Card.Title>
        <Card.Text>
        Asta and Yuno were abandoned together at the same church and have been inseparable since. As children, they promised that they would compete against each other to see who would become the next Emperor Magus.
        </Card.Text>
        <Button variant="primary">watch here</Button>
      </Card.Body>
    </Card>
      </section>
    
    </div>
  );
}

export default App;
