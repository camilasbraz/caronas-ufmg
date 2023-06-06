import React from "react";
import { useAuth } from "../../utils/AuthProvider";
import { Button, Form, Input } from 'antd';

const Login = () => {
  const {onLogin} =  useAuth();

  const onFinish = (values) => {
    onLogin({
      name: values.nome, 
      phone: values.telefone,
      email: values.email,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo);
  };
  
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
  
      <Form.Item
        label="Nome"
        name="nome"
        rules={[
          {
            required: true,
            message: 'Item obrigatório',
          },{
            pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
            message: 'Insira um nome válido!'
          },
        ]}
      >
        <Input placeholder="Seu Nome Completo"/>
      </Form.Item>
  
      <Form.Item
        label="Telefone"
        name="telefone"
        rules={[
          {
            required: true,
            message: 'Item obrigatório!'
          },{
            pattern: /\(?\d{2}\)?\s?\d{4,5}-?\d{4}/g,
            message: 'Insira um telefone válido!'
          }
        ]}
      >
        <Input placeholder="(XX) XXXXX-XXXX"/>
      </Form.Item>
  
      <Form.Item
        label="E-mail UFMG"
        name="email"
        rules={[
          {
            required: true,
            message: 'Item obrigatório!',
          },{
            pattern: '^[a-z0-9](\.?[a-z0-9]){1,}@ufmg\.br$',
            message: 'Insira um email válido!',
          }
        ]}
        
      >

        <Input placeholder="exemplo@ufmg.br"/>
      </Form.Item>
  
      <Form.Item
        wrapperCol={{
          offset: 12,
          span: 6,
        }}
      >
        <Button onclick={onFinish} type="primary" htmlType="submit">
          Autenticar
        </Button>
      </Form.Item>
    </Form>
    
  );
}

export default Login;
