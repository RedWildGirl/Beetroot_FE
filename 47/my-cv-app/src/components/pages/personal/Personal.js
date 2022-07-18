import photo from '../../../images/photo.jpg';
import Header from '../../Header';

const Personal = () => {
    return (
        <>
            <div className='main-info'>
                <h1>Єфремова Ганна Сергіївна</h1>
                <img src={photo} alt="фото"/>
            </div>

            <Header />

            <div className='container'>

                <div className='card'>
                    <h2>Персональна інформація&#42889;</h2>
                    <ul className='personal-info-list'>
                        <li><strong>Дата народження&#42889; </strong> 7 грудня 1988 року</li>
                        <li><strong>Телефон&#42889; </strong><a href="tel:+380999999999">099-999-99-99</a></li>
                        <li><strong>E-mail&#42889; </strong><a href="mailto:mail@mail.com">mail@mail.com</a></li>
                        <li><strong>Facebook&#42889; </strong> <a href="http://www.facebook.com/efremova.hanna/" target="_blank" rel="noreferrer">Efremova Hanna</a></li>
                        <li><strong>LinkedIn&#42889; </strong> <a href="https://www.linkedin.com/in/anna-yefremova/" target="_blank" rel="noreferrer">Anna Yefremova</a></li>
                    </ul>
                </div>

                <div className='card'>
                    <h2>Освіта&#42889;</h2>
                    <table>
                        <tr>
                        <td>Вересень 2006 &#8211; Червень 2010 </td>
                        <td>Київський Міжнародний Університет
                            <br/>
                            <em>Перекладач англійської та арабської мов</em>
                        </td>
                        </tr>
                        <tr>
                        <td>Вересень 2010 &#8211; Червень 2012 </td>
                        <td>Київський Національний Університет ім. Т.Г. Шевченко
                            <br/>
                            <em>Арабська та англійська мови й література, переклад</em>
                        </td>
                    </tr>
                    </table>
                </div>

            </div>
        </>
        
    )
}

export default Personal;
