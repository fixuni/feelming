import React, { useState, useCallback } from 'react';
import { Button, Input, Form } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import {useInput } from '../pages/signup';
import { LOG_IN_REQUEST } from '../reducers/user';

const LoginError = styled.div`
    color : red;
`;

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { isLoggingIn, logInErrorReason } = useSelector( state => state.user);
    const dispatch = useDispatch();


    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                userId : id,
                password,
            },
        });
    }, [id, password] );


    return (
        <Form onSubmit={ onSubmitForm} >
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <LoginError>{logInErrorReason}</LoginError>
            <div>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    );
};

export default LoginForm;