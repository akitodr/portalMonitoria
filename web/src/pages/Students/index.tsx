import React, { useState, useEffect } from 'react';

import { Upload, message, Button, Table, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile, RcFile } from 'antd/lib/upload/interface';
import { MdEdit } from 'react-icons/md';

import { TablePaginationConfig } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import StudentService from '../../services/student.service';

import DashboardLayout from '../../layouts/DashboardLayout';

import { TableItem, ActionItem } from './styles';

const Students: React.FC = () => {
  const columns = [
    {
      title: 'CPF',
      dataIndex: 'cpf',
    },
    {
      title: 'Matrícula',
      dataIndex: 'registration',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
    },
    {
      title: '',
      dataIndex: 'icon',
    },
  ];

  interface Student {
    id: number;
    name: string;
    cpf: string;
    registration: string;
    email: string;
  }

  const [file, setFile] = useState<RcFile>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [students, setStudents] = useState<Student[]>();
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>();
  const [perPage, setPerPage] = useState<number>(10);

  useEffect(() => {
    StudentService.get(page, perPage, searchTerm).then((response) => {
      setStudents(response.data.data);
      setPage(response.data.meta.current_page);
      setTotalPages(response.data.meta.total);
    });
  }, [page, searchTerm, perPage]);

  const { Search } = Input;

  const props = {
    name: 'file',
    accept: '.xls,.xlsx,.xlsm,.xlsb,.xltx',
    beforeUpload: (f: RcFile) => {
      setFile(f);
      return false;
    },
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: UploadChangeParam<UploadFile<any>>) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} carregado com sucesso!`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} falhou ao carregar.`);
      }
    },
  };

  return (
    <DashboardLayout>
      <ActionItem>
        <Search
          placeholder="Pesquisar..."
          onSearch={(value) => setSearchTerm(value)}
          style={{ width: 350 }}
        />

        <div className="buttons">
          <Link to="/students/form">
            <Button type="primary" className="newButton">
              Novo
            </Button>
          </Link>
          <Button type="primary" danger className="deleteButton">
            Excluir
          </Button>
          <Upload {...props} style={{ background: '#000' }}>
            <Button type="primary" className="uploadButton">
              <UploadOutlined /> Importar
            </Button>
          </Upload>
        </div>
      </ActionItem>
      {/* <Upload
        beforeUpload={(f) => {
          setFile(f);
          return false;
        }}
        directory
      >
        <Button>
          <UploadOutlined /> Upload Directory
        </Button>
      </Upload> */}
      <TableItem>
        <Table
          columns={columns}
          dataSource={students?.map((_) => ({
            ..._,
            icon: (
              <Link to="/students/form">
                <MdEdit size={18} />
              </Link>
            ),
          }))}
          size="middle"
          pagination={{ current: page, pageSize: perPage, total: totalPages }}
          onChange={(pagination: TablePaginationConfig) => {
            setPage(Number(pagination.current));
            setPerPage(Number(pagination.pageSize));
          }}
        />
      </TableItem>
    </DashboardLayout>
  );
};

export default Students;
