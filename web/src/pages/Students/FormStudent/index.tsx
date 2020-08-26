import React from 'react';
import { Form, Input, Select, Button, DatePicker } from 'antd';
import moment from 'moment';

import { Link } from 'react-router-dom';
import DashboardLayout from '../../../layouts/DashboardLayout';
import { Container } from './styles';

const FormStudent: React.FC = () => {
  const { Option } = Select;

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
  };

  return (
    <DashboardLayout>
      <Container>
        <h2>Novo Cadastro</h2>
        <Form
          layout="vertical"
          name="nest-messages"
          onFinish={(values) => console.log(values)}
          validateMessages={validateMessages}
        >
          <div className="user-name">
            <Form.Item
              name={['user', 'name']}
              label="Nome"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'last-name']}
              label="Sobrenome"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="user-information">
            <Form.Item
              name={['user', 'registration']}
              label="Matrícula"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'cpf']}
              label="CPF"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'birth-date']}
              label="Data de Nascimento"
              rules={[{ required: true }]}
            >
              <DatePicker
                defaultValue={moment('01/01/2015', 'DD/MM/YYYY')}
                format="DD/MM/YYYY"
                style={{ width: '100%' }}
              />
            </Form.Item>
            <Form.Item
              name={['user', 'phone']}
              label="Telefone"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="user-email">
            <Form.Item
              name={['user', 'first-email']}
              label="E-mail"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['user', 'second-email']}
              label="E-mail Institucional"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="user-school-course">
            <Form.Item
              name={['user', 'school']}
              label="Escola"
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                placeholder="Selecione uma Escola"
                optionFilterProp="children"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={['user', 'course']}
              label="Curso"
              rules={[{ required: true }]}
            >
              <Select
                showSearch
                placeholder="Selecione uma Escola"
                optionFilterProp="children"
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
          </div>
          <div className="buttons-field">
            <Link to="/students">
              <Button type="primary" danger htmlType="submit">
                Cancelar
              </Button>
            </Link>
            <Button type="primary" htmlType="submit">
              Salvar
            </Button>
          </div>
        </Form>
      </Container>
    </DashboardLayout>
  );
};

export default FormStudent;
