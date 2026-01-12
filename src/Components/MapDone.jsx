import WorldMap from "react-svg-worldmap";

export default function MapDone() {
  const data = [
    { country: "us", value: 100 },
    { country: "in", value: 80 },
    { country: "cn", value: 90 },
    { country: "gb", value: 70 },
  ];

  return (
    <div className="w-full h-96 bg-white p-4">
      <WorldMap
        color="#3b82f6"
        value-suffix="users"
        size="responsive"
        data={data}
      />
    </div>
  );
}