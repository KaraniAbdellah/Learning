// Hooks using Typescript

import { useState } from "react";

enum AdminsName {
  ahmed = "ahmed",
  abdellah = "abdellah",
}

interface AdminType {
  name: AdminsName;
  age: number;
  isMarried: boolean;
}
const Admin = () => {
  const [admin, setAdmin] = useState<AdminType>({
    name: AdminsName.abdellah,
    age: 30,
    isMarried: false,
  });
  const [isShowInfo, setIsShowInfo] = useState<boolean | null>(false);
  const [message, setMessage] = useState<string | null>();
  return (
    <div>
      {isShowInfo ? (
        <p>
          name: {admin.name}, age: {admin.age}, isMarried: {admin.isMarried}
        </p>
      ) : (
        <div>
          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
          />
          <p>{message}</p>
        </div>
      )}
      <br />
      <br />
      <button onClick={() => setIsShowInfo(() => !isShowInfo)}>
        Show/Hide
      </button>
    </div>
  );
};

export default Admin;
