import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";

const Card = styled.div`
  flex: 1;
  min-width: 400px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 900px) {
    min-width: 280px;
    padding: 16px;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 12px;
`;
const Row = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const WorkoutsStats = ({ barData, pieData }) => (
  <Card>
    <Title>Weekly Overview</Title>
    <Row>
      <BarChart
        xAxis={[
          { scaleType: "band", data: barData?.weeks || [] },
        ]}
        series={[{ data: barData?.caloriesBurned || [] }]}
        height={300}
        width={400}
      />
      <PieChart
        series={[
          {
            data: pieData || [],
            innerRadius: 30,
            outerRadius: 120,
            paddingAngle: 5,
            cornerRadius: 5,
          },
        ]}
        height={300}
        width={300}
      />
    </Row>
  </Card>
);

export default WorkoutsStats;
