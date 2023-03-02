import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { SkillMeter, UserIcon } from "../components";

import type { User } from "../types/user";

const Home = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetch(`/api/users/123`)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else {
            setError(true);
            return;
          }
        })
        .then((data) => {
          setUser(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const handleRende = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>Failed to Fetch</h1>;
    }

    if (user) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <UserIcon icon={user.icon} score={user.score} />
            <h1 style={{ fontWeight: "bold" }}>{user.name}</h1>
            <h3>{user.role}</h3>
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>Top Hard Skills</h3>
              <h3 style={{ fontWeight: "bold" }}>Match %</h3>
            </div>
            {user.hardSkills.map(({ percentage, skill }, index) => (
              <SkillMeter key={index} percentage={percentage} skill={skill} />
            ))}
          </div>
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3 style={{ fontWeight: "bold" }}>Top Soft Skills</h3>
              <h3 style={{ fontWeight: "bold" }}>Match %</h3>
            </div>
            {user.softSkills.map(({ percentage, skill }, index) => (
              <SkillMeter key={index} percentage={percentage} skill={skill} />
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: 450,
          boxShadow: "10px 10px 30px #b8b8b8",
          display: "flex",
          justifyContent: "center",
          borderRadius: 5,
          height: 915,
          padding: 20,
        }}
      >
        {handleRende()}
      </div>
    </div>
  );
};

export default Home;
