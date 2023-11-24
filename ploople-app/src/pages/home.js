
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-sm-10 col-md-6 col-lg-6 home-card">
                <h2> Planning with friends made easier</h2>
                <p> Get started now, create your first event and invite your buddies</p>
            <button className="btn btn-success cta-create" onClick={() => navigate('create-event-step1')}>
              Create an event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
