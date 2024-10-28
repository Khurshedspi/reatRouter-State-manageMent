import { LineChart as LChart, XAxis, YAxis, Line } from "recharts";

const LineChart = () => {
    const studentMarks = [
        { id: 1, name: "Student 1", marks: { math: 85, science: 78, english: 82 } },
        { id: 2, name: "Student 2", marks: { math: 78, science: 84, english: 76 } },
        { id: 3, name: "Student 3", marks: { math: 92, science: 88, english: 91 } },
        { id: 4, name: "Student 4", marks: { math: 74, science: 70, english: 79 } },
        { id: 5, name: "Student 5", marks: { math: 88, science: 92, english: 85 } },
        { id: 6, name: "Student 6", marks: { math: 95, science: 89, english: 94 } },
        { id: 7, name: "Student 7", marks: { math: 81, science: 75, english: 78 } },
        { id: 8, name: "Student 8", marks: { math: 69, science: 72, english: 70 } },
        { id: 9, name: "Student 9", marks: { math: 90, science: 86, english: 89 } },
        { id: 10, name: "Student 10", marks: { math: 76, science: 79, english: 77 } }
      ];
      

  return (
    <div>
      <div className="bg-gray-200">
        <LChart width={800} height={400} data={studentMarks}>
            <XAxis dataKey="name"/>
            <YAxis/>
          <Line dataKey={`marks.math`} stroke="red" />
          <Line dataKey={`marks.science`} stroke="green" />
          <Line dataKey={`marks.english`} stroke="blue" />
        </LChart>
      </div>
    </div>
  );
};

export default LineChart;
