interface IUserIconProps {
  icon: string;
  score: number;
}

const UserIcon: React.FC<IUserIconProps> = ({ icon, score }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={icon}
        alt="User Icon"
        style={{
          height: 150,
          width: 150,
          borderRadius: "100%",
          border: "5px solid #A959F5",
        }}
      />
      <div
        style={{
          backgroundColor: "#A959F5",
          width: 40,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "100%",
          marginTop: "-25px",
        }}
      >
        <h2 style={{ color: "white" }}>{score}</h2>
      </div>
    </div>
  );
};

export default UserIcon;
