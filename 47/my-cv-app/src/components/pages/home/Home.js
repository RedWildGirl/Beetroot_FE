import photo from '../../../images/photo.jpg';
import Header from '../../Header';

const Home = () => {
    return (
        <>
            <div className='main-info'>
                <h1>Єфремова Ганна Сергіївна</h1>
                <img src={photo} alt="фото"/>
            </div>
            
            <main>
                <h1>Будь ласка, перейдіть за посиланнями нижче,
                     щоб дінзнатись основну інформацію про мене:</h1>
            </main>

            <Header />
        </>
        
    )
}

export default Home;
