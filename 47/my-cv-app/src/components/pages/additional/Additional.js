import photo from '../../../images/photo.jpg';
import Header from '../../Header';

const Additional = () => {
    return (
        <>

            <div className='main-info'>
                <h1>Єфремова Ганна Сергіївна</h1>
                <img src={photo} alt="фото"/>
            </div>

            <Header />

            <div className='container'>

                <div className='card'>
                    <h2>Додаткова інформація&#42889;</h2>
                    <p>Впевнений користувач MS Office, Google Docs, Mac package. Базові знання мов HTML, CSS, JavaScript.</p>
                </div>

                <div className='card'>
                    <h2>Особисті якості&#42889;</h2>
                    <p>Неконфліктна, відповідальна, швидко навчаюся новому, пунктуальна.</p>
                </div>

            </div>

        </>
    )
}

export default Additional;
