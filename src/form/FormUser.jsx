import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const RegisterForm = {
  fullName: "",
  gender: "",
  bio: "",
  status: "",
  password: "",
  email: "",
  confirmPass: "",
};

const FormUser = ({ dataList, setDataList }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm(RegisterForm);
  const [check, setCheck] = useState(false);

  const handleCheck = () => setCheck(!check);

  const onSubmit = (data) => {
    if (data) {
      const existEmail = dataList?.find((item) => item.email === data.email);
      if (existEmail) {
        return alert("Email da ton tai");
      }
      alert("Them thanh cong");
      setDataList([...dataList, data]);
      reset({
        fullName: "",
        bio: "",
        password: "",
        email: "",
        confirmPass: "",
      });
    }
  };

  return (
    <div
      style={{
        marginTop: "30px",
      }}
    >
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="8">
            <Form.Control
              {...register("fullName", {
                required: {
                  value: true,
                  message: "Please enter a FullName",
                },
              })}
              type="text"
              placeholder="Name"
              isInvalid={errors && errors.fullName && errors.fullName.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName && <div>{errors.fullName.message}</div>}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Row>
          <Col sm="2">
            <div>Gender</div>
          </Col>
          <Col sm="8">
            <Form.Check
              {...register("gender")}
              defaultChecked="male"
              label="Male"
              value="male"
              inline
              type="radio"
              aria-label="radio 1"
            />
            <Form.Check
              {...register("gender")}
              id="femail"
              label="Female"
              value="female"
              inline
              type="radio"
              aria-label="radio 2"
            />
          </Col>
        </Row>

        <Form.Group as={Row} className="mb-3" controlId="formBio">
          <Form.Label column sm="2">
            Bio
          </Form.Label>
          <Col sm="8">
            <Form.Control
              {...register("bio", {
                required: {
                  value: true,
                  message: "Please enter a Bio",
                },
                maxLength: {
                  value: 100,
                  message: "Required to enter less than 100 characters",
                },
              })}
              name="bio"
              as="textarea"
              placeholder="Bio"
              isInvalid={errors && errors.bio && errors.bio.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.bio && <div>{errors.bio.message}</div>}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="8">
            <Form.Control
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter email",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
              isInvalid={errors && errors.email && errors.email.message}
              type="email"
              placeholder="Email@gmail.com"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email && <div>{errors.email.message}</div>}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formStatus">
          <Form.Label column sm="2">
            Status
          </Form.Label>
          <Col sm="8">
            <Form.Select
              {...register("status")}
              aria-label="Default select example"
            >
              <option value="pending">Pending</option>
              <option value="complete">Complete</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              placeholder="*******"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter password",
                },
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              isInvalid={errors && errors.password && errors.password.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password && <div>{errors.password.message}</div>}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formConfirmPassword">
          <Form.Label column sm="2">
            Confirm Password
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPass", {
                required: "Please confirm your password",
                validate: (value) =>
                  !value ||
                  value === watch("password") ||
                  "Passwords do not match",
              })}
              isInvalid={
                errors && errors.confirmPass && errors.confirmPass.message
              }
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPass && <div>{errors.confirmPass.message}</div>}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Row>
          <Col sm={{ span: 8, offset: 2 }}>
            <Form.Check
              checked={check}
              inline
              label="Term & Conditional"
              type="checkbox"
              onChange={handleCheck}
            />
          </Col>
        </Row>
      </Form>
      <Row>
        <Col sm={{ span: 2, offset: 9 }}>
          <Button
            variant="primary"
            onClick={handleSubmit(onSubmit)}
            disabled={!check}
          >
            Register
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FormUser;
