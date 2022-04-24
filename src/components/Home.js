import React,{ useState} from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Form, Button } from "react-bootstrap";

const Home = () => {
  const [title, setTitle] = useState("")
  const { logOut, user  } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleNext = async (e) => {
      e.preventDefault()
      const newCount = {
          title,
      };
      console.log(newCount)
      if ( title === "Rayburn") {
        navigate("/Rayburn");
        } else if( title === "Counttoten") {
        navigate("/Counttoten"); 
        } else if( title === "Sadovsky") {
        navigate("/Sadovsky");
        } else {};

   
  };

  const handleRecord = async (e) => {
    e.preventDefault()
    navigate("/Record");
  }

  return (
    <>
      <div className="p-4 box mt-3 text-center">
        <h4>ยินดีต้อนรับสู่ Count for Kids</h4> <br />
        <h5>คุณ {user && user.email}</h5> <br /><br />
        <div className="mb-3">กรุณาเลือกวิธีการนับลูกดิ้นด้วยค่ะ</div>
        <Form onSubmit={handleNext}>
            <Form.Group className="mb-3" controlId="formCountTitle">
              <select className="custom-select" onChange={(e) => {
                  const selectTitle = e.target.value;
                  setTitle(selectTitle);
              }}>
                  <option value="null">โปรดเลือก</option>
                  <option value="Rayburn">Rayburn</option>
                  <option value="Counttoten">Count to Ten</option>
                  <option value="Sadovsky">Sadovsky Technique</option>
              </select>
            </Form.Group>
            <div className="d-grid gap-2 mb-3">
            <Button variant="primary" onClick={handleNext}>
            Next
            </Button>
            </div>
        </Form>
      </div>

      <div className="d-grid gap-2 mb-3">
            <Button variant="primary" onClick={handleRecord}>
              ประวัติการบันทึกข้อมูลการนับ
            </Button>
      </div>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;