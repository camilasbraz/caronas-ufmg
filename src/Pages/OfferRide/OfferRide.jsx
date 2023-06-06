import { React, useState } from "react";
import {
  Select,
  Button,
  Form,
  DatePicker,
  InputNumber,
  TimePicker,
  Modal,
  Radio,
} from "antd";
import { createRide } from "../../utils/db";
import { useAuth } from "../../utils/AuthProvider";
import { useNavigate } from "react-router-dom";
import { regions } from "../../utils/variables";

import dayjs from "dayjs";

const disabledDate = (current) => {
  // Can not select days before today
  const day_aux = dayjs();
  const day = day_aux.subtract(1, "day");
  return current < day;
};

const disabledTime = (current) => {
  let now_aux = dayjs();
  const now = now_aux.format("HH:mm");
  console.log(now);
  // Can not select days before today and today
  return current && current < now;
};

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16,
  },
};
const { Option } = Select;

const OfferRide = () => {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const [confirmLoading] = useState(false);
  const [modalText] = useState(
    "Carona cadastrada! Você será redirecionado para a página inicial"
  );
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async () => {
    navigate(`/Home`);
  };

  const createNew = async (fieldsValue) => {
    const ride = {
      owner: {
        name: user.name,
        phone: user.phone,
      },
      from: fieldsValue.type === "ida" ? fieldsValue.region : "UFMG",
      to: fieldsValue.type === "ida" ? "UFMG" : fieldsValue.region,
      time: new Date(
        fieldsValue.time_data.year(),
        fieldsValue.time_data.month(),
        fieldsValue.time_data.date(),
        fieldsValue.time_horario.hour(),
        fieldsValue.time_horario.minute()
      ),
      seats: fieldsValue.seats,
    };
    console.log(ride);
    try {
      await createRide(ride);
      showModal();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === "userForm") {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue("users") || [];
            basicForm.setFieldsValue({
              users: [...users, values],
            });
            setOpen(false);
          }
        }}
      >
        <Form {...layout} name="basicForm" onFinish={createNew}>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="type"
            label="Tipo de carona"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Selecione o tipo de carona!",
              },
            ]}
          >
            <Radio.Group>
              <Radio.Button value="ida">Ida</Radio.Button>
              <Radio.Button value="volta">Volta</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="region"
            label="Região"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Selecione a região!",
              },
            ]}
          >
            <Select placeholder="Selecione a região">
              {regions.map((region) => {
                return <Option value={region.value}>{region.name}</Option>;
              })}
            </Select>
          </Form.Item>

          <Form.Item
            name="time_data"
            label="Data"
            rules={[
              {
                required: true,
                type: "object",
                message: "Selecione a data!",
              },
            ]}
          >
            <DatePicker
              disabledDate={disabledDate}
              style={{
                width: "100%",
              }}
              placeholder="Selecione a data"
              format="YYYY-MM-DD"
            />
          </Form.Item>
          <Form.Item
            name="time_horario"
            label="Horário"
            rules={[
              {
                required: true,
                type: "object",
                message: "Selecione o horário!",
              },
            ]}
          >
            <TimePicker
              disabledTime={disabledTime}
              showTime={{
                defaultValue: dayjs(),
              }}
              style={{
                width: "100%",
              }}
              placeholder="Selecione o horário"
              format="HH:mm"
            />
          </Form.Item>
          <Form.Item
            style={{
              width: "100%",
            }}
            name="seats"
            label="Vagas"
            rules={[
              {
                required: true,
                message:
                  "Selecione a quantidade de vagas disponíveis! O valor deve estar entre 1 e 4",
              },
            ]}
          >
            <InputNumber
              min={1}
              max={4}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary">
              Cadastrar carona
            </Button>
          </Form.Item>
          <Modal
            title="Ótimo!"
            open={open}
            cancelButtonProps={{ null: true }}
            footer={[
              <Button key="submit" type="primary" onClick={handleOk}>
                Ok
              </Button>,
            ]}
            confirmLoading={confirmLoading}
          >
            <p>{modalText}</p>
          </Modal>
        </Form>
      </Form.Provider>
    </div>
  );
};

export default OfferRide;
