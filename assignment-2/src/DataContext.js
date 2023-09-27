import React, { createContext, useContext, useState } from "react";

// DATA Context
const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Deep Learning - Cuộc Cách Mạng Học Sâu",
      author: "Terrence J. Sejnowski",
      topic: "Trí tuệ nhân tạo",
    },
    {
      id: 2,
      name: "Gián Điệp Mạng",
      author: "Information Security",
      topic: "An toàn thông tin mạng",
    },
    {
      id: 3,
      name: "Cuộc Chiến Công Nghệ Số",
      author: "Charles Arthur",
      topic: "Kỹ thuật số",
    },
    {
      id: 4,
      name: "Kỷ Nguyên Trí Tuệ Nhân Tạo",
      author: "Tác giả 4",
      topic: "Trí tuệ nhân tạo",
    },
    {
      id: 5,
      name: "Ứng Dụng Trí Tuệ Nhân Tạo Để Dẫn Đầu",
      author: "Tác giả 5",
      topic: "An toàn thông tin mạng",
    },
    {
      id: 6,
      name: "LIFE 3.0 - LOÀI NGƯỜI TRONG KỶ NGUYÊN TRÍ TUỆ NHÂN TẠO ",
      author: "Tác giả 6",
      topic: "Trí tuệ nhân tạo",
    },
    {
      id: 7,
      name: "TRÍ TUỆ GIẢ TẠO",
      author: "Tác giả 7",
      topic: "An toàn thông tin mạng",
    },
  ]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

//THEME Context
export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
