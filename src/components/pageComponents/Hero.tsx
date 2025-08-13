import React from "react";
import { CircleDollarSign } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { type JSX } from "react";

const Hero = () => {
  const chartData = [
    { month: "Jan", value1: 86, value2: 120 },
    { month: "Feb", value1: 35, value2: 96 },
    { month: "Mar", value1: 37, value2: 100 },
    { month: "Apr", value1: 73, value2: 130 },
    { month: "May", value1: 29, value2: 50 },
    { month: "Jun", value1: 24, value2: 80 },
    { month: "Jul", value1: 74, value2: 140 },
  ];

  const chartConfig = {
  month: {
    label: "month",
    color: "#9810FA",
  },
} satisfies ChartConfig;

  function CustomBarWithAlwaysVisibleLabel(props: any) {
    const { fill, x, y, width, height, payload } = props;

    if (payload.month === "Apr") {
      return (
        <g>
          {/* The bar */}

          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
            opacity={0.5}
            rx={5}
            ry={5}
          />

          {/* The always-visible label */}

          <foreignObject x={x + 8} y={y - 12} width={width + 75} height={100}>
            <div
              style={{
                background: "white",
                color: "black",
                fontSize: "12px",
                padding: "4px 6px",
                borderRadius: "4px",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.3)",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                border: "1px solid gray",
                overflow: "visible",
                flexDirection: "column",
                gap: "0.2rem",
                position: "relative",
                zIndex: "20",
              }}
            >
              <h3 className="font-semibold ">April</h3>
              <p>
                Income <span className="text-violet-500 font-bold">$5400</span>
              </p>
              <p>
                Expense <span className="text-violet-500 font-bold">$3400</span>
              </p>
            </div>
          </foreignObject>
        </g>
      );
    }

    // Default bars

    return (
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        opacity={0.5}
        rx={5}
        ry={5}
      />
    );
  }

  return (
      <section className="relative md:bg-purple-200 w-full md:w-3/7 z-10 flex flex-col-reverse md:flex-col justify-end md:justify-between md:min-h-screen h-fit pb-4 items-center">
        <div className="bg-purple-600 w-40 h-40 rounded-3xl absolute -top-8 -left-2 z-0 shadow-3xl hidden md:block shadow-purple-600"></div>
        <div className="bg-none w-50 h-50  hidden md:block border-15 border-purple-600 shadow-3xl shadow-purple-600 absolute top-1/3 -right-12 rounded-3xl">
          {" "}
        </div>
        <div className="bg-purple-600 w-40 h-40 shadow-3xl  hidden md:block shadow-purple-600 rounded-3xl absolute -bottom-8 -left-2 z-0"></div>
        <div className="w-9/10 md:w-4/5 z-20 flex flex-col items-center  mt-6">
          <div className="h-20  shadow-sm flex items-center w-full bg-white rounded-lg px-4 gap-2">
            <CircleDollarSign className="h-14 rounded-full w-14 bg-yellow-500 text-white " />
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">
                Track your Income & Expenses
              </p>
              <p>$430,000</p>
            </div>
          </div>
        </div>
        <Card className="z-10 relative  w-9/10 md:w-4/5 mx-auto pr-3 mb-6 rounded-3xl">
          <CardHeader className="flex justify-between ">
            <div className="flex flex-col gap-1">
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>1st Jan to 21st July</CardDescription>
            </div>
            <Button className=" ">View More</Button>
          </CardHeader>
          <ChartContainer
            config={chartConfig}
            className="relative min-h-[150px]  w-full z-10 m-auto "
          >
            <BarChart accessibilityLayer data={chartData} barGap={-30}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                className="font-bold 
                "
                tick={{ fill: "#000000", fontSize: 14 }}
              />
              <YAxis className="font-bold" tickLine={false} axisLine={false} />
              <Bar dataKey="value1" fill="#C5B5EF" radius={5} barSize={30} />
              <Bar
                dataKey="value2"
                fill="#9810FA"
                radius={5}
                barSize={30}
                opacity={0.5}
                shape={<CustomBarWithAlwaysVisibleLabel/>}
              />
            </BarChart>
          </ChartContainer>
        </Card>
      </section>
  )
};

export default Hero;
