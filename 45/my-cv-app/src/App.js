import photo from './images/photo.jpg';
import './App.css';

function App() {
  return (
    <div className="cv">

      <div className='main-info'>
        <h1>Єфремова Ганна Сергіївна</h1>
        <img src={photo} alt="фото"/>
      </div>
      
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
      
      <div className='container'>

        <h2>Досвід&#42889;</h2>

        <div className='work-experience-info'>

        <div className='card'>
          <h3>USAID Economic Resilience Activity</h3>
          <p><strong>HR-менеджер</strong>
          <br/>
          <em>Червень 2022 &#8211; Теперешній час</em>
          </p>
          <ul className='card-list'>
              <li>Найм незалежних консультантів до проєкту, 
                ведення документації за вимогами організації;</li>
              <li>Робота із документацією у внітрішніх 
                системах компанії TAMIS, HOPP, ORACLE</li>
              <li>Переклад документів, пов&#39;язаних із програмою 
              &#40;англійська/українська&#41;;</li>
          </ul>
        </div>

        <div className='card'>
          <h3>USAID Economic Resilience Activity</h3>
          <p><strong>Асистент міжнародної програми</strong>
          <br/>
          <em>Жовтень 2021 &#8211; Червень 2022</em>
          </p>
          <ul className='card-list'>
              <li>Забезпечення програмної, фінансової, адміністративної та 
                  логістичної підтримки для успішної реалізації програми;</li>
              <li>Складання документів, звітів та історій успіху, 
                  пов&#39;язаних із програмою;</li>
              <li>Переклад документів, пов&#39;язаних із програмою 
              &#40;англійська/українська&#41;;</li>
              <li>Поїздки до регіонів для підтримки програмних заходів.</li>
          </ul>
        </div>

        <div className='card'>
          <h3>MAINSTREAM Ltd</h3>
          <p><strong>Перекладач англійської мови</strong>
          <br/>
          <em>Вересень 2018 &#8211; Жовтень 2021</em>
          </p>
          <ul className='card-list'>
              <li>Письмові переклади в рамках трьох мов &#40;англійська, російська, українська&#41;.
                  Тематики&#42889; PR, маркетинг, юридичні документи;</li>
              <li>Переклад/локалізація рекламних релізів/новин 
              &#40;різна тематика, від нафтогазової сфери до авіаційного сектора&#41;;</li>
              <li>Вичитування/редагування вже готових текстів &#40;всі три мови&#41;
                  за запитом співробітників;</li>
              <li>Усний послідовний перекл9ад на зустрічах.</li>
          </ul>
        </div>

        <div className='card'>
          <h3>ТОВ &#171;РУСТ Україна&#187;</h3>
          <p><strong>Персональний асистент генерального директора</strong>
          <br/>
          <em>Листопад 2013 &#8211; Грудень 2016</em>
          </p>
          <ul className='card-list'>
              <li>Підготовка МоМ англійською мовою, перевірка виконання завдань, 
                  визначених у МоМ;</li>
              <li>Переклад ділового листування, 
                  мовна підтримка нових співробітників;</li>
              <li>Візова підтримка співробітників, організація міжнародних 
                  ділових поїздок, бронювання квитків і готелів.</li>
          </ul>
        </div>

        </div>

      </div>
      
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

    </div>
  );
}

export default App;
