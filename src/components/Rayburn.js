import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import CountDataService from "../services/Countforkid.services";
import { Form,InputGroup, Button, Alert } from "react-bootstrap";

const Rayburn = ({ id, setCountId }) => {
    const { user } = useUserAuth();
    const [ title ]  = useState("Rayburn");
    const [ Email, setEmail ] = useState(user.email);
    const [timestart, setTimestart] = useState("");
    const [timeend, setTimeend] = useState("");
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleBack = async (e) => {
      e.preventDefault()
      navigate("/Home");
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const newCount = {
        Email,
        title,
        timestart,
        timeend,
        counter,
      };
      console.log(newCount);
      if (Email === undefined) {
        setMessage({ error : true, msg: "หมดเวลาเชื่อมต่อ กรุณาเข้าสู่ระบบอีกครั้ง!"});
        navigate("/");
      }else if(timestart === "" || timeend === "" ) {
        setMessage({ error : true, msg: "กรุณากรอกข้อมูลให้ครบถ้วน"});
        return;
      } else {
        await CountDataService.addCounts(newCount);
        setMessage({ error : false, msg: "บันทึกข้อมูลเรียบร้อย"});
      }
      
    };

    

    return (
      <>
        <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <h2>การนับแบบ Rayburn</h2>
        <img src="./Logo.png" width={250} height={250} style={{ alignSelf: 'center' }}/>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Email">
              <InputGroup>
                <InputGroup.Text id="Email">Email</InputGroup.Text>
                <Form.Control
                  value ={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Timestart">
              <InputGroup>
                <InputGroup.Text id="Timestart">เวลาเริ่ม</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="00.00"
                  value={timestart}
                  onChange={(e) => setTimestart(e.target.value)}
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="Timeend">
              <InputGroup>
                <InputGroup.Text id="Timeend">เวลาสิ้นสุด</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="00.00"
                  value={timeend}
                  onChange={(e) => setTimeend(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <div className="container my-5">
              <div className="card text-center my-5">
                <div className="card-body">
                  <h1 className="my-5">{counter}</h1>
                  <div>
                  <img src="./reset.png" width={80} height={80} onClick={() => setCounter(0)} />
                  <img src="./foot.png" width={150} height={150} onClick={() => setCounter(counter+1)} />
                  </div>
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
            
            <div className="d-grid gap-2 mb-3">
              <Button variant="primary" type="Submit">
                บันทึกข้อมูล
              </Button>
            </div>
        </Form>

        <div className="d-grid gap-2 mb-3">
            <Button variant="primary" onClick={handleBack}>
               ย้อนกลับ
            </Button>
        </div>

        </div>
      </>
    );
  };

export default Rayburn;

