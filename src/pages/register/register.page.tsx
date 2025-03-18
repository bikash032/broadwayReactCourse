// import "../../assets/css/main.css";
import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import {PythonOutlined} from '@ant-design/icons'
import { Button, Divider, Flex, Radio, Typography } from 'antd';
import type { ConfigProviderProps } from 'antd';


type SizeType = ConfigProviderProps['componentSize'];

const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
  return (
    <>
    <div className=' m-20 p-20'>
        <Typography className='text-blue-950!'>
            <div className="w-full flex justify-between items-center text-black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur in architecto quos voluptate delectus porro quod officiis facere corrupti natus, harum iure ullam iusto, unde laudantium nobis rem eos magni.
        <PythonOutlined className="text-9xl text-red-500! " />
            </div>
            <Divider></Divider>
        </Typography>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <Flex gap="small" align="flex-start" vertical>
        <Flex gap="small" wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
        </Flex>
        <Button type="link" size={size}>
          Link
        </Button>
        <Flex gap="small" wrap>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </Flex>
      </Flex>
      </div>
    </>
  );
};

export default App;