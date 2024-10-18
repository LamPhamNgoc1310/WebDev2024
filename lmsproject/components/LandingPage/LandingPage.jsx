import "./LandingPage.css";
import stats from "/images/landing_page/stat.png";
import calendar from "/images/landing_page/calendar.png";
import mail from "/images/landing_page/email.png";
import online from "/images/landing_page/Ellipse 4.png";
import invoice from "/images/landing_page/file-invoice.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/course-categories");
  };

  return (
    <>
      <div className="first-page">
        <div className="first-page-container">
          <h1>
            <span>Studying</span> Online is now much easier
          </h1>

          <div className="first-page-container-description">
            <p>
              TOTC is an interesting platform that will teach <br />
              you in more an interactive way
            </p>
          </div>

          <div className="first-page-button-tray">
            <button className="join-button" onClick={handleRedirect}>Join for free</button>
            <div className="work-button">
              <button></button>
              <p>Watch how it works</p>
            </div>
          </div>
        </div>

        <img src={stats} className="stat-icon" />

        <div id="card1">
          <img src={calendar} className="card-icon" />
          <div className="card-text-box">
            <h1>250k</h1>
            <p>Assited Student</p>
          </div>
        </div>

        <div id="card2">
          <img src={mail} className="card-icon" />
          <div className="card-text-box">
            <h1>Congratulations</h1>
            <p>Your admission completed</p>
          </div>
        </div>

        <div id="card3">
          <div className="card3-container">
            <div className="card-icon" id="avatar">
              <img src={online} />
            </div>
            <div className="card-text-box">
              <h1>User Experience class</h1>
              <p>Today at 12:00 PM</p>
            </div>
          </div>

          <button onClick={handleRedirect}>Join Now</button>
        </div>
      </div>

      <div className="second-page">
        <div className="first-container">
          <h1>Our Success</h1>
          <p>
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec <br /> nam et pharetra gravida. Adipiscing a
            quis ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>

        <div className="first-stat-container">
          <div>
            <h1>15K+</h1>
            <p>Students</p>
          </div>
          <div>
            <h1>75%</h1>
            <p>Total success</p>
          </div>
          <div>
            <h1>35</h1>
            <p>Main questions</p>
          </div>
          <div>
            <h1>26</h1>
            <p>Chief experts</p>
          </div>
          <div>
            <h1>16</h1>
            <p>Years of experience</p>
          </div>
        </div>

        <div className="second-container">
          <h1>
            <span id="span1">User-Friendly Simple</span>{" "}
            <span id="span2">Website.</span>
          </h1>

          <p>
            TOTC is a fantastic online website that can provide you with <br />{" "}
            all the courses needed for your careers or interests.
          </p>

          <div className="second-stat-container">
            <div className="second-stat-container-card card1-2">
              <div className="card-2-icon">
                <img src={invoice} />
              </div>
              <h2>Online Billing, Invoicing, & Contracts</h2>
              <p>
                Simple and secure control of your account’s financial and legal
                transactions. Send customized invoices and contracts
              </p>
            </div>
            
            <div className="second-stat-container-card card2-2">
              <div className="card-2-icon">
                <img src={calendar} />
              </div>
              <h2>Course Progression Tracking</h2>
              <p>
                Keep detailed records and histories of your courses. Update with
                your current progresses
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
