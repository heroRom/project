import axios from "axios"

// const URL = process.env.PROJECT_API_URL;


// 로그인
export const logInApi = async (data: any) => {
    
    const response = await axios.post("http://localhost:8888/api/auth/logIn", data).catch((error) => null);
    // const response = await axios.post("http://192.168.10.93:8888/api/auth/logIn", data).catch((error) => null);
    if (!response) return null;

    const result = response.data;
    return result;
}

// 회원가입
export const signUpApi = async (data: any) => {
    
    const response = await axios.post("http://localhost:8888/api/auth/signUP", data).catch((error) => null);
    // const response = await axios.post("http://192.168.10.93:8888/api/auth/signUP", data).catch((error) => null);
    if (!response) return null;

    const result = response.data;
    return result;
}

// 게시판
export const boardListApi = async (data: any) => {
    
    const response = await axios.get("http://localhost:8888/api/auth/board", data).catch((error) => null);
    // const response = await axios.get("http://192.168.10.93:8888/api/auth/board", data).catch((error) => null);
    if (!response) return null; 

    const result = response.data;
    return result;
}