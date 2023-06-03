import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    phone: '',
    address: '',
  });

  const [errorMessages, setErrorMessages] = useState({
    nameMessage: '잘못된 이름입니다',
    emailMessage: '잘못된 이메일 주소입니다',
    passwordMessage: '대문자를 포함하여 8자이상 입력하세요',
    confirmpasswordMessage: '비밀번호가 일치하지 않습니다',
    phoneMessage: '11자리 숫자여야 합니다',
    addressMessage: '주소를 한글로 입력하세요',
  });

  const { password } = inputs;

  const navigate = useNavigate();

  const onClick = () => {
    fetch('http://10.58.52.117:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'user is created') {
          alert('성공');
          navigate('/login');
        } else {
          alert('실패');
        }
      });
  };

  const onChange = e => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));

    if (name === 'name') {
      nameValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '잘못된 이름입니다',
          }));
    } else if (name === 'email') {
      emailValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '잘못된 이메일 주소입니다',
          }));
    } else if (name === 'password') {
      passwordValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '대문자를 포함하여 8자이상 입력하세요',
          }));
    } else if (name === 'confirmpassword') {
      confirmpasswordValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '비밀번호가 일치하지 않습니다',
          }));
    } else if (name === 'phone') {
      phoneValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '11자리 숫자여야 합니다',
          }));
    } else if (name === 'address') {
      addressValidation(value)
        ? setErrorMessages(prev => ({ ...prev, [name + 'Message']: '' }))
        : setErrorMessages(prev => ({
            ...prev,
            [name + 'Message']: '주소를 한글로 입력하세요',
          }));
    }
  };

  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

  useEffect(() => {
    setIsErrorMessageVisible(true);
  }, []);

  const AllValidation = ([name]) => {};

  const nameValidation = name => {
    return /^[가-힣]{2,4}$/.test(name);
  };
  const emailValidation = email => {
    return /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/.test(email);
  };
  const passwordValidation = password => {
    return /^(?=.*[A-Z!@#$%^&*]).{8,}$/.test(password);
  };
  const confirmpasswordValidation = confirmpassword => {
    return password === confirmpassword;
  };
  const phoneValidation = phone => {
    return /^[0-9]{3}[0-9]{4}[0-9]{4}$/.test(phone);
  };
  const addressValidation = address => {
    return /^[가-힣 ]+$/.test(address);
  };

  return (
    <main className="signup">
      <img
        className="gron-logo"
        src="/images/Login/gron-logo.png"
        alt="gronLogo"
      />
      {USER_INFO_INPUTS.map(input => (
        <React.Fragment key={input.id}>
          <input
            className="user-input"
            name={input.id}
            placeholder={input.placeholder}
            onChange={onChange}
            value={inputs[input.id]}
          />
          {isErrorMessageVisible && (
            <p className="error-messages-p">
              {errorMessages[input.id + 'Message']}
            </p>
          )}
        </React.Fragment>
      ))}
      <div className="privacy-agreement-input">
        <input className="privacy-agreement-checkbox" type="checkBox" />
        <label>grön의 개인정보 처리방침 및 이용약관에 동의합니다.</label>
      </div>
      <button className="signup-btn" onClick={onClick}>
        계정 만들기
      </button>
    </main>
  );
};
export default Signup;

const USER_INFO_INPUTS = [
  { id: 'name', placeholder: '이름' },
  { id: 'email', placeholder: '이메일' },
  { id: 'password', placeholder: '비밀번호' },
  { id: 'confirmpassword', placeholder: '비밀번호 확인' },
  { id: 'phone', placeholder: '휴대폰 번호' },
  { id: 'address', placeholder: '주소' },
];
