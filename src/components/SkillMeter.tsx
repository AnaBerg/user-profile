interface ISkillMeterProps {
  skill: string;
  percentage: number;
}

const SkillMeter: React.FC<ISkillMeterProps> = ({ skill, percentage }) => {
  return (
    <div style={{ margin: "15px 0", width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{skill}</h3>
        <h3>{percentage}%</h3>
      </div>
      <div style={{ display: "flex" }}>
        {percentage === 0 || (
          <div
            data-testid="purple-percentage-bar"
            style={{
              height: 10,
              width: `${percentage}%`,
              backgroundColor: "#A959F5",
              borderRadius: percentage === 100 ? 20 : "20px 0 0 20px",
            }}
          />
        )}
        {percentage === 100 || (
          <div
            data-testid="grey-percentage-bar"
            style={{
              height: 10,
              width: `calc(100% - ${percentage}%)`,
              backgroundColor: "grey",
              borderRadius: percentage === 0 ? 20 : "0 20px 20px 0",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SkillMeter;
