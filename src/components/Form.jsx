import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";

function FormContact(props) {

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
            <Form.Group controlid="formBasicName">
                <Form.Label>{props.tags.form_name}</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlid="formBasicEmail">
            <Form.Label>{props.tags.form_email}</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlid="formBasicPassword">
            <Form.Label>{props.tags.form_message}</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="3"
                    value={subject}
                    onChange={e => setSubject(e.target.value)} />
            </Form.Group>
            <div className="mt-3"></div>
            <ReCAPTCHA
                sitekey="6Ldxyi4bAAAAAOq88jM5zIfu-epnbFiafAjNom5s"
                onChange={onChange}
            />
            <Button variant="button button--primary text-white" type="submit" onClick={e => handleFormSubmit(e)} value="Submit" aria-label="Sumit" className="mt-3">
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

export default FormContact