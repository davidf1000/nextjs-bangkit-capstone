export interface ChartDoughnutProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      label: string;
      hoverOffset: number;
    };
  };
}

export interface ChartLineProps {
  data: {
    labels: string[];
    datasets: {
      label: number;
      backgroundColor: string;
      borderColor: string;
      data: number[];
      fill: boolean;
    };
  };
}

export interface StatusCardProps {
  value: number;
  desc: string;
  icon: string;
}
