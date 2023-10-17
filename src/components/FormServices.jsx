import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";

function FormServices(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [mailSent, setMailsent] = useState(false);
    const [error, setError] = useState(null);
    const [captcha, setCaptcha] = useState("");
    const API_PATH = '/send.php';

    function handleFormSubmit(event) {
        event.preventDefault();
        setError(null)
        // let emailData = emailData.push(name).push(email).push(subject)
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: { fname: `${name}`, email: `${email}`, message: `${subject}`, recaptcha: `${captcha}` }
        })
            .then(result => {
                setMailsent(result.data.sent)
                setError(result.data.error)
                setName('')
                setEmail('')
                setSubject('')
            })
            .catch(error => setError(error.message));
    }
    function onChange(value) {
        setCaptcha(value)
    }

    return (
        <Form>
            <Form.Group  className="mb-3" controlId="formBasicName">
                <Form.Label>{props.tags.form_name}</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formBasicEmail">
                <Form.Label>{props.tags.form_email}</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formBasicPacks">
                <Form.Label>Paquetes</Form.Label>   
                <Form.Select aria-label="Default select example">
                    <option>Escoge tu paquete</option>
                    <option value="1">Básico</option>
                    <option value="2">Pro</option>
                    <option value="3">E-commerce</option>
                </Form.Select>
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formBasicMessage">
                <Form.Label>Cuéntanos sobre tu idea</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        value={subject}
                        onChange={e => setSubject(e.target.value)} />
            </Form.Group>

            <Form.Group  className="mb-3" controlId="formBasicIdeas">
                <Form.Label>Comparte con nosotros alguna links de páginas web de ejemplo</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        value={subject}
                        onChange={e => setSubject(e.target.value)} />
            </Form.Group>

            <ReCAPTCHA
                sitekey="6Ldxyi4bAAAAAOq88jM5zIfu-epnbFiafAjNom5s"
                onChange={onChange}
            />
            <Button variant="btn btn--primary text-white" type="submit" onClick={e => handleFormSubmit(e)} value="Submit" aria-label="Sumit" className="mt-3">
                {props.tags.form_send}
            </Button>
            <div>
                {mailSent ?
                    <Alert className="mt-2" variant="success">
                        {props.tags.form_success}
                    </Alert> :
                    ''
                }
                {error !== null && error !== undefined ?
                    <Alert className="mt-2" variant="danger">
                        {error}
                    </Alert> :
                    ''
                }
            </div>
        </Form>
    )
}

export default FormServices