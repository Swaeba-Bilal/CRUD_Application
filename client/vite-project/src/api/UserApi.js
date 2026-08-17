const API_URL = `${import.meta.env.VITE_API_URL}/api/v2/users`;;

// get users with pagination
export const getUsers = async(page =1, limit =5)=>{
    const res = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
    if(!res.ok) throw new Error("Failed to fetch users");
    return res.json();
};

//search users
export const searchUsers = async(term="", page=1, limit=5)=>{
    const res = await fetch(
        `${API_URL}/search/${encodeURIComponent(term)}?page=${page}&limit=${limit}`
    );
    if(!res.ok) throw new Error("Failed to search users");
    return res.json();
};

//Get stats 
export const getStats = async()=>{
    const res = await fetch(`${API_URL}/stats`);
    if(!res.ok) throw new Error("Failed to fetch stats");
    return res.json();
};

//Add mew users
export const addUser = async(data)=>{
    const res= await fetch(API_URL,{
        method: "POST",
        headers: { "content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if(!res.ok) throw new Error("Failed to add user");
    return res.json();
};

// update existing user
export const updateUser = async(id, data)=>{
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(data),
    });
    if(!res.ok) throw new Error("Failed to update user");
    return res.json();
};
//Delete User
 export const deleteUser = async(id) =>{
    const res = await fetch(`${API_URL}/${id}`, {method: "DELETE"});
    if(!res.ok) throw new Error("Failed to delete user");
    return res.json();

 }