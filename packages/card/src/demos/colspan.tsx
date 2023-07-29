import { ProCard } from '@ant-design/pro-components';

export default () => {
  return (
    <>
      <ProCard direction="column" ghost gutter={[0, 8]}>
        <ProCard layout="center" bordered>
          colSpan - 24
        </ProCard>
        <ProCard
          colSpan={{
            xs: 24,
            sm: 12,
            md: 8,
            lg: 6,
          }}
          layout="center"
          bordered
        >
          colSpan - 12
        </ProCard>
        <ProCard
          colSpan={{
            xs: 24,
            sm: 12,
            md: 8,
            lg: 6,
          }}
          layout="center"
          bordered
        >
          colSpan - 8
        </ProCard>
        <ProCard colSpan={0} layout="center" bordered>
          colSpan - 0
        </ProCard>
      </ProCard>
      <ProCard gutter={8} title="24栅格" style={{ marginBlockStart: 8 }}>
        <ProCard colSpan={12} layout="center" bordered>
          colSpan-12
        </ProCard>
        <ProCard colSpan={6} layout="center" bordered>
          colSpan-6
        </ProCard>
        <ProCard colSpan={6} layout="center" bordered>
          colSpan-6
        </ProCard>
      </ProCard>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard colSpan="200px" layout="center" bordered>
          colSpan - 200px
        </ProCard>
        <ProCard layout="center" bordered>
          Auto
        </ProCard>
      </ProCard>
      <ProCard style={{ marginBlockStart: 8 }} gutter={8} ghost>
        <ProCard bordered layout="center">
          Auto
        </ProCard>
        <ProCard colSpan="30%" bordered>
          colSpan - 30%
        </ProCard>
      </ProCard>
    </>
  );
};
