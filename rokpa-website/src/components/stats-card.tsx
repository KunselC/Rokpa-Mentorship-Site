import { Typography, Card } from "@material-tailwind/react";

interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  return (
    <Card color="white" shadow={true} className="p-6 rounded-lg">
      <Typography variant="h2" className="font-bold text-blue-gray-900">
        {count}
      </Typography>
      <Typography variant="h6" className="mt-2 font-medium text-blue-gray-700">
        {title}
      </Typography>
    </Card>
  );
}

export default StatsCard;
